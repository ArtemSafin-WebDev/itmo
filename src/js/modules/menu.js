import { clearAllBodyScrollLocks, disableBodyScroll } from "body-scroll-lock";

export default () => {
  const openBtn = document.querySelector(".js-burger-open");
  const closeBtn = document.querySelector(".js-burger-close");
  const menu = document.querySelector(".js-burger-menu");

  let menuOpen = false;

  if (!openBtn || !menu) return;

  const openMenu = () => {
    if (menuOpen) return;
    document.body.classList.add("mobile-menu-open");
    disableBodyScroll(menu);
    menuOpen = true;
  };
  const closeMenu = () => {
    if (!menuOpen) return;
    document.body.classList.remove("mobile-menu-open");
    clearAllBodyScrollLocks();
    menuOpen = false;
  };

  window.openMenu = openMenu;
  window.closeMenu = closeMenu;

  openBtn.addEventListener("click", (event) => {
    event.preventDefault();
    if (!menuOpen) {
      openMenu();
    }
  });

  closeBtn.addEventListener("click", (event) => {
    event.preventDefault();
    if (menuOpen) {
      closeMenu();
    }
  });

  menu.addEventListener('click', function(event) {
    if (event.target === this) {
      if (menuOpen) {
        closeMenu();
      }
    }
  })
};
