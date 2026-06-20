"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";

export function DemoBookingForm() {
  return (
    <form className="grid gap-4">
      {[
        <Input key="full-name" placeholder="Full name" />,
        <Input key="business-email" placeholder="Business email" type="email" />,
        <Input key="demo" placeholder="Preferred product demo" />,
        <Input key="schedule" placeholder="Preferred schedule" />
      ].map((field, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.8 }}
          transition={{ duration: 0.45, delay: 0.06 * index, ease: [0.22, 1, 0.36, 1] }}
        >
          {field}
        </motion.div>
      ))}
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.8 }}
        transition={{ duration: 0.45, delay: 0.24, ease: [0.22, 1, 0.36, 1] }}
      >
        <Button className="w-full">Book Demo</Button>
      </motion.div>
    </form>
  );
}
