var btnClose = document.querySelector("#close");
var menuNav = document.querySelector(".menu-nav");
var menuBurg = document.querySelector(".menu-hamburguer");

btnClose.addEventListener("click", function() {
  menuNav.classList.add("closener");
  menuBurg.classList.remove("closener");
});

menuBurg.addEventListener("click", function() {
  menuNav.classList.add("openner");
  menuNav.classList.remove("closener");
  menuBurg.classList.add("closener");
});