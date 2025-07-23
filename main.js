// Adding Menu Bar
let menuBar = document.getElementById("menu");
let menuClose = document.getElementById("menu-close");
let mobileMenu = document.getElementById("mobile-menu");
let overlay = document.getElementById("overlay");

menuBar.addEventListener("click", () => {
  mobileMenu.classList.remove("-left-[300px]");
  mobileMenu.classList.add("left-0");
  overlay.classList.remove("hidden");
});
menuClose.addEventListener("click", () => {
  mobileMenu.classList.remove("left-0");
  mobileMenu.classList.add("-left-[300px]");
  overlay.classList.add("hidden");
});

// Overlay
