const piano = document.querySelector('.piano')
let isSomeElementClicked = false;
const letter = document.querySelector('.btn-letters');
const notes = document.querySelector('.btn-notes');
const btns = document.querySelectorAll('.btn-container');
const keys = document.querySelectorAll('.piano-key');
const fullscreen = document.querySelector('.fullscreen');



piano.addEventListener('click', function (e) {
  if (!e.target) return;
  const elementDataLetter = e.target.getAttribute('data-letter');
  const audio = document.querySelector(`audio[data-letter="${elementDataLetter}"]`);
  const active = document.querySelector(`.piano-key[data-letter="${elementDataLetter}"]`);
  if (!audio) return;
  audio.currentTime = 0;
  audio.play();
  active.classList.add('piano-key-active');
})

piano.addEventListener('mousedown', function (e) {
  if (!e.target) return;
  const elementDataLetter = e.target.getAttribute('data-letter');
  if (elementDataLetter) {
    isSomeElementClicked = true;
  }

})

piano.addEventListener('mouseup', function (e) {
  if (!e.target) return;
  const elementDataLetter = e.target.getAttribute('data-letter');
  if (elementDataLetter) {
    isSomeElementClicked = false;
  }

})

piano.addEventListener('mouseover', function (e) {
  if (!e.target) return;
  const elementDataLetter = e.target.getAttribute('data-letter');
  const audio = document.querySelector(`audio[data-letter="${elementDataLetter}"]`);
  const active = document.querySelector(`.piano-key[data-letter="${elementDataLetter}"]`);
  if (isSomeElementClicked) {
    if (!audio) return;
    audio.currentTime = 0;
    audio.play();
    active.classList.add('piano-key-active');
  }


})

window.addEventListener('keypress', function (e) {
 
  const audio = document.querySelector(`audio[data-letter="${e.key.toUpperCase()}"]`);
  const active = document.querySelector(`.piano-key[data-letter="${e.key.toUpperCase()}"]`);
  if (!audio) return;
  audio.currentTime = 0;
  audio.play();
  active.classList.add('piano-key-active');
})

function removeTransition(e) {
  if (e.propertyName !== 'transform') return;
  this.classList.remove('piano-key-active');
}

keys.forEach(key => key.addEventListener('transitionend', removeTransition));

letter.addEventListener('click', function (e) {
  letter.classList.add('btn-active');
  notes.classList.remove('btn-active');
  keys.forEach((el) => {
    el.classList.add('piano-key-letter');
  })
})

notes.addEventListener('click', function (e) {
  notes.classList.add('btn-active');
  letter.classList.remove('btn-active');
  keys.forEach((el) => {
    el.classList.remove('piano-key-letter');
  })
})


fullscreen.addEventListener("click", function (e) {
  toggleFullScreen();
});

function toggleFullScreen() {
  if (!document.fullscreenElement) {
    document.documentElement.requestFullscreen();
  } else {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    }
  }
}