import React from "react";
import { motion, Variants } from "framer-motion";
import { cn } from "../../lib/utils";

interface ScrollRevealCard {
  id: string | number;
  title: string;
  description: string;
  icon?: React.ReactNode;
}

interface ScrollRevealCardsProps extends React.HTMLAttributes<HTMLDivElement> {
  items: ScrollRevealCard[];
  columns?: 2 | 3 | 4;
}

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: { 
    opacity: 1, 
    y: 0,
    // Física del spring: stiffness 120, damping 20 para un slide-up suave con un pequeño freno.
    transition: { type: "spring", stiffness: 120, damping: 20 }
  }
};

export function ScrollRevealCards({ items, columns = 3, className, ...props }: ScrollRevealCardsProps) {
  const gridColumnsClass = {
    2: "grid-cols-1 md:grid-cols-2",
    3: "grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
    4: "grid-cols-1 md:grid-cols-2 lg:grid-cols-4",
  }[columns];

  return (
    <div className={cn("py-16 px-4 md:px-8 max-w-7xl mx-auto", className)} {...props}>
      <div className={cn("grid gap-6", gridColumnsClass)}>
        {items.map((item, index) => (
          <motion.div
            key={item.id}
            // `whileInView` dispara la animación cada vez que la card entra en la pantalla,
            // pero `viewport={{ once: true }}` hace que solo ocurra una vez.
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            // Agregamos un delay de stagger manual basado en el index de la iteración
            transition={{ delay: index * 0.1 }}
            variants={cardVariants}
            className="p-6 rounded-2xl bg-white/5 border border-white/10 shadow-lg backdrop-blur-sm
                       transition-colors hover:bg-white/10"
          >
            {item.icon && <div className="mb-4 text-3xl">{item.icon}</div>}
            <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
            <p className="text-gray-400 text-sm leading-relaxed">{item.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
