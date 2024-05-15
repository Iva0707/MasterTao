const burger = document.querySelector('#burger');
const navSection = document.querySelector('.nav_section');

function showNav(){
  navSection.classList.toggle('show');
}

burger.addEventListener('click', showNav);