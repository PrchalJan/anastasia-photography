// Get all the variables
import { variables } from './variables';
variables();
import { nav } from './nav';
nav();
import { images } from './images';
images();


// Debugger
window.document.addEventListener('click', function(e) {
  console.log(e.target);
})

