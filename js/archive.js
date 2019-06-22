export const archive = function() {


// function loadArchiveImages() {
//   // Create Figure
//   let newFigure = document.createElement('figure');
//   newFigure.classList.add('archive__figure');
//   console.log(newFigure);
//   let newImage = document.createElement('img');
//   newImage.classList.add('archive__img');
//   console.log(newImage);
// }

// let image = document.querySelector('.archive__img');
// let dataSource = image.getAttribute('data-src');
// let newSource = dataSource.replace('?', 200);
// image.src = newSource
// console.log(newSource);
// console.log(image);
// console.log(imgsLength.archive);

window.loadArchiveImages = function(quality) {
  for(let i = 0; i < imgs.archive.length; i++) {
    let dataSource = imgs.archive[i].getAttribute('data-src');
    let newSource = dataSource.replace('?', quality);
    imgs.archive[i].src = newSource;
  }
}

window.loadResponsiveArchiveImages = function() {
  if(window.innerWidth < 600) {
    loadArchiveImages(300);
  } else {
    loadArchiveImages(400);
    highQuality.archive = true;
  }
}

window.loadArchiveImagesResize = function() {
  if(sectionStates.archive && (!highQuality.archive)) {
    loadResponsiveArchiveImages();
  }
}













}




