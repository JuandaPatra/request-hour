"use client";

import Link from "next/link";

/**
 * ActionButtons – Three retro-pixel buttons: Vote (maroon/large), Spotify & YouTube (dark/small)
 */
export default function ActionButtons() {
  return (
    <div className="flex flex-col items-center gap-3 w-full px-4">

      {/* ── VOTE Button (large, maroon, pulsing glow) ── */}
      <a
  href="https://rh26.jkt48.com/"
  target="_blank"
  rel="noopener noreferrer"
  id="btn-vote"
  className="btn-vote pixel-border w-full relative overflow-hidden group block text-center no-underline"
  style={{
    background:
      "linear-gradient(180deg, var(--maroon-light) 0%, var(--maroon) 50%, var(--maroon-dark) 100%)",
    padding: "14px 16px",
    cursor: "pointer",
    borderRadius: "4px",
    border: "2px solid var(--gold)",
    maxWidth: "340px",
    zIndex: 1,
  }}
>
  <div
    className="absolute inset-0 pointer-events-none"
    style={{
      backgroundImage:
        "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.08) 2px, rgba(0,0,0,0.08) 4px)",
      borderRadius: "2px",
      zIndex: 1,
    }}
  />

  <div
    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
    style={{
      background:
        "linear-gradient(135deg, rgba(255,255,255,0.1) 0%, transparent 60%)",
      zIndex: 1,
    }}
  />

  <span
    className="relative"
    style={{
      zIndex: 2,
      fontFamily: "'Press Start 2P', monospace",
      fontSize: "clamp(8px, 2.5vw, 12px)",
      color: "var(--gold-light)",
      letterSpacing: "0.05em",
      textShadow:
        "0 0 10px rgba(240,208,128,0.6), 2px 2px 0 rgba(0,0,0,0.5)",
      display: "block",
      lineHeight: 1.5,
    }}
  >
    [ VOTE AME NO PIANIST ]
  </span>
</a>

      {/* ── Spotify Button ── */}
      <a 
        href="https://open.spotify.com/track/77xjdd1jftQGgn7Zor1nxM?si=39c8952c1a4540ef" 
        target="_blank" 
        rel="noopener noreferrer"
        id="btn-spotify"
        className="pixel-border w-full relative overflow-hidden group text-decoration-none"
        style={{
          background: "linear-gradient(180deg, #1a1a1a 0%, #0d0d0d 100%)",
          padding: "11px 16px",
          cursor: "pointer",
          borderRadius: "4px",
          border: "2px solid var(--gold-dark)",
          maxWidth: "320px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "10px",
        }}
        aria-label="Dengarkan di Spotify"
      >
        {/* Scanline */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.06) 2px, rgba(0,0,0,0.06) 4px)",
          }}
        />
        {/* Hover glow */}
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded"
          style={{ boxShadow: "inset 0 0 12px rgba(201,168,76,0.1)" }}
        />
        {/* Pixel Spotify Icon */}
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{ flexShrink: 0 }}
          aria-hidden="true"
        >
          <circle cx="8" cy="8" r="7.5" fill="#1DB954" stroke="var(--gold-dark)" strokeWidth="0.5" />
          <path d="M4 6.5 Q8 5 12 6.5" stroke="white" strokeWidth="1.2" strokeLinecap="round" fill="none" />
          <path d="M4.5 8.5 Q8 7.2 11.5 8.5" stroke="white" strokeWidth="1" strokeLinecap="round" fill="none" />
          <path d="M5 10.5 Q8 9.5 11 10.5" stroke="white" strokeWidth="0.8" strokeLinecap="round" fill="none" />
        </svg>
        <span
          style={{
            fontFamily: "'Press Start 2P', monospace",
            fontSize: "clamp(7px, 2vw, 10px)",
            color: "var(--gold)",
            letterSpacing: "0.04em",
            textShadow: "0 0 6px rgba(201,168,76,0.3)",
          }}
        >
          [ DENGARKAN DI SPOTIFY ]
        </span>
      </a>

      <a href="https://rh26.jkt48.com/">
  TEST
</a>

      {/* ── YouTube Button ── */}
      <a 
        href="https://www.youtube.com/watch?v=ngyy4XJr5E0" 
        target="_blank" 
        rel="noopener noreferrer"
        id="btn-youtube"
        className="pixel-border w-full relative overflow-hidden group text-decoration-none"
        style={{
          background: "linear-gradient(180deg, #1a1a1a 0%, #0d0d0d 100%)",
          padding: "11px 16px",
          cursor: "pointer",
          borderRadius: "4px",
          border: "2px solid var(--gold-dark)",
          maxWidth: "320px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "10px",
        }}
        aria-label="Lihat MV di YouTube"
      >
        {/* Scanline */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.06) 2px, rgba(0,0,0,0.06) 4px)",
          }}
        />
        {/* Hover glow */}
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded"
          style={{ boxShadow: "inset 0 0 12px rgba(201,168,76,0.1)" }}
        />
        {/* Pixel YouTube Icon */}
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{ flexShrink: 0 }}
          aria-hidden="true"
        >
          <rect x="0.5" y="2.5" width="15" height="11" rx="3" fill="#FF0000" stroke="var(--gold-dark)" strokeWidth="0.5" />
          <polygon points="6,5 6,11 11,8" fill="white" />
        </svg>
        <span
          style={{
            fontFamily: "'Press Start 2P', monospace",
            fontSize: "clamp(7px, 2vw, 10px)",
            color: "var(--gold)",
            letterSpacing: "0.04em",
            textShadow: "0 0 6px rgba(201,168,76,0.3)",
          }}
        >
          [ PREVIEW YOUTUBE ]
        </span>
      </a>
    </div>
  );
}
