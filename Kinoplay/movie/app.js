$(document).ready(function () {
  $(".slider").slick({
    autoplay: true, // Avtomatik aylanish
    autoplaySpeed: 1500, // 2 soniyada o‘zgaradi
    dots: true, // Pastki nuqtalar (indikatorlar)
    arrows: true, // Chap-o‘ng tugmalar
    infinite: true, // Cheksiz aylanish
    speed: 500, // O‘tish tezligi
    slidesToShow: 1, // Nechta slayd ko‘rsatilishi
    slidesToScroll: 1, // Nechta slayd o‘zgarishi
  });
});

$(document).ready(function () {
  $(".sliders").slick({
    autoplay: true, // Avtomatik aylanish
    autoplaySpeed: 1500, // 2 soniyada o‘zgaradi
    dots: true, // Pastki nuqtalar (indikatorlar)
    arrows: true, // Chap-o‘ng tugmalar
    infinite: true, // Cheksiz aylanish
    speed: 500, // O‘tish tezligi
    slidesToShow: 4, // Nechta slayd ko‘rsatilishi
    slidesToScroll: 1, // Nechta slayd o‘zgarishi
  });
});

const movieCardsCard = document.querySelector(".movie__cards");
const firstSection = document.querySelector(".first__section");
const firstSectionBtn = document.querySelector(".first__section--btn");

let movies = [
  {
    id: 1,
    name: "Morbius",
    image: "./img/Image (32).png",
  },
  {
    id: 1,
    name: "Bhai Jaan",
    image: "./img/Image (33).png",
  },
  {
    id: 1,
    name: "Surai Mangal",
    image: "./img/Image (34).png",
  },
  {
    id: 1,
    name: "Pathan",
    image: "./img/Image (35).png",
  },
  {
    id: 1,
    name: "Ant-Man",
    image: "./img/Image (36).png",
  },
  {
    id: 1,
    name: "Adipurush",
    image: "./img/Image (37).png",
  },
  {
    id: 1,
    name: "NEW YORK",
    image: "./img/Image (38).png",
  },
  {
    id: 1,
    name: "Sin city",
    image: "./img/Image (39).png",
  },
  {
    id: 1,
    name: "Tomorrow war",
    image: "./img/Image (40).png",
  },
  {
    id: 1,
    name: "Misfire",
    image: "./img/Image (41).png",
  },
  {
    id: 1,
    name: "Peaky",
    image: "./img/Image (42).png",
  },
  {
    id: 1,
    name: "Morbius",
    image: "./img/Image (43).png",
  },
  {
    id: 1,
    name: "Mirzapur",
    image: "./img/Image (44).png",
  },
  {
    id: 1,
    name: "Hhigh Town",
    image: "./img/Image (45).png",
  },
  {
    id: 1,
    name: "Gray Man",
    image: "./img/Image (46).png",
  },
  {
    id: 1,
    name: "Lucifer",
    image: "./img/Image (47).png",
  },
  {
    id: 1,
    name: "Money",
    image: "./img/Image (48).png",
  },
  {
    id: 1,
    name: "Stranger",
    image: "./img/Image (49).png",
  },
  {
    id: 1,
    name: "Morbius",
    image: "./img/Image (43).png",
  },
  {
    id: 1,
    name: "Mirzapur",
    image: "./img/Image (44).png",
  },
];

movies.forEach((item) => {
  movieCardsCard.innerHTML += `
      <div class="movie__cards--card">
          <div class="movie__card--img">
            <img src="${item.image}" alt="FirstImg">
          </div>
          <div class="movie__card--title">
            <span>${item.name}</span>
          </div>
        </div>
  `;
});

function widthShow() {
  firstSection.style.height = "auto";
  firstSectionBtn.style.display = "none";
}
