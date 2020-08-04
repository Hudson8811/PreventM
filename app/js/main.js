$('.articles__slider').slick({
  dots: false,
  infinite: false,
  speed: 300,
  prevArrow: '<div class="slider-arrow slider-arrow--prev"><svg class="slider-arrow__icon slider-arrow__icon--prev"><use xlink:href="images/sprite.svg#icon-Chevron-down"></use></svg></div>',
  nextArrow: '<div class="slider-arrow slider-arrow--next"><svg class="slider-arrow__icon slider-arrow__icon--next"><use xlink:href="images/sprite.svg#icon-Chevron-down"></use></svg></div>',
  slidesToShow: 3,
  slidesToScroll: 3,
  responsive: [{
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true,
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
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
$(".numbox").mask("+7 (999) 999-99-99");

$(function () {
  $('a.scroll-link[href^="#"]').on('click', function (event) {
    // отменяем стандартное действие
    event.preventDefault();

    var sc = $(this).attr("href"),
      dn = $(sc).offset().top;
    /*
     * sc - в переменную заносим информацию о том, к какому блоку надо перейти
     * dn - определяем положение блока на странице
     */

    $('html, body').animate({
      scrollTop: dn
    }, 1000);

    /*
     * 1000 скорость перехода в миллисекундах
     */
  });
});



var galleryThumbs = new Swiper('.swiper-nav .swiper-container', {

  slidesPerView: 4,
  freeMode: true,
  direction: 'vertical',

  breakpoints: {
    320: {

      spaceBetween: 10,
    },
    640: {

      spaceBetween: 20,
    },

    768: {
      spaceBetween: 24,

    },
  },


});

$(".swiper-nav__img").length;

$(".swiper-nav__button").text(($(".swiper-nav__img").length - 4));

$(".swiper-nav__button").click(function () {
  galleryThumbs.slideTo($(".swiper-nav__img").length, 300);
  galleryTop.slideTo($(".swiper-nav__img").length, 300);
});
$(".header__burger").click(function () {
  $(".main-menu").toggleClass("js-active");
  $("body").toggleClass("js-active");
});
$(".main-menu__close").click(function () {
  $(".main-menu").toggleClass("js-active");
  $("body").toggleClass("js-active");
});


var galleryTop = new Swiper('.gallery', {
  spaceBetween: 10,

  thumbs: {
    swiper: galleryThumbs
  }
});


AOS.init({
  once: true,
});


$(document).ready(function () {
  $('.js-priceit-info__btn').click(function () {
    var parent = $(this).parent();
    if ($(this).siblings('.priceit-info_list').is(':visible')) {
      $(this).siblings('.priceit-info_list').stop(true, true).slideUp(300);
      parent.removeClass('priceit-info--is-open');
    } else {
      $(this).siblings('.priceit-info_list').stop(true, true).slideDown(300);
      parent.addClass('priceit-info--is-open');
    }
  });





  /* $('.js-mcquiz-prev-btn').click(function(){
     $('#modal-care-quiz .mcquiz-questions').slick("slickPrev");
   });*/
  //


  function mcquizInitSlick() {
    function setProgress(index) {
      const calc = ((index + 1) / ($slider.slick('getSlick').slideCount)) * 100;

      $progressBar
        .css('width', `${calc}%`)
        .attr('aria-valuenow', calc);

      $progressBarLabel.text(`${calc.toFixed(0)}%`);
    }

    const $slider = $('#modal-care-quiz .mcquiz-questions');
    const $progressBar = $('#mcquiz-pb-finished');
    const $progressBarLabel = $('#mcquiz-pb-label');

    $slider.on('beforeChange', function (event, slick, currentSlide, nextSlide) {
      setProgress(nextSlide);
    });


    $('#modal-care-quiz .mcquiz-questions').slick({
      fade: true,
      infinite: false,
      arrows: false,
      arrows: true,
      prevArrow: $('#modal-care-quiz .js-mcquiz-prev-btn'),
      nextArrow: '<div></div>'
    });

    setProgress(0);
  }

  /*
    $('.js-mcquiz-next').click(function () {
      $('#modal-care-quiz .mcquiz-questions').slick("slickNext");
    });

    $('.js-mcquiz-close').click(function () {
      $.arcticmodal('close');
    });*/


  var wpcf7Elm = document.querySelector( '.wpcf7' );
  if(wpcf7Elm){
  wpcf7Elm.addEventListener( 'wpcf7submit', function( event ) {
    window.location.href = $('#mcquiz-link-after-quiz').attr('href');
  }, false );

}

  $('body').on('click', 'div.js-mcquiz-next', function () {
    if ($('#modal-care-quiz .mcquiz-questions .slick-slide.slick-current.slick-active:last-child').length === 0) {
      $('#modal-care-quiz .mcquiz-questions').slick("slickNext");
    } else {

      //Тут сделать отправку формы
    }
  });

  $('body').on('click', 'div.js-mcquiz-close', function () {
    $.arcticmodal('close');
  });

  $('.js-call-modal-mcquiz').click(function (event) {
    event.preventDefault();
    $('#mcquiz-link-after-quiz').attr('href', $(this).attr('data-link-after-quiz'));



    $('#modal-care-quiz').arcticmodal({
      beforeOpen: function () {
        mcquizInitSlick();
      },
      afterOpen: function () {},
      afterClose: function () {
        $('.mcquiz-questions').slick('unslick');
      }
    });
  })



});