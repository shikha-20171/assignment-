"use client";

import type { CSSProperties } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  variant?: "primary" | "secondary";
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
}

const baseClassName =
  "group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full px-6 py-3.5 text-sm font-semibold transition duration-300 hover:-translate-y-0.5";

const variants = {
  primary:
    "bg-[linear-gradient(135deg,#d8b36a,#f8ecd4)] text-stone-950 shadow-[0_14px_40px_rgba(216,179,106,0.22)]",
  secondary:
    "border border-[var(--line)] bg-white/5 text-[var(--text)] hover:border-[#d8b36a]/40 hover:bg-white/8"
} as const;

export function Button({
  children,
  href,
  variant = "primary",
  className,
  onClick,
  type = "button"
}: ButtonProps) {
  const classes = cn(baseClassName, variants[variant], className);
  const commonProps = {
    onMouseMove: (event: React.MouseEvent<HTMLElement>) => {
      const rect = event.currentTarget.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;
      event.currentTarget.style.setProperty("--pointer-x", `${x}px`);
      event.currentTarget.style.setProperty("--pointer-y", `${y}px`);
    },
    onMouseLeave: (event: React.MouseEvent<HTMLElement>) => {
      event.currentTarget.style.removeProperty("--pointer-x");
      event.currentTarget.style.removeProperty("--pointer-y");
    },
    style: {
      "--pointer-x": "50%",
      "--pointer-y": "50%",
      willChange: "transform"
    } as CSSProperties
  };

  const content = (
    <>
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background:
            "radial-gradient(circle at var(--pointer-x, 50%) var(--pointer-y, 50%), rgba(255,255,255,0.24), transparent 58%)"
        }}
      />
      <span className="relative z-10">{children}</span>
    </>
  );

  if (href) {
    return (
      <span className="inline-flex">
        <Link href={href} className={classes} {...commonProps}>
          {content}
        </Link>
      </span>
    );
  }

  return (
    <span className="inline-flex">
      <button type={type} className={classes} onClick={onClick} {...commonProps}>
        {content}
      </button>
    </span>
  );
}
