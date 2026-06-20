"use client";

import { AnimatedHeading } from "@/components/ui/AnimatedHeading";
import { DramaticImageReveal } from "@/components/ui/DramaticImageReveal";
import { Reveal } from "@/components/ui/Reveal";

export function CareersSection() {
  return (
    <section className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
      <AnimatedHeading
        eyebrow="Careers"
        title="Join Dezoryn and help build connected digital products for modern businesses."
        className="mb-10"
        variant="minimal"
      />
      <Reveal delay={0.12} y={34} scale={0.96} className="mt-10">
        <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(10,20,35,0.8),rgba(8,18,34,0.96))] shadow-[0_24px_90px_rgba(0,0,0,0.22)]">
          <div className="grid lg:grid-cols-[0.9fr_1.1fr]">
            <div className="relative min-h-72 lg:min-h-full">
              <DramaticImageReveal
                src="/images/careers-team.jpeg"
                alt="Team members collaborating around laptops in an office workspace"
                sizes="(max-width: 1024px) 100vw, 40vw"
                containerClassName="absolute inset-0"
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(8,18,34,0.08),rgba(8,18,34,0.6))]" />
            </div>
            <div className="p-8 sm:p-10">
              <p className="text-xs uppercase tracking-[0.3em] text-cyan-300">Join Our Team</p>
              <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-200/80">
                At Dezoryn, we build products that solve real business challenges. We&apos;re
                always looking for developers, designers, and problem-solvers who care about
                thoughtful execution and meaningful digital experiences.
              </p>
              <div className="mt-8 grid gap-4 border-t border-white/8 pt-6 sm:grid-cols-2">
                {[
                  {
                    title: "Frontend Developer",
                    description: "Build polished interfaces, product pages, and customer-facing experiences."
                  },
                  {
                    title: "Backend Developer",
                    description: "Develop reliable APIs, workflows, and platform integrations."
                  },
                  {
                    title: "UI/UX Designer",
                    description: "Design clear, premium, and user-friendly digital systems."
                  },
                  {
                    title: "Product Intern",
                    description: "Support product thinking, research, and execution across teams."
                  }
                ].map((item) => (
                  <div key={item.title} className="border-b border-white/8 pb-4 last:border-b-0 sm:last:border-b sm:pb-4">
                    <p className="font-[family-name:var(--font-display)] text-xl text-white">
                      {item.title}
                    </p>
                    <p className="mt-2 text-sm leading-7 text-slate-100/74">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
