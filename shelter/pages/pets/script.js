// const burger = document?.querySelector('[data-burger]');
// const menu = document?.querySelector('[data-menu]');
// const menuItems = menu?.querySelectorAll('a');
// const body = document.body;

// burger?.addEventListener('click', () => {
//   body?.classList.toggle('stop-scroll');
//   burger?.classList.toggle('burger--active');
//   menu?.classList.toggle('nav--visible');
// });

// menuItems.forEach(el => {
//   el.addEventListener('click', () => {
//     body?.classList.remove('stop-scroll');
//     burger?.classList.remove('burger--active');
//     menu?.classList.remove('nav--visible');   
//   });
// });
const burger = document?.querySelector('[data-burger]');
const menu = document?.querySelector('[data-menu]');
const menuItems = menu?.querySelectorAll('a');
const body = document.body;
const menuLogo = document?.querySelector('.menu__logo');
const logo = document?.querySelector('.logo');
const shadow = document?.querySelector('.shadow');

burger?.addEventListener('click', () => {
  body?.classList.toggle('stop-scroll');
  burger?.classList.toggle('burger--active');
  menu?.classList.toggle('nav--visible');
  menuLogo?.classList.toggle('menu__logo--visible');
  logo?.classList.toggle('logo--hidden');
  shadow?.classList.toggle('shadow-open');

});

menuItems.forEach(el => {
  el.addEventListener('click', () => {
    body?.classList.remove('stop-scroll');
    burger?.classList.remove('burger--active');
    menu?.classList.remove('nav--visible');   
    menuLogo?.classList.remove('menu__logo--visible');
    logo?.classList.remove('logo--hidden');
    shadow?.classList.remove('shadow-open');


  });
});