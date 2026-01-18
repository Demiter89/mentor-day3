const navLinks = document.querySelectorAll('nav a');
navLinks.forEach(link => {
    link.addEventListener('click', event => {
        event.preventDefault();
        const targetId = link.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        if (!targetSection) return;
        targetSection.scrollIntoView({
            behavior:'smooth',
        })
    })
})

const form = document.querySelector('#contact-form');
form.addEventListener('submit', event => {
    event.preventDefault()
    const formData = new FormData(form);
    const name = formData.get('name');
    const email = formData.get('email');
    console.log('Name:', name);
    console.log('Emeil:', email);
    form.reset();

});