"use client";

/**
 * PianoAnimation – SVG-based looping animation of gloved hands on piano keys
 * Simulates continuous soft finger movements on the piano keys as seen in image_0.png
 */
export default function PianoAnimation() {
  return (
    <svg
      viewBox="0 0 200 160"
      xmlns="http://www.w3.org/2000/svg"
      style={{ width: "100%", height: "100%", display: "block" }}
      aria-label="Animated piano with gloved hands"
    >
      {/* Background – deep maroon */}
      <rect width="200" height="160" fill="#3d0d18" rx="0" />

      {/* Piano body (grand piano perspective) */}
      <ellipse cx="100" cy="90" rx="85" ry="55" fill="#0a0a0a" stroke="#1a1a1a" strokeWidth="1" />
      <ellipse cx="100" cy="88" rx="80" ry="50" fill="#111" />

      {/* Piano lid – dark glossy */}
      <path d="M30 60 Q100 30 170 55 L170 75 Q100 50 30 80 Z" fill="#0d0d0d" stroke="#222" strokeWidth="0.5" />

      {/* ── White Keys ── */}
      {[38, 50, 62, 74, 86, 98, 110, 122].map((x, idx) => (
        <rect
          key={`wk-${idx}`}
          x={x}
          y={95}
          width={10}
          height={40}
          rx={1}
          fill={idx === 2 ? "#e8e0d0" : "#f5f0e8"}
          stroke="#ccc"
          strokeWidth="0.5"
          className={
            idx === 0
              ? "piano-key-1"
              : idx === 2
              ? "piano-key-2"
              : idx === 4
              ? "piano-key-3"
              : ""
          }
        />
      ))}

      {/* ── Black Keys ── */}
      {[44, 56, 80, 92, 104].map((x, idx) => (
        <rect
          key={`bk-${idx}`}
          x={x}
          y={95}
          width={7}
          height={25}
          rx={1}
          fill="#1a1008"
          stroke="#000"
          strokeWidth="0.5"
        />
      ))}

      {/* ── Gloved Hand – Right (main playing hand) ── */}
      <g className="piano-finger-1">
        {/* Palm */}
        <ellipse cx="90" cy="88" rx="22" ry="10" fill="#2a1a0e" />
        {/* Glove texture lines */}
        <path d="M72 87 Q90 82 108 87" stroke="#3d2a18" strokeWidth="0.8" fill="none" />
        <path d="M74 90 Q90 85 106 90" stroke="#3d2a18" strokeWidth="0.6" fill="none" />
        {/* Lace detail */}
        <path d="M72 85 Q90 80 108 85" stroke="#c9a84c" strokeWidth="0.4" fill="none" opacity="0.5" />
        {/* Fingers */}
        <rect x="74" y="78" width="6" height="12" rx="3" fill="#2a1a0e" stroke="#1a0e06" strokeWidth="0.5" className="piano-finger-1" />
        <rect x="83" y="75" width="6" height="15" rx="3" fill="#241508" stroke="#1a0e06" strokeWidth="0.5" className="piano-finger-2" />
        <rect x="92" y="74" width="6" height="16" rx="3" fill="#241508" stroke="#1a0e06" strokeWidth="0.5" className="piano-finger-3" />
        <rect x="101" y="77" width="6" height="13" rx="3" fill="#2a1a0e" stroke="#1a0e06" strokeWidth="0.5" />
        {/* Ring hint */}
        <circle cx="82" cy="82" r="2.5" fill="none" stroke="#c9a84c" strokeWidth="0.8" opacity="0.7" />
        {/* Fingernail glints */}
        <ellipse cx="77" cy="79" rx="2" ry="1" fill="#3d2a18" opacity="0.8" />
        <ellipse cx="86" cy="76" rx="2" ry="1" fill="#3d2a18" opacity="0.8" />
        <ellipse cx="95" cy="75" rx="2" ry="1" fill="#3d2a18" opacity="0.8" />
      </g>

      {/* ── Gloved Hand – Left (supporting hand) ── */}
      <g className="piano-finger-2">
        {/* Palm */}
        <ellipse cx="58" cy="92" rx="16" ry="8" fill="#2a1a0e" />
        {/* Lace */}
        <path d="M44 90 Q58 86 72 90" stroke="#c9a84c" strokeWidth="0.4" fill="none" opacity="0.5" />
        {/* Fingers */}
        <rect x="46" y="84" width="5" height="10" rx="2.5" fill="#2a1a0e" stroke="#1a0e06" strokeWidth="0.5" className="piano-finger-3" />
        <rect x="54" y="82" width="5" height="12" rx="2.5" fill="#241508" stroke="#1a0e06" strokeWidth="0.5" className="piano-finger-1" />
        <rect x="62" y="83" width="5" height="11" rx="2.5" fill="#2a1a0e" stroke="#1a0e06" strokeWidth="0.5" />
      </g>

      {/* Gold reflection on piano surface */}
      <ellipse cx="100" cy="92" rx="40" ry="6" fill="none" stroke="#c9a84c" strokeWidth="0.3" opacity="0.2" />

      {/* Music note particles floating */}
      <text x="148" y="50" fontSize="10" fill="#c9a84c" opacity="0.35" fontFamily="serif">♪</text>
      <text x="30" y="45" fontSize="8" fill="#c9a84c" opacity="0.25" fontFamily="serif">♩</text>
      <text x="155" y="75" fontSize="7" fill="#c9a84c" opacity="0.2" fontFamily="serif">♫</text>
    </svg>
  );
}
