// бургер меню
const button = document.getElementById("header__menu-button");
const menuList = document.getElementById("header__menu-list");

const activeButton = function () {
  button.classList.toggle("active");
  menuList.classList.toggle("active");
};

button.addEventListener("click", activeButton);
