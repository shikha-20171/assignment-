"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface PageMotionProps {
  children: React.ReactNode;
  className?: string;
  variant?: "default" | "about" | "services" | "products" | "contact";
}

const pageVariants = {
  default: {
    leftGradient: "bg-[linear-gradient(180deg,transparent,rgba(125,211,252,0.08),transparent)]",
    rightGradient: "bg-[linear-gradient(180deg,transparent,rgba(255,214,138,0.07),transparent)]",
    leftRail:
      "border-cyan-300/10 bg-[linear-gradient(180deg,rgba(125,211,252,0.12),rgba(255,255,255,0.02))] shadow-[0_0_80px_rgba(56,189,248,0.08)]",
    rightRail:
      "border-amber-200/10 bg-[linear-gradient(180deg,rgba(255,214,138,0.08),rgba(255,255,255,0.02))] shadow-[0_0_80px_rgba(245,158,11,0.08)]",
    leftLabel: "Dezoryn",
    rightLabel: "Systems",
    lineLeft: "via-cyan-300/20",
    lineRight: "via-amber-200/18"
  },
  about: {
    leftGradient: "bg-[linear-gradient(180deg,transparent,rgba(148,163,184,0.08),transparent)]",
    rightGradient: "bg-[linear-gradient(180deg,transparent,rgba(125,211,252,0.08),transparent)]",
    leftRail:
      "border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.08),rgba(255,255,255,0.02))] shadow-[0_0_80px_rgba(255,255,255,0.05)]",
    rightRail:
      "border-cyan-300/10 bg-[linear-gradient(180deg,rgba(125,211,252,0.12),rgba(255,255,255,0.02))] shadow-[0_0_80px_rgba(56,189,248,0.08)]",
    leftLabel: "People",
    rightLabel: "Vision",
    lineLeft: "via-white/16",
    lineRight: "via-cyan-300/20"
  },
  services: {
    leftGradient: "bg-[linear-gradient(180deg,transparent,rgba(34,197,94,0.07),transparent)]",
    rightGradient: "bg-[linear-gradient(180deg,transparent,rgba(59,130,246,0.08),transparent)]",
    leftRail:
      "border-emerald-300/10 bg-[linear-gradient(180deg,rgba(34,197,94,0.1),rgba(255,255,255,0.02))] shadow-[0_0_80px_rgba(34,197,94,0.08)]",
    rightRail:
      "border-sky-300/10 bg-[linear-gradient(180deg,rgba(96,165,250,0.12),rgba(255,255,255,0.02))] shadow-[0_0_80px_rgba(96,165,250,0.08)]",
    leftLabel: "Flow",
    rightLabel: "Scale",
    lineLeft: "via-emerald-300/18",
    lineRight: "via-sky-300/18"
  },
  products: {
    leftGradient: "bg-[linear-gradient(180deg,transparent,rgba(125,211,252,0.08),transparent)]",
    rightGradient: "bg-[linear-gradient(180deg,transparent,rgba(217,119,6,0.08),transparent)]",
    leftRail:
      "border-cyan-300/10 bg-[linear-gradient(180deg,rgba(125,211,252,0.1),rgba(255,255,255,0.02))] shadow-[0_0_80px_rgba(56,189,248,0.08)]",
    rightRail:
      "border-orange-300/10 bg-[linear-gradient(180deg,rgba(251,146,60,0.1),rgba(255,255,255,0.02))] shadow-[0_0_80px_rgba(251,146,60,0.08)]",
    leftLabel: "Suite",
    rightLabel: "Launch",
    lineLeft: "via-cyan-300/18",
    lineRight: "via-orange-200/18"
  },
  contact: {
    leftGradient: "bg-[linear-gradient(180deg,transparent,rgba(236,72,153,0.06),transparent)]",
    rightGradient: "bg-[linear-gradient(180deg,transparent,rgba(125,211,252,0.08),transparent)]",
    leftRail:
      "border-pink-300/10 bg-[linear-gradient(180deg,rgba(244,114,182,0.08),rgba(255,255,255,0.02))] shadow-[0_0_80px_rgba(244,114,182,0.08)]",
    rightRail:
      "border-cyan-300/10 bg-[linear-gradient(180deg,rgba(125,211,252,0.12),rgba(255,255,255,0.02))] shadow-[0_0_80px_rgba(56,189,248,0.08)]",
    leftLabel: "Connect",
    rightLabel: "Demo",
    lineLeft: "via-pink-300/16",
    lineRight: "via-cyan-300/20"
  }
} as const;

export function PageMotion({
  children,
  className,
  variant = "default"
}: PageMotionProps) {
  const palette = pageVariants[variant];

  return (
    <motion.main
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
      className={cn("relative z-10", className)}
    >
      <motion.div
        aria-hidden="true"
        animate={{ opacity: [0.16, 0.28, 0.16] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className={cn("pointer-events-none fixed inset-y-0 left-0 z-0 hidden w-20 xl:block", palette.leftGradient)}
      />
      <motion.div
        aria-hidden="true"
        animate={{ opacity: [0.14, 0.24, 0.14] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        className={cn("pointer-events-none fixed inset-y-0 right-0 z-0 hidden w-20 xl:block", palette.rightGradient)}
      />
      <motion.div
        aria-hidden="true"
        animate={{ y: [0, -18, 0], x: [0, 8, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className={cn("pointer-events-none fixed left-4 top-32 z-0 hidden h-64 w-18 rounded-full border backdrop-blur-xl xl:block", palette.leftRail)}
      />
      <motion.div
        aria-hidden="true"
        animate={{ y: [0, 20, 0], x: [0, -10, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className={cn("pointer-events-none fixed right-4 top-40 z-0 hidden h-64 w-18 rounded-full border backdrop-blur-xl xl:block", palette.rightRail)}
      />
      <motion.div
        aria-hidden="true"
        animate={{ y: [0, -14, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none fixed left-8 bottom-24 z-0 hidden rounded-[1.6rem] border border-white/8 bg-white/5 px-3 py-2 text-[10px] uppercase tracking-[0.24em] text-slate-200/50 backdrop-blur-xl xl:block"
      >
        {palette.leftLabel}
      </motion.div>
      <motion.div
        aria-hidden="true"
        animate={{ y: [0, 16, 0] }}
        transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none fixed right-8 bottom-28 z-0 hidden rounded-[1.6rem] border border-white/8 bg-white/5 px-3 py-2 text-[10px] uppercase tracking-[0.24em] text-slate-200/50 backdrop-blur-xl xl:block"
      >
        {palette.rightLabel}
      </motion.div>
      <motion.div
        aria-hidden="true"
        animate={{ scaleY: [0.94, 1.02, 0.94] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        className={cn("pointer-events-none fixed left-10 top-24 z-0 hidden h-[62vh] w-px bg-gradient-to-b from-transparent to-transparent xl:block", palette.lineLeft)}
      />
      <motion.div
        aria-hidden="true"
        animate={{ scaleY: [1.02, 0.94, 1.02] }}
        transition={{ duration: 7.5, repeat: Infinity, ease: "easeInOut" }}
        className={cn("pointer-events-none fixed right-10 top-24 z-0 hidden h-[62vh] w-px bg-gradient-to-b from-transparent to-transparent xl:block", palette.lineRight)}
      />
      {children}
    </motion.main>
  );
}
