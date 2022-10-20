
var mySwiper = new Swiper('.swiper-container', {
    direction: 'horizontal',
    slidesPerView: 1.3,
    stopOnLastSlide : true,
    spaceBetween: 20,
    setWrapperSize:true,

    // effect: "cube",
    // если слайдов больше чем нужно
    wathOverFlow: true,
    slidesOffsetBefore: 40,
    slidesOffsetAfter: 40,
    // centeredSlides:true,
   

    navigation: {
      nextEl: '.button__ridth',
      prevEl: '.button__left',
      disabledClass:'swiper-button-disabled',
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


// const button__left = document.getElementById("button__left");
// const button__ridth = document.getElementById("button__ridth");
// const slideWrapper = document.getElementById('sliderCase_js');
// const slides = document.getElementsByClassName("help__case");



// index = 0;
// button__left.style.background = '#B3DDF3'
// button__ridth.style.background = '#028DD8'

// const activeSlide = n => {
//     console.log(n);
//     for (slide of slides) {
//         slide.classList.remove('activ');
//     }
//     slides[n].classList.add('activ')

//     if(slides[n] == slides[0]){
//         button__left.style.background = '#B3DDF3'
        
//     }
//      else if(slides[n] == slides[slides.length-1]){
//         button__ridth.style.background = '#B3DDF3'
  
//     }
// }


// const nextSlide = () => {
// if (index==slides.length-1) {
    
//     index = slides.length-1 ;
    
//     activeSlide(index)
// } else {
//     index++;
//     activeSlide(index)
//     button__left.style.background = '#028DD8'
    
// }
// }

// const prevSlide = () => {
//     if (index == 0) {
//         index = 0;
//         activeSlide(index)
//         button__ridth.style.background = '#028DD8'
        
//     }  else {
//         index--;
//         activeSlide(index)
//         button__ridth.style.background = '#028DD8'
//     }
//     }


// button__ridth.addEventListener('click', nextSlide );
// button__left.addEventListener('click', prevSlide );




// // for mobail

// let myElement = document.getElementById('help__columns_js');
// let mc = new Hammer(help__columns_js);
// mc.on("swipeleft", function(ev) {
//     nextSlide();

// });
// mc.on("swiperight", function(ev) {
//     prevSlide();
// });


// // общие
// for (let index = 0; index < slides.length; index++) {
//     slides[index].ondragstart = prohibit; //запрещаем перетаскивание
// }
// button__ridth.onselectstart = prohibit; //запрещаем выделение
// // document.oncontextmenu = prohibit; //запрещаем клик правой кнопкой
// button__left.onselectstart = prohibit;
// function prohibit() {
//     return false; //предотвращает все эти события
// }


// // hint

// let attsr = $('#hint__close').attr('data-hint');
// if (localStorage.getItem(attsr) !== null) {
//     let clo = localStorage.getItem(attsr)
//     let hintClose = $('.hint').css({'display': 'none'})
// }

// let ff = $('#hint__close').on('click',  function fff() {
//   let hintClose = $('.hint').css({'display': 'none'});
 
//   localStorage.setItem(attsr, 'closeHint');
  
// })















