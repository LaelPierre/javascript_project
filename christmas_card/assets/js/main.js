/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById("nav-menu");
const navToggle = document.getElementById("nav-toggle");
const navClose = document.getElementById("nav-close");

// show menu
navToggle.addEventListener("click", function () {
  navMenu.classList.toggle("show-menu");
});

// show hidden
navClose.addEventListener("click", function () {
  navMenu.classList.remove("show-menu");
});

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll(".nav-link");

const linkAction = () => {
  const navMenu = document.getElementById("nav-menu");
  // when click on each nav-link, remove the show menu class
  navMenu.classList.remove("show-menu");
};

navLink.forEach((n) => n.addEventListener("click", linkAction));

/*=============== DAY COUNTER FOR CHRISTMAS ===============*/
