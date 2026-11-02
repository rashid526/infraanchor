# InfraAnchor website

A responsive, multi-page static website for InfraAnchor, built with plain HTML, CSS and a small JavaScript file. The current visual direction is **Field Notes**: mineral paper, graphite, steel and restrained signal orange, with infrastructure diagrams, service ledgers and editorial-style technical guidance. The original IA logo geometry is retained and recoloured to match this palette.

There is no database, server runtime, CMS or build step. The site is served as static files.

## Pages

- Home: `index.html`
- Services: `services.html`
- Who we help: `industries.html`
- About: `about.html`
- Project experience: `work.html`
- Guides and insights: `insights.html`
- Contact: `contact.html`
- Custom not-found page: `404.html`
- Email preferences instructions: `unsubscribe.html`

## Shared assets

- `assets/fieldwork.css` — current design system and responsive layouts
- `assets/site.js` — mobile navigation, footer year and contact-form status
- `assets/ia-mark.svg` — brand mark
- `assets/favicon.svg` — browser icon

The HTML pages should reference `fieldwork.css?v=field-notes-1` and `site.js?v=field-notes-1`. Update the query string when deploying a breaking asset change if client-side caching prevents the new version from appearing.

The older `assets/styles.css` and `assets/premium.css` files are legacy assets from the previous design and are not linked by the current pages.

## Preview locally

Open `index.html` in a browser or serve this directory with any static file server. Google Fonts are loaded as an enhancement; system-font fallbacks are defined in the stylesheet.

## Publishing

The repository contains a `CNAME` file for `infraanchor.com`. The actual hosting provider, deployment status and DNS/HTTPS configuration must be checked in the hosting account; a repository commit alone does not prove that the live domain has updated.

For GitHub Pages, publish from the repository root on the configured branch and follow GitHub's domain/DNS instructions. For another static host, configure the repository root as the publish directory and follow that provider's custom-domain instructions.

## Contact form

The contact page posts to FormSubmit and redirects to `https://infraanchor.com/contact.html?sent=1`. The recipient may need to complete FormSubmit's one-time activation/confirmation. A successful redirect is not independent proof that the message reached the inbox, so test delivery from the live site. Submissions are processed by FormSubmit; the contact page links to its privacy policy. Visitors are told not to include passwords or sensitive access details.

The email-preferences page provides instructions to request removal by email; it is not an automated mailing-list unsubscribe integration.

## Accessibility and maintenance

The pages include a skip link, semantic navigation landmarks, mobile navigation controls, and reduced-motion handling. Keep page navigation and shared header/footer consistent when adding pages. Check keyboard focus, mobile layout, internal links and the live contact form after publishing.
