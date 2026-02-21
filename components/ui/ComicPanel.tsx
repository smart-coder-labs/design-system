import React from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';
import { cn } from '../../lib/utils';

interface ComicPanelProps extends HTMLMotionProps<"div"> {
  direction?: "left" | "right";
  children?: React.ReactNode;
}

export function ComicPanel({ children, direction = "left", className, ...props }: ComicPanelProps) {
  const isLeft = direction === "left";
  return (
    <motion.div
      initial={{ x: isLeft ? -150 : 150, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 80, damping: 15 }}
      viewport={{ once: false, margin: "-10%" }}
      className={cn(
        "bg-white dark:bg-zinc-950 border rounded-3xl p-6 shadow-md relative overflow-hidden",
        className
      )}
      style={{
        boxShadow: isLeft ? "8px 8px 0px 0px rgba(0,0,0,0.05)" : "-8px 8px 0px 0px rgba(0,0,0,0.05)"
      }}
      {...props}
    >
      {/* Clip path for typical comic panel look */}
      <div className="absolute opacity-10 top-0 left-0 w-full h-full pointer-events-none bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] dark:bg-[radial-gradient(#27272a_1px,transparent_1px)] [background-size:8px_8px]" />
      <div className="relative z-10">
        {children}
      </div>
    </motion.div>
  );
}
