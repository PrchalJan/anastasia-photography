export const resize = function() {






// Set up the correct home height:
setProperHomeHeight();




// RESIZING EVENTS
window.addEventListener('resize', function() {
  
} )

// Resize home height on window change
window.addEventListener('resize', debounce(function() {
  setProperHomeHeight();
  console.log(sections.home);
  if(sections.home.style.display = 'block') {
    hideSections();
    if(window.innerWidth > 899) {
      showSection(sections.home);
    } else {
      showSection(sections.home, true);
    }
  }

}, 350));








}

