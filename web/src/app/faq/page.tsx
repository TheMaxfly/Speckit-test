import { Layout } from "../../components/Layout";

export const metadata = {
  title: "FAQ",
};

const faqs = [
  {
    q: "Is this pulling from a real podcast feed?",
    a: "No. All 20 episodes are mocked and embedded in the repository so the app can be statically exported with no external dependencies.",
  },
  {
    q: "Does it require a database or server?",
    a: "No database. The site is configured for Next.js static export, so it can be hosted as static files on a CDN or any static host.",
  },
  {
    q: "Why use native audio controls?",
    a: "Native controls provide the best baseline accessibility and keyboard support, with minimal JavaScript.",
  },
  {
    q: "Is it mobile-ready?",
    a: "Yes. The layout and navigation are responsive and designed mobile-first.",
  },
] as const;

export default function FaqPage() {
  return (
    <Layout
      title="FAQ"
      subtitle="Quick answers about this static-export podcast website."
    >
      <div className="grid gap-3">
        {faqs.map((item) => (
          <details
            key={item.q}
            className="group rounded-2xl border border-white/10 bg-white/[0.04] p-5"
          >
            <summary className="cursor-pointer list-none text-sm font-medium text-white/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/80">
              <span className="inline-flex items-center gap-2">
                <span className="grid size-6 place-items-center rounded-full bg-white/5 text-white/70">
                  ?
                </span>
                {item.q}
              </span>
            </summary>
            <p className="mt-4 text-white/70">{item.a}</p>
          </details>
        ))}
      </div>
    </Layout>
  );
}
