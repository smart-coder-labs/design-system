import React from "react";
import { motion, useScroll, useSpring, HTMLMotionProps } from "framer-motion";
import { cn } from "../../lib/utils";

interface ScrollProgressBarProps extends HTMLMotionProps<"div"> {
  color?: string; // Hex, rgb o Tailwind class si lo pasamos como style. backgroundColor: color
  height?: string; // e.g. "h-1" o "h-2"
  position?: "top" | "bottom";
}

/**
 * ScrollProgressBar
 * Una barra delgada en la parte superior que se llena según el progreso global
 * de toda la ventana. Perfecta para un "reading progress".
 */
export function ScrollProgressBar({
  color = "#007AFF", // Apple blue por defecto
  height = "h-1.5",
  position = "top",
  className,
  ...props
}: ScrollProgressBarProps) {
  // scrollYProgress nos da de 0 a 1 según la posición global de la ventana entera
  const { scrollYProgress } = useScroll();
  
  // Física: Le añadimos un resorte ('spring') para que el movimiento de la barra
  // sea orgánico y no rígido, especialmente si el usuario hace scroll brusco
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <motion.div
      className={cn(
        "fixed left-0 right-0 z-50 origin-left border-black/10",
        height,
        position === "top" ? "top-0" : "bottom-0",
        className
      )}
      style={{
        scaleX,
        backgroundColor: color
      }}
      {...props}
    />
  );
}
