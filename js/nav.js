
export const nav = function() {

// Hide All Sections On Page Load
hideSections();
// Show only Home Section on page load
if(window.innerWidth > 899) {
  showSection(sections.home);
} else {
  showSection(sections.home, true);
}


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


// Show desktop menu on click
window.document.addEventListener('click', function() {
  if((window.innerWidth > 899) && !states.clicked) {
    document.body.classList.add('home--clicked');
  }
})

// Show Archive/about/contact on click
for( let btn in navBtnsDirect) {
  navBtnsDirect[btn].addEventListener('click', function() {
    hideSections();
    showSection(sections[btn], true);
  })
}

// Go home on header title click
icons.headerTitle.addEventListener('click', function() {
  hideSections();
  showSection(sections.home);
})


// Show a single section
// in: section, footer(yes/no)
function showSection(section, footer=false) {
  section.style.display = 'block';
  if(footer) {
    components.footer.style.display = 'block';
  } else {
    components.footer.style.display = 'none';
  }
}

// Hide all sections
function hideSections() {
  for(let section in sections) {
    sections[section].style.display = 'none';
  }
}

function hideMenuSections() {
  navBtns.artworks.classList.remove('nav__main-li--open');
  navBtns.magazines.classList.remove('nav__main-li--open');
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
    hideMenuSections();
  }
  states.nav = false;
}


























}
