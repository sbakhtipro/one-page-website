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
