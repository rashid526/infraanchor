import { Eyebrow } from './PageHero.jsx';
import { Reveal } from './Reveal.jsx';

export function ClosingBand({ title, text }) {
  return (
    <section className="closing-band">
      <div className="wrap closing-grid">
        <Reveal>
          <Eyebrow>NEXT STEP / NO SALES SCRIPT</Eyebrow>
          <h2 className="display">{title}</h2>
          <p className="lead">{text}</p>
        </Reveal>
        <Reveal delay={0.15}>
          <a className="btn btn-primary btn-lg" href="/contact.html">
            Talk through the problem <span aria-hidden="true">↗</span>
          </a>
        </Reveal>
      </div>
    </section>
  );
}
