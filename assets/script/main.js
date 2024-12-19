 //-----------------------------------------------------
//  ここから スライダー
//-----------------------------------------------------

  $('.visual').slick({
    dots: true,
    slidesToShow: 3,
    slidesToScroll:3,
    autoplay: false,
    autoplaySpeed: 5500,
    prevArrow: '<img src="/assets/image/arrow_left_circle.svg" class="slide-arrow prev-arrow">',
    nextArrow: '<img src="/assets/image/arrow_right_circle.svg" class="slide-arrow next-arrow">',
    responsive: [
      {
        breakpoint: 767.9, 
        settings: {
          slidesToShow: 1,
          slidesToScroll:1,
          prevArrow: '<img src="/assets/image/arrow_left_circle_sp.svg" class="slide-arrow prev-arrow sp">',
          nextArrow: '<img src="/assets/image/arrow_right_circle_sp.svg" class="slide-arrow next-arrow sp">',
        },
      }, 
      {
        breakpoint: 1200, 
        settings: {
          slidesToShow: 2,
          slidesToScroll:2,
          prevArrow: '<img src="/assets/image/arrow_left_circle.svg" class="slide-arrow prev-arrow sp">',
          nextArrow: '<img src="/assets/image/arrow_right_circle.svg" class="slide-arrow next-arrow sp">',
        },
      }, 
    ],
   });


//-----------------------------------------------------
//  ここから TOPへ戻るボタン
//-----------------------------------------------------

$(document).ready(function () {
    const backToTopButton = $('#back-to-top');
    const scrollThreshold = 500;
    $(window).on('scroll', function () {
        if ($(window).scrollTop() > scrollThreshold) {
            backToTopButton.addClass('show');
        } else {
            backToTopButton.removeClass('show');
        }
    });
    backToTopButton.on('click', function () {
        $('html, body').animate({ scrollTop: 0 }, 'slow');
    });
});
