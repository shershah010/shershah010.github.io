let menu = document.getElementsByClassName("menu")[0];
let bars = document.getElementsByClassName("bar");
let nav = document.getElementsByClassName("nav")[0];
let isOpen = false;

function toggleMenu() {
  if (isOpen) {
    for (var bar of bars) {
      bar.style.backgroundColor = 'white';
      nav.classList.remove('nav-anim');
      setTimeout(function() {nav.classList.add("hidden");}, 800);
      enableScroll();
    }
  } else {
    for (var bar of bars) {
      bar.style.backgroundColor = 'black';
      nav.classList.remove("hidden");
      nav.classList.add('nav-anim');
      disableScroll();
    }
  }
  isOpen = !isOpen;
}

// left: 37, up: 38, right: 39, down: 40,
// spacebar: 32, pageup: 33, pagedown: 34, end: 35, home: 36
var keys = {37: 1, 38: 1, 39: 1, 40: 1};

function preventDefault(e) {
  e = e || window.event;
  if (e.preventDefault)
      e.preventDefault();
  e.returnValue = false;
}

function preventDefaultForScrollKeys(e) {
    if (keys[e.keyCode]) {
        preventDefault(e);
        return false;
    }
}

function disableScroll() {
  if (window.addEventListener) // older FF
      window.addEventListener('DOMMouseScroll', preventDefault, false);
  document.addEventListener('wheel', preventDefault, {passive: false}); // Disable scrolling in Chrome
  window.onwheel = preventDefault; // modern standard
  window.onmousewheel = document.onmousewheel = preventDefault; // older browsers, IE
  window.ontouchmove  = preventDefault; // mobile
  document.onkeydown  = preventDefaultForScrollKeys;
}

function enableScroll() {
    if (window.removeEventListener)
        window.removeEventListener('DOMMouseScroll', preventDefault, false);
    document.removeEventListener('wheel', preventDefault, {passive: false}); // Enable scrolling in Chrome
    window.onmousewheel = document.onmousewheel = null;
    window.onwheel = null;
    window.ontouchmove = null;
    document.onkeydown = null;
}
