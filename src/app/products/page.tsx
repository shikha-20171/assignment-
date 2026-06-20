"use client";

import { products } from "@/data/products";
import { motion } from "framer-motion";
import { ProductCard } from "@/components/products/ProductCard";
import { AnimatedHeading } from "@/components/ui/AnimatedHeading";
import { PageMotion } from "@/components/ui/PageMotion";
import { Reveal } from "@/components/ui/Reveal";

export default function ProductsPage() {
  return (
    <PageMotion variant="products" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <AnimatedHeading
        eyebrow="Products"
        title="Explore the product ecosystem powering CRM, portals, operations, and industry workflows."
        className="mb-10"
      />
      <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {products.map((product, index) => (
          <Reveal key={product.id} delay={0.08 * index} y={36}>
            <motion.div
              animate={{
                y: [0, index % 2 === 0 ? -10 : 10, 0],
                rotate: [0, index % 2 === 0 ? -0.8 : 0.8, 0]
              }}
              transition={{ duration: 5.5 + index * 0.4, repeat: Infinity, ease: "easeInOut" }}
              className="h-full"
            >
              <ProductCard product={product} />
            </motion.div>
          </Reveal>
        ))}
      </div>
    </PageMotion>
  );
}
