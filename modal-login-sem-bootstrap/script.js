const body = document.querySelector('body');
const openBtn = document.querySelector('.open-btn');
const closeBtns = document.querySelectorAll('.close');
const fadeInDiv = document.querySelector('.fade-in');
const form = document.querySelector('form');

openBtn.addEventListener('click', () => {
  body.classList.add('modal-opened');
});

closeBtns.forEach(btn => btn.addEventListener('click', function() {
	form.reset();
	body.classList.remove('modal-opened');
}));

fadeInDiv.addEventListener('click', () => {
  form.reset();
  body.classList.remove('modal-opened');
});