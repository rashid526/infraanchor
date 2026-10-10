# InfraAnchor website

A responsive, multi-page static website for InfraAnchor, built with plain HTML, CSS and a small JavaScript file. The cinematic blue/cyan design system is shared across all pages. No database, server runtime, CMS or build step is needed.

## Pages

- Home: `index.html`
- Services: `services.html`
- Who we help: `industries.html`
- About: `about.html`
- Work: `work.html`
- Guides: `insights.html`
- Contact: `contact.html`

## Preview locally

Open `index.html` in a browser or serve this folder with any static file server. Google Fonts are an optional external enhancement; system fonts provide a fallback.

## Publish

Publish the contents of this folder from the `main` branch and repository root in GitHub Pages, or upload them to another static host such as Cloudflare Pages. Connect `infraanchor.com` and `www.infraanchor.com` in the host settings, apply that provider’s DNS instructions at the registrar, and enable HTTPS.

## Contact form

The contact page posts to FormSubmit and returns visitors to the contact page after submission. It does not need a database or server runtime. FormSubmit requires a one-time recipient confirmation on the first submission. The form shows a confirmation notice if the service requests activation. Submissions are processed by FormSubmit; see its privacy policy linked on the contact page. Do not put passwords, private API keys or sensitive access information in the form.

## Extend

Copy a page, keep the shared header and footer, and add it to the navigation. Add service detail sections with IDs to `services.html`; the home page links to those sections.
