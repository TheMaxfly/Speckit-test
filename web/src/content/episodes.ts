export type Episode = {
  id: string;
  slug: string;
  title: string;
  description: string;
  publishedAt: string; // YYYY-MM-DD
  durationSeconds: number;
  coverImage: string;
  audioSrc: string;
  featured: boolean;
  season?: number;
  episodeNumber?: number;
  tags?: string[];
};

const episodes: Episode[] = [
  {
    id: "ep-020",
    slug: "the-future-of-sound",
    title: "The Future of Sound",
    description:
      "A sleek look at spatial audio, AI mastering, and what listeners expect next.",
    publishedAt: "2026-01-05",
    durationSeconds: 2480,
    coverImage: "/images/cover-default.svg",
    audioSrc: "/audio/silence-1s.wav",
    featured: true,
    season: 1,
    episodeNumber: 20,
    tags: ["audio", "future", "design"],
  },
  {
    id: "ep-019",
    slug: "micro-stories-big-impact",
    title: "Micro Stories, Big Impact",
    description:
      "How short-form episodes can still feel premium and memorable.",
    publishedAt: "2025-12-22",
    durationSeconds: 1860,
    coverImage: "/images/cover-default.svg",
    audioSrc: "/audio/silence-1s.wav",
    featured: false,
    season: 1,
    episodeNumber: 19,
    tags: ["storytelling"],
  },
  {
    id: "ep-018",
    slug: "designing-for-ears",
    title: "Designing for Ears",
    description:
      "Accessibility, clarity, and sound design choices that respect listeners.",
    publishedAt: "2025-12-08",
    durationSeconds: 2140,
    coverImage: "/images/cover-default.svg",
    audioSrc: "/audio/silence-1s.wav",
    featured: false,
    season: 1,
    episodeNumber: 18,
    tags: ["accessibility", "audio"],
  },
  {
    id: "ep-017",
    slug: "the-art-of-the-cold-open",
    title: "The Art of the Cold Open",
    description:
      "Hook your audience in the first 15 seconds without the gimmicks.",
    publishedAt: "2025-11-24",
    durationSeconds: 1720,
    coverImage: "/images/cover-default.svg",
    audioSrc: "/audio/silence-1s.wav",
    featured: false,
    season: 1,
    episodeNumber: 17,
    tags: ["writing"],
  },
  {
    id: "ep-016",
    slug: "mixing-minimalism",
    title: "Mixing Minimalism",
    description:
      "Less noise, more intention: the minimalist mix for spoken audio.",
    publishedAt: "2025-11-10",
    durationSeconds: 2010,
    coverImage: "/images/cover-default.svg",
    audioSrc: "/audio/silence-1s.wav",
    featured: false,
    season: 1,
    episodeNumber: 16,
    tags: ["production"],
  },
  {
    id: "ep-015",
    slug: "the-perfect-episode-page",
    title: "The Perfect Episode Page",
    description:
      "Metadata, show notes, and UX patterns that help listeners commit.",
    publishedAt: "2025-10-27",
    durationSeconds: 2335,
    coverImage: "/images/cover-default.svg",
    audioSrc: "/audio/silence-1s.wav",
    featured: false,
    season: 1,
    episodeNumber: 15,
    tags: ["ux"],
  },
  {
    id: "ep-014",
    slug: "sound-check-rituals",
    title: "Sound Check Rituals",
    description:
      "Repeatable pre-record routines that make every session smoother.",
    publishedAt: "2025-10-13",
    durationSeconds: 1645,
    coverImage: "/images/cover-default.svg",
    audioSrc: "/audio/silence-1s.wav",
    featured: false,
    season: 1,
    episodeNumber: 14,
    tags: ["workflow"],
  },
  {
    id: "ep-013",
    slug: "captions-for-audio",
    title: "Captions for Audio?",
    description:
      "Transcripts, summaries, and how to make spoken content searchable.",
    publishedAt: "2025-09-29",
    durationSeconds: 1905,
    coverImage: "/images/cover-default.svg",
    audioSrc: "/audio/silence-1s.wav",
    featured: false,
    season: 1,
    episodeNumber: 13,
    tags: ["accessibility", "content"],
  },
  {
    id: "ep-012",
    slug: "music-or-no-music",
    title: "Music or No Music",
    description:
      "When an intro theme elevates your brand—and when it distracts.",
    publishedAt: "2025-09-15",
    durationSeconds: 1550,
    coverImage: "/images/cover-default.svg",
    audioSrc: "/audio/silence-1s.wav",
    featured: false,
    season: 1,
    episodeNumber: 12,
    tags: ["branding"],
  },
  {
    id: "ep-011",
    slug: "editing-with-intent",
    title: "Editing with Intent",
    description: "Cuts that preserve meaning, pacing that feels effortless.",
    publishedAt: "2025-09-01",
    durationSeconds: 2125,
    coverImage: "/images/cover-default.svg",
    audioSrc: "/audio/silence-1s.wav",
    featured: false,
    season: 1,
    episodeNumber: 11,
    tags: ["production"],
  },
  {
    id: "ep-010",
    slug: "a-brand-that-sounds-like-you",
    title: "A Brand That Sounds Like You",
    description:
      "How to make your show feel consistent across episodes and platforms.",
    publishedAt: "2025-08-18",
    durationSeconds: 1760,
    coverImage: "/images/cover-default.svg",
    audioSrc: "/audio/silence-1s.wav",
    featured: false,
    season: 1,
    episodeNumber: 10,
    tags: ["branding", "design"],
  },
  {
    id: "ep-009",
    slug: "listener-feedback-loops",
    title: "Listener Feedback Loops",
    description: "Collect insights without turning your show into a survey.",
    publishedAt: "2025-08-04",
    durationSeconds: 1685,
    coverImage: "/images/cover-default.svg",
    audioSrc: "/audio/silence-1s.wav",
    featured: false,
    season: 1,
    episodeNumber: 9,
    tags: ["community"],
  },
  {
    id: "ep-008",
    slug: "the-case-for-structure",
    title: "The Case for Structure",
    description:
      "Segments, pacing, and how to stay creative inside constraints.",
    publishedAt: "2025-07-21",
    durationSeconds: 2070,
    coverImage: "/images/cover-default.svg",
    audioSrc: "/audio/silence-1s.wav",
    featured: false,
    season: 1,
    episodeNumber: 8,
    tags: ["writing", "workflow"],
  },
  {
    id: "ep-007",
    slug: "guesting-with-style",
    title: "Guesting with Style",
    description: "Make remote guests sound like they're in the same room.",
    publishedAt: "2025-07-07",
    durationSeconds: 2215,
    coverImage: "/images/cover-default.svg",
    audioSrc: "/audio/silence-1s.wav",
    featured: false,
    season: 1,
    episodeNumber: 7,
    tags: ["production"],
  },
  {
    id: "ep-006",
    slug: "how-to-name-an-episode",
    title: "How to Name an Episode",
    description: "Titles that are searchable, intriguing, and not clickbait.",
    publishedAt: "2025-06-23",
    durationSeconds: 1490,
    coverImage: "/images/cover-default.svg",
    audioSrc: "/audio/silence-1s.wav",
    featured: false,
    season: 1,
    episodeNumber: 6,
    tags: ["content"],
  },
  {
    id: "ep-005",
    slug: "audio-quality-on-a-budget",
    title: "Audio Quality on a Budget",
    description: "Low-cost gear and habits that deliver a premium sound.",
    publishedAt: "2025-06-09",
    durationSeconds: 1950,
    coverImage: "/images/cover-default.svg",
    audioSrc: "/audio/silence-1s.wav",
    featured: false,
    season: 1,
    episodeNumber: 5,
    tags: ["audio", "production"],
  },
  {
    id: "ep-004",
    slug: "building-a-sleek-landing",
    title: "Building a Sleek Landing",
    description:
      "How visuals, spacing, and copy work together to feel premium.",
    publishedAt: "2025-05-26",
    durationSeconds: 1830,
    coverImage: "/images/cover-default.svg",
    audioSrc: "/audio/silence-1s.wav",
    featured: false,
    season: 1,
    episodeNumber: 4,
    tags: ["design", "ux"],
  },
  {
    id: "ep-003",
    slug: "fonts-and-voice",
    title: "Fonts and Voice",
    description: "Typography choices that make audio brands feel modern.",
    publishedAt: "2025-05-12",
    durationSeconds: 1600,
    coverImage: "/images/cover-default.svg",
    audioSrc: "/audio/silence-1s.wav",
    featured: false,
    season: 1,
    episodeNumber: 3,
    tags: ["design"],
  },
  {
    id: "ep-002",
    slug: "show-notes-that-work",
    title: "Show Notes That Work",
    description: "A practical structure for notes people actually read.",
    publishedAt: "2025-04-28",
    durationSeconds: 2065,
    coverImage: "/images/cover-default.svg",
    audioSrc: "/audio/silence-1s.wav",
    featured: false,
    season: 1,
    episodeNumber: 2,
    tags: ["content"],
  },
  {
    id: "ep-001",
    slug: "welcome-to-signal-room",
    title: "Welcome to Signal Room",
    description: "A quick intro to the show and what makes it different.",
    publishedAt: "2025-04-14",
    durationSeconds: 1320,
    coverImage: "/images/cover-default.svg",
    audioSrc: "/audio/silence-1s.wav",
    featured: false,
    season: 1,
    episodeNumber: 1,
    tags: ["intro"],
  },
];

function validateEpisodes(items: Episode[]) {
  if (items.length !== 20) {
    throw new Error(`Expected exactly 20 episodes, got ${items.length}.`);
  }

  const ids = new Set<string>();
  const slugs = new Set<string>();
  let featuredCount = 0;

  for (const episode of items) {
    if (!episode.id) throw new Error("Episode id is required.");
    if (!episode.slug) throw new Error("Episode slug is required.");
    if (!episode.title) throw new Error("Episode title is required.");
    if (!episode.description)
      throw new Error("Episode description is required.");
    if (!/^\d{4}-\d{2}-\d{2}$/.test(episode.publishedAt)) {
      throw new Error(`Episode ${episode.id} publishedAt must be YYYY-MM-DD.`);
    }
    if (
      !Number.isInteger(episode.durationSeconds) ||
      episode.durationSeconds <= 0
    ) {
      throw new Error(
        `Episode ${episode.id} durationSeconds must be a positive integer.`,
      );
    }

    if (ids.has(episode.id))
      throw new Error(`Duplicate episode id: ${episode.id}`);
    if (slugs.has(episode.slug))
      throw new Error(`Duplicate episode slug: ${episode.slug}`);
    ids.add(episode.id);
    slugs.add(episode.slug);

    if (episode.featured) featuredCount += 1;
  }

  if (featuredCount !== 1) {
    throw new Error(
      `Expected exactly 1 featured episode, got ${featuredCount}.`,
    );
  }
}

validateEpisodes(episodes);

export function getEpisodes(): Episode[] {
  return episodes.slice();
}

export function getFeaturedEpisode(): Episode {
  const featured = episodes.find((episode) => episode.featured);
  if (!featured) throw new Error("No featured episode found.");
  return featured;
}
