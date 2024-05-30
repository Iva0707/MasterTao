// _____burger_____
const burger = document.querySelector('#burger');
const body = document.querySelector('body');
const navSection = document.querySelector('.nav_section');

function showNav(){
  navSection.classList.toggle('show');
  body.classList.toggle('overflow-hidden');
}

burger.addEventListener('click', showNav);


// _____fancybox_____
Fancybox.bind("[data-fancybox]", {});

// _____slick_____
$('.single-item').slick();

// _____swiper_____
const swiper = new Swiper('.slider_info', {  
  spaceBetween: 12,
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    enabled: false,
  },

  breakpoints: {
    992: {
      spaceBetween: 40,
      navigation: {
        enabled: true,
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    }
  }
});