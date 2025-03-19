//--------------- NavBar----------------------

function toggleMenu() {
  var dropdown = document.getElementById("mobileDropdown");

  if (dropdown.classList.contains("active")) {
      dropdown.classList.remove("active"); // Hide menu
      setTimeout(() => {
          dropdown.style.display = "none"; // Delay hiding for smooth effect
      }, 400);
  } else {
      dropdown.style.display = "block"; // Show menu
      setTimeout(() => {
          dropdown.classList.add("active");
      }, 10); // Small delay to trigger transition
  }
}

// Close dropdown when a menu item is clicked
document.addEventListener("DOMContentLoaded", function () {
  var menuItems = document.querySelectorAll(".mobile-menu .menu-item a");

  menuItems.forEach(item => {
      item.addEventListener("click", function () {
          var dropdown = document.getElementById("mobileDropdown");

          if (dropdown.classList.contains("active")) {
              dropdown.classList.remove("active");
              setTimeout(() => {
                  dropdown.style.display = "none";
              }, 400);
          }
      });
  });
});

//--------------- DOOR TABS----------------------

const tabs = document.querySelector(".doorWrapper");
const tabButton = document.querySelectorAll(".tab-button");
const contents = document.querySelectorAll(".doorContent");

tabs.onclick = e => {
  const id = e.target.dataset.id;
  if (id) {
    tabButton.forEach(btn => {
      btn.classList.remove("active");
    });
    e.target.classList.add("active");

    contents.forEach(content => {
      content.classList.remove("active");
    });
    const element = document.getElementById(id);
    element.classList.add("active");
  }
}