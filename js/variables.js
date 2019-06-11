
export const variables = function() {
  'use strict'
  window.states = {
    clicked: false,
    navMobileOpen: false,
    lightbox: false
  }
  
  
  window.icon = {
    openMenu: document.querySelector('.header__menu-icon'),
    closeMenu: document.querySelector('.nav__menu-icon'),
  }
  
  window.navButtons = {
    artworks: document.querySelector('.nav__main-li--artworks'),
    magazines: document.querySelector('.nav__main-li--magazines'),
    archive: document.querySelector('.nav__main-li--archive'),
    about: document.querySelector('.nav__main-li--about'),
    contact: document.querySelector('.nav__main-li--contact'),
  }
  
  window.navSections = {
    artworks: document.querySelector('.nav__secondary-ul--artworks'),
    magazines: document.querySelector('.nav__secondary-ul--magazines'),
  }

  
  // Main Sections
  window.sections = {
    home: document.querySelector('.home'),
    artworks01: document.querySelector('.artworks__01'),
    artworks02: document.querySelector('.artworks__02'),
    artworks03: document.querySelector('.artworks__03'),
    diary: document.querySelector('.diary'),
    archive: document.querySelector('.archive'),
    about: document.querySelector('.about'),
    contact: document.querySelector('.contact')
  }

  window.components = {
    header: document.querySelector('.header'),
    nav: document.querySelector('.nav'),
    footer: document.querySelector('.footer')
  }




}



