import { AnimatedHeading } from "@/components/ui/AnimatedHeading";
import { Reveal } from "@/components/ui/Reveal";
import { SectionMotion } from "@/components/ui/SectionMotion";

const posts = [
  "How better product pages improve business inquiry conversion",
  "What a reliable lead flow looks like for multi-product businesses",
  "A practical launch checklist for product and service websites"
] as const;

export function BlogSection() {
  return (
    <SectionMotion
      variant="grid"
      className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8"
    >
      <AnimatedHeading
        eyebrow="Blog & Resources"
        title="Content surfaces for trust, authority, and discoverability."
        className="mb-10"
        variant="minimal"
      />
      <div className="mt-10 space-y-5">
        {posts.map((post, index) => (
          <Reveal key={post} delay={0.1 * index} y={34} scale={0.96}>
            <div className="grid gap-4 rounded-[1.8rem] border border-white/8 bg-white/4 px-6 py-6 backdrop-blur-xl md:grid-cols-[120px_1fr] md:items-center">
              <span className="inline-flex w-fit rounded-full border border-cyan-300/25 bg-cyan-300/10 px-4 py-2 text-[11px] uppercase tracking-[0.24em] text-cyan-50">
                Resource
              </span>
              <h2 className="font-[family-name:var(--font-display)] text-2xl text-white">{post}</h2>
            </div>
          </Reveal>
        ))}
      </div>
    </SectionMotion>
  );
}
