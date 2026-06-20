"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/Card";
import { Reveal } from "@/components/ui/Reveal";
import { DramaticImageReveal } from "@/components/ui/DramaticImageReveal";

const storyBlocks = [
  {
    title: "About Dezoryn",
    text: "Dezoryn Technology Pvt. Ltd. is building a next-generation digital ecosystem that brings together SaaS products, CRM solutions, AI automation, and customer experience platforms in one connected environment."
  },
  {
    title: "What We Build",
    text: "We create practical digital systems for operations, sales, support, and growth, designed to improve clarity, consistency, and execution across teams."
  }
] as const;

const industryFocus = [
  "Educational Institutions",
  "Healthcare Organizations",
  "Growing Businesses",
  "Enterprise Teams"
] as const;

export function AboutSection() {
  return (
    <section className="relative mx-auto max-w-7xl overflow-hidden px-4 py-18 sm:px-6 lg:px-8">
      <div className="absolute inset-x-0 top-8 h-72 rounded-[3rem] bg-[radial-gradient(circle_at_top_left,rgba(125,211,252,0.16),transparent_42%),radial-gradient(circle_at_80%_18%,rgba(255,214,138,0.12),transparent_34%)] blur-2xl" />
      <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="relative">
          <Reveal className="space-y-6">
            <p className="text-xs uppercase tracking-[0.34em] text-cyan-300">About Us</p>
            <h1 className="max-w-xl font-[family-name:var(--font-display)] text-5xl leading-none text-white sm:text-6xl">
              Building Smarter Digital Experiences for Modern Businesses
            </h1>
            <p className="max-w-xl text-lg leading-8 text-slate-200/78">
              Connected products and systems designed to help organizations manage operations,
              customer workflows, and growth more clearly.
            </p>
          </Reveal>

          <Reveal delay={0.08} y={30} scale={0.98} className="mt-10">
            <Card className="overflow-hidden rounded-[2rem] border-white/10 p-0 shadow-[0_22px_80px_rgba(0,0,0,0.24)]">
              <div className="relative h-72 w-full overflow-hidden">
                <DramaticImageReveal
                  src="/images/careers-team.jpeg"
                  alt="Team members collaborating in a shared workspace"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  containerClassName="h-full w-full"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(8,18,34,0.12),rgba(8,18,34,0.68))]" />
                <div className="absolute inset-x-0 bottom-0 p-6">
                  <p className="text-xs uppercase tracking-[0.32em] text-cyan-200/85">
                    Built For Connected Operations
                  </p>
                  <p className="mt-2 max-w-md text-sm leading-7 text-slate-100/82">
                    Products and workflows designed to work together through one connected system.
                  </p>
                </div>
              </div>
            </Card>
          </Reveal>

          <div className="relative mt-10 hidden min-h-[18rem] lg:block">
            <motion.div
              animate={{ y: [0, -10, 0], rotate: [0, 1.5, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute left-2 top-4 w-60 rounded-[2rem] border border-cyan-300/16 bg-[linear-gradient(180deg,rgba(16,29,49,0.84),rgba(8,18,34,0.92))] p-6 shadow-[0_20px_70px_rgba(0,0,0,0.24)] backdrop-blur-xl"
            >
              <p className="text-xs uppercase tracking-[0.32em] text-cyan-300">Built For Growth</p>
              <p className="mt-4 font-[family-name:var(--font-display)] text-3xl text-white">
                Business-first systems.
              </p>
              <p className="mt-3 text-sm leading-7 text-slate-200/76">
                Connected software, automation, and clean digital execution.
              </p>
            </motion.div>

            <motion.div
              animate={{ y: [0, 14, 0], x: [0, -6, 0] }}
              transition={{ duration: 7.2, repeat: Infinity, ease: "easeInOut" }}
              className="absolute right-6 top-12 w-56 rounded-[2rem] border border-amber-200/14 bg-[linear-gradient(180deg,rgba(47,31,14,0.82),rgba(18,14,11,0.9))] p-5 shadow-[0_24px_70px_rgba(0,0,0,0.22)] backdrop-blur-xl"
            >
              <p className="text-xs uppercase tracking-[0.32em] text-amber-200/85">Approach</p>
              <p className="mt-4 text-sm leading-7 text-slate-200/76">
                Understand the business challenge first. Then build the right technology around
                it.
              </p>
            </motion.div>

            <motion.div
              animate={{ y: [0, -8, 0], x: [0, 8, 0] }}
              transition={{ duration: 6.4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute bottom-2 left-20 rounded-[1.6rem] border border-white/10 bg-white/6 px-5 py-4 backdrop-blur-xl"
            >
              <p className="font-[family-name:var(--font-display)] text-2xl text-white">Future-ready</p>
              <p className="mt-1 text-sm text-slate-200/75">AI, cloud, CRM, support, and scale.</p>
            </motion.div>
          </div>
        </div>

        <div className="space-y-6">
          <Reveal delay={0.08} y={34} scale={0.97}>
            <Card className="relative overflow-hidden rounded-[2.1rem] border-white/10 bg-[linear-gradient(160deg,rgba(16,29,49,0.84),rgba(8,18,34,0.92))] p-8 shadow-[0_28px_90px_rgba(0,0,0,0.26)]">
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-200/75 to-transparent" />
              <div className="grid gap-6 xl:grid-cols-[1.05fr_0.95fr]">
                <div className="space-y-5">
                  {storyBlocks.map((block) => (
                    <div key={block.title}>
                      <p className="text-xs uppercase tracking-[0.3em] text-cyan-300/86">
                        {block.title}
                      </p>
                      <p className="mt-3 text-base leading-8 text-slate-200/80">{block.text}</p>
                    </div>
                  ))}
                </div>
                <div className="rounded-[1.7rem] border border-white/8 bg-white/5 p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]">
                  <p className="text-xs uppercase tracking-[0.3em] text-amber-200/85">
                    Industries We Support
                  </p>
                  <div className="mt-5 grid gap-3">
                    {industryFocus.map((item) => (
                      <div
                        key={item}
                        className="rounded-[1rem] border border-white/8 bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.03))] px-4 py-3 text-sm text-slate-100/82"
                      >
                        {item}
                      </div>
                    ))}
                  </div>
                  <p className="mt-5 text-sm leading-7 text-slate-200/72">
                    Built for organizations that need better operations, collaboration, and
                    customer-facing systems.
                  </p>
                </div>
              </div>
            </Card>
          </Reveal>

          <div className="grid gap-6 xl:grid-cols-[1fr_0.94fr]">
            <Reveal delay={0.12} y={32} scale={0.97} className="h-full">
              <Card className="h-full rounded-[2rem] p-8 transition duration-300 hover:-translate-y-2 hover:border-cyan-300/25">
                <p className="text-xs uppercase tracking-[0.32em] text-cyan-300">Our Mission</p>
                <p className="mt-4 text-lg leading-8 text-slate-200/82">
                  To empower organizations with innovative digital solutions that simplify
                  operations, improve efficiency, and drive sustainable growth.
                </p>
              </Card>
            </Reveal>
            <Reveal delay={0.18} y={32} scale={0.97} className="h-full">
              <Card className="h-full rounded-[2rem] border-amber-200/12 bg-[linear-gradient(160deg,rgba(46,30,14,0.74),rgba(14,11,9,0.92))] p-8 transition duration-300 hover:-translate-y-2 hover:border-amber-200/25">
                <p className="text-xs uppercase tracking-[0.32em] text-amber-200/85">Our Vision</p>
                <p className="mt-4 text-lg leading-8 text-slate-200/82">
                  To become a trusted technology partner for businesses worldwide by creating
                  intelligent, scalable, and future-ready software ecosystems.
                </p>
              </Card>
            </Reveal>
          </div>

        </div>
      </div>

      <Reveal delay={0.16} y={34} scale={0.97} className="mt-8">
        <div className="overflow-hidden rounded-[2.2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(11,21,37,0.84),rgba(8,18,34,0.96))] px-6 py-8 shadow-[0_24px_90px_rgba(0,0,0,0.24)] sm:px-8 lg:px-10">
          <div className="grid gap-10 xl:grid-cols-[1.08fr_0.92fr]">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              className="min-w-0"
            >
              <p className="text-xs uppercase tracking-[0.32em] text-cyan-300">
                What We Deliver
              </p>
              <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-100/78">
                We build practical digital systems that support operations, sales, customer
                communication, and long-term growth. Our work includes SaaS products, CRM
                platforms, enterprise software, support systems, and cloud infrastructure that
                help teams work with more clarity, consistency, and control.
              </p>
              <div className="mt-6 grid gap-x-8 gap-y-3 text-sm leading-7 text-slate-200/80 md:grid-cols-2 xl:max-w-5xl">
                <p className="border-l border-cyan-300/30 pl-4">
                  Business solutions for smoother daily execution
                </p>
                <p className="border-l border-cyan-300/30 pl-4">
                  Scalable SaaS products for growing teams
                </p>
                <p className="border-l border-cyan-300/30 pl-4">
                  CRM systems for lead flow and follow-up
                </p>
                <p className="border-l border-cyan-300/30 pl-4">
                  Custom software for operations and workflows
                </p>
                <p className="border-l border-cyan-300/30 pl-4">
                  Support tools for better service delivery
                </p>
                <p className="border-l border-cyan-300/30 pl-4">
                  Cloud-ready infrastructure built to scale
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ duration: 0.5, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="min-w-0 border-t border-white/10 pt-8 xl:border-l xl:border-t-0 xl:pl-10 xl:pt-0"
            >
              <p className="text-xs uppercase tracking-[0.32em] text-cyan-300">
                Our Approach
              </p>
              <p className="mt-4 text-lg leading-8 text-slate-100/76">
                We begin by understanding goals, existing processes, and workflow gaps before
                deciding what needs to be built. This helps us create the right structure instead
                of adding unnecessary complexity.
              </p>
              <p className="mt-4 text-base leading-8 text-slate-200/78">
                Once the foundation is clear, we design and deliver systems that are usable,
                reliable, and ready to support long-term growth across teams, customers, and
                day-to-day operations.
              </p>
            </motion.div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
