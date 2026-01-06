const menuBtn = document.getElementById('burger-menu');
const navBar = document.body.querySelector('.header_nav-bar_mobile');

const linksMobileMenu = document.body.querySelectorAll('.header_nav-bar_mobile .nav-link');

menuBtn.addEventListener('click', () => {
  navBar.classList.toggle('open');
  navBar.classList.toggle('closed');
});

linksMobileMenu.forEach(link => {
  link.addEventListener('click', () => {
    navBar.classList.add('closed');
    navBar.classList.remove('open');
  });
});