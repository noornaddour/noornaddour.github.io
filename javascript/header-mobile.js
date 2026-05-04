const btn = document.getElementById('mobile-btn');
const menu = document.getElementById('nav-links');

btn.addEventListener('click', () => {
  menu.classList.toggle('show');
});
