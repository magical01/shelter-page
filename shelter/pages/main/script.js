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


// const cards = document?.querySelectorAll('.friends__item');
// const modalOverlay = document?.querySelector('.modal-overlay ');
// const modals = document?.querySelectorAll('.modal');
// const btnClose = document?.querySelectorAll('.modal-close');

// cards.forEach((el) => {
// 	el.addEventListener('click', (e) => {
// 		let path = e.currentTarget.getAttribute('data-path');
// 		modals.forEach((el) => {
//       el.classList.remove('modal--visible');
// 		});
    
// 		document.querySelector(`[data-target="${path}"]`).classList.add('modal--visible');
// 		modalOverlay?.classList.add('modal-overlay--visible');
//     body?.classList.add('stop-scroll')
// 	});
// });

// modalOverlay.addEventListener('click', (e) => {
  
// 	if (e.target == modalOverlay) {
// 		modalOverlay?.classList.remove('modal-overlay--visible');
// 		modals?.forEach((el) => {
//       el.classList.remove('modal--visible');
      
// 		});
//     body?.classList.remove('stop-scroll')
// 	}
// });

// btnClose.forEach(el => {
//   el.addEventListener('click', () => {
//     modalOverlay?.classList.remove('modal-overlay--visible');
//     body?.classList.remove('stop-scroll')
//   });
// })

// modalOverlay.addEventListener('click', (event) => {
//   if (event.target.closest('.modal__content') === null) {
//     modalOverlay?.classList.remove('modal-overlay--visible');
//     body?.classList.remove('stop-scroll')
//   }
// })
// ==========================================================================


//const cards = document?.querySelectorAll('.friends__item');
const modalOverlay = document?.querySelector('.modal-overlay ');
//const modals = document?.querySelectorAll('.modal');
const btnClose = document?.querySelectorAll('.modal-close');

// cards.forEach((el) => {
// 	el.addEventListener('click', (e) => {
// 		let path = e.currentTarget.getAttribute('data-path');
// 		modals.forEach((el) => {
//       el.classList.remove('modal--visible');
// 		});
    
// 		document.querySelector(`[data-target="${path}"]`).classList.add('modal--visible');
// 		modalOverlay?.classList.add('modal-overlay--visible');
//     body?.classList.add('stop-scroll')
// 	});
// });

modalOverlay.addEventListener('click', (e) => {
  
  //let modals = document?.querySelectorAll('.modal');

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
  }
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


// const addLiElement = function(id, where, data) {

//   let elementId = modalPrefix + id;
//   let liElementId = liElementPrefix + id;

//   if (typeof where == 'undefined') {
//     where = document.querySelector('.friends__list')
//   }
//   // template
//   let appendText = '';
//   appendText += '  <li id="'+liElementId+'" class="friends__item">';
//   appendText += '    <div class="friends__card-img">';
//   appendText += '      <img src="'+data.img+'" width="270" height="270" alt="'+data.name+'">';
//   appendText += '    </div>';
//   appendText += '    <strong class="friends__card-name">'+data.name+'</strong>';
//   appendText += '    <button class="btn-reset friends__card-btn">';
//   appendText += '      <a href="#" class="friends__card-btn__link">';
//   appendText += '        Learn more';
//   appendText += '      </a>';
//   appendText += '    </button>';
//   appendText += '  </li>';

//   // append
//   where.innerHTML += appendText;

//   // event
//   setTimeout(function() {
//     document.getElementById(liElementId).addEventListener('click', function () {
//       openModal(elementId);
//     });
//   }, 10);

// }


const pasteModalsFromData = function (data, modalsContainer, liContainer) {
  // default values
  if(typeof(data) == 'undefined') data = pets;
  // read data
  for(let i = 0; i < data.length; i++) {
    let item = data[i];
    // add modals and buttons
    addModal(i, modalsContainer, item);
    //addLiElement(i, liContainer, item);
  }

}

// window.addEventListener("DOMContentLoaded", pasteModalsFromData)


const openModal = function(id) {
  let el = document.getElementById(id);
  console.log(el);
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

document.addEventListener('DOMContentLoaded', () => {
  pasteModalsFromData();
  initCarousel();
});

const BTN_LEFT = document.querySelector("#btn-left");
const BTN_RIGHT = document.querySelector("#btn-right");
const CAROUSEL = document.querySelector("#carousel");
const ITEM_LEFT = document.querySelector("#item-left");
const ITEM_RIGHT = document.querySelector("#item-right");
//const MODAL_ID_PREFIX = 'modal_id_';
const MODAL_ID_PREFIX = modalPrefix;
const CARD_ID_PREFIX = 'card_id_';
// const 

const getRandomNumber = function(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// const getRandomId = function(len = 8) {
//   let id = '';
//   for(let i = 0; i < len; i++) {
//     id += String(getRandomNumber(0, 9));
//   }
//   return id;
// }

var carouselCards = [];

const generateThreeCards = function(usedCards = carouselCards, selection = pets) {
  let newCards = [];
  // need 3 cards in tuple
  while(newCards.length < 3) {
    // generate unical card
    let newCard = getRandomNumber(0, selection.length - 1);
    while(usedCards.includes(newCard)) {
      newCard = getRandomNumber(0, selection.length - 1);
    }
    // add card to tuple
    usedCards.push(newCard);
    newCards.push(newCard);
  }
  return newCards;
}

// run at start (reset DOM content of carousel)
const initCarousel = function() {
  // generate centre cards
  carouselCards = generateThreeCards();
  document.querySelector("#item-active").innerHTML = createItemTemplate(carouselCards);
  ITEM_LEFT.innerHTML = createItemTemplate(carouselCards);
  ITEM_RIGHT.innerHTML = createItemTemplate(carouselCards);
}

// HTML template for card
const createCardTemplate = function (data, id, modalId) {
  modalId = MODAL_ID_PREFIX + modalId;
  let html = `<li id="${id}" class="friends__item" onclick="openModal('${modalId}')">
  <div class="friends__card-img">
  <img src="${data.img}" width="270" height="270" alt="${data.name}">
  </div>
  <strong class="friends__card-name">${data.name}</strong>
  <button class="btn-reset friends__card-btn">
       Learn more
  </button>
  </li>`;

  return html;
}

// HTML template for item
const createItemTemplate = function(cards, selection = pets) {
  let html = '';
  for(let i = 0; i < cards.length; i++) {
    let cardId = cards[i];
    let cardData = selection[cardId];
    let id = CARD_ID_PREFIX + String(cardId);
    html += createCardTemplate(cardData, id, cardId);
  }
  return html;
}

const addListenerToCard = function(index) {
  let modalId = MODAL_ID_PREFIX + index;
  let cardId = CARD_ID_PREFIX + index;
  document.getElementById(cardId).addEventListener('DOMContentLoaded', function() {
    document.getElementById(cardId).addEventListener('click', function () {
      console.log('click');
      openModal(modalId);
    });
  });
}

const addListenerToCards = function(selection = carouselCards) {
  for(let i = 0; i < selection.length; i++) {
    addListenerToCard(selection[i]);
  }
}

// const createCardTemplate = () => {
//   const card = document.createElement("li");
//   card.classList.add("friends__item");
//   return card;
// }

const moveLeft = () => {
  // generate new cards and save
  carouselCards = generateThreeCards();

  // generate side cards template and paste to DOM
  ITEM_LEFT.innerHTML = createItemTemplate(carouselCards);
  ITEM_RIGHT.innerHTML = createItemTemplate(carouselCards);

  // run animation
  CAROUSEL.classList.add("transition-left");
  BTN_LEFT.removeEventListener("click", moveLeft);
  BTN_RIGHT.removeEventListener("click", moveRight);
};

const moveRight = () => {
  // generate new cards and save
  carouselCards = generateThreeCards();

  // generate side cards template and paste to DOM
  ITEM_LEFT.innerHTML = createItemTemplate(carouselCards);
  ITEM_RIGHT.innerHTML = createItemTemplate(carouselCards);

  // run animation
  CAROUSEL.classList.add("transition-right");
  BTN_LEFT.removeEventListener("click", moveLeft);
  BTN_RIGHT.removeEventListener("click", moveRight);
};

BTN_LEFT.addEventListener("click", moveLeft);
BTN_RIGHT.addEventListener("click", moveRight);

CAROUSEL.addEventListener("animationend", (animationEvent) => {

  // set initial position
  let changedItem;
  if (animationEvent.animationName === "move-left") {
    CAROUSEL.classList.remove("transition-left");
    changedItem = ITEM_LEFT;
    document.querySelector("#item-active").innerHTML = ITEM_LEFT.innerHTML;
  } else {
    CAROUSEL.classList.remove("transition-right");
    changedItem = ITEM_RIGHT;
    document.querySelector("#item-active").innerHTML = ITEM_RIGHT.innerHTML;
  }

  // add event listeners to cards of current active item
  // !!!
  addListenerToCards();

  // generate new cards
  // let newCards = generateThreeCards();
  // let itemHTML = createItemTemplate(newCards);
  // ITEM_LEFT.innerHTML = itemHTML;
  // ITEM_RIGHT.innerHTML = itemHTML;



  //document.querySelector("#item-active").innerHTML = ITEM_RIGHT.innerHTML;
  
  // changedItem.innerHTML = "";
  // for (let i = 0; i < 3; i++) {
  //   const card = createCardTemplate();
  //   card.innerText = Math.floor(Math.random() * 8);
  //   changedItem.appendChild(card);
  // }
  
  BTN_LEFT.addEventListener("click", moveLeft);
  BTN_RIGHT.addEventListener("click", moveRight);
})
