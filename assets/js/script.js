
//window scroll navbar fixed
$(window).scroll(function () {

    var scroll = $(window).scrollTop();

    if (scroll >= 200) {
        $(".navbar-scroll").addClass("fixed-top");

    } else {
        $(".navbar-scroll").removeClass("fixed-top");



    }
});

//counter
var count = $('.counter');
count.counterUp({
    delay: 10,
    time: 1000
});
//animation aos
function aos_init() {
    AOS.init({
        duration: 1000,
        easing: 'ease-in-out',
        once: true,
        mirror: false
    });
}
window.addEventListener('load', () => {
    aos_init();
});

// banner slider 

$(document).ready(function () {
    //initialize swiper when document ready
    var mySwiper = new Swiper('.swiper-container', {
        loop: true,
        spaceBetween: 50,
        speed: 1000,

        effect: 'creative',
        creativeEffect: {
            prev: {
              shadow: true,
              translate: ["-20%", 0, -1],
            },
            next: {
              translate: ["100%", 0, 0],
            },
          },
          
       
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: 'true'
        },
        breakpoints: {
            "@0.00": {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            "@0.75": {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            "@1.00": {
              slidesPerView: 1,
              spaceBetween: 40,
            },
            "@1.50": {
              slidesPerView: 1,
              spaceBetween: 50,
            },
          },
    })

});




// service slider 
$('.service-items-box .owl-carousel').owlCarousel({
    loop: true,
    margin: 20,
    autoplay: true,
    smartSpeed: 1000,
    nav: false,
    responsiveClass: true,
    responsive: {
        0: {
            items: 1,
            dots: false,
        },
        576: {
            items: 1,
            dots: false,
        },
        600: {
            items: 2,
            dots: false,

        },
        768:{
            items: 2,
            dots: false,
        },
        1000: {
            items: 3,
        },
        1200: {
            items: 4,
        }
    }
})