"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface AnimatedHeadingProps {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
  titleClassName?: string;
  variant?: "gradient" | "frame" | "split" | "minimal";
}

export function AnimatedHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className,
  titleClassName,
  variant = "gradient"
}: AnimatedHeadingProps) {
  const isCenter = align === "center";
  const titleClassNames = {
    gradient:
      "bg-[linear-gradient(90deg,#ffffff_0%,#a5f3fc_35%,#fde68a_70%,#ffffff_100%)] bg-[length:220%_100%] bg-clip-text text-transparent",
    frame:
      "inline-block rounded-[1.25rem] border border-white/10 bg-white/4 px-4 py-2 text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]",
    split:
      "bg-[linear-gradient(180deg,#ffffff_0%,#e2e8f0_100%)] bg-clip-text text-transparent",
    minimal: "text-white"
  } as const;

  return (
    <div className={cn(isCenter ? "text-center" : "", className)}>
      <motion.p
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.7 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="mb-4 text-xs uppercase tracking-[0.34em] text-cyan-300"
      >
        {eyebrow}
      </motion.p>
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.7, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
        className={cn(
          "font-[family-name:var(--font-display)] text-4xl leading-tight text-white sm:text-5xl",
          titleClassName
        )}
      >
        <motion.span
          initial={
            variant === "frame"
              ? { opacity: 0, scale: 0.96 }
              : { backgroundPositionX: "0%" }
          }
          whileInView={
            variant === "frame"
              ? { opacity: 1, scale: 1 }
              : { backgroundPositionX: "100%" }
          }
          viewport={{ once: true, amount: 0.7 }}
          transition={{ duration: 1.4, delay: 0.18, ease: "easeInOut" }}
          className={titleClassNames[variant]}
        >
          {title}
        </motion.span>
      </motion.h2>
      {description ? (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.7 }}
          transition={{ duration: 0.6, delay: 0.16, ease: [0.22, 1, 0.36, 1] }}
          className={cn(
            "mt-5 text-lg leading-8 text-slate-200/78",
            isCenter ? "mx-auto max-w-3xl" : "max-w-xl"
          )}
        >
          {description}
        </motion.p>
      ) : null}
    </div>
  );
}
