/* Swiper */

let swiper;

const swiperInit = function () {
  if (!swiper) {
    swiper = new Swiper(".brands__swiper", {
      loop: true,
      slidesPerView: "auto",
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });
  }
};

const widthTablet = window.matchMedia("(max-width: 767px)");

const destroySwiper = function (event) {
  if (!event.matches && swiper) {
    swiper.destroy();
    swiper = undefined;
  } else if (event.matches) {
    swiperInit();
  }
};

destroySwiper(widthTablet);
widthTablet.addEventListener("change", destroySwiper);

/* Hiding brands */

const toggleButton = document.getElementById("toggle-button");
let toggleButtonText = document.querySelector(".button__text");
const items = document.querySelectorAll(".brands__item");

function hideItems() {
  if (window.innerWidth < 1016) {
    items.forEach((item, index) => {
      if (index >= 6) {
        item.classList.add("hidden");
      } else {
        item.classList.remove("hidden");
      }
    });
  } else {
    items.forEach((item, index) => {
      if (index >= 8) {
        item.classList.add("hidden");
      } else {
        item.classList.remove("hidden");
      }
    });
  }
}

hideItems();

window.addEventListener("resize", hideItems);

toggleButton.addEventListener("click", function () {
  if (toggleButtonText.textContent === "Показать все") {
    items.forEach((item) => item.classList.remove("hidden"));
    toggleButtonText.textContent = "Скрыть";
    toggleButtonText.classList.add("rotate-decor");
  } else {
    hideItems();
    toggleButtonText.textContent = "Показать все";
    toggleButtonText.classList.remove("rotate-decor");
  }
});
