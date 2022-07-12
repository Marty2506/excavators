const burger = document.querySelector('.burger');

burger.classList.remove('burger--no-js');

burger.addEventListener('click', (evt) => {
  evt.target.classList.toggle('burger--opened');
  if (menu) {
    menu.classList.toggle('menu--opened');
    pageHeaderBottom.classList.toggle('page-header__bottom--opened');
  }
})


