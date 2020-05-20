"use strict";

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var headerToggle = document.querySelector('.header__toggle'),
    headerBoxClose = document.querySelector('.header__box-close'),
    headerBoxShadow = document.querySelector('.header__box-shadow');
var headerBox = document.querySelector('.header__box'); //всплывающие меню

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
  // place childNodes in document fragment
  var docFrag = document.createDocumentFragment();

  while (wrapper.firstChild) {
    var child = wrapper.removeChild(wrapper.firstChild);
    docFrag.appendChild(child);
  } // replace wrapper with document fragment


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
});
$('.food-section__list').slick({
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
    settings: _defineProperty({
      dots: true,
      slidesToShow: 3,
      slidesToScroll: 3
    }, "dots", true)
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
}); // Калькулятор карточек

var foodSectionSets = document.querySelector('.food-section--sets'),
    foodSectionRolls = document.querySelector('.food-section--rolls'),
    foodSectionPizza = document.querySelector('.food-section--pizza'),
    foodSectionWok = document.querySelector('.food-section--wok');

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
}); //Кнопа показать все

var reasonsBtn = document.querySelector('.reasons__btn');
var reasonsList = document.querySelector('.reasons__list');
console.log('213', reasonsList.style);
reasonsBtn.addEventListener('click', function () {
  if (reasonsList.style.maxHeight == '' || reasonsList.style.maxHeight == '750px') {
    reasonsList.style.maxHeight = reasonsList.scrollHeight + 'px';
    reasonsBtn.textContent = "Спрятать";
  } else {
    reasonsList.style.maxHeight = '750px';
    reasonsBtn.textContent = "Показать все";
  } // reasonsList.classList.toggle('opened');
  // console.log(reasonsList.scrollHeight);

});
objectFitImages();