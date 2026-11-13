
let menuOpen = false;

function toggleMenu() {
  if(!menuOpen) { 
    $('nav').animate({
        right: 0
      }, 300, 'swing');
  }
  else { 
    $('nav').animate({
        right: -310
      }, 300, 'swing');
  }
  menuOpen = !menuOpen;
} 

  function closeMenu() {
    $('nav').animate({
      right: -310
     }, 440, 'swing');
   menuOpen = !menuOpen;
} 
