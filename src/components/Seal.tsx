import { motion, useReducedMotion } from "framer-motion";

interface SealProps {
  size?: number;
  withText?: boolean;
  draw?: boolean;
  className?: string;
}

/**
 * Circular certification seal — the signature "verified credibility" motif.
 * When `draw` is true it traces its outlines in on mount (one of the two
 * standout animation moments). Small instances render static next to trust
 * signals. Respects prefers-reduced-motion.
 */
export function Seal({ size = 160, withText = true, draw = false, className }: SealProps) {
  const reduce = useReducedMotion();
  const animate = draw && !reduce;

  const strokeProps = (delay: number) =>
    animate
      ? {
          initial: { pathLength: 0, opacity: 0 },
          animate: { pathLength: 1, opacity: 1 },
          transition: { duration: 1.4, ease: "easeInOut" as const, delay },
        }
      : { initial: false as const };

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 200 200"
      fill="none"
      role="img"
      aria-label="Hire Path Solutions certified program seal"
      className={className}
    >
      <defs>
        <path
          id="seal-top"
          d="M 100,100 m -76,0 a 76,76 0 1,1 152,0"
          fill="none"
        />
        <path
          id="seal-bottom"
          d="M 100,100 m -68,0 a 68,68 0 1,0 136,0"
          fill="none"
        />
      </defs>

      {/* Outer ring */}
      <motion.circle
        cx="100"
        cy="100"
        r="92"
        stroke="var(--gold)"
        strokeWidth="1.5"
        {...strokeProps(0)}
      />
      {/* Double inner ring */}
      <motion.circle
        cx="100"
        cy="100"
        r="84"
        stroke="var(--gold)"
        strokeWidth="3"
        {...strokeProps(0.15)}
      />
      <motion.circle
        cx="100"
        cy="100"
        r="60"
        stroke="var(--ink)"
        strokeWidth="1"
        strokeDasharray="2 4"
        {...strokeProps(0.4)}
      />

      {/* Tick marks ring */}
      {Array.from({ length: 48 }).map((_, i) => {
        const angle = (i / 48) * Math.PI * 2;
        const r1 = 72;
        const r2 = 78;
        const round = (n: number) => Number(n.toFixed(2));
        return (
          <motion.line
            key={i}
            x1={round(100 + Math.cos(angle) * r1)}
            y1={round(100 + Math.sin(angle) * r1)}
            x2={round(100 + Math.cos(angle) * r2)}
            y2={round(100 + Math.sin(angle) * r2)}
            stroke="var(--gold)"
            strokeWidth="1"
            initial={animate ? { opacity: 0 } : false}
            animate={animate ? { opacity: 0.7 } : undefined}
            transition={animate ? { duration: 0.4, delay: 0.9 + i * 0.004 } : undefined}
          />
        );
      })}

      {/* Center upward path/arrow motif (echoes the logo) */}
      <motion.path
        d="M 78 132 C 92 120, 96 108, 104 96 C 110 86, 118 80, 126 74"
        stroke="var(--gold)"
        strokeWidth="6"
        strokeLinecap="round"
        {...strokeProps(0.7)}
      />
      <motion.path
        d="M 113 70 L 130 70 L 130 87"
        stroke="var(--gold)"
        strokeWidth="6"
        strokeLinecap="round"
        strokeLinejoin="round"
        {...strokeProps(1.0)}
      />

      {withText && (
        <>
          <text
            fontSize="11"
            fontFamily="var(--font-mono)"
            fontWeight="500"
            letterSpacing="3"
            fill="var(--ink)"
          >
            <textPath href="#seal-top" startOffset="50%" textAnchor="middle">
              HIRE PATH SOLUTIONS
            </textPath>
          </text>
          <text
            fontSize="8"
            fontFamily="var(--font-mono)"
            fontWeight="500"
            letterSpacing="4"
            fill="var(--gold)"
          >
            <textPath href="#seal-bottom" startOffset="50%" textAnchor="middle">
              CERTIFIED · VERIFIED · 2025
            </textPath>
          </text>
        </>
      )}
    </svg>
  );
}
