# InfraAnchor website

A multi-page website for InfraAnchor built with Vite and React, with scroll-based motion and a Field Notes visual direction (warm paper, graphite, steel and signal orange).

## Structure

- `src/pages/` holds one component per page. `src/pages/index.js` maps each page key to its component.
- `src/components/` holds shared pieces: header, footer, page layout, reveal-on-scroll motion, image frames, page heroes and the closing band.
- `src/styles/` holds the design tokens (colours, type, spacing), base styles, shared components and page styles.
- `src/lib/` holds site navigation, contact details and the Pexels image URLs.
- `public/` holds files copied as-is into the build: favicon, logo mark, robots.txt, sitemap.xml and CNAME.
- Each top-level `.html` file is a thin entry point for one page. `vite.config.js` lists them all so each builds to a static page.

## Pages

- Home: `index.html`
- Services: `services.html`
- Who we help: `industries.html`
- About: `about.html`
- Project experience: `work.html`
- Guides and insights: `insights.html`
- Contact: `contact.html`
- Email preferences instructions: `unsubscribe.html`
- Not-found page: `404.html`

## Commands

- `npm install` installs dependencies.
- `npm run build` produces the static site in `dist/`.
- `npm run preview` serves the built site locally.

## Contact form

The contact page posts to FormSubmit and redirects to `https://infraanchor.com/contact.html?sent=1`. The redirect is hardcoded to the live domain, so it must be updated if the site is served from elsewhere. The recipient may need to complete FormSubmit's one-time activation. A successful redirect is not proof that the message reached the inbox, so test delivery from the live site.

## Publishing

The repository contains a `CNAME` file for `infraanchor.com`. Publish the contents of `dist/` after running the build. Hosting and DNS settings must be checked in the hosting account.

## Accessibility

Pages include a skip link, labelled navigation landmarks, a keyboard-accessible mobile menu, visible focus states, and reduced-motion support.
