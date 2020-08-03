const open = document.querySelector("#open");
const close = document.querySelector("#close");

function Close() {
  const disp = document.querySelectorAll(".span_text");
  const sidebar = document.querySelector(".sideBar");
  const sidebarAnchor = document.querySelectorAll(".sideBar a");
  disp.forEach((item) => {
    item.style.display = "none";
  });
  sidebarAnchor.forEach((a) => {
    a.style.width = "70px";
    sidebar.style.width = "100px";
  });
}
function Open() {
  const disp = document.querySelectorAll(".span_text");
  const sidebar = document.querySelector(".sideBar");
  const sidebarAnchor = document.querySelectorAll(".sideBar a");
  disp.forEach((item) => {
    item.style.display = "inline-block";
  });
  sidebarAnchor.forEach((a) => {
    a.style.width = "180px";
    sidebar.style.width = "300px";
  });
}

open.addEventListener("click", Open);
close.addEventListener("click", Close);
