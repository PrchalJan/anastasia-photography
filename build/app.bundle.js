!function(e){var n={};function o(t){if(n[t])return n[t].exports;var i=n[t]={i:t,l:!1,exports:{}};return e[t].call(i.exports,i,i.exports,o),i.l=!0,i.exports}o.m=e,o.c=n,o.d=function(e,n,t){o.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,n){if(1&n&&(e=o(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(o.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var i in e)o.d(t,i,function(n){return e[n]}.bind(null,i));return t},o.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(n,"a",n),n},o.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},o.p="",o(o.s=0)}([function(e,n,o){"use strict";o.r(n);window.previousHomeIndex=0,window.currentHomeIndex=0,window.widthBank=window.innerWidth,window.states={clicked:!1,nav:!1,lightbox:!1,footer:!1},window.interval={home:null},window.timeout={home:null},window.imageIndexes={home:0},window.imageContainers={home:document.querySelector(".home__image-container")},window.imageSets={home:imageContainers.home.children},window.imageCount={home:imageSets.home.length},window.icons={openMenu:document.querySelector(".header__menu-icon"),closeMenu:document.querySelector(".nav__menu-icon"),headerTitle:document.querySelector(".header__title")},window.navBtns={artworks:document.querySelector(".nav__main-li--artworks"),magazines:document.querySelector(".nav__main-li--magazines")},window.navBtnsDirect={archive:document.querySelector(".nav__main-li--archive"),about:document.querySelector(".nav__main-li--about"),contact:document.querySelector(".nav__main-li--contact")},window.navSections={artworks:document.querySelector(".nav__secondary-ul--artworks"),magazines:document.querySelector(".nav__secondary-ul--magazines")},window.sections={home:document.querySelector(".home"),artworks01:document.querySelector(".artworks__01"),artworks02:document.querySelector(".artworks__02"),artworks03:document.querySelector(".artworks__03"),diary:document.querySelector(".diary"),archive:document.querySelector(".archive"),about:document.querySelector(".about"),contact:document.querySelector(".contact")},window.components={header:document.querySelector(".header"),nav:document.querySelector(".nav"),footer:document.querySelector(".footer")},window.home={imageContainer:document.querySelector(".home__image-container"),left:document.querySelector(".home__left"),right:document.querySelector(".home__right")},window.imgs={home:document.querySelectorAll(".home__image")},window.showSection=function(e){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1];e.style.display="block",components.footer.style.display=n?"block":"none"},window.showHomeSection=function(){hideSections(),window.innerWidth>899?showSection(sections.home):showSection(sections.home,!0)},window.hideSections=function(){for(var e in sections)sections[e].style.display="none"},window.hideMenuSections=function(){navBtns.artworks.classList.remove("nav__main-li--open"),navBtns.magazines.classList.remove("nav__main-li--open")},window.openMenu=function(){states.nav||document.body.classList.add("nav-mobile-open"),states.nav=!0},window.closeMenu=function(){states.nav&&(document.body.classList.remove("nav-mobile-open"),hideMenuSections()),states.nav=!1},window.showSlide=function(e,n){e>n.length-1&&(e=0),e<0&&(e=n.length-1);for(var o=0;o<n.length;o++)n[o].style.display="none";n[e].style.display="block",window.currentHomeIndex=e},window.setProperHomeHeight=function(){window.innerWidth<900?sections.home.style.height="".concat(window.innerHeight-60,"px"):sections.home.style.height="".concat(window.innerHeight,"px")},window.debounce=function(e,n,o){var t;return function(){var i=this,c=arguments,r=o&&!t;clearTimeout(t),t=setTimeout(function(){t=null,o||e.apply(i,c)},n),r&&e.apply(i,c)}},window.xDown=null,window.yDown=null,window.getTouches=function(e){return e.touches},window.handleTouchStart=function(e){var n=getTouches(e)[0];xDown=n.clientX,yDown=n.clientY},window.handleTouchMove=function(e,n,o,t,i){if(xDown&&yDown){var c=e.touches[0].clientX,r=e.touches[0].clientY,a=xDown-c,s=yDown-r;Math.abs(a)>Math.abs(s)?a<0?n():o():s>0?t():i(),xDown=null,yDown=null}},setProperHomeHeight(),window.addEventListener("resize",function(){}),window.addEventListener("resize",debounce(function(){(widthBank!==window.innerWidth||window.innerWidth>899)&&(setProperHomeHeight(),"block"===sections.home.style.display&&showHomeSection()),widthBank=window.innerWidth},350)),function(){hideSections(),window.innerWidth>899?showSection(sections.home):showSection(sections.home,!0),icons.openMenu.addEventListener("click",function(){openMenu()}),icons.closeMenu.addEventListener("click",function(){closeMenu()}),components.nav.addEventListener("click",function(e){e.target===components.nav&&closeMenu()}),navBtns.artworks.addEventListener("click",function(e){e.target===this&&this.classList.toggle("nav__main-li--open")}),navBtns.magazines.addEventListener("click",function(e){e.target===this&&this.classList.toggle("nav__main-li--open")}),window.document.addEventListener("click",function(){window.innerWidth>899&&!states.clicked&&document.body.classList.add("home--clicked")});var e=function(e){navBtnsDirect[e].addEventListener("click",function(){hideSections(),showSection(sections[e],!0),closeMenu()})};for(var n in navBtnsDirect)e(n);icons.headerTitle.addEventListener("click",function(){showHomeSection()})}(),function(){function e(){interval.home=setInterval(function(){c("home")},4e3)}var n;function o(){i("home"),c("home")}function t(){i("home"),function(e){imageIndexes[e]-=1,r(e)}("home")}function i(n){clearInterval(interval[n]),clearTimeout(timeout[n]),timeout[n]=setTimeout(function(){e()},6e3)}function c(e){imageIndexes[e]+=1,r(e)}function r(e){console.log("Before Check Index: "+imageIndexes[e]),function(e){imageIndexes[e]>imageCount[e]-1&&(document.body.classList.add("home--immediate-transition"),imageIndexes[e]=0,a(e),setTimeout(function(){document.body.classList.remove("home--immediate-transition"),imageIndexes[e]=1},1)),imageIndexes[e]<0&&(document.body.classList.add("home--immediate-transition"),imageIndexes[e]=imageCount[e]-1,a(e),setTimeout(function(){document.body.classList.remove("home--immediate-transition"),imageIndexes[e]=imageCount[e]-2},1))}(e),console.log("After Check Index: "+imageIndexes[e]),function(e){setTimeout(function(){var n=s(e)*imageIndexes[e];imageContainers[e].style.transform="translateX(-".concat(n,"%)")},1)}(e)}function a(e){var n=s(e)*imageIndexes[e];imageContainers[e].style.transform="translateX(-".concat(n,"%)")}function s(e){return 100/imageCount[e]}window.addEventListener("load",function(){e()}),n="home",imageContainers[n].style.width="".concat(100*imageCount[n],"%"),home.left.addEventListener("click",function(){t()}),home.right.addEventListener("click",function(){o()}),sections.home.addEventListener("touchstart",handleTouchStart,!1),sections.home.addEventListener("touchmove",function(e){handleTouchMove(e,function(){t()},function(){o()})},!1)}(),window.document.addEventListener("click",function(e){console.log(e.target)})}]);