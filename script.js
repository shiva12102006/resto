
  const btn = document.getElementById("restaurantBtn");
  const menu = document.getElementById("dropdownMenu");

  document.addEventListener("DOMContentLoaded", function () {

  const menuToggle = document.getElementById("menuToggle");
  const navLinks = document.getElementById("navLinks");
  const dropdown = document.querySelector(".dropdown");

  // 🔥 Mobile menu toggle
  menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });

  // 🔥 Dropdown (mobile click)
  dropdown.addEventListener("click", (e) => {
    e.stopPropagation(); // prevent closing
    dropdown.classList.toggle("active");
  });

  // 🔥 Click outside close (safe fix)
  document.addEventListener("click", (e) => {
    if (navLinks && !navLinks.contains(e.target) && !menuToggle.contains(e.target)) {
      navLinks.classList.remove("active");
    }
  });

});

 

  btn.addEventListener("click", function(e) {
    e.preventDefault();
    menu.style.display = 
      menu.style.display === "block" ? "none" : "block";
  });

  // click outside = close
  document.addEventListener("click", function(e) {
    if (!btn.contains(e.target) && !menu.contains(e.target)) {
      menu.style.display = "none";
    }
  });





