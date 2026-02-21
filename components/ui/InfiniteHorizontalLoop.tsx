import React from "react";
import { motion } from "framer-motion";
import { cn } from "../../lib/utils";

interface InfiniteHorizontalLoopProps extends React.HTMLAttributes<HTMLDivElement> {
  items: React.ReactNode[];
  speed?: number; // duration in seconds
  direction?: "left" | "right";
  gap?: string; // spacing
}

export function InfiniteHorizontalLoop({ 
  items, 
  speed = 20, 
  direction = "left",
  gap = "gap-8",
  className, 
  ...props 
}: InfiniteHorizontalLoopProps) {
  // Duplicamos los elementos para crear una ilusión de un loop infinito sin cortes (seamless)
  const duplicatedItems = [...items, ...items];
  
  const moveLeft = direction === "left";

  return (
    <div className={cn("relative w-full overflow-hidden flex", className)} {...props}>
      <motion.div
        className={cn("flex whitespace-nowrap items-center shrink-0 w-max", gap)}
        // Matemáticas: Transladamos en X el 50% de su propio contenedor duplicado,
        // Al llegar a la mitad, se resetea al inicio invisiblemente.
        animate={{
          x: moveLeft ? ["0%", "-50%"] : ["-50%", "0%"],
        }}
        // Física: Es un tween lineal repitiendo al infinito sin easing (velocidad constante -> linear)
        transition={{
          duration: speed,
          ease: "linear",
          repeat: Infinity,
        }}
        // Truco para optimizar render de GPU (60fps)
        style={{ willChange: "transform" }}
      >
        {duplicatedItems.map((item, index) => (
          <div key={`${index}-${typeof item === 'string' ? item : `item`}`} className="flex-shrink-0">
            {item}
          </div>
        ))}
      </motion.div>
    </div>
  );
}
