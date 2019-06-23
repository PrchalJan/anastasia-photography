
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
    footer: false,
    homeIteration: false,
  }

  window.sectionStates = {
    archive: false,
  }

  window.highQuality = {
    archive: false,
  }


// IMAGE VARIABLES START
  window.interval = {
    home: null,
  }
  window.timeout = {
    home: null,
  }

  window.imageIndexes = {
    home: 0,
  }

  window.imageContainers = {
    home: document.querySelector('.home__image-container'),
  }

  window.imageSets = {
    home: imageContainers.home.children,
  }

  window.imageCount = {
    home: imageSets.home.length,
  }
// IMAGE VARIABLES FINISH


  
  
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
    nav: document.querySelector('#nav'),
    footer: document.querySelector('.footer'),
    lightbox: document.querySelector('.lightbox'),
  }

  // All home images
  // Cannot use keyword images because the file is called images
  window.home = {
    imageContainer: document.querySelector('.home__image-container'),
    left: document.querySelector('.home__left'),
    right: document.querySelector('.home__right')
  }
  window.lightbox = {
    captionIndex: document.querySelector('.lightbox__index-caption-text'),
    captionText: document.querySelector('.lightbox__figcaption'),
    closeBtn: document.querySelector('.lightbox__close-button'),
    nextBtn: document.querySelector('.lightbox__next-button'),
    previousBtn: document.querySelector('.lightbox__previous-button'),
    nextSpace: document.querySelector('.lightbox__next-space'),
    previousSpace: document.querySelector('.lightbox__previous-space'),
    
    imgSet: null,
    img: document.querySelector('#lightbox__image'),
    currentIndex: null,
    previousIndex: null,
    nextIndex: null,
    imgQuality: null,

    cache: document.querySelector('#lightbox__cache'),
    cacheImages: document.querySelector('#lightbox__cache').children,
  }

  window.imgs = {
    home: document.querySelectorAll('.home__image'),
    archive: document.querySelectorAll('.archive__img'),
  }


  window.imgsLength = {
    archive: imgs.archive.length,
  }

  window.clicks = {
    archiveContainer: document.querySelector('#archive__content'),
  }




}



