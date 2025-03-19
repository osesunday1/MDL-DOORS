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