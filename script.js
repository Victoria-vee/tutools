const hamburger = document.getElementById("hamburger");
const links = document.querySelector("nav");

hamburger.addEventListener("click", () => {
  links.classList.toggle("active");
});

