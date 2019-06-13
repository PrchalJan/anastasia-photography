export const functions = function() {


// NAVIGATION

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




// Images
function showSlide(index, slides) {
  if(index > slides.length -1) {
    index = 0;
  }
  if(index < 0) {
    index = slides.length -1;
  }
  for(let i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
    console.log(i);
  }
  slides[index].style.display = 'block';

  currentHomeIndex = index;
}








}

