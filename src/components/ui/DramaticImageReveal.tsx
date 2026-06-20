"use client";

import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface DramaticImageRevealProps {
  src: string;
  alt: string;
  sizes: string;
  className?: string;
  containerClassName?: string;
  overlayClassName?: string;
}

interface RectState {
  top: number;
  left: number;
  width: number;
  height: number;
}

export function DramaticImageReveal({
  src,
  alt,
  sizes,
  className,
  containerClassName,
  overlayClassName
}: DramaticImageRevealProps) {
  const frameRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(frameRef, { once: true, amount: 0.45 });
  const [targetRect, setTargetRect] = useState<RectState | null>(null);
  const [played, setPlayed] = useState(false);

  useEffect(() => {
    if (!isInView || played || !frameRef.current) {
      return;
    }

    const rect = frameRef.current.getBoundingClientRect();
    setTargetRect({
      top: rect.top,
      left: rect.left,
      width: rect.width,
      height: rect.height
    });
  }, [isInView, played]);

  return (
    <>
      <motion.div
        ref={frameRef}
        initial={{ opacity: 0.08, scale: 0.94 }}
        animate={played ? { opacity: 1, scale: 1 } : { opacity: 0.04, scale: 0.96 }}
        transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
        className={cn("relative overflow-hidden", containerClassName)}
      >
        <Image src={src} alt={alt} fill className={cn("object-cover", className)} sizes={sizes} />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(8,18,34,0.2),rgba(8,18,34,0.45))]" />
      </motion.div>

      {targetRect ? (
        <div className="pointer-events-none fixed inset-0 z-[90]">
          <motion.div
            initial={{ opacity: 0.96 }}
            animate={{ opacity: 0 }}
            transition={{ duration: 1.05, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(8,18,34,0.18),rgba(8,18,34,0.88))]"
          />
          <motion.div
            className="absolute"
            initial={{
              top: "4vh",
              left: "4vw",
              width: "92vw",
              height: "92vh",
              rotate: -12,
              scale: 1.08,
              opacity: 1
            }}
            animate={{
              top: targetRect.top,
              left: targetRect.left,
              width: targetRect.width,
              height: targetRect.height,
              rotate: 0,
              scale: 1,
              opacity: 1
            }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            onAnimationComplete={() => {
              setPlayed(true);
              setTargetRect(null);
            }}
          >
            <div
              className={cn(
                "relative h-full w-full overflow-hidden rounded-[2rem] shadow-[0_40px_140px_rgba(0,0,0,0.55)]",
                overlayClassName
              )}
            >
              <Image src={src} alt={alt} fill className={cn("object-cover", className)} sizes="100vw" priority />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(8,18,34,0.08),rgba(8,18,34,0.42))]" />
            </div>
          </motion.div>
        </div>
      ) : null}
    </>
  );
}
