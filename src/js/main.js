/**
 * Проверяет, что нажатая клавиша соответствует клавише Escape
 * @param {object} evt
 * @returns {boolean} true, если Escape
 */
 const isEscapeKey = (evt) => evt.key === 'Escape';

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

var phoneInputs = document.querySelectorAll('#phone');
var maskOptions = {
  mask: '+{7}(000)000-00-00',
  // lazy: false,  // make placeholder always visible
};
phoneInputs.forEach(phoneInput => {
  IMask(phoneInput, maskOptions);
});
// var mask = IMask(phoneInput, maskOptions);


// Настройка модалок
const modals = document.querySelectorAll('.modal');

modals.forEach(modal => {
  const submitButton = modal.querySelector('.form__submit-button');
  submitButton.addEventListener('click', (evt) => {
    // evt.preventDefault();
    // Сделать что-то
  });
  const closeButton = modal.querySelector('.modal__close-button');
  closeButton.addEventListener('click', hideModal);

});

function hideModal() {
  document.querySelector('.modal--open').classList.remove('modal--open');
  document.body.classList.remove('modal-opened');
}

const onModalEscKeydown= (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    hideModal();
  }
};

const onOutOfModalClick = (evt) => {
  if (evt.target.classList.contains('modal') && !evt.target.classList.contains('.modal__wrapper')) {
    hideModal();
  }
};

document.addEventListener('keydown', onModalEscKeydown);
document.addEventListener('click', onOutOfModalClick);


// Навешиваем модалки на кнопки
const leasingSectionButton = document.querySelector('.leasing-section__button');
if (leasingSectionButton) {
  leasingSectionButton.addEventListener('click', (evt) => {
    // document.body.classList.add('modal-opened');
    evt.preventDefault(); // Запрет перехода по ссылке
    document.querySelector('.modal--leasing').classList.add('modal--open');
  })
}

const productCardLeasingButton = document.querySelector('.product-card__button--leasing');
if (productCardLeasingButton) {
  productCardLeasingButton.addEventListener('click', (evt) => {
    // document.body.classList.add('modal-opened');
    evt.preventDefault(); // Запрет перехода по ссылке
    document.querySelector('.modal--leasing').classList.add('modal--open');
  })
}

const requestPriceButtons = document.querySelectorAll('.product-card__button--no-price');
requestPriceButtons.forEach(requestPriceButton => {
  requestPriceButton.addEventListener('click', (evt) => {
    // document.body.classList.add('modal-opened');
    evt.preventDefault(); // Запрет перехода по ссылке
    document.querySelector('.modal--price').classList.add('modal--open');
  })
});

const requestOfferButtons = document.querySelectorAll('.product-card__button--offer');
requestOfferButtons.forEach(requestOfferButton => {
  requestOfferButton.addEventListener('click', (evt) => {
    // document.body.classList.add('modal-opened');
    evt.preventDefault(); // Запрет перехода по ссылке
    document.querySelector('.modal--offer').classList.add('modal--open');
  })
});

const leasingCallbackButton = document.querySelector('.spareparts__button--has-modal');
if (leasingCallbackButton) {
  leasingCallbackButton.addEventListener('click', (evt) => {
    // document.body.classList.add('modal-opened');
    evt.preventDefault(); // Запрет перехода по ссылке
    document.querySelector('.modal--callback').classList.add('modal--open');
  })
}

const contactsCallbackButtons = document.querySelectorAll('.contacts__back-call');
contactsCallbackButtons.forEach(contactsCallbackButton => {
  contactsCallbackButton.addEventListener('click', (evt) => {
    evt.preventDefault(); // Запрет перехода по ссылке
    document.querySelector('.modal--callback').classList.add('modal--open');
  })
});
