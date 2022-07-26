// Кнопки для фильтров карточек продукта
const filterButtons = document.querySelectorAll('.filter-button');

if (filterButtons) {
  filterButtons.forEach(filterButton => {
    filterButton.addEventListener('click', () => {
      filterButtons.forEach(el => {
        el.classList.remove('filter-button--active');
      })
      filterButton.classList.toggle('filter-button--active');
    });
  })
}

// Добавление действий при смене фильтра в селекторе
const newOffersBaseSelect = document.querySelector('.offers__select');
newOffersBaseSelect.addEventListener('change', () => {
  // console.log(newOffersBaseSelect.selectedIndex);
  // Описать смену фильтра??
})
