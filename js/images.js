export const images = function() {

// keep changing home images




// window.addEventListener('load', function() {
//   console.log('loaded');
//   setInterval(function() {
//     showSlide(currentHomeIndex + 1, imgs.home);
//   }, 4000);
// })



const homeImageLength = homeImgContainer.children.length
const singleIteration = (100 / homeImageLength);
// Set the proper width of image container
if(window.innerWidth < 899) {
  
}

homeImgContainer.style.width = `${homeImageLength * 100}%`;



// homeImgContainer.style.transform = 'translateX(-5%)';
// homeImgContainer.style.transform = `translateX(-${singleIteration*1}%)`;

let homeImageIndex = 0;

function show(index) {
  if(index > homeImageLength -1) {
    index = 0;
  }
  if(index < 0) {
    index = homeImageLength -1;
  }
  homeImgContainer.style.transform = `translateX(-${singleIteration*index}%)`;
  homeImageIndex = index;
}

homeImgContainer.addEventListener('click', function() {
  show(homeImageIndex += 1);
})



















}