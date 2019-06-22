export const lightbox = function() {


  document.addEventListener('contextmenu', function(e) {
    e.preventDefault();
    console.log('//////////////////////////')
    console.log('// LIGHTBOX DEBUGGER //')

    console.log('states.lightbox: ' + states.lightbox);
    console.log('lightbox.imgSet: ' + lightbox.imgSet);
    console.log('lightbox.img  source: ' + window.lightbox.img.src);
    console.log('Caption index: ' + window.lightbox.captionIndex.innerHTML);
    console.log('Caption text: ' + window.lightbox.captionText.innerHTML);
    console.log('Current Index: ' + window.lightbox.currentIndex);
    console.log('Next Index: ' + window.lightbox.nextIndex);
    console.log('Previous Index: ' + window.lightbox.previousIndex);

    // console.log(lightbox.imgSet);
    // console.log('------------------');
    


    console.log('//////////////////////////')


  })



function closeLightbox() {
  document.body.classList.remove('lightbox-open');
  states.lightbox = false;
  clearImages();
  clearCaptions();
  clearImageIndexes();

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

function setCaptionIndex(imgSet, index) {
  window.lightbox.captionIndex.innerHTML = `${index +1} / ${imgSet.length}`;
}
function setCaptionText(clickedImage) {
  const text = clickedImage.getAttribute('alt');
  window.lightbox.captionText.innerHTML = text;
}
function setCaptions(imgSet, index) {
  setCaptionIndex(imgSet, index);
  setCaptionText(imgSet[index]);
}
function clearCaptions() {
    window.lightbox.captionIndex.innerHTML = '';
    window.lightbox.captionText.innerHTML = '';
}
function setImageIndexes(imgSet, index) {
  window.lightbox.currentIndex = index;
  if(index === imgSet.length -1) {
    window.lightbox.nextIndex = 0;
  } else {
    window.lightbox.nextIndex = (index + 1);
  }
  if(index === 0) {
    window.lightbox.previousIndex = (imgSet.length -1);
  } else {
    window.lightbox.previousIndex = (index - 1);
  }
}
function clearImageIndexes() {
  window.lightbox.currentIndex = null;
  window.lightbox.previousIndex = null;
  window.lightbox.nextIndex = null;
}


window.setImages = function(imgSet, index, quality) {
  // Get The image that has been clicked on
  const image = imgSet[index];
  // From the image, extract a new source that will be appended to the lightbox image
  const newSrc = image.getAttribute('data-src').replace('?', quality);
  // Add the source
  window.lightbox.img.src = newSrc;
  // Set the lightbox.imgSet variable to the images that has been passed in as an argument
  lightbox.imgSet = imgSet;
  // Set the Index Number that is shown
  setCaptions(imgSet, index);
  setImageIndexes(imgSet, index);
}
function clearImages() {
  window.lightbox.img.removeAttribute('src');
  lightbox.imgSet = null;
}

window.setResponsiveLightboxImages = function(imgSet, index) {
  if(window.innerWidth < 602) {
    setImages(imgSet, index, 640);
    // setImages(imgSet, index, 400);
  } else if(window.innerWidth < 1602) {
    setImages(imgSet, index, 1280);
    // setImages(imgSet, index, 400);
  } else if(window.innerWidth > 1601) {
    setImages(imgSet, index, 1920);
    // setImages(imgSet, index, 400);
  }
}

// setImages(imgs.archive, 0, 1920);


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