!function(e){var n={};function t(o){if(n[o])return n[o].exports;var i=n[o]={i:o,l:!1,exports:{}};return e[o].call(i.exports,i,i.exports,t),i.l=!0,i.exports}t.m=e,t.c=n,t.d=function(e,n,o){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:o})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(t.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var i in e)t.d(o,i,function(n){return e[n]}.bind(null,i));return o},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=0)}([function(e,n,t){"use strict";t.r(n);window.previousHomeIndex=0,window.currentHomeIndex=0,window.widthBank=window.innerWidth,window.states={clicked:!1,nav:!1,lightbox:!1,footer:!1,homeIteration:!1},window.sectionStates={archive:!1},window.highQuality={archive:!1},window.interval={home:null},window.timeout={home:null},window.imageIndexes={home:0},window.imageContainers={home:document.querySelector(".home__image-container")},window.imageSets={home:imageContainers.home.children},window.imageCount={home:imageSets.home.length},window.icons={openMenu:document.querySelector(".header__menu-icon"),closeMenu:document.querySelector(".nav__menu-icon"),headerTitle:document.querySelector(".header__title")},window.navBtns={artworks:document.querySelector(".nav__main-li--artworks"),magazines:document.querySelector(".nav__main-li--magazines")},window.navBtnsDirect={archive:document.querySelector(".nav__main-li--archive"),about:document.querySelector(".nav__main-li--about"),contact:document.querySelector(".nav__main-li--contact")},window.navSections={artworks:document.querySelector(".nav__secondary-ul--artworks"),magazines:document.querySelector(".nav__secondary-ul--magazines")},window.sections={home:document.querySelector(".home"),artworks01:document.querySelector(".artworks__01"),artworks02:document.querySelector(".artworks__02"),artworks03:document.querySelector(".artworks__03"),diary:document.querySelector(".diary"),archive:document.querySelector(".archive"),about:document.querySelector(".about"),contact:document.querySelector(".contact")},window.components={header:document.querySelector(".header"),nav:document.querySelector("#nav"),footer:document.querySelector(".footer"),lightbox:document.querySelector(".lightbox")},window.home={imageContainer:document.querySelector(".home__image-container"),left:document.querySelector(".home__left"),right:document.querySelector(".home__right")},window.lightbox={captionIndex:document.querySelector(".lightbox__index-caption-text"),captionText:document.querySelector(".lightbox__figcaption"),closeBtn:document.querySelector(".lightbox__close-button"),imgSet:null,img:document.querySelector("#lightbox__image"),currentIndex:null,previousIndex:null,nextIndex:null},window.imgs={home:document.querySelectorAll(".home__image"),archive:document.querySelectorAll(".archive__img")},window.imgsLength={archive:imgs.archive.length},window.clicks={archiveContainer:document.querySelector("#archive__content")},window.openMenu=function(){states.nav||document.body.classList.add("nav-mobile-open"),states.nav=!0},window.closeMenu=function(){states.nav&&(document.body.classList.remove("nav-mobile-open"),hideMenuSections()),states.nav=!1},window.closeMenuGapClick=function(e){e.target===components.nav&&window.innerWidth<900&&closeMenu()},window.hideSections=function(){for(var e in sections)sections[e].style.display="none";for(var n in sectionStates)sectionStates[n]=!1},window.showSection=function(e){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1];hideSections(),e.style.display="block",components.footer.style.display=n?"block":"none",closeMenu()},window.showHomeSection=function(){hideSections(),window.innerWidth>899?showSection(sections.home):showSection(sections.home,!0)},window.hideMenuSections=function(){navBtns.artworks.classList.remove("nav__main-li--open"),navBtns.magazines.classList.remove("nav__main-li--open")},window.showSlide=function(e,n){e>n.length-1&&(e=0),e<0&&(e=n.length-1);for(var t=0;t<n.length;t++)n[t].style.display="none";n[e].style.display="block",window.currentHomeIndex=e},window.setProperHomeHeight=function(){window.innerWidth<900?sections.home.style.height="".concat(window.innerHeight-60,"px"):sections.home.style.height="".concat(window.innerHeight,"px")},window.setProperHomeHeightOnResize=function(){(widthBank!==window.innerWidth||window.innerWidth>899)&&(setProperHomeHeight(),"block"===sections.home.style.display&&showHomeSection()),widthBank=window.innerWidth},window.debounce=function(e,n,t){var o;return function(){var i=this,c=arguments,r=t&&!o;clearTimeout(o),o=setTimeout(function(){o=null,t||(e.apply(i,c),console.log("debounced"))},n),r&&(e.apply(i,c),console.log("debounced"))}},window.xDown=null,window.yDown=null,window.getTouches=function(e){return e.touches},window.handleTouchStart=function(e){var n=getTouches(e)[0];xDown=n.clientX,yDown=n.clientY},window.handleTouchMove=function(e,n,t,o,i){if(xDown&&yDown){var c=e.touches[0].clientX,r=e.touches[0].clientY,a=xDown-c,s=yDown-r;Math.abs(a)>Math.abs(s)?a<0?n():t():s>0?o():i(),xDown=null,yDown=null}},window.addEventListener("resize",function(){}),function(){function e(){interval.home=setInterval(function(){c("home")},4e3)}var n;function t(){i("home"),c("home")}function o(){i("home"),function(e){imageIndexes[e]-=1,r(e)}("home")}function i(n){clearInterval(interval[n]),clearTimeout(timeout[n]),timeout[n]=setTimeout(function(){e()},6e3)}function c(e){imageIndexes[e]+=1,r(e)}function r(e){!function(e){imageIndexes[e]>imageCount[e]-1&&(document.body.classList.add("home--immediate-transition"),imageIndexes[e]=0,a(e),setTimeout(function(){document.body.classList.remove("home--immediate-transition"),imageIndexes[e]=1},8)),imageIndexes[e]<0&&(document.body.classList.add("home--immediate-transition"),imageIndexes[e]=imageCount[e]-1,a(e),setTimeout(function(){document.body.classList.remove("home--immediate-transition"),imageIndexes[e]=imageCount[e]-2},8))}(e),function(e){setTimeout(function(){var n=s(e)*imageIndexes[e];imageContainers[e].style.transform="translateX(-".concat(n,"%)")},10)}(e)}function a(e){var n=s(e)*imageIndexes[e];imageContainers[e].style.transform="translateX(-".concat(n,"%)")}function s(e){return 100/imageCount[e]}window.startHomeIterationLoad=function(){states.homeIteration||(e(),states.homeIteration=!0)},n="home",imageContainers[n].style.width="".concat(100*imageCount[n],"%"),home.left.addEventListener("click",function(){o()}),home.right.addEventListener("click",function(){t()}),sections.home.addEventListener("touchstart",handleTouchStart,!1),sections.home.addEventListener("touchmove",function(e){handleTouchMove(e,function(){o()},function(){t()})},!1)}(),function(){function e(e,n){var t=n||1;!function(e,n){for(var t=0;t<e.length;t++)e[t].style.width=100/n+"%"}(e=document.querySelectorAll(".archive__figure"),t),function(e){for(var n=0;n<e.length;n++)e[n].style.top=0,e[n].style.left=0}(e),function(e,n){for(var t,o,i=1;i<e.length;i++)i%n==0?(o=e[i-n].offsetTop+e[i-n].offsetHeight,e[i].style.top=o+"px"):(e[i-n]&&(o=e[i-n].offsetTop+e[i-n].offsetHeight,e[i].style.top=o+"px"),t=e[i-1].offsetLeft+e[i-1].offsetWidth,e[i].style.left=t+"px")}(e,t),function(e,n){for(var t=e[0].parentElement,o=0,i=e.length-n-1;i<e.length;i++){var c=e[i].offsetTop+parseInt(getComputedStyle(e[i]).height);o>c||(o=c)}t.style.height=o+"px"}(e,t)}window.renderArchiveGrid=function(){var n=document.querySelectorAll(".archive__figure");return function(n){return window.innerWidth<601?e.call(this,n,2):window.innerWidth<1250?e.call(this,n,3):e.call(this,n,4)}.call(this,n)},window.renderArchiveGridOnResize=function(){sectionStates.archive&&(renderArchiveGrid(),setTimeout(function(){renderArchiveGrid(),setTimeout(function(){renderArchiveGrid()},100)},100))},window.addEventListener("load",function(){renderArchiveGrid()},!1)}(),function e(){function n(){document.body.classList.remove("lightbox-open"),states.lightbox=!1,window.lightbox.img.removeAttribute("src"),e.imgSet=null,window.lightbox.captionIndex.innerHTML="",window.lightbox.captionText.innerHTML=""}document.addEventListener("contextmenu",function(n){n.preventDefault(),console.log("//////////////////////////"),console.log("// LIGHTBOX DEBUGGER //"),console.log("states.lightbox: "+states.lightbox),console.log("lightbox.imgSet: "+e.imgSet),console.log("lightbox.img  source: "+window.lightbox.img.src),console.log("Caption index: "+window.lightbox.captionIndex.innerHTML),console.log("Caption text: "+window.lightbox.captionText.innerHTML),console.log("Current Index: "+window.lightbox.currentIndex),console.log("Next Index: "+window.lightbox.nextIndex),console.log("Previous Index: "+window.lightbox.previousIndex),console.log("//////////////////////////")}),window.closeLightboxBtnClick=function(){states.lightbox&&n()},window.closeLightboxGapClick=function(e){states.lightbox&&e.target===components.lightbox&&n()},window.openLightbox=function(){states.lightbox||(document.body.classList.add("lightbox-open"),states.lightbox=!0)},window.setLightboxImages=function(n,t,o){var i,c,r=n[t].getAttribute("data-src").replace("?",o);window.lightbox.img.src=r,e.imgSet=n,function(e,n){window.lightbox.captionIndex.innerHTML="".concat(n+1," / ").concat(e.length)}(n,t),i=n[t],c=i.getAttribute("alt"),window.lightbox.captionText.innerHTML=c,function(e,n){window.lightbox.currentIndex=n,n===e.length-1?window.lightbox.nextIndex=0:window.lightbox.nextIndex=n+1,window.lightbox.previousIndex=0===n?e.length-1:n-1}(n,t)},window.setResponsiveLightboxImages=function(e,n){window.innerWidth<602?setLightboxImages(e,n,640):window.innerWidth<1602?setLightboxImages(e,n,1280):window.innerWidth>1601&&setLightboxImages(e,n,1920)},window.openArchiveLightboxClick=function(e){var n=document.querySelectorAll(".archive__img"),t=e.target.firstElementChild;if(t.classList.contains("archive__img")){var o=function(e,n){for(var t=0;t<e.length;t++)if(e[t]===n)return t}(n,t);openLightbox(),setResponsiveLightboxImages(n,o)}}}(),window.loadArchiveImages=function(e){for(var n=0;n<imgs.archive.length;n++){var t=imgs.archive[n].getAttribute("data-src").replace("?",e);imgs.archive[n].src=t}},window.loadResponsiveArchiveImages=function(){window.innerWidth<600?loadArchiveImages(300):(loadArchiveImages(400),highQuality.archive=!0)},window.loadArchiveImagesResize=function(){sectionStates.archive&&!highQuality.archive&&loadResponsiveArchiveImages()},function(){setProperHomeHeight(),showSection(sections.home),document.body.classList.add("home--clicked"),window.document.addEventListener("click",function(){}),window.addEventListener("load",function(){startHomeIterationLoad(),console.log("loaded")}),window.addEventListener("click",function(e){window.innerWidth>899&&!states.clicked&&(document.body.classList.add("home--clicked"),states.clicked=!0)}),components.nav.addEventListener("click",function(e){!function(e){for(var n in navBtnsDirect)e.target===navBtnsDirect[n]&&(e.target===navBtnsDirect.archive?(showSection(sections.archive,!0),loadResponsiveArchiveImages(),renderArchiveGrid(),sectionStates.archive=!0):showSection(sections[n],!0))}(e),closeMenuGapClick(e),function(e){e.target===navBtns.artworks&&navBtns.artworks.classList.toggle("nav__main-li--open")}(e),function(e){e.target===navBtns.magazines&&navBtns.magazines.classList.toggle("nav__main-li--open")}(e)}),icons.headerTitle.addEventListener("click",function(){showHomeSection()}),icons.openMenu.addEventListener("click",function(){openMenu()}),icons.closeMenu.addEventListener("click",function(){closeMenu()}),lightbox.closeBtn.addEventListener("click",function(){closeLightboxBtnClick()}),clicks.archiveContainer.addEventListener("click",function(e){openArchiveLightboxClick(e)}),components.lightbox.addEventListener("click",function(e){closeLightboxGapClick(e)}),window.addEventListener("resize",debounce(function(){setProperHomeHeightOnResize(),renderArchiveGridOnResize(),loadArchiveImagesResize()},400))}()}]);