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


const cards = document?.querySelectorAll('.friends__item');
const modalOverlay = document?.querySelector('.modal-overlay ');
const modals = document?.querySelectorAll('.modal');
const btnClose = document?.querySelectorAll('.modal-close');

cards.forEach((el) => {
	el.addEventListener('click', (e) => {
		let path = e.currentTarget.getAttribute('data-path');
		modals.forEach((el) => {
      el.classList.remove('modal--visible');
		});
    
		document.querySelector(`[data-target="${path}"]`).classList.add('modal--visible');
		modalOverlay?.classList.add('modal-overlay--visible');
    body?.classList.add('stop-scroll')
	});
});

modalOverlay.addEventListener('click', (e) => {
  
	if (e.target == modalOverlay) {
		modalOverlay?.classList.remove('modal-overlay--visible');
		modals?.forEach((el) => {
      el.classList.remove('modal--visible');
      
		});
    body?.classList.remove('stop-scroll')
	}
});

btnClose.forEach(el => {
  el.addEventListener('click', () => {
    modalOverlay?.classList.remove('modal-overlay--visible');
    body?.classList.remove('stop-scroll')
  });
})

modalOverlay.addEventListener('click', (event) => {
  if (event.target.closest('.modal__content') === null) {
    modalOverlay?.classList.remove('modal-overlay--visible');
    body?.classList.remove('stop-scroll')
  }
})