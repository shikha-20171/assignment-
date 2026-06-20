"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";

export function LeadForm() {
  return (
    <form className="grid gap-4">
      {[
        <Input key="name" placeholder="Your name" />,
        <Input key="company" placeholder="Company name" />,
        <Input key="email" placeholder="Work email" type="email" />,
        <Input key="product" placeholder="Interested product" />,
        <Input key="requirement" placeholder="Tell us about your requirement" multiline />
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
        transition={{ duration: 0.45, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
      >
        <Button className="w-full">Submit Inquiry</Button>
      </motion.div>
    </form>
  );
}
