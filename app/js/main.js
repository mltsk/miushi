const headerToggle = document.querySelector('.header__toggle'),
    headerBoxClose = document.querySelector('.header__box-close'),
    headerBoxShadow = document.querySelector('.header__box-shadow');
let headerBox = document.querySelector('.header__box');

//всплывающие меню

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
    // place childNodes in document fragment
    let docFrag = document.createDocumentFragment();
    while (wrapper.firstChild) {
        let child = wrapper.removeChild(wrapper.firstChild);
        docFrag.appendChild(child);
    }

    // replace wrapper with document fragment
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

$('.food-section__list').slick({
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
        dots: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        dots: true,
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

// Калькулятор карточек

const foodSectionSets = document.querySelector('.food-section--sets'),
    foodSectionRolls = document.querySelector('.food-section--rolls'),
    foodSectionPizza = document.querySelector('.food-section--pizza'),
    foodSectionWok = document.querySelector('.food-section--wok');

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
    
    



objectFitImages();
