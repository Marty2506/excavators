//  Включение автоматического воспроизведения видео
const videoLocation  = document.querySelector('.index-header__video');
window.onload = addAutoplay();
function addAutoplay() {
  if(window.innerWidth > 1349){
    videoLocation.setAttribute("preload", "");
    videoLocation.setAttribute("autoplay","");
  };
}

// Кастомные селекты
const selectDefaultParams = {
  containerClass: 'custom-select-container',
  openerClass: 'custom-select-opener',
  panelClass: 'custom-select-panel',
  optionClass: 'custom-select-option',
  optgroupClass: 'custom-select-optgroup',
  isSelectedClass: 'is-selected',
  hasFocusClass: 'has-focus',
  isDisabledClass: 'is-disabled',
  isOpenClass: 'is-open'
};
const contactsSelect = customSelect(document.querySelector('.contacts__select'), selectDefaultParams);

const newOffersSelectParams = {
  containerClass: 'new-offers__select-container',
  openerClass: 'new-offers__select-opener',
  panelClass: 'new-offers__select-panel',
  optionClass: 'new-offers__select-option',
  optgroupClass: 'new-offers__select-optgroup',
  isSelectedClass: 'is-selected',
  hasFocusClass: 'has-focus',
  isDisabledClass: 'is-disabled',
  isOpenClass: 'is-open'
};
const newOffersSelect = customSelect(document.querySelector('.new-offers__select'), newOffersSelectParams);


// Слайдеры
let newOffersSlider = false;
let isSliderInit = false;

window.addEventListener("resize", onWindowResize);

function onWindowResize() {
  if (window.innerWidth < 930) {
    if (!isSliderInit) {
      $('.new-offers__slider').slick({
        arrows: false,
        mobileFirst: true,
        dots: false,
        arrows: true,
        infinite: false,
        // appendArrows: $('.new-offers__slider-arrows'),
        responsive: [
          {
            breakpoint: 660,
            settings: {
              slidesToShow: 2
            }
          }
        ]
      });
      isSliderInit = true;
    }
  } else {
    if (isSliderInit) {
      $('.new-offers__slider').slick('unslick');
      isSliderInit = false;
    }
  }
};

$(document).ready(function(){
  onWindowResize();
});
