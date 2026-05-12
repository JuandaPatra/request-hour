"use client";

export default function ScrollingBanner() {
  const text =
    '✨ "Sekarang sang pianis hujan Mulai bermain dengan pelan..." |  VOTE CYNTHIA PADA LAGU AME NO PIANIST DI REQUEST HOUR 2026! ✨   ';

  return (
    <div
      className="w-full overflow-hidden py-2"
      style={{ background: "var(--maroon)", borderBottom: "1px solid var(--gold-dark)" }}
      aria-label="Scrolling announcement banner"
    >
      <div className="scroll-text">
        {/* Duplicate for seamless loop */}
        {[0, 1].map((i) => (
          <span
            key={i}
            className="px-8"
            style={{
              fontFamily: "'Press Start 2P', monospace",
              fontSize: "clamp(8px, 2vw, 11px)",
              color: "var(--gold-light)",
              letterSpacing: "0.05em",
              lineHeight: 1.6,
              textShadow: "0 0 8px rgba(201,168,76,0.5)",
            }}
          >
            {text}
          </span>
        ))}
      </div>
    </div>
  );
}
