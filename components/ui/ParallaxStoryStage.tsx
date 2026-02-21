import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { UnscramblingText } from './UnscramblingText';
import { FloatingElement } from './FloatingElement';
import { ComicPanel } from './ComicPanel';
import { cn } from '../../lib/utils';

export function ParallaxStoryStage({ className }: React.HTMLAttributes<HTMLDivElement>) {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Calculate the horizontal movement required
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-60%"]);

  return (
    <div ref={containerRef} className={cn("h-[500vh] relative", className)}>
      <div className="sticky top-0 h-screen overflow-hidden flex items-center bg-white dark:bg-zinc-950/90 border-y border-zinc-200 dark:border-zinc-800">
        <motion.div style={{ x }} className="flex gap-32 px-[10vw] items-center w-[200vw]">
          
          <div className="w-[50vw] shrink-0">
            <UnscramblingText 
              text="SCENE 01: THE INFILTRATION" 
              className="text-6xl text-zinc-500 font-[family-name:var(--font-sans)] block mb-10" 
            />
            <ComicPanel direction="left" className="border-blue-500 max-w-2xl bg-black">
              <p className="text-2xl text-zinc-900 dark:text-white font-[family-name:var(--font-mono)] break-words">
                System bypass initiated. Firewalls structurally compromised at tier 4.
                Awaiting manual override from terminal node zero...
              </p>
            </ComicPanel>
          </div>

          <div className="w-[40vw] shrink-0 flex items-center justify-center relative">
             <FloatingElement rotationSpeed={1.5} className="absolute -z-10 opacity-30">
               <div className="w-[400px] h-[400px] border rounded-3xl border-blue-500/50 rounded-full border-dashed" />
             </FloatingElement>
             <div className="text-center">
               <UnscramblingText 
                 text="DATA CORE DISCOVERED" 
                 className="text-6xl sm:text-7xl lg:text-8xl text-blue-500 font-black" 
               />
               <p className="mt-4 text-zinc-500 dark:text-zinc-400 font-[family-name:var(--font-sans)] text-2xl tracking-tight">
                 1024 YOTABYTES ACCESSIBLE
               </p>
             </div>
          </div>

          <div className="w-[50vw] shrink-0 pb-[10vh]">
            <ComicPanel direction="right" className="border-blue-500 max-w-xl bg-black">
              <h3 className="text-4xl text-zinc-500 font-[family-name:var(--font-sans)] mb-4">EXTRACTION PROTOCOL</h3>
              <p className="text-lg text-zinc-900 dark:text-white/80 font-[family-name:var(--font-mono)]">
                Downloading encrypted fragments into portable drives. Keep the connection stable until completion.
                Do not let the ICE locate your subnet.
              </p>
            </ComicPanel>
          </div>

        </motion.div>
      </div>
    </div>
  );
}
