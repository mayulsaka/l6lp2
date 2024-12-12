$('.visual').slick({
  dots: true,
  slidesToShow: 3,
  slidesToScroll:3,
  // autoplay: true,
  autoplay: false,
  autoplaySpeed: 5500,
  prevArrow: '<img src="/assets/image/arrow-left-circle.png" class="slide-arrow prev-arrow">',
  nextArrow: '<img src="/assets/image/arrow-right-circle.png" class="slide-arrow next-arrow">',
  responsive: [
    {
      // breakpoint: 600, // 399px以下のサイズに適用
      breakpoint: 767.9, 
      settings: {
        slidesToShow: 1,
        slidesToScroll:1,
      },
    },
  ],
 });


//  $(function () {
//   $('.visual').slick({
//     dots: true,
//     slidesToShow: 3,
//     slidesToScroll:3,
//     // autoplay: true,
//     autoplay: false,
//     autoplaySpeed: 5500,
//     prevArrow: '<img src="/assets/image/arrow-left-circle.png" class="slide-arrow prev-arrow">',
//     nextArrow: '<img src="/assets/image/arrow-right-circle.png" class="slide-arrow next-arrow">',
//     responsive: [
//       {
//         // breakpoint: 600, // 399px以下のサイズに適用
//         breakpoint: 767.9, 
//         settings: {
//           slidesToShow: 1,
//           slidesToScroll:1,
//           prevArrow: '<img src="/assets/image/arrow-left-circle_sp.png" class="slide-arrow prev-arrow">',
//           nextArrow: '<img src="/assets/image/arrow-right-circle_sp.png" class="slide-arrow next-arrow">',
//         },
//       },
//     ],
//    });
// });
