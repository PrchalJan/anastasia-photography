export const lightbox = function() {


function closeLightbox() {
  const currentImage = document.querySelector('#lightbox__image');
  document.body.classList.remove('lightbox-open');
  states.lightbox = false;
  currentImage.src = '';

}

window.closeLightboxBtnClick = function() {
  if(states.lightbox) {

    closeLightbox();
  }
}
window.closeLightboxGapClick = function(e) {
  if(states.lightbox && e.target === components.lightbox) {
    closeLightbox();
  }
}

window.openLightbox = function() {
  if(!states.lightbox) {
    document.body.classList.add('lightbox-open');
    states.lightbox = true;
  }
}


window.setLightboxImages = function(imgSet, index, quality) {
  const lightboxImage = document.querySelector('#lightbox__image');
  const image = imgSet[index];
  const newSrc = image.getAttribute('data-src').replace('?', quality);
  const src = newSrc;
  lightboxImage.src = src;
}

// setLightboxImages(imgs.archive, 0, 1920);


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

function getClickedImageIndex(imgArr, img) {
  for(let i = 0; i < imgArr.length; i++) {
    if(imgArr[i] === img) {
      return i
    }
  }
}

window.openArchiveLightboxClick = function(e) {
  const imgs = document.querySelectorAll('.archive__img');
  const img = e.target.firstElementChild;
  if(img.classList.contains('archive__img')) {
    const imgIndex = getClickedImageIndex(imgs, img);
    openLightbox();
    setLightboxImages(imgs, imgIndex, 1280)
  }
}

















}