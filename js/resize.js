export const resize = function() {






// Set up the correct home height:
setProperHomeHeight();




// RESIZING EVENTS
window.addEventListener('resize', function() {
  
} )

// Resize home height on window change
window.addEventListener('resize', debounce(function() {
  console.log(widthBank);
  if(!(widthBank === window.innerWidth)) {
    setProperHomeHeight();
  }
  widthBank = window.innerWidth;
  console.log(sections.home.style.display);
  if(sections.home.style.display === 'block') {
    showHomeSection();
  }
  

}, 350));








}

