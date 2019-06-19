export const lightbox = function() {

window.closeLightboxBtnClick = function() {
  if(states.lightbox) {
    document.body.classList.remove('lightbox-open');
    states.lightbox = false;
  }
}
window.closeLightboxGapClick = function(e) {
  if(states.lightbox && e.target === components.lightbox) {
    document.body.classList.remove('lightbox-open');
    states.lightbox = false;
  }
}

window.openLightbox = function() {
  if(!states.lightbox) {
    document.body.classList.add('lightbox-open');
    states.lightbox = true;
  }
}

// window.addEventListener('click', function() {
//   console.log('triggered');
//   console.log(states.lightbox);
//   if(!states.lightbox) {
//     document.body.classList.add('lightbox-open');
//     states.lightbox = true;
//   } else {
//     document.body.classList.remove('lightbox-open');
//     states.lightbox = false;
//   }
// });

window.openArchiveLightboxClick = function(e) {
  console.log(e.target.firstElementChild);
  console.log(e.target.firstElementChild.classList);
  if(e.target.firstElementChild.classList.contains('archive__img')) {
    openLightbox();
  }
}

















}