(function () {
  const mainMenu = document.querySelector(".menu_main");
  const hamburger = mainMenu.querySelector(".hamburger");

  hamburger.addEventListener("click", () => {
    mainMenu.classList.toggle("menu_open");
  });
})();

(function () {
  const slider = new Swiper(".slider", {
    allowSlidePrev: true,
    loop: true,
    rewind: true,
    direction: "horizontal",
    slidesPerView: 4, // количество слайдов, видимых одновременно
    spaceBetween: 170, // расстояние между слайдами
    autoplay: {
      delay: 2000, // время между прокрутками
      disableOnInteraction: true,
    },
  });
})();

(function () {
  const slider = new Swiper(".slider-mobile", {
    allowSlidePrev: true,
    loop: true,
    rewind: true,
    direction: "horizontal",
    slidesPerView: 1, // количество слайдов, видимых одновременно
    spaceBetween: 10, // расстояние между слайдами
    autoplay: {
      delay: 2000, // время между прокрутками
      disableOnInteraction: true,
    },
  });
})();

//почему не работают оба кода друг за другом?

// (function () {
//   const button = document.querySelector("[data-popup]");
//   const popup = document.querySelector(".popup");
//   const content = popup.querySelector(".popup__content");
//   const overlay = popup.querySelector(".popup__overlay");
//   const close = popup.querySelector(".popup__close");

//   function openPopup(e) {
//     const popupId = e.target.dataset.popup;
//     const currentPopup = document.querySelector(`#${popupId}`);

//     content.innerHTML = currentPopup.innerHTML;
//     popup.classList.add("popup_open");
//   }

//   function closePopup() {
//     content.innerHTML = "";
//     popup.classList.remove("popup_open");
//   }

//   button.addEventListener("click", openPopup);
//   overlay.addEventListener("click", closePopup);
//   close.addEventListener("click", closePopup);
// })();

// (function () {
//   const slider = new Swiper(".swiper", {
//     allowSlidePrev: true,
//     direction: "horizontal",
//     slidesPerView: 2, // количество слайдов, видимых одновременно
//     spaceBetween: 0, // расстояние между слайдами
//     autoplay: {
//       delay: 2000, // время между прокрутками
//       disableOnInteraction: false, // автопрокрутка не останавливается при взаимодействии пользователя с слайдером
//     },
//     loop: true, // бесконечный цикл
//     loopedSlides: 2, // количество слайдов, которые будут дублироваться для бесконечного цикла
//     rewind: true, // возможность прокрутки в обратном направлении
//   });
// })();
