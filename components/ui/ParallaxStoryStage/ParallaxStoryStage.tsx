import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { UnscramblingText } from '../UnscramblingText';
import { FloatingElement } from '../FloatingElement';
import { ComicPanel } from '../ComicPanel';
import { cn } from '../../../lib/utils';

export function ParallaxStoryStage({ className }: React.HTMLAttributes<HTMLDivElement>) {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Calculate the horizontal movement required
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-60%"]);
  // Right panel fades in as scroll begins
  const rightOpacity = useTransform(scrollYProgress, [0, 0.25], [0, 1]);

  return (
    <div ref={containerRef} className={cn("h-[500vh] relative", className)}>
      <div className="sticky top-0 h-screen overflow-hidden flex items-center border-y border-border-primary">
        <motion.div style={{ x }} className="flex gap-32 px-[10vw] items-center w-[200vw]">

          <div className="w-[50vw] shrink-0">
            <UnscramblingText
              text="SCENE 01: THE INFILTRATION"
              className="text-6xl text-text-primary dark:text-text-tertiary font-[family-name:var(--font-sans)] block mb-10"
            />
            <ComicPanel direction="left" className="border-blue-500 max-w-2xl bg-zinc-900 dark:bg-black">
              <p className="text-2xl text-white font-[family-name:var(--font-mono)] break-words">
                System bypass initiated. Firewalls structurally compromised at tier 4.
                Awaiting manual override from terminal node zero...
              </p>
            </ComicPanel>
          </div>

          <motion.div style={{ opacity: rightOpacity }} className="w-[40vw] shrink-0 flex items-center justify-center relative">
             <FloatingElement rotationSpeed={1.5} className="absolute -z-10 opacity-30">
               <div className="w-[400px] h-[400px] border rounded-3xl border-blue-500/50 rounded-full border-dashed" />
             </FloatingElement>
             <div className="text-center">
               <UnscramblingText
                 text="DATA CORE DISCOVERED"
                 className="text-6xl sm:text-7xl lg:text-8xl text-blue-500 font-black"
               />
               <p className="mt-4 text-text-secondary dark:text-text-tertiary font-[family-name:var(--font-sans)] text-2xl tracking-tight">
                 1024 YOTABYTES ACCESSIBLE
               </p>
             </div>
          </motion.div>

          <div className="w-[50vw] shrink-0 pb-[10vh]">
            <ComicPanel direction="right" className="border-blue-500 max-w-xl bg-zinc-900 dark:bg-black">
              <h3 className="text-4xl text-zinc-300 font-[family-name:var(--font-sans)] mb-4">EXTRACTION PROTOCOL</h3>
              <p className="text-lg text-white/80 font-[family-name:var(--font-mono)]">
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
