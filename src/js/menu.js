const menu = document.querySelector('.menu');
const menuSubs = menu.querySelectorAll('.menu__sub');
const pageHeaderBottom = document.querySelector('.page-header__bottom');

menu.classList.remove('menu--no-js');
pageHeaderBottom.classList.remove('page-header__bottom--no-js');

menuSubs.forEach(submenu => {
  const link = submenu.parentNode.querySelector('.menu__link');
  if (link) {
    link.addEventListener('click', () => {
      submenu.classList.add('menu__sub--active');
      const backButton = submenu.querySelector('.menu__back-button');
      backButton.addEventListener('click', () => {
        submenu.classList.remove('menu__sub--active');
      });
    });
  }
});
