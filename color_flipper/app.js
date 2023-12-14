const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];

// select btn and text display
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function () {
  // radom number
  const randomNumber = getRandomNumber();

  // display random number
  document.body.style.backgroundColor = colors[randomNumber];
  color.textContent = colors[randomNumber];
});

// generate random number
function getRandomNumber() {
  return Math.floor(Math.random() * colors.length);
}
