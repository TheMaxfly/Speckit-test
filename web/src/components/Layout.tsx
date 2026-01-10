import type { ReactNode } from "react";
import { Nav } from "./Nav";

export function Layout({
  children,
  title,
  subtitle,
}: {
  children: ReactNode;
  title?: string;
  subtitle?: string;
}) {
  return (
    <div className="min-h-dvh">
      <Nav />
      <main id="content" className="mx-auto w-full max-w-6xl px-4 py-10">
        {(title || subtitle) && (
          <header className="mb-8">
            {title && (
              <h1 className="text-pretty text-3xl font-semibold tracking-tight text-white md:text-4xl">
                {title}
              </h1>
            )}
            {subtitle && (
              <p className="mt-3 max-w-2xl text-white/70">{subtitle}</p>
            )}
          </header>
        )}
        {children}
      </main>
      <footer className="border-t border-white/10 py-10">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 text-sm text-white/60 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} Signal Room. Mocked content.</p>
          <p className="text-white/50">
            Static export • No database • Mobile-ready
          </p>
        </div>
      </footer>
    </div>
  );
}
