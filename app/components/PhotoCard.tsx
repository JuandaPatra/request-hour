"use client";

import PianoAnimation from "./PianoAnimation";

/**
 * PhotoCard – A floating high-fidelity photocard with gold border,
 * Art Deco decorative elements, and an animated piano inset.
 */
export default function PhotoCard() {
  return (
    <div
      className="card-float card-glow relative mx-auto"
      style={{
        width: "min(260px, 72vw)",
        aspectRatio: "3/4",
      }}
      aria-label="JKT48 Request Hour 2026 photocard"
    >
      {/* ── Card body ── */}
      <div
        className="w-full h-full flex flex-col items-center justify-between relative overflow-hidden"
        style={{
          background: "linear-gradient(160deg, #1a1008 0%, #0d0805 40%, #1a0e10 100%)",
          borderRadius: "16px",
          border: "2.5px solid var(--gold)",
          boxShadow: `
            0 0 0 1px rgba(201,168,76,0.15),
            inset 0 0 30px rgba(0,0,0,0.5),
            0 4px 30px rgba(0,0,0,0.8)
          `,
          padding: "12px 10px 16px",
        }}
      >
        {/* ── Inner card texture: maroon waves ── */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='300'%3E%3Cpath d='M-20 80 Q50 50 120 80 Q190 110 260 80' stroke='%237b1c2e' stroke-width='22' fill='none' opacity='0.35'/%3E%3Cpath d='M-20 130 Q50 100 120 130 Q190 160 260 130' stroke='%237b1c2e' stroke-width='18' fill='none' opacity='0.28'/%3E%3Cpath d='M-20 200 Q50 170 120 200 Q190 230 260 200' stroke='%237b1c2e' stroke-width='15' fill='none' opacity='0.2'/%3E%3C/svg%3E")`,
            backgroundSize: "100% 100%",
            borderRadius: "14px",
          }}
        />

        {/* ── Piano keyboard watermark top ── */}
        <div
          className="absolute top-0 left-0 right-0 h-16 pointer-events-none opacity-20"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='60'%3E${
              Array.from({ length: 18 }, (_, i) =>
                `%3Crect x='${i * 16 + 2}' y='0' width='14' height='55' rx='2' fill='%23f5f0e8' stroke='%23999' stroke-width='0.5'/%3E`
              ).join("")
            }${
              [1, 2, 4, 5, 7, 8, 9, 11, 12, 14, 15].map(i =>
                `%3Crect x='${i * 16 + 11}' y='0' width='9' height='34' rx='1' fill='%231a1008'/%3E`
              ).join("")
            }%3C/svg%3E")`,
            backgroundSize: "100% 100%",
            transform: "rotate(15deg) scale(1.3) translateY(-10px)",
          }}
        />

        {/* ── Top decorative gold bar ── */}
        <div className="relative z-10 w-full flex items-center gap-1.5 px-1">
          <div style={{ flex: 1, height: "1px", background: "linear-gradient(to right, transparent, var(--gold))" }} />
          <span style={{ fontFamily: "'Press Start 2P', monospace", fontSize: "5px", color: "var(--gold-light)", letterSpacing: "2px" }}>JKT48</span>
          <div style={{ flex: 1, height: "1px", background: "linear-gradient(to left, transparent, var(--gold))" }} />
        </div>

        {/* ── Gold treble clef decorators ── */}
        <div className="absolute left-2 top-8 text-2xl z-10" style={{ color: "var(--gold)", opacity: 0.7, fontFamily: "serif", textShadow: "0 0 8px rgba(201,168,76,0.5)" }}>
          𝄞
        </div>
        <div className="absolute right-2 bottom-12 text-xl z-10" style={{ color: "var(--gold)", opacity: 0.5, fontFamily: "serif" }}>
          𝄞
        </div>

        {/* ── Circular piano animation inset ── */}
        <div
          className="relative z-10 flex items-center justify-center"
          style={{ flex: 1, width: "100%" }}
        >
          <div
            style={{
              width: "min(170px, 62vw)",
              height: "min(170px, 62vw)",
              borderRadius: "50%",
              border: "3px solid var(--gold)",
              boxShadow: `
                0 0 0 2px rgba(201,168,76,0.1),
                0 0 20px rgba(201,168,76,0.3),
                inset 0 0 20px rgba(0,0,0,0.6)
              `,
              overflow: "hidden",
              background: "radial-gradient(circle, #3d0d18 0%, #1a0508 100%)",
            }}
          >
            <PianoAnimation />
          </div>
        </div>

        {/* ── Bottom decorative gold bar ── */}
        <div className="relative z-10 w-full flex flex-col items-center gap-1 px-1">
          <div className="w-full flex items-center gap-1.5">
            <div style={{ flex: 1, height: "1px", background: "linear-gradient(to right, transparent, var(--gold))" }} />
            <div style={{ width: "4px", height: "4px", background: "var(--gold)", transform: "rotate(45deg)" }} />
            <div style={{ flex: 1, height: "1px", background: "linear-gradient(to left, transparent, var(--gold))" }} />
          </div>
          <span
            style={{
              fontFamily: "'Press Start 2P', monospace",
              fontSize: "5px",
              color: "var(--gold)",
              letterSpacing: "1.5px",
              opacity: 0.8,
            }}
          >
            REQUEST HOUR
          </span>
        </div>
      </div>

      {/* ── Corner accent diamonds ── */}
      {[
        "top-[-4px] left-[-4px]",
        "top-[-4px] right-[-4px]",
        "bottom-[-4px] left-[-4px]",
        "bottom-[-4px] right-[-4px]",
      ].map((pos, i) => (
        <div
          key={i}
          className={`absolute ${pos} w-3 h-3 z-20`}
          style={{
            background: "var(--gold)",
            transform: "rotate(45deg)",
            boxShadow: "0 0 4px rgba(201,168,76,0.6)",
          }}
        />
      ))}
    </div>
  );
}
