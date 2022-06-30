const tabsItems = document.querySelectorAll('.tech-tabs__item');
const tabs = document.querySelectorAll('.tech-tabs__tab');

tabsItems.forEach((tabsItem, i) => {
  tabsItem.addEventListener('click', (evt) => {
    tabsItems.forEach((element, j) => {
      if (element.classList.contains('tech-tabs__item--active')) {
        element.classList.remove('tech-tabs__item--active');
        tabs[j].classList.remove('tech-tabs__tab--active');
      }
    });
    tabsItem.classList.add('tech-tabs__item--active');
    tabs[i].classList.add('tech-tabs__tab--active');
  })
});
