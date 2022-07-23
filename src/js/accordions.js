const accordionButtons = document.querySelectorAll('.accordion-button');

accordionButtons.forEach(accordionButton => {
  accordionButton.addEventListener('click', () => {
    accordionButton.classList.toggle('accordion-button--closed');
    const accordionPanel = accordionButton.nextElementSibling;
    if (accordionPanel.style.maxHeight) {
      accordionPanel.style.maxHeight = null;
    } else {
      accordionPanel.style.maxHeight = accordionPanel.scrollHeight + "px";
    }
  })
});
if (accordionButtons) {
  window.addEventListener("resize", disableAcButtons);
  document.addEventListener('DOMContentLoaded', () => {
    if (window.innerWidth > 1348) {
      accordionButtons.forEach(accordionButton => {
        accordionButton.click();
      })
    }
    disableAcButtons();
  });
}
function disableAcButtons() {
  if (window.innerWidth > 1348) {
    accordionButtons.forEach(accordionButton => {
      if (!accordionButton.disabled) {
        accordionButton.disabled = true;
      }
    });
  } else {
    accordionButtons.forEach(accordionButton => {
      if (accordionButton.disabled) {
        accordionButton.disabled = false;
      }
    });
  }
}


