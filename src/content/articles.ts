export interface Article {
  slug: string;
  title: string;
  date: string;
  summary: string;
  category: string;
  url?: string;
}

const articles: Article[] = [
  {
    slug: "yakin-mau-kembali-ke-jaman-one-man-show",
    title: "Yakin Mau Kembali ke Jaman One Man Show?",
    date: "2026-11-27",
    summary:
      "Mengapa dorongan untuk mengerjakan semuanya sendirian terasa menarik lagi—dan apa yang kita korbankan ketika memilihnya.",
    category: "KERJA & KOLABORASI",
  },
  {
    slug: "bilamana-data-bukan-lagi-primadona",
    title: "Bilamana Data Bukan Lagi Primadona",
    date: "2026-10-19",
    summary:
      "Saat data bukan lagi pembeda, nilai sebenarnya ada pada cara kita mengajukan pertanyaan dan mengambil keputusan.",
    category: "DATA",
  },
  {
    slug: "sisi-gelap-vibe-coding",
    title: "Sisi Gelap Vibe Coding",
    date: "2026-08-15",
    summary:
      "Vibe coding memang mempercepat proses, tetapi kecepatan juga dapat menyembunyikan risiko, biaya, dan tanggung jawab.",
    category: "ARTIFICIAL INTELLIGENCE",
  },
  {
    slug: "handing-over-the-reins",
    title: "Handing Over The Reins",
    date: "2025-12-03",
    summary:
      "On delegation, trust, and knowing when to let a capable system take the next step.",
    category: "SYSTEMS",
  },
];

export function getArticles(): Article[] {
  return [...articles].sort(
    (first, second) => Date.parse(second.date) - Date.parse(first.date),
  );
}

export function getLatestArticles(count: number): Article[] {
  return getArticles().slice(0, count);
}
