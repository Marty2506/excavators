//  Включение автоматического воспроизведения видео
const videoLocation  = document.querySelector('.index-header__video');
window.onload = addAutoplay();
function addAutoplay() {
  if (videoLocation) {
    if(window.innerWidth > 1348){
      videoLocation.setAttribute("preload", "");
      videoLocation.setAttribute("autoplay","");
    };
  }
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
  containerClass: 'offers__select-container',
  openerClass: 'offers__select-opener',
  panelClass: 'offers__select-panel',
  optionClass: 'offers__select-option',
  optgroupClass: 'offers__select-optgroup',
  isSelectedClass: 'is-selected',
  hasFocusClass: 'has-focus',
  isDisabledClass: 'is-disabled',
  isOpenClass: 'is-open'
};
const newOffersSelect = customSelect(document.querySelector('.offers__select'), newOffersSelectParams)[0];

var phoneInput = document.querySelector('#phone');
var maskOptions = {
  mask: '+{7}(000)000-00-00',
  // lazy: false,  // make placeholder always visible
};
var mask = IMask(phoneInput, maskOptions)
