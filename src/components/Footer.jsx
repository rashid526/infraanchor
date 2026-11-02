import { EMAIL, FOOTER_COLUMNS } from '../lib/site.js';

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrap footer-grid">
        <div className="footer-brand">
          <a className="brand" href="/" aria-label="InfraAnchor home">
            <img src="/ia-mark.svg" alt="" width="36" height="36" />
            <span>
              infra<span>anchor</span>
            </span>
          </a>
          <p className="footer-tagline">IT infrastructure, made dependable.</p>
          <p className="footer-muted">Clear thinking for the systems your business relies on.</p>
        </div>

        {FOOTER_COLUMNS.map((column) => (
          <div key={column.title}>
            <h2 className="footer-title">{column.title}</h2>
            <ul className="footer-links">
              {column.links.map((link) => (
                <li key={link.href}>
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div>
          <h2 className="footer-title">Start a conversation</h2>
          <a className="footer-email" href={`mailto:${EMAIL}`}>
            {EMAIL} <span aria-hidden="true">↗</span>
          </a>
          <p className="footer-muted">Practical advice. Thoughtful delivery.</p>
        </div>
      </div>

      <div className="wrap footer-bottom">
        <span>© {new Date().getFullYear()} InfraAnchor</span>
        <span>Independent thinking. Connected infrastructure.</span>
        <a href="/contact.html">Get in touch <span aria-hidden="true">↗</span></a>
      </div>
    </footer>
  );
}
