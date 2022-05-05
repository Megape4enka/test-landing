(function () {
  let nav = document.querySelector('.main-nav');
  let toggle = document .querySelector('.toggle');
  let overlay = document .querySelector('.burger-menu_overlay');
  let body = document .querySelector('body');

  nav.classList.remove('main-nav--no-js');

  toggle.addEventListener('click', () => {
    nav.classList.toggle('main-nav--opened');
    toggle.classList.toggle('main-nav--opened');
    overlay.classList.toggle('main-nav--opened');
  });

  overlay.addEventListener('click',() => {
    nav.classList.remove('main-nav--opened');
    toggle.classList.remove('main-nav--opened');
    overlay.classList.remove('main-nav--opened')
  });

})();

