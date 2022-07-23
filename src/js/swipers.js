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
