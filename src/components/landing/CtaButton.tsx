import { type ReactNode } from "react";

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
  "inline-flex items-center justify-center gap-2 rounded-sm px-7 py-3.5 text-sm font-semibold tracking-wide transition-all duration-200 disabled:opacity-50 disabled:pointer-events-none";

const styles: Record<string, string> = {
  gold: "bg-gold text-ink hover:brightness-105 shadow-[0_1px_0_rgba(0,0,0,0.15)] hover:-translate-y-0.5",
  ink: "bg-ink text-background hover:bg-graphite hover:-translate-y-0.5",
  outline: "border border-ink/30 text-ink hover:border-gold hover:text-gold",
};

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
  const cls = `${base} ${styles[variant]} ${className}`;
  if (href) {
    return (
      <a href={href} className={cls} {...rest}>
        {children}
      </a>
    );
  }
  return (
    <button type={type} onClick={onClick} disabled={disabled} className={cls} {...rest}>
      {children}
    </button>
  );
}
