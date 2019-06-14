
export const variables = function() {
  'use strict'
  
  window.previousHomeIndex = 0;
  window.currentHomeIndex = 0;

  // Width Bank
  window.widthBank = window.innerWidth;


  window.states = {
    clicked: false,
    nav: false,
    lightbox: false,
    footer: false
  }
  
  
  window.icons = {
    openMenu: document.querySelector('.header__menu-icon'),
    closeMenu: document.querySelector('.nav__menu-icon'),
    headerTitle: document.querySelector('.header__title'),
  }
  
  window.navBtns = {
    artworks: document.querySelector('.nav__main-li--artworks'),
    magazines: document.querySelector('.nav__main-li--magazines'),

  }

  window.navBtnsDirect = {
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

  // All home images
  // Cannot use keyword images because the file is called images
  window.homeImgContainer = document.querySelector('.home__image-container');
  
  window.imgs = {
    home: document.querySelectorAll('.home__image'),
  }




}



