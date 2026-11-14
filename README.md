# InfraAnchor website

Responsive static website built with HTML, CSS and JavaScript. `index.html` is the homepage; no build step is required.

## Pages

- `index.html` — Home
- `services.html` — Service directory
- `cloud-workplace.html` — Cloud and workplace support
- `infrastructure.html` — Infrastructure and networks
- `cybersecurity.html` — Cybersecurity and access
- `backup.html` — Backup and continuity
- `automation.html` — Automation and project support
- `approach.html` — How we work
- `experience.html` — Company capabilities
- `about.html` — About InfraAnchor
- `contact.html` — Contact

## Shared assets

- `assets/site.css` — Shared styles and homepage layout
- `assets/pages.css` — Page layouts and service illustrations
- `assets/site.js` — Navigation, scroll effects, service filters and contact form submission
- `assets/contact-config.js` — Contact form endpoint configuration

## Publishing

Publish the repository root as a static site. The `CNAME` file points to `infraanchor.com`; keep it in place when publishing. No package installation or build command is needed.

## Contact

The contact page submits enquiries through FormSubmit to the existing public contact address and keeps a direct email fallback. If FormSubmit requests activation, confirm its one-time email before expecting submissions to be forwarded.
