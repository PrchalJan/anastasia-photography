// Get all the variables
import { variables } from './variables';
variables();
import { nav } from './nav';
nav();
import { images } from './images';
images();



// Set up the correct mobile height:

if(window.innerWidth < 900) {
  // sections.home.style.height = 200;
  // console.log(sections.home.computedStyle.height);
  console.log();
  sections.home.style.height = `${window.innerHeight -60}px`;
  
}

console.log(window.innerWidth);
console.log(window.innerHeight);



// Debugger
window.document.addEventListener('click', function(e) {
  console.log(e.target);
})

