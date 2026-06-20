import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";

export function CTASection() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
      <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">

        {/* Left side par value proposition aur main CTA message */}
        <Card className="rounded-[2rem] border-white/10 bg-[linear-gradient(180deg,rgba(16,29,49,0.76),rgba(8,18,34,0.7))] p-8 md:p-10">
          <p className="mb-4 text-xs uppercase tracking-[0.32em] text-cyan-300">
            Institution Growth
          </p>

          <h2 className="font-[family-name:var(--font-display)] text-4xl text-white">
            Ready to transform your institution?
          </h2>

          <p className="mt-4 max-w-2xl text-slate-200/80">
            Join schools moving admissions, academics, attendance, fee tracking,
            and parent communication into one reliable platform.
          </p>
        </Card>

        {/* Quick action card for users who are ready to explore the platform */}
        <Card className="p-8">
          <p className="text-xs uppercase tracking-[0.3em] text-slate-300/70">
            SchoolyCoreOS
          </p>

          <h3 className="mt-4 font-[family-name:var(--font-display)] text-3xl text-white">
            Get started with a future-ready school ERP.
          </h3>

          <p className="mt-4 text-slate-200/80">
            See how SchoolyCore can simplify administration, improve visibility,
            and support students, teachers, and parents from one dashboard.
          </p>

          <Button href="/contact" className="mt-8">
            Get Started Now
          </Button>
        </Card>
      </div>
    </section>
  );
}