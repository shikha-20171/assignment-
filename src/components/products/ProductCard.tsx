"use client";

import type { Product } from "@/types/product";
import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 60, scale: 0.92 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, amount: 0.25 }}
        whileHover={{ y: -12, scaleX: 1.035, scaleY: 0.97, rotate: -0.6 }}
        whileTap={{ scaleX: 0.99, scaleY: 1.015, y: -4 }}
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        transition={{
          opacity: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
          y: { type: "spring", stiffness: 220, damping: 18 },
          scaleX: { type: "spring", stiffness: 280, damping: 14 },
          scaleY: { type: "spring", stiffness: 280, damping: 14 },
          rotate: { type: "spring", stiffness: 240, damping: 18 }
        }}
        className="h-full"
      >
        <motion.div
          animate={{
            scaleX: isHovered ? 0.985 : 1,
            scaleY: isHovered ? 1.02 : 1
          }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 16
          }}
          className="h-full"
        >
          <Card className="group relative h-full overflow-hidden rounded-[1.75rem] bg-[linear-gradient(180deg,rgba(16,31,52,0.8),rgba(7,17,31,0.9))] transition duration-300 hover:border-cyan-300/35 hover:shadow-[0_22px_60px_rgba(0,0,0,0.22)]">
            <div className="pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-cyan-200/70 to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />
            <motion.div
              aria-hidden="true"
              className="pointer-events-none absolute -right-14 -top-14 h-32 w-32 rounded-full bg-cyan-300/12 blur-3xl"
              animate={{
                opacity: isHovered ? 0.92 : 0.35,
                scale: isHovered ? 1.22 : 0.8
              }}
              transition={{ type: "spring", stiffness: 220, damping: 18 }}
            />
            <motion.div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(125,211,252,0.08),transparent_28%,transparent_72%,rgba(125,211,252,0.06))]"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              animate={{ filter: isHovered ? "brightness(1.15)" : "brightness(1)" }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            />
            <div className="flex items-center justify-between gap-3">
              <span className="inline-flex rounded-full border border-cyan-300/25 bg-cyan-300/10 px-4 py-2 text-[11px] uppercase tracking-[0.24em] text-cyan-50">
                {product.category}
              </span>
              <span className="inline-flex rounded-full border border-amber-200/15 bg-amber-200/10 px-3 py-2 text-[10px] uppercase tracking-[0.24em] text-amber-100">
                {product.badge}
              </span>
            </div>
            <h3 className="mt-5 font-[family-name:var(--font-display)] text-2xl text-white">
              {product.name}
            </h3>
            <p className="mt-3 text-sm leading-7 text-slate-200/80">{product.summary}</p>
            <div className="mt-6 flex flex-wrap gap-2">
              {product.features.slice(0, 2).map((feature) => (
                <span
                  key={feature}
                  className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] uppercase tracking-[0.2em] text-slate-200/75"
                >
                  {feature}
                </span>
              ))}
            </div>
            <div className="mt-8 space-y-4">
              <p className="text-sm text-slate-300/70">{product.audience}</p>
              <div className="flex flex-wrap gap-3">
                <Button
                  variant="secondary"
                  className="px-4 py-2.5 text-xs transition duration-300 group-hover:border-cyan-200/60 group-hover:bg-cyan-200/12"
                  onClick={() => setIsPreviewOpen(true)}
                >
                  View Details
                </Button>
                <Button href="/contact" className="px-4 py-2.5 text-xs">
                  Request Demo
                </Button>
              </div>
            </div>
          </Card>
        </motion.div>
      </motion.div>

      <AnimatePresence>
        {isPreviewOpen ? (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/72 p-4 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: shouldReduceMotion ? 0.12 : 0.2 }}
            onClick={() => setIsPreviewOpen(false)}
          >
            <motion.div
              initial={{
                opacity: 0,
                y: shouldReduceMotion ? 18 : 42,
                scale: shouldReduceMotion ? 1 : 1.04,
                rotate: shouldReduceMotion ? 0 : -3
              }}
              animate={{ opacity: 1, y: 0, scale: 1, rotate: 0 }}
              exit={{
                opacity: 0,
                y: shouldReduceMotion ? 12 : 18,
                scale: 0.985,
                rotate: 0
              }}
              transition={{
                duration: shouldReduceMotion ? 0.16 : 0.28,
                ease: [0.22, 1, 0.36, 1]
              }}
              className="w-full max-w-2xl"
              onClick={(event) => event.stopPropagation()}
            >
              <Card className="relative overflow-hidden border-cyan-300/20 bg-[linear-gradient(180deg,rgba(15,28,49,0.95),rgba(7,17,31,0.98))] p-8 shadow-[0_32px_100px_rgba(0,0,0,0.4)]">
                <motion.div
                  aria-hidden="true"
                  initial={{ scale: 1.4, opacity: 0.5 }}
                  animate={{ scale: 1, opacity: 0.18 }}
                  transition={{ duration: shouldReduceMotion ? 0.16 : 0.3, ease: [0.22, 1, 0.36, 1] }}
                  className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(125,211,252,0.18),transparent_55%)]"
                />
                <div className="absolute inset-x-12 top-0 h-px bg-gradient-to-r from-transparent via-cyan-200/80 to-transparent" />
                <div className="flex items-start justify-between gap-6">
                  <div>
                    <p className="text-xs uppercase tracking-[0.32em] text-cyan-300">
                      {product.category}
                    </p>
                    <h3 className="mt-4 font-[family-name:var(--font-display)] text-4xl text-white">
                      {product.name}
                    </h3>
                  </div>
                  <button
                    type="button"
                    aria-label="Close preview"
                    className="rounded-full border border-white/10 bg-white/5 px-3 py-2 text-xs uppercase tracking-[0.22em] text-slate-200/75 transition hover:border-cyan-200/50 hover:text-white"
                    onClick={() => setIsPreviewOpen(false)}
                  >
                    Close
                  </button>
                </div>
                <p className="mt-6 text-lg leading-8 text-slate-200/85">{product.description}</p>
                <div className="mt-8 grid gap-3 sm:grid-cols-2">
                  {product.features.map((feature) => (
                    <div
                      key={feature}
                      className="rounded-2xl border border-white/8 bg-white/5 px-4 py-4 text-sm text-slate-100/85"
                    >
                      {feature}
                    </div>
                  ))}
                </div>
                <div className="mt-8 flex flex-wrap items-center justify-between gap-4">
                  <p className="max-w-md text-sm text-slate-300/75">{product.audience}</p>
                  <Button href={`/products/${product.id}`} className="px-5 py-3 text-xs">
                    Open Full Page
                  </Button>
                </div>
              </Card>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
