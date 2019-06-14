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
homeImgContainer.style.width = `${homeImageLength * 100}%`;



// homeImgContainer.style.transform = 'translateX(-5%)';
homeImgContainer.style.transform = `translateX(-${singleIteration*1}%)`;



















}