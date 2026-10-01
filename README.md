# InfraAnchor website

A lightweight, responsive, multi-page static website for InfraAnchor. It uses plain HTML, CSS and a small JavaScript file. No database, server runtime, CMS or build step is needed.

## Pages

- Home: `index.html`
- Services: `services.html`
- Who we help: `industries.html`
- About: `about.html`
- Guides: `insights.html`
- Contact: `contact.html`

## Preview locally

Open `index.html` in a browser or serve this folder with any static file server. Google Fonts are an optional external enhancement; system fonts provide a fallback.

## Publish

Publish the contents of this folder from the `main` branch and repository root in GitHub Pages, or upload them to another static host such as Cloudflare Pages. Connect `infraanchor.com` and `www.infraanchor.com` in the host settings, apply that provider’s DNS instructions at the registrar, and enable HTTPS.

## Contact form setup

The contact page is ready for direct form submission through Formspree. It does not need a database or server. To enable delivery:

1. Create a Formspree form and set its recipient to `rashid@infraanchor.com`.
2. Verify the recipient address in Formspree.
3. Copy the form ID into `window.INFRAANCHOR_FORMSPREE_ID` in `assets/contact-config.js`.
4. Publish the updated files and test the form from the live domain.

Formspree receives and stores submissions in its dashboard as well as forwarding them to the configured inbox. Until the form ID is added, the page offers a mail-app fallback and a direct email link. The form ID is a public endpoint identifier; do not put passwords or private API keys in static files. Visitors should not submit passwords or sensitive access information.

## Extend

Copy a page, keep the shared header and footer, and add it to the navigation. Add service detail sections with IDs to `services.html`; the home page links to those sections.
