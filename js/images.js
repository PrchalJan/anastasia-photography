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
  postponeIteration('home');
  showNextImage('home');
}
function showPreviousHomeImage() {
  postponeIteration('home');
  showPreviousImage('home');
}
function postponeIteration(set) {
  clearInterval(interval[set]);
  clearTimeout(timeout[set]);
  timeout[set] = setTimeout(function() {
    startHomeIteration()
  }, 6000);
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
  console.log('Before Check Index: ' + imageIndexes[set])
  checkIndex(set);
  console.log('After Check Index: ' + imageIndexes[set])
  setContainerPositionDelayed(set);
  // document.body.classList.remove('home--immediate-transition');
}
function checkIndex(set) {
  
  if(imageIndexes[set] > imageCount[set] -1) {
    document.body.classList.add('home--immediate-transition');
    imageIndexes[set] = 0;
    // imageContainers[set].style.transform = 'translateX(0)';
    setContainerPosition(set);
    setTimeout(function() {
      document.body.classList.remove('home--immediate-transition');
      imageIndexes[set] = 1;
      // 7 ms for ie
    }, 8)
  }
  if(imageIndexes[set] < 0) {
    document.body.classList.add('home--immediate-transition');
    imageIndexes[set] = imageCount[set] -1;
    setContainerPosition(set);
    setTimeout(function() {
      document.body.classList.remove('home--immediate-transition');
      // imageIndexes[set] = 1;
      imageIndexes[set] = imageCount[set] -2;
      // 7 ms for ie
    }, 8)
  }
  // imageContainers[set].style.transition = 'transform 1s';
  // document.body.classList.remove('home--immediate-transition');
}
function setContainerPosition(set) {
  // multiply the width of a signle image times nth-index
  const position = getSingleIteration(set) * imageIndexes[set];
  imageContainers[set].style.transform = `translateX(-${position}%)`;
}
function setContainerPositionDelayed(set) {
  // multiply the width of a signle image times nth-index
  setTimeout(function() {
    const position = getSingleIteration(set) * imageIndexes[set];
    imageContainers[set].style.transform = `translateX(-${position}%)`;
    // 7 ms for ie
  }, 8)
}
// Divide the container by the number of images
function getSingleIteration(set) {
  return 100 / imageCount[set];
}















}