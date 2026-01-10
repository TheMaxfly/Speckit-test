import { Layout } from "../../components/Layout";
import { EpisodeCard } from "../../components/EpisodeCard";
import { getEpisodes } from "../../content/episodes";

export const metadata = {
  title: "Episodes",
};

export default function EpisodesPage() {
  const episodes = getEpisodes();

  return (
    <Layout
      title="Episodes"
      subtitle="Browse all episodes (mocked and embedded). Each one includes an accessible audio player."
    >
      {episodes.length === 0 ? (
        <div className="rounded-xl border border-white/10 bg-white/5 p-6 text-white/70">
          No episodes available.
        </div>
      ) : (
        <div className="grid gap-6">
          {episodes.map((episode) => (
            <EpisodeCard key={episode.id} episode={episode} />
          ))}
        </div>
      )}
    </Layout>
  );
}
