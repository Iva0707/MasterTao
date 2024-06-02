// _____fancybox_____
Fancybox.bind("[data-fancybox]", {});

// _____slick_____
$('.single-item').slick();

// _____burger_____
var forEach = function(t, o, r) {
  if ("[object Object]" === Object.prototype.toString.call(t))
      for (var c in t) Object.prototype.hasOwnProperty.call(t, c) && o.call(r, t[c], c, t);
  else
      for (var e = 0, l = t.length; l > e; e++) o.call(r, t[e], e, t)
};
var hamburgers = document.querySelectorAll(".hamburger");
if (hamburgers.length > 0) {
  forEach(hamburgers, function(hamburger) {
      hamburger.addEventListener("click", function() {
          this.classList.toggle("is-active");
      }, false);
  });
}

// _____burger_____
const burger = document.querySelector('#burger');
const body = document.querySelector('body');
const navSection = document.querySelector('.nav_section');

function showNav(){
  navSection.classList.toggle('show');
  body.classList.toggle('overflow-hidden');
}

burger.addEventListener('click', showNav);


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
    1024: {
      spaceBetween: 40,
      navigation: {
        enabled: true,
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    }
  }
});

// _____input file_____

const fileInput = document.querySelector('#calculation_file');
const fileName = document.querySelector('#file_name')

fileInput.addEventListener('change', () => {
  fileName.innerHTML = fileInput.files[0].name;
});