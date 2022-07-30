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
// Слайдер карточек Оборудование"
const equipmentSwiperSelector = document.querySelector('.swiper--equipment');
var equipmentSwiper = null;
const initEquipmentSwiper = () => {
  if (equipmentSwiperSelector) {
    if(!equipmentSwiper) {
      equipmentSwiper = new Swiper(equipmentSwiperSelector, {
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

const destroyEquipmentSwiper = () => {
  if(equipmentSwiper) {
    equipmentSwiper.destroy();
    equipmentSwiper = null;
  }
}

// Слайдер карточек спецпредложения
const offersSwiperSelector = document.querySelectorAll('.swiper--offers');
var offersSwipers = new Array(offersSwiperSelector.length);

const initOffersSwipers = () => {
  for (let i = 0; i < offersSwipers.length; i++) {
    if (!offersSwipers[i]) {
      offersSwipers[i] = new Swiper(offersSwiperSelector[i], {
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

const destroyOffersSwipers = () => {
  for (let i = 0; i < offersSwipers.length; i++) {
    if(offersSwipers[i]) {
      offersSwipers[i].destroy();
      offersSwipers[i] = null;
    }
  }
}

// Слайдер картинок на страничке "О нас"
const aboutGalleryThumbsSwiperSelector = document.querySelector('.about-gallery__thumbnails');
var aboutGalleryThumbsSwiper = null;
const aboutGalleryThumbsSwiperoptions = {
  loop: false,
  spaceBetween: 20,
  slidesPerView: "auto",
  freeMode: true,
  watchSlidesProgress: true,
  // slidesOffsetBefore: 31,
  // slidesOffsetAfter: 31,
  // setWrapperSize: true
};
aboutGalleryThumbsSwiper = new Swiper(aboutGalleryThumbsSwiperSelector, aboutGalleryThumbsSwiperoptions);
// initSwiper(aboutGalleryThumbsSwiperSelector, aboutGalleryThumbsSwiper, aboutGalleryThumbsSwiperoptions);

const aboutGalleryMainSwiperSelector = document.querySelector('.about-gallery__main-swiper');
var aboutGalleryMainSwiper = null;
const aboutGallerMainSwiperOptions = {
  loop: false,
  spaceBetween: 10,
  thumbs: {
    swiper: aboutGalleryThumbsSwiper,
  },
  navigation: {
    nextEl: ".about-gallery__main-swiper .about-gallery__swiper-button--next",
    prevEl: ".about-gallery__main-swiper .about-gallery__swiper-button--prev",
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
        nextEl: ".about-gallery__thumbnails .about-gallery__swiper-button--next",
        prevEl: ".about-gallery__thumbnails .about-gallery__swiper-button--prev",
      },
    }
  }
}
aboutGalleryMainSwiper = new Swiper(aboutGalleryMainSwiperSelector, aboutGallerMainSwiperOptions);
// initSwiper(aboutGalleryMainSwiperSelector, aboutGalleryMainSwiper, aboutGallerMainSwiperOptions);


window.addEventListener("resize", () => {
  if (window.innerWidth > 1348) {
    destroyPopularSwiper();
    destroySimilarSwiper();
    destroyEquipmentSwiper();
    destroyOffersSwipers();
  } else {
    initPopularSwiper();
    initSimilarSwiper();
    initEquipmentSwiper();
    initOffersSwipers();
  }
});

document.addEventListener('DOMContentLoaded', () => {
  if (window.innerWidth <= 1348) {
    initPopularSwiper();
    initSimilarSwiper();
    initEquipmentSwiper();
    initOffersSwipers();
  }
});

function initSwiper(selector, swiper, swiperOptions) {
  if (selector) {
    if(!swiper) {
      swiper = new Swiper(selector, swiperOptions);
    }
  }
}
