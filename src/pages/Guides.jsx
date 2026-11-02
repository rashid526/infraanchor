import { PageHero } from '../components/PageHero.jsx';
import { Reveal } from '../components/Reveal.jsx';
import { ClosingBand } from '../components/ClosingBand.jsx';

const GUIDES = [
  {
    meta: '01 / CHANGE CONTROL | CHECKLIST',
    title: 'Before you change a production system',
    excerpt: 'Capture the current state, map dependencies, agree the maintenance window, prepare a rollback and define how you will verify success.',
    items: [
      'Record current configuration and health',
      'Confirm owners, impact and dependencies',
      'Prepare and validate rollback steps',
      'Set a post-change verification window',
    ],
  },
  {
    meta: '02 / BACKUP & RECOVERY | REVIEW',
    title: 'What to check in a backup assessment',
    excerpt: 'Move beyond green job status. Check coverage, retention, immutability where required, workload consistency and the practical path to restore.',
    items: [
      'Identify critical systems and recovery targets',
      'Check exclusions and application-aware settings',
      'Review job failures, capacity and retention',
      'Plan a restore test and record evidence',
    ],
  },
  {
    meta: '03 / HYPER-V | OPERATIONS',
    title: 'Building a useful virtualisation inventory',
    excerpt: 'Inventory should help answer operational questions: what runs where, what it depends on, how it is protected and where capacity is tightening.',
    items: [
      'VM, host, cluster and storage relationships',
      'CPU, memory and disk trends over time',
      'Checkpoint, integration and backup status',
      'Lifecycle risks and unknowns',
    ],
  },
  {
    meta: '04 / IDENTITY | BASELINE',
    title: 'Reviewing identity and access',
    excerpt: 'Understand how users authenticate, where privilege is assigned and whether access practices match the organisation\'s risk and support model.',
    items: [
      'Privileged roles and account ownership',
      'MFA and sign-in controls',
      'Joiner, mover and leaver processes',
      'Break-glass access and review cadence',
    ],
  },
  {
    meta: '05 / NETWORKING | DIAGNOSIS',
    title: 'A structured approach to connectivity issues',
    excerpt: 'Test the path in layers before changing configuration. Separate name resolution, routing, filtering, listening services and application behaviour.',
    items: [
      'Confirm source, destination and expected port',
      'Check DNS and route selection',
      'Validate listeners and firewall policy',
      'Capture evidence before remediation',
    ],
  },
  {
    meta: '06 / DOCUMENTATION | HANDOVER',
    title: 'What a useful runbook should contain',
    excerpt: 'A runbook should help another engineer safely repeat a task, recognise failure and know when to stop and escalate.',
    items: [
      'Purpose, prerequisites and scope',
      'Numbered steps with expected results',
      'Failure paths and escalation points',
      'Validation, rollback and ownership',
    ],
  },
];

export function Guides() {
  return (
    <>
      <PageHero
        eyebrow="FIELD NOTES / PRACTICAL GUIDANCE"
        title={<>Technical detail, <em>without the fog.</em></>}
        intro="Useful notes for people responsible for keeping IT running: checklists, decision points and operational habits that stand up outside a slide deck."
        aside={{
          label: 'EDITORIAL RULE',
          text: 'Be specific. Explain the trade-offs. Make the next action clear.',
          small: 'FIELD NOTES / IA',
        }}
      />

      <section className="section section-tight">
        <div className="wrap">
          <Reveal>
            <div className="section-head">
              <span className="eyebrow-plain">GUIDE INDEX / OPERATIONS</span>
              <h2 className="display">Reference material for <em>real work.</em></h2>
              <p className="lead">
                Use these starting points to structure an investigation or review. Always validate against your own platform, policies and change process.
              </p>
            </div>
          </Reveal>

          <ol className="guide-list">
            {GUIDES.map((guide, index) => (
              <li key={guide.title}>
                <Reveal delay={(index % 3) * 0.08}>
                  <article className="guide">
                    <span className="guide-number">{String(index + 1).padStart(2, '0')}</span>
                    <div className="guide-body">
                      <p className="service-kicker">{guide.meta}</p>
                      <h3>{guide.title}</h3>
                      <p>{guide.excerpt}</p>
                    </div>
                    <ul className="guide-items">
                      {guide.items.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </article>
                </Reveal>
              </li>
            ))}
          </ol>

          <Reveal>
            <p className="disclaimer">
              These notes are general guidance, not a substitute for vendor documentation, environment-specific testing or an approved change process.
            </p>
          </Reveal>
        </div>
      </section>

      <ClosingBand
        title={<>Need help applying a checklist <em>to your environment?</em></>}
        text="We can help turn broad guidance into a practical assessment or an actionable plan."
      />
    </>
  );
}
