
function playSound (e) {
  // console.log(e.keyCode);
  // assign if an audio element data-key matches e.keyCode number
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  // console.log(audio);
  // assign if a html element data-key matches e.keyCode number
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
  //console.log(key);

  if(!audio) return; // stop function if no audio element's data-key matches the keypress output
  key.classList.add('playing'); 
  audio.currentTime = 0; // rewind audio to start, if already playing
  audio.play();
}

// remove .playing when the transitionend event listener is called 
function removeTransition() {
  //console.log(e.propertyName);
  //if(e.propertyName !== 'transform') return; // skip if not a transform (This was in the original tutorial, but I saw no point adding it for this example)
  //console.log(e.propertyName);
  // the timed transistion has ended. remove the .playing class to reset the effect
  this.classList.remove('playing'); // 'this' is the element attached to the event. You can also use e.target instead
}

const keys = document.querySelectorAll('.key');
// iterate through the node-list keys.
// add event listener to each node-list key.
// The transitionend event is fired when a CSS transition has completed - https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/transitionend_event
keys.forEach(key => key.addEventListener('transitionend', removeTransition)); // listen for the transition end

window.addEventListener('keydown', playSound);
