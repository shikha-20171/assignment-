import { AnimatedHeading } from "@/components/ui/AnimatedHeading";
import { Reveal } from "@/components/ui/Reveal";
import { SectionMotion } from "@/components/ui/SectionMotion";

const items = [
  {
    title: "SchoolyCore ERP",
    description: "Connected ERP platform for structured operations, reporting, and workflow visibility."
  },
  {
    title: "Hospital Management Suite",
    description: "Healthcare workflow system for patient operations, billing visibility, and team coordination."
  },
  {
    title: "CRM Platform",
    description: "Lead capture, qualification, pipeline tracking, and sales workflow management."
  }
] as const;

export function PortfolioSection() {
  return (
    <SectionMotion
      variant="wave"
      className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8"
    >
      <AnimatedHeading
        eyebrow="Featured Solutions"
        title="Product showcase built around connected business operations."
        className="mb-10"
        variant="frame"
      />
      <div className="mt-10 divide-y divide-white/8 rounded-[2rem] border border-white/8 bg-white/4 px-6 backdrop-blur-xl">
        {items.map((item, index) => (
          <Reveal key={item.title} delay={0.1 * index} y={34} scale={0.96}>
            <div className="grid gap-4 py-7 md:grid-cols-[120px_320px_1fr] md:items-start">
              <p className="text-xs uppercase tracking-[0.3em] text-cyan-300">Product Showcase</p>
              <h2 className="font-[family-name:var(--font-display)] text-3xl text-white">
                {item.title}
              </h2>
              <p className="max-w-xl text-sm leading-7 text-slate-200/78">{item.description}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </SectionMotion>
  );
}
