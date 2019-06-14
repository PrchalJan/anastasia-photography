export const images = function() {

// keep changing home images




window.addEventListener('load', function() {
  console.log('loaded');
  setInterval(function() {
    showSlide(currentHomeIndex + 1, imgs.home);
  }, 4000);
})




















}