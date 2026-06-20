"use client";

import { motion } from "framer-motion";
import { services } from "@/data/services";
import { Card } from "@/components/ui/Card";
import { AnimatedHeading } from "@/components/ui/AnimatedHeading";
import { Reveal } from "@/components/ui/Reveal";
import { SectionMotion } from "@/components/ui/SectionMotion";

export function ServicesSection() {
  return (
    <SectionMotion
      variant="grid"
      className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8"
    >
      <motion.div
        aria-hidden="true"
        animate={{ x: [0, 24, 0], y: [0, -12, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute inset-x-10 top-20 h-24 rounded-full bg-[radial-gradient(circle_at_center,rgba(125,211,252,0.12),transparent_72%)] blur-3xl"
      />
      <motion.div
        aria-hidden="true"
        animate={{ x: [0, -22, 0], y: [0, 14, 0] }}
        transition={{ duration: 10.5, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute inset-x-16 bottom-6 h-20 rounded-full bg-[radial-gradient(circle_at_center,rgba(255,214,138,0.1),transparent_72%)] blur-3xl"
      />

      <motion.div
        aria-hidden="true"
        animate={{ rotate: 360 }}
        transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
        className="pointer-events-none absolute right-6 top-10 hidden h-24 w-24 rounded-full border border-dashed border-cyan-200/20 xl:block"
      >
        <div className="absolute inset-3 rounded-full border border-white/8" />
        <div className="absolute left-1/2 top-0 h-3 w-3 -translate-x-1/2 rounded-full bg-cyan-200/70 shadow-[0_0_16px_rgba(165,243,252,0.45)]" />
      </motion.div>

      <AnimatedHeading
        eyebrow="Services"
        title="Business solutions designed to automate operations and accelerate growth."
        className="mb-10 max-w-3xl"
        variant="split"
      />

      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {services.map((service, index) => {
          const isEven = index % 2 === 0;

          return (
            <Reveal key={service.title} delay={0.08 * index} y={34} scale={0.97}>
              <motion.div
                animate={{ y: [0, isEven ? -8 : 8, 0] }}
                transition={{
                  duration: 4.8 + index * 0.5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="h-full"
              >
                <Card className="relative h-full overflow-hidden rounded-[1.8rem] transition duration-300 hover:-translate-y-2 hover:border-cyan-300/25">
                  <motion.div
                    aria-hidden="true"
                    animate={{ rotate: -360 }}
                    transition={{
                      duration: 20 + index * 2,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                    className="absolute right-4 top-4 h-12 w-12 rounded-full border border-white/8"
                  >
                    <div className="absolute inset-[7px] rounded-full border border-cyan-300/18" />
                    <div className="absolute left-1/2 top-0 h-2 w-2 -translate-x-1/2 rounded-full bg-cyan-200/70" />
                  </motion.div>

                  <motion.div
                    aria-hidden="true"
                    animate={{ x: ["-15%", "15%", "-15%"] }}
                    transition={{
                      duration: 7 + index,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                    className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-200/70 to-transparent"
                  />

                  <motion.div
                    aria-hidden="true"
                    animate={{ x: [0, 18, 0], opacity: [0.18, 0.36, 0.18] }}
                    transition={{
                      duration: 6 + index * 0.4,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                    className="absolute -right-10 top-12 h-24 w-24 rounded-full bg-cyan-300/10 blur-2xl"
                  />

                  <h3 className="font-[family-name:var(--font-display)] text-2xl text-white">
                    {service.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-slate-200/80">
                    {service.description}
                  </p>
                </Card>
              </motion.div>
            </Reveal>
          );
        })}
      </div>
    </SectionMotion>
  );
}
