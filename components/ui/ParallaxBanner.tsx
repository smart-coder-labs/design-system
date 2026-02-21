import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { cn } from "../../lib/utils";

interface ParallaxBannerProps extends React.HTMLAttributes<HTMLDivElement> {
  image: string;
  height?: string;
  speed?: number;
  children?: React.ReactNode;
}

export function ParallaxBanner({ 
  image, 
  height = "h-[60vh]", 
  speed = 0.5,
  children,
  className, 
  ...props 
}: ParallaxBannerProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  // useScroll captura el progreso del scroll del div contenedor dentro del viewport.
  // offset: ["start end", "end start"] -> cuando la parte superior de la imagen entra al fondo del viewport 
  // hasta que el fondo de la imagen sale por la parte superior del viewport.
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Mapeamos el progreso de 0 a 1 a un desplazamiento vertical (Y).
  // Math: 1 viene siendo el final, así que movemos la imagen de arriba a abajo o viceversa.
  const y = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"]);

  return (
    <div 
      ref={containerRef}
      className={cn("relative w-full overflow-hidden flex items-center justify-center", height, className)}
      {...props}
    >
      <motion.div 
        className="absolute inset-0 w-full h-[140%] -top-[20%] bg-cover bg-center z-0 will-change-transform"
        style={{ backgroundImage: `url(${image})`, y }}
        // La animación es pasiva respecto al scroll, no hay transición física per se,
        // pero la interpolación se hace muy fluida gracias a Framer Motion 60fps
      />
      
      {/* Overlay oscuro para legibilidad si hay contenido encima */}
      <div className="absolute inset-0 bg-black/30 z-10" />

      {/* Children content */}
      <div className="relative z-20 container mx-auto px-4 text-center">
        {children}
      </div>
    </div>
  );
}
