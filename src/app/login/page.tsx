"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Card } from "@/components/ui/Card";
import { PageMotion } from "@/components/ui/PageMotion";
import { Reveal } from "@/components/ui/Reveal";

export default function LoginPage() {
  return (
    <PageMotion
      variant="contact"
      className="mx-auto flex min-h-[70vh] max-w-xl items-center px-4 py-16 sm:px-6 lg:px-8"
    >
      <motion.div
        aria-hidden="true"
        animate={{ rotate: 360 }}
        transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
        className="pointer-events-none absolute right-6 top-24 hidden h-24 w-24 rounded-full border border-dashed border-cyan-200/20 lg:block"
      />
      <Reveal className="w-full" y={34} scale={0.97}>
        <Card className="w-full p-8 transition duration-300 hover:-translate-y-1.5 hover:border-cyan-300/25">
          <p className="mb-4 text-xs uppercase tracking-[0.32em] text-cyan-300">Login</p>
          <h1 className="font-[family-name:var(--font-display)] text-4xl text-white">
            Access the future customer portal.
          </h1>
          <form className="mt-8 grid gap-4">
            <Reveal delay={0.06} y={18}>
              <Input placeholder="Work email" type="email" />
            </Reveal>
            <Reveal delay={0.12} y={18}>
              <Input placeholder="Password" type="password" />
            </Reveal>
            <Reveal delay={0.18} y={18}>
              <Button className="w-full">Login</Button>
            </Reveal>
          </form>
        </Card>
      </Reveal>
    </PageMotion>
  );
}
