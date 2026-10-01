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
  const formId = String(window.INFRAANCHOR_FORMSPREE_ID || '').trim();
  const submitButton = contactForm.querySelector('[type="submit"]');
  const status = contactForm.querySelector('[data-form-status]');
  const note = contactForm.querySelector('[data-form-note]');
  const setStatus = (message, kind = '') => {
    if (!status) return;
    status.textContent = message;
    status.className = `form-status${kind ? ` is-${kind}` : ''}`;
    status.hidden = !message;
  };

  if (formId) {
    submitButton.disabled = false;
    submitButton.innerHTML = 'Send enquiry <span>↗</span>';
    if (note) note.textContent = 'Your message is sent through our online form. Please do not include passwords or sensitive access details.';
  } else {
    submitButton.disabled = true;
    submitButton.textContent = 'Online form setup in progress';
    if (note) note.innerHTML = 'Website form delivery is not connected yet. For now, email <a href="mailto:rashid@infraanchor.com">rashid@infraanchor.com</a>.';
  }

  contactForm.addEventListener('submit', async event => {
    event.preventDefault();
    if (!formId) {
      setStatus('Online sending is not connected yet. Please use the email address shown below the form.', 'error');
      return;
    }

    const values = new FormData(contactForm);
    submitButton.disabled = true;
    submitButton.textContent = 'Sending…';
    setStatus('Sending your message…');
    try {
      const response = await fetch(`https://formspree.io/f/${encodeURIComponent(formId)}`, {
        method: 'POST',
        body: values,
        headers: { Accept: 'application/json' }
      });
      if (!response.ok) throw new Error('Form submission failed');
      setStatus('Thanks for getting in touch. Your message has been sent.', 'success');
      contactForm.reset();
    } catch (error) {
      setStatus('We could not send your message just now. Please email rashid@infraanchor.com directly.', 'error');
    } finally {
      submitButton.disabled = false;
      submitButton.innerHTML = 'Send enquiry <span>↗</span>';
    }
  });
}
