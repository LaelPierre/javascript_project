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
const titleData = document.getElementById("title-data");
const numberData = document.getElementById("number-data");
const textData = document.getElementById("text-data");
const msgChristmas = document.getElementById("msg-christmas");

const christmasCountDown = () => {
  // get date
  let now = new Date();
  let currentMonth = now.getMonth() + 1;
  let currentDay = now.getDate();

  // calculate the year the next christmas will be
  let nextChristmasYear = now.getFullYear();

  if (currentMonth == 12 && currentDay > 25) {
    nextChristmasYear += 1;
  }

  let nextChristmasDate = `Dec 25, ${nextChristmasYear} 00:00:00`;
  let christmasDay = new Date(nextChristmasDate);
  let timeLeft = christmasDay - now;

  let days = 0;
  let hours = 0;
  let minutes = 0;
  let seconds = 0;

  // don't calculate the time left if it is christmas day
  if (currentMonth != 12 || (currentMonth == 12 && currentDay != 25)) {
    days = Math.floor(timeLeft / 1000 / 60 / 60 / 24);
    hours = Math.floor(timeLeft / 1000 / 60 / 60) % 24;
    days = Math.floor(timeLeft / 1000 / 60) % 60;
    seconds = Math.floor(timeLeft / 1000) % 60;
  }

  // show missing days
  numberData.innerHTML = days < 10 ? `0${days}` : days;
  textData.innerHTML = "Days";

  // show missing hours
  if (currentDay == 24) {
    numberData.innerHTML = hours < 10 ? `0${hours}` : hours;
    textData.innerHTML = "Hours";
  }

  // show missing minutes. Countdown, o hours left, show minutes (00:59)
  if (currentDay == 24 && hours == 0) {
    numberData.innerHTML = minutes < 10 ? `0${minutes}` : minutes;
    textData.innerHTML = "Minutes";
  }

  // show missing secondes. Countdown, o hours left, show minutes (00:59)
  if (currentDay == 24 && hours === 0 && minutes === 0) {
    numberData.innerHTML = seconds < 10 ? `0${seconds}` : seconds;
    textData.innerHTML = "Seconds";
  }

  // show message on Christmas day
  if (currentMonth == 12 && currentDay == 25) {
    titleData.style.display = "none";
    msgChristmas.style.display = "block";
    msgChristmas.innerHTML = "Today is Dec 25, Merry Christmas";
  }

  // show remaining days & remove Christmas message
  if (currentMonth == 12 && currentDay == 26) {
    titleData.style.display = "block";
    msgChristmas.innerHTML = "none";
  }
};

setInterval(christmasCountDown, 1000);
