"use client";

import { motion } from "framer-motion";
import { services } from "@/data/services";
import { Card } from "@/components/ui/Card";
import { AnimatedHeading } from "@/components/ui/AnimatedHeading";
import { PageMotion } from "@/components/ui/PageMotion";
import { Reveal } from "@/components/ui/Reveal";

export default function ServicesPage() {
  return (
    <PageMotion variant="services" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <motion.div
        aria-hidden="true"
        animate={{ x: [0, 28, 0], y: [0, -10, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute inset-x-10 top-28 h-24 rounded-full bg-[radial-gradient(circle_at_center,rgba(125,211,252,0.12),transparent_72%)] blur-3xl"
      />
      <AnimatedHeading
        eyebrow="Services"
        title="UX systems focused on conversion, clarity, and scale."
        className="mb-10"
      />
      <div className="mt-10 grid gap-5 md:grid-cols-2">
        {services.map((service, index) => (
          <Reveal key={service.title} delay={0.08 * index} y={34} scale={0.97}>
            <motion.div
              animate={{ y: [0, index % 2 === 0 ? -8 : 8, 0] }}
              transition={{ duration: 5 + index * 0.4, repeat: Infinity, ease: "easeInOut" }}
            >
              <Card className="relative overflow-hidden p-8 transition duration-300 hover:-translate-y-2 hover:border-cyan-300/25">
                <motion.div
                  aria-hidden="true"
                  animate={{ x: ["-20%", "20%", "-20%"] }}
                  transition={{ duration: 8 + index, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-200/70 to-transparent"
                />
                <motion.div
                  aria-hidden="true"
                  animate={{ x: [0, 22, 0], opacity: [0.15, 0.32, 0.15] }}
                  transition={{ duration: 6.5 + index * 0.5, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -right-8 top-10 h-24 w-24 rounded-full bg-cyan-300/10 blur-2xl"
                />
                <h2 className="font-[family-name:var(--font-display)] text-3xl text-white">
                  {service.title}
                </h2>
                <p className="mt-4 text-slate-200/80">{service.description}</p>
              </Card>
            </motion.div>
          </Reveal>
        ))}
      </div>
    </PageMotion>
  );
}
