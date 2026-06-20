import { pricingPlans } from "@/data/pricing";
import { Card } from "@/components/ui/Card";
import { AnimatedHeading } from "@/components/ui/AnimatedHeading";
import { Reveal } from "@/components/ui/Reveal";
import { SectionMotion } from "@/components/ui/SectionMotion";

export function PricingSection() {
  return (
    <SectionMotion
      variant="spotlight"
      className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8"
    >
      <AnimatedHeading
        eyebrow="Pricing"
        title="Flexible engagement models for a serious digital presence."
        className="mb-10"
        variant="split"
      />
      <div className="mt-10 grid gap-5 lg:grid-cols-3">
        {pricingPlans.map((plan, index) => (
          <Reveal key={plan.name} delay={0.1 * index} y={36} scale={0.95}>
            <Card
              className={`h-full p-8 transition duration-300 hover:-translate-y-2 hover:border-cyan-300/25 hover:shadow-[0_24px_70px_rgba(0,0,0,0.24)] ${index === 1 ? "bg-[radial-gradient(circle_at_top_right,rgba(255,207,112,0.15),transparent_34%),linear-gradient(180deg,rgba(16,31,52,0.94),rgba(7,17,31,0.96))]" : ""}`}
            >
              <p className="text-sm uppercase tracking-[0.3em] text-slate-300/70">{plan.name}</p>
              <p className="mt-5 font-[family-name:var(--font-display)] text-5xl text-white">
                {plan.price}
              </p>
              <p className="mt-4 text-slate-200/80">{plan.description}</p>
              <div className="mt-8 space-y-3">
                {plan.features.map((feature) => (
                  <div key={feature} className="flex items-center gap-3 text-sm text-slate-200/80">
                    <span className="h-2 w-2 rounded-full bg-cyan-300" />
                    {feature}
                  </div>
                ))}
              </div>
            </Card>
          </Reveal>
        ))}
      </div>
    </SectionMotion>
  );
}
