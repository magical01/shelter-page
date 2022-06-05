// burger =============
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
shadow.addEventListener('click', (event) => {
  
  if (event.target.closest('.nav--visible') === null) {
    body?.classList.remove('stop-scroll');
    burger?.classList.remove('burger--active');
    menu?.classList.remove('nav--visible');   
    menuLogo?.classList.remove('menu__logo--visible');
    logo?.classList.remove('logo--hidden');
    shadow?.classList.remove('shadow-open');
  }
})
// modal ==============================================================
const modalOverlay = document?.querySelector('.modal-overlay ');
const btnClose = document?.querySelectorAll('.modal-close');

modalOverlay.addEventListener('click', (e) => {
  let modals = document.getElementById('modals').querySelectorAll('.modal--visible');
	if (e.target == modalOverlay) {
		modalOverlay.classList.remove('modal-overlay--visible');
		modals.forEach((el) => {
      el.classList.remove('modal--visible');
		});
    body.classList.remove('stop-scroll')
	}
});

btnClose.forEach(el => {
  el.addEventListener('click', () => {
    modalOverlay.classList.remove('modal-overlay--visible');
    body.classList.remove('stop-scroll')
  });
})

modalOverlay.addEventListener('click', (event) => {
  if (event.target.closest('.modal__content') === null) {
    modalOverlay?.classList.remove('modal-overlay--visible');
    body?.classList.remove('stop-scroll')
  }
})



const pets = [
  {
    "name": "Katrine",
    "img": "../../assets/images/katrine.png",
    "type": "Cat",
    "breed": "British Shorthair",
    "description": "Katrine is a beautiful girl. She is as soft as the finest velvet with a thick lush fur. Will love you until the last breath she takes as long as you are the one. She is picky about her affection. She loves cuddles and to stretch into your hands for a deeper relaxations.",
    "age": "6 months",
    "inoculations": ["panleukopenia"],
    "diseases": ["none"],
    "parasites": ["none"]
  },
  {
    "name": "Jennifer",
    "img": "../../assets/images/jennifer.png",
    "type": "Dog",
    "breed": "Labrador",
    "description": "Jennifer is a sweet 2 months old Labrador that is patiently waiting to find a new forever home. This girl really enjoys being able to go outside to run and play, but won't hesitate to play up a storm in the house if she has all of her favorite toys.",
    "age": "2 months",
    "inoculations": ["none"],
    "diseases": ["none"],
    "parasites": ["none"]
  },
  {
    "name": "Woody",
    "img": "../../assets/images/woody.png",
    "type": "Dog",
    "breed": "Golden Retriever",
    "description": "Woody is a handsome 3 1/2 year old boy. Woody does know basic commands and is a smart pup. Since he is on the stronger side, he will learn a lot from your training. Woody will be happier when he finds a new family that can spend a lot of time with him.",
    "age": "3 years 6 months",
    "inoculations": ["adenovirus", "distemper"],
    "diseases": ["right back leg mobility reduced"],
    "parasites": ["none"]
  },
  {
    "name": "Sophia",
    "img": "../../assets/images/sophia.png",
    "type": "Dog",
    "breed": "Shih tzu",
    "description": "Sophia here and I'm looking for my forever home to live out the best years of my life. I am full of energy. Everyday I'm learning new things, like how to walk on a leash, go potty outside, bark and play with toys and I still need some practice.",
    "age": "1 month",
    "inoculations": ["parvovirus"],
    "diseases": ["none"],
    "parasites": ["none"]
  },
  {
    "name": "Timmy",
    "img": "../../assets/images/timmy.png",
    "type": "Cat",
    "breed": "British Shorthair",
    "description": "Timmy is an adorable grey british shorthair male. He loves to play and snuggle. He is neutered and up to date on age appropriate vaccinations. He can be chatty and enjoys being held. Timmy has a lot to say and wants a person to share his thoughts with.",
    "age": "2 years 3 months",
    "inoculations": ["calicivirus", "viral rhinotracheitis"],
    "diseases": ["kidney stones"],
    "parasites": ["none"]
  },
  {
    "name": "Charly",
    "img": "../../assets/images/charly.png",
    "type": "Dog",
    "breed": "Jack Russell Terrier",
    "description": "This cute boy, Charly, is three years old and he likes adults and kids. He isn’t fond of many other dogs, so he might do best in a single dog home. Charly has lots of energy, and loves to run and play. We think a fenced yard would make him very happy.",
    "age": "8 years",
    "inoculations": ["bordetella bronchiseptica", "leptospirosis"],
    "diseases": ["deafness", "blindness"],
    "parasites": ["lice", "fleas"]
  },
  {
    "name": "Scarlett",
    "img": "../../assets/images/scarlett.png",
    "type": "Dog",
    "breed": "Jack Russell Terrier",
    "description": "Scarlett is a happy, playful girl who will make you laugh and smile. She forms a bond quickly and will make a loyal companion and a wonderful family dog or a good companion for a single individual too since she likes to hang out and be with her human.",
    "age": "3 months",
    "inoculations": ["parainfluenza"],
    "diseases": ["none"],
    "parasites": ["none"]
  },
  {
    "name": "Freddie",
    "img": "../../assets/images/freddie.png",
    "type": "Cat",
    "breed": "British Shorthair",
    "description": "Freddie is a little shy at first, but very sweet when he warms up. He likes playing with shoe strings and bottle caps. He is quick to learn the rhythms of his human’s daily life. Freddie has bounced around a lot in his life, and is looking to find his forever home.",
    "age": "2 months",
    "inoculations": ["rabies"],
    "diseases": ["none"],
    "parasites": ["none"]
  },
  
];

const modalPrefix = 'modal__item-';
const liElementPrefix = 'friends__item-';

const addModal = function(id, where, data) {
  let elementId = modalPrefix + id;
  // default value
  if(typeof(where) == 'undefined') {
    where = document.getElementById('modals');
  }
  // modal template
  let appendText = '';
  appendText += '<div id="'+elementId+'" class="modal">';
  appendText += '  <div class="modal__content">';
  appendText += '    <div class="modal__image">';
  appendText += '      <img src="'+data.img+'" width="500" height="500" alt="'+data.name+'">';
  appendText += '    </div>';
  appendText += '    <div class="modal__wrap">';
  appendText += '      <h3 class="modal__title">';
  appendText += data.name;
  appendText += '      </h3>';
  appendText += '      <span class="modal__type">';
  appendText += data.type;
  appendText += '      </span>';
  appendText += '      <p class="modal__descr">';
  appendText += data.description;
  appendText += '      </p>';
  appendText += '      <ul class="modal__list list-reset">';
  appendText += '        <li class="modal__item">';
  appendText += '          <span class="modal__age"><strong class="modal-bold">Age:</strong>'+data.age+'</span>';
  appendText += '        </li>';
  appendText += '        <li class="modal__item">';
  appendText += '          <span class="modal__inoculations"><strong class="modal-bold">Inoculations:</strong> ' + Array(data.inoculations).join(', ') + '</span>';
  appendText += '        </li>';
  appendText += '        <li class="modal__item">';
  appendText += '          <span class="modal__diseases"><strong class="modal-bold">Diseases:</strong> ' + Array(data.diseases).join(', ') + '</span>';
  appendText += '        </li>';
  appendText += '        <li class="modal__item">';
  appendText += '          <span class="modal__parasites"><strong class="modal-bold">Parasites:</strong> ' + Array(data.parasites).join(', ') + '</span>';
  appendText += '        </li>';
  appendText += '      </ul>';
  appendText += '    </div>';
  appendText += '  </div>';
  //appendText += '  <span class="modal-close" onclick="closeModal(\'' + elementId + '\')"></span>';
  appendText += '  <span class="modal-close"></span>';
  appendText += '</div>';
  appendText += '';
  // append
  where.innerHTML += appendText;
  // event
  setTimeout(function () {
    document.getElementById(elementId).addEventListener('click', function (event) {
      if (event.target.closest('.modal__content') === null) {
        closeModal(elementId);
      } 
    });
  }, 10);

}


const addLiElement = function(id, where, data) {
  let elementId = modalPrefix + id;
  let liElementId = liElementPrefix + id;
  // default value
  if (typeof (where) == 'undefined') {
    where = document.getElementById('friends__list');
  }
  // template
  let appendText = '';
  appendText += '  <li id="'+liElementId+'" class="friends__item">';
  appendText += '    <div class="friends__card-img">';
  appendText += '      <img src="'+data.img+'" width="270" height="270" alt="'+data.name+'">';
  appendText += '    </div>';
  appendText += '    <strong class="friends__card-name">'+data.name+'</strong>';
  appendText += '    <button class="btn-reset friends__card-btn">';
  appendText += '      <a href="#" class="friends__card-btn__link">';
  appendText += '        Learn more';
  appendText += '      </a>';
  appendText += '    </button>';
  appendText += '  </li>';
  // append
  where.innerHTML += appendText;
  // event
  setTimeout(function() {
    document.getElementById(liElementId).addEventListener('click', function () {
      openModal(elementId);
    });
  }, 10);

}

let paginationPets = [];
let paginationPosition = 0;
let countCards = 8;

const btnDoublePrev = document.querySelector('.double-prev');
const btnPrev = document.querySelector('.one-prev');
const btnNext = document.querySelector('.one-next');
const btnDoubleNext = document.querySelector('.double-next');

const initPagination = function() {
  let count = 48;
  let set;
  function createSet() {
    set = [];
    for(let i = 0; i < pets.length; i++) set.push(i);
  }
  createSet();
  while(paginationPets.length < count) {
    if(set.length === 0) createSet();
    let ind = Math.floor(Math.random() * set.length);
    let pet = set[ind];
    paginationPets.push(pets[pet]);
    set.splice(ind, 1);
  }
  btnDoublePrev.addEventListener('click', () => { movePagination('doublePrev'); });
  btnPrev.addEventListener('click', () => { movePagination('onePrev'); });
  btnNext.addEventListener('click', () => { movePagination('oneNext'); });
  btnDoubleNext.addEventListener('click', () => { movePagination('doubleNext'); });
}

const renderPagination = function() {

  const btnNum = document.querySelector('.btn-num');
  const container = document.querySelector('.friends__list');
  
  let pages = Math.ceil(paginationPets.length / countCards);
  let page = Math.floor(paginationPosition / countCards) + 1;

  btnNum.innerHTML = page;
  // let content = '';

  container.innerHTML = '';
  for(let i = 0; i < countCards; i++) {
    let pos = paginationPosition + i;
    // content = `
    
    // `;
    //addLiElement('li-card-id' + i, container, paginationPets[pos]);
    addLiElement(i, container, paginationPets[pos]);
  }
  
}

const movePagination = function(button) {
  let endLimit = paginationPets.length - countCards;

  // define counts of cards that can contain in container
  if (window.innerWidth >= 1280) {
    countCards = 8;
  } 
  else if (window.innerWidth > 768) {
    countCards = 6;
  }
  else {
    countCards = 3;
  }

  console.log('countCards', countCards);

  // define current page
  switch (button) {
    case 'onePrev':
      paginationPosition -= countCards;
    break;
    case 'doublePrev':
      paginationPosition = 0;
    break;
    case 'oneNext':
    paginationPosition += countCards;
    break;
    case 'doubleNext':
      paginationPosition = endLimit;
    break;
  }

  // current page value limiter
  if(paginationPosition < 0) paginationPosition = 0;
  if(paginationPosition > endLimit) paginationPosition = endLimit;

  // change style of pagination buttons
  if (paginationPosition === 0) {
    btnDoublePrev.classList.add('btn-inactive');
    btnPrev.classList.add('btn-inactive');
    btnNext.classList.remove('btn-inactive');
    btnDoubleNext.classList.remove('btn-inactive');
  }
  else if (paginationPosition === endLimit) {
    btnDoublePrev.classList.remove('btn-inactive');
    btnPrev.classList.remove('btn-inactive');
    btnNext.classList.add('btn-inactive');
    btnDoubleNext.classList.add('btn-inactive');
  }
  else {
    btnDoublePrev.classList.remove('btn-inactive');
    btnPrev.classList.remove('btn-inactive');
    btnNext.classList.remove('btn-inactive');
    btnDoubleNext.classList.remove('btn-inactive');
  }

  renderPagination();
}

const pasteModalsFromData = function (data, modalsContainer, liContainer) {
  // default values
  if(typeof(data) == 'undefined') data = pets;
  // read data
  for(let i = 0; i < data.length; i++) {
    let item = data[i];
    // add modals and buttons
    addModal(i, modalsContainer, item);
    addLiElement(i, liContainer, item);
  }

}

const openModal = function(id) {
  let el = document.getElementById(id);
  el.classList.add('modal--visible');
  modalOverlay?.classList.add('modal-overlay--visible');
  body?.classList.add('stop-scroll');
}

const closeModal = function(id) {
  let el = document.getElementById(id);
  el.classList.remove('modal--visible');
  modalOverlay?.classList.remove('modal-overlay--visible');
  body?.classList.remove('stop-scroll');
}

// window.onload = function() {
  
// }

document.addEventListener('DOMContentLoaded', () => {
  pasteModalsFromData();
  initPagination();
  movePagination('doublePrev');
})