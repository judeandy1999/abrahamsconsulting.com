"use client";

import Image from "next/image";
import { useState } from "react";

type YouTubeFacadeProps = {
  embedUrl: string;
  title: string;
  className?: string;
};

function getYouTubeId(url: string) {
  try {
    const parsed = new URL(url);
    const hostname = parsed.hostname.replace(/^www\./, "");

    if (hostname === "youtu.be") {
      return parsed.pathname.slice(1).split("/")[0] ?? "";
    }

    if (hostname.includes("youtube.com")) {
      const pathParts = parsed.pathname.split("/").filter(Boolean);

      if (pathParts[0] === "embed" || pathParts[0] === "shorts" || pathParts[0] === "v") {
        return pathParts[1] ?? "";
      }

      const fromQuery = parsed.searchParams.get("v");
      if (fromQuery) {
        return fromQuery;
      }
    }
  } catch {
    return "";
  }

  return "";
}

export function YouTubeFacade({ embedUrl, title, className }: YouTubeFacadeProps) {
  const [isActive, setIsActive] = useState(false);
  const videoId = getYouTubeId(embedUrl);

  if (!videoId) {
    return null;
  }

  if (isActive) {
    return (
      <iframe
        className={className}
        src={`https://www.youtube.com/embed/${videoId}?autoplay=1&modestbranding=1&rel=0`}
        title={title}
        loading="lazy"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      />
    );
  }

  return (
    <button
      type="button"
      className={`youtube-facade${className ? ` ${className}` : ""}`}
      onClick={() => setIsActive(true)}
      aria-label={`Play video: ${title}`}
    >
      <Image
        src={`https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`}
        alt=""
        fill
        sizes="(max-width: 960px) 100vw, 52rem"
        className="youtube-facade__poster"
      />
      <span className="youtube-facade__play" aria-hidden="true">
        <svg width="68" height="48" viewBox="0 0 68 48" focusable="false">
          <path
            d="M66.52 7.74a8.4 8.4 0 0 0-5.87-5.9C55.83 1 34 1 34 1S12.17 1 7.35 1.84a8.4 8.4 0 0 0-5.87 5.9A88.3 88.3 0 0 0 0 24a88.3 88.3 0 0 0 1.48 16.26 8.4 8.4 0 0 0 5.87 5.9C12.17 47 34 47 34 47s21.83 0 26.65-.84a8.4 8.4 0 0 0 5.87-5.9A88.3 88.3 0 0 0 68 24a88.3 88.3 0 0 0-1.48-16.26Z"
            fill="#212121"
            fillOpacity="0.8"
          />
          <path d="M45 24 27 14v20" fill="#fff" />
        </svg>
      </span>
    </button>
  );
}
