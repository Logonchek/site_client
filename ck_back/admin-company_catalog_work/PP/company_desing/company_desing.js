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


