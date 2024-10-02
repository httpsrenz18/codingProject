function press(value) {
  document.getElementById('display').value += value;
}

function clearDisplay() {
  document.getElementById('display').value = '';
}

function calculate() {
  document.getElementById('display').value = 'I miss you';
  playMusic();
}

function playMusic() {
  var audio = document.getElementById('audio');
  audio.play();
}

function stopMusic() {
  var audio = document.getElementById('audio');
  audio.pause();
  audio.currentTime = 0;
}