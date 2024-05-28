document.addEventListener("DOMContentLoaded", function () {
  // Get all elements with class 'nav-link'
  var menuItems = document.querySelectorAll(".nav-link");

  // Add event listener for each menu items
  menuItems.forEach(function (item) {
    item.addEventListener("click", function () {
      // Delete 'active' class from all menu items
      menuItems.forEach(function (item) {
        item.classList.remove("active");
      });

      // Add 'active' class to item that clicked
      this.classList.add("active");
    });
  });
});
