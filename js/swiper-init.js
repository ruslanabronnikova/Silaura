var mySwiper = new Swiper('.swiper', {
  slidesPerView: 4,
  spaceBetween: 20,

  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  loop: true,
  breakpoints: {
    1440: {
      slidesPerView: 4,
      spaceBetween: 20,
    },
    // Когда ширина экрана меньше 992px
    992: {
      slidesPerView: 3,
      spaceBetween: 15,
    },
    // Когда ширина экрана меньше 768px
    768: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    // Когда ширина экрана меньше 576px
    576: {
      slidesPerView: 1,
      spaceBetween: 10,
    },

    320: {
      slidesPerView: 1,
      spaceBetween: 10,
    }
  }
});



