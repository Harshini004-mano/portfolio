// Small animation on page load
document.addEventListener("DOMContentLoaded", () => {
  document.body.classList.add("loaded");

  const toggle = document.getElementById("menu-toggle");
  const navLinks = document.getElementById("nav-links");

  if (toggle) {
    toggle.addEventListener("click", () => {
      navLinks.classList.toggle("active");
    });
  }
});
