import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { NAV_LINKS } from '../lib/site.js';

export function Header({ pageKey }) {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="wrap nav-wrap">
        <a className="brand" href="/" aria-label="InfraAnchor home">
          <img src="/ia-mark.svg" alt="" width="36" height="36" />
          <span>
            infra<span>anchor</span>
          </span>
        </a>

        <nav className="site-nav" aria-label="Main navigation">
          {NAV_LINKS.map((link) => (
            <a
              key={link.key}
              href={link.href}
              className="nav-link"
              aria-current={link.key === pageKey ? 'page' : undefined}
            >
              {link.label}
            </a>
          ))}
          <a className="nav-cta" href="/contact.html">
            Talk to us <span aria-hidden="true">↗</span>
          </a>
        </nav>

        <button
          className="menu-toggle"
          type="button"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((value) => !value)}
        >
          <span className="sr-only">Toggle navigation</span>
          <span className="menu-toggle-bars" data-open={open} aria-hidden="true" />
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            id="mobile-nav"
            className="mobile-nav"
            aria-label="Mobile navigation"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.3 }}
          >
            {NAV_LINKS.map((link, index) => (
              <motion.a
                key={link.key}
                href={link.href}
                aria-current={link.key === pageKey ? 'page' : undefined}
                initial={{ opacity: 0, x: -16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.05 * index, duration: 0.35 }}
                onClick={() => setOpen(false)}
              >
                {link.label}
              </motion.a>
            ))}
            <a className="mobile-nav-cta" href="/contact.html" onClick={() => setOpen(false)}>
              Talk to us <span aria-hidden="true">↗</span>
            </a>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
