//всплывающие меню
const headerToggle = document.querySelector('.header__toggle'),
    headerBoxClose = document.querySelector('.header__box-close'),
    headerBoxShadow = document.querySelector('.header__box-shadow');
let headerBox = document.querySelector('.header__box');

headerToggle.addEventListener('click', ()=> {
    let headerBox = document.querySelector('.header__box');
    headerBox.style.left = '0';
    headerBoxShadow.style.display = 'block';
    headerBoxShadow.style.animationName = 'anim-shadow-on';
});

headerBoxClose.addEventListener('click', ()=> {
    let headerBox = document.querySelector('.header__box');
    headerBox.style.left = '-100%';
    headerBoxShadow.style.animationName = 'anim-shadow-off';
    setTimeout(() => {
        headerBoxShadow.style.display = 'none';
    }, 500);
});

// управление оберткой в меню

function unwrap(wrapper) {
    let docFrag = document.createDocumentFragment();
    while (wrapper.firstChild) {
        let child = wrapper.removeChild(wrapper.firstChild);
        docFrag.appendChild(child);
    }

    wrapper.parentNode.replaceChild(docFrag, wrapper);
}

if((document.documentElement.clientWidth) > 1169) {
    unwrap(headerBox);
}

window.addEventListener('resize', ()=> {
    let headerBox = document.querySelector('.header__box');
    if (headerBox) {
        if((document.documentElement.clientWidth) > 1169 && headerBox.innerHTML) {
            unwrap(headerBox);
            headerBoxShadow.style.display = 'none';
        }
    }

    if((document.documentElement.clientWidth) <= 1169 && !headerBox) {
        $(".towrap").wrapAll("<div class='header__box'></div>");
    }
});

//Слайдер 

$('.slider__list').slick({
    autoplay: true,
    autoplaySpeed: 8000,
    dots: true,
    dotsClass: 'slider__dots',
    prevArrow: '<button class="slider__arrows slider__arrows--prev" aria-label="Предыдущий слайд"></button>',
    nextArrow: '<button class="slider__arrows slider__arrows--next" aria-label="Следующий слайд"></button>',
    responsive: [
        {
          breakpoint: 750,
          settings: {
            dots: true,
            dotsClass: 'slider__dots',
            prevArrow: '',
            nextArrow: '',
          }
        }]
});

// $('.food-section__list').slick({
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
    responsive: [
      {
        breakpoint: 940,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 720,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        }
      },
      {
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
      },
      {
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
      },
      {
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
      },
      {
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
      }
    ]
  });

  var filtered = true;
$('.food-section__list--new').slick('slickFilter',':has(.new)');

// $('.js-filter-new').on('click', function(){
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

$('.js-filter-new').on('click', function(){
    if (!($('.js-filter-new').hasClass('new__item--current'))){
        $('.food-section__list--new').slick('slickUnfilter');
        filtered = false;
        $('.food-section__list--new').slick('slickFilter',':has(.new)');
        filtered = true;
        $('.js-filter-new').addClass("offers__item--current");
        $('.js-filter-promotion').removeClass("offers__item--current");
    }
    

});

$('.js-filter-promotion').on('click', function(){
    if (!($('.js-filter-promotion').hasClass('new__item--current'))){
        $('.food-section__list--new').slick('slickUnfilter');
        filtered = false;
        $('.food-section__list--new').slick('slickFilter',':has(.fire)');
        filtered = true;
        $('.js-filter-new').removeClass("offers__item--current");
        $('.js-filter-promotion').addClass("offers__item--current");
    }
});


// Калькулятор карточек

const foodSectionSets = document.querySelector('.food-section--sets'),
    foodSectionRolls = document.querySelector('.food-section--rolls'),
    foodSectionPizza = document.querySelector('.food-section--pizza'),
    foodSectionWok = document.querySelector('.food-section--wok'),
    foodSectionNew = document.querySelector('.food-section--new');

    function abc2(n) {
            n += "";
            n = new Array(4 - n.length % 3).join("U") + n;
            return n.replace(/([0-9U]{3})/g, "$1 ").replace(/U/g, "");
        }
        
const calcPrice = (foodSection)=> {
    let target = event.target;
    let foodSectionItem = foodSection.querySelectorAll('.food-section__item')
    for (let i = 0; i < foodSectionItem.length; i++) {
        const element = foodSectionItem[i];
        let input = element.querySelector('.food-section__input');
        let price = element.querySelector('.price');
        let priceData = price.dataset.price;

        if (target == element.querySelector('.food-section__price-btn--plus')) {
            input.value ++;
            price.textContent =  abc2(priceData * input.value);
        }

        if ((target == element.querySelector('.food-section__price-btn--minus')) && ((input.value) > 0)) {
            input.value --;
            price.textContent =  abc2(priceData * input.value);
        }
    }
};

//Для вока

const calcPriceWok = (foodSection)=> {
    let target = event.target;
    let foodSectionItem = foodSection.querySelectorAll('.food-section__item')
    for (let i = 0; i < foodSectionItem.length; i++) {
        const element = foodSectionItem[i];
        let input = element.querySelector('.food-section__input');
        let price = element.querySelector('.price');
        let priceData = price.dataset.price;

        let addQuantity = element.querySelector('.food-section__add-left-quantity');
        let addPlusBtn = element.querySelector('.food-section__add-right-plus');
        let addCrossBtn = element.querySelector('.food-section__add-left-btn');
        let addPrice = element.querySelector('.food-section__add-right-plus');
        let selected = element.querySelector('.food-section__supplements-select');
        let selectedArr = element.querySelector('.food-section__supplements-select').options;
        let wokPrice = element.querySelector('.food-section__add-right-price')
        
        

        if (target == element.querySelector('.food-section__price-btn--plus')) {
            input.value ++;
            price.textContent =  abc2(priceData * input.value + +wokPrice.textContent);
        }

        if ((target == element.querySelector('.food-section__price-btn--minus')) && ((input.value) > 0)) {
            input.value --;
            price.textContent =  abc2(priceData * input.value + +wokPrice.textContent);
        }
        //добавление добавок к воку
        if (target == element.querySelector('.food-section__add-right-plus')) {
            addQuantity.textContent++

            let index = selectedArr.selectedIndex;
            console.log(wokPrice.textContent);
            wokPrice.textContent = addQuantity.textContent * selectedArr[index].dataset.price;

            price.textContent =   abc2(priceData * input.value + +wokPrice.textContent);
        }
        //убираем все добавки у вока

        if (target == addCrossBtn) { 
            addQuantity.textContent = 0;
            wokPrice.textContent = 0;

            price.textContent =   abc2(priceData * input.value + +wokPrice.textContent);
        }

        selected.addEventListener('change', ()=> {
            addQuantity.textContent = 0;
            wokPrice.textContent = 0;

            price.textContent =   abc2(priceData * input.value + +wokPrice.textContent);
        });

    }
};


foodSectionSets.addEventListener('click', (event)=> {
    calcPrice(foodSectionSets);
});

foodSectionRolls.addEventListener('click', (event)=> {
    calcPrice(foodSectionRolls);
});

foodSectionPizza.addEventListener('click', (event)=> {
    calcPrice(foodSectionPizza);
});

foodSectionWok.addEventListener('click', (event)=> {
    calcPriceWok(foodSectionWok);
});

foodSectionNew.addEventListener('click', (event)=> {
    calcPrice(foodSectionNew);
});

//табы новинки акции

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

const reasonsBtn = document.querySelector('.reasons__btn');
let reasonsList = document.querySelector('.reasons__list');

reasonsBtn.addEventListener('click', ()=> {
    
    if ((reasonsList.style.maxHeight == '') || (reasonsList.style.maxHeight == '750px')) {
        reasonsList.style.maxHeight = reasonsList.scrollHeight + 'px';
        reasonsBtn.textContent = "Спрятать";
    } else {
        reasonsList.style.maxHeight = '750px';
        reasonsBtn.textContent = "Показать все";
    }
});

const aboutBtn = document.querySelector('.about__btn');
let aboutInformation = document.querySelector('.about__information');

aboutBtn.addEventListener('click', ()=> {
    
    if ((aboutInformation.style.maxHeight == '') || (aboutInformation.style.maxHeight == '400px')) {    
        aboutInformation.style.maxHeight = reasonsList.scrollHeight + 'px';
        aboutBtn.textContent = "Спрятать";
    } else {
        aboutInformation.style.maxHeight = '400px';
        aboutBtn.textContent = "Показать все";
    }
});

//футер

let footerTitle = document.querySelectorAll('.footer__title');

for (let i = 0; i < footerTitle.length; i++) {
    footerTitle[i].addEventListener('click', function() {
        this.classList.toggle('active');
        let content = this.nextElementSibling;
        if (content.style.maxHeight) {
            content.style.maxHeight = null;
        } else {
            content.style.maxHeight = content.scrollHeight + 'px';
        }
    });
};

objectFitImages();
