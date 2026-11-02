import { Eyebrow, PageHero } from '../components/PageHero.jsx';
import { Reveal } from '../components/Reveal.jsx';
import { Media } from '../components/Media.jsx';
import { ClosingBand } from '../components/ClosingBand.jsx';
import { IMAGES } from '../lib/images.js';

const CONTEXTS = [
  {
    id: 'small-teams',
    label: '01 / GROWING BUSINESS',
    title: 'When IT has to do more with less',
    text: 'Growing teams need dependable systems without adding layers of complexity they cannot maintain. We help improve the fundamentals and identify the next sensible investment.',
    items: [
      'Microsoft 365 and identity configuration',
      'Network and server reliability',
      'Backup coverage and recovery planning',
      'Documentation and practical operating procedures',
    ],
    image: IMAGES.team,
    alt: 'A team of colleagues planning together in a bright office',
  },
  {
    id: 'it-teams',
    label: '02 / INTERNAL IT',
    title: 'When the environment needs another set of eyes',
    text: 'Internal teams may need focused engineering capacity for a difficult issue, a planned change or an assessment that is hard to fit around daily support.',
    items: [
      'Complex troubleshooting and root-cause work',
      'Hyper-V, Windows Server and storage investigations',
      'Technical review and risk prioritisation',
      'Change planning, implementation and handover',
    ],
    image: IMAGES.sysadmin,
    alt: 'An administrator adjusting tangled network cables',
  },
  {
    id: 'service-providers',
    label: '03 / SERVICE PROVIDER',
    title: 'When a project needs extra technical depth',
    text: 'Service providers can need specialist support for delivery peaks, complex infrastructure or well-defined work that benefits from an engineering-first approach.',
    items: [
      'Project-based infrastructure support',
      'Discovery, assessment and documentation',
      'Implementation assistance and escalation support',
      'Clear scope and practical handover',
    ],
    image: IMAGES.cablesWide,
    alt: 'Networking equipment with cables connected',
  },
];

const FIRST_CONVERSATION = [
  'What is in place today?',
  'What is failing, changing or uncertain?',
  'What constraints do we need to respect?',
  'What would a useful result look like?',
];

export function Industries() {
  return (
    <>
      <PageHero
        eyebrow="WHO WE HELP / CONTEXT MATTERS"
        title={<>Different teams. <em>Real-world constraints.</em></>}
        intro="The right IT answer depends on the people, systems, risks and resources around it. We adapt the work to the environment."
        aside={{
          label: 'STARTING POINT',
          text: 'What are you responsible for? What is getting in the way? What must not break?',
          small: 'CONTEXT BEFORE CHECKLISTS',
        }}
      />

      <section className="section section-tight">
        <div className="wrap">
          <Reveal>
            <div className="section-head">
              <span className="eyebrow-plain">WORKING CONTEXT / 03</span>
              <h2 className="display">Support that fits <em>the situation.</em></h2>
              <p className="lead">
                These are common contexts for the work. The scope is shaped around the actual need, not a fixed package.
              </p>
            </div>
          </Reveal>

          <div className="context-list">
            {CONTEXTS.map((context, index) => (
              <article
                key={context.id}
                id={context.id}
                className={`context-row ${index % 2 === 1 ? 'is-reversed' : ''}`}
              >
                <Reveal className="context-media">
                  <Media src={context.image} alt={context.alt} className="media-wide" />
                </Reveal>
                <Reveal delay={0.12} className="context-copy">
                  <p className="service-kicker">{context.label}</p>
                  <h3 className="display-sm">{context.title}</h3>
                  <p>{context.text}</p>
                  <ul className="check-list">
                    {context.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </Reveal>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="dark-band">
        <div className="wrap split">
          <Reveal>
            <Eyebrow>NO FIXED SCRIPT</Eyebrow>
            <h2 className="display">Start with the reality <em>of your environment.</em></h2>
            <p className="lead">
              We will talk through what you have, what you need to protect, and what a useful outcome would look like.
            </p>
            <a className="btn btn-primary" href="/contact.html">
              Discuss your situation <span aria-hidden="true">↗</span>
            </a>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="panel">
              <p className="panel-label">THE FIRST CONVERSATION</p>
              <ol className="numbered">
                {FIRST_CONVERSATION.map((question) => (
                  <li key={question}>{question}</li>
                ))}
              </ol>
            </div>
          </Reveal>
        </div>
      </section>

      <ClosingBand
        title={<>Need focused help with <em>your environment?</em></>}
        text="We can start with a problem, a planned project or a question you need answered."
      />
    </>
  );
}
