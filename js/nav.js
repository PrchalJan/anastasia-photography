
export const nav = function() {

// Hide All Sections On Page Load
hideSections();
// Show only Home Section on page load
showSection(sections.home);

 // Open mobile menu on header icon click
 icons.openMenu.addEventListener('click', function() {
  openMenu();
})
// Close mobile menu on mobile menu close button click;
icons.closeMenu.addEventListener('click', function() {
  closeMenu();
})
// Close mobile menu on menu gap click
components.nav.addEventListener('click', function(e) {
  if(e.target === components.nav) {
    closeMenu();
  }
})



// Show a single section
// in: section
function showSection(section) {
  section.style.display = 'block';
}

// Hide all sections
function hideSections() {
  for(let section in sections) {
    sections[section].style.display = 'none';
  }
}

// Open main mobile menu
function openMenu() {
  if(!states.nav) {
    document.body.classList.add('nav-mobile-open');
  }
  states.nav = true;
}
function closeMenu() {
  if(states.nav) {
    document.body.classList.remove('nav-mobile-open');
  }
  states.nav = false;
}




 








  // Expand/Hide artworks on click
  navBtns.artworks.addEventListener('click', function(e) {
    if(e.target === this) {
      this.classList.toggle('nav__main-li--open');
    }
  })
  // Expand/Hide magazines on click
  navBtns.magazines.addEventListener('click', function(e) {
    if(e.target === this) {
      this.classList.toggle('nav__main-li--open');
    }
  })















}
