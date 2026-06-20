import { notFound } from "next/navigation";
import { getProductById } from "@/data/products";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";

interface ProductDetailPageProps {
  params: Promise<{ id: string }>;
}

export default async function ProductDetailPage({ params }: ProductDetailPageProps) {
  const { id } = await params;
  const product = getProductById(id);

  if (!product) {
    notFound();
  }

  return (
    <main className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
      <p className="mb-4 text-xs uppercase tracking-[0.32em] text-cyan-300">{product.category}</p>
      <h1 className="font-[family-name:var(--font-display)] text-5xl text-white">{product.name}</h1>
      <p className="mt-5 text-lg leading-8 text-slate-200/80">{product.description}</p>

      <div className="mt-10 grid gap-6 md:grid-cols-[1.1fr_0.9fr]">
        <Card className="p-8">
          <h2 className="font-[family-name:var(--font-display)] text-3xl text-white">Core Features</h2>
          <div className="mt-6 space-y-3">
            {product.features.map((feature) => (
              <div key={feature} className="flex items-center gap-3 text-slate-200/80">
                <span className="h-2 w-2 rounded-full bg-cyan-300" />
                {feature}
              </div>
            ))}
          </div>
        </Card>
        <Card className="p-8">
          <h2 className="font-[family-name:var(--font-display)] text-3xl text-white">Best Fit</h2>
          <p className="mt-4 text-slate-200/80">{product.audience}</p>
          <Button href="/contact" className="mt-8">
            Request Demo
          </Button>
        </Card>
      </div>
    </main>
  );
}
