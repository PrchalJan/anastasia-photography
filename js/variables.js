
states = {
  clicked: false,
  navMobileOpen: false,
}


icon = {
  openMenu: document.querySelector('.header__menu-icon'),
  closeMenu: document.querySelector('.nav__menu-icon'),
}

navButtons = {
  artworks: document.querySelector('.nav__main-li--artworks'),
  magazines: document.querySelector('.nav__main-li--magazines'),
  archive: document.querySelector('.nav__main-li--archive'),
  about: document.querySelector('.nav__main-li--about'),
  contact: document.querySelector('.nav__main-li--contact'),
}

navSections = {
  artworks: document.querySelector('.nav__secondary-ul--artworks'),
  magazines: document.querySelector('.nav__secondary-ul--magazines'),
}

// Main Sections
sections = {
  nav: document.querySelector('.nav'),
}


// Debugger
window.document.addEventListener('click', function(e) {
  console.log(e.target);
})

