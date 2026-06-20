import { Button } from "@/components/ui/Button";
import { AnimatedHeading } from "@/components/ui/AnimatedHeading";
import { Reveal } from "@/components/ui/Reveal";
import { SectionMotion } from "@/components/ui/SectionMotion";

// Product launch ke important stages ko ek list me rakha hai taaki content manage karna easy rahe.
const items = [
  {
    title: "Launching Soon Pages",
    description:
      "Create focused pre-launch pages that explain the product clearly and collect early intent."
  },
  {
    title: "Waitlists",
    description:
      "Capture interested users before launch and keep the first audience organized from day one."
  },
  {
    title: "Announcements",
    description:
      "Publish product updates, release notes, and launch messages in a structured way."
  },
  {
    title: "Notifications",
    description:
      "Send timely updates to prospects, customers, and internal teams when important milestones happen."
  },
  {
    title: "CRM Lead Collection",
    description:
      "Move launch interest directly into your CRM so follow-up and conversion never get disconnected."
  }
] as const;

export function LaunchManagementSection() {
  return (
    <SectionMotion className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="space-y-5">
          <AnimatedHeading
            eyebrow="Product Launch Center"
            title="Launch new products with momentum, demand capture, and clean announcement flows."
            description="Build launch pages, collect interest, send updates, and keep early demand properly organized from day one."
            variant="split"
          />

          {/* Direct CTA for teams planning a new launch */}
          <Reveal delay={0.12}>
            <Button href="/contact">Plan a Launch</Button>
          </Reveal>
        </div>

        <Reveal delay={0.12} y={36} scale={0.97}>
          <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-[linear-gradient(160deg,rgba(16,29,49,0.82),rgba(8,18,34,0.92))] p-6 shadow-[0_24px_90px_rgba(0,0,0,0.24)]">
            <div className="space-y-5">
              {items.map((item, index) => (
                <div
                  key={item.title}
                  className="grid gap-3 border-b border-white/8 pb-5 last:border-b-0 last:pb-0 sm:grid-cols-[72px_1fr]"
                >
                  <span className="text-xs uppercase tracking-[0.3em] text-cyan-300">
                    0{index + 1}
                  </span>

                  <div>
                    <p className="font-[family-name:var(--font-display)] text-xl text-white">
                      {item.title}
                    </p>

                    <p className="mt-2 text-sm leading-7 text-slate-200/76">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </SectionMotion>
  );
}