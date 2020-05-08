$('.articles__slider').slick({
    dots: false,
    infinite: false,
    speed: 300,
    prevArrow: '<div class="slider-arrow slider-arrow--prev"><svg class="slider-arrow__icon slider-arrow__icon--prev"><use xlink:href="images/sprite.svg#icon-Chevron-down"></use></svg></div>',
    nextArrow: '<div class="slider-arrow slider-arrow--next"><svg class="slider-arrow__icon slider-arrow__icon--next"><use xlink:href="images/sprite.svg#icon-Chevron-down"></use></svg></div>',
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
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

  $(function(){
    $('a.scroll-link[href^="#"]').on('click', function(event) {
      // отменяем стандартное действие
      event.preventDefault();
      
      var sc = $(this).attr("href"),
          dn = $(sc).offset().top;
      /*
      * sc - в переменную заносим информацию о том, к какому блоку надо перейти
      * dn - определяем положение блока на странице
      */
      
      $('html, body').animate({scrollTop: dn}, 1000);
      
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

  $(".swiper-nav__button").click(function(){
    galleryThumbs.slideTo( $(".swiper-nav__img").length, 300);
    galleryTop.slideTo( $(".swiper-nav__img").length, 300);
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