import { type ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";

interface CtaButtonProps {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "gold" | "ink" | "outline";
  type?: "button" | "submit";
  className?: string;
  disabled?: boolean;
  "aria-label"?: string;
}

const base =
  "inline-flex items-center justify-center gap-2 rounded-sm px-7 py-3.5 text-sm font-semibold tracking-wide select-none touch-manipulation disabled:opacity-50 disabled:pointer-events-none";

const styles: Record<string, string> = {
  gold: "bg-gold text-ink shadow-[0_1px_0_rgba(0,0,0,0.15)]",
  ink: "bg-ink text-background",
  outline: "border border-ink/30 text-ink hover:border-gold hover:text-gold",
};

/**
 * Apple-fluid CTA: feedback lands on pointer-down (not release), motion is a
 * critically damped spring so a press can be interrupted or cancelled at any
 * moment without a visual jump. Brand colors/copy unchanged.
 */
export function CtaButton({
  children,
  href,
  onClick,
  variant = "gold",
  type = "button",
  className = "",
  disabled,
  ...rest
}: CtaButtonProps) {
  const reduce = useReducedMotion();
  const cls = `${base} ${styles[variant]} ${className}`;

  const motionProps = reduce
    ? { whileHover: { opacity: 0.9 } }
    : {
        whileHover: { y: -2, filter: "brightness(1.04)" },
        whileTap: { scale: 0.975, y: 0 },
        transition: { type: "spring" as const, bounce: 0, duration: 0.3 },
      };

  if (href) {
    return (
      <motion.a href={href} className={cls} {...motionProps} {...rest}>
        {children}
      </motion.a>
    );
  }
  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={cls}
      {...motionProps}
      {...rest}
    >
      {children}
    </motion.button>
  );
}
