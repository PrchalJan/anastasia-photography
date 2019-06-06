

navButtons.artworks.addEventListener('click', function() {
  this.classList.toggle('nav__main-li--open');
})
navButtons.magazines.addEventListener('click', function() {
  this.classList.toggle('nav__main-li--open');
})

icon.openMenu.addEventListener('click', function() {
  document.body.classList.add('nav-mobile-open');
})
icon.closeMenu.addEventListener('click', function() {
  document.body.classList.remove('nav-mobile-open');
})
