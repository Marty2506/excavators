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
        if (element.classList.contains('tabs__button--active')) {
          element.classList.remove('tabs__button--active');
          panels[j].classList.remove('tabs__panel--active');
        }
      });
      evt.target.classList.add('tabs__button--active');
      panels[i].classList.add('tabs__panel--active');
    })
  });
});

// Расширение для кнопок в offers
const offersButtons = document.querySelectorAll('.offers__button');
// console.log(offersButtons);
offersButtons.forEach((offersButton, index) => {
  offersButton.addEventListener('click', () => {
    offersButtons.forEach(element => {
      element.classList.remove('offers__button--active');
    });
    offersButton.classList.add('offers__button--active');
    const select = offersButton.closest('.offers').querySelector('.offers__select');
    newOffersSelect[0].value = select.options[index].value;
    console.log(select.options[select.selectedIndex].value);
  })
});
