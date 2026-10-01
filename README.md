# InfraAnchor website

A lightweight, responsive, multi-page static website for InfraAnchor. It uses plain HTML, CSS and a small JavaScript file—no database, server runtime, CMS, or build step is needed.

## Pages

- Home: `index.html`
- Services: `services.html`
- Who we help: `industries.html`
- About: `about.html`
- Guides: `insights.html`
- Contact: `contact.html`

## Preview locally

Open `index.html` in a browser, or serve this folder with any static file server. All site files and shared assets are self-contained in this folder. Google Fonts are an optional external enhancement; system fonts provide a fallback.

## Deploy to infraanchor.com

Upload the contents of this folder to the public document root of any static hosting provider, then connect `infraanchor.com` and `www.infraanchor.com` in the host's domain settings and apply its DNS instructions at the registrar. Enable HTTPS in the host's settings. No DNS records are included here because they depend on the hosting provider.

The contact form uses `mailto:` to prepare a message in the visitor's email application; it does not send or store form submissions. To collect form submissions later, connect a hosted form endpoint or add a backend.

## Extend

Copy a page, keep the shared header and footer, and link it from the navigation. Add service detail sections with IDs to `services.html`; the home page links directly to the existing sections.

