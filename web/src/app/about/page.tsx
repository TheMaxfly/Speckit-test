import { Layout } from "../../components/Layout";

export const metadata = {
  title: "About",
};

export default function AboutPage() {
  return (
    <Layout
      title="About"
      subtitle="Signal Room is a mocked modern podcast website designed to be sleek, fast, and fully static-exportable."
    >
      <div className="grid gap-8">
        <section className="rounded-2xl border border-white/10 bg-white/[0.04] p-6">
          <h2 className="text-xl font-semibold text-white">The show</h2>
          <p className="mt-3 text-white/70">
            Signal Room explores production craft, audio UX, and the design
            choices that make listening feel effortless. Episodes are mocked and
            bundled into the site so there’s no feed dependency and no database.
          </p>
        </section>

        <section className="rounded-2xl border border-white/10 bg-white/[0.04] p-6">
          <h2 className="text-xl font-semibold text-white">
            What this demo proves
          </h2>
          <ul className="mt-3 grid gap-2 text-white/70">
            <li>Static export ready (host on any CDN/static host).</li>
            <li>Responsive layout with mobile-first navigation.</li>
            <li>Accessible, native audio playback controls.</li>
            <li>Mocked content embedded in the repository.</li>
          </ul>
        </section>
      </div>
    </Layout>
  );
}
