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










// Postpone resizing events
window.debounce = function(func, wait, immediate) {
  var timeout;
  return function() {
    var context = this,
      args = arguments;
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(function() {
      timeout = null;
      if (!immediate) {
        func.apply(context, args);
        console.log('debounced')
      }
    }, wait);
    if (callNow) {
      func.apply(context, args);
      console.log('debounced');
    } 
  }
}


// Add Touch Events
window.xDown = null;
window.yDown = null;
window.getTouches = function(e) {
  return e.touches;
};
window.handleTouchStart = function(e) {
  const firstTouch = getTouches(e)[0];
  xDown = firstTouch.clientX;
  yDown = firstTouch.clientY;
};
window.handleTouchMove = function(e, left, right, up, down) {
  if(!xDown || !yDown) {
    return;
  };

  var xUp = e.touches[0].clientX;
  var yUp = e.touches[0].clientY;

  var xDiff = xDown - xUp;
  var yDiff = yDown - yUp;

  if(Math.abs(xDiff) > Math.abs(yDiff)) {
    if(xDiff < 0) {
      // Left Swipe
      left();
    } else {
      //Right Swipe
      right();
    }
  } else {
    if(yDiff > 0) {
      // Up Swipe
      up();
    } else {
      // Down Swipe
      down();
    }
  }
  // reset values
  xDown = null;
  yDown = null;

}




}

