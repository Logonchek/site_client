var mySwiper = new Swiper(".swiper-container", {
    speed: 500,
    spaceBetween: 20,
    slidesPerView: 'auto',
    simulateTouch: true,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
    slidesOffsetBefore: 0,
    slidesOffsetAfter: 0,
    roundLengths: true,
    paginationClickable: true,
    freeMode: true,

    navigation: {
        nextEl: ".navigation-slid__ridth",
        prevEl: ".navigation-slid__left",
        disabledClass: "swiper-button-none",
    },
    breakpoints: {
        300: {
            slidesPerView: 1.3,
            spaceBetween: 20,
            slidesOffsetBefore: 0,
            slidesOffsetAfter: 20,

        },
        630: {
            slidesPerView: 2.5,
            spaceBetween: 20,
            slidesOffsetBefore: 0,
            slidesOffsetAfter: 30,

        },
        878: {
            slidesPerView: 3.5,
            spaceBetween: 20,
            slidesOffsetBefore: 0,
            slidesOffsetAfter: 30,

        },
        1024: {
            slidesPerView: 'auto',
            spaceBetween: 20,
            slidesOffsetBefore: 0,
            slidesOffsetAfter: 30,
        },
        1328: {
            slidesPerView: 'auto',
            slidesOffsetBefore: 0,
            slidesOffsetAfter: 0,
        },
        1920: {
            slidesPerView: 'auto',
            slidesOffsetBefore: 0,
            slidesOffsetAfter: 0,
        },
    },
});

//slider

const slid = document.querySelectorAll('.efficiency-slider__slid')
const dots = document.querySelectorAll('.efficiency-slider_dots__item')
const button = document.querySelector('.efficiency-slider-toolbar')
const buttonPrev = document.querySelector('.efficiency-slider-toolbarPrev')


index = 0;

const activeDot = n => {
    for (const dot of dots) {
        dot.classList.remove('activ-dots');
    }
    dots[n].classList.add('activ-dots');
}

const activeSlide = n => {
    for (const slide of slid) {
        slide.classList.remove('activ');
    }
    slid[n].classList.add('activ');
}

function nextOn() {
    if (index == slid.length - 1) {
        index = 0
        currentIndex(index)
    } else {
        index++
        currentIndex(index)
    }
    animan()
}

function prevOn() {
    if (index == 0) {
        index = img.length - 1
        currentIndex(index)
    } else {
        index--
        currentIndex(index)
    }
}

function currentIndex(i) {
    activeSlide(i)
    activeDot(i)
    animan()
}

dots.forEach((item, indexRadio) => {
    item.addEventListener('click', () => {
        index = indexRadio;
        currentIndex(index)
    })
})

button.addEventListener('click', nextOn)
buttonPrev.addEventListener('click', nextOn)

// animation slider

function animan() {
    let keyframes = [
        { opacity: 0.5 },
        { opacity: 1 },
    ]
    let options = {
        duration: 100,
        iterations: 1,
    }
    document.querySelector('.efficiency-slider-coll').animate(keyframes, options);
}