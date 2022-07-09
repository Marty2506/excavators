const burger = document.querySelector('.burger');

burger.addEventListener('click', (evt) => {
  evt.target.classList.toggle('burger--opened');
})
