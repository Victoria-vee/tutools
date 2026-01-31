const hamburger = document.getElementById("hamburger");
const links = document.querySelector("header .links");

hamburger.addEventListener("click", () => {
  links.classList.toggle("active");
});

