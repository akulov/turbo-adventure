(document.onload = function () {
  const sidebar = document.querySelector("#sidebar");
  document.querySelector("#sidebarToggler").onclick = function () {
    this.classList.toggle("open");
    sidebar.classList.toggle("open");
  };
})();
