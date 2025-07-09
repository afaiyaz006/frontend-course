document.addEventListener("DOMContentLoaded", (event) => {
  document.getElementById("profile-pic").addEventListener("click", (event) => {
    var getStyle = document.getElementById("profile-menu").style.display;
    if (getStyle === "none") {
      document.getElementById("profile-menu").style.display = "flex";
    } else {
      document.getElementById("profile-menu").style.display = "none";
    }
  });
});
