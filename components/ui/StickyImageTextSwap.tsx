import React, { useState, useRef } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { cn } from "../../lib/utils";

interface StickySectionItem {
  id: string | number;
  title: string;
  description: string;
  image: string;
}

interface StickyImageTextSwapProps extends React.HTMLAttributes<HTMLDivElement> {
  items: StickySectionItem[];
}

export function StickyImageTextSwap({ items, className, ...props }: StickyImageTextSwapProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className={cn("relative w-full max-w-6xl mx-auto px-4 py-24", className)} {...props}>
      <div className="flex flex-col md:flex-row items-start gap-16">
        {/* Lado izquierdo Fijo (Sticky) - Imagen */}
        <div className="w-full md:w-1/2 sticky top-32 h-[60vh] rounded-3xl overflow-hidden bg-gray-900 border border-white/10 shadow-2xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              // Física: La imagen cruza de manera muy rápida mediante un tween
              initial={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
              animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
              exit={{ opacity: 0, scale: 1.05, filter: "blur(10px)" }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${items[activeIndex]?.image})` }}
            />
          </AnimatePresence>
        </div>

        {/* Lado derecho Scrollable - Textos */}
        <div className="w-full md:w-1/2 py-[40vh] flex flex-col gap-[70vh]">
          {items.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0.3 }}
              whileInView={{ opacity: 1 }}
              viewport={{ amount: 0.6, margin: "-10% 0px -10% 0px" }}
              onViewportEnter={() => setActiveIndex(index)}
              transition={{ duration: 0.4 }}
              className="flex flex-col justify-center min-h-[40vh]"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-br from-white to-white/60">
                {item.title}
              </h2>
              <p className="text-xl text-zinc-500 dark:text-zinc-400 leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
