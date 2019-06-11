
export const variables = function() {
  'use strict'
  const states = {
    clicked: false,
    navMobileOpen: false,
  }
  window.states = states;
  
  
  const icon = {
    openMenu: document.querySelector('.header__menu-icon'),
    closeMenu: document.querySelector('.nav__menu-icon'),
  }
  window.icon = icon
  
  const navButtons = {
    artworks: document.querySelector('.nav__main-li--artworks'),
    magazines: document.querySelector('.nav__main-li--magazines'),
    archive: document.querySelector('.nav__main-li--archive'),
    about: document.querySelector('.nav__main-li--about'),
    contact: document.querySelector('.nav__main-li--contact'),
  }
  window.navButtons = navButtons
  
  const navSections = {
    artworks: document.querySelector('.nav__secondary-ul--artworks'),
    magazines: document.querySelector('.nav__secondary-ul--magazines'),
  }
  window.navSections = navSections;
  
  // Main Sections
  const sections = {
    nav: document.querySelector('.nav'),
  }
  window.sections = sections

}



