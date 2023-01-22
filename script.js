const nav = document.querySelector(".navbar-nav")
const navToggleBttn = document.querySelector(".nav-toggle-bttn")
const navLinks = document.querySelector(".nav-link")

const navToggleFunc = function () {
  nav.classList.toggle('active');
  navToggleBttn.classList.toggle('active');
}

navToggleBttn.addEventListener('click', navToggleFunc);

for (let i = 0; i < navLinks.length; i++) {
  navLinks[i].addEventListener('click', navToggleFunc);
}