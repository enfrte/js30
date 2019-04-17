
// TIME: 08:50

window.addEventListener('keydown', function (e) {
  // console.log(e.keyCode);
  // check if audio element data-key matches e.keyCode number
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  // console.log(audio);
  if(!audio) return; // stop function if no element match
  audio.currentTime = 0; // rewind audio to start
  // else play the audio element 
  audio.play();
});