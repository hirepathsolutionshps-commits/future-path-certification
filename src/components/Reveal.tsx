import { motion, useReducedMotion, type Variants } from "framer-motion";
import { type ReactNode } from "react";

const variants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const reducedVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

interface RevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: "div" | "section" | "li" | "span";
}

/**
 * Restrained scroll reveal: fade in + 20px rise as the element enters view,
 * driven by a critically damped spring (no overshoot) so it can be interrupted
 * mid-flight and always animates from its current on-screen value.
 * With reduced motion it becomes a plain cross-fade.
 */
export function Reveal({ children, className, delay = 0, as = "div" }: RevealProps) {
  const MotionTag = motion[as];
  const reduce = useReducedMotion();
  return (
    <MotionTag
      className={className}
      variants={reduce ? reducedVariants : variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      transition={
        reduce
          ? { duration: 0.2, ease: "easeOut", delay }
          : { type: "spring", bounce: 0, duration: 0.45, delay }
      }
    >
      {children}
    </MotionTag>
  );
}
