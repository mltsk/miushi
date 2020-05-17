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
    }, 1000);
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
