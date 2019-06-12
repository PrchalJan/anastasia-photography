export const images = function() {

// keep changing home images

// let homeIteration = setInterval(function() {
// }, 3000)

let currentHomeIndex = 0;
let previousHomeIndex = 0;

setInterval(function() {
  showSlide(currentHomeIndex + 1, imgs.home);
}, 4000);


function showSlide(index, slides) {
  

  if(index > slides.length -1) {
    index = 0;
  }
  if(index < 0) {
    index = slides.length -1;
  }
  // for(let slide of slides) {
  //   slide.style.display = 'none';
  // }
  for(let i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
    console.log(i);
  }
  slides[index].style.display = 'block';
  // console.log(slides[index]);
  currentHomeIndex = index;
  // slides[window.previousIndex].style.display = 'none';
  // slides[index].style.display = 'block';

  // window.previousHomeIndex = index;
}












}