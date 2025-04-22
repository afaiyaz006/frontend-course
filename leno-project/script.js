const toggleBtn = document.querySelector(".navbar__mobile-menu-toggle");
const mobileMenu = document.querySelector(".navbar__mobile-menu-items");
const navbar = document.querySelector(".navbar");
const dialog = document.querySelector("dialog");
// console.log(toggleBtn);
// console.log(mobileMenu);
// console.log(navbar);

toggleBtn.addEventListener("click", () => {
  mobileMenu.classList.toggle("show");
});

window.addEventListener("scroll", () => {
  if (window.scrollY > 0) {
    navbar.classList.add("navbar-scroll");
  } else {
    navbar.classList.remove("navbar-scroll");
  }
});

dialog.addEventListener("click", (e) => {
  if (e.target === dialog) {
    dialog.close();
    stopVideo();
  }
});
