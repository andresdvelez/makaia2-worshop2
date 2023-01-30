const burgerBtn = document.querySelector(".burger-btn");
const sideMenu = document.querySelector(".side__menu");
const layover = document.querySelector(".layover");
const closeBtn = document.querySelector(".burger-btn-close");
const accordionBtn = document.querySelectorAll(".accordion-btn");
const accordion = document.querySelectorAll(".accordion");

burgerBtn.addEventListener("click", () => {
  sideMenu.classList.add("active");
  layover.classList.add("active");
});

closeBtn.addEventListener("click", () => {
  sideMenu.classList.remove("active");
  layover.classList.remove("active");
});

for (let i = 0, len = accordionBtn.length; i < len; i++) {
  accordionBtn[i].addEventListener("click", () => {
    accordion[i].classList.toggle("active");
  });
}
