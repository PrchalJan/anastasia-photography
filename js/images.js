// import { TIMEOUT } from "dns";

export const images = function() {

// keep changing home images




window.addEventListener('load', function() {
  startHomeIteration()
})


function startHomeIteration() {
  interval.home = setInterval(function() {
    showNextImage('home');
  }, 4000);
}


function setImageContainerWidth(set) {
  imageContainers[set].style.width = `${imageCount[set] * 100}%`
}

setImageContainerWidth('home');


// const homeImageCount = home.imageContainer.children.length
// const singleIteration = (100 / homeImageCount);
// // Set the proper width of image container
// if(window.innerWidth < 899) {
  
// }

// home.imageContainer.style.width = `${homeImageCount * 100}%`;
// console.log(home.imageContainer);
// console.log(home.imageContainer.style.width);


// homeImgContainer.style.transform = 'translateX(-5%)';
// homeImgContainer.style.transform = `translateX(-${singleIteration*1}%)`;

// let homeImageIndex = 0;

// function show(index) {
//   if(index > homeImageCount -1) {
//     index = 0;
//   }
//   if(index < 0) {
//     index = homeImageCount -1;
//   }
  // home.imageContainer.style.transform = `translateX(-${singleIteration*index}%)`;
  // homeImageIndex = index;
// }
// Change image to previous  on left side click
home.left.addEventListener('click', function() {
  showPreviousHomeImage();
})
// // Change image to next on right side click
home.right.addEventListener('click', function() {
  showNextHomeImage();
})
// Change image on swipe


// Detect swipe:
sections.home.addEventListener('touchstart', handleTouchStart, false);
sections.home.addEventListener('touchmove', function(e) {
  handleTouchMove(e,
                  function() {
                    showPreviousHomeImage();
                  },
                  function() {
                    showNextHomeImage();
                  })
}, false);



function showNextHomeImage() {
  clearInterval(interval.home);
  clearTimeout(timeout.home);
  timeout.home = setTimeout(function() {
    startHomeIteration()
  }, 6000);
  showNextImage('home')
}
function showPreviousHomeImage() {
  clearInterval(interval.home);
  clearTimeout(timeout.home);
  timeout.home = setTimeout(function() {
    startHomeIteration()
  }, 6000);
  showPreviousImage('home')
}


function showNextImage(set) {
  imageIndexes[set] += 1;
  showImage(set);
}
function showPreviousImage(set) {
  imageIndexes[set] -= 1;
  showImage(set);
}

function showImage(set) {
  setProperIndex(set);
  setContainerPosition(set);
}

function setProperIndex(set) {
  if(imageIndexes[set] > imageCount[set] -1) {
    imageIndexes[set] = 0;
  }
  if(imageIndexes[set] < 0) {
    imageIndexes[set] = imageCount[set] -1;
  }
}
function setContainerPosition(set) {
  // multiply the width of a signle image times nth-index
  const position = getSingleIteration(set) * imageIndexes[set];
  imageContainers[set].style.transform = `translateX(-${position}%)`;
}
// Divide the container by the number of images
function getSingleIteration(set) {
  return 100 / imageCount[set];
}















}