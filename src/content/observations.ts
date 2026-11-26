export interface Observation {
  id: string;
  date: string;
  topic: string;
  content: string;
}

const observations: Observation[] = [
  {
    id: "automation-moves-judgment",
    date: "2026-11-27",
    topic: "SYSTEMS",
    content:
      "Automation doesn't remove judgment. It moves judgment to the point where we decide what deserves to be automated.",
  },
  {
    id: "a-note-for-your-future-self",
    date: "2026-11-22",
    topic: "KNOWLEDGE",
    content:
      "A useful note is a small kindness to your future self—and sometimes to someone you've never met.",
  },
  {
    id: "questions-shape-understanding",
    date: "2026-11-15",
    topic: "LEARNING",
    content:
      "Good questions are not a prelude to understanding. They are one of the ways understanding takes shape.",
  },
  {
    id: "systems-make-work-visible",
    date: "2026-11-09",
    topic: "WORK",
    content:
      "A good system makes useful work easier to notice, repeat, and improve.",
  },
  {
    id: "speed-is-not-understanding",
    date: "2026-10-28",
    topic: "TECHNOLOGY",
    content:
      "The fastest path to an answer isn't always the shortest path to understanding.",
  },
];

export function getObservations(): Observation[] {
  return [...observations].sort(
    (first, second) => Date.parse(second.date) - Date.parse(first.date),
  );
}

export function getLatestObservations(count: number): Observation[] {
  return getObservations().slice(0, count);
}
