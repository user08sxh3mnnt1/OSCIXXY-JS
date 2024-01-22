const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const fpsSlider = document.getElementById('fpsSlider');
const fpsIndicator = document.getElementById('fpsIndicator');
const drawButton = document.querySelector('button');

let isDrawing = false;
let frames = [];
let fps = parseInt(fpsSlider.value);
let wavesurfer;

canvas.addEventListener('mousedown', startDrawing);
canvas.addEventListener('mouseup', stopDrawing);
canvas.addEventListener('mousemove', draw);

fpsSlider.addEventListener('input', updateFPS);

function startDrawing() {
  isDrawing = true;
  frames = [];
  startAudio();
}

function stopDrawing() {
  isDrawing = false;
  stopAudio();
}

function draw(e) {
  if (!isDrawing) return;

  const x = e.clientX - canvas.offsetLeft;
  const y = e.clientY - canvas.offsetTop;

  ctx.fillRect(x, y, 5, 5);
  frames.push({ x, y });
}

function updateFPS() {
  fps = parseInt(fpsSlider.value);
  fpsIndicator.textContent = `${fps} FPS`;
}

function startAudio() {
  wavesurfer = WaveSurfer.create({
    container: '#audio-container',
    waveColor: 'black',
    progressColor: 'red',
    cursorWidth: 0,
  });

  wavesurfer.on('ready', function () {
    wavesurfer.play();
  });

  wavesurfer.on('finish', function () {
    stopDrawing();
  });

  // Convert frames to audio data and load into wavesurfer
  const audioBuffer = framesToAudioBuffer(frames, fps);
  wavesurfer.loadDecodedBuffer(audioBuffer);
}

function stopAudio() {
  if (wavesurfer) {
    wavesurfer.stop();
    wavesurfer.destroy();
  }
}

function framesToAudioBuffer(frames, fps) {
  // Convert frames to audio data
  // Implementation required, consider using a library or your custom logic
}
