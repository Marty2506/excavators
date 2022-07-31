document.querySelector('.contacts__map').classList.remove('contacts__map--no-js');

const contactsSelectItem = document.querySelector('#cities');
if (contactsSelectItem) {
  contactsSelectItem.addEventListener('change', (e) => {
    console.log(e.target.selectedIndex);
    const addresses = document.querySelectorAll('.contacts__address-item');
    addresses.forEach(el => el.classList.remove('contacts__address-item--active'));
    addresses[e.target.selectedIndex].classList.add('contacts__address-item--active');
    const maps = document.querySelectorAll('.contacts__maps-item');
    maps.forEach(el => el.classList.remove('contacts__maps-item--active'));
    maps[e.target.selectedIndex].classList.add('contacts__maps-item--active');
  })
}
