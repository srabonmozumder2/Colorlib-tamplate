 $('.hero-slider').owlCarousel({
    loop: true,
    autoplay:true,
    autoplayTimeout: 2000,
    responsiveClass:true,
    autoplayHoverPause:true,
    navSpeed:true,
    dots: false,
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

  $('.magnific-active').magnificPopup({
    type: 'image',
    delegate: 'a',
    gallery: {
        enabled: true
      },
  });


  $(".prve-icon").click(function(){
    $("index.html").show();
  });