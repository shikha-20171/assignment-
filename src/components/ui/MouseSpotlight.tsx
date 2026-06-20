"use client";

import { useEffect, useRef } from "react";

export function MouseSpotlight() {
  const spotlightRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let frameId = 0;

    const handleMove = (event: MouseEvent) => {
      if (frameId) {
        cancelAnimationFrame(frameId);
      }

      frameId = window.requestAnimationFrame(() => {
        spotlightRef.current?.style.setProperty("--spotlight-x", `${event.clientX}px`);
        spotlightRef.current?.style.setProperty("--spotlight-y", `${event.clientY}px`);
      });
    };

    window.addEventListener("mousemove", handleMove);

    return () => {
      window.removeEventListener("mousemove", handleMove);
      if (frameId) {
        cancelAnimationFrame(frameId);
      }
    };
  }, []);

  return (
    <div
      ref={spotlightRef}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-10 hidden lg:block"
      style={{
        background:
          "radial-gradient(240px circle at var(--spotlight-x, 50%) var(--spotlight-y, 50%), rgba(123, 211, 252, 0.1), transparent 65%)",
        willChange: "background"
      }}
    />
  );
}
