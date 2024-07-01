// _____fancybox_____
Fancybox.bind("[data-fancybox]", {});

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

// _____swiper first screen_____
const swiperFirst = new Swiper('.slider_info', {  
  spaceBetween: 12,
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    enabled: false,
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    1025: {
      spaceBetween: 40,
      navigation: {
        enabled: true,
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    }
  }
});

// _____swiper advantages_____
const advantagesCount = document.querySelectorAll('.slider_advantages .swiper-slide').length

const swiperAdvantages = new Swiper('.slider_advantages', {  
  spaceBetween: 12,
  loop: true,
  simulateTouch: true,
  slidesPerView: 1,
  pagination: {
      el: '.swiper-pagination',
      clickable: true,
      enabled: true,
  },
  breakpoints: {
    1025: {
      spaceBetween: 0,
      initialSlide: 0,
      loop: false,
      slidesPerGroup: advantagesCount,
      simulateTouch: false,
      pagination: {
          enabled: false,
          el: '.swiper-pagination',
      },
    }
  }
});

// _____swiper template_____
const swiperTemplate = new Swiper('.swiper_template', {  
  loop: true,
  slidesPerView: 1,
  spaceBetween: 15,
  slideToClickedSlide: true,
  pagination: {
    el: '.swiper-pagination',
    enabled: true,
    clickable: true,
  },
  navigation: {
    enabled: false,
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    1025: {
      spaceBetween: 0,
      slidesPerView: 2,
      pagination: {
        enabled: false,
        el: '.swiper-pagination',
      },
      navigation: {
        enabled: true,
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    },
    1400: {
      spaceBetween: 0,
      slidesPerView: 3,
      pagination: {
        enabled: false,
        el: '.swiper-pagination',
      },
      navigation: {
        enabled: true,
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    }
  }
});

// _____input file_____

$( document ).ready(function(){

  const fileLabel = document.querySelectorAll('.calculation_label');
  const fileInput = document.querySelectorAll('.calculation_input');
  const fileBtn = document.querySelectorAll('.form_btn')

  fileInput.forEach(item => {
    item.addEventListener('change', function() {
      let fileName = item.closest('.input_box').querySelector('.file_name')
      fileName.innerHTML = item.files[0].name;
    })
  })

  fileLabel.forEach(item => item.closest('.form_row').previousElementSibling.classList.add('special_gap'))
  fileBtn.forEach(item => item.closest('.form_row').previousElementSibling.classList.add('btn_gap'))


// _____registration page_____

  const list = document.querySelectorAll('.custom_li')
  const btn = document.querySelector('.registration_btn')

    $(list).each(function() {
      $(this).children('li:last').css('margin-bottom', '0px');
    });

    btn.previousElementSibling.classList.add('btn_margin')
    
});


const productsLink = document.querySelector('#products_link a')
const insuranceLink = document.querySelector('#cargo_insurance_link a')
const rentLink = document.querySelector('#rent_link a')
const moneyTransferLink = document.querySelector('#money_transfer_link a')

const products = document.querySelector('#products')
const insurance = document.querySelector('#cargo_insurance')
const rent = document.querySelector('#rent')
const moneyTransfer = document.querySelector('#money_transfer')

const getSlide = (link, slide) => {
  link.addEventListener('click', (event) => {
    event.preventDefault() 
    slide.scrollIntoView({ behavior: 'smooth' })
  })
};

getSlide(productsLink, products)
getSlide(insuranceLink, insurance)
getSlide(rentLink, rent)
getSlide(moneyTransferLink, moneyTransfer)