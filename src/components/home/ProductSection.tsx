"use client";

import { motion } from "framer-motion";
import { products } from "@/data/products";
import { ProductCard } from "@/components/products/ProductCard";
import { AnimatedHeading } from "@/components/ui/AnimatedHeading";
import { Reveal } from "@/components/ui/Reveal";
import { SectionMotion } from "@/components/ui/SectionMotion";

export function ProductSection() {
  return (
    <SectionMotion
      variant="spotlight"
      className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8"
    >
      <motion.div
        aria-hidden="true"
        animate={{ rotate: 360 }}
        transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
        className="pointer-events-none absolute right-10 top-16 hidden h-28 w-28 rounded-full border border-dashed border-cyan-200/20 xl:block"
      >
        <div className="absolute inset-4 rounded-full border border-white/8" />
        <div className="absolute left-1/2 top-0 h-3 w-3 -translate-x-1/2 rounded-full bg-cyan-200/70" />
      </motion.div>

      <div className="mb-10 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
        <AnimatedHeading
          eyebrow="Products Bento Grid"
          title="Discover the SaaS products powering automation, CRM, portals, and industry workflows."
          className="max-w-3xl"
          variant="frame"
        />

        <Reveal delay={0.12} className="max-w-xl">
          <p className="text-slate-200/80">
            Each product is presented with a clear summary, category badge, preview state,
            and direct call to action.
          </p>
        </Reveal>
      </div>

      <div className="grid auto-rows-fr gap-5 md:grid-cols-2 xl:grid-cols-3">
        {products.map((product, index) => {
          const moveUp = index % 2 === 0;

          return (
            <Reveal key={product.id} delay={0.08 * index} y={36}>
              <motion.div
                animate={{
                  y: [0, moveUp ? -10 : 10, 0],
                  rotate: [0, moveUp ? -0.8 : 0.8, 0]
                }}
                transition={{
                  duration: 5.5 + index * 0.4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="h-full"
              >
                <ProductCard product={product} />
              </motion.div>
            </Reveal>
          );
        })}
      </div>
    </SectionMotion>
  );
}
