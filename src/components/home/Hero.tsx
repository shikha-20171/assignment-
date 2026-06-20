"use client";

import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Counter } from "@/components/ui/Counter";

const stats = [
  { value: "10+", label: "SaaS Solutions" },
  { value: "CRM-Driven", label: "Operations" },
  { value: "Multi-Industry", label: "Solutions" },
  { value: "24/7", label: "Support Ready" }
] as const;

const metrics = [
  { label: "Leads Generated", value: 1280, suffix: "+" },
  { label: "Active Customers", value: 324, suffix: "+" },
  { label: "Demo Bookings", value: 92, suffix: "" },
  { label: "Support Requests", value: 4800, suffix: "+" }
] as const;

const pipelineItems = [
  ["Qualified Leads", "68%", "w-[68%]"],
  ["Active Opportunities", "82%", "w-[82%]"],
  ["Proposal Ready", "74%", "w-[74%]"],
  ["Upsell Signals", "59%", "w-[59%]"]
] as const;

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current || !panelRef.current) {
      return;
    }

    const panel = panelRef.current;

    const context = gsap.context(() => {
      gsap.fromTo(
        "[data-hero-copy]",
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          ease: "power3.out",
          stagger: 0.12
        }
      );

      gsap.fromTo(
        panel,
        { opacity: 0, x: 40, rotate: 2 },
        {
          opacity: 1,
          x: 0,
          rotate: 0,
          duration: 1.05,
          ease: "power3.out",
          delay: 0.18
        }
      );

      const floatCards = panel.querySelectorAll("[data-float-card]");

      if (floatCards.length > 0) {
        gsap.to(floatCards, {
          y: -12,
          duration: 2.8,
          ease: "sine.inOut",
          stagger: 0.18,
          repeat: -1,
          yoyo: true
        });
      }
    }, sectionRef);

    return () => {
      context.revert();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden px-4 pb-20 pt-12 sm:px-6 lg:px-8 lg:pt-16"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(125,211,252,0.18),transparent_34%),radial-gradient(circle_at_78%_22%,rgba(255,207,112,0.16),transparent_26%),radial-gradient(circle_at_18%_82%,rgba(56,189,248,0.12),transparent_28%)]" />
      <div className="absolute -left-16 top-32 h-52 w-52 animate-[pulse_7s_ease-in-out_infinite] rounded-full bg-[radial-gradient(circle,rgba(121,229,255,0.24),transparent_65%)] blur-xl" />
      <div className="absolute right-[10%] top-44 h-36 w-36 animate-[pulse_7s_ease-in-out_1.2s_infinite] rounded-full bg-[radial-gradient(circle,rgba(255,207,112,0.18),transparent_65%)] blur-xl" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[26rem] bg-[linear-gradient(180deg,rgba(90,177,255,0.1),transparent)]" />

      <div className="relative mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.08fr_0.92fr] lg:items-center">
        <div className="space-y-9">
          <span
            data-hero-copy
            className="inline-flex rounded-full border border-cyan-300/25 bg-cyan-300/10 px-4 py-2 text-[11px] uppercase tracking-[0.24em] text-cyan-50"
          >
            Dezoryn Technology • CRM • SaaS • Support • Operations
          </span>

          <div className="space-y-5">
            <p
              data-hero-copy
              className="text-xs uppercase tracking-[0.32em] text-cyan-300"
            >
              AI-Powered Digital Ecosystem For Modern Organizations
            </p>

            <h1
              data-hero-copy
              className="max-w-4xl font-[family-name:var(--font-display)] text-5xl leading-[0.95] text-white sm:text-6xl lg:text-[4.5rem]"
            >
              Build, Scale &amp; Run Your Business with Connected Digital Solutions
            </h1>

            <p
              data-hero-copy
              className="max-w-2xl text-lg leading-8 text-slate-200/78 sm:text-[1.15rem]"
            >
              Manage operations, sales, customer support, and growth from one connected platform.
            </p>

            <p
              data-hero-copy
              className="max-w-2xl text-sm uppercase tracking-[0.28em] text-slate-300/68"
            >
              One Platform. Multiple Products. Connected Business Operations.
            </p>
          </div>

          <div data-hero-copy className="flex flex-col gap-4 sm:flex-row">
            <Button href="/products">Explore Products</Button>
            <Button href="/contact" variant="secondary">
              Book a Demo
            </Button>
          </div>

          <div data-hero-copy className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {stats.map((item) => (
              <Card
                key={item.label}
                className="rounded-[1.6rem] border-white/10 bg-[linear-gradient(180deg,rgba(16,29,49,0.72),rgba(8,18,34,0.66))] px-5 py-5 backdrop-blur-xl"
              >
                <p className="font-[family-name:var(--font-display)] text-3xl text-white">
                  {item.value}
                </p>
                <p className="mt-2 text-sm text-slate-200/80">{item.label}</p>
              </Card>
            ))}
          </div>
        </div>

        <motion.div
          ref={panelRef}
          initial={{ opacity: 0, scale: 1.18, rotate: 8, y: -40 }}
          animate={{ opacity: 1, scale: 1, rotate: 0, y: 0 }}
          transition={{ duration: 1.05, ease: [0.22, 1, 0.36, 1], delay: 0.12 }}
          className="lg:max-w-[34rem]"
        >
          <Card className="relative overflow-hidden rounded-[2rem] border-white/10 bg-[linear-gradient(180deg,rgba(16,29,49,0.76),rgba(8,18,34,0.7))] p-5 shadow-cyan-950/20 backdrop-blur-xl sm:p-6">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.1),transparent_32%)]" />

            <div className="relative mb-5 flex items-center justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-slate-300/70">
                  Live Growth View
                </p>
                <h2 className="font-[family-name:var(--font-display)] text-xl text-white sm:text-2xl">
                  Business performance overview
                </h2>
              </div>

              <span className="inline-flex rounded-full border border-cyan-300/25 bg-cyan-300/10 px-4 py-2 text-[11px] uppercase tracking-[0.24em] text-cyan-50">
                Premium UI
              </span>
            </div>

            <div className="relative grid gap-3.5">
              <div className="grid gap-3.5 sm:grid-cols-2">
                {metrics.map((metric) => (
                  <Card
                    key={metric.label}
                    data-float-card
                    className="rounded-[1.5rem] p-4"
                  >
                    <p className="text-sm text-slate-300/70">{metric.label}</p>

                    <p className="mt-2.5 font-[family-name:var(--font-display)] text-3xl text-white sm:text-4xl">
                      <Counter value={metric.value} suffix={metric.suffix} />
                    </p>

                    <div className="mt-3 h-2 rounded-full bg-white/10">
                      <div
                        className="h-2 rounded-full bg-gradient-to-r from-cyan-300 to-amber-300"
                        style={{
                          width: `${Math.min(92, Math.max(48, Math.round(metric.value / 55)))}%`
                        }}
                      />
                    </div>
                  </Card>
                ))}
              </div>

              <Card className="rounded-[1.5rem] p-4">
                <div className="mb-3 flex items-center justify-between">
                  <p className="font-medium text-white">Pipeline Snapshot</p>
                  <p className="text-sm text-slate-300/70">
                    Source-aware performance
                  </p>
                </div>

                <div className="space-y-2.5">
                  {pipelineItems.map(([label, value, width]) => (
                    <div key={label}>
                      <div className="mb-2 flex justify-between text-sm text-slate-200/80">
                        <span>{label}</span>
                        <span>{value}</span>
                      </div>

                      <div className="h-2 rounded-full bg-white/10">
                        <div
                          className={`h-2 rounded-full bg-gradient-to-r from-cyan-300 to-amber-300 ${width}`}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
