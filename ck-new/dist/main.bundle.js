(()=>{var e,t={10:(e,t,r)=>{"use strict";r(755),r(737);var s=r(250);new s.Z(".slider__article",{direction:"horizontal",slidesPerView:4,stopOnLastSlide:!1,spaceBetween:20,loop:!0,navigation:{nextEl:".article-button-next",prevEl:".article-button-prev"},breakpoints:{300:{slidesPerView:1.2},420:{slidesPerView:1.5},660:{slidesPerView:2.5},1240:{slidesPerView:3},1366:{slidesPerView:3},1367:{slidesPerView:4}}}),new s.Z(".slider__sale",{direction:"horizontal",slidesPerView:1,stopOnLastSlide:!0,spaceBetween:20,setWrapperSize:!0,autoHeight:!0,navigation:{nextEl:".article-button-next",prevEl:".article-button-prev",disabledClass:"article-button-disabled"},breakpoints:{300:{autoHeight:!0},1240:{autoHeight:!1}}}),new s.Z(".swiper-home",{direction:"horizontal",slidesPerView:1.3,stopOnLastSlide:!0,spaceBetween:20,setWrapperSize:!0,wathOverFlow:!0,slidesOffsetBefore:40,slidesOffsetAfter:40,navigation:{nextEl:".button__ridth",prevEl:".button__left",disabledClass:"swiper-button-disabled"},breakpoints:{300:{slidesOffsetBefore:20,slidesOffsetAfter:20},400:{slidesOffsetBefore:40,slidesOffsetAfter:40},645:{slidesPerView:1,slidesOffsetBefore:0,slidesOffsetAfter:0}}}),new s.Z(".swiper-advertising",{direction:"horizontal",slidesPerView:1.3,stopOnLastSlide:!0,spaceBetween:20,setWrapperSize:!0,wathOverFlow:!0,slidesOffsetBefore:40,slidesOffsetAfter:40,navigation:{nextEl:".navigation-slid__ridth",prevEl:".navigation-slid__left",disabledClass:"swiper-button-disabled"},breakpoints:{300:{slidesOffsetBefore:20,slidesOffsetAfter:20},400:{slidesOffsetBefore:40,slidesOffsetAfter:40},645:{slidesPerView:1,slidesOffsetBefore:0,slidesOffsetAfter:0}}}),r(754),r(313),r(121),r(602),r(224)},737:()=>{window.MeTalkSetup={domain:"comkc.pulscen.ru"},function(e,t,r){window.supportAPIMethod=r;var s=e.createElement("script");s.type="text/javascript",s.id="supportScript",s.charset="utf-8",s.async=!0,s.src="//me-talk.ru/support/support.js?h=9e71060b780fc267cbbfff6f8dec56ba";var i=e.getElementsByTagName("script")[0];t[r]=t[r]||function(){(t[r].q=t[r].q||[]).push(arguments)},i?i.parentNode.insertBefore(s,i):e.documentElement.firstChild.appendChild(s)}(document,window,"MeTalk")},754:()=>{window.addEventListener("mouseover",(function(e){for(var t=e.target.getAttribute("rel"),r=document.querySelectorAll(".block__hiddenScript"),s=0;s<r.length;s++){var i=r[s].getAttribute("rel-hidden"),n=r[s];t==i&&(n.style.display="grid")}})),window.addEventListener("mouseout",(function(e){for(var t=document.querySelectorAll(".block__hiddenScript"),r=0;r<t.length;r++)t[r].style.display="none"}))},313:()=>{var e=document.querySelector(".js-body"),t=document.querySelectorAll(".modal-wrapper-block");e.addEventListener("click",(function(r){var s,i=r.target.getAttribute("rel"),n=r.target.parentNode.getAttribute("rel");s=null!=i?i:n,t.forEach((function(t){if(attrPopup=t.getAttribute("data-popup"),attrPopup==s){t.classList.add("modal-block-show"),e.style.overflow="hidden",t.addEventListener("click",(function(r){(r.target.classList.contains("modal-wrapper-block")||r.target.classList.contains("modal-close"))&&(t.classList.remove("modal-block-show"),t.children[0].classList.remove("modal-block-height"),e.style.overflow="auto")})),document.addEventListener("keydown",(function(r){"27"==r.keyCode&&(t.classList.remove("modal-block-show"),e.style.overflow="auto")}));var r=document.documentElement.clientHeight;t.children[0].clientHeight>r&&(t.children[0].classList.add("modal-block-height"),t.style.overflow="auto")}}))}))},602:()=>{function e(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,s=new Array(t);r<t;r++)s[r]=e[r];return s}var t,r=function(t,r){var s="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!s){if(Array.isArray(t)||(s=function(t,r){if(t){if("string"==typeof t)return e(t,r);var s=Object.prototype.toString.call(t).slice(8,-1);return"Object"===s&&t.constructor&&(s=t.constructor.name),"Map"===s||"Set"===s?Array.from(t):"Arguments"===s||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(s)?e(t,r):void 0}}(t))){s&&(t=s);var i=0,n=function(){};return{s:n,n:function(){return i>=t.length?{done:!0}:{done:!1,value:t[i++]}},e:function(e){throw e},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,l=!0,a=!1;return{s:function(){s=s.call(t)},n:function(){var e=s.next();return l=e.done,e},e:function(e){a=!0,o=e},f:function(){try{l||null==s.return||s.return()}finally{if(a)throw o}}}}(document.querySelectorAll('a[href*="#"]'));try{var s=function(){var e=t.value;e.addEventListener("click",(function(t){t.preventDefault();var r=e.getAttribute("href").substring(1);if(!r)return!1;document.getElementById(r).scrollIntoView({behavior:"smooth",block:"start"})}))};for(r.s();!(t=r.n()).done;)s()}catch(e){r.e(e)}finally{r.f()}},224:()=>{var e=document.querySelector(".name__star"),t=document.querySelector(".package").innerHTML;"Платиновый"==t?e.src="https://www.pulscen.ru/system/ckeditor_assets/pictures/283264/content_zvezdy.png":"Серебряный"==t?e.src="https://www.pulscen.ru/system/ckeditor_assets/pictures/283013/content_zvezdy.png":"Золотой"==t||"Золотой"==t?e.src="https://www.pulscen.ru/system/ckeditor_assets/pictures/283014/content_zvezdy2.png":"Платиновый +"==t&&(e.src="https://www.pulscen.ru/system/ckeditor_assets/pictures/281862/content_zvezdy.png")},121:()=>{var e=document.getElementById("efficiency"),t=document.querySelectorAll(".switch-js"),r=document.querySelectorAll(".block-switch");e.addEventListener("click",(function(e){var s=e.target.getAttribute("switch");t.forEach((function(t){var r=t.getAttribute("switchy");t.classList.remove("switch-js-block"),r==s&&(t.classList.toggle("switch-js-block"),blockID=e.target.getAttribute("href").slice(1),document.getElementById(blockID).scrollIntoView({behavior:"smooth",block:"start"}))})),r.forEach((function(t){var r=t.getAttribute("switchy");t.classList.remove("block-disable"),r==s&&(e.target.setAttribute("disabled","disabled"),t.classList.add("block-disable"),e.target.disabled=!0)}))}))}},r={};function s(e){var i=r[e];if(void 0!==i)return i.exports;var n=r[e]={exports:{}};return t[e].call(n.exports,n,n.exports,s),n.exports}s.m=t,e=[],s.O=(t,r,i,n)=>{if(!r){var o=1/0;for(d=0;d<e.length;d++){for(var[r,i,n]=e[d],l=!0,a=0;a<r.length;a++)(!1&n||o>=n)&&Object.keys(s.O).every((e=>s.O[e](r[a])))?r.splice(a--,1):(l=!1,n<o&&(o=n));if(l){e.splice(d--,1);var c=i();void 0!==c&&(t=c)}}return t}n=n||0;for(var d=e.length;d>0&&e[d-1][2]>n;d--)e[d]=e[d-1];e[d]=[r,i,n]},s.d=(e,t)=>{for(var r in t)s.o(t,r)&&!s.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},s.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={179:0};s.O.j=t=>0===e[t];var t=(t,r)=>{var i,n,[o,l,a]=r,c=0;if(o.some((t=>0!==e[t]))){for(i in l)s.o(l,i)&&(s.m[i]=l[i]);if(a)var d=a(s)}for(t&&t(r);c<o.length;c++)n=o[c],s.o(e,n)&&e[n]&&e[n][0](),e[o[c]]=0;return s.O(d)},r=self.webpackChunkreact_start=self.webpackChunkreact_start||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})();var i=s.O(void 0,[833],(()=>s(10)));i=s.O(i)})();
//# sourceMappingURL=main.bundle.js.map