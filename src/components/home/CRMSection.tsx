"use client";

import { motion } from "framer-motion";
import { AnimatedHeading } from "@/components/ui/AnimatedHeading";
import { Reveal } from "@/components/ui/Reveal";
import { SectionMotion } from "@/components/ui/SectionMotion";

// CRM workflow ke steps ek array me rakhe hain, taaki order aur content easily update ho sake.
const items = [
  {
    title: "Lead Capture",
    description:
      "Capture inquiries from websites, forms, campaigns, and landing pages automatically."
  },
  {
    title: "Auto Assignment",
    description:
      "Route leads to the right sales representative based on predefined rules."
  },
  {
    title: "Lead Scoring",
    description:
      "Prioritize high-intent prospects using behavior and engagement data."
  },
  {
    title: "Demo Scheduling",
    description:
      "Allow prospects to book meetings directly with your sales team."
  },
  {
    title: "Pipeline Tracking",
    description:
      "Monitor opportunities from first contact to final conversion."
  },
  {
    title: "Source Analytics",
    description:
      "Understand which marketing channels generate the highest-quality leads."
  }
] as const;

export function CRMSection() {
  return (
    <SectionMotion
      variant="wave"
      className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8"
    >
      {/* Subtle moving line section ko thoda premium motion feel deti hai. */}
      <motion.div
        aria-hidden="true"
        animate={{ x: ["-10%", "10%", "-10%"] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute inset-x-10 top-24 h-px bg-gradient-to-r from-transparent via-cyan-200/80 to-transparent"
      />

      <AnimatedHeading
        eyebrow="CRM Growth Engine"
        title="Turn website traffic into sales-ready action with a connected CRM layer."
        className="mb-10 max-w-3xl"
        variant="split"
      />

      <div className="divide-y divide-white/8 rounded-[2rem] border border-white/8 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(255,255,255,0.02))] px-6 backdrop-blur-xl">
        {items.map((item, index) => (
          <Reveal key={item.title} delay={0.08 * index} y={34} scale={0.97}>
            <motion.div
              animate={{ x: [0, index % 2 === 0 ? 6 : -6, 0] }}
              transition={{
                duration: 5 + index * 0.45,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="grid gap-4 py-6 md:grid-cols-[92px_260px_1fr] md:items-start"
            >
              <p className="text-xs uppercase tracking-[0.32em] text-cyan-300">
                0{index + 1}
              </p>

              <h3 className="font-[family-name:var(--font-display)] text-3xl text-white">
                {item.title}
              </h3>

              <p className="text-sm leading-7 text-slate-200/78">
                {item.description}
              </p>
            </motion.div>
          </Reveal>
        ))}
      </div>
    </SectionMotion>
  );
}