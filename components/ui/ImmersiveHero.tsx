import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { cn } from "../../lib/utils";

interface ImmersiveHeroProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  subtitle?: string;
  backgroundImage: string;
}

/**
 * ImmersiveHero
 * Un hero section que escala lentamente su imagen de fondo mientras los textos
 * emergen desde abajo con un efecto de fade in elegante.
 */
export function ImmersiveHero({ title, subtitle, backgroundImage, className, ...props }: ImmersiveHeroProps) {
  const { scrollY } = useScroll();
  
  // Parallax subtle on scroll down
  const y = useTransform(scrollY, [0, 1000], [0, 200]);

  return (
    <div 
      className={cn("relative h-screen w-full overflow-hidden flex items-center justify-center", className)}
      {...props}
    >
      {/* Background Image with Slow Scale Animation */}
      <motion.div
        className="absolute inset-0 z-0"
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        style={{ y }}
        // Física: un tween muy lento y suave para dar un efecto premium.
        transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1] }}
      >
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        />
        {/* Dark overlay for better text contrast */}
        <div className="absolute inset-0 bg-black/40" />
      </motion.div>

      {/* Content Container */}
      <div className="relative z-10 flex flex-col items-center text-center text-zinc-900 dark:text-white px-6">
        <motion.h1
          className="text-5xl md:text-7xl font-bold tracking-tight mb-4"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          // Física: Un resorte (spring) con poco rebote (damping alto) para que el texto aterrice firme
          transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.2 }}
        >
          {title}
        </motion.h1>
        
        {subtitle && (
          <motion.p
            className="text-lg md:text-2xl text-zinc-900 dark:text-white/80 max-w-2xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.4 }}
          >
            {subtitle}
          </motion.p>
        )}
      </div>
    </div>
  );
}
