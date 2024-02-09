document.addEventListener("DOMContentLoaded", function () {
  const openMenuButton = document.getElementById("open-menu");
  const closeMenuButton = document.getElementById("close-menu");

  function setMenuPosition(xCoord) {
    const menu = document.querySelector(".floating-menu");
    menu.style.transform = `translateX(${xCoord})`;
  }

  openMenuButton.addEventListener("click", function () {
    setMenuPosition(0);
  });

  closeMenuButton.addEventListener("click", function () {
    setMenuPosition("-106%");
  });
});
