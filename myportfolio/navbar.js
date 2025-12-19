const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");
const closeMenu = document.getElementById("closeMenu");

menuToggle.addEventListener("click", () => {
  navLinks.classList.add("active");
  document.body.classList.add("menu-open");
});

closeMenu.addEventListener("click", () => {
  navLinks.classList.remove("active");
  document.body.classList.remove("menu-open");
});

document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("active");
    document.body.classList.remove("menu-open");
  });
});