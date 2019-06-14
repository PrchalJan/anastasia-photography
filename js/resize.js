export const resize = function() {






// Set up the correct home height:
setProperHomeHeight();




// RESIZING EVENTS
window.addEventListener('resize', function() {
  
} )

// Resize home height on window change
window.addEventListener('resize', debounce(function() {
  if(!(widthBank === window.innerWidth) || window.innerWidth > 899) {
    setProperHomeHeight();
    if(sections.home.style.display === 'block') {
      showHomeSection();
    }
  }
  widthBank = window.innerWidth;
}, 350));








}

