////////////////////////////// MAIN NAV //////////////////////////////

const menuButton = document.querySelector('.nav-main__button')
const openMenuIcon = document.querySelector('.nav-main__open-menu-icon')
const closeMenuIcon = document.querySelector('.nav-main__close-menu-icon')
const linksList = document.querySelector('.nav-main__links-list')
const mainNav = document.querySelector('.header__nav-main')
const logo = document.querySelector('.nav-main__logo-responsive')

menuButton.addEventListener('click', () => {
    linksList.classList.toggle('visible')
    openMenuIcon.classList.toggle('visible')
    closeMenuIcon.classList.toggle('visible')
    mainNav.classList.toggle('header__nav-main--menuisopen')
    logo.classList.toggle('nav-main__logo-responsive--menuisopen')
})
















////////////////////////////// CAROUSEL //////////////////////////////

const leftArrow = document.querySelector('.carousel__left-arrow')
const rightArrow = document.querySelector('.carousel__right-arrow')
const carouselSlider = document.querySelector('.carousel__slider')
const slides = document.querySelectorAll('.carousel__element')
const slide = document.querySelector('.carousel__element')
const slideWidth = slide.offsetWidth

let currentIndex = 0

leftArrow.addEventListener('click', () => {
    if (currentIndex>0) {
        currentIndex--
        carouselSlider.style.transform = `translateX(-${currentIndex * slideWidth}px)`
    }
})

rightArrow.addEventListener('click', () => {
    currentIndex++
    if (currentIndex>=0 && currentIndex<slides.length) {
        carouselSlider.style.transform = `translateX(-${currentIndex * slideWidth}px)`
    }
    else {
        carouselSlider.style.transform = `translateX(0)`
        currentIndex = 0
    }
})
