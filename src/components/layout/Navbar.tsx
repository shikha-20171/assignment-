 "use client";

import { motion } from "framer-motion";
import { Building2, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/Button";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/products", label: "Products" },
  { href: "/pricing", label: "Pricing" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/blog", label: "Blog" },
  { href: "/careers", label: "Careers" },
  { href: "/contact", label: "Contact" }
] as const;

export function Navbar() {
  return (
    <header className="sticky top-4 z-30 px-4 pt-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="mx-auto flex max-w-7xl items-center justify-between gap-4 rounded-[1.75rem] border border-[var(--line)] bg-[linear-gradient(180deg,rgba(36,28,22,0.82),rgba(17,13,11,0.72))] px-4 py-3 shadow-[inset_0_1px_0_rgba(255,255,255,0.05),0_16px_40px_rgba(0,0,0,0.16)] backdrop-blur-xl sm:px-5"
      >
        <div className="flex min-w-0 items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-full border border-[#d8b36a]/20 bg-[#d8b36a]/10 text-[#f2d9a2]">
            <Building2 className="h-5 w-5" />
          </div>
          <div className="min-w-0">
            <p className="truncate text-[10px] uppercase tracking-[0.28em] text-slate-300/60 sm:text-xs">
              Dezoryn Technology Pvt. Ltd.
            </p>
            <p className="font-[family-name:var(--font-display)] text-lg text-white sm:text-xl">
              Digital Ecosystem
            </p>
            <p className="hidden items-center gap-1.5 text-[11px] text-[#cfb37a] xl:flex">
              <Sparkles className="h-3 w-3" />
              One Platform. Multiple Products. Connected Business Operations.
            </p>
          </div>
        </div>
        <nav className="hidden gap-5 text-sm text-stone-200/75 xl:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="transition hover:text-[#f6dfac]"
            >
              {item.label}
            </a>
          ))}
        </nav>
        <Button href="/contact" className="shrink-0">
          Book a Demo
        </Button>
      </motion.div>
    </header>
  );
}
