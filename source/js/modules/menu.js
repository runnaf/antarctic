const openingMenu = () => {
  const menuContainer = document.querySelector('[data-menu]');
  const menuButton = menuContainer.querySelector('[data-menu-button]');
  const menuLinks = menuContainer.querySelectorAll('[data-link-menu]');

  if (menuContainer) {
    menuContainer.classList.add('is-js');
  }

  if (menuButton) {
    menuButton.addEventListener('click', ()=>{
      menuContainer.classList.toggle('is-active');
      document.body.classList.toggle('is-stop-scrolling');
      if (menuContainer.classList.contains('is-active')) {
        document.addEventListener('click', (e) => {
          if (!e.target.closest('.page-header__wrapper')) {
            menuContainer.classList.remove('is-active');
            document.body.classList.remove('is-stop-scrolling');
          }
        });
      } else {
        document.removeEventListener('click', (e) => {
          if (!e.target.closest('.page-header__wrapper')) {
            menuContainer.classList.remove('is-active');
            document.body.classList.remove('is-stop-scrolling');
          }
        });
      }
    });
  }

  if (menuLinks.length > 0) {
    menuLinks.forEach((link)=>{
      link.addEventListener('click', ()=>{
        menuContainer.classList.remove('is-active');
        document.body.classList.remove('is-stop-scrolling');
      });
    });
  }
};

export {openingMenu};
