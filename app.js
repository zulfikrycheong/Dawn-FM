// --- DATABASE ---
const top75Tracks = [
    { file: 'take_my_breath.mp3', id: 'take_my_breath', era: 'dawn' },
    { file: 'sacrifice.mp3', id: 'sacrifice', era: 'dawn' },
    { file: 'blinding_lights.mp3', id: 'blinding_lights', era: 'after_hours' },
    { file: 'starboy.mp3', id: 'starboy', era: 'starboy' },
    { file: 'house_of_balloons.mp3', id: 'hob', era: 'classic' },
    { file: 'kiss_land.mp3', id: 'kiss_land', era: 'classic' },
    { file: 'call_out_my_name.mp3', id: 'comn', era: 'melancholy' },
    { file: 'creepin.mp3', id: 'creepin', era: 'collab' }
    // Drop the rest of the 75 here
];

const djBumpers = ['jim_generic_1.mp3', 'jim_generic_2.mp3', 'jim_weather.mp3'];

const eraBumpers = {
    'dawn': ['jim_dawn_1.mp3'],
    'after_hours': ['jim_vegas_1.mp3'],
    'starboy': ['jim_starboy_1.mp3'],
    'classic': ['jim_throwback_1.mp3'],
    'melancholy': ['jim_sad_1.mp3'],
    'collab': ['jim_feature_1.mp3']
};

const specialTransitions = {
    'out_of_time': 'jim_outro_3.mp3'
};

// --- SYSTEM LOGIC ---
const BLOCK_SIZE = 3;
let currentEra = '';
let songsPlayedInEra = 0;
let isPlaying = false;

// Web Audio API
let audioCtx;
let analyser;
const playerA = new Audio();
const playerB = new Audio();
let usePlayerA = true;

// UI Elements
const canvas = document.getElementById('visualizer');
const ctx = canvas.getContext('2d');
const statusText = document.getElementById('status-text');
const eraText = document.getElementById('era-text');

// --- INITIALIZATION & GESTURES ---
document.body.addEventListener('click', () => {
    if (!isPlaying) {
        initAudio();
        playNextCycle();
        isPlaying = true;
        statusText.innerText = "NOW BROADCASTING";
    }
});

let touchStartX = 0;
document.body.addEventListener('touchstart', e => touchStartX = e.changedTouches[0].screenX);
document.body.addEventListener('touchend', e => {
    if (!isPlaying) return;
    let touchEndX = e.changedTouches[0].screenX;
    if (touchEndX < touchStartX - 50) {
        // Swipe Left: Skip Track
        playNextCycle(); 
    } else if (touchEndX > touchStartX + 50) {
        // Swipe Right: Force New Era
        songsPlayedInEra = BLOCK_SIZE; 
        playNextCycle();
    }
});

function initAudio() {
    audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    analyser = audioCtx.createAnalyser();
    analyser.fftSize = 256;
    drawVisualizer();
}

// --- FORZA-STYLE DJ ENGINE ---
function playNextCycle() {
    // 1. Check for Era Shift
    if (songsPlayedInEra >= BLOCK_SIZE || currentEra === '') {
        const allEras = ['dawn', 'after_hours', 'starboy', 'classic', 'melancholy', 'collab'];
        let newEra;
        do { newEra = allEras[Math.floor(Math.random() * allEras.length)]; } while (newEra === currentEra);
        
        currentEra = newEra;
        songsPlayedInEra = 0;
        
        // Update UI
        document.body.setAttribute('data-era', currentEra);
        eraText.innerText = currentEra.replace('_', ' ');

        const eraTracks = top75Tracks.filter(t => t.era === currentEra);
        const nextSong = eraTracks[Math.floor(Math.random() * eraTracks.length)];
        const eraIntro = eraBumpers[currentEra][Math.floor(Math.random() * eraBumpers[currentEra].length)];

        songsPlayedInEra++;
        playWithCrossfade(eraIntro, () => playWithCrossfade(nextSong.file, playNextCycle));
        return;
    }

    // 2. Play within current Era
    const eraTracks = top75Tracks.filter(t => t.era === currentEra);
    const nextSong = eraTracks[Math.floor(Math.random() * eraTracks.length)];
    songsPlayedInEra++;

    if (specialTransitions[nextSong.id]) {
        playWithCrossfade(specialTransitions[nextSong.id], () => playWithCrossfade(nextSong.file, playNextCycle));
    } else if (Math.random() > 0.75) {
        const bumper = djBumpers[Math.floor(Math.random() * djBumpers.length)];
        playWithCrossfade(bumper, () => playWithCrossfade(nextSong.file, playNextCycle));
    } else {
        playWithCrossfade(nextSong.file, playNextCycle);
    }
}

// --- PING-PONG CROSSFADER ---
function playWithCrossfade(nextFilePath, callback) {
    if(audioCtx.state === 'suspended') audioCtx.resume();
    
    const activePlayer = usePlayerA ? playerA : playerB;
    const standbyPlayer = usePlayerA ? playerB : playerA;

    standbyPlayer.src = nextFilePath;
    standbyPlayer.volume = 0;
    standbyPlayer.crossOrigin = "anonymous";
    
    // Disconnect old, connect new to visualizer
    let sourceNode = audioCtx.createMediaElementSource(standbyPlayer);
    sourceNode.connect(analyser);
    analyser.connect(audioCtx.destination);
    
    standbyPlayer.play();

    // 1.5s fade
    let fadeStep = 0;
    const fadeInterval = setInterval(() => {
        fadeStep += 0.1;
        if (activePlayer.volume > 0.1) activePlayer.volume -= 0.1;
        if (standbyPlayer.volume < 0.9) standbyPlayer.volume += 0.1;

        if (fadeStep >= 1) {
            activePlayer.pause();
            activePlayer.volume = 1; 
            standbyPlayer.volume = 1;
            clearInterval(fadeInterval);
        }
    }, 150);

    standbyPlayer.onended = callback;
    usePlayerA = !usePlayerA;
}

// --- VISUALIZER LOOP ---
function drawVisualizer() {
    requestAnimationFrame(drawVisualizer);
    const bufferLength = analyser.frequencyBinCount;
    const dataArray = new Uint8Array(bufferLength);
    analyser.getByteFrequencyData(dataArray);
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Pull dynamic CSS color
    const computedStyle = getComputedStyle(document.body);
    const currentColor = computedStyle.getPropertyValue('--glow-color').trim();
    ctx.fillStyle = currentColor;
    ctx.shadowColor = currentColor;
    ctx.shadowBlur = 15;

    const barWidth = (canvas.width / bufferLength) * 2.5;
    let x = 0;
    for (let i = 0; i < bufferLength; i++) {
        let barHeight = dataArray[i] / 2;
        ctx.fillRect(x, canvas.height - barHeight, barWidth, barHeight);
        x += barWidth + 1;
    }
}
