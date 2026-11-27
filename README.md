# Astro Starter Kit: Minimal

```sh
npm create astro@latest -- --template minimal
```

> 🧑‍🚀 **Seasoned astronaut?** Delete this file. Have fun!

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/
├── src/
│   └── pages/
│       └── index.astro
└── package.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

Any static assets, like images, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## Local publishing workbench

Run `npm run dev` and open `/admin` on the local site to create an article, note, or
experiment. Choose this project's `src/content/` folder when prompted; the browser writes
new Markdown files directly into their collection folder. Switch to **Manage existing** to
load the collection files, edit their raw Markdown in place, or delete an entry. The
workbench is served only by the local development server and is not included in production
builds. Browsers without the File System Access API can download new Markdown files, but
cannot edit or delete existing files; use a supported browser or edit them in the project
folder instead.

Content files live in:

- `src/content/articles/` — title, primary `language` (`id` or `en`), date, summary,
  optional `translatedSummary`, category, and external URL.
- `src/content/notes/` — language, date, and topic in frontmatter, with the note itself as Markdown.
- `src/content/experiments/` — language, title, status, start date, category, summary, and learnings.

Existing entries can be edited in the workbench's raw Markdown editor or directly in their
files. A file's name is its stable collection ID. Use the language switcher to show all
entries or filter to Indonesian (`ID`) or English (`EN`); the selection is remembered in
this browser. An article's optional
translated summary must be written manually and appears when filtering by that language;
the title and link continue to represent the article's primary language. Article URLs can
point to published LinkedIn articles; otherwise, article cards link to their entry in the
Writing archive. No content is machine-translated.

## Site images

Images are stored in `public/images/` and served from this site; pages do not load article
thumbnails or the hero image from a remote image host.

- Set the homepage hero image path and alt text in `src/site-config.ts`. Keep the image file
  under `public/images/`.
- Article Markdown can set `image` (a `/images/...` path) and `imageAlt` together. The
  development `/admin` form has optional fields for both; add the image file to
  `public/images/` before publishing.
- Use descriptive alt text. Remote URLs and paths outside `public/images/` are not accepted
  for article thumbnails.

Asset sources and terms:

- `data-analytics.webp`, `delegation-systems.webp`, `vibe-coding.webp`, and
  `work-collaboration.webp` are Unsplash selections. The Unsplash License allows free use
  without required attribution: <https://unsplash.com/license>.
- `code-editor-unsplash.webp` and `solo-workspace-unsplash.webp` are local crops of
  [this code-editor photo](https://images.unsplash.com/photo-1555066931-4365d14bab8c) and
  [this workspace photo](https://images.unsplash.com/photo-1498050108023-c5249f4df085).
- `hero-field-notes.webp` is generated with the Photon model through
  [AI Horde](https://aihorde.net/). Its terms allow use of generated outputs and note that
  anonymous text-to-image outputs and their metadata (including prompts) are shared with
  LAION:
  <https://aihorde.net/api/v2/documents/terms?format=markdown>.

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).
