import { useState } from 'react';
import { Eyebrow } from '../components/PageHero.jsx';
import { Reveal } from '../components/Reveal.jsx';
import { EMAIL } from '../lib/site.js';

const TOPICS = [
  'Microsoft 365 & identity',
  'Servers & infrastructure',
  'Networking',
  'Security, backup & recovery',
  'Remote IT support',
  'Project or assessment',
  'Something else',
];

const HELPFUL_CONTEXT = [
  'What is happening, or what are you planning?',
  'Which systems, users or services are affected?',
  'Are there deadlines, constraints or risks to respect?',
];

function ContactForm() {
  const [sent] = useState(() => new URLSearchParams(window.location.search).get('sent') === '1');
  const [sending, setSending] = useState(false);

  return (
    <form
      className="contact-form"
      id="contact-form"
      action={`https://formsubmit.co/${EMAIL}`}
      method="POST"
      onSubmit={() => setSending(true)}
    >
      <input type="hidden" name="_subject" value="New InfraAnchor website enquiry" />
      <input type="hidden" name="_next" value="https://infraanchor.com/contact.html?sent=1" />
      <input className="form-honeypot" type="text" name="_honey" tabIndex={-1} autoComplete="off" aria-hidden="true" />

      <div className="field">
        <label htmlFor="name">Your name</label>
        <input id="name" name="name" autoComplete="name" required placeholder="How should we address you?" />
      </div>
      <div className="field">
        <label htmlFor="email">Work email</label>
        <input id="email" name="_replyto" type="email" autoComplete="email" required placeholder="you@company.com" />
      </div>
      <div className="field">
        <label htmlFor="topic">Area of interest</label>
        <select id="topic" name="topic" defaultValue={TOPICS[0]}>
          {TOPICS.map((topic) => (
            <option key={topic}>{topic}</option>
          ))}
        </select>
      </div>
      <div className="field">
        <label htmlFor="message">What would you like to solve?</label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          placeholder="A few details about the environment, issue or outcome you're looking for…"
        />
      </div>

      <div className="form-footer">
        <button className="btn btn-primary btn-lg" type="submit" disabled={sending}>
          {sending ? 'Sending…' : 'Send enquiry'} <span aria-hidden="true">↗</span>
        </button>
        <p className="form-note">
          Your message is processed by{' '}
          <a href="https://formsubmit.co/privacy.pdf" target="_blank" rel="noopener noreferrer">FormSubmit</a> and
          emailed to {EMAIL}. Please do not include passwords or sensitive access details.
        </p>
      </div>

      <div className="form-status" role="status" aria-live="polite">
        {sent && !sending && <p className="status-success">Thanks for getting in touch. Your message has been sent to InfraAnchor.</p>}
        {sending && <p>Sending your message…</p>}
      </div>
    </form>
  );
}

export function Contact() {
  return (
    <>
      <section className="page-hero contact-hero">
        <div className="wrap contact-grid">
          <Reveal>
            <Eyebrow>CONTACT / FIRST CONVERSATION</Eyebrow>
            <h1 className="display">Start with what’s <em>actually happening.</em></h1>
            <p className="lead">
              You don't need a complete brief. Tell us what is working, what is not, and what you need to be different.
            </p>
            <div className="email-block">
              <span className="aside-label">DIRECT EMAIL</span>
              <a href={`mailto:${EMAIL}`}>
                {EMAIL} <span aria-hidden="true">↗</span>
              </a>
            </div>
            <p className="aside-small">Please don't include passwords, secrets or sensitive access details in your message.</p>

            <div className="expect">
              <p className="service-kicker">WHAT HELPS US START</p>
              <h2 className="display-sm">Useful context. <em>No perfect brief.</em></h2>
              <ol className="numbered">
                {HELPFUL_CONTEXT.map((question) => (
                  <li key={question}>{question}</li>
                ))}
              </ol>
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="form-shell">
              <div className="form-heading">
                <span className="aside-label">ENQUIRY / 01</span>
                <h2 className="display-sm">Tell us a little about it.</h2>
                <p>We’ll use this context to understand the request and reply by email.</p>
              </div>
              <ContactForm />
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
