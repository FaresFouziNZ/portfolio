# Fares Alnzlawe — Portfolio

Terminal-themed portfolio for Fares Alnzlawe. Dark CRT aesthetic, monospaced
throughout, animated section reveals, and a sticky command-style nav.

## Stack

- **Next.js 14** App Router with static export (`output: 'export'`)
- **Tailwind CSS 3** for styling (custom terminal palette)
- **Framer Motion** for entrance + interaction animations
- **JetBrains Mono** via `next/font`
- **lucide-react** for outline icons

## Local development

```bash
npm install
npm run dev
# open http://localhost:3000
```

## Deployment

The site is statically exported (`output: 'export'`). It is host-agnostic
because the `basePath` is read from the `NEXT_PUBLIC_BASE_PATH` env var.

### Vercel (or any host serving from the domain root)

Push to the connected branch — Vercel runs `next build` and serves the `out/`
folder. **Leave `NEXT_PUBLIC_BASE_PATH` unset.** No further config needed.

### GitHub Pages (served at `<user>.github.io/portfolio/`)

```bash
npm run deploy:gh-pages
```

That runs the build with `NEXT_PUBLIC_BASE_PATH=/portfolio` (via `cross-env`,
so it works on Windows too) and pushes the resulting `out/` folder to the
`gh-pages` branch via the `gh-pages` package.

### Other sub-paths

Set the env var to whatever sub-path your host serves from:

```bash
NEXT_PUBLIC_BASE_PATH=/my-cv npm run build
```

### Optional: custom canonical URL for OG cards

If you want LinkedIn / Twitter previews to point at a specific URL (not the
Vercel preview domain), set `NEXT_PUBLIC_SITE_URL`:

```bash
# in .env.production.local or your host's env settings
NEXT_PUBLIC_SITE_URL=https://faresalnzlawe.dev
```

## Project structure

```
app/
  layout.tsx           Root layout, fonts, OG metadata, CRT overlay stack
  page.tsx             Page composition

lib/
  data.ts              Single source of truth - bio, projects, jobs, skills
  asset.ts             basePath-aware path helper for public/ files
  utils.ts             cn() class merger

components/
  CommandNav.tsx       Sticky terminal-tab nav + mobile command palette
  terminal/
    Window.tsx         Terminal window chrome (title + path bar)
    Prompt.tsx         user:~/path $ prefix
    Cursor.tsx         Blinking caret (block/bar/underscore)
    Typewriter.tsx     Character-by-character text reveal
    ASCIIBox.tsx       Labelled bordered region for skill clusters
  sections/
    Hero.tsx           Full-viewport identity card with framed avatar
    About.tsx          Bio in a terminal window
    Experience.tsx     Timeline of roles with company logos
    Projects.tsx       Expandable file-tree of project READMEs
    Skills.tsx         3x2 grid of ASCII-boxed clusters
    Extras.tsx         Expandable rows for leadership / hackathons / certs
    Contact.tsx        Channel cards (email, github, linkedin, resume)

public/assets/         All images (avatar, logos, og.png) — hosted locally
```

**To update CV content:** edit `lib/data.ts`. Every section reads from
that file — no copy lives in components.

## Notes

- All copy is sourced verbatim from the previous portfolio — no placeholder
  text and no fabricated projects/roles.
- The CRT overlay (scanlines + vignette + slow scan beam) respects
  `prefers-reduced-motion`.
- Mobile-first: nav collapses to a `[ ≡ ]` bracket-button that opens a
  command palette overlay; cards reflow; tap targets are 44px+.
- All 11 images are hosted in `public/assets/` — no external CDN dependencies.
