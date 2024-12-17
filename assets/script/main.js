 //-----------------------------------------------------
//  ここから スライダー
//-----------------------------------------------------

  $('.visual').slick({
    dots: true,
    slidesToShow: 3,
    slidesToScroll:3,
    // autoplay: true,
    autoplay: false,
    autoplaySpeed: 5500,
    prevArrow: '<img src="/assets/image/arrow-left-circle.svg" class="slide-arrow prev-arrow">',
    nextArrow: '<img src="/assets/image/arrow-right-circle.svg" class="slide-arrow next-arrow">',
    responsive: [
      {
        // breakpoint: 600, // 399px以下のサイズに適用
        breakpoint: 767.9, 
        settings: {
          slidesToShow: 1,
          slidesToScroll:1,
          prevArrow: '<img src="/assets/image/arrow-left-circle_sp.svg" class="slide-arrow prev-arrow sp">',
          nextArrow: '<img src="/assets/image/arrow-right-circle_sp.svg" class="slide-arrow next-arrow sp">',
        },
      }, 
      {
        // breakpoint: 600, // 399px以下のサイズに適用
        breakpoint: 1200, 
        settings: {
          slidesToShow: 2,
          slidesToScroll:2,
          prevArrow: '<img src="/assets/image/arrow-left-circle.svg" class="slide-arrow prev-arrow sp">',
          nextArrow: '<img src="/assets/image/arrow-right-circle.svg" class="slide-arrow next-arrow sp">',
        },
      }, 
    ],
   });


//-----------------------------------------------------
//  ここから TOPへ戻るボタン
//-----------------------------------------------------

// DOMが完全に読み込まれた後に実行する
$(document).ready(function () {
    // 'back-to-top'ボタンの要素を取得
    const backToTopButton = $('#back-to-top');
    // ボタンを表示するスクロール量を設定
    // const scrollThreshold = 200;
    const scrollThreshold = 500;
    // スクロールイベントを監視
    $(window).on('scroll', function () {
        // 現在のスクロール位置がしきい値を超えた場合
        if ($(window).scrollTop() > scrollThreshold) {
            // 'show'クラスを追加してボタンを表示
            backToTopButton.addClass('show');
        } else {
            // 'show'クラスを削除してボタンを非表示
            backToTopButton.removeClass('show');
        }
    });
    // 'back-to-top'ボタンがクリックされたときの処理
    backToTopButton.on('click', function () {
        // ページをスムーズにトップへスクロール
        $('html, body').animate({ scrollTop: 0 }, 'slow');
    });
});
