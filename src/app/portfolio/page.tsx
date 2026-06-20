import { PortfolioSection } from "@/components/sections/PortfolioSection";
import { PageMotion } from "@/components/ui/PageMotion";

export default function PortfolioPage() {
  return (
    <PageMotion variant="products">
      <PortfolioSection />
    </PageMotion>
  );
}
