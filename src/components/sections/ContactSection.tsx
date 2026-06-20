import { DemoBookingForm } from "@/components/forms/DemoBookingForm";
import { LeadForm } from "@/components/forms/LeadForm";
import { Card } from "@/components/ui/Card";
import { AnimatedHeading } from "@/components/ui/AnimatedHeading";
import { Reveal } from "@/components/ui/Reveal";
import { SectionMotion } from "@/components/ui/SectionMotion";

export function ContactSection() {
  return (
    <SectionMotion
      variant="spotlight"
      className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8"
    >
      <AnimatedHeading
        eyebrow="Contact Us"
        title="Start a conversation that ends in a booked demo."
        className="mb-10"
        variant="frame"
      />
      <div className="mt-10 grid gap-6 lg:grid-cols-2">
        <Reveal delay={0.08} y={36} scale={0.96}>
          <Card className="p-8 transition duration-300 hover:-translate-y-2 hover:border-cyan-300/25">
            <h2 className="font-[family-name:var(--font-display)] text-3xl text-white">Lead Inquiry</h2>
            <div className="mt-6">
              <LeadForm />
            </div>
          </Card>
        </Reveal>
        <Reveal delay={0.16} y={36} scale={0.96}>
          <Card className="p-8 transition duration-300 hover:-translate-y-2 hover:border-cyan-300/25">
            <h2 className="font-[family-name:var(--font-display)] text-3xl text-white">Book a Demo</h2>
            <div className="mt-6">
              <DemoBookingForm />
            </div>
          </Card>
        </Reveal>
      </div>
    </SectionMotion>
  );
}
