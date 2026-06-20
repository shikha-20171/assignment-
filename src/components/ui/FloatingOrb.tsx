"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface FloatingOrbProps {
  className?: string;
  delay?: number;
  duration?: number;
}

export function FloatingOrb({
  className,
  delay = 0,
  duration = 8
}: FloatingOrbProps) {
  return (
    <motion.div
      className={cn("absolute rounded-full blur-xl", className)}
      animate={{
        y: [0, -18, 0],
        scale: [1, 1.08, 1]
      }}
      transition={{
        duration,
        delay,
        repeat: Number.POSITIVE_INFINITY,
        ease: "easeInOut"
      }}
    />
  );
}
