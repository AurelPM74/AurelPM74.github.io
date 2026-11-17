# Working on this repository

This is a **legacy Hugo Academia theme** project (`theme = "academia-hugo"`), not a Hugoplate/Tailwind repository. **Do not** run `project-setup`, change the theme layout conventions to Hugo 0.146+ or assume Tailwind is present. Preserve the custom layout overrides in `layouts/` and the original theme in `themes/academia-hugo/`.

Content is bilingual (`content/en/`, `content/fr/`). The custom homepage talk cards are in `layouts/partials/li_card.html`, the all-talk list in `layouts/talk/list.html`, the contact email reveal in `layouts/partials/widgets/contact.html` and `static/js/reveal-email.js`, and the timeline in `layouts/partials/widgets/experience.html`. See `README-PERSONALIZATION.md` before editing.

For actual local verification, install a compatible **Hugo Extended** build and run `hugo server -D`/`hugo --minify`. This repository's Netlify config pins Hugo 0.163.3; test old theme compatibility. Never publish confidential materials.
