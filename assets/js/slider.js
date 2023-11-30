const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    // And if we need scrollbar
    scrollbar: {
        el: '.swiper-scrollbar',
        draggable: false,
    },
})

const btnShowMore = document.querySelector('.button__show-more'),
    btnCloseMore = document.querySelector('.button__close-more'),
    sliderBigScreen = document.querySelector('.slider-big-screen'),
    hideTablet = document.querySelectorAll('.hide-tablet');

hideTablet.forEach((elem) => {
    elem.style.cssText = `display: none;`
})

btnCloseMore.style.cssText = `display: none;`

btnShowMore.addEventListener('click', (e) => {
    if (e.currentTarget === btnShowMore) {
        sliderBigScreen.style.cssText = `height: 100%;`
        btnShowMore.style.cssText = `display: none;`
        btnCloseMore.style.cssText = `display: flex;`

        hideTablet.forEach((elem) => {
            elem.style.cssText = `display: block;`
        })
    }
})

btnCloseMore.addEventListener('click', (e) => {
    if (e.currentTarget === btnCloseMore) {
        sliderBigScreen.style.cssText = `max-height: 322px;`
        btnCloseMore.style.cssText = `display: none;`
        btnShowMore.style.cssText = `display: flex;`

        hideTablet.forEach((elem) => {
            elem.style.cssText = `display: none;`
        })
    }
})
