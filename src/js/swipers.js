// Свайпер картинок на страничке продукта
const ppGalleryThumbsSwiperSelector = document.querySelector('.product-card__gallery .swiper--thumbs');
if (ppGalleryThumbsSwiperSelector) {
  var ppGalleryThumbsSwiper = new Swiper(ppGalleryThumbsSwiperSelector, {
    loop: false,
    spaceBetween: 10,
    slidesPerView: 7,
    freeMode: true,
    watchSlidesProgress: true,
  });
}
const ppGalleryMainSwiperSelector = document.querySelector('.product-card__gallery .swiper--main');
if (ppGalleryMainSwiperSelector) {
  var ppGalleryMainSwiper = new Swiper(ppGalleryMainSwiperSelector, {
    loop: false,
    spaceBetween: 10,
    thumbs: {
      swiper: ppGalleryThumbsSwiper,
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
}


// Слайдер карточек "Похожая техника"
const similarSwiperSelector = document.querySelector('.swiper--similar');
var similarSwiper = null;
const initSimilarSwiper = () => {
  if (similarSwiperSelector) {
    if(!similarSwiper) {
      similarSwiper = new Swiper(similarSwiperSelector, {
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
    }
  }
}
const destroySimilarSwiper = () => {
  if(similarSwiper) {
    similarSwiper.destroy();
    similarSwiper = null;
  }
}
// Слайдер карточек "Популярные"
const popularSwiperSelector = document.querySelector('.swiper--popular');
var popularSwiper = null;
const initPopularSwiper = () => {
  if (popularSwiperSelector) {
    if(!popularSwiper) {
      popularSwiper = new Swiper(popularSwiperSelector, {
        loop: false,
        spaceBetween: 60,
        slidesPerView: 3,
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
    }
  }
}
const destroyPopularSwiper = () => {
  if(popularSwiper) {
    popularSwiper.destroy();
    popularSwiper = null;
  }
}

window.addEventListener("resize", () => {
  if (window.innerWidth > 1348) {
    destroyPopularSwiper();
    destroySimilarSwiper();
  } else {
    initPopularSwiper();
    initSimilarSwiper();
  }
});

document.addEventListener('DOMContentLoaded', () => {
  if (window.innerWidth <= 1348) {
    initPopularSwiper();
    initSimilarSwiper();
  }
});
