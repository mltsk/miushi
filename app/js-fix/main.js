"use strict";

//всплывающие меню
var headerToggle = document.querySelector('.header__toggle'),
    headerBoxClose = document.querySelector('.header__box-close'),
    headerBoxShadow = document.querySelector('.header__box-shadow');
var headerBox = document.querySelector('.header__box');
headerToggle.addEventListener('click', function () {
  var headerBox = document.querySelector('.header__box');
  headerBox.style.left = '0';
  headerBoxShadow.style.display = 'block';
  headerBoxShadow.style.animationName = 'anim-shadow-on';
});
headerBoxClose.addEventListener('click', function () {
  var headerBox = document.querySelector('.header__box');
  headerBox.style.left = '-100%';
  headerBoxShadow.style.animationName = 'anim-shadow-off';
  setTimeout(function () {
    headerBoxShadow.style.display = 'none';
  }, 500);
}); // управление оберткой в меню

function unwrap(wrapper) {
  var docFrag = document.createDocumentFragment();

  while (wrapper.firstChild) {
    var child = wrapper.removeChild(wrapper.firstChild);
    docFrag.appendChild(child);
  }

  wrapper.parentNode.replaceChild(docFrag, wrapper);
}

if (document.documentElement.clientWidth > 1169) {
  unwrap(headerBox);
}

window.addEventListener('resize', function () {
  var headerBox = document.querySelector('.header__box');

  if (headerBox) {
    if (document.documentElement.clientWidth > 1169 && headerBox.innerHTML) {
      unwrap(headerBox);
      headerBoxShadow.style.display = 'none';
    }
  }

  if (document.documentElement.clientWidth <= 1169 && !headerBox) {
    $(".towrap").wrapAll("<div class='header__box'></div>");
  }
}); //Слайдер 

$('.slider__list').slick({
  autoplay: true,
  autoplaySpeed: 8000,
  dots: true,
  dotsClass: 'slider__dots',
  prevArrow: '<button class="slider__arrows slider__arrows--prev" aria-label="Предыдущий слайд"></button>',
  nextArrow: '<button class="slider__arrows slider__arrows--next" aria-label="Следующий слайд"></button>',
  responsive: [{
    breakpoint: 750,
    settings: {
      dots: true,
      dotsClass: 'slider__dots',
      prevArrow: '',
      nextArrow: ''
    }
  }]
}); // $('.food-section__list').slick({
//   infinite: true,
//   dots: true,
//   speed: 700,
//   slidesToShow: 4,
//   slidesToScroll: 4,
//   dotsClass: 'food-section__dots',
//   prevArrow: '<button class="food-section__arrows food-section__arrows--prev" aria-label="Предыдущий слайд"></button>',
//   nextArrow: '<button class="food-section__arrows food-section__arrows--next" aria-label="Следующий слайд"></button>',
//   responsive: [
//     {
//       breakpoint: 940,
//       settings: {
//         infinite: false,
//         dots: true,
//         slidesToShow: 4,
//         slidesToScroll: 4,
//       }
//     },
//     {
//       breakpoint: 720,
//       settings: {
//         slidesToShow: 2,
//         slidesToScroll: 2,
//       }
//     },
//     {
//       breakpoint: 480,
//       settings: {
//         focusOnSelect: true,
//         centerMode: true,
//         centerPadding: '80px',
//         dots: false,
//         arrows: false,
//         slidesToShow: 1,
//         slidesToScroll: 1
//       }
//     },
//     {
//       breakpoint: 420,
//       settings: {
//         focusOnSelect: true,
//         centerMode: true,
//         centerPadding: '60px',
//         dots: false,
//         arrows: false,
//         slidesToShow: 1,
//         slidesToScroll: 1
//       }
//     },
//     {
//       breakpoint: 380,
//       settings: {
//         focusOnSelect: true,
//         centerMode: true,
//         centerPadding: '50px',
//         dots: false,
//         arrows: false,
//         slidesToShow: 1,
//         slidesToScroll: 1
//       }
//     },
//     {
//       breakpoint: 340,
//       settings: {
//         focusOnSelect: true,
//         centerMode: true,
//         centerPadding: '40px',
//         dots: false,
//         arrows: false,
//         slidesToShow: 1,
//         slidesToScroll: 1
//       }
//     }
//   ]
// });

$('.food-section__list--new').slick({
  infinite: true,
  dots: true,
  speed: 700,
  slidesToShow: 4,
  slidesToScroll: 4,
  dotsClass: 'food-section__dots',
  prevArrow: '<button class="food-section__arrows food-section__arrows--prev" aria-label="Предыдущий слайд"></button>',
  nextArrow: '<button class="food-section__arrows food-section__arrows--next" aria-label="Следующий слайд"></button>',
  responsive: [{
    breakpoint: 940,
    settings: {
      slidesToShow: 3
    }
  }, {
    breakpoint: 720,
    settings: {
      slidesToShow: 2,
      slidesToScroll: 2
    }
  }, {
    breakpoint: 480,
    settings: {
      focusOnSelect: true,
      centerMode: true,
      centerPadding: '80px',
      dots: false,
      arrows: false,
      slidesToShow: 1,
      slidesToScroll: 1
    }
  }, {
    breakpoint: 420,
    settings: {
      focusOnSelect: true,
      centerMode: true,
      centerPadding: '60px',
      dots: false,
      arrows: false,
      slidesToShow: 1,
      slidesToScroll: 1
    }
  }, {
    breakpoint: 380,
    settings: {
      focusOnSelect: true,
      centerMode: true,
      centerPadding: '50px',
      dots: false,
      arrows: false,
      slidesToShow: 1,
      slidesToScroll: 1
    }
  }, {
    breakpoint: 340,
    settings: {
      focusOnSelect: true,
      centerMode: true,
      centerPadding: '40px',
      dots: false,
      arrows: false,
      slidesToShow: 1,
      slidesToScroll: 1
    }
  }]
});
var filtered = true;
$('.food-section__list--new').slick('slickFilter', ':has(.new)'); // $('.js-filter-new').on('click', function(){
//     if (!($('.js-filter-new').hasClass('new__item--current'))){
//         $('.food-section__list--new').slick('slickUnfilter');
//         filtered = false;
//         $('.food-section__list--new').slick('slickFilter',':has(.new)');
//         filtered = true;
//         $('.js-filter-new').addClass("offers__item--current");
//         $('.js-filter-promotion').removeClass("offers__item--current");
//     }
// });
// $('.js-filter-promotion').on('click', function(){
//     if (!($('.js-filter-promotion').hasClass('new__item--current'))){
//         $('.food-section__list--new').slick('slickUnfilter');
//         filtered = false;
//         $('.food-section__list--new').slick('slickFilter',':has(.fire)');
//         filtered = true;
//         $('.js-filter-new').removeClass("offers__item--current");
//         $('.js-filter-promotion').addClass("offers__item--current");
//     }
// });

$('.js-filter-new').on('click', function () {
  if (!$('.js-filter-new').hasClass('new__item--current')) {
    $('.food-section__list--new').slick('slickUnfilter');
    filtered = false;
    $('.food-section__list--new').slick('slickFilter', ':has(.new)');
    filtered = true;
    $('.js-filter-new').addClass("offers__item--current");
    $('.js-filter-promotion').removeClass("offers__item--current");
  }
});
$('.js-filter-promotion').on('click', function () {
  if (!$('.js-filter-promotion').hasClass('new__item--current')) {
    $('.food-section__list--new').slick('slickUnfilter');
    filtered = false;
    $('.food-section__list--new').slick('slickFilter', ':has(.fire)');
    filtered = true;
    $('.js-filter-new').removeClass("offers__item--current");
    $('.js-filter-promotion').addClass("offers__item--current");
  }
}); // Калькулятор карточек

var foodSectionSets = document.querySelector('.food-section--sets'),
    foodSectionRolls = document.querySelector('.food-section--rolls'),
    foodSectionPizza = document.querySelector('.food-section--pizza'),
    foodSectionWok = document.querySelector('.food-section--wok'),
    foodSectionNew = document.querySelector('.food-section--new');

function abc2(n) {
  n += "";
  n = new Array(4 - n.length % 3).join("U") + n;
  return n.replace(/([0-9U]{3})/g, "$1 ").replace(/U/g, "");
}

var calcPrice = function calcPrice(foodSection) {
  var target = event.target;
  var foodSectionItem = foodSection.querySelectorAll('.food-section__item');

  for (var i = 0; i < foodSectionItem.length; i++) {
    var element = foodSectionItem[i];
    var input = element.querySelector('.food-section__input');
    var price = element.querySelector('.price');
    var priceData = price.dataset.price;

    if (target == element.querySelector('.food-section__price-btn--plus')) {
      input.value++;
      price.textContent = abc2(priceData * input.value);
    }

    if (target == element.querySelector('.food-section__price-btn--minus') && input.value > 0) {
      input.value--;
      price.textContent = abc2(priceData * input.value);
    }
  }
}; //Для вока


var calcPriceWok = function calcPriceWok(foodSection) {
  var target = event.target;
  var foodSectionItem = foodSection.querySelectorAll('.food-section__item');

  var _loop = function _loop(i) {
    var element = foodSectionItem[i];
    var input = element.querySelector('.food-section__input');
    var price = element.querySelector('.price');
    var priceData = price.dataset.price;
    var addQuantity = element.querySelector('.food-section__add-left-quantity');
    var addPlusBtn = element.querySelector('.food-section__add-right-plus');
    var addCrossBtn = element.querySelector('.food-section__add-left-btn');
    var addPrice = element.querySelector('.food-section__add-right-plus');
    var selected = element.querySelector('.food-section__supplements-select');
    var selectedArr = element.querySelector('.food-section__supplements-select').options;
    var wokPrice = element.querySelector('.food-section__add-right-price');

    if (target == element.querySelector('.food-section__price-btn--plus')) {
      input.value++;
      price.textContent = abc2(priceData * input.value + +wokPrice.textContent);
    }

    if (target == element.querySelector('.food-section__price-btn--minus') && input.value > 0) {
      input.value--;
      price.textContent = abc2(priceData * input.value + +wokPrice.textContent);
    } //добавление добавок к воку


    if (target == element.querySelector('.food-section__add-right-plus')) {
      addQuantity.textContent++;
      var index = selectedArr.selectedIndex;
      console.log(wokPrice.textContent);
      wokPrice.textContent = addQuantity.textContent * selectedArr[index].dataset.price;
      price.textContent = abc2(priceData * input.value + +wokPrice.textContent);
    } //убираем все добавки у вока


    if (target == addCrossBtn) {
      addQuantity.textContent = 0;
      wokPrice.textContent = 0;
      price.textContent = abc2(priceData * input.value + +wokPrice.textContent);
    }

    selected.addEventListener('change', function () {
      addQuantity.textContent = 0;
      wokPrice.textContent = 0;
      price.textContent = abc2(priceData * input.value + +wokPrice.textContent);
    });
  };

  for (var i = 0; i < foodSectionItem.length; i++) {
    _loop(i);
  }
};

foodSectionSets.addEventListener('click', function (event) {
  calcPrice(foodSectionSets);
});
foodSectionRolls.addEventListener('click', function (event) {
  calcPrice(foodSectionRolls);
});
foodSectionPizza.addEventListener('click', function (event) {
  calcPrice(foodSectionPizza);
});
foodSectionWok.addEventListener('click', function (event) {
  calcPriceWok(foodSectionWok);
});
foodSectionNew.addEventListener('click', function (event) {
  calcPrice(foodSectionNew);
}); //табы новинки акции
// const newWrapper = document.querySelector('.new__wrapper'),
//     newItem = newWrapper.querySelectorAll('.new__item'),
//     foodSectionContainerNew = newWrapper.querySelector('.food-section__container-new');
// newWrapper.addEventListener('click',(event)=> {
//     let target = event.target;
//     for (let i = 0; i < newItem.length; i++) {
//         if(target == newItem[0]) {
//             newItem[1].classList.remove('new__item--current');
//             newItem[0].classList.add('new__item--current');
//             foodSectionContainerNew.style.transform = 'translateX(0%)'
//         }
//         if(target == newItem[1]) {
//             newItem[0].classList.remove('new__item--current');
//             newItem[1].classList.add('new__item--current');
//             foodSectionContainerNew.style.transform = 'translateX(-50%)'
//         }     
//     }
// });
//Кнопа показать все

var reasonsBtn = document.querySelector('.reasons__btn');
var reasonsList = document.querySelector('.reasons__list');
reasonsBtn.addEventListener('click', function () {
  if (reasonsList.style.maxHeight == '' || reasonsList.style.maxHeight == '750px') {
    reasonsList.style.maxHeight = reasonsList.scrollHeight + 'px';
    reasonsBtn.textContent = "Спрятать";
  } else {
    reasonsList.style.maxHeight = '750px';
    reasonsBtn.textContent = "Показать все";
  }
});
var aboutBtn = document.querySelector('.about__btn');
var aboutInformation = document.querySelector('.about__information');
aboutBtn.addEventListener('click', function () {
  if (aboutInformation.style.maxHeight == '' || aboutInformation.style.maxHeight == '400px') {
    aboutInformation.style.maxHeight = reasonsList.scrollHeight + 'px';
    aboutBtn.textContent = "Спрятать";
  } else {
    aboutInformation.style.maxHeight = '400px';
    aboutBtn.textContent = "Показать все";
  }
}); //футер

var footerTitle = document.querySelectorAll('.footer__title');

for (var i = 0; i < footerTitle.length; i++) {
  footerTitle[i].addEventListener('click', function () {
    this.classList.toggle('active');
    var content = this.nextElementSibling;

    if (content.style.maxHeight) {
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + 'px';
    }
  });
}

;
objectFitImages();