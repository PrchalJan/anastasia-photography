export const images = function() {

// keep changing home images




window.addEventListener('load', function() {
  console.log('loaded');
  setInterval(function() {
    // showSlide(currentHomeIndex + 1, imgs.home);
    show(homeImageIndex += 1);
  }, 4000);
})



const homeImageCount = home.imageContainer.children.length
const singleIteration = (100 / homeImageCount);
// Set the proper width of image container
if(window.innerWidth < 899) {
  
}

home.imageContainer.style.width = `${homeImageCount * 100}%`;
console.log(home.imageContainer);
console.log(home.imageContainer.style.width);




// homeImgContainer.style.transform = 'translateX(-5%)';
// homeImgContainer.style.transform = `translateX(-${singleIteration*1}%)`;

let homeImageIndex = 0;

function show(index) {
  if(index > homeImageCount -1) {
    index = 0;
  }
  if(index < 0) {
    index = homeImageCount -1;
  }
  home.imageContainer.style.transform = `translateX(-${singleIteration*index}%)`;
  homeImageIndex = index;
}
// Change image to previous  on left side click
home.left.addEventListener('click', function() {
  show(homeImageIndex -= 1);
})
// Change image to next on right side click
home.right.addEventListener('click', function() {
  show(homeImageIndex += 1);
})
// Change image on swipe


// Detect swipe:
sections.home.addEventListener('touchstart', handleTouchStart, false);
sections.home.addEventListener('touchmove', function(e) {
  handleTouchMove(e,
                  show(homeImageIndex -= 1),
                  show(homeImageIndex += 1))
}, false);




















}