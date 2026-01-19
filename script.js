const navLinks = document.querySelectorAll('nav a');

navLinks.forEach(link => {
  link.addEventListener('click', event => {
    event.preventDefault();

    const targetId = link.getAttribute('href');
    const targetSection = document.querySelector(targetId);

    if (!targetSection) return;

    targetSection.scrollIntoView({
      behavior: 'smooth',
    });
  });
});

const form = document.querySelector('#contact-form');
const message = document.querySelector('#form-message');

if (form && message) {
  form.addEventListener('submit', event => {
    event.preventDefault();

    const formData = new FormData(form);
    const name = (formData.get('name') || '').toString().trim();
    const email = (formData.get('email') || '').toString().trim();

    if (!name || !email) {
      message.textContent = 'Будь ласка, заповніть усі поля';
      message.className = 'error';
      return;
    }

    if (!email.includes('@')) {
      message.textContent = 'Введіть коректний email';
      message.className = 'error';
      return;
    }

    console.log('Name:', name);
    console.log('Email:', email);

    message.textContent = 'Дякуємо! Форма успішно надіслана.';
    message.className = 'success';

    form.reset();
  });
}
