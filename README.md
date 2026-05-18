# Fares Alnzlawe — Portfolio (v2)

A terminal-themed portfolio for Fares Alnzlawe. Dark CRT aesthetic, monospaced
throughout, boot sequence hero, animated section reveals, and a sticky
command-style nav.

## Stack

- **Next.js 14** App Router with static export (`output: 'export'`)
- **Tailwind CSS 3** for styling (custom terminal palette)
- **Framer Motion** for entrance + interaction animations
- **JetBrains Mono** via `next/font` for consistent type
- **lucide-react** for outline icons

## Local development

```bash
npm install
npm run dev
# open http://localhost:3000
```

## Project structure

```
app/
  layout.tsx           Root layout, fonts, CRT overlay stack
  page.tsx             Page composition

lib/
  data.ts              Single source of truth — bio, projects, jobs, skills
  utils.ts             cn() class merger

components/
  CommandNav.tsx       Sticky terminal-tab nav with active-section tracking
  terminal/
    Window.tsx         Terminal window chrome (traffic lights, title bar)
    Prompt.tsx         user@host:~/path $ prefix
    Cursor.tsx         Blinking caret (block/bar/underscore)
    Typewriter.tsx     Character-by-character text reveal
    ASCIIBox.tsx       Labelled bordered region for skill clusters
  sections/
    Hero.tsx           Boot sequence + ASCII banner + identity card
    About.tsx          Bio in a terminal window
    Projects.tsx       Expandable file-tree of project READMEs
    Experience.tsx     git log --oneline timeline
    Skills.tsx         ASCII-boxed clusters
    Extras.tsx         tail -f achievements.log
    Contact.tsx        ./connect --to fares
```

**To update CV content:** edit `lib/data.ts` only. Every section reads from
that file — no copy lives in components.

## Deployment

The site is statically exported (`output: 'export'`) and built with
`basePath: '/portfolio'` to match the existing GitHub Pages URL
`https://faresfouzinz.github.io/portfolio/`.

```bash
npm run deploy
```

That command runs `next build` (which writes static HTML/JS/CSS to `out/`),
then pushes the contents to the `gh-pages` branch via the `gh-pages` package.

## Notes

- All copy is sourced verbatim from the previous portfolio — no placeholder
  text and no fabricated projects/roles.
- The CRT overlay (scanlines + vignette + slow scan beam) respects
  `prefers-reduced-motion` and falls back to a static look.
- Mobile-first: ASCII banner swaps to a compact variant under 640px,
  nav scrolls horizontally instead of wrapping, project rows collapse.
