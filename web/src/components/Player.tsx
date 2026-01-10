"use client";

import { useState } from "react";

type PlayerProps = {
  src?: string;
  title: string;
};

export function Player({ src, title }: PlayerProps) {
  const [hadError, setHadError] = useState(false);

  if (!src) {
    return (
      <div className="rounded-lg border border-white/10 bg-white/5 p-4 text-sm text-white/70">
        Audio unavailable for “{title}”.
      </div>
    );
  }

  return (
    <div className="rounded-xl border border-white/10 bg-white/5 p-3 shadow-[0_0_0_1px_rgba(255,255,255,0.04)]">
      <audio
        controls
        preload="none"
        className="h-10 w-full"
        aria-label={`Audio player for ${title}`}
        src={src}
        onError={() => setHadError(true)}
      />
      {hadError ? (
        <p className="mt-2 text-xs text-rose-200/90">
          Audio failed to load. The site remains usable; try another episode or
          refresh.
        </p>
      ) : (
        <p className="mt-2 text-xs text-white/50">
          Tip: playback uses native controls for best accessibility.
        </p>
      )}
    </div>
  );
}
