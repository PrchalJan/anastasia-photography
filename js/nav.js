
export const nav = function() {

// Hide All Sections On Page Load
for(let section in sections) {
  sections[section].style.display = 'none';
}




  // Expand/Hide artworks on click
  navButtons.artworks.addEventListener('click', function(e) {
    if(e.target === this) {
      this.classList.toggle('nav__main-li--open');
    }
  })
  // Expand/Hide magazines on click
  navButtons.magazines.addEventListener('click', function(e) {
    if(e.target === this) {
      this.classList.toggle('nav__main-li--open');
    }
  })
  // Open mobile menu on header icon click
  icon.openMenu.addEventListener('click', function() {
    document.body.classList.add('nav-mobile-open');
  })
  // Close mobile menu on mobile menu cross click;
  icon.closeMenu.addEventListener('click', function() {
    document.body.classList.remove('nav-mobile-open');
  })
  // Close mobile menu on menu gap click
  sections.nav.addEventListener('click', function(e) {
    if(e.target === sections.nav) {
      document.body.classList.remove('nav-mobile-open');
    }
  })
}
