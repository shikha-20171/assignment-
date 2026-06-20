"use client";

import { motion } from "framer-motion";
import { DashboardSidebar } from "@/components/dashboard/DashboardSidebar";
import { StatsCard } from "@/components/dashboard/StatsCard";
import { Card } from "@/components/ui/Card";
import { PageMotion } from "@/components/ui/PageMotion";
import { Reveal } from "@/components/ui/Reveal";

export default function DashboardPage() {
  return (
    <PageMotion
      variant="services"
      className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8"
    >
      <motion.div
        aria-hidden="true"
        animate={{ rotate: 360 }}
        transition={{ duration: 26, repeat: Infinity, ease: "linear" }}
        className="pointer-events-none absolute right-10 top-24 hidden h-28 w-28 rounded-full border border-dashed border-cyan-200/20 xl:block"
      />
      <Reveal>
        <p className="mb-4 text-xs uppercase tracking-[0.32em] text-cyan-300">Dashboard</p>
        <h1 className="font-[family-name:var(--font-display)] text-5xl text-white">
          Centralized view for leads, products, and content surfaces.
        </h1>
      </Reveal>
      <div className="mt-10 grid gap-6 lg:grid-cols-[280px_1fr]">
        <DashboardSidebar />
        <div className="space-y-6">
          <div className="grid gap-5 md:grid-cols-3">
            <motion.div animate={{ y: [0, -6, 0] }} transition={{ duration: 4.8, repeat: Infinity, ease: "easeInOut" }}>
              <StatsCard label="New Leads" value="142" note="Captured from website and demo flows" />
            </motion.div>
            <motion.div animate={{ y: [0, 7, 0] }} transition={{ duration: 5.2, repeat: Infinity, ease: "easeInOut" }}>
              <StatsCard label="Demo Scheduled" value="38" note="Active follow-up opportunities" />
            </motion.div>
            <motion.div animate={{ y: [0, -5, 0] }} transition={{ duration: 5.6, repeat: Infinity, ease: "easeInOut" }}>
              <StatsCard label="Launch Waitlist" value="64" note="Interested in future product launches" />
            </motion.div>
          </div>
          <Card className="p-8">
            <h2 className="font-[family-name:var(--font-display)] text-3xl text-white">
              Admin CMS Ready
            </h2>
            <p className="mt-4 text-slate-200/80">
              This dashboard area is structured for future product, blog, announcement, and lead
              management workflows.
            </p>
          </Card>
        </div>
      </div>
    </PageMotion>
  );
}
