export const nav = function() {

setProperHomeHeight();


// Hide All Sections On Page Load

// Show only Home Section on page load
// if(window.innerWidth > 899) {
//   showSection(sections.home);
// } else {
//   showSection(sections.home, true);
// }

// showSection(sections.archive, true);
showSection(sections.home);
document.body.classList.add('home--clicked');











// Close mobile menu on menu gap click
// components.nav.addEventListener('click', function(e) {
//   if(e.target === components.nav) {
//     closeMenu();
//   }
// })






function expandHideArtworksClick(e) {
  if(e.target === navBtns.artworks) {
    navBtns.artworks.classList.toggle('nav__main-li--open');
  }
}
function expandHideMagazinesClick(e) {
  if(e.target === navBtns.magazines) {
    navBtns.magazines.classList.toggle('nav__main-li--open');
  }
}



// Show desktop menu on click
window.document.addEventListener('click', function() {

})

function endFullScreenClick() {
  if((window.innerWidth > 899) && !states.clicked) {
    document.body.classList.add('home--clicked');
    states.clicked = true;
  }
}

// Show Archive/about/contact on click
// for( let btn in navBtnsDirect) {
//   navBtnsDirect[btn].addEventListener('click', function() {
//     hideSections();
//     showSection(sections[btn], true);
//     closeMenu();
//   })
// }

// function openArchiveSectionListener(e) {
//   console.log(e.target);
//   console.log(navBtnsDirect.archive);
//   if(e.target === navBtnsDirect.archive) {
//     console.log('e.target=== sections.archive');
//     showSection(sections.archive, true);
//   }
// }

function openDirectSectionListener(e) {
  for(let btn in navBtnsDirect) {
    if(e.target === navBtnsDirect[btn]) {
      if(e.target === navBtnsDirect.archive) {
        showSection(sections.archive, true);
        loadResponsiveArchiveImages();
        renderArchiveGrid();
        sectionStates.archive = true;
      } else {
        showSection(sections[btn], true);
      }
    }
  }
}






//////////////////
// LOAD EVENTS // 
////////////////

window.addEventListener('load', function() {
  startHomeIterationLoad();


  console.log('loaded');
})





////////////////////
// CLICK EVENTS ///
//////////////////

window.addEventListener('click', function(e) {
  endFullScreenClick()
})

// One Listener for all Menu Click events
components.nav.addEventListener('click', function(e) {
  // Open Archive/About/Contact on click
  openDirectSectionListener(e);

  closeMenuGapClick(e);

  expandHideArtworksClick(e)

  expandHideMagazinesClick(e)

})


// Go home on header title click
icons.headerTitle.addEventListener('click', function() {
  showHomeSection();
})

 // Open mobile menu on header icon click
icons.openMenu.addEventListener('click', function() {
  openMenu();
})
// Close mobile menu on mobile menu close button click;
icons.closeMenu.addEventListener('click', function() {
  closeMenu();
})







////////////////////
// RESIZE EVENTS //
//////////////////
window.addEventListener('resize', debounce(function() {

  // Resize home height on window change
  setProperHomeHeightOnResize();

  // If Archive open, rerender archive grid
  renderArchiveGridOnResize();

  // Load better / worse archive images if the window size changes
  loadArchiveImagesResize();

  setLightboxImageQuality();

  cacheImage(window.imgs.archive[0]);

  setCaptionWidth_resize();

  // setCaptionPosition_resize();
}, 400));
















}
