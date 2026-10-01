const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.site-nav');
if (toggle && nav) {
  toggle.addEventListener('click', () => {
    const open = toggle.getAttribute('aria-expanded') === 'true';
    toggle.setAttribute('aria-expanded', String(!open));
    nav.classList.toggle('is-open', !open);
  });
  nav.addEventListener('click', event => {
    if (event.target.closest('a')) {
      toggle.setAttribute('aria-expanded', 'false');
      nav.classList.remove('is-open');
    }
  });
}
document.querySelectorAll('[data-year]').forEach(node => node.textContent = new Date().getFullYear());
const contactForm = document.querySelector('[data-contact-form]');
if (contactForm) {
  contactForm.addEventListener('submit', event => {
    event.preventDefault();
    const values = new FormData(contactForm);
    const subject = encodeURIComponent(`InfraAnchor enquiry — ${values.get('topic')}`);
    const body = encodeURIComponent(`Hello InfraAnchor,\n\n${values.get('message')}\n\nName: ${values.get('name')}\nEmail: ${values.get('email')}\nTopic: ${values.get('topic')}`);
    window.location.href = `mailto:rashid@infraanchor.com?subject=${subject}&body=${body}`;
  });
}
