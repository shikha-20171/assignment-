import { PricingSection } from "@/components/sections/PricingSection";
import { PageMotion } from "@/components/ui/PageMotion";

export default function PricingPage() {
  return (
    <PageMotion variant="services">
      <PricingSection />
    </PageMotion>
  );
}
