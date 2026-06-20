"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Bot, Calculator, FileText, Headphones, Sparkles } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { AnimatedHeading } from "@/components/ui/AnimatedHeading";
import { DramaticImageReveal } from "@/components/ui/DramaticImageReveal";
import { Reveal } from "@/components/ui/Reveal";
import { SectionMotion } from "@/components/ui/SectionMotion";

// AI feature cards ka content ek jagah rakha hai taaki update karna easy rahe.
const features = [
  {
    title: "AI Lead Qualification",
    description: "Qualify incoming inquiries faster and route serious prospects to the right sales flow.",
    icon: Sparkles
  },
  {
    title: "AI Support Assistant",
    description: "Provide structured 24/7 support across products, portals, and customer conversations.",
    icon: Headphones
  },
  {
    title: "AI Proposal Generator",
    description: "Generate faster business proposals using reusable scope, pricing, and solution details.",
    icon: FileText
  },
  {
    title: "AI Cost Calculator",
    description: "Share faster cost estimates so customers understand project scope before the first meeting.",
    icon: Calculator
  },
  {
    title: "AI Sales Assistant",
    description: "Support sales teams with product guidance, responses, and clearer next-step actions.",
    icon: Bot
  },
  {
    title: "AI Knowledge Base",
    description: "Organize internal and customer-facing information so answers stay faster and more consistent.",
    icon: Sparkles
  }
] as const;

const highlights = [
  {
    label: "Lead Response",
    value: "Faster first replies"
  },
  {
    label: "Support Coverage",
    value: "Structured 24/7 assistance"
  },
  {
    label: "Team Efficiency",
    value: "Less manual coordination"
  }
] as const;

export function AISection() {
  const [activeFeature, setActiveFeature] = useState<string>(features[0].title);
  const selectedFeature =
    features.find((feature) => feature.title === activeFeature) ?? features[0];

  return (
    <SectionMotion className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="flex h-full flex-col gap-5">
          <AnimatedHeading
            eyebrow="AI-Powered Business Assistance"
            title="Operational tools that reduce manual work across sales, support, and delivery."
            description="Use practical automation, guided workflows, and faster internal systems to improve consistency without adding unnecessary complexity."
            className="space-y-5"
            variant="frame"
          />

          <Reveal delay={0.08} y={24} scale={0.98}>
            <div className="overflow-hidden rounded-[1.8rem] border border-white/10 bg-[linear-gradient(160deg,rgba(12,24,43,0.82),rgba(7,15,28,0.94))] px-5 py-5 shadow-[0_20px_70px_rgba(0,0,0,0.18)]">
              <div className="space-y-4">
                {highlights.map((item) => (
                  <div
                    key={item.label}
                    className="grid gap-2 border-b border-white/8 pb-4 last:border-b-0 last:pb-0 sm:grid-cols-[140px_1fr]"
                  >
                    <p className="text-xs uppercase tracking-[0.28em] text-cyan-300/82">
                      {item.label}
                    </p>
                    <p className="text-sm leading-7 text-slate-200/76">
                      {item.value}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.12} y={24} scale={0.98}>
            <div className="rounded-[1.8rem] border border-dashed border-cyan-300/18 bg-cyan-300/[0.04] px-5 py-5">
              <p className="text-xs uppercase tracking-[0.3em] text-cyan-300">
                Where It Helps
              </p>
              <p className="mt-3 text-sm leading-7 text-slate-200/76">
                Useful for inquiry handling, customer communication, proposal preparation, internal
                coordination, and product guidance across growing teams.
              </p>
            </div>
          </Reveal>
        </div>

        <div className="grid gap-5">
          <Reveal delay={0.06} y={30} scale={0.98}>
            <Card className="overflow-hidden rounded-[2rem] border-white/10 p-0">
              <div className="relative h-64 w-full overflow-hidden">
                <DramaticImageReveal
                  src="/images/business-assistance.jpeg"
                  alt="Business analytics dashboards and digital workflow interface"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  containerClassName="h-full w-full"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(6,14,28,0.12),rgba(6,14,28,0.58))]" />
                <div className="absolute inset-x-0 bottom-0 p-6">
                  <p className="text-xs uppercase tracking-[0.3em] text-cyan-200/80">
                    Workflow Visibility
                  </p>
                  <p className="mt-2 max-w-lg text-sm leading-7 text-slate-100/82">
                    A clearer view of reporting, customer activity, and business decisions in one
                    connected layer.
                  </p>
                </div>
              </div>
            </Card>
          </Reveal>

          <div className="grid gap-5 sm:grid-cols-2">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              const isActive = activeFeature === feature.title;
              const isEven = index % 2 === 0;

              return (
                <motion.div
                  key={feature.title}
                  initial={{
                    opacity: 0,
                    x: 0,
                    y: -260 + index * 22,
                    scale: 0.7 + index * 0.03,
                    rotate: isEven ? -6 : 6
                  }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                    y: 0,
                    scale: 1,
                    rotate: 0
                  }}
                  viewport={{ once: true, amount: 0.35 }}
                  transition={{
                    duration: 0.9,
                    delay: 0.18 * index,
                    ease: [0.22, 1, 0.36, 1]
                  }}
                  whileHover={{ y: -8 }}
                  className="h-full"
                  style={{ zIndex: features.length - index }}
                >
                  <Card
                    role="button"
                    tabIndex={0}
                    onClick={() => setActiveFeature(feature.title)}
                    onKeyDown={(event) => {
                      if (event.key === "Enter" || event.key === " ") {
                        event.preventDefault();
                        setActiveFeature(feature.title);
                      }
                    }}
                    className={`group h-full cursor-pointer rounded-[1.9rem] bg-[linear-gradient(160deg,rgba(15,28,49,0.86),rgba(6,14,28,0.92))] p-6 transition duration-300 hover:-translate-y-2 hover:border-cyan-300/25 ${
                      isActive
                        ? "border-cyan-200/45 shadow-[0_0_0_1px_rgba(165,243,252,0.25),0_24px_70px_rgba(0,0,0,0.22)]"
                        : "border-white/10"
                    }`}
                  >
                    <motion.div
                      aria-hidden="true"
                      animate={{
                        opacity: isActive ? [0.35, 0.8, 0.35] : [0.12, 0.22, 0.12],
                        scale: isActive ? [1, 1.12, 1] : 1
                      }}
                      transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut" }}
                      className="absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-cyan-200/80 to-transparent"
                    />

                    <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-300/20 bg-cyan-300/10 text-cyan-100">
                      <Icon className="h-5 w-5" />
                    </div>

                    <h3 className="font-[family-name:var(--font-display)] text-2xl text-white">
                      {feature.title}
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-slate-200/78">
                      {feature.description}
                    </p>
                  </Card>
                </motion.div>
              );
            })}
          </div>

          <motion.div
            key={activeFeature}
            initial={{ opacity: 0, y: 24, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="rounded-[1.7rem] border border-cyan-300/18 bg-cyan-300/[0.05] px-5 py-5"
          >
            <p className="text-xs uppercase tracking-[0.28em] text-cyan-300">
              Selected Highlight
            </p>
            <p className="mt-3 font-[family-name:var(--font-display)] text-2xl text-white">
              {activeFeature}
            </p>
            <p className="mt-2 max-w-2xl text-sm leading-7 text-slate-200/78">
              {selectedFeature.description}
            </p>
          </motion.div>
        </div>
      </div>
    </SectionMotion>
  );
}
