const toggle = document.getElementsByClassName("darkModeButton");
const body = document.querySelector("body");

darkModeButton.addEventListener("click", function () {
  this.classList.toggle("bi-moon");
  if (this.classList.toggle("bi-brightness-high-fill")) {
    body.style.background = "white";
    body.style.color = "black";
    body.style.transition = "1s";
  } else {
    body.style.background = "black";
    body.style.color = "white";
    body.style.transition = "1s";
  }
});

const colors = [
  "#124b00",
  "#eb5bff",
  "#009400",
  "#a045be",
  "#008700",
  "#59006e",
  "#dfe369",
  "#30005d",
  "#00ddbf",
  "#ff0641",
  "#00ffff",
  "#9b0000",
  "#00ffff",
  "#ff513e",
  "#00bfff",
  "#ff6a39",
  "#00b0ff",
  "#c5351c",
  "#3c43a6",
  "#4b7000",
  "#6b005a",
  "#006636",
  "#f9b6ff",
  "#002f00",
  "#ffc2ff",
  "#002f04",
  "#ff7383",
  "#007865",
  "#860000",
  "#a0c7e7",
  "#b6254a",
  "#005143",
  "#d77e8c",
  "#002e74",
  "#004748",
  "#640030",
  "#003a6c",
  "#676e9a",
  "#002a42",
  "#625271",
];
const btnmash = document.getElementById("btnmash");
const color = document.getElementsByClassName(".color");

btnmash.addEventListener("click", function () {
  const randomNumber = getRandomNumber();
  mashsection.style.background = colors[randomNumber];
  color.textContent = colors[randomNumber];
});

function getRandomNumber() {
  return Math.floor(Math.random() * colors.length);
}
