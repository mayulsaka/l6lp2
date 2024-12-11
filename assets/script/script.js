$('.visual').slick({
  dots: true,
  slidesToShow: 3,
  slidesToScroll:3,
  // autoplay: true,
  autoplay: false,
  autoplaySpeed: 5500,
  responsive: [
    {
      breakpoint: 600, // 399px以下のサイズに適用
      settings: {
        slidesToShow: 1,
        slidesToScroll:1,
      },
    },
  ],
 });
