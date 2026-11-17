# Adding a publication

1. Create `content/en/publication/YOUR-PAPER/index.md` and `content/fr/publication/YOUR-PAPER/index.md`.
2. Copy the front matter below into each file and replace every placeholder.
3. Put `cite.bib` (and optionally `paper.pdf`) in **each** paper directory. The built-in Cite button appears automatically when a valid `cite.bib` is present.
4. The homepage automatically lists **all** published papers, newest first. The title links to a detail page with the abstract and metadata.

```yaml
---
title: "[Paper title]"
authors: ["Your Name", "Coauthor Name"]
date: "2026-01-01"
publication_types: ["1"] # 1 conference, 2 journal, 3 preprint, 7 thesis
publication: "[Journal or conference venue]"
abstract: "[Full abstract]"
summary: "[One-line summary, optional]"
doi: "" # e.g. 10.xxxx/xxxxx
url_pdf: "" # optional; can also use a bundled PDF
---
```

Example `cite.bib` (replace all fields with real bibliographic data):

```bibtex
@inproceedings{replace-with-key,
  title   = {[Paper title]},
  author  = {[Surname, Given] and [Surname, Given]},
  booktitle = {[Conference proceedings]},
  year    = {2026}
}
```
