import { PageHero } from '../components/PageHero.jsx';
import { Reveal } from '../components/Reveal.jsx';
import { ClosingBand } from '../components/ClosingBand.jsx';
import { Eyebrow } from '../components/PageHero.jsx';
import { IMAGES } from '../lib/images.js';

const WORK_AREAS = [
  {
    code: '01 ASSESS',
    tag: 'VISIBILITY',
    title: 'Infrastructure discovery & health review',
    text: 'Build a grounded picture of servers, virtual machines, storage, network paths, operating systems, dependencies and operational risk.',
    items: ['Inventory and topology', 'Findings by priority', 'Capacity and lifecycle observations', 'Recommended next steps'],
    image: IMAGES.heroRack,
    alt: 'Server racks in a data centre under blue light',
  },
  {
    code: '02 INVESTIGATE',
    tag: 'DIAGNOSIS',
    title: 'Complex troubleshooting',
    text: 'Follow symptoms through the stack, from connectivity and authentication to platform, application and policy, to narrow the cause rather than repeatedly treating the symptom.',
    items: ['Evidence and timeline', 'Root-cause findings where established', 'Remediation plan', 'Validation checks'],
    image: IMAGES.cables,
    alt: 'Ethernet cables plugged into a network switch',
  },
  {
    code: '03 PROTECT',
    tag: 'CONTINUITY',
    title: 'Backup & recovery readiness',
    text: 'Review whether important workloads are covered, how recovery depends on other systems and what needs to be verified before an incident.',
    items: ['Coverage gaps', 'Recovery dependencies', 'Restore validation plan', 'Runbook improvements'],
    image: IMAGES.storage,
    alt: 'A stack of hard disk drives',
  },
  {
    code: '04 DELIVER',
    tag: 'CHANGE',
    title: 'Planned change & implementation',
    text: 'Support a migration, configuration change or infrastructure improvement with scope, risk, rollback and handover considered from the start.',
    items: ['Implementation plan', 'Pre-change baseline', 'Verification and rollback steps', 'As-built documentation'],
    image: IMAGES.circuits,
    alt: 'Glowing digital circuit lines',
  },
];

const SUCCESS_CHECKS = [
  'The problem and scope are understood',
  'Risk and dependencies are considered',
  'Outcomes are checked against the goal',
  'Open items and follow-up work are recorded',
];

export function Work() {
  return (
    <>
      <PageHero
        eyebrow="PROJECT EXPERIENCE / DELIVERY"
        title={<>Make the complex <em>understandable.</em></>}
        intro="A view into the kinds of technical work InfraAnchor supports, from environment discovery to troubleshooting, implementation and handover."
        aside={{
          label: 'DELIVERY STANDARD',
          text: 'Clear scope. Evidence-led investigation. Changes you can explain. Records you can reuse.',
          small: 'PROJECT / PRACTICE',
        }}
      />

      <section className="section section-tight">
        <div className="wrap">
          <Reveal>
            <div className="section-head">
              <span className="eyebrow-plain">WORK AREAS / ILLUSTRATIVE</span>
              <h2 className="display">Technical work with <em>a purpose.</em></h2>
              <p className="lead">
                The examples below describe work areas and deliverables, not claims about named clients or guaranteed results.
              </p>
            </div>
          </Reveal>

          <div className="work-grid">
            {WORK_AREAS.map((area, index) => (
              <Reveal key={area.code} delay={(index % 2) * 0.1}>
                <article className="work-card">
                  <div className="work-media">
                    <img src={area.image} alt={area.alt} loading="lazy" decoding="async" />
                    <span className="work-code">{area.code}</span>
                  </div>
                  <div className="work-body">
                    <p className="service-kicker">{area.tag}</p>
                    <h3>{area.title}</h3>
                    <p>{area.text}</p>
                    <p className="work-sub">Possible deliverables</p>
                    <ul className="check-list">
                      {area.items.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="dark-band">
        <div className="wrap split">
          <Reveal>
            <Eyebrow>HOW WE DEFINE SUCCESS</Eyebrow>
            <h2 className="display">A result is more than <em>"it works now."</em></h2>
            <p className="lead">
              A useful engagement should leave a better understanding of the environment and a clear record of what changed.
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <ul className="success-list">
              {SUCCESS_CHECKS.map((item) => (
                <li key={item}>
                  <span className="success-tick" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <ClosingBand
        title={<>Have a project that needs <em>a steady hand?</em></>}
        text="Share the goal, the current state and the constraints. We can work out a sensible scope together."
      />
    </>
  );
}
