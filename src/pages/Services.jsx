import { PageHero } from '../components/PageHero.jsx';
import { Reveal } from '../components/Reveal.jsx';
import { Media } from '../components/Media.jsx';
import { ClosingBand } from '../components/ClosingBand.jsx';
import { IMAGES } from '../lib/images.js';

const SERVICES = [
  {
    id: 'microsoft',
    index: '01',
    kicker: 'CLOUD',
    title: 'Microsoft & cloud',
    description: 'Keep identity, collaboration and cloud services manageable, secure and aligned with the way your team works.',
    link: { label: 'Discuss Microsoft services', href: '/contact.html' },
    work: [
      'Microsoft 365 configuration and administration',
      'Entra ID identity, access and sign-in issues',
      'Exchange Online, Teams and collaboration troubleshooting',
      'Tenant review, baseline and documentation',
    ],
    outcome: 'A clearer, more supportable cloud environment.',
    image: IMAGES.circuits,
    alt: 'Glowing digital circuit lines on a dark background',
  },
  {
    id: 'infrastructure',
    index: '02',
    kicker: 'PLATFORM',
    title: 'Servers, virtualisation & networks',
    description: 'Understand the platform beneath applications and users, then improve reliability where it matters.',
    link: { label: 'Discuss infrastructure', href: '/contact.html' },
    work: [
      'Windows Server and Hyper-V environments',
      'Cluster, storage and virtual machine assessment',
      'LAN, VLAN, routing, switching and Wi-Fi troubleshooting',
      'Performance investigation and capacity planning',
    ],
    outcome: 'Better visibility into dependencies, performance and risk.',
    image: IMAGES.rackClose,
    alt: 'Close view of rack-mounted server units',
  },
  {
    id: 'security',
    index: '03',
    kicker: 'CONTROL',
    title: 'Identity & security',
    description: 'Make access and protective controls easier to understand, validate and maintain.',
    link: { label: 'Discuss security posture', href: '/contact.html' },
    work: [
      'Identity and privileged-access review',
      'Server and endpoint baseline checks',
      'Firewall and network-path troubleshooting',
      'Operational visibility and actionable findings',
    ],
    outcome: 'Clearer control coverage and a prioritised improvement path.',
    image: IMAGES.cables,
    alt: 'Blue ethernet cables plugged into a network switch',
  },
  {
    id: 'resilience',
    index: '04',
    kicker: 'CONTINUITY',
    title: 'Backup & recovery',
    description: 'Backup success is only one part of resilience. Understand coverage, retention, dependencies and the path back to service.',
    link: { label: 'Review recovery readiness', href: '/contact.html' },
    work: [
      'Backup coverage and job-health review',
      'Restore-readiness and recovery documentation',
      'Critical workload and dependency identification',
      'Retention, immutability and operational checks',
    ],
    outcome: 'A more explicit and testable recovery approach.',
    image: IMAGES.storage,
    alt: 'A stack of hard disk drives for digital storage',
  },
  {
    id: 'projects',
    index: '05',
    kicker: 'DELIVERY',
    title: 'Technical projects & support',
    description: 'Bring in focused engineering help for an investigation, a planned change or a piece of work that needs extra depth.',
    link: { label: 'Scope a project', href: '/contact.html' },
    work: [
      'Technical discovery and infrastructure assessment',
      'Migration and implementation planning',
      'Complex incident investigation and root-cause analysis',
      'Runbooks, diagrams, handover and knowledge transfer',
    ],
    outcome: 'Work that is scoped, understandable and easier to support.',
    image: IMAGES.technician,
    alt: 'A technician installing electronic hardware',
  },
];

const PROCESS_STEPS = [
  { n: '01', title: 'Discover', text: 'Collect context, map dependencies and agree the desired outcome.' },
  { n: '02', title: 'Plan', text: 'Set scope, identify risk and agree how success will be verified.' },
  { n: '03', title: 'Deliver', text: 'Make the change or investigation with continuity in mind.' },
  { n: '04', title: 'Hand over', text: 'Record results, open items and useful next actions.' },
];

function ServiceEntry({ service, reverse }) {
  return (
    <article id={service.id} className={`service-entry ${reverse ? 'is-reversed' : ''}`}>
      <div className="wrap service-grid">
        <Reveal className="service-copy">
          <p className="service-kicker">
            <span className="service-index">{service.index}</span> / {service.kicker}
          </p>
          <h2 className="display">{service.title}</h2>
          <p className="lead">{service.description}</p>
          <div className="service-work">
            <h3>Typical work</h3>
            <ul>
              {service.work.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <p className="service-outcome">
            <span>Outcome</span> {service.outcome}
          </p>
          <a className="text-link" href={service.link.href}>
            {service.link.label} <span aria-hidden="true">→</span>
          </a>
        </Reveal>
        <Reveal delay={0.15} className="service-media">
          <Media src={service.image} alt={service.alt} className="media-tall" />
        </Reveal>
      </div>
    </article>
  );
}

export function Services() {
  return (
    <>
      <PageHero
        eyebrow="CAPABILITIES / SERVICE INDEX"
        title={<>Strong systems. <em>Thoughtful engineering.</em></>}
        intro="Technical services for the systems your people depend on, delivered with context, careful change and clear documentation."
        aside={{
          label: 'OPERATING PRINCIPLE / 01',
          text: 'Start with the environment. Recommend only what fits. Leave the next person with a clearer picture.',
          small: 'INFRAANCHOR / SERVICES',
        }}
      >
        <a className="btn btn-primary btn-lg" href="/contact.html">
          Discuss a requirement <span aria-hidden="true">↗</span>
        </a>
      </PageHero>

      <section className="section section-tight">
        <div className="wrap">
          <Reveal>
            <div className="section-head">
              <span className="eyebrow-plain">SERVICE CATALOGUE / 05 AREAS</span>
              <h2 className="display">Connected disciplines. <em>Practical outcomes.</em></h2>
              <p className="lead">
                Infrastructure rarely fails in isolation. Our service areas are designed to account for the dependencies between people, platforms and recovery.
              </p>
            </div>
          </Reveal>
        </div>
        {SERVICES.map((service, index) => (
          <ServiceEntry key={service.id} service={service} reverse={index % 2 === 1} />
        ))}
      </section>

      <section className="process">
        <div className="wrap">
          <Reveal>
            <div className="section-head">
              <span className="eyebrow-plain">DELIVERY / FROM FIRST LOOK TO HANDOVER</span>
              <h2 className="display">Work with a clear <em>beginning and end.</em></h2>
              <p className="lead">
                Good technical work should leave you with more than a change ticket. It should leave a clearer picture of what was done and why.
              </p>
            </div>
          </Reveal>
          <div className="process-track">
            <span className="process-line" aria-hidden="true" />
            <ol className="process-steps">
            {PROCESS_STEPS.map((step, index) => (
              <li key={step.n} className="process-step">
                <Reveal delay={index * 0.12}>
                  <span className="process-node" aria-hidden="true">{step.n}</span>
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </Reveal>
              </li>
            ))}
            </ol>
          </div>
        </div>
      </section>

      <ClosingBand
        title={<>Have a specific <em>technical challenge?</em></>}
        text="Start with the symptoms, the constraints and the outcome you need. We can help scope the work."
      />
    </>
  );
}
