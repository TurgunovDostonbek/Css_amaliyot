const navbarList = document.querySelector(".navbar__list");
const navbarMain = document.querySelector(".navbar__main");

navbarMain.addEventListener("click", () => {
  navbarList.classList.toggle("list__transform");
});
