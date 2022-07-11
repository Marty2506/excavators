const menu = document.querySelector('.menu');
const menuLinks = menu.querySelectorAll('.menu__main > .menu__list > .menu__item > .menu__link');

menuLinks.forEach(menuLink => {
  menuLink.addEventListener('click', (evt) => {
    const submenu = evt.target.parentNode.querySelector('.menu__sub');
    submenu.classList.add('menu__sub--active');
    const backButton = submenu.querySelector('.menu__back-button');
    backButton.addEventListener('click', () => {
      submenu.classList.remove('menu__sub--active');
    })
  })
});
