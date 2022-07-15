// Кастомный селект
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
const contactsSelect = new customSelect(document.querySelector('.contacts__select'), selectDefaultParams);

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
const newOffersSelect = new customSelect(document.querySelector('.new-offers__select'), newOffersSelectParams);

//  Включение автоматического воспроизведения видео
const videoLocation  = document.querySelector('.index-header__video');
window.onload = addAutoplay();
function addAutoplay() {
  if(window.innerWidth > 1315){
    videoLocation.setAttribute("autoplay","");
  };
}
