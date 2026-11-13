// --- 1. THE DATABASE ---
const top75Tracks = [
    { file: 'take_my_breath.mp3', id: 'take_my_breath', era: 'dawn' },
    { file: 'sacrifice.mp3', id: 'sacrifice', era: 'dawn' },
    { file: 'out_of_time.mp3', id: 'out_of_time', era: 'dawn' },
    { file: 'less_than_zero.mp3', id: 'less_than_zero', era: 'dawn' },
    { file: 'gasoline.mp3', id: 'gasoline', era: 'dawn' },
    { file: 'how_do_i_make_you_love_me.mp3', id: 'how_do_i_make_you_love_me', era: 'dawn' },
    { file: 'is_there_someone_else.mp3', id: 'is_there_someone_else', era: 'dawn' },
    { file: 'starry_eyes.mp3', id: 'starry_eyes', era: 'dawn' },
    { file: 'best_friends.mp3', id: 'best_friends', era: 'dawn' },
    { file: 'dont_break_my_heart.mp3', id: 'dont_break_my_heart', era: 'dawn' },
    { file: 'dancing_in_the_flames.mp3', id: 'dancing_in_the_flames', era: 'dawn' },
    { file: 'wake_me_up.mp3', id: 'wake_me_up', era: 'dawn' },
    { file: 'blinding_lights.mp3', id: 'blinding_lights', era: 'after_hours' },
    { file: 'save_your_tears.mp3', id: 'save_your_tears', era: 'after_hours' },
    { file: 'heartless.mp3', id: 'heartless', era: 'after_hours' },
    { file: 'in_your_eyes.mp3', id: 'in_your_eyes', era: 'after_hours' },
    { file: 'after_hours.mp3', id: 'after_hours', era: 'after_hours' },
    { file: 'faith.mp3', id: 'faith', era: 'after_hours' },
    { file: 'alone_again.mp3', id: 'alone_again', era: 'after_hours' },
    { file: 'hardest_to_love.mp3', id: 'hardest_to_love', era: 'after_hours' },
    { file: 'scared_to_live.mp3', id: 'scared_to_live', era: 'after_hours' },
    { file: 'snowchild.mp3', id: 'snowchild', era: 'after_hours' },
    { file: 'escape_from_la.mp3', id: 'escape_from_la', era: 'after_hours' },
    { file: 'starboy.mp3', id: 'starboy', era: 'starboy' },
    { file: 'i_feel_it_coming.mp3', id: 'i_feel_it_coming', era: 'starboy' },
    { file: 'party_monster.mp3', id: 'party_monster', era: 'starboy' },
    { file: 'reminder.mp3', id: 'reminder', era: 'starboy' },
    { file: 'die_for_you.mp3', id: 'die_for_you', era: 'starboy' },
    { file: 'false_alarm.mp3', id: 'false_alarm', era: 'starboy' },
    { file: 'secrets.mp3', id: 'secrets', era: 'starboy' },
    { file: 'rockin.mp3', id: 'rockin', era: 'starboy' },
    { file: 'a_lonely_night.mp3', id: 'a_lonely_night', era: 'starboy' },
    { file: 'the_hills.mp3', id: 'the_hills', era: 'classic' },
    { file: 'cant_feel_my_face.mp3', id: 'cant_feel_my_face', era: 'classic' },
    { file: 'often.mp3', id: 'often', era: 'classic' },
    { file: 'earned_it.mp3', id: 'earned_it', era: 'classic' },
    { file: 'in_the_night.mp3', id: 'in_the_night', era: 'classic' },
    { file: 'acquainted.mp3', id: 'acquainted', era: 'classic' },
    { file: 'tell_your_friends.mp3', id: 'tell_your_friends', era: 'classic' },
    { file: 'house_of_balloons.mp3', id: 'house_of_balloons', era: 'classic' },
    { file: 'wicked_games.mp3', id: 'wicked_games', era: 'classic' },
    { file: 'the_morning.mp3', id: 'the_morning', era: 'classic' },
    { file: 'high_for_this.mp3', id: 'high_for_this', era: 'classic' },
    { file: 'twenty_eight.mp3', id: 'twenty_eight', era: 'classic' },
    { file: 'the_zone.mp3', id: 'the_zone', era: 'classic' },
    { file: 'kiss_land.mp3', id: 'kiss_land', era: 'classic' },
    { file: 'wanderlust.mp3', id: 'wanderlust', era: 'classic' },
    { file: 'tears_in_the_rain.mp3', id: 'tears_in_the_rain', era: 'classic' },
    { file: 'belong_to_the_world.mp3', id: 'belong_to_the_world', era: 'classic' },
    { file: 'call_out_my_name.mp3', id: 'call_out_my_name', era: 'melancholy' },
    { file: 'i_was_never_there.mp3', id: 'i_was_never_there', era: 'melancholy' },
    { file: 'wasted_times.mp3', id: 'wasted_times', era: 'melancholy' },
    { file: 'try_me.mp3', id: 'try_me', era: 'melancholy' },
    { file: 'love_me_harder.mp3', id: 'love_me_harder', era: 'collab' },
    { file: 'off_the_table.mp3', id: 'off_the_table', era: 'collab' },
    { file: 'save_your_tears_remix.mp3', id: 'save_your_tears_remix', era: 'collab' },
    { file: 'die_for_you_remix.mp3', id: 'die_for_you_remix', era: 'collab' },
    { file: 'pray_for_me.mp3', id: 'pray_for_me', era: 'collab' },
    { file: 'sidewalks.mp3', id: 'sidewalks', era: 'collab' },
    { file: 'one_right_now.mp3', id: 'one_right_now', era: 'collab' },
    { file: 'power_is_power.mp3', id: 'power_is_power', era: 'collab' },
    { file: 'creepin.mp3', id: 'creepin', era: 'collab' },
    { file: 'moth_to_a_flame.mp3', id: 'moth_to_a_flame', era: 'collab' },
    { file: 'popular.mp3', id: 'popular', era: 'collab' },
    { file: 'one_of_the_girls.mp3', id: 'one_of_the_girls', era: 'collab' },
    { file: 'lost_in_the_fire.mp3', id: 'lost_in_the_fire', era: 'collab' },
    { file: 'low_life.mp3', id: 'low_life', era: 'collab' },
    { file: 'double_fantasy.mp3', id: 'double_fantasy', era: 'collab' },
    { file: 'hurricane.mp3', id: 'hurricane', era: 'collab' },
    { file: 'timeless.mp3', id: 'timeless', era: 'collab' },
    { file: 'sao_paulo.mp3', id: 'sao_paulo', era: 'collab' },
    { file: 'k_pop.mp3', id: 'k_pop', era: 'collab' },
    { file: 'wake_up.mp3', id: 'wake_up', era: 'collab' },
    { file: 'odd_look.mp3', id: 'odd_look', era: 'collab' },
    { file: 'smile.mp3', id: 'smile', era: 'collab' }
];

const djBumpers = ['jim_generic_1.mp3', 'jim_generic_2.mp3', 'jim_generic_3.mp3'];

const eraBumpers = {
    'dawn': ['jim_dawn_1.mp3'],
    'after_hours': ['jim_vegas_1.mp3'],
    'starboy': ['jim_starboy_1.mp3'],
    'classic': ['jim_throwback_1.mp3'],
    'melancholy': ['jim_sad_1.mp3'],
    'collab': ['jim_feature_1.mp3']
};

const specialTransitions = {
    'out_of_time': 'jim_outro_3.mp3',
    'is_there_someone_else': 'live_weather_intro.mp3'
};

// --- 2. SYSTEM LOGIC & STATE ---
const BLOCK_SIZE = 3;
let currentEra = '';
let songsPlayedInEra = 0;
let isPlaying = false;
let lastMajorTimePlayed = -1; 
let currentJBTemp = 28;       
let layDownLerp = 0; 

const eraColors = {
    'dawn': '#C0C0C0',
    'after_hours': '#FF1A1A',
    'starboy': '#FF007F',
    'classic': '#00A19C',
    'melancholy': '#FF4500',
    'collab': '#FFFFFF'
};
let currentGlowColor = '#FFD700';

async function updateWeather() {
    try {
        const res = await fetch('https://api.open-meteo.com/v1/forecast?latitude=1.4927&longitude=103.7414&current_weather=true');
        const data = await res.json();
        currentJBTemp = Math.round(data.current_weather.temperature);
        console.log(`Live JB Temp updated: ${currentJBTemp}°C`);
    } catch (e) {
        console.log("Weather fetch failed, using fallback.");
    }
}
updateWeather();
setInterval(updateWeather, 1800000); 

let audioCtx;
let analyser;
const playerA = new Audio();
const playerB = new Audio();
let usePlayerA = true;

const canvas = document.getElementById('visualizer');
const ctx = canvas.getContext('2d');
const statusText = document.getElementById('status-text');
const eraText = document.getElementById('era-text');

// --- 3. INITIALIZATION & GESTURES ---
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
        playNextCycle(); 
    } else if (touchEndX > touchStartX + 50) {
        songsPlayedInEra = BLOCK_SIZE; 
        playNextCycle();
    }
});

function initAudio() {
    audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    analyser = audioCtx.createAnalyser();
    analyser.fftSize = 256;
}

// --- 4. FORZA-STYLE DJ ENGINE ---
function playNextCycle() {
    const currentHour = new Date().getHours();

    if (currentHour === 12 && lastMajorTimePlayed !== 12) {
        lastMajorTimePlayed = 12;
        const middayBumper = `jim_12pm_${currentJBTemp}C.mp3`; 
        
        playWithCrossfade(middayBumper, () => {
            playWithCrossfade('false_alarm.mp3', playNextCycle);
        });
        return; 
    }

    if (currentHour === 17 && lastMajorTimePlayed !== 17) {
        lastMajorTimePlayed = 17; 
        
        if (currentEra !== 'after_hours') {
            const eveningBumper = `jim_5pm_${currentJBTemp}C.mp3`;
            
            currentEra = 'after_hours';
            currentGlowColor = eraColors[currentEra];
            songsPlayedInEra = 0; 
            document.body.setAttribute('data-era', currentEra);
            eraText.innerText = 'AFTER HOURS';
            
            const afterHoursTracks = top75Tracks.filter(t => t.era === 'after_hours');
            const nextSong = afterHoursTracks[Math.floor(Math.random() * afterHoursTracks.length)];

            playWithCrossfade(eveningBumper, () => {
                playWithCrossfade(nextSong.file, playNextCycle);
            });
            return; 
        }
    }

    if (songsPlayedInEra >= BLOCK_SIZE || currentEra === '') {
        const allEras = ['dawn', 'after_hours', 'starboy', 'classic', 'melancholy', 'collab'];
        let newEra;
        do { newEra = allEras[Math.floor(Math.random() * allEras.length)]; } while (newEra === currentEra);
        
        currentEra = newEra;
        currentGlowColor = eraColors[currentEra]; 
        songsPlayedInEra = 0;
        
        document.body.setAttribute('data-era', currentEra);
        eraText.innerText = currentEra.replace('_', ' ');

        const eraTracks = top75Tracks.filter(t => t.era === currentEra);
        const nextSong = eraTracks[Math.floor(Math.random() * eraTracks.length)];
        const eraIntro = eraBumpers[currentEra][Math.floor(Math.random() * eraBumpers[currentEra].length)];

        songsPlayedInEra++;
        playWithCrossfade(eraIntro, () => playWithCrossfade(nextSong.file, playNextCycle));
        return;
    }

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

// --- 5. PING-PONG GAPLESS CROSSFADER ---
function playWithCrossfade(nextFilePath, callback) {
    if(audioCtx && audioCtx.state === 'suspended') audioCtx.resume();
    
    const activePlayer = usePlayerA ? playerA : playerB;
    const standbyPlayer = usePlayerA ? playerB : playerA;

    standbyPlayer.src = nextFilePath;
    standbyPlayer.volume = 0;
    standbyPlayer.crossOrigin = "anonymous";
    
    let sourceNode = audioCtx.createMediaElementSource(standbyPlayer);
    sourceNode.connect(analyser);
    analyser.connect(audioCtx.destination);
    
    standbyPlayer.play();

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

// --- DYNAMIC SCREEN SCALING ---
function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}
window.addEventListener('resize', resizeCanvas);

// --- 6. THE SORAYAMA / KVESITADZE STATUE LOOP ---
function getSorayamaWidth(t, maxWidth) {
    // Precise geometric mapping of the Sorayama robot silhouette
    // Maps a percentage (t) from 0.0 (head) to 1.0 (feet) to a width
    if (t < 0.08) return (0.15 + Math.sin(t * Math.PI / 0.08) * 0.12) * maxWidth; // Helmet Head
    if (t < 0.11) return 0.12 * maxWidth; // Neck
    if (t < 0.28) return (0.12 + Math.sin((t - 0.11) * Math.PI / 0.17) * 0.35) * maxWidth; // Shoulders & Bust
    if (t < 0.45) return (0.20 + Math.sin((t - 0.28) * Math.PI / 0.17) * 0.05) * maxWidth; // Snatched Waist
    if (t < 0.70) return (0.15 + Math.sin((t - 0.45) * Math.PI / 0.25) * 0.35) * maxWidth; // Metallic Hips & Thighs
    if (t <= 1.00) return (0.05 + Math.cos((t - 0.70) * Math.PI / 0.60) * 0.30) * maxWidth; // Calves tapering to heels
    return 0;
}

function drawVisualizer() {
    requestAnimationFrame(drawVisualizer);
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    const computedStyle = getComputedStyle(document.body);
    let renderColor = computedStyle.getPropertyValue('--glow-color').trim();
    
    // Create the highly reflective gold metallic gradient for the idle statue
    let goldGradient = ctx.createLinearGradient(canvas.width * 0.3, 0, canvas.width * 0.7, 0);
    goldGradient.addColorStop(0, '#B8860B');   // Dark gold edge
    goldGradient.addColorStop(0.5, '#FFDF00'); // Bright center highlight
    goldGradient.addColorStop(1, '#DAA520');   // Dark gold edge

    ctx.fillStyle = isPlaying ? renderColor : goldGradient;
    ctx.shadowColor = isPlaying ? renderColor : '#FFD700';
    ctx.shadowBlur = isPlaying ? 15 : 25; // Higher glow for the gold

    // The Shatter Drop Animation
    if (isPlaying && layDownLerp < 1) {
        layDownLerp += 0.02; // Smooth 50-frame drop
        if (layDownLerp > 1) layDownLerp = 1;
    }

    const bufferLength = analyser ? analyser.frequencyBinCount : 128;
    const dataArray = new Uint8Array(bufferLength);
    if (isPlaying && analyser) analyser.getByteFrequencyData(dataArray);

    const barWidth = canvas.width / bufferLength;
    const statueMaxWidth = canvas.width * 0.18; // Statue takes up 18% of screen width
    const startY = canvas.height * 0.15; // 15% padding from the top
    const statueHeight = canvas.height * 0.70; // 70% total height
    const sliceHeight = statueHeight / bufferLength;

    for (let i = 0; i < bufferLength; i++) {
        const t = i / bufferLength; 
        
        // 1. STATE ONE: The Kvesitadze / Sorayama Vertical Plates
        let plateWidth = getSorayamaWidth(t, statueMaxWidth);
        let standX = (canvas.width / 2) - (plateWidth / 2);
        let standY = startY + (i * sliceHeight);
        let standW = plateWidth;
        // Hard slice gaps: Only draw 50% of the slice height to create physical separation
        let standH = sliceHeight * 0.5; 

        // 2. STATE TWO: The Horizontal Audio Visualizer
        let audioSpike = (dataArray[i] / 255) * (canvas.height * 0.25);
        let layX = i * barWidth;
        let layY = canvas.height - audioSpike - 10;
        let layW = barWidth - 1; 
        let layH = audioSpike + 5;

        // 3. THE MORPH: Cubic Easing for a heavy, mechanical drop
        let ease = 1 - Math.pow(1 - layDownLerp, 3);

        let currentX = standX + (layX - standX) * ease;
        let currentY = standY + (layY - standY) * ease;
        let currentW = standW + (layW - standW) * ease;
        // Dissolve the Kvesitadze gap as it morphs into the solid EQ bar
        let currentH = standH + (layH - standH) * ease;

        if (currentW > 0) {
            ctx.fillRect(currentX, currentY, currentW, currentH);
        }
    }
}
