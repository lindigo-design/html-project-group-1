(() => {
  const refs = {
    openMenuBtn: document.querySelector('[data-menu-open]'),
    closeMenuBtn: document.querySelector('[data-menu-close]'),
    menu: document.querySelector('[data-menu]'),
    menuLinks: document.querySelectorAll('.mobile-menu-item-link'),
  };

  const toggleMenu = () => {
    refs.menu.classList.toggle('is-open');
    document.body.classList.toggle('no-scroll');
  };

  if (refs.openMenuBtn && refs.closeMenuBtn && refs.menu) {
    refs.openMenuBtn.addEventListener('click', toggleMenu);
    refs.closeMenuBtn.addEventListener('click', toggleMenu);

    refs.menuLinks.forEach(link => {
      link.addEventListener('click', () => {
        if (refs.menu.classList.contains('is-open')) {
          toggleMenu();
        }
      });
    });
  }
})();
