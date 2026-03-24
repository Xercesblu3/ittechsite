document.getElementById('year').textContent = new Date().getFullYear();

const form = document.querySelector('.contact-form');
form?.addEventListener('submit', (event) => {
  event.preventDefault();
  const button = form.querySelector('button[type="submit"]');
  button.textContent = 'Thanks — we will contact you soon';
  button.disabled = true;
});
