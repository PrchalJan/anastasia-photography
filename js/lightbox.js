export const lightbox = function() {




  // document.addEventListener('contextmenu', function(e) {
  //   e.preventDefault();
  //   console.log('//////////////////////////')
  //   console.log('// LIGHTBOX DEBUGGER //')

  //   console.log('states.lightbox: ', window.states.lightbox);
  //   console.log('lightbox.imgSet: ' + window.lightbox.imgSet);
  //   console.log('lightbox.img  source: ', window.lightbox.img.src);
  //   console.log('Caption index: ', window.lightbox.captionIndex.innerHTML);
  //   console.log('Caption text: ', window.lightbox.captionText.innerHTML);
  //   console.log('Current Index: ', window.lightbox.currentIndex);
  //   console.log('Next Index: ', window.lightbox.nextIndex);
  //   console.log('Previous Index: ', window.lightbox.previousIndex);
  //   console.log('imgQuality: ', window.lightbox.imgQuality);
  //   console.log('Cache Images: ',  window.lightbox.cacheImages);
  // })


document.addEventListener('contextmenu', function(e) {
  e.preventDefault();
  console.log(window.lightbox.img.offsetWidth);
  const imgWidth = window.lightbox.img.offsetWidth + 'px';
  window.lightbox.captionText.style.width = imgWidth;
  // console.log(window.lightbox.img.offsetTop);
  // console.log(window.lightbox.img.offsetLeft);
  // console.log('computed')
  
});






setLightboxImageQuality();

// <preload images>
function checkImage(src) {
  for(let i = 0; i < window.lightbox.cacheImages.length; i++) {
    if(window.lightbox.cacheImages[i].getAttribute('src') === src) {
      return true;
    }
  }
  return false;
}
function pushImage(src) {
  const newImage = document.createElement('img'); 
  newImage.src = src;
  window.lightbox.cache.appendChild(newImage);
}
function cacheImage(img) {
  const newSrc = img.getAttribute('data-src').replace('?', window.lightbox.imgQuality);
  if(!checkImage(newSrc)) {
    pushImage(newSrc);
  }
}
window.cacheImage = cacheImage;
function preloadNextImage() {
  cacheImage(window.lightbox.imgSet[window.lightbox.nextIndex]);
}
function preloadPreviousImage() {
  cacheImage(window.lightbox.imgSet[window.lightbox.previousIndex]);
}
function preloadImages() {
  preloadNextImage();
  preloadPreviousImage();
}
// </preload images>




// <close lightbox>
function hideLightbox() {
  document.body.classList.remove('lightbox-open');
  states.lightbox = false;
}
function clearImg() {
  window.lightbox.img.removeAttribute('src');
}
function clearImgSet() {
  window.lightbox.imgSet = null;
}
function clearImages() {
  clearImg();
  clearImgSet();
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
function setLightboxImageQuality() {
  if(window.innerWidth < 601) {
    window.lightbox.imgQuality = 640;
  } else if(window.innerWidth < 1602) {
    window.lightbox.imgQuality = 1280;
  } else if(window.innerWidth > 1601) {
    window.lightbox.imgQuality = 1920;
  }
}
window.setLightboxImageQuality = setLightboxImageQuality;
function setImages(imgSet, index) {
  // Get The image that has been clicked on
  const image = imgSet[index];
  // From the image, extract a new source that will be appended to the lightbox image
  const newSrc = image.getAttribute('data-src').replace('?', window.lightbox.imgQuality);
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
// function setCaptionPosition(topPad, leftPad) {
//   topPad = topPad || 0;
//   leftPad = leftPad || 0;

//   setTimeout(function() {
//     const top = (window.lightbox.img.offsetTop + window.lightbox.img.offsetHeight + topPad) + 'px';
//     const left = (window.lightbox.img.offsetLeft + leftPad) + 'px';
//     window.lightbox.captionText.style.top = top;
//     window.lightbox.captionText.style.left = left;
//   }, 300)

// }

function setWidth() {
  const imgWidth = window.lightbox.img.offsetWidth + 'px';
  window.lightbox.captionText.style.width = imgWidth;
}

function setCaptionWidth() {
  setWidth()
  setTimeout(function() {
    setWidth();
  }, 300)
  setTimeout(function() {
    setWidth();
  }, 600)
  setTimeout(function() {
    setWidth();
  }, 900)

}
function showLightbox() {
  if(!states.lightbox) {
    document.body.classList.add('lightbox-open');
    states.lightbox = true;
  }
}

function openLightbox(imgSet, index) {
  // clearImg();
  setImages(imgSet, index);
  setCaptions(imgSet, index);
  setImageIndexes(imgSet, index);
  // setCaptionPosition(0, 5);
  setCaptionWidth()
  showLightbox();
  preloadImages();
}


// </open lightbox>


// <open lightbox -customize>
// function openLightbox_responsive(imgSet, index) {
//     openLightbox(imgSet, index);
// }
function getClickedImageIndex(imgSet, img) {
  for(let i = 0; i < imgSet.length; i++) {
    if(imgSet[i] === img) {
      return i
    }
  }
}
function openLightbox_click(e, imgSet, className) {
  const img = e.target.firstElementChild;
  // className must be string
  if(img.classList.contains(className)) {
    const imgIndex = getClickedImageIndex(imgSet, img);
    return openLightbox.call(this, imgSet, imgIndex);
  }
}
function openLightbox_click_archive(e) {
  return openLightbox_click.call(this, e, imgs.archive, 'archive__img');
}
window.openLightbox_click_archive = openLightbox_click_archive;
// </open lightbox -customize>




// <next/prevous lightbox imge>
function showNextImage() {
  openLightbox(window.lightbox.imgSet, window.lightbox.nextIndex);
}
function showPreviousImage() {
  openLightbox(window.lightbox.imgSet, window.lightbox.previousIndex);
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
function showNextImageClick(e) {
  if(e.target === window.lightbox.nextSpace) {
    showNextImage()
  }
}
function showPreviousImageClick(e) {
  if(e.target === window.lightbox.previousSpace) {
    showPreviousImage()
  }
}
// </click modified FUNCITONS>




// <resize modified FUNCITONS>
// function setCaptionPosition_resize() {
//   if(states.lightbox) {
//     setCaptionPosition(0, 5);
//   }
// }
// window.setCaptionPosition_resize = setCaptionPosition_resize;

function setCaptionWidth_resize() {
  if(states.lightbox) {
    setCaptionWidth()
  }
}
window.setCaptionWidth_resize = setCaptionWidth_resize;
// </resize modified FUNCITONS>



// <lightbox click events>
components.lightbox.addEventListener('click', function(e) {
  // Close lightbox on gap click
  closeLightboxGapClick(e);
  showNextImageClick(e);
  showPreviousImageClick(e);
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