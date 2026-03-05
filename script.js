'use strict';

const menuOpenBtn = document.querySelectorAll("[data-menuopen-btn]");
const overLay = document.querySelector("[data-overlay]");
const menuCloseBtn = document.querySelectorAll("[data-menuclose-btn]");
const navLinks = document.querySelectorAll("[data-nav-link]");
const navBar = document.querySelector("[data-navbar-menu]");

const navToggleElem = [ ...menuOpenBtn, ...navLinks, ...menuCloseBtn, overLay];

navToggleElem.forEach(elems => {
    elems.addEventListener("click", () => {
            navBar.classList.toggle("active");
            overLay.classList.toggle("active");
        })
    });