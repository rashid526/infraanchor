import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Eyebrow } from '../components/PageHero.jsx';
import { Reveal } from '../components/Reveal.jsx';
import { ClosingBand } from '../components/ClosingBand.jsx';
import { IMAGES } from '../lib/images.js';

const TICKER = ['Cloud', 'Compute', 'Network', 'Identity', 'Security', 'Recovery'];

const SERVICE_ROWS = [
  { n: '01', title: 'Microsoft & cloud', href: '/services.html#microsoft', detail: 'Microsoft 365 · Entra ID · tenant configuration · collaboration' },
  { n: '02', title: 'Infrastructure & networks', href: '/services.html#infrastructure', detail: 'Windows Server · virtualisation · LAN · Wi-Fi · connectivity' },
  { n: '03', title: 'Identity & security', href: '/services.html#security', detail: 'Access control · hardening · operational visibility · review' },
  { n: '04', title: 'Backup & continuity', href: '/services.html#resilience', detail: 'Backup coverage · restore readiness · recovery planning' },
  { n: '05', title: 'Projects & technical support', href: '/services.html#projects', detail: 'Assessment · troubleshooting · implementation · documentation' },
];

const METHOD_STEPS = [
  { n: '01', title: 'Discover', text: 'Map the environment, constraints and dependencies.' },
  { n: '02', title: 'Prioritise', text: 'Separate urgent risk from worthwhile improvement.' },
  { n: '03', title: 'Deliver', text: 'Make scoped changes with care for continuity.' },
  { n: '04', title: 'Document', text: 'Leave clear outcomes and practical next steps.' },
];

const AUDIENCE = [
  { n: '01', label: 'Growing businesses', href: '/industries.html#small-teams', text: 'Practical foundations without unnecessary overhead.' },
  { n: '02', label: 'Internal IT teams', href: '/industries.html#it-teams', text: 'Extra technical depth for complex work or busy periods.' },
  { n: '03', label: 'Service providers', href: '/industries.html#service-providers', text: 'Engineering support for delivery, troubleshooting and change.' },
];

const STATUS_CHIPS = [
  { label: 'Backup verified', meta: 'Last restore test passed', className: 'chip-a' },
  { label: 'Sign-in policy active', meta: 'MFA enforced for admins', className: 'chip-b' },
  { label: 'Link stable', meta: 'Core switching healthy', className: 'chip-c' },
];

function HeroVisual() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const imageY = useTransform(scrollYProgress, [0, 1], ['-8%', '8%']);

  return (
    <div className="hero-visual" ref={ref}>
      <div className="hero-visual-frame">
        <motion.img
          src={IMAGES.heroRack}
          alt="Rows of server racks in a data centre lit with blue light"
          style={{ y: imageY }}
          initial={{ scale: 1.12, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
        />
        <div className="hero-visual-scan" aria-hidden="true" />
      </div>
      {STATUS_CHIPS.map((chip, index) => (
        <motion.div
          key={chip.label}
          className={`status-chip ${chip.className}`}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 + index * 0.18, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="status-dot" aria-hidden="true" />
          <span>
            <strong>{chip.label}</strong>
            <small>{chip.meta}</small>
          </span>
        </motion.div>
      ))}
    </div>
  );
}

export function Home() {
  return (
    <>
      <section className="home-hero">
        <div className="wrap home-hero-grid">
          <motion.div
            className="home-copy"
            initial="hidden"
            animate="show"
            variants={{ hidden: {}, show: { transition: { staggerChildren: 0.12 } } }}
          >
            <motion.div variants={riseVariant}>
              <Eyebrow>IT INFRASTRUCTURE / ENGINEERING / SUPPORT</Eyebrow>
            </motion.div>
            <motion.h1 className="display hero-title" variants={riseVariant}>
              Technology should hold up <em>under pressure.</em>
            </motion.h1>
            <motion.p className="lead" variants={riseVariant}>
              InfraAnchor helps make the systems behind your business more dependable, from Microsoft cloud and identity to servers, networks, security and recovery.
            </motion.p>
            <motion.div className="hero-actions" variants={riseVariant}>
              <a className="btn btn-primary btn-lg" href="/contact.html">
                Talk through your environment <span aria-hidden="true">↗</span>
              </a>
              <a className="text-link" href="/services.html">
                Explore services <span aria-hidden="true">→</span>
              </a>
            </motion.div>
            <motion.div className="hero-proof" variants={riseVariant}>
              <span className="proof-index">01—04</span>
              <span>Understand the environment.<br />Improve what matters. Document the outcome.</span>
            </motion.div>
          </motion.div>
          <HeroVisual />
        </div>

        <div className="ticker">
          <div className="ticker-track">
            {[...TICKER, ...TICKER].map((word, index) => (
              <span key={`${word}-${index}`} aria-hidden={index >= TICKER.length}>
                {word} <i aria-hidden="true">/</i>
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="section manifesto">
        <div className="wrap split">
          <Reveal>
            <Eyebrow>THE INFRAANCHOR APPROACH</Eyebrow>
            <h2 className="display">Less guesswork. <em>Better foundations.</em></h2>
          </Reveal>
          <div className="stack">
            <Reveal delay={0.1}>
              <p className="lead">
                Good IT isn't just a stack of products. It's the way identity, devices, connectivity, platforms and recovery fit together, and how clearly the people responsible can understand them.
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <p>
                We focus on practical engineering, honest prioritisation and changes that make sense for your environment. No theatre. No needless complexity. Just useful work on the systems people rely on every day.
              </p>
              <a className="text-link" href="/about.html">How we work <span aria-hidden="true">→</span></a>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section section-tight">
        <div className="wrap">
          <Reveal>
            <div className="section-head">
              <Eyebrow>CAPABILITY / INDEX 01</Eyebrow>
              <h2 className="display">Work across the <em>whole environment.</em></h2>
              <p className="lead">
                From the user sign-in to the server room and the recovery plan, we help connect the technical detail to the business need.
              </p>
            </div>
          </Reveal>
          <ol className="ledger">
            {SERVICE_ROWS.map((row, index) => (
              <li key={row.n}>
                <Reveal delay={index * 0.06}>
                  <a className="ledger-row" href={row.href}>
                    <span className="ledger-index">{row.n}</span>
                    <span className="ledger-title">{row.title}</span>
                    <span className="ledger-detail">{row.detail}</span>
                    <span className="ledger-arrow" aria-hidden="true">→</span>
                  </a>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="method">
        <div className="wrap method-grid">
          <div className="method-media">
            <Reveal>
              <figure className="media media-tall">
                <img src={IMAGES.engineer} alt="An engineer working on a laptop inside a server room" loading="lazy" decoding="async" />
              </figure>
            </Reveal>
          </div>
          <div className="method-copy">
            <Reveal>
              <Eyebrow>A WORKING METHOD</Eyebrow>
              <h2 className="display">Understand first. <em>Change with intent.</em></h2>
              <p className="lead">
                Before recommending a tool or a rebuild, get a clear picture of what exists, what's failing, and what the business actually needs.
              </p>
            </Reveal>
            <ol className="steps">
              {METHOD_STEPS.map((step, index) => (
                <li key={step.n} className="step">
                  <Reveal delay={index * 0.1}>
                    <span className="step-index">{step.n}</span>
                    <div>
                      <h3>{step.title}</h3>
                      <p>{step.text}</p>
                    </div>
                  </Reveal>
                </li>
              ))}
            </ol>
            <Reveal delay={0.1}>
              <a className="btn btn-ghost" href="/work.html">Explore project experience <span aria-hidden="true">↗</span></a>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <Reveal>
            <div className="section-head">
              <Eyebrow>WHO WE HELP</Eyebrow>
              <h2 className="display">Different environments. <em>Grounded advice.</em></h2>
            </div>
          </Reveal>
          <div className="audience-grid">
            {AUDIENCE.map((item, index) => (
              <Reveal key={item.n} delay={index * 0.1}>
                <a className="card audience-card" href={item.href}>
                  <span className="card-index">{item.n}</span>
                  <h3>{item.label}</h3>
                  <p>{item.text}</p>
                  <span className="card-link">Read more <span aria-hidden="true">→</span></span>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-tight">
        <div className="wrap field-teaser">
          <Reveal>
            <Eyebrow>FIELD NOTES / PRACTICAL GUIDANCE</Eyebrow>
            <h2 className="display">Make the technical details <em>useful.</em></h2>
            <p className="lead">Clear, grounded guidance for infrastructure decisions, service continuity and day-to-day IT operations.</p>
            <a className="text-link" href="/insights.html">Browse guides & insights <span aria-hidden="true">→</span></a>
          </Reveal>
          <Reveal delay={0.15}>
            <article className="note-card">
              <div className="note-meta">
                <span>FIELD NOTE 001 | OPERATIONS</span>
                <span className="note-mark">FN/01</span>
              </div>
              <h3>Before you change a production system</h3>
              <p>Know the dependencies, agree the rollback, capture the current state and verify the outcome.</p>
              <div className="note-foot">
                <span>CHANGE CONTROL</span>
                <span>IA / NOTES</span>
              </div>
            </article>
          </Reveal>
        </div>
      </section>

      <ClosingBand
        title={<>Let's make your IT <em>easier to rely on.</em></>}
        text="Tell us what's in place, what's getting in the way, and what you need to be different."
      />
    </>
  );
}

const riseVariant = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
};
