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
  const endpoint = 'https://formsubmit.co/ajax/rashid@infraanchor.com';
  const setStatus = (message, kind = '') => {
    if (!status) return;
    status.textContent = message;
    status.className = `form-status${kind ? ` is-${kind}` : ''}`;
    status.hidden = !message;
  };

  submitButton.disabled = false;
  submitButton.innerHTML = 'Send enquiry <span>↗</span>';
  if (note) note.innerHTML = 'Your message will be processed by <a href="https://formsubmit.co/privacy.pdf" target="_blank" rel="noopener">FormSubmit</a> and emailed to rashid@infraanchor.com. Please do not include passwords or sensitive access details.';

  contactForm.addEventListener('submit', async event => {
    event.preventDefault();
    const values = Object.fromEntries(new FormData(contactForm).entries());
    values._replyto = values.email;
    submitButton.disabled = true;
    submitButton.textContent = 'Sending…';
    setStatus('Sending your message…');
    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(values)
      });
      const result = await response.json();
      if (!response.ok || result.success === false || result.success === 'false') {
        throw new Error(result.message || 'The form service rejected this submission.');
      }
      if (/confirm|activat/i.test(String(result.message || ''))) {
        setStatus('The form service sent an activation email to InfraAnchor. The mailbox owner must confirm it before enquiries can be delivered.', 'error');
      } else {
        setStatus('Thanks for getting in touch. Your message has been sent to InfraAnchor.', 'success');
        contactForm.reset();
      }
    } catch (error) {
      setStatus('We could not send your message. Please email rashid@infraanchor.com directly.', 'error');
    } finally {
      submitButton.disabled = false;
      submitButton.innerHTML = 'Send enquiry <span>↗</span>';
    }
  });
}
