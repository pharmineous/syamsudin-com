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
the new Markdown file directly into its collection folder. The workbench is served only by
the local development server and is not included in production builds. Browsers without
the File System Access API download the Markdown file instead, so it must be moved into the
matching folder manually.

Content files live in:

- `src/content/articles/` — title, primary `language` (`id` or `en`), date, summary,
  optional `translatedSummary`, category, and external URL.
- `src/content/notes/` — language, date, and topic in frontmatter, with the note itself as Markdown.
- `src/content/experiments/` — language, title, status, start date, category, summary, and learnings.

Edit existing entries directly in their Markdown files. A file's name is its stable
collection ID. Use the language switcher to show all entries or filter to Indonesian (`ID`)
or English (`EN`); the selection is remembered in this browser. An article's optional
translated summary must be written manually and appears when filtering by that language;
the title and link continue to represent the article's primary language. Article URLs can
point to published LinkedIn articles; otherwise, article cards link to their entry in the
Writing archive. No content is machine-translated.

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).
