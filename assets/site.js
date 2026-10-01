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
    submitButton.innerHTML = 'Send enquiry <span>↗</span>';
    if (note) note.textContent = 'Your message is sent through Formspree to our inbox. Please do not include passwords or sensitive access details.';
  } else {
    submitButton.innerHTML = 'Open email app <span>↗</span>';
    if (note) note.innerHTML = 'Online delivery is not connected yet. You can email <a href="mailto:rashid@infraanchor.com">rashid@infraanchor.com</a> directly.';
  }

  contactForm.addEventListener('submit', async event => {
    event.preventDefault();
    const values = new FormData(contactForm);
    if (!formId) {
      const subject = encodeURIComponent(`InfraAnchor enquiry — ${values.get('topic')}`);
      const body = encodeURIComponent(`Hello InfraAnchor,\n\n${values.get('message')}\n\nName: ${values.get('name')}\nEmail: ${values.get('email')}\nTopic: ${values.get('topic')}`);
      window.location.href = `mailto:rashid@infraanchor.com?subject=${subject}&body=${body}`;
      return;
    }

    submitButton.disabled = true;
    submitButton.innerHTML = 'Sending…';
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
