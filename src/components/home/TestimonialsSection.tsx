"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/Card";
import { AnimatedHeading } from "@/components/ui/AnimatedHeading";
import { Reveal } from "@/components/ui/Reveal";
import { SectionMotion } from "@/components/ui/SectionMotion";

const testimonials = [
  {
    quote:
      "The connected approach across products, CRM, and support feels well structured and practical for modern business operations.",
    author: "Early Partner Feedback",
    company: "Product Review"
  },
  {
    quote:
      "What stands out is the clarity of the ecosystem idea, especially how customer workflows and product access are tied together.",
    author: "Early Partner Feedback",
    company: "Solution Review"
  }
] as const;

export function TestimonialsSection() {
  return (
    <SectionMotion className="relative mx-auto max-w-7xl overflow-hidden px-4 py-16 sm:px-6 lg:px-8">
      <motion.div
        aria-hidden="true"
        animate={{ x: [0, 18, 0], y: [0, -14, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute left-8 top-16 h-44 w-44 rounded-full bg-cyan-400/10 blur-3xl"
      />
      <motion.div
        aria-hidden="true"
        animate={{ x: [0, -16, 0], y: [0, 16, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        className="absolute right-8 top-28 h-52 w-52 rounded-full bg-amber-300/10 blur-3xl"
      />

      <AnimatedHeading
        eyebrow="Early Partner Feedback"
        title="Early product feedback focused on connected operations, clarity, and platform direction."
        className="mb-10 max-w-3xl"
        variant="gradient"
      />

      <div className="relative grid gap-5 md:grid-cols-2">
        {testimonials.map((item, index) => {
          const isEven = index % 2 === 0;

          return (
            <Reveal key={item.company} delay={0.08 * index} y={34} scale={0.97}>
              <motion.div
                animate={{ y: [0, isEven ? -8 : 8, 0] }}
                transition={{
                  duration: 5 + index,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                whileHover={{ y: -10, rotate: isEven ? -1 : 1 }}
                className="h-full"
              >
                <Card className="group relative h-full overflow-hidden rounded-[1.8rem] p-6 transition duration-300 hover:border-cyan-300/25">
                  <motion.div
                    aria-hidden="true"
                    animate={{
                      opacity: [0.3, 0.7, 0.3],
                      scale: [1, 1.08, 1]
                    }}
                    transition={{
                      duration: 4.5 + index,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                    className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-cyan-300/10 blur-2xl"
                  />

                  <motion.p
                    aria-hidden="true"
                    animate={{ y: [0, -6, 0] }}
                    transition={{
                      duration: 3.8 + index * 0.4,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                    className="mb-5 font-[family-name:var(--font-display)] text-6xl leading-none text-cyan-200/18"
                  >
                    "
                  </motion.p>

                  <p className="relative text-base leading-8 text-slate-100/86">
                    &ldquo;{item.quote}&rdquo;
                  </p>

                  <motion.div
                    aria-hidden="true"
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true, amount: 0.8 }}
                    transition={{ duration: 0.6, delay: 0.15 + index * 0.08 }}
                    className="mt-6 h-px origin-left bg-gradient-to-r from-cyan-300/70 via-white/35 to-transparent"
                  />

                  <div className="mt-6">
                    <p className="font-semibold text-white">{item.author}</p>
                    <p className="text-sm text-slate-300/70">{item.company}</p>
                  </div>
                </Card>
              </motion.div>
            </Reveal>
          );
        })}
      </div>
    </SectionMotion>
  );
}
