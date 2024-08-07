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

$(navSection).click(function(){
  body.classList.remove('overflow-hidden');
  navSection.classList.remove('show');
  burger.classList.remove('is-active');
});

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

// _____footer links_____

// выделяем все ссылки в которых data-swiper-transfer равен значению services
const servicesLinks = document.querySelectorAll("a[data-swiper-transfer='services']");
const deliveryLinks = document.querySelectorAll("a[data-swiper-transfer='delivery']");
const servicesSlideContainer = document.querySelector(".services-page .swiper_template .swiper-wrapper");
const deliverySlideContainer = document.querySelector(".delivery-page .swiper_template .swiper-wrapper");

// swiperTemplate - хранит в себе два слайдера, первый, с доставкой, и второй, с услугами( в виде массива )

scrollToSlide(swiperTemplate[0], deliveryLinks, deliverySlideContainer);
scrollToSlide(swiperTemplate[1], servicesLinks, servicesSlideContainer);

function scrollToSlide(swiperSlider, links, sliderContainer) {
  links.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();

      // берем то что в href указано у ссылки и удаляем решетку
      const slideId = link.hash.replace("#", "");
      // получаем индекс слайда в нашем слайде( его порядковый номер )
      const slideIndex = Array.from(
        sliderContainer.querySelectorAll(".swiper-slide")
      ).findIndex((el) => el.id === slideId);

      if (slideIndex === -1) {
        // значит слайд не был найден...
        return;
      }

      // получаем слайд, чтобы потом перекинуть юзера на него
      const slide = sliderContainer.querySelector(`#${slideId}`);
      swiperSlider.slideTo(slideIndex);

      slide.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });
}