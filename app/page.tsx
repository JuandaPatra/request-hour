"use client";

import { Suspense } from "react";
import ScrollingBanner from "./components/ScrollingBanner";
import PhotoCard from "./components/PhotoCard";
import ActionButtons from "./components/ActionButtons";
import CountdownTimer from "./components/CountdownTimer";

/** Static pixel music note positions seeded manually for SSR consistency */
const MUSIC_NOTES = [
  { symbol: "♪", top: "8%",  left: "6%",  size: 18, opacity: 0.06, rotate: -15 },
  { symbol: "♫", top: "15%", left: "82%", size: 14, opacity: 0.05, rotate: 10 },
  { symbol: "♩", top: "28%", left: "4%",  size: 12, opacity: 0.05, rotate: -5 },
  { symbol: "𝄞", top: "35%", left: "88%", size: 22, opacity: 0.07, rotate: 8 },
  { symbol: "♪", top: "52%", left: "7%",  size: 10, opacity: 0.04, rotate: 20 },
  { symbol: "♫", top: "58%", left: "85%", size: 16, opacity: 0.05, rotate: -12 },
  { symbol: "♩", top: "70%", left: "5%",  size: 14, opacity: 0.06, rotate: 5 },
  { symbol: "𝄢", top: "78%", left: "87%", size: 20, opacity: 0.05, rotate: -8 },
  { symbol: "♪", top: "88%", left: "10%", size: 12, opacity: 0.04, rotate: 15 },
  { symbol: "♫", top: "92%", left: "80%", size: 10, opacity: 0.04, rotate: -20 },
];

export default function HomePage() {
  return (
    <main
      className="bg-art-deco relative min-h-screen flex flex-col"
      style={{ overflowX: "hidden" }}
    >
      {/* ── Static pixel music notes ── */}
      <div className="music-notes-layer" aria-hidden="true">
        {MUSIC_NOTES.map((n, i) => (
          <span
            key={i}
            className="music-note"
            style={{
              top: n.top,
              left: n.left,
              fontSize: `${n.size}px`,
              opacity: n.opacity,
              transform: `rotate(${n.rotate}deg)`,
              fontFamily: "serif",
            }}
          >
            {n.symbol}
          </span>
        ))}
      </div>

      {/* ── Scrolling banner (maroon bar) ── */}
      <ScrollingBanner />

      {/* ── Mobile-first centered content ── */}
      <div
        className="relative z-10 flex flex-col items-center w-full mx-auto"
        style={{
          maxWidth: "420px",
          padding: "24px 16px 20px",
          gap: "0",
        }}
      >

        {/* ── Floating Photocard ── */}
        <section className="flex justify-center w-full" aria-label="Photocard Section">
          <PhotoCard />
        </section>

        {/* ── Divider with gold accent ── */}
        <div
          className="flex items-center gap-2 my-6 w-full px-6"
          aria-hidden="true"
        >
          <div style={{ flex: 1, height: "1px", background: "linear-gradient(to right, transparent, var(--gold-dark))" }} />
          <div
            style={{
              width: "6px", height: "6px",
              background: "var(--gold)",
              transform: "rotate(45deg)",
              boxShadow: "0 0 6px rgba(201,168,76,0.5)",
            }}
          />
          <div style={{ flex: 1, height: "1px", background: "linear-gradient(to left, transparent, var(--gold-dark))" }} />
        </div>

        {/* ── Action Buttons ── */}
        <section aria-label="Action Buttons">
          <ActionButtons />
        </section>

        {/* ── Divider ── */}
        <div
          className="flex items-center gap-2 my-6 w-full px-6"
          aria-hidden="true"
        >
          <div style={{ flex: 1, height: "1px", background: "linear-gradient(to right, transparent, var(--gold-dark))" }} />
          <span style={{ fontFamily: "'Press Start 2P', monospace", fontSize: "8px", color: "var(--gold)", opacity: 0.5 }}>◆</span>
          <div style={{ flex: 1, height: "1px", background: "linear-gradient(to left, transparent, var(--gold-dark))" }} />
        </div>

        {/* ── Countdown Timer ── */}
        <section className="flex flex-col items-center gap-3 w-full" aria-label="Countdown Timer">
          {/* Label above timer */}
          <div
            style={{
              fontFamily: "'Press Start 2P', monospace",
              fontSize: "clamp(6px, 1.8vw, 9px)",
              color: "var(--gold)",
              opacity: 0.6,
              letterSpacing: "2px",
              textAlign: "center",
            }}
          >
            ── COUNTDOWN ──
          </div>

          <Suspense
            fallback={
              <div
                style={{
                  fontFamily: "'Press Start 2P', monospace",
                  fontSize: "10px",
                  color: "var(--gold)",
                  opacity: 0.5,
                }}
              >
                Loading...
              </div>
            }
          >
            <CountdownTimer />
          </Suspense>
        </section>

        {/* ── Bottom decorative rule ── */}
        <div
          className="flex items-center gap-2 mt-7 mb-4 w-full px-4"
          aria-hidden="true"
        >
          <div style={{ flex: 1, height: "1px", background: "linear-gradient(to right, transparent, rgba(201,168,76,0.4))" }} />
          <span style={{ fontSize: "10px", color: "var(--gold)", opacity: 0.4 }}>✦</span>
          <div style={{ flex: 1, height: "1px", background: "linear-gradient(to left, transparent, rgba(201,168,76,0.4))" }} />
        </div>

        {/* ── Footer text ── */}
        <footer className="flex flex-col items-center gap-1 pb-6">
          <p
            style={{
              fontFamily: "'Cinzel', serif",
              fontSize: "clamp(11px, 3vw, 14px)",
              color: "var(--gold)",
              letterSpacing: "3px",
              fontWeight: 600,
              textAlign: "center",
              textShadow: "0 0 10px rgba(201,168,76,0.3)",
            }}
          >
            REQUEST HOUR 2026
          </p>
          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "clamp(10px, 2.5vw, 12px)",
              color: "var(--gold)",
              opacity: 0.65,
              letterSpacing: "1.5px",
              fontWeight: 300,
            }}
          >
            @juu_pay
          </p>
        </footer>
      </div>

      {/* ── Edge vignette ── */}
      <div
        className="pointer-events-none fixed inset-0 z-0"
        style={{
          background: "radial-gradient(ellipse at center, transparent 50%, rgba(0,0,0,0.55) 100%)",
        }}
        aria-hidden="true"
      />
    </main>
  );
}
