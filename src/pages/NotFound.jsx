import { Eyebrow } from '../components/PageHero.jsx';
import { Reveal } from '../components/Reveal.jsx';

export function NotFound() {
  return (
    <section className="page-hero status-page">
      <div className="wrap status-grid">
        <Reveal>
          <Eyebrow>ERROR / 404</Eyebrow>
          <h1 className="display">This route <em>goes nowhere.</em></h1>
          <p className="lead">The page may have moved or the address may be incorrect.</p>
          <a className="btn btn-primary btn-lg" href="/">
            Back to the homepage <span aria-hidden="true">↗</span>
          </a>
        </Reveal>
      </div>
    </section>
  );
}
