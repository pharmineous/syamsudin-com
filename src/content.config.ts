import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const language = z.enum(["id", "en"]);

const articles = defineCollection({
  loader: glob({ base: "./src/content/articles", pattern: "**/*.md" }),
  schema: z.object({
    title: z.string(),
    language,
    date: z.coerce.date(),
    summary: z.string(),
    translatedSummary: z.string().optional(),
    category: z.string(),
    url: z.string().url().optional(),
  }),
});

const notes = defineCollection({
  loader: glob({ base: "./src/content/notes", pattern: "**/*.md" }),
  schema: z.object({
    language,
    date: z.coerce.date(),
    topic: z.string(),
  }),
});

const experiments = defineCollection({
  loader: glob({ base: "./src/content/experiments", pattern: "**/*.md" }),
  schema: z.object({
    title: z.string(),
    language,
    status: z.enum(["Exploring", "Testing", "Active", "Paused", "Completed"]),
    started: z.coerce.date(),
    category: z.string(),
    summary: z.string(),
    learnings: z.array(z.string()),
  }),
});

export const collections = { articles, notes, experiments };
