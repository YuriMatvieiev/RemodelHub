/*
Документація по роботі у шаблоні: 
Документація слайдера: https://swiperjs.com/
Сніппет(HTML): swiper
*/

// Підключаємо слайдер Swiper з node_modules
// При необхідності підключаємо додаткові модулі слайдера, вказуючи їх у {} через кому
// Приклад: { Navigation, Autoplay }
import Swiper from "swiper";
import { Navigation, Pagination } from "swiper/modules";
/*
Основні модулі слайдера:
Navigation, Pagination, Autoplay, 
EffectFade, Lazy, Manipulation
Детальніше дивись https://swiperjs.com/
*/

// Стилі Swiper
// Базові стилі
import "../../scss/base/swiper.scss";
// Повний набір стилів з scss/libs/swiper.scss
// import "../../scss/libs/swiper.scss";
// Повний набір стилів з node_modules
// import 'swiper/css';

// Ініціалізація слайдерів
function initSliders() {
  // Список слайдерів
  // Перевіряємо, чи є слайдер на сторінці
  if (document.querySelector(".gallery__slider")) {
    // Вказуємо склас потрібного слайдера
    // Створюємо слайдер
    new Swiper(".gallery__slider", {
      // Вказуємо склас потрібного слайдера
      // Підключаємо модулі слайдера
      // для конкретного випадку
      modules: [Navigation, Pagination],
      observer: true,
      observeParents: true,
      slidesPerView: 1.5,
      spaceBetween: 60,
      //autoHeight: true,
      speed: 800,
      centeredSlides: true,
      //touchRatio: 0,
      //simulateTouch: false,
      loop: true,
      preloadImages: false,
      lazy: true,

      /*
			// Ефекти
			effect: 'fade',
			autoplay: {
				delay: 3000,
				disableOnInteraction: false,
			},
			*/

      // Пагінація
      pagination: {
        el: ".gallery__pagination",
        clickable: true,
      },

      // Скроллбар
      /*
			scrollbar: {
				el: '.swiper-scrollbar',
				draggable: true,
			},
			*/

      // Кнопки "вліво/вправо"
      navigation: {
        prevEl: ".gallery__button-prev",
        nextEl: ".gallery__button-next",
      },

      // Брейкпоінти
      breakpoints: {
        320: { slidesPerView: 1.1, spaceBetween: 20 },
        640: {},
        768: {
          spaceBetween: 30,
          slidesPerView: 1.2,
        },
        992: {
          spaceBetween: 40,
          slidesPerView: 1.3,
        },
        1268: {
          slidesPerView: 1.5,
          spaceBetween: 60,
        },
      },

      // Події
      on: {},
    });
  }
  if (document.querySelector(".benefits__slider")) {
    // Вказуємо склас потрібного слайдера
    // Створюємо слайдер
    new Swiper(".benefits__slider", {
      // Вказуємо склас потрібного слайдера
      // Підключаємо модулі слайдера
      // для конкретного випадку
      modules: [Pagination],
      observer: true,
      observeParents: true,
      slidesPerView: 3,
      spaceBetween: 40,
      //autoHeight: true,
      speed: 800,
      centeredSlides: true,
      //touchRatio: 0,
      //simulateTouch: false,
      //loop: true,
      preloadImages: false,
      lazy: true,
      slideToClickedSlide: true,
      /*
			// Ефекти
			effect: 'fade',
			autoplay: {
				delay: 3000,
				disableOnInteraction: false,
			},
			*/

      // Пагінація
      pagination: {
        el: ".benefits__pagination",
        clickable: true,
        dynamicBullets: true,
        dynamicMainBullets: 1,
      },

      // Скроллбар
      /*
			scrollbar: {
				el: '.swiper-scrollbar',
				draggable: true,
			},
			*/

      // Кнопки "вліво/вправо"
      //   navigation: {
      //     prevEl: ".gallery__button-prev",
      //     nextEl: ".gallery__button-next",
      //   },

      // Брейкпоінти
      breakpoints: {
        320: { slidesPerView: 1.3, spaceBetween: 20 },
        640: {
          spaceBetween: 20,
          slidesPerView: 1.6,
        },
        768: {
          spaceBetween: 30,
          slidesPerView: 1.6,
        },
        992: {
          spaceBetween: 40,
          slidesPerView: 2,
        },
        1268: {
          slidesPerView: 3,
          spaceBetween: 40,
        },
      },

      // Події
      on: {},
    });
  }
}
// Скролл на базі слайдера (за класом swiper scroll для оболонки слайдера)
function initSlidersScroll() {
  let sliderScrollItems = document.querySelectorAll(".swiper_scroll");
  if (sliderScrollItems.length > 0) {
    for (let index = 0; index < sliderScrollItems.length; index++) {
      const sliderScrollItem = sliderScrollItems[index];
      const sliderScrollBar =
        sliderScrollItem.querySelector(".swiper-scrollbar");
      const sliderScroll = new Swiper(sliderScrollItem, {
        observer: true,
        observeParents: true,
        direction: "vertical",
        slidesPerView: "auto",
        freeMode: {
          enabled: true,
        },
        scrollbar: {
          el: sliderScrollBar,
          draggable: true,
          snapOnRelease: false,
        },
        mousewheel: {
          releaseOnEdges: true,
        },
      });
      sliderScroll.scrollbar.updateSize();
    }
  }
}

window.addEventListener("load", function (e) {
  // Запуск ініціалізації слайдерів
  initSliders();
  // Запуск ініціалізації скролла на базі слайдера (за класом swiper_scroll)
  //initSlidersScroll();
});
