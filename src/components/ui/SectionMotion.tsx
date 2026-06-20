"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionMotionProps {
  children: React.ReactNode;
  className?: string;
  variant?: "default" | "spotlight" | "grid" | "wave";
}

const sectionVariants = {
  default: {
    topLine: "bg-gradient-to-r from-transparent via-white/18 to-transparent",
    rightOrb:
      "bg-[radial-gradient(circle,rgba(125,211,252,0.14),transparent_70%)]",
    leftOrb:
      "bg-[radial-gradient(circle,rgba(255,214,138,0.1),transparent_72%)]",
    bottomLine: "bg-gradient-to-r from-transparent via-white/10 to-transparent"
  },
  spotlight: {
    topLine: "bg-gradient-to-r from-transparent via-cyan-200/30 to-transparent",
    rightOrb:
      "bg-[radial-gradient(circle,rgba(125,211,252,0.22),transparent_68%)]",
    leftOrb:
      "bg-[radial-gradient(circle,rgba(255,255,255,0.1),transparent_72%)]",
    bottomLine: "bg-gradient-to-r from-transparent via-cyan-100/16 to-transparent"
  },
  grid: {
    topLine: "bg-gradient-to-r from-transparent via-amber-200/26 to-transparent",
    rightOrb:
      "bg-[radial-gradient(circle,rgba(255,214,138,0.16),transparent_68%)]",
    leftOrb:
      "bg-[radial-gradient(circle,rgba(96,165,250,0.1),transparent_72%)]",
    bottomLine: "bg-gradient-to-r from-transparent via-amber-100/14 to-transparent"
  },
  wave: {
    topLine: "bg-gradient-to-r from-transparent via-sky-200/26 to-transparent",
    rightOrb:
      "bg-[radial-gradient(circle,rgba(56,189,248,0.18),transparent_68%)]",
    leftOrb:
      "bg-[radial-gradient(circle,rgba(34,197,94,0.08),transparent_72%)]",
    bottomLine: "bg-gradient-to-r from-transparent via-emerald-100/12 to-transparent"
  }
} as const;

export function SectionMotion({
  children,
  className,
  variant = "default"
}: SectionMotionProps) {
  const palette = sectionVariants[variant];

  return (
    <motion.section
      initial={{ opacity: 0, y: 28, scale: 0.985 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
      className={cn("relative overflow-hidden", className)}
    >
      <motion.div
        aria-hidden="true"
        animate={{ opacity: [0.18, 0.34, 0.18], scaleX: [0.96, 1.04, 0.96] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className={cn(
          "pointer-events-none absolute inset-x-10 top-0 h-px",
          palette.topLine
        )}
      />
      <motion.div
        aria-hidden="true"
        animate={{ x: [0, 14, 0], y: [0, -12, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        className={cn(
          "pointer-events-none absolute -right-14 top-10 h-36 w-36 rounded-full blur-2xl",
          palette.rightOrb
        )}
      />
      <motion.div
        aria-hidden="true"
        animate={{ x: [0, -10, 0], y: [0, 10, 0] }}
        transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
        className={cn(
          "pointer-events-none absolute -left-14 bottom-10 h-28 w-28 rounded-full blur-2xl",
          palette.leftOrb
        )}
      />
      <motion.div
        aria-hidden="true"
        animate={{ opacity: [0.14, 0.26, 0.14], scaleX: [1, 1.04, 1] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        className={cn(
          "pointer-events-none absolute inset-x-16 bottom-0 h-px",
          palette.bottomLine
        )}
      />
      <div className="relative">{children}</div>
    </motion.section>
  );
}
