"use client";

import { motion } from "framer-motion";
import { AnimatedHeading } from "@/components/ui/AnimatedHeading";
import { Reveal } from "@/components/ui/Reveal";
import { SectionMotion } from "@/components/ui/SectionMotion";

const items = [
  {
    title: "Ticket Management",
    description: "Track, assign, and resolve customer issues efficiently."
  },
  {
    title: "Knowledge Base",
    description: "Provide self-service documentation and answers for common questions."
  },
  {
    title: "Live Support",
    description: "Offer real-time assistance through chat and support channels."
  },
  {
    title: "Priority Escalation",
    description: "Automatically escalate critical issues to the appropriate teams."
  }
] as const;

export function SupportSection() {
  return (
    <SectionMotion
      variant="spotlight"
      className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8"
    >
      <AnimatedHeading
        eyebrow="Smart Support Center"
        title="Support workflows that feel fast for customers and clear for teams."
        className="mb-10 max-w-3xl"
        variant="frame"
      />
      <div className="grid gap-x-10 gap-y-8 md:grid-cols-2">
        {items.map((item, index) => {
          const moveUp = index % 2 === 0;

          return (
            <Reveal key={item.title} delay={0.08 * index} y={34} scale={0.97}>
              <motion.div
                animate={{ y: [0, moveUp ? -6 : 6, 0] }}
                transition={{
                  duration: 4.6 + index * 0.4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="relative border-b border-white/8 pb-6"
              >
                <motion.div
                  aria-hidden="true"
                  animate={{ scaleX: [0.7, 1, 0.7], opacity: [0.35, 0.8, 0.35] }}
                  transition={{
                    duration: 5.5 + index * 0.4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="absolute -top-2 left-0 h-px w-24 origin-left bg-gradient-to-r from-cyan-300/80 to-transparent"
                />
                <p className="text-xs uppercase tracking-[0.3em] text-slate-300/70">Support</p>
                <h3 className="mt-3 font-[family-name:var(--font-display)] text-3xl text-white">
                  {item.title}
                </h3>
                <p className="mt-3 max-w-xl text-sm leading-7 text-slate-200/78">
                  {item.description}
                </p>
              </motion.div>
            </Reveal>
          );
        })}
      </div>
    </SectionMotion>
  );
}
