const leftArrow = document.querySelector('.carousel__left-arrow')
const rightArrow = document.querySelector('.carousel__right-arrow')
const carouselSlider = document.querySelector('.carousel__slider')
const slide = document.querySelector('.carousel__element')
const slideWidth = slide.offsetWidth

let currentIndex = 0


leftArrow.addEventListener('click', () => {
    currentIndex-=1
    carouselSlider.style.transform = `translateX(${currentIndex * slideWidth}px)`
})

rightArrow.addEventListener('click', () => {
    currentIndex+=1
    carouselSlider.style.transform = `translateX(-${currentIndex * slideWidth}px)`
})