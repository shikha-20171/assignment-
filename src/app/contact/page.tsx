import { ContactSection } from "@/components/sections/ContactSection";
import { PageMotion } from "@/components/ui/PageMotion";

export default function ContactPage() {
  return (
    <PageMotion variant="contact">
      <ContactSection />
    </PageMotion>
  );
}
