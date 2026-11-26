export type ExperimentStatus =
  | "Exploring"
  | "Testing"
  | "Active"
  | "Paused"
  | "Completed";

export interface Experiment {
  slug: string;
  title: string;
  status: ExperimentStatus;
  started: string;
  category: string;
  summary: string;
  learnings: string[];
}

const experiments: Experiment[] = [
  {
    slug: "local-ai-workbench",
    title: "Local AI Workbench",
    status: "Active",
    started: "2026-10-12",
    category: "ON-DEVICE INFERENCE",
    summary:
      "Testing a private, local-first environment for working with language models, where speed, context, and control meet everyday tasks.",
    learnings: [
      "Focused tasks can work well with smaller models when the context is prepared carefully.",
      "Setup friction and response time shape daily usefulness as much as model capability.",
      "Local inference is most compelling when privacy and quick iteration matter together.",
    ],
  },
  {
    slug: "agentic-development-workflow",
    title: "Agentic Development Workflow",
    status: "Active",
    started: "2026-09-04",
    category: "DEVELOPER WORKFLOWS",
    summary:
      "Building a workflow where agents take on bounded engineering tasks while developers keep context, review, and architectural judgment.",
    learnings: [
      "Small, well-scoped tasks are easier to delegate and verify than broad instructions.",
      "Repository guidance and a clear definition of done improve the handoff.",
      "Review boundaries matter more than maximizing how much work is delegated.",
    ],
  },
  {
    slug: "cloudflare-native-quiz-platform",
    title: "Cloudflare-Native Quiz Platform",
    status: "Testing",
    started: "2026-07-18",
    category: "EDGE APPLICATIONS",
    summary:
      "Prototyping a quiz experience on Cloudflare's edge stack, from delivering question sets to validating submitted answers.",
    learnings: [
      "Question and answer versions need to stay reproducible across edits.",
      "Fast delivery helps, but a clear authoring and validation model matters just as much.",
      "Testing ambiguous answers reveals gaps that happy-path checks miss.",
    ],
  },
  {
    slug: "knowledge-systems-beyond-rag",
    title: "Knowledge Systems Beyond RAG",
    status: "Exploring",
    started: "2026-06-03",
    category: "RETRIEVAL & KNOWLEDGE",
    summary:
      "Investigating how provenance, relationships, and changing context can make personal knowledge systems more useful than retrieval alone.",
    learnings: [
      "Finding a relevant passage is not the same as understanding how ideas relate.",
      "Source and time context can change how a note should be interpreted.",
      "The best interface may help people reformulate a question, not just return a result.",
    ],
  },
];

export function getExperiments(): Experiment[] {
  return [...experiments].sort(
    (first, second) => Date.parse(second.started) - Date.parse(first.started),
  );
}
