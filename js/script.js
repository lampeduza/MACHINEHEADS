var header = document.querySelector('.header');
var headerToggle = document.querySelector('.header__toggle');

header.classList.remove('header--nojs');

headerToggle.addEventListener('click', function() {
  header.classList.toggle('header--opened');
});
