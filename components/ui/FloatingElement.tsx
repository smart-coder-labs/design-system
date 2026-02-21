import React, { useRef } from 'react';
import { motion, useScroll, useTransform, HTMLMotionProps } from 'framer-motion';
import { cn } from '../../lib/utils';

interface FloatingElementProps extends HTMLMotionProps<"div"> {
  rotationSpeed?: number;
}

export function FloatingElement({ children, rotationSpeed = 1, className, ...props }: FloatingElementProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const rotate = useTransform(scrollYProgress, [0, 1], [0, 360 * rotationSpeed]);
  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  return (
    <motion.div
      ref={ref}
      style={{ rotate, y }}
      className={cn("inline-block will-change-transform", className)}
      {...props}
    >
      {children}
    </motion.div>
  );
}
