export const lightbox = function() {


  document.addEventListener('contextmenu', function(e) {
    e.preventDefault();
    console.log('//////////////////////////')
    console.log('// LIGHTBOX DEBUGGER //')

    console.log('states.lightbox: ' + window.states.lightbox);
    console.log('lightbox.imgSet: ' + window.lightbox.imgSet);
    console.log('lightbox.img  source: ' + window.lightbox.img.src);
    console.log('Caption index: ' + window.lightbox.captionIndex.innerHTML);
    console.log('Caption text: ' + window.lightbox.captionText.innerHTML);
    console.log('Current Index: ' + window.lightbox.currentIndex);
    console.log('Next Index: ' + window.lightbox.nextIndex);
    console.log('Previous Index: ' + window.lightbox.previousIndex);

    // console.log(lightbox.imgSet);
    // console.log('------------------');
    


  })


// <close lightbox>
function hideLightbox() {
  document.body.classList.remove('lightbox-open');
  states.lightbox = false;
}
function clearImages() {
  window.lightbox.img.removeAttribute('src');
  window.lightbox.imgSet = null;
}
function clearCaptions() {
  window.lightbox.captionIndex.innerHTML = '';
  window.lightbox.captionText.innerHTML = '';
}
function clearImageIndexes() {
  window.lightbox.currentIndex = null;
  window.lightbox.previousIndex = null;
  window.lightbox.nextIndex = null;
}

function closeLightbox() {
  hideLightbox();
  clearImages();
  clearCaptions();
  clearImageIndexes();
}



// </close lightbox>


// <open lightbox>
function setImages(imgSet, index, quality) {
  // Get The image that has been clicked on
  const image = imgSet[index];
  // From the image, extract a new source that will be appended to the lightbox image
  const newSrc = image.getAttribute('data-src').replace('?', quality);
  // Add the source
  window.lightbox.img.src = newSrc;
  // Set the lightbox.imgSet variable to the images that has been passed in as an argument
  window.lightbox.imgSet = imgSet;
  // Set the Index Number that is shown
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
function showLightbox() {
  if(!states.lightbox) {
    document.body.classList.add('lightbox-open');
    states.lightbox = true;
  }
}

function openLightbox(imgSet, index, quality) {
  setImages(imgSet, index, quality);
  setCaptions(imgSet, index)
  setImageIndexes(imgSet, index)
  showLightbox()
}


// </open lightbox>


// <open lightbox -customize>
function openLightbox_responsive(imgSet, index) {
  if(window.innerWidth < 601) {
    openLightbox(imgSet, index, 640);
  } else if(window.innerWidth < 1602) {
    openLightbox(imgSet, index, 1280);
  } else if(window.innerWidth > 1601) {
    openLightbox(imgSet, index, 1920);
  }
}
function getClickedImageIndex(imgSet, img) {
  for(let i = 0; i < imgSet.length; i++) {
    if(imgSet[i] === img) {
      return i
    }
  }
}
function openLightbox_responsive_click(e, imgSet, className) {
  const img = e.target.firstElementChild;
  // className must be string
  if(img.classList.contains(className)) {
    const imgIndex = getClickedImageIndex(imgSet, img);
    return openLightbox_responsive.call(this, imgSet, imgIndex);
  }
}
function openLightbox_responsive_click_archive(e) {
  return openLightbox_responsive_click.call(this, e, imgs.archive, 'archive__img');
}
window.openLightbox_responsive_click_archive = openLightbox_responsive_click_archive;
// </open lightbox -customize>




// <next/prevous lightbox imge>
function showNextImage() {
  openLightbox_responsive(window.lightbox.imgSet, window.lightbox.nextIndex);
}
function showPreviousImage() {
  openLightbox_responsive(window.lightbox.imgSet, window.lightbox.previousIndex);
}
// </next/prevous lightbox imge>







// <click modified FUNCITONS>
function closeLightboxGapClick(e) {
  if(states.lightbox && e.target === components.lightbox) {
    closeLightbox();
  }
}
function closeLightboxBtnClick() {
  if(states.lightbox) {
    closeLightbox();
  }
}
// </click modified FUNCITONS>

// <lightbox click events>

components.lightbox.addEventListener('click', function(e) {
  // Close lightbox on gap click
  closeLightboxGapClick(e);
})



window.lightbox.closeBtn.addEventListener('click', function() {
  closeLightboxBtnClick();
})
window.lightbox.nextBtn.addEventListener('click', function() {
  showNextImage();
})
window.lightbox.previousBtn.addEventListener('click', function() {
  showPreviousImage();
})

// </lightbox click events>
















}