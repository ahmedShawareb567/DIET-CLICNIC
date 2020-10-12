'use strict';
/*START ANIMATED HOVER MENU*/
let anMenu = document.getElementById('anMenu'),
    pageY,
    chx,
    changeEl = 0;

    chx = anMenu.clientHeight;

window.addEventListener('scroll', () => {
    pageY = window.pageYOffset;
    if (pageY > chx) {
        anMenu.classList.add('chang-Details');
        if (changeEl > pageY) {
            anMenu.classList.remove('menu-active');
        }else {
            anMenu.classList.add('menu-active');
        }
        changeEl = pageY;
    } else {
        anMenu.classList.remove('chang-Details');
    }
});
/*END ANIMATED HOVER MENU*/
/*START HAMBURGER BUTTON IN TOP MENU*/
jQuery(function($){
    $('.navbar-toggler').on({
        'click': function (){
            $(this).toggleClass('hamburger-active');
        }
    });

    /*START*/
    $('#owl-two').owlCarousel({
        autoplay: true,
        loop: true,
        margin:10,
        responsiveClass:true,
        items: 1,
        nav: true,
        navText: ['<i class="icon icon-left-open-mini"></i>','<i class="icon icon-right-open-mini"></i>'],
        dots: false
    });
    $('#owl-first').owlCarousel({
        loop:true,
        autoplay: true,
        margin:10,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
            },
            600:{
                items:2,
            },
            1000:{
                items:3,
            }
        },
        items: 3,
        dots: false
    });
    $('#owl-third').owlCarousel({
        loop:true,
        autoplay: true,
        margin:10,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
            },
            600:{
                items:2,
            },
            1000:{
                items:3,
            }
        },
        items: 3,
        nav: true,
        navText: ['<i class="icon icon-left-open-mini"></i>','<i class="icon icon-right-open-mini"></i>'],
        dots: false
    });
    /*ENDING*/
});
/*END*/
/*START WOW JS*/
let wow = new WOW(
    {
      animateClass: 'animated',
      offset:       100,
    }
  );
  wow.init();
  /*ENDING*/