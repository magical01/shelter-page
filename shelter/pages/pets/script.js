const burger = document?.querySelector('[data-burger]');
const menu = document?.querySelector('[data-menu]');
const menuItems = menu?.querySelectorAll('a');
const body = document.body;

burger?.addEventListener('click', () => {
  body?.classList.toggle('stop-scroll');
  burger?.classList.toggle('burger--active');
  menu?.classList.toggle('nav--visible');
});

menuItems.forEach(el => {
  el.addEventListener('click', () => {
    body?.classList.remove('stop-scroll');
    burger?.classList.remove('burger--active');
    menu?.classList.remove('nav--visible');   
  });
});