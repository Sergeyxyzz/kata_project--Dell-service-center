import './scss/index.scss'
let pageWidth = document.documentElement.scrollWidth

// swiper
const swiper = new Swiper('.swiper', {
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
    },
})

const resizeWidth = () => {
    for (let i = 0; i < 2; i++) {
        swiper[i].hostEl.classList.replace('swiper', 'tablet-screen')
        swiper[i].slides.forEach((elem) => elem.classList.replace('swiper-slide', 'slider-list__item'))
        swiper[i].wrapperEl.classList.replace('swiper-wrapper', 'slider-list')
    }

    swiper[2].hostEl.classList.replace('swiper', 'table-slider')
    swiper[2].slides.forEach((elem) => elem.classList.replace('swiper-slide', 'slider-three'))
    swiper[2].wrapperEl.classList.replace('swiper-wrapper', 'slider-list-three')
}

if (pageWidth >= 768) {
    resizeWidth()
    document.querySelectorAll('.header-mobile').forEach((elem) => elem.classList.replace('header-mobile', 'header-tablet'))
    document.querySelectorAll('.slide--anchor-big-view').forEach((elem) => {
        if (elem.classList.contains('slide--anchor-big-view')) {
            elem.classList.add('view-window-only')
        }
    })
    window.addEventListener('resize', () => {
        if (innerWidth <= 768) {
            document.querySelectorAll('.wrap-border').forEach((elem) => (elem.style.cssText = `width: 85vw;`))
        } else {
            document.querySelectorAll('.wrap-border').forEach((elem) => (elem.style.cssText = `width: 60%;`))
        }
    })
} else {
    document.querySelectorAll('.show-content').forEach((elem) => elem.remove())
    document.querySelectorAll('.hide-tablet').forEach((elem) => elem.classList.remove('hide-tablet'))
    document.querySelectorAll('.view-window-only').forEach((elem) => elem.classList.remove('view-window-only'))
}

const btnShowMore = document.querySelectorAll('.button__show-more'),
    hideTablet = document.querySelectorAll('.hide-tablet')

hideTablet.forEach((elem) => {
    elem.style.cssText = `display: none;`
})

const showSliderContent = () => {
    for (let i = 0; i < 3; i++) {
        if (hideTablet[i].style.display === 'none') {
            hideTablet[i].style.display = 'block'
            if (pageWidth < 1440) {
                document.querySelectorAll('.view-window-only')[(0, 1)].style.display = 'block'
            }
            btnShowMore[0].innerHTML = `<button class="button__read-more button__show-more "><img class="image-expand" src="./images/expand2.svg" alt="expand" title="expand" /><b>Скрыть все</b></button>`
        } else if ((hideTablet[i].style.display = 'block')) {
            if (pageWidth < 1440) {
                document.querySelectorAll('.view-window-only')[(0, 1)].style.display = 'none'
            }
            hideTablet[i].style.display = 'none'
            btnShowMore[0].innerHTML = `<button class="button__read-more button__show-more"><img class="image-expand" src="./images/expand.svg" alt="expand" title="expand" /><b>Показать все</b></button>`
        }
    }
}

const showSliderContent2 = () => {
    for (let i = 3; i < 6; i++) {
        if (hideTablet[i].style.display === 'none') {
            hideTablet[i].style.display = 'block'
            if (pageWidth < 1440) {
                document.querySelectorAll('.view-window-only')[(2, 3)].style.display = 'block'
            }
            btnShowMore[1].innerHTML = `<button class="button__read-more button__show-more "><img class="image-expand" src="./images/expand2.svg" alt="expand" title="expand" /><b>Скрыть все</b></button>`
        } else if ((hideTablet[i].style.display = 'block')) {
            if (pageWidth < 1440) {
                document.querySelectorAll('.view-window-only')[(2, 3)].style.display = 'none'
            }
            hideTablet[i].style.display = 'none'
            btnShowMore[1].innerHTML = `<button class="button__read-more button__show-more"><img class="image-expand" src="./images/expand.svg" alt="expand" title="expand" /><b>Показать все</b></button>`
        }
    }
}

if (pageWidth > 768) {
    btnShowMore[0].addEventListener('click', showSliderContent)
    btnShowMore[1].addEventListener('click', showSliderContent2)
}
// end swiper

// burger-menu
const btnBurger = document.querySelector('.btn-burger'),
    burgerMenu = document.querySelector('.burger-menu'),
    closeBtnBurger = document.querySelector('.close-btn-burger'),
    mainContent = document.querySelector('.main'),
    headerContent = document.querySelector('.header'),
    content = document.querySelector('.content'),
    body = document.querySelector('.body'),
    langItem = document.querySelectorAll('.lang-item')

const showBurger = () => {
    if ((burgerMenu.style.display = 'none')) {
        burgerMenu.style.cssText = `min-height: 100%;
        z-index: 100;
        top: 0%;
        position: absolute;
        transform: translateX(0px);
        `
        mainContent.style.cssText = `opacity: 0.1;`
        headerContent.style.cssText = `opacity: 0.1;`
    }
}

const closeBurger = () => {
    if ((burgerMenu.style.display = 'block')) {
        burgerMenu.style.cssText = `position: absolute;
        transform: translateX(-360px);
        top: 0%;
        z-index: 100;
        `
        mainContent.style.cssText = `opacity: 1;`
        headerContent.style.cssText = `opacity: 1;`
    }
}

btnBurger.addEventListener('click', showBurger)
closeBtnBurger.addEventListener('click', closeBurger)

if (innerWidth < 1440) {
    document.addEventListener(
        'click',
        (e) => {
            const click = e.composedPath().includes(burgerMenu)

            if (!click) {
                closeBurger()
            }
        },
        { capture: true }
    )
}
// end burger-menu

// modal-form-menu
const modalMenu = document.querySelector('.modal-menu'),
    btnCloseModal = document.querySelector('.close-btn-menu'),
    inputDelete = document.querySelectorAll('.form__input--delete'),
    formTitle = document.querySelector('.menu__form-title'),
    buttonCall = document.querySelectorAll('.button-call'),
    buttonChat = document.querySelectorAll('.button-chat')

const openModalMenu = () => {
    modalMenu.style.cssText = `min-height: 100%;
    z-index: 100;
    transform: translateX(0px);
    right: 0%;
    `
    mainContent.style.cssText = `opacity: 0.1;`
    headerContent.style.cssText = `opacity: 0.1;`
}

const closeModalMenu = () => {
    modalMenu.style.cssText = `
    transform: translateX(540px);
    `
    mainContent.style.cssText = `opacity: 1;`
    headerContent.style.cssText = `opacity: 1;`
}

document.addEventListener(
    'click',
    (e) => {
        const click = e.composedPath().includes(modalMenu)

        if (!click) {
            closeModalMenu()
        }
    },
    { capture: true }
)

buttonChat.forEach((elem) => {
    elem.addEventListener('click', (e) => {
        if (e.currentTarget === elem) {
            openModalMenu()
            document.querySelectorAll('.form__input--delete').forEach((elem) => (elem.style.display = 'block'))
            formTitle.textContent = 'ОБРАТНАЯ СВЯЗЬ'
        }
    })
})
btnCloseModal.addEventListener('click', closeModalMenu)

buttonCall.forEach((elem) => {
    elem.addEventListener('click', () => {
        openModalMenu()
        document.querySelectorAll('.form__input--delete').forEach((elem) => (elem.style.display = 'none'))
        formTitle.textContent = 'ЗАКАЗАТЬ ЗВОНОК'
    })
})
// end modal form menu

// change active-class in links
const headerLinks = document.querySelectorAll('.nav-list__link')

document.querySelectorAll('.nav--anchor').forEach((elem) => {
    elem.addEventListener('click', () => {
        document.querySelector('.nav--anchor').classList.remove('active-switcher')
    })
})

for (let i = 0; i < headerLinks.length; i++) {
    headerLinks[i].addEventListener('click', function () {
        let current = document.querySelectorAll('.nav-list__link--active')
        current[0].className = current[0].className.replace(' nav-list__link--active', '')
        this.className += ' nav-list__link--active'
    })
}
// end change active-class in links

// menu big screen formatter
if (pageWidth > 1439) {
    content.before(burgerMenu)
    body.style.cssText = `width: 1440px; display: grid; grid-template-columns: repeat(2, 1fr); grid-template-rows: 1fr; margin: 0 auto;`
    content.style.cssText = `width:1120px;  justify-content: center;`
    burgerMenu.style.cssText = `z-index: 0; box-shadow: none; height: 100vh;`
    window.addEventListener('resize', (e) => {
        if (innerWidth < 1440) {
            burgerMenu.style.display = 'none'
            body.style.cssText = `min-width: 100%; display: flex; flex-direction: row; margin: auto;`
            content.style.cssText = `width:100%;  justify-content: center;`
        } else if (innerWidth > 1439) {
            body.style.cssText = `width: 1440px; display: grid; grid-template-columns: repeat(2, 1fr); grid-template-rows: 1fr; margin: 0 auto;`
            content.style.cssText = `width:1120px; margin: 0 auto; justify-content: center;`
            burgerMenu.style.cssText = `z-index: 0; box-shadow: none; height: 100%;`
        }
    })
} else {
    burgerMenu.style.cssText = `z-index: 0; box-shadow: none; height: 100%;`
}
// end menu big screen formatter

// close/open "read-more" main text content
const btnShowMoreText = document.querySelector('.button__show-more-text'),
    cuttedText = document.querySelector('.cuttedText'),
    switcherContent = document.querySelector('.switcher-content')

switcherContent.style.display = 'none'

btnShowMoreText.addEventListener('click', () => {
    if (switcherContent.style.display === 'none') {
        cuttedText.style.cssText = `height: 270px;
        overflow: visible;`
        btnShowMoreText.innerHTML = `<button class="button__read-more button__show-more-text">
            <img class="image-expand img--rotate" src="./images/expand2.svg" alt="expand" title="expand" /><b>Cвернуть текст</b>
        </button>`
        switcherContent.style.display = 'block'
    } else if ((switcherContent.style.display = 'block')) {
        cuttedText.style.cssText = `height: 90px;
        overflow: hidden;`
        btnShowMoreText.innerHTML = `<button class="button__read-more button__show-more-text">
            <img class="image-expand img--rotate" src="./images/expand.svg" alt="expand" title="expand" /><b>Читать далее</b>
        </button>`
        switcherContent.style.display = 'none'
    }
})
// end close/open "read-more" main text content

// langs active
for (let i = 0; i < langItem.length; i++) {
    langItem[i].addEventListener('click', function () {
        let current = document.querySelectorAll('.lang-item--active')
        current[0].className = current[0].className.replace(' lang-item--active', '')
        this.className += ' lang-item--active'
    })
}
// end langs
