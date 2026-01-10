import type { Episode } from "../content/episodes";
import Image from "next/image";
import { Player } from "./Player";

function formatDuration(seconds: number) {
  const minutes = Math.round(seconds / 60);
  return `${minutes} min`;
}

function formatDate(yyyyMmDd: string) {
  const [y, m, d] = yyyyMmDd.split("-").map((v) => Number(v));
  if (!y || !m || !d) return yyyyMmDd;
  return new Date(Date.UTC(y, m - 1, d)).toLocaleDateString(undefined, {
    year: "numeric",
    month: "short",
    day: "2-digit",
  });
}

export function EpisodeCard({
  episode,
  variant = "list",
}: {
  episode: Episode;
  variant?: "list" | "featured";
}) {
  const titleId = `episode-${episode.slug}-title`;

  return (
    <section
      aria-labelledby={titleId}
      className={[
        "rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.06] to-white/[0.03] p-5 shadow-[0_0_0_1px_rgba(255,255,255,0.04)]",
        variant === "featured" ? "p-6 md:p-8" : "",
      ].join(" ")}
    >
      <div className="flex flex-col gap-5 md:flex-row md:items-start">
        <div className="shrink-0">
          <Image
            src={episode.coverImage}
            alt=""
            width={400}
            height={400}
            className="aspect-square w-full max-w-[160px] rounded-xl border border-white/10 bg-black/30 object-cover md:max-w-[200px]"
          />
        </div>

        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-white/60">
            <span>{formatDate(episode.publishedAt)}</span>
            <span aria-hidden="true">•</span>
            <span>{formatDuration(episode.durationSeconds)}</span>
            {episode.tags?.length ? (
              <>
                <span aria-hidden="true">•</span>
                <span className="inline-flex flex-wrap gap-2">
                  {episode.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-white/5 px-2 py-0.5 text-[11px] text-white/70"
                    >
                      {tag}
                    </span>
                  ))}
                </span>
              </>
            ) : null}
          </div>

          <h2
            id={titleId}
            className={[
              "mt-2 text-pretty font-semibold tracking-tight text-white",
              variant === "featured" ? "text-2xl md:text-3xl" : "text-xl",
            ].join(" ")}
          >
            {episode.title}
          </h2>

          <p className="mt-3 text-pretty text-white/70">
            {episode.description}
          </p>

          <div className="mt-5">
            <Player src={episode.audioSrc} title={episode.title} />
          </div>
        </div>
      </div>
    </section>
  );
}
