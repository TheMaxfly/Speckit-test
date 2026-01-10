import { Layout } from "../components/Layout";
import { FeaturedEpisode } from "../components/FeaturedEpisode";
import { getFeaturedEpisode } from "../content/episodes";

export default function Home() {
  const featured = getFeaturedEpisode();
  return (
    <Layout
      title="Modern podcast website"
      subtitle="A sleek, static-exported layout with mocked episodes. Start with the featured episode below."
    >
      <FeaturedEpisode episode={featured} />
    </Layout>
  );
}
