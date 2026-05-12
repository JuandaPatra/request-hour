"use client";

import { useEffect, useState, useRef } from "react";

const TARGET_DATE = new Date("2026-06-13T00:00:00+07:00");

function getTimeLeft() {
  const now = new Date();
  const diff = Math.max(0, TARGET_DATE.getTime() - now.getTime());
  const totalSeconds = Math.floor(diff / 1000);
  return {
    days: Math.floor(totalSeconds / 86400),
    hours: Math.floor((totalSeconds % 86400) / 3600),
    minutes: Math.floor((totalSeconds % 3600) / 60),
    seconds: totalSeconds % 60,
  };
}

function pad(n: number) {
  return String(n).padStart(2, "0");
}

interface TimeUnit {
  value: string;
  label: string;
}

function DigitBlock({ value, label }: TimeUnit) {
  return (
    <div className="flex flex-col items-center gap-1">
      {/* The digit display */}
      <div
        style={{
          background: "linear-gradient(180deg, #1a1008 0%, #0d0805 100%)",
          border: "2px solid var(--gold)",
          boxShadow: `
            2px 2px 0 0 var(--gold-dark),
            0 0 10px rgba(201,168,76,0.2),
            inset 0 1px 0 rgba(201,168,76,0.1)
          `,
          padding: "8px 12px",
          minWidth: "52px",
          textAlign: "center",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Scanlines */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              "repeating-linear-gradient(0deg, transparent, transparent 3px, rgba(0,0,0,0.15) 3px, rgba(0,0,0,0.15) 4px)",
          }}
        />
        {/* Horizontal midline (classic 7-seg look) */}
        <div
          className="absolute left-2 right-2 pointer-events-none"
          style={{
            top: "50%",
            height: "1px",
            background: "rgba(201,168,76,0.08)",
          }}
        />
        <span
          className="relative z-10"
          style={{
            fontFamily: "'Press Start 2P', monospace",
            fontSize: "clamp(18px, 5vw, 26px)",
            color: "var(--gold-light)",
            textShadow: "0 0 12px rgba(201,168,76,0.7), 0 0 4px rgba(201,168,76,0.4)",
            letterSpacing: "2px",
            lineHeight: 1,
          }}
        >
          {value}
        </span>
      </div>
      {/* Label */}
      <span
        style={{
          fontFamily: "'Press Start 2P', monospace",
          fontSize: "clamp(6px, 1.6vw, 8px)",
          color: "var(--gold)",
          opacity: 0.8,
          letterSpacing: "1px",
        }}
      >
        {label}
      </span>
    </div>
  );
}

export default function CountdownTimer() {
  const [time, setTime] = useState(getTimeLeft());
  const [mounted, setMounted] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    setMounted(true);
    intervalRef.current = setInterval(() => {
      setTime(getTimeLeft());
    }, 1000);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  if (!mounted) {
    return null; // or a placeholder that matches SSR to avoid layout shift, but null is safest here with Suspense fallback from parent
  }

  const units: TimeUnit[] = [
    { value: pad(time.days), label: "Hari" },
    { value: pad(time.hours), label: "Jam" },
    { value: pad(time.minutes), label: "Menit" },
    { value: pad(time.seconds), label: "Detik" },
  ];

  return (
    <div
      className="flex items-end justify-center gap-0"
      role="timer"
      aria-label="Countdown to Request Hour 2026"
    >
      {units.map((u, i) => (
        <div key={u.label} className="flex items-center">
          <DigitBlock value={u.value} label={u.label} />
          {i < units.length - 1 && (
            <span
              className="countdown-sep self-start"
              style={{
                fontFamily: "'Press Start 2P', monospace",
                fontSize: "clamp(16px, 4vw, 22px)",
                color: "var(--gold)",
                padding: "0 4px",
                marginTop: "6px",
                textShadow: "0 0 8px rgba(201,168,76,0.5)",
                lineHeight: 1,
              }}
              aria-hidden="true"
            >
              |
            </span>
          )}
        </div>
      ))}
    </div>
  );
}
