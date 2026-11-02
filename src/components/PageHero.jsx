import { Reveal } from './Reveal.jsx';

export function Eyebrow({ children }) {
  return (
    <span className="eyebrow">
      <span className="eyebrow-rule" aria-hidden="true" />
      {children}
    </span>
  );
}

export function PageHero({ eyebrow, title, intro, aside, children }) {
  return (
    <section className="page-hero">
      <div className="wrap page-hero-grid">
        <Reveal>
          <Eyebrow>{eyebrow}</Eyebrow>
          <h1 className="display">{title}</h1>
          <p className="lead">{intro}</p>
          {children && <div className="hero-actions">{children}</div>}
        </Reveal>
        {aside && (
          <Reveal delay={0.2} className="hero-aside">
            <p className="aside-label">{aside.label}</p>
            <p className="aside-text">{aside.text}</p>
            <p className="aside-small">{aside.small}</p>
          </Reveal>
        )}
      </div>
    </section>
  );
}
