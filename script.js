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

//==============================Accordion===================================
const accordionLinks = document.querySelectorAll(".accordion-link");

accordionLinks.forEach(link => {
    link.addEventListener("click", function () {
        const parentItem = this.parentElement;
        const answer = parentItem.querySelector(".answer");

        if (!answer) return; // Prevent errors if answer is missing

        const isActive = parentItem.classList.contains("active");

        // Close all open accordions and remove the 'activeAccordion' class
        document.querySelectorAll(".accordion-item").forEach(item => {
            item.classList.remove("active", "activeAccordion");
            const answerContent = item.querySelector(".answer");
            if (answerContent) answerContent.style.maxHeight = null;
        });

        // Toggle the clicked item
        if (!isActive) {
            parentItem.classList.add("active", "activeAccordion"); // Add both classes
            answer.style.maxHeight = answer.scrollHeight + "px";
        }
    });
});

//=============================accordion==================================

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

// Hide dropdown when screen resizes to wide screens
window.addEventListener("resize", function () {
  var dropdown = document.getElementById("mobileDropdown");

  if (window.innerWidth > 1024) {
      dropdown.classList.remove("active");
      dropdown.style.display = "none";
  }
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


