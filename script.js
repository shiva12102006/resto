
  const btn = document.getElementById("restaurantBtn");
  const menu = document.getElementById("dropdownMenu");
 

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





