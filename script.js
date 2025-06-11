document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('contactForm');
  const status = document.getElementById('formStatus');

  form.addEventListener('submit', function(event) {
    event.preventDefault();
    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const message = form.message.value.trim();

    if (name && email && message) {
      status.style.color = '#0ff';
      status.textContent = \`Thank you, \${name}! Your message has been sent. (Not really, this is a demo.)\`;
      form.reset();
    } else {
      status.style.color = '#f00';
      status.textContent = 'Please fill out all fields correctly.';
    }
  });
});
