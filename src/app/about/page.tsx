import { AboutSection } from "@/components/sections/AboutSection";
import { PageMotion } from "@/components/ui/PageMotion";

export default function AboutPage() {
  return (
    <PageMotion variant="about">
      <AboutSection />
    </PageMotion>
  );
}
