import { BlogSection } from "@/components/sections/BlogSection";
import { PageMotion } from "@/components/ui/PageMotion";

export default function BlogPage() {
  return (
    <PageMotion variant="services">
      <BlogSection />
    </PageMotion>
  );
}
