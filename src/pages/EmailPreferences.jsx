import { Eyebrow } from '../components/PageHero.jsx';
import { Reveal } from '../components/Reveal.jsx';
import { EMAIL } from '../lib/site.js';

export function EmailPreferences() {
  return (
    <section className="page-hero status-page">
      <div className="wrap status-grid">
        <Reveal>
          <Eyebrow>EMAIL PREFERENCES</Eyebrow>
          <h1 className="display">Manage email <em>preferences.</em></h1>
          <p className="lead">
            If you received an email from InfraAnchor and no longer wish to receive updates, use the unsubscribe link included in that message or reply to the email requesting removal.
          </p>
          <a className="btn btn-primary btn-lg" href={`mailto:${EMAIL}?subject=Email%20preference%20request`}>
            Email InfraAnchor <span aria-hidden="true">↗</span>
          </a>
        </Reveal>
      </div>
    </section>
  );
}
