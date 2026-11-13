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
let currentGlowColor = '#C0C0C0';

// Background Weather Fetcher
async function updateWeather() {
    try {
        const res = await fetch('https://api.open-meteo.com/v1/forecast?latitude=1.4927&longitude=103.7414&current_weather=true');
        const data = await res.json();
        currentJBTemp = Math.round(data.current_weather.temperature);
    } catch (e) {
        console.log("Weather fetch fallback: 28°C");
    }
}
updateWeather();
setInterval(updateWeather, 1800000); 

// Web Audio API Elements
let audioCtx;
let analyser;
let sourceA = null;
let sourceB = null;
const playerA = new Audio();
const playerB = new Audio();
playerA.crossOrigin = "anonymous";
playerB.crossOrigin = "anonymous";
let usePlayerA = true;

// UI Elements
const canvas = document.getElementById('visualizer');
const ctx = canvas.getContext('2d');
const statusText = document.getElementById('status-text');
const eraText = document.getElementById('era-text');
const screenFlash = document.getElementById('screen-flash');

function triggerChannelFlash() {
    if (!screenFlash) return;
    screenFlash.classList.add('active');
    setTimeout(() => screenFlash.classList.remove('active'), 60);
}

// --- 3. INITIALIZATION & GESTURES ---
document.body.addEventListener('click', () => {
    if (!isPlaying) {
        triggerChannelFlash();
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
        triggerChannelFlash();
        playNextCycle(); 
    } else if (touchEndX > touchStartX + 50) {
        triggerChannelFlash();
        songsPlayedInEra = BLOCK_SIZE; 
        playNextCycle();
    }
});

function initAudio() {
    audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    analyser = audioCtx.createAnalyser();
    analyser.fftSize = 256;

    // Connect MediaElementSources ONCE to prevent InvalidStateError crashes
    sourceA = audioCtx.createMediaElementSource(playerA);
    sourceB = audioCtx.createMediaElementSource(playerB);
    sourceA.connect(analyser);
    sourceB.connect(analyser);
    analyser.connect(audioCtx.destination);
}

// --- 4. FORZA-STYLE DJ ENGINE ---
function playNextCycle() {
    const currentHour = new Date().getHours();

    // 12 PM MIDDAY HIJACK
    if (currentHour === 12 && lastMajorTimePlayed !== 12) {
        lastMajorTimePlayed = 12;
        const middayBumper = `jim_12pm_${currentJBTemp}C.mp3`; 
        playWithCrossfade(middayBumper, () => {
            playWithCrossfade('false_alarm.mp3', playNextCycle);
        });
        return; 
    }

    // 5 PM AFTER HOURS HIJACK
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

    // ERA SHIFT LOGIC
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

    // STANDARD PLAY
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
    if (audioCtx && audioCtx.state === 'suspended') audioCtx.resume();
    
    const activePlayer = usePlayerA ? playerA : playerB;
    const standbyPlayer = usePlayerA ? playerB : playerA;

    standbyPlayer.src = nextFilePath;
    standbyPlayer.volume = 0;
    
    standbyPlayer.play().catch(() => {
        console.log(`Audio file missing (${nextFilePath}) - running visual simulation mode.`);
    });

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

// --- 6. ASYMMETRIC SORAYAMA / KVESITADZE SILHOUETTE ENGINE ---
function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}
window.addEventListener('resize', resizeCanvas);

// 26-Point Side-Profile Anatomical Keyframes: [t_height, back_edge_offset, front_edge_offset]
// Traces the Sorayama Gynoid: Helmet dome, visor rim, arched spine, bust projection, glutes, and stiletto legs
const sorayamaProfile = [
    [0.00, -0.02,  0.02], // Top of helmet dome
    [0.03, -0.09,  0.08], // Upper helmet curve
    [0.06, -0.11,  0.11], // Helmet visor brow
    [0.08, -0.13,  0.10], // Rear helmet flare & face mask
    [0.10, -0.07,  0.09], // Chin tip
    [0.12, -0.05,  0.03], // Slender mechanical neck
    [0.15, -0.13,  0.07], // Deltoid shoulder cap
    [0.19, -0.11,  0.15], // Upper chest slope
    [0.23, -0.09,  0.22], // Forward bust apex
    [0.26, -0.08,  0.13], // Underbust contour
    [0.31, -0.06,  0.09], // Ribcage taper
    [0.36, -0.05,  0.07], // Snatched waist (lordosis arch)
    [0.41, -0.14,  0.10], // High hip / iliac crest
    [0.46, -0.22,  0.13], // Glute apex
    [0.51, -0.18,  0.14], // Upper thigh
    [0.57, -0.13,  0.12], // Mid thigh
    [0.64, -0.09,  0.09], // Mechanical knee joint
    [0.70, -0.13,  0.06], // Calf muscle flare
    [0.78, -0.08,  0.04], // Lower shin taper
    [0.85, -0.05,  0.03], // Ankle joint
    [0.90, -0.09,  0.06], // Arched stiletto heel & instep
    [0.96, -0.02,  0.11], // Pointed toe box
    [1.00,  0.02,  0.09]  // Toe tip on pedestal
];

function sampleSorayamaSlice(t) {
    for (let i = 0; i < sorayamaProfile.length - 1; i++) {
        const p1 = sorayamaProfile[i];
        const p2 = sorayamaProfile[i + 1];
        if (t >= p1[0] && t <= p2[0]) {
            const localT = (t - p1[0]) / (p2[0] - p1[0]);
            // Cosine interpolation for smooth metallic curves between keyframes
            const smoothT = (1 - Math.cos(localT * Math.PI)) / 2;
            return {
                left: p1[1] + (p2[1] - p1[1]) * smoothT,
                right: p1[2] + (p2[2] - p1[2]) * smoothT
            };
        }
    }
    return { left: 0, right: 0 };
}

function drawVisualizer() {
    requestAnimationFrame(drawVisualizer);
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    if (isPlaying && layDownLerp < 1) {
        layDownLerp += 0.018; 
        if (layDownLerp > 1) layDownLerp = 1;
    }

    const numSlices = 96; // 96 Kvesitadze horizontal steel plates
    const dataArray = new Uint8Array(numSlices);
    if (isPlaying && analyser) {
        analyser.getByteFrequencyData(dataArray);
    }

    // Scale proportions so statue occupies 68% of screen height (16% top/bottom margin)
    const statueHeight = canvas.height * 0.68;
    const startY = canvas.height * 0.16;
    const profileScale = Math.min(canvas.width * 0.65, statueHeight * 0.45);
    const centerX = canvas.width / 2;
    const sliceStepY = statueHeight / numSlices;
    const barWidth = canvas.width / numSlices;

    // Smooth cubic easing for the transition drop
    const ease = 1 - Math.pow(1 - layDownLerp, 3);
    const time = Date.now() * 0.003;

    ctx.shadowColor = isPlaying ? currentGlowColor : '#FFB300';
    ctx.shadowBlur = isPlaying ? 12 : 18;

    for (let i = 0; i < numSlices; i++) {
        const t = i / (numSlices - 1);
        const bounds = sampleSorayamaSlice(t);

        // Subtle Kvesitadze plate shimmer on idle
        const plateShimmer = Math.sin(time + i * 0.15) * 1.5 * (1 - ease);

        // STATE 1: Standing Asymmetric Sorayama Sculpture
        const standX = centerX + (bounds.left * profileScale) + plateShimmer;
        const standW = Math.max(3, (bounds.right - bounds.left) * profileScale);
        const standY = startY + (i * sliceStepY);
        const standH = sliceStepY * 0.58; // 42% gap between plates for authentic Kvesitadze slatted look

        // STATE 2: Horizontal Audio Visualizer along bottom bezel
        let rawAudio = dataArray[i] || 0;
        // Fallback synth pulse if MP3s aren't uploaded yet so visualizer still looks alive
        if (isPlaying && rawAudio === 0) {
            rawAudio = (Math.sin(time * 2 + i * 0.25) * 0.5 + 0.5) * 90 + (Math.cos(time * 3 - i * 0.4) * 35);
        }
        const audioSpike = Math.max(4, (rawAudio / 255) * (canvas.height * 0.28));

        const layX = i * barWidth;
        const layY = canvas.height - audioSpike - 12;
        const layW = Math.max(2, barWidth - 2);
        const layH = audioSpike;

        // Morph coordinates
        const curX = standX + (layX - standX) * ease;
        const curY = standY + (layY - standY) * ease;
        const curW = standW + (layW - standW) * ease;
        const curH = standH + (layH - standH) * ease;

        // 3D Sorayama Chrome-Gold Shader on each individual plate while idle
        if (ease < 0.95) {
            const grad = ctx.createLinearGradient(curX, 0, curX + curW, 0);
            grad.addColorStop(0.0, '#5C3A00'); // Deep bronze shadow edge
            grad.addColorStop(0.25, '#D4AF37'); // Rich metallic gold
            grad.addColorStop(0.55, '#FFF6CC'); // Specular chrome highlight
            grad.addColorStop(0.85, '#AA771C'); // Warm gold reflection
            grad.addColorStop(1.0, '#3D2600'); // Dark rim shadow
            ctx.fillStyle = grad;
        } else {
            ctx.fillStyle = currentGlowColor;
        }

        ctx.fillRect(curX, curY, curW, curH);
    }
}

// Boot the sculpture immediately
resizeCanvas();
drawVisualizer();
