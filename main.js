const burgerBtn = document.querySelector(".burger-btn");
const sideMenu = document.querySelector(".side__menu");
const closeBtn = document.querySelector(".burger-btn-close");

burgerBtn.addEventListener("click", () => {
  sideMenu.classList.add("active");
});

closeBtn.addEventListener("click", () => {
  console.log("click");
  sideMenu.classList.remove("active");
});
