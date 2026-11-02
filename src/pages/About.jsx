import { Eyebrow, PageHero } from '../components/PageHero.jsx';
import { Reveal } from '../components/Reveal.jsx';
import { Media } from '../components/Media.jsx';
import { ClosingBand } from '../components/ClosingBand.jsx';
import { IMAGES } from '../lib/images.js';

const PRINCIPLES = [
  {
    n: '01',
    title: 'Understand before changing',
    text: 'Gather the facts, dependencies and constraints before recommending a solution.',
  },
  {
    n: '02',
    title: 'Prioritise by impact',
    text: 'Distinguish real operational risk from cosmetic improvements or unnecessary complexity.',
  },
  {
    n: '03',
    title: 'Respect continuity',
    text: 'Plan around business impact, rollback options and how the environment will be supported afterward.',
  },
  {
    n: '04',
    title: 'Leave useful records',
    text: 'Document decisions, changes and next steps in language the next engineer can use.',
  },
];

export function About() {
  return (
    <>
      <PageHero
        eyebrow="ABOUT / PRINCIPLES"
        title={<>Technical depth. <em>Plain speaking.</em></>}
        intro="InfraAnchor exists to make the systems behind everyday work more understandable, supportable and dependable."
        aside={{
          label: 'OUR POINT OF VIEW',
          text: 'Technology is only useful when people can operate it, recover it and make good decisions about it.',
          small: 'ENGINEERING / NOT THEATRE',
        }}
      />

      <section className="section">
        <div className="wrap split split-media">
          <Reveal>
            <Media src={IMAGES.engineer} alt="An engineer focused on a laptop in a server room" className="media-tall" />
          </Reveal>
          <div className="stack">
            <Reveal>
              <Eyebrow>WHY INFRAANCHOR</Eyebrow>
              <h2 className="display">Reliable IT is built in the <em>details.</em></h2>
              <p className="lead">
                A stable environment rarely comes from one big tool or one dramatic fix. It comes from understanding the moving parts, managing change carefully and keeping the knowledge accessible.
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <p>
                InfraAnchor brings a practical infrastructure perspective to cloud services, identity, servers, networks, security and recovery. The focus is on clear diagnosis, sensible priorities and work that fits the actual environment, not a generic checklist.
              </p>
              <p>
                That means asking questions before changing things, being honest about trade-offs and documenting the result so support does not depend on someone's memory.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section section-tight principles">
        <div className="wrap">
          <Reveal>
            <div className="section-head">
              <span className="eyebrow-plain">WORKING PRINCIPLES / 04</span>
              <h2 className="display">How we approach <em>the work.</em></h2>
              <p className="lead">
                These are the standards that shape the engagement, from the first conversation to the handover.
              </p>
            </div>
          </Reveal>
          <ol className="principle-grid">
            {PRINCIPLES.map((principle, index) => (
              <li key={principle.n}>
                <Reveal delay={index * 0.08}>
                  <article className="card principle-card">
                    <span className="card-index">{principle.n}</span>
                    <h3>{principle.title}</h3>
                    <p>{principle.text}</p>
                  </article>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="dark-band about-close">
        <div className="wrap about-close-grid">
          <Reveal>
            <Eyebrow>A PRACTICAL PARTNER</Eyebrow>
            <h2 className="display">No mystery. No unnecessary noise. <em>Just thoughtful IT work.</em></h2>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="lead">
              Whether you need a second set of eyes, focused troubleshooting or help with a project, start with a conversation about the environment you have today.
            </p>
            <a className="btn btn-primary" href="/contact.html">
              Talk to InfraAnchor <span aria-hidden="true">↗</span>
            </a>
          </Reveal>
        </div>
      </section>

      <ClosingBand
        title={<>Good work starts <em>with context.</em></>}
        text="Tell us a little about your environment and what you want to improve."
      />
    </>
  );
}
