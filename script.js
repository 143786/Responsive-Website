let navbar = document.querySelector("nav");
let menuLinks = document.getElementById("meun-links");

function toogleMenu() {
  menuLinks.classList.taggle("show-menu");
}

window.onscroll = function () {
  if (window.scrollY > 0) {
    navbar.style.background = "#eefff9";
  } else {
    navbar.style.background = "transparent";
  }
};
