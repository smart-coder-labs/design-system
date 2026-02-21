import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { cn } from '../../lib/utils';

export function InteractiveCursor({ className }: React.HTMLAttributes<HTMLDivElement>) {
  const cursorX = useMotionValue(-100);
  const cursorXSpring = useSpring(cursorX, { damping: 25, stiffness: 700 });
  
  const cursorY = useMotionValue(-100);
  const cursorYSpring = useSpring(cursorY, { damping: 25, stiffness: 700 });
  
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX - 16);
      cursorY.set(e.clientY - 16);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest('.interactive')) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('mouseover', handleMouseOver);
    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, [cursorX, cursorY]);

  return (
    <motion.div
      className={cn("fixed top-0 left-0 w-8 h-8 rounded-full pointer-events-none z-[9999] mix-blend-normal bg-white", className)}
      style={{
        x: cursorXSpring,
        y: cursorYSpring,
        scale: isHovering ? 2 : 1,
        backgroundColor: isHovering ? 'rgba(0,0,0,0.05)' : '#fff',
      }}
      transition={{ scale: { type: "spring", stiffness: 300, damping: 20 } }}
    />
  );
}
