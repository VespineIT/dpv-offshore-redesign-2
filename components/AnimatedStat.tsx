"use client";

import { useEffect, useRef } from 'react';
import { useInView, useMotionValue, useSpring } from 'framer-motion';

type AnimatedStatProps = {
  target: number;
  suffix: string;
  precision?: number;
};

export default function AnimatedStat({ target, suffix, precision = 0 }: AnimatedStatProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  const motionValue = useMotionValue(0);
  // Use spring for a more natural "count up" feel
  const springValue = useSpring(motionValue, {
    damping: 100,
    stiffness: 100,
  });

  useEffect(() => {
    if (isInView) {
      motionValue.set(target);
    }
  }, [motionValue, isInView, target]);

  useEffect(() => {
    const unsubscribe = springValue.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = `${latest.toFixed(precision)}${suffix}`;
      }
    });
    return () => unsubscribe();
  }, [springValue, suffix, precision]);

  return <span ref={ref}>0{suffix}</span>;
}