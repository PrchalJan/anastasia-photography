export const lightbox = function() {


  document.addEventListener('contextmenu', function(e) {
    e.preventDefault();
    console.log('//////////////////////////')
    console.log('// LIGHTBOX DEBUGGER //')

    console.log('states.lightbox: ' + states.lightbox);
    console.log('lightbox.imgSet: ' + lightbox.imgSet);
    console.log('lightbox.img  source: ' + window.lightbox.img.src);

    // console.log(lightbox.imgSet);
    // console.log('------------------');
    


    console.log('//////////////////////////')


  })



function closeLightbox() {
  document.body.classList.remove('lightbox-open');
  states.lightbox = false;
  window.lightbox.img.removeAttribute('src');
  lightbox.imgSet = null;

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

window.setCaptionIndex = function(imgSet, index) {
  window.lightbox.indexCaption.innerHTML = `${index +1} / ${imgSet.length}`;
}


window.setLightboxImages = function(imgSet, index, quality) {
  const lightboxImage = document.querySelector('#lightbox__image');
  const image = imgSet[index];
  const newSrc = image.getAttribute('data-src').replace('?', quality);
  const src = newSrc;
  lightboxImage.src = src;
  lightbox.imgSet = imgSet;
  setCaptionIndex(imgSet, index);
}

window.setResponsiveLightboxImages = function(imgSet, index) {
  if(window.innerWidth < 602) {
    setLightboxImages(imgSet, index, 640);
    // setLightboxImages(imgSet, index, 400);
  } else if(window.innerWidth < 1602) {
    setLightboxImages(imgSet, index, 1280);
    // setLightboxImages(imgSet, index, 400);
  } else if(window.innerWidth > 1601) {
    setLightboxImages(imgSet, index, 1920);
    // setLightboxImages(imgSet, index, 400);
  }
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
    // setRLightboxImages(imgs, imgIndex, 1280);
    setResponsiveLightboxImages(imgs, imgIndex);
  }
}

















}