"use client";

import { motion } from "framer-motion";

const footerColumns = [
  {
    title: "Products",
    items: ["SchoolyCore", "CRM", "HMS", "HRM", "Inventory"]
  },
  {
    title: "Resources",
    items: ["Blog", "Documentation", "Help Center", "Support Center", "Product Roadmap"]
  },
  {
    title: "Company",
    items: ["About", "Careers", "Contact", "Privacy Policy", "Terms & Conditions"]
  }
] as const;

export function Footer() {
  return (
    <footer className="px-4 pb-12 pt-14 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="mx-auto grid max-w-7xl gap-10 rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(16,29,49,0.76),rgba(8,18,34,0.7))] px-6 py-8 shadow-[inset_0_1px_0_rgba(255,255,255,0.05),0_18px_50px_rgba(0,0,0,0.18)] backdrop-blur-xl lg:grid-cols-[1.05fr_0.95fr]"
      >
        <motion.div whileHover={{ x: 4 }} transition={{ type: "spring", stiffness: 220, damping: 18 }}>
          <p className="font-[family-name:var(--font-display)] text-2xl text-white">
            Dezoryn Digital Ecosystem
          </p>
          <p className="mt-4 max-w-xl text-sm leading-7 text-slate-200/78">
            AI-powered digital solutions across CRM, SaaS products, automation, portals, support,
            and launch systems built for modern business teams.
          </p>
          <p className="mt-5 text-xs uppercase tracking-[0.24em] text-cyan-200/68">
            One Platform. Multiple Products. Connected Business Operations.
          </p>
        </motion.div>
        <div className="grid gap-8 sm:grid-cols-3">
          {footerColumns.map((column) => (
            <motion.div
              key={column.title}
              whileHover={{ y: -4 }}
              transition={{ type: "spring", stiffness: 220, damping: 18 }}
            >
              <p className="text-xs uppercase tracking-[0.32em] text-cyan-300">{column.title}</p>
              <div className="mt-4 space-y-2.5">
                {column.items.map((item) => (
                  <p key={item} className="text-sm text-slate-300/76">
                    {item}
                  </p>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </footer>
  );
}
