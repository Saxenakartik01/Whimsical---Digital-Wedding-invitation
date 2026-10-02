import { useMemo } from "react";

/* Eight-point golden sparkle star */
export function StarBurst({
  className = "",
  size = 28,
}: {
  className?: string;
  size?: number;
}) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
    >
      <path
        d="M50 0 L57 43 L100 50 L57 57 L50 100 L43 57 L0 50 L43 43 Z"
        fill="url(#starGrad)"
      />
      <path
        d="M50 18 L54 46 L82 50 L54 54 L50 82 L46 54 L18 50 L46 46 Z"
        fill="#f4e2b0"
      />
      <defs>
        <linearGradient id="starGrad" x1="0" y1="0" x2="100" y2="100">
          <stop stopColor="#e6cf9a" />
          <stop offset="1" stopColor="#c79a4e" />
        </linearGradient>
      </defs>
    </svg>
  );
}

/* Random twinkling starfield overlay */
export function StarField({ count = 40 }: { count?: number }) {
  const stars = useMemo(
    () =>
      Array.from({ length: count }).map(() => ({
        top: Math.random() * 100,
        left: Math.random() * 100,
        size: 6 + Math.random() * 18,
        delay: Math.random() * 4,
        dur: 2.5 + Math.random() * 3,
      })),
    [count]
  );
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {stars.map((s, i) => (
        <span
          key={i}
          className="absolute animate-twinkle"
          style={{
            top: `${s.top}%`,
            left: `${s.left}%`,
            animationDelay: `${s.delay}s`,
            animationDuration: `${s.dur}s`,
          }}
        >
          <StarBurst size={s.size} />
        </span>
      ))}
    </div>
  );
}

/* Scalloped circular seal badge */
export function ScallopedSeal({
  children,
  bg = "#0c2b3f",
  scallop = "#0a2536",
  ring = "#d4af6a",
  size = 300,
  className = "",
}: {
  children: React.ReactNode;
  bg?: string;
  scallop?: string;
  ring?: string;
  size?: number;
  className?: string;
}) {
  const teeth = 44;
  const points = Array.from({ length: teeth }).map((_, i) => {
    const angle = (i / teeth) * Math.PI * 2;
    return {
      x: 50 + Math.cos(angle) * 49,
      y: 50 + Math.sin(angle) * 49,
    };
  });
  return (
    <div
      className={`relative ${className}`}
      style={{ width: size, height: size }}
    >
      <svg viewBox="0 0 100 100" className="absolute inset-0 h-full w-full">
        {points.map((p, i) => (
          <circle key={i} cx={p.x} cy={p.y} r={2.6} fill={scallop} />
        ))}
        <circle cx="50" cy="50" r="47" fill={scallop} />
      </svg>
      <div
        className="absolute inset-[6%] rounded-full"
        style={{ background: bg, border: `1.5px solid ${ring}` }}
      >
        <div
          className="absolute inset-[5%] flex flex-col items-center justify-center rounded-full px-6 text-center"
          style={{ border: `1px solid ${ring}66` }}
        >
          {children}
        </div>
      </div>
    </div>
  );
}

/* Simple QR-code style square */
export function FauxQR({
  size = 40,
  color = "#e6cf9a",
}: {
  size?: number;
  color?: string;
}) {
  const cells = 7;
  const pattern = useMemo(
    () =>
      Array.from({ length: cells * cells }).map(() => Math.random() > 0.5),
    []
  );
  return (
    <svg width={size} height={size} viewBox="0 0 7 7">
      {pattern.map((on, i) =>
        on ? (
          <rect
            key={i}
            x={i % cells}
            y={Math.floor(i / cells)}
            width="1"
            height="1"
            fill={color}
          />
        ) : null
      )}
    </svg>
  );
}

/* Ganesha ornamental line motif */
export function GaneshaMotif({
  className = "",
  color = "#d4af6a",
}: {
  className?: string;
  color?: string;
}) {
  return (
    <svg
      className={className}
      viewBox="0 0 120 120"
      fill="none"
      stroke={color}
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="60" cy="52" r="20" />
      <path d="M60 32c-6-8-18-8-22 0-3 6 0 13 6 15" />
      <path d="M60 32c6-8 18-8 22 0 3 6 0 13-6 15" />
      <path d="M46 52c-8 2-14 10-12 20M74 52c8 2 14 10 12 20" />
      <path d="M52 56c2 4 6 6 8 6s6-2 8-6" />
      <path d="M60 62v14c0 6-5 10-10 10M60 62c0 8 6 12 12 12" />
      <circle cx="52" cy="48" r="1.6" fill={color} />
      <circle cx="68" cy="48" r="1.6" fill={color} />
      <path d="M60 20c2-4 6-6 10-5M60 20c-2-4-6-6-10-5" />
      <path d="M30 92c10 6 50 6 60 0" />
      <path d="M40 100c8 4 32 4 40 0" />
    </svg>
  );
}

/* Ornamental horizontal divider with paisley curls */
export function OrnamentDivider({
  className = "",
  color = "#1a4d66",
}: {
  className?: string;
  color?: string;
}) {
  return (
    <svg
      className={className}
      viewBox="0 0 600 60"
      fill="none"
      stroke={color}
      strokeWidth="6"
      strokeLinecap="round"
    >
      {Array.from({ length: 9 }).map((_, i) => (
        <path
          key={i}
          d={`M${60 + i * 30} 30 c8 -16 -14 -22 -14 -6 c0 10 12 12 16 4`}
        />
      ))}
      {Array.from({ length: 9 }).map((_, i) => (
        <path
          key={`r${i}`}
          d={`M${540 - i * 30} 30 c-8 -16 14 -22 14 -6 c0 10 -12 12 -16 4`}
        />
      ))}
      <path d="M300 12 c-10 6 -10 24 0 30 c10 -6 10 -24 0 -30" fill={color} />
      <path d="M300 6 v-4 M290 16 l-6 -6 M310 16 l6 -6" />
    </svg>
  );
}
