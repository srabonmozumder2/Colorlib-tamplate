$(window).scroll(function() {    
    var scroll = $(window).scrollTop();

    if (scroll >= 100) {
        $('.site-navigation').addClass("active")
    } else {
        $('.site-navigation').removeClass("active")
    };
});

$(document).ready(function(){
    $("button.icon i").click(function(){
      $(".mobile-responsive").addClass("show");
    });

    $(".close-bar a").click(function(){
        $(".mobile-responsive").removeClass("show");
      });
  });

  $('.hero-slider').owlCarousel({
    loop: true,
    autoplay:true,
    autoplayTimeout: 2000,
    responsiveClass:true,
    // autoplayHoverPause:true,
    navSpeed:true,
    dots: true,
    // navText : ["<div><img src='img/person_4.jpg.webp'</div>", "<div><img src='img/person_4.jpg.webp'></div> "],
    // navText: ["<div><img src='img/person_3.jpg.webp'></div>", "<div><img src='img/person_3.jpg.webp'</div>"],
    // navText:["<div><img src='img/person_3.jpg.webp'</div>", "<div><img src='img/person_3.jpg.webp'</div>"],
    // navText: [".owl-nav div{ background-image= url(/img/person_3.jpg.webp); }"],
    // navText: ["<div></div>", "<div></div>"],
    navText: ["<div><i class='fa fa-arrow-left'></i></div>" , "<div><i class='fa fa-arrow-right'></i></div>"],
    responsive:{
        0:{
            items:1,
            nav:true
        },
        600:{
            items:1,
            nav:true
        },
        1000:{
            items:1,
            nav:true,
        }
    }
  });

  $('.product-slider').owlCarousel({
    loop:true,
    center:true,
    autoplay:true,
    autoplayTimeout: 1000,
    // autoplayHoverPause:true,
    navSpeed:true,
    responsive:{
        0:{
            items:1,
            nav:false
        },
        600:{
            items:1,
            nav:false
        },
        1000:{
            items:3,
        }
    }
});
$(".my-dropdown").click(function(){
    console.log($(this).children('ul'))
    let dropdLink = $(this).children('ul');
    $(dropdLink).slideToggle(300);
//    $(".inner").click(function(){
//     $(".main").slideToggle(300);
//    });
   });



   $('.counter-testing').counterUp({
    delay: 5,
    time: 2000
});