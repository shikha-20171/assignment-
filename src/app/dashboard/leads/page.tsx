"use client";

import { motion } from "framer-motion";
import { LeadTable } from "@/components/dashboard/LeadTable";
import { leads } from "@/data/leads";
import { PageMotion } from "@/components/ui/PageMotion";
import { Reveal } from "@/components/ui/Reveal";

export default function DashboardLeadsPage() {
  return (
    <PageMotion
      variant="products"
      className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8"
    >
      <motion.div
        aria-hidden="true"
        animate={{ x: ["-10%", "10%", "-10%"] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute inset-x-8 top-24 h-px bg-gradient-to-r from-transparent via-cyan-200/80 to-transparent"
      />
      <Reveal>
        <p className="mb-4 text-xs uppercase tracking-[0.32em] text-cyan-300">Dashboard / Leads</p>
        <h1 className="font-[family-name:var(--font-display)] text-5xl text-white">
          Lead pipeline snapshot for Phase 1 UI.
        </h1>
      </Reveal>
      <div className="mt-10">
        <LeadTable items={leads} />
      </div>
    </PageMotion>
  );
}
