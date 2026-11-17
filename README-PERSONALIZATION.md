# Aurel Pichollet--Mugnier | Website customization (version 5)

This version preserves the **original Academia visual theme** (strawberry palette, classic typography, initial dark mode, light/dark toggle, education timeline and About/CV button). The homepage features the latest three talk **cards**, but the dedicated **All talks** page is a clean, chronological **list** (no cards). Default site language is English (`/`); French is available at `/fr/`.

## Content and navigation

- **Introduction and advisor links:** `content/en/authors/admin/_index.md` and `content/fr/authors/admin/_index.md`. These link to Patrick Derbez, André Schrottenloher, Zoé Amblard, Inria and CAPSULE.
- **Education timeline:** `content/{en,fr}/home/experience.md`. The visual timeline component is unchanged. It now links the EPFL bachelor thesis PDF, ETH master thesis PDF, ETH presentation slides, and thesis supervisors.
- **Bordeaux master:** explicitly **confidential**, no downloadable thesis report.
- **ETH semester project (2019):** [*Grothendieck Topology and Sheaves*](/files/grothendieck-topology-and-sheaves-2019.pdf), supervised by Prof. Peter Jossen; PDF now included.
- **Latest homepage talks:** `content/{en,fr}/home/talks.md`. Original card appearance retained; shows **date + event**, but not author name or time of day. Three recent events appear; change `count` to adjust. The **All talks** link follows the localized archive.
- **All talks archive:** `layouts/talk/list.html` (simple list), populated automatically from `content/{en,fr}/talk/*/index.md`, with event URLs and slides/poster buttons when available.
- **Talk detail pages:** retain the Academia look, with a slide/poster download button; `layouts/talk/single.html`.
- **Journal article and preprint:** `content/{en,fr}/publication/*/index.md`. The new ePrint 2026/930 has an abstract summary, PDF link, and a matching `cite.bib` for the standard Academia Cite dialog.
- **Teaching:** `content/en/teaching/_index.md` and `content/fr/teaching/_index.md` now list three teaching assistantships: Introduction to Historical Cryptology (Spring 2026, first-year Computer Science), Introduction to Imperative Programming (Fall 2026, first-year Mathematics) and Basic Cryptology (Fall 2026, first-year Master's in Cybersecurity). Edit either Markdown file to update the corresponding language version. No university affiliation or public course materials have been invented.

## Talks and attachments

| Talk or session | Date | Available file(s) |
|---|---|---|
| European Cyber Week (poster + teaser) | 19 November 2026 | `static/files/ecw-2026-poster.pdf`, `static/files/ecw-2026-teaser.pdf` |
| THALES Quantum Algorithms & Computing Seminar | **7 October 2025** | **Confidential; no slides published** |
| FSE 2026, Singapore | 27 March 2026 | `static/files/fse-2026-slides.pdf` |
| JC2 2026 | 31 March 2026 | `static/files/jc2-2026-slides.pdf` |
| JIQ 2026 | 15 January 2026 | `static/files/jiq-2026-slides.pdf` |
| CAPSLOCK internal seminar, Inria Rennes | 15 January 2025 | `static/files/capslock-ascon-2025-slides.pdf` |
| ETH master’s thesis presentation | 17 March 2021 | `static/files/eth-master-thesis-presentation-2021.pdf` (optimized, 1.1 MB) |

**THALES:** Confirmed as 7 October 2025. The exact title is still not provided; the original seminar name remains the entry heading. Slides remain confidential and are not published.

**CAPSLOCK:** New slides provided and linked in both languages (`static/files/capslock-ascon-2025-slides.pdf`).

## Contact email — source obfuscation, not absolute anti-scraping

The contact **form has been removed**. Contact now consists of a **Reveal email address** button and social icons. The email is reconstructed only after a real click using an encoded code-point array in `static/js/reveal-email.js`. There is no plain-text email or `mailto:` address in generated HTML or author front matter. This defeats simple regex-based HTML scrapers, **but cannot prevent more capable bots from running JavaScript or decoding the script**.

To edit the email, update the source address in the helper script that generated `static/js/reveal-email.js`, or regenerate its numeric array using this one-liner (the current address is not stored as plain text in the deployed website):

```python
address = "<your new address>"
print([(ord(c) + 13) % 256 for c in address[::-1]])
```

Replace the `codes` array in `static/js/reveal-email.js`. `config/_default/params.toml` has a **blank `email` parameter on purpose**; do not put a plain email in that config if you want to keep the obfuscation.

## Profile links and résumé

- LinkedIn, Google Scholar and ORCID URLs are set in `data/social_links.toml` and shared by English/French views. The malformed `hl=fror` Scholar language parameter was omitted; the profile ID is preserved.
- The **Download Resume** button stays under the introduction. Add the English résumé to **`static/files/cv-en.pdf`** and the French résumé to **`static/files/cv-fr.pdf`**. The corresponding buttons are wired in `content/en/authors/admin/_index.md` and `content/fr/authors/admin/_index.md`. A missing file leaves only that language’s download button disabled.

## Domain, deployment and preview

**GitHub Pages (free, public repository):** Create a repository named `<your-github-username>.github.io`, upload the **contents of the `academia-hugo/` folder** (not its enclosing folder), then go to **Settings → Pages → Source: GitHub Actions**. The project includes `.github/workflows/main.yml` to build the site with Hugo Extended and deploy on every push to `main`. The workflow supplies GitHub’s site URL as the Hugo `baseURL`, so you can start before buying a domain. Do not upload confidential reports.

**Custom domain later:** Buy `example.com`; in the repository’s **Settings → Pages → Custom domain**, enter it and save. Then add the DNS records at the registrar (four `A` records for the apex domain, and a `www` `CNAME` pointing to `<username>.github.io`). Choose `Enforce HTTPS` once GitHub makes the option available. GitHub Actions publishing does **not** require a CNAME file. GitHub’s docs: https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site

**Recommended**: Use the `<username>.github.io` repository naming convention so the site’s existing root-relative asset and PDF links also work on its initial GitHub URL. If using a different repository name, the initial URL includes a `/repository/` path and root-relative links will require adjustments. You may change `baseURL` in `config/_default/hugo.toml` once you know the custom domain; the GitHub Actions workflow overrides this during deployment.

This is a **legacy Hugo Academia** site; use a compatible **Hugo Extended** build. The included `netlify.toml` requests Hugo 0.163.3, but an actual Hugo build has not been run in this environment. Run `hugo server -D` locally to preview, then `hugo --minify` to build. Test both languages, the email reveal button, publication Cite actions, slides and dark-mode toggle.

## Still to supply or confirm

1. Exact title of the THALES talk (7 October 2025); slides remain confidential.
2. English and French résumé PDFs (`cv-en.pdf` and `cv-fr.pdf`).
3. Optional teaching details (university, course links, resources) and a custom domain when ready.
