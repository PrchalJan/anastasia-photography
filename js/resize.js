export const resize = function() {






// Set up the correct home height:
properHomeHeight();




// RESIZING EVENTS
window.addEventListener('resize', function() {
  
} )

// Resize home height on window change
window.addEventListener('resize', debounce(function() {
  properHomeHeight();
}, 350));








}

