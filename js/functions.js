export const functions = function() {


// NAVIGATION

// Show a single section
// in: section, footer(yes/no)
window.showSection = function(section, footer=false) {
  section.style.display = 'block';
  if(footer) {
    components.footer.style.display = 'block';
  } else {
    components.footer.style.display = 'none';
  }
}

// Show Proper Home Section
window.showHomeSection = function() {
  hideSections();
  if(window.innerWidth > 899) {
    showSection(sections.home);
  } else {
    showSection(sections.home, true);
  }
}

// Hide all sections
window.hideSections = function() {
  for(let section in sections) {
    sections[section].style.display = 'none';
  }
}

window.hideMenuSections = function() {
  navBtns.artworks.classList.remove('nav__main-li--open');
  navBtns.magazines.classList.remove('nav__main-li--open');
}

// Open main mobile menu
window.openMenu = function() {
  if(!states.nav) {
    document.body.classList.add('nav-mobile-open');
  }
  states.nav = true;
}
window.closeMenu = function() {
  if(states.nav) {
    document.body.classList.remove('nav-mobile-open');
    hideMenuSections();
  }
  states.nav = false;
}




// Images
window.showSlide = function(index, slides) {
  if(index > slides.length -1) {
    index = 0;
  }
  if(index < 0) {
    index = slides.length -1;
  }
  for(let i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }
  slides[index].style.display = 'block';
  window.currentHomeIndex = index;
}

// Sets the height of the home section appropriately
window.setProperHomeHeight = function() {
  if(window.innerWidth < 900) {
    sections.home.style.height = `${window.innerHeight -60}px`;
  } else {
    sections.home.style.height = `${window.innerHeight}px`;
  }
}





















window.debounce = function(func, wait, immediate) {
  // 'private' variable for instance
  // The returned function will be able to reference this due to closure.
  // Each call to the returned function will share this common timer.
  var timeout;

  // Calling debounce returns a new anonymous function
  return function() {
    // reference the context and args for the setTimeout function
    var context = this,
      args = arguments;

    // Should the function be called now? If immediate is true
    //   and not already in a timeout then the answer is: Yes
    var callNow = immediate && !timeout;

    // This is the basic debounce behaviour where you can call this 
    //   function several times, but it will only execute once 
    //   [before or after imposing a delay]. 
    //   Each time the returned function is called, the timer starts over.
    clearTimeout(timeout);

    // Set the new timeout
    timeout = setTimeout(function() {

      // Inside the timeout function, clear the timeout variable
      // which will let the next execution run when in 'immediate' mode
      timeout = null;

      // Check if the function already ran with the immediate flag
      if (!immediate) {
        // Call the original function with apply
        // apply lets you define the 'this' object as well as the arguments 
        //    (both captured before setTimeout)
        func.apply(context, args);
      }
    }, wait);

    // Immediate mode and no wait timer? Execute the function..
    if (callNow) func.apply(context, args);
  }
}






}

