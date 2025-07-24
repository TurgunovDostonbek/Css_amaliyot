const navbarList = document.querySelector(".navbar__list");
const navbarMain = document.querySelector(".navbar__main");

navbarMain.addEventListener("click", () => {
  navbarList.classList.toggle("list__transform");
});

const images = [
  "url('./img/Sub Container.png')",
  "url('./img/container3.jpg')",
];

let current = 0;
const header = document.querySelector(".header");

setInterval(() => {
  // Fade out
  header.style.opacity = 0;

  // Keyingi rasmni berishdan biroz kutamiz (0.5s)
  setTimeout(() => {
    header.style.backgroundImage = images[current];
    header.style.opacity = 1;

    // Indexni yangilash
    current = (current + 1) % images.length;
  }, 500);
}, 3000);

///////////// Slice Slider ///////
$(document).ready(function () {
  $(".slider").slick({
    autoplay: true, // Avtomatik aylanish
    autoplaySpeed: 2000, // 2 soniyada o‘zgaradi
    dots: true, // Pastki nuqtalar (indikatorlar)
    arrows: true, // Chap-o‘ng tugmalar
    infinite: true, // Cheksiz aylanish
    speed: 500, // O‘tish tezligi
    slidesToShow: 4, // Nechta slayd ko‘rsatilishi
    slidesToScroll: 1, // Nechta slayd o‘zgarishi
  });
});
