let pageWidth = document.documentElement.scrollWidth

const swiper = new Swiper('.swiper', {
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
    },
})

const resizeWidth = () => {
    swiper.hostEl.classList.replace('swiper', 'tablet-screen')
    swiper.slides.forEach((elem) => elem.classList.replace('swiper-slide', 'slider-list__item'))
    swiper.wrapperEl.classList.replace('swiper-wrapper', 'slider-list')
}

if (pageWidth > 768) {
    resizeWidth()
}
window.addEventListener('resize', (e) => {
    if (innerWidth > 768) {
        resizeWidth()
    }
})

const btnShowMore = document.querySelector('.button__show-more'),
    hideTablet = document.querySelectorAll('.hide-tablet')

hideTablet.forEach((elem) => {
    elem.style.cssText = `display: none;`
})

const showSliderContent = () => {
    hideTablet.forEach((elem) => {
        if (elem.style.display === 'none') {
            elem.style.display = 'block'
            btnShowMore.innerHTML = `<button class="button__read-more button__show-more slider-button--position"><img class="image-expand" src="./assets/icons/expand2.svg" alt="expand" title="expand" /><b>Скрыть все</b></button>`
        } else if ((elem.style.display = 'block')) {
            elem.style.display = 'none'
            btnShowMore.innerHTML = `<button class="button__read-more button__show-more slider-button--position"><img class="image-expand" src="./assets/icons/expand.svg" alt="expand" title="expand" /><b>Показать все</b></button>`
        }
    })
}

btnShowMore.addEventListener('click', showSliderContent)
