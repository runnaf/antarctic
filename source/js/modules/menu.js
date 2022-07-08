const openingMenu = () => {
  const menuContainer = document.querySelector('[data-menu]');
  const menuButton = menuContainer.querySelector('[data-menu-button]');

  if (menuContainer) {
    menuContainer.classList.add('is-js');
  }

  if (menuButton) {
    menuButton.addEventListener('click', ()=>{
      menuContainer.classList.toggle('is-active');
    });
  }
};

export {openingMenu};
