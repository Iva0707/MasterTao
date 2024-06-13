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


// _____swiper delivery_____
const swiperTemplate = new Swiper('.swiper_template', {  
  loop: true,
  slidesPerView: 1,
  spaceBetween: 100,
  pagination: {
    el: '.swiper-pagination',
    enabled: true,
    clickable: true,
  },
  navigation: {
    enabled: false,
  },

  breakpoints: {
    1024: {
      spaceBetween: 20,
      slidesPerView: 3,
      pagination: {
        el: '.swiper-pagination',
        enabled: false,
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


// _____swiper advantager_____


let swiperAdvantages  

function initAdvantages() {
    swiperAdvantages = new Swiper('.slider_advantages', {
    spaceBetween: 12,
    loop: true,
  
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        enabled: true,
    },
    breakpoints: {
        1025: {
            spaceBetween: 40,
            navigation: {
                enabled: true,
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            pagination: {
                enabled: false,
            },
  
        }
    }
  });
}

function destroyAdvantages() {
  swiperAdvantages.destroy( true )   
}


function mediaQuery(matchMedia1024) {
    if (matchMedia1024.matches) { // If media query matches
      initAdvantages()
    } else {
      destroyAdvantages()
    }
}

// Create a MediaQueryList object
const matchMedia1024 = window.matchMedia("(max-width: 1024px)")

// Call listener function at run time
mediaQuery(matchMedia1024);

// Attach listener function on state changes
matchMedia1024.addEventListener("change", function() {
    mediaQuery(matchMedia1024);
});