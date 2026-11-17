# Adding a talk

1. Create matching files `content/en/talk/YOUR-TALK/index.md` and `content/fr/talk/YOUR-TALK/index.md`.
2. Fill in your talk's title, date, event name, event URL, and optional slides.
3. Store slides directly in the talk bundle and set `url_slides: "slides.pdf"`, or set an external URL.
4. Every published talk appears on the homepage with its event and any available slides.

```yaml
---
title: "[Talk title]"
date: "2026-01-01T10:00:00+01:00"
all_day: false
event: "[Conference / seminar name]"
event_url: "https://[event page]"
location: "[City / online]"
abstract: "[Optional short abstract]"
url_slides: "" # slides.pdf inside this folder, or https://...
---
```
