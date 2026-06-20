import { Card } from "@/components/ui/Card";
import { AnimatedHeading } from "@/components/ui/AnimatedHeading";
import { Reveal } from "@/components/ui/Reveal";
import { SectionMotion } from "@/components/ui/SectionMotion";

// Customer portal ke common actions ek jagah rakhe hain taaki future me easily update ho sake.
const items = [
  "Manage subscriptions",
  "Download invoices",
  "Raise support tickets",
  "Access products",
  "Track billing"
] as const;

export function CustomerPortalSection() {
  return (
    <SectionMotion
      variant="wave"
      className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8"
    >
      <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
        <AnimatedHeading
          eyebrow="Customer Portal"
          title="Give customers a clean, self-serve control center after the sale."
          description="Bring subscriptions, invoices, support, and product access together in one practical portal that makes customer accounts easier to manage."
          className="space-y-5"
          variant="minimal"
        />

        <Reveal delay={0.12} y={36} scale={0.97}>
          {/* Portal ke main actions ko card format me highlight kiya gaya hai */}
          <Card className="grid gap-4 rounded-[2rem] border-white/10 bg-[linear-gradient(160deg,rgba(16,29,49,0.82),rgba(8,18,34,0.92))] p-6">
            {items.map((item) => (
              <div
                key={item}
                className="rounded-[1.4rem] border border-white/8 bg-white/5 px-4 py-4 text-sm text-slate-100/82 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]"
              >
                {item}
              </div>
            ))}
          </Card>
        </Reveal>
      </div>
    </SectionMotion>
  );
}