const menuBtn = document.getElementById('burger-menu');
const navBar = document.body.querySelector('.header_nav-bar_mobile');

menuBtn.addEventListener('click', () => {
  navBar.classList.toggle('open');
  navBar.classList.toggle('closed');
});