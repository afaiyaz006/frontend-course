document.addEventListener("DOMContentLoaded", () => {
  const toggleBtn = document.querySelector(".mobile-menu-toogle");
  const mobileMenu = document.querySelector(".mobile-menu");
  const navbar = document.querySelector(".navbar");

  toggleBtn.addEventListener("click", () => {
    mobileMenu.classList.toggle("activate");
  });

  window.addEventListener("scroll", () => {
    if (window.scrollY > 0) {
      navbar.classList.add("navbar-scroll");
    } else {
      navbar.classList.remove("navbar-scroll");
    }
  });
});
