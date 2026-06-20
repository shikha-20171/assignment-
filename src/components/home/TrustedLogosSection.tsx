"use client";

import { motion } from "framer-motion";
import { Reveal } from "@/components/ui/Reveal";
import { SectionMotion } from "@/components/ui/SectionMotion";

const partnerLogos = [
  "SchoolyCore",
  "Dezoryn CRM",
  "Hospital Suite",
  "HRM Cloud",
  "AI Desk",
  "LaunchPad",
  "InventoryOS",
  "Support Grid"
] as const;

export function TrustedLogosSection() {
  const marqueeLogos = [...partnerLogos, ...partnerLogos];

  return (
    <SectionMotion className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <Reveal className="mb-8 text-center">
        <p className="text-xs uppercase tracking-[0.34em] text-cyan-300">
          Trusted By Growth-Focused Teams
        </p>
      </Reveal>

      <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/4 px-4 py-5 backdrop-blur-xl">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 26, ease: "linear", repeat: Infinity }}
          className="flex w-max gap-4"
        >
          {marqueeLogos.map((logo, index) => (
            <div
              key={`${logo}-${index}`}
              className="rounded-full border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.08),rgba(255,255,255,0.03))] px-5 py-3 text-sm font-medium text-slate-100/85 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]"
            >
              {logo}
            </div>
          ))}
        </motion.div>
      </div>
    </SectionMotion>
  );
}
