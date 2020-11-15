$ (function(){
    $('#homeSlider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        dots: true,
        arrows:false
       
    });
    $('.our-partner').slick({
        slidesToShow: 4,
        slidesToScroll: 2,
        
        arrows: true,
        responsive: [
   {
       breakpoint: 1024,
       settings: {
           slidesToShow: 3,
           slidesToScroll: 3,
           infinite: true,
           dots: true
       }
   },
   {
       breakpoint: 600,
       settings: {
           slidesToShow: 2,
           slidesToScroll: 2
       }
   },
   {
       breakpoint: 480,
       settings: {
           slidesToShow: 1,
           slidesToScroll: 1
       }
   }
   // You can unslick at a given breakpoint now by adding:
   // settings: "unslick"
   // instead of a settings object
        ]
    });


    $('.service-box').slick({
        slidesToShow: 4,
        slidesToScroll: 2,

        arrows: true,
        responsive: [
   {
       breakpoint: 1024,
       settings: {
           slidesToShow: 3,
           slidesToScroll: 3,
           infinite: true,
           dots: true
       }
   },
   {
       breakpoint: 600,
       settings: {
           slidesToShow: 2,
           slidesToScroll: 2
       }
   },
   {
       breakpoint: 480,
       settings: {
           slidesToShow: 1,
           slidesToScroll: 1
       }
   }
   // You can unslick at a given breakpoint now by adding:
   // settings: "unslick"
   // instead of a settings object
        ]
    });
})

$(function () {

    if ($('.counter').length > 0) {

        var $section = $('.counter');

        function counter() {

            $('.timer').countTo();
        }

        $(document).bind('scroll', function (ev) {
            var scrollOffset = $(document).scrollTop();
            var containerOffset = $section.offset().top - window.innerHeight;
            if (scrollOffset > containerOffset) {
                counter();
                $(document).unbind('scroll');
            }
        });
    }
    //Animation
    if ($('.wow').length) {
        new WOW().init();
    }
});