!function(e){var n={};function t(o){if(n[o])return n[o].exports;var r=n[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,t),r.l=!0,r.exports}t.m=e,t.c=n,t.d=function(e,n,o){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:o})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(t.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)t.d(o,r,function(n){return e[n]}.bind(null,r));return o},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=0)}([function(e,n,t){"use strict";t.r(n);window.states={clicked:!1,nav:!1,lightbox:!1},window.icons={openMenu:document.querySelector(".header__menu-icon"),closeMenu:document.querySelector(".nav__menu-icon")},window.navBtns={artworks:document.querySelector(".nav__main-li--artworks"),magazines:document.querySelector(".nav__main-li--magazines"),archive:document.querySelector(".nav__main-li--archive"),about:document.querySelector(".nav__main-li--about"),contact:document.querySelector(".nav__main-li--contact")},window.navSections={artworks:document.querySelector(".nav__secondary-ul--artworks"),magazines:document.querySelector(".nav__secondary-ul--magazines")},window.sections={home:document.querySelector(".home"),artworks01:document.querySelector(".artworks__01"),artworks02:document.querySelector(".artworks__02"),artworks03:document.querySelector(".artworks__03"),diary:document.querySelector(".diary"),archive:document.querySelector(".archive"),about:document.querySelector(".about"),contact:document.querySelector(".contact")},window.components={header:document.querySelector(".header"),nav:document.querySelector(".nav"),footer:document.querySelector(".footer")},function(){function e(){states.nav&&(document.body.classList.remove("nav-mobile-open"),navBtns.artworks.classList.remove("nav__main-li--open"),navBtns.magazines.classList.remove("nav__main-li--open")),states.nav=!1}!function(){for(var e in sections)sections[e].style.display="none"}(),sections.home.style.display="block",icons.openMenu.addEventListener("click",function(){states.nav||document.body.classList.add("nav-mobile-open"),states.nav=!0}),icons.closeMenu.addEventListener("click",function(){e()}),components.nav.addEventListener("click",function(n){n.target===components.nav&&e()}),navBtns.artworks.addEventListener("click",function(e){e.target===this&&this.classList.toggle("nav__main-li--open")}),navBtns.magazines.addEventListener("click",function(e){e.target===this&&this.classList.toggle("nav__main-li--open")}),window.document.addEventListener("click",function(){window.innerWidth>899&&!states.clicked&&document.body.classList.add("home--clicked")})}(),window.document.addEventListener("click",function(e){console.log(e.target)})}]);