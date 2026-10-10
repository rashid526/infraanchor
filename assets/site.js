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
  const submitButton = contactForm.querySelector('[type="submit"]');
  const status = contactForm.querySelector('[data-form-status]');
  const note = contactForm.querySelector('[data-form-note]');
  const setStatus = (message, kind = '') => {
    if (!status) return;
    status.textContent = message;
    status.className = `form-status${kind ? ` is-${kind}` : ''}`;
    status.hidden = !message;
  };

  if (note) note.innerHTML = 'Your message is processed by <a href="https://formsubmit.co/privacy.pdf" target="_blank" rel="noopener">FormSubmit</a> and emailed to rashid@infraanchor.com. Please do not include passwords or sensitive access details.';
  if (new URLSearchParams(window.location.search).get('sent') === '1') {
    setStatus('Thanks for getting in touch. Your message has been sent to InfraAnchor.', 'success');
  }
  contactForm.addEventListener('submit', () => {
    submitButton.disabled = true;
    submitButton.textContent = 'Sending…';
    setStatus('Sending your message…');
  });
}


// Progressive enhancement: reveal content as it enters the viewport.
// Without IntersectionObserver, all content remains visible.
(() => {
  const targets = document.querySelectorAll('.impact-card, .outcome-item, .process-step, .section-heading, .service-card, .feature-grid, .audience-row, .service-detail, .cta-card');
  if (!targets.length || !('IntersectionObserver' in window) || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  targets.forEach((item) => item.setAttribute('data-reveal', ''));
  const observer = new IntersectionObserver((entries, activeObserver) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('is-revealed');
      activeObserver.unobserve(entry.target);
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -36px 0px' });
  targets.forEach((item) => observer.observe(item));
})();
