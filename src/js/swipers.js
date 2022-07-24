// Свайпер картинок на страничке продукта
var thumbsSwiper = new Swiper(".swiper--thumbs", {
  loop: false,
  spaceBetween: 10,
  slidesPerView: 7,
  freeMode: true,
  watchSlidesProgress: true,
});
var mainSwiper = new Swiper(".swiper--main", {
  loop: false,
  spaceBetween: 10,
  thumbs: {
    swiper: thumbsSwiper,
  },
  navigation: {
    nextEl: ".swiper--main .swiper-button-next",
    prevEl: ".swiper--main .swiper-button-prev",
  },
  speed: 700,
  autoplay: {
    delay: 5000,
  },
  breakpoints: {
    320: {
      autoplay: false,
    },
    768: {
      loop: true,
      autoplay: {
        delay: 5000,
      },
      navigation: {
        nextEl: ".swiper--thumbs .swiper-button-next",
        prevEl: ".swiper--thumbs .swiper-button-prev",
      },
    }
  }
});

// Слайдер карточек "Похожая техника"
var similarSwiper = new Swiper(".swiper--similar", {
  loop: false,
  spaceBetween: 60,
  slidesPerView: 1,
  watchSlidesProgress: true,
  speed: 700,
  navigation: {
    nextEl: ".swiper--cards .swiper-button-next",
    prevEl: ".swiper--cards .swiper-button-prev",
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1100: {
      slidesPerView: 3,
    }
  }
});
