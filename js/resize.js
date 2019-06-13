export const resize = function() {

// Set up the correct mobile height:

if(window.innerWidth < 900) {
  // sections.home.style.height = 200;
  // console.log(sections.home.computedStyle.height);
  console.log();
  sections.home.style.height = `${window.innerHeight -60}px`;
  
}

console.log(window.innerWidth);
console.log(window.innerHeight);









}

