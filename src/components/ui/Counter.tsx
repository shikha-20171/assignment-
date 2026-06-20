"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

interface CounterProps {
  value: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
  className?: string;
}

export function Counter({
  value,
  prefix = "",
  suffix = "",
  decimals = 0,
  className
}: CounterProps) {
  const elementRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const state = { current: 0 };

    const animation = gsap.to(state, {
      current: value,
      duration: 1.8,
      ease: "power3.out",
      onUpdate: () => {
        if (!elementRef.current) {
          return;
        }

        elementRef.current.textContent = `${prefix}${state.current.toFixed(decimals)}${suffix}`;
      }
    });

    return () => {
      animation.kill();
    };
  }, [decimals, prefix, suffix, value]);

  return <span ref={elementRef} className={className} />;
}
