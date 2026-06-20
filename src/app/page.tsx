import { AboutSection } from "@/components/sections/AboutSection";
import { BlogSection } from "@/components/sections/BlogSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { PortfolioSection } from "@/components/sections/PortfolioSection";
import { AISection } from "@/components/home/AISection";
import { CRMSection } from "@/components/home/CRMSection";
import { CustomerPortalSection } from "@/components/home/CustomerPortalSection";
import { Hero } from "@/components/home/Hero";
import { LaunchManagementSection } from "@/components/home/LaunchManagementSection";
import { ProductSection } from "@/components/home/ProductSection";
import { ServicesSection } from "@/components/home/ServicesSection";
import { SupportSection } from "@/components/home/SupportSection";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { TrustedLogosSection } from "@/components/home/TrustedLogosSection";
import { PageMotion } from "@/components/ui/PageMotion";

export default function HomePage() {
  return (
    <PageMotion className="pb-6">
      <Hero />
      <TrustedLogosSection />
      <AboutSection />
      <ProductSection />
      <AISection />
      <CRMSection />
      <ServicesSection />
      <CustomerPortalSection />
      <SupportSection />
      <LaunchManagementSection />
      <PortfolioSection />
      <TestimonialsSection />
      <BlogSection />
      <ContactSection />
    </PageMotion>
  );
}
