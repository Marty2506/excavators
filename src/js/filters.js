// Настройка слайдера грузоподъемности

const loadSlider = document.querySelector('.filters-form__slider--load');
noUiSlider.create(loadSlider, {
  start: [400, 1000],
  connect: [false, true, false],
  behaviour: 'drag',
  step: 5,
  range: {
    'min': 100,
    '20%': [400, 5],
    '50%': [1000, 5],
    'max': 10000,
  },
  format: wNumb({
    decimals: 0
  })
});

const loadInputs = [
  document.querySelector('#min-load-mask'),
  document.querySelector('#max-load-mask')
];

loadSlider.noUiSlider.on('update', (values, handle) => {
  loadInputs[handle].value = values[handle];
})

loadInputs[0].addEventListener('change', function() {
  console.log(this);
  loadSlider.noUiSlider.set([this.value, null]);
})
loadInputs[1].addEventListener('change', function() {
  console.log(this);
  loadSlider.noUiSlider.set([null, this.value]);
})

// Настройка слайдера длиный стрелы

const arrowLengthSlider = document.querySelector('.filters-form__slider--arrow-length');
noUiSlider.create(arrowLengthSlider, {
  start: [15, 18],
  connect: [false, true, false],
  behaviour: 'drag',
  step: 1,
  range: {
    'min': 10,
    'max': 25
  },
  format: wNumb({
    decimals: 0
  })
});

const arrowLengthInputs = [
  document.querySelector('#min-arrow-length'),
  document.querySelector('#max-arrow-length')
];

arrowLengthSlider.noUiSlider.on('update', (values, handle) => {
  arrowLengthInputs[handle].value = values[handle];
})

arrowLengthInputs[0].addEventListener('change', function() {
  console.log(this);
  arrowLengthSlider.noUiSlider.set([this.value, null]);
})
arrowLengthInputs[1].addEventListener('change', function() {
  console.log(this);
  arrowLengthSlider.noUiSlider.set([null, this.value]);
})

// Настройка селектов

const pavingSelect = document.querySelector('#paving-select');
$(pavingSelect).fSelect({
  placeholder: 'Выберите опцию',
  numDisplayed: 2,
  overflowText: '{n} выбрано',
  searchText: 'Search',
  noResultsText: 'No results found',
  showSearch: false,
  optionFormatter: false
});
pavingSelect.closest('.fs-wrap').querySelector('.fs-option').click(); // Сразу по умолчанию выбираем первый пункт
// Создаем кнопку
const selectButton = document.createElement('button');
selectButton.classList.add('button', 'filters-form__select-submit');
selectButton.setAttribute('type', 'button');
selectButton.textContent = "Применить";
// Добавялем кнопку в fSelect
const pavingSelectButton = selectButton.cloneNode(true);
pavingSelect.closest('.fs-wrap').querySelector('.fs-dropdown').appendChild(pavingSelectButton);
pavingSelectButton.addEventListener('click', closeFsDropdown);

function closeFsDropdown() {
  var $wrap = window.fSelect.active_el;
  if ('undefined' !== typeof $wrap) {
      // only trigger if the values have changed
      var initial_values = window.fSelect.initial_values;
      var current_values = $wrap.find('select').val();
      if (JSON.stringify(initial_values) != JSON.stringify(current_values)) {
          $(document).trigger('fs:closed', $wrap);
      }
  }

  $('.fs-wrap').removeClass('fs-open');
  $('.fs-dropdown').addClass('hidden');
  window.fSelect.active_el = null;
  window.fSelect.active_id = null;
  window.fSelect.last_choice = null;
}

const workingWeightSelect = document.querySelector('#working-weight-select');
$(workingWeightSelect).fSelect({
  placeholder: 'Выберите опцию',
  numDisplayed: 2,
  overflowText: '{n} выбрано',
  searchText: 'Search',
  noResultsText: 'No results found',
  showSearch: false,
  optionFormatter: false
});

workingWeightSelect.closest('.fs-wrap').querySelector('.fs-option').click(); // Сразу по умолчанию выбираем первый пункт
// Добавялем кнопку в fSelect
const workingWeightSelectButton = selectButton.cloneNode(true);
workingWeightSelect.closest('.fs-wrap').querySelector('.fs-dropdown').appendChild(workingWeightSelectButton);
workingWeightSelectButton.addEventListener('click', closeFsDropdown);

const absSelect = document.querySelector('#abs-select');
$(absSelect).fSelect({
  placeholder: 'Выберите опцию',
  numDisplayed: 2,
  overflowText: '{n} выбрано',
  searchText: 'Search',
  noResultsText: 'No results found',
  showSearch: false,
  optionFormatter: false
});

absSelect.closest('.fs-wrap').querySelector('.fs-option').click(); // Сразу по умолчанию выбираем первый пункт
// Добавялем кнопку в fSelect
const absSelectButton = selectButton.cloneNode(true);
absSelect.closest('.fs-wrap').querySelector('.fs-dropdown').appendChild(absSelectButton);
absSelectButton.addEventListener('click', closeFsDropdown);

// Открытие/закртыие фильтра в мобилке
const showFiltersButton = document.querySelector('.filters-form__show-button');
const hideFiltersButton = document.querySelector('.filters-form__back-button');

showFiltersButton.addEventListener('click', () => {
  document.body.classList.toggle('filter-opened');
});
hideFiltersButton.addEventListener('click', () => {
  document.body.classList.remove('filter-opened');
});

// Сброс фильтров
const resetFiltersButton = document.querySelector('.filters-form__reset-filters-button');
resetFiltersButton.addEventListener('click', (evt) => {
  evt.preventDefault();
  const pavingItems = pavingSelect.closest('.fs-wrap').querySelector('.fs-dropdown').querySelectorAll('.selected');
  pavingItems.forEach((el) => {
    el.click();
  })
  pavingSelect.closest('.fs-wrap').querySelector('.fs-option').click();

  const workingWeighItems = workingWeightSelect.closest('.fs-wrap').querySelector('.fs-dropdown').querySelectorAll('.selected');
  workingWeighItems.forEach((el) => {
    el.click();
  })
  workingWeightSelect.closest('.fs-wrap').querySelector('.fs-option').click();

  const absItems = absSelect.closest('.fs-wrap').querySelector('.fs-dropdown').querySelectorAll('.selected');
  absItems.forEach((el) => {
    el.click();
  })
  absSelect.closest('.fs-wrap').querySelector('.fs-option').click();

  // Сброс слайдеров
  loadInputs[0].value = 400;
  loadInputs[1].value = 1000;
  loadSlider.noUiSlider.set([loadInputs[0].value, loadInputs[1].value]);

  arrowLengthInputs[0].value = 15;
  arrowLengthInputs[1].value = 18;
  arrowLengthSlider.noUiSlider.set([arrowLengthInputs[0].value, arrowLengthInputs[1].value]);

  // Сброс чекбосков
  document.querySelectorAll('.filters-form__checbox').forEach(el => {
    el.checked = false;
  });
});


// Кнопка отправки формы
const submitFormButton = document.querySelector('.filters-form__submit-button');
submitFormButton.addEventListener('click', (evt) => {
  evt.preventDefault();
  // Дописать что делать
})
