const tabs = document.querySelectorAll('.tabs');
const DESKTOP_WIDTH = 1349;

tabs.forEach(tabsElement => {
  let panels = tabsElement.querySelectorAll('.tabs__panel');
  let tabButtons = tabsElement.querySelectorAll('.tabs__button');
  tabButtons.forEach((tabButton, i) => {
    tabButton.addEventListener('click', (evt) => {
      if(window.innerWidth > DESKTOP_WIDTH) {
        evt.preventDefault();
      }
      tabButtons.forEach((element, j) => {
        panels[j].classList.remove('tabs__panel--active');
        element.classList.remove('tabs__button--active');
      });
      evt.target.classList.add('tabs__button--active');
      panels[i].classList.add('tabs__panel--active');
    })
  });
});

// Расширение для кнопок в offers
const offersButtons = document.querySelectorAll('.offers__button');
offersButtons.forEach((offersButton, index) => {
  offersButton.addEventListener('click', () => {
    offersButtons.forEach(element => {
      element.classList.remove('offers__button--active');
    });
    offersButton.classList.add('offers__button--active');
    const select = offersButton.closest('.offers').querySelector('.offers__select');
    newOffersSelect.value = select.options[index].value;
  })
});


// newOffersSelect Объявлен в main
if (newOffersSelect) {
  newOffersSelect.select.addEventListener('change', (e) => {
    const buttons = e.target.closest('.offers').querySelectorAll('.offers__button');
    buttons[e.target.selectedIndex].click();
  })
}
