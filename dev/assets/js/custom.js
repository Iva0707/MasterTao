// _____burger_____
const burger = document.querySelector('#burger');
const navSection = document.querySelector('.nav_section');

function showNav(){
  navSection.classList.toggle('show');
}

burger.addEventListener('click', showNav);


// _____fancybox_____
Fancybox.bind("[data-fancybox]", {});

// _____slick_____
$('.single-item').slick();

// _____swiper_____
const swiper = new Swiper('.slider_info', {  
  spaceBetween: 40,
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