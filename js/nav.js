export const nav = function() {

setProperHomeHeight();


// Hide All Sections On Page Load

// Show only Home Section on page load
if(window.innerWidth > 899) {
  showSection(sections.home);
} else {
  showSection(sections.home, true);
}

// showSection(sections.archive, true);
// showSection(sections.home);
// document.body.classList.add('home--clicked');

function endFullScreenClick() {
  // if((window.innerWidth > 899) && !states.clicked) {
  if(!states.clicked) {
    document.body.classList.add('home--clicked');
    states.clicked = true;
  }
}











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
  endFullScreenClick();
})



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

function openSection_artworks(e) {
  if(e.target) {

  }
}


function openSection_artworks_click(e) {
  const artworksClicks = window.navSections.artworks.children;
  for(let i = 0; i < artworksClicks.length; i++) {
    // console.log(artworksClicks[i]);
    let cls = `nav__secondary-li--artworks-0${i}`;
    if(e.target.classList.contains(cls)) {
      let section = window.sections[`artworks0${i}`];
      showSection(section, true);
      console.log('This is the class: ', cls);
    } else if(e.target.classList.contains('nav__secondary-li--diary')) {
      showSection(window.sections.diary, true);
    }
    // console.log(artworksClicks[i]);
  }
  if(e.target.classList.contains('nav__secondary-li--artworks')) {
    // console.log('contains artworks')
  }
}

// console.log(window.navSections.artworks.children);

// openSection_artworks_click();





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

  openSection_artworks_click(e)

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
