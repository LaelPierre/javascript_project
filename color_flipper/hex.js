const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function () {
  // variable to start color with an #
  let hexColor = "#";

  // loop to make the hex color 6 character
  for (let i = 0; i < 6; i++) {
    hexColor += hex[getRandomNumber()];
  }

  // display color in the DOM
  color.textContent = hexColor;
  document.body.style.backgroundColor = hexColor;
});

// function to generate random number
function getRandomNumber() {
  return Math.floor(Math.random() * hex.length);
}
