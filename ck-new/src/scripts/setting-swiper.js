
import Swiper from 'swiper/bundle';

new Swiper('.slider__article', {
    direction: 'horizontal',
    slidesPerView: 4,
    stopOnLastSlide: false,
    spaceBetween: 20,
    loop: true,
    // setWrapperSize: true,
    // effect: "cube",
    // wathOverFlow: true,
    // slidesOffsetBefore: 40,
    // slidesOffsetAfter: 40,
    // centeredSlides: true,

    navigation: {
        nextEl: '.article-button-next',
        prevEl: '.article-button-prev',
        // disabledClass: 'article-button-disabled',
    },
    breakpoints: {
        300: {
            slidesPerView: 1.2,
        },
        420: {
            slidesPerView: 1.5,
        },
        660: {
            slidesPerView: 2.5,
        },
        1240: {
            slidesPerView: 3,
        },
        1366: {
            slidesPerView: 3,
        },
        1367: {
            slidesPerView: 4,
        }
    },

})

new Swiper('.slider__sale', {
    direction: 'horizontal',
    slidesPerView: 1,
    stopOnLastSlide: true,
    spaceBetween: 20,
    setWrapperSize: true,
    // effect: "cube",
    // wathOverFlow: true,
    // slidesOffsetBefore: 40,
    // slidesOffsetAfter: 40,
    // centeredSlides: true,
    autoHeight: true,
    navigation: {
        nextEl: '.article-button-next',
        prevEl: '.article-button-prev',
        disabledClass: 'article-button-disabled',
    },
    breakpoints: {
        300: {
            autoHeight: true,
        },

        1240: {
            autoHeight: false,
        },
    },

})

new Swiper('.swiper-home', {
    direction: 'horizontal',
    slidesPerView: 1.3,
    stopOnLastSlide: true,
    spaceBetween: 20,
    setWrapperSize: true,

    // effect: "cube",
    // если слайдов больше чем нужно
    wathOverFlow: true,
    slidesOffsetBefore: 40,
    slidesOffsetAfter: 40,
    // centeredSlides:true,


    navigation: {
        nextEl: '.button__ridth',
        prevEl: '.button__left',
        disabledClass: 'swiper-button-disabled',
    },
    breakpoints: {
        300: {
            slidesOffsetBefore: 20,
            slidesOffsetAfter: 20,
        },
        400: {

            slidesOffsetBefore: 40,
            slidesOffsetAfter: 40,
        },
        645: {
            slidesPerView: 1,
            slidesOffsetBefore: 0,
            slidesOffsetAfter: 0,
        }
    },

})


new Swiper('.swiper-advertising', {
    direction: 'horizontal',
    slidesPerView: 1.3,
    stopOnLastSlide: true,
    spaceBetween: 20,
    setWrapperSize: true,

    // effect: "cube",
    // если слайдов больше чем нужно
    wathOverFlow: true,
    slidesOffsetBefore: 40,
    slidesOffsetAfter: 40,
    // centeredSlides:true,


    navigation: {
        nextEl: '.navigation-slid__ridth',
        prevEl: '.navigation-slid__left',
        disabledClass: 'swiper-button-disabled',
    },
    breakpoints: {
        300: {
            slidesOffsetBefore: 20,
            slidesOffsetAfter: 20,
        },
        400: {

            slidesOffsetBefore: 40,
            slidesOffsetAfter: 40,
        },
        645: {
            slidesPerView: 1,
            slidesOffsetBefore: 0,
            slidesOffsetAfter: 0,
        }
    },

})


