import React, { useEffect, useState, useRef } from 'react';
import { useInView } from 'framer-motion';
import { cn } from '../../lib/utils';

interface UnscramblingTextProps extends React.HTMLAttributes<HTMLSpanElement> {
  text: string;
}

const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%&*";

export function UnscramblingText({ text, className, ...props }: UnscramblingTextProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });
  const [displayText, setDisplayText] = useState(text.split('').map(() => ''));

  useEffect(() => {
    if (!isInView) return;
    
    let iteration = 0;
    const interval = setInterval(() => {
      setDisplayText(prev => 
        prev.map((_, index) => {
          if (index < iteration) {
            return text[index];
          }
          return chars[Math.floor(Math.random() * chars.length)];
        })
      );
      
      if (iteration >= text.length) {
        clearInterval(interval);
      }
      iteration += 1 / 3;
    }, 30);

    return () => clearInterval(interval);
  }, [isInView, text]);

  return (
    <span ref={ref} className={cn("font-mono", className)} {...props}>
      {displayText.join('')}
    </span>
  );
}
