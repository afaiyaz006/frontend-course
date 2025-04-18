const toggleBtn = document.querySelector(".mobile-menu-toogle");
const mobileMenu = document.querySelector(".mobile-menu");
const navbar = document.querySelector(".navbar");
// console.log(toggleBtn);
// console.log(mobileMenu);
toggleBtn.addEventListener("click", () => {
  //   toggleBtn.classList.toggle("open");
  mobileMenu.classList.toggle("activate");
});

window.addEventListener("scroll", () => {
  console.log(window.scrollY);
  console.log(navbar);
  if (window.scrollY > 0) {
    navbar.classList.add("navbar-scroll");
  } else {
    navbar.classList.remove("navbar-scroll");
  }
});
