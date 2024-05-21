const burger = document.querySelector('#burger');
const navSection = document.querySelector('.nav_section');

function showNav(){
  navSection.classList.toggle('show');
}

burger.addEventListener('click', showNav);

Fancybox.bind("[data-fancybox]", {});
$('.single-item').slick();

const swiper = new Swiper('.swiper', {  
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  autoplay: false,
});

$(document).ready(function(){
  $('.your-class').slick({
      dots: true,
      infinite: false,
      pauseOnHover: true,
      autoplay: true,
      autoplaySpeed: 1000,
  });
});
