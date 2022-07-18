let cardsSliderSelector = '.cards__list';
let isCardsSliderInit = false;

window.addEventListener("resize", onWindowResize__cards);

function onWindowResize__cards() {
  console.log(window.innerWidth);
  if (window.innerWidth < 1348) {
    if (!isCardsSliderInit) {
      $(cardsSliderSelector).slick({
        arrows: false,
        mobileFirst: true,
        dots: false,
        arrows: true,
        infinite: false,
        responsive: [
          {
            breakpoint: 660,
            settings: {
              slidesToShow: 2
            }
          },
          {
            breakpoint: 1000,
            settings: {
              slidesToShow: 3
            }
          }
        ]
      });
      isCardsSliderInit = true;
    }
  } else {
    if (isCardsSliderInit) {
      $(cardsSliderSelector).slick('unslick');
      isCardsSliderInit = false;
    }
  }
};

$(document).ready(function(){
  onWindowResize__cards();
});
