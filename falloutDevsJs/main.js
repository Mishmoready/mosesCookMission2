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

let links = document.getElementsByClassName("about-li");
for (i = 0; i < links.length; i++) {
  links[i].className = "link-" + i;
}
