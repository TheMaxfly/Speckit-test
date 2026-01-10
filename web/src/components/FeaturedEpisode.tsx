import type { Episode } from "../content/episodes";
import { EpisodeCard } from "./EpisodeCard";

export function FeaturedEpisode({ episode }: { episode: Episode }) {
  return (
    <div className="grid gap-6">
      <div className="flex flex-col gap-3">
        <p className="inline-flex w-fit items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-white/70">
          Featured episode
          <span
            className="inline-block size-1.5 rounded-full bg-cyan-300/80"
            aria-hidden="true"
          />
        </p>
        <p className="max-w-2xl text-white/70">
          Start listening immediately. The full catalog is mocked and embedded,
          so this site can export as fully static files.
        </p>
      </div>
      <EpisodeCard episode={episode} variant="featured" />
    </div>
  );
}
