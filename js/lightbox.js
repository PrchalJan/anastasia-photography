export const lightbox = function() {

window.closeLightboxClick = function() {
  // console.log('close lightbox ran');
  // components.lightbox.style.transform = 'scale(0)';
}

window.addEventListener('click', function() {
  console.log('triggered');
  console.log(states.lightbox);
  if(!states.lightbox) {
    document.body.classList.add('lightbox-open');
    states.lightbox = true;
  } else {
    document.body.classList.remove('lightbox-open');
    states.lightbox = false;
  }
});

















}