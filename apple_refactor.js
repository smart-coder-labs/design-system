const fs = require('fs');
const path = require('path');

const targetFiles = [
  "ComicPanel.tsx",
  "CRTOverlay.tsx",
  "FloatingElement.tsx",
  "GlitchPageTransition.tsx",
  "HolographicCard.tsx",
  "ImmersiveHero.tsx",
  "InfiniteHorizontalLoop.tsx",
  "InteractiveCursor.tsx",
  "KineticMarquee.tsx",
  "MagneticButton.tsx",
  "ParallaxBanner.tsx",
  "ParallaxStoryStage.tsx",
  "PowerMeterTracker.tsx",
  "ScrollProgressBar.tsx",
  "ScrollRevealCards.tsx",
  "StickyImageTextSwap.tsx",
  "SystemBootPreloader.tsx",
  "TerminalAccordion.tsx",
  "UnscramblingText.tsx",
  "WebGLDistortionImage.tsx",
  "WebGLHologram.tsx",
  "WebGLTunnel.tsx"
];

const basePath = path.join(__dirname, 'components/ui');

// Function to apply Apple-like styling replacements
function appleRefactor(content) {
  let newContent = content;

  // Colors and Backgrounds
  newContent = newContent.replace(/bg-void-black(\/\d+)?/g, 'bg-white dark:bg-zinc-950$1');
  newContent = newContent.replace(/bg-industrial-grey\b(\/\d+)?/g, 'bg-zinc-100 dark:bg-zinc-900$1');
  
  // Borders
  newContent = newContent.replace(/border-industrial-grey\b/g, 'border-zinc-200 dark:border-zinc-800');
  newContent = newContent.replace(/border-acid-green\b/g, 'border-blue-500');
  newContent = newContent.replace(/border-4/g, 'border rounded-3xl');
  
  // Text Colors
  newContent = newContent.replace(/text-acid-green\b/g, 'text-blue-500');
  newContent = newContent.replace(/text-electric-orange\b/g, 'text-zinc-500');
  // For "text-white" that were meant for dark theme, replace with smart dark mode classes
  // except for white inside a button or explicit white bg contexts 
  // Let's do a safe replace for text-white -> text-zinc-900 dark:text-zinc-50
  newContent = newContent.replace(/text-white(?![\w-])/g, 'text-zinc-900 dark:text-white');
  newContent = newContent.replace(/text-gray-400\b/g, 'text-zinc-500 dark:text-zinc-400');
  newContent = newContent.replace(/text-gray-300\b/g, 'text-zinc-600 dark:text-zinc-300');
  
  // Variables & Inline styles
  newContent = newContent.replace(/var\(--color-electric-orange\)/g, 'rgba(0,0,0,0.05)');
  newContent = newContent.replace(/var\(--color-acid-green\)/g, 'rgba(0,0,0,0.05)');
  newContent = newContent.replace(/acid-green\b/g, 'blue-500');
  newContent = newContent.replace(/electric-orange\b/g, 'blue-500');

  // Fonts
  newContent = newContent.replace(/var\(--font-vt323\)/g, 'var(--font-sans)');
  newContent = newContent.replace(/tracking-widest/g, 'tracking-tight');
  newContent = newContent.replace(/tracking-\[0\.3em\]/g, 'tracking-normal');
  newContent = newContent.replace(/uppercase/g, '');

  // Effects & Shadows
  newContent = newContent.replace(/shadow-\[inset_0_0_100px_rgba\(0,0,0,0\.9\)\]/g, 'shadow-sm');
  newContent = newContent.replace(/mix-blend-difference/g, 'mix-blend-normal'); // Don't invert on cursor
  newContent = newContent.replace(/backdrop-blur-sm/g, 'backdrop-blur-xl bg-white/50 dark:bg-zinc-900/50');
  newContent = newContent.replace(/cursor-crosshair/g, 'cursor-pointer');
  newContent = newContent.replace(/bg-\[radial-gradient\(#fff_1px,transparent_1px\)\]/g, 'bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] dark:bg-[radial-gradient(#27272a_1px,transparent_1px)]');
  newContent = newContent.replace(/rgba\(204,\s*255,\s*0,\s*0\.15\)/g, 'rgba(255, 255, 255, 0.4)'); // glare
  newContent = newContent.replace(/rgba\(255,255,255,0\.02\)/g, 'rgba(0,0,0,0.05)'); // subtle grid line

  // Specific glitch/CRT overwrites
  if (newContent.includes('globalScanline_8s')) {
    newContent = newContent.replace(/animate-\[globalScanline.*\]/, '');
    newContent = newContent.replace(/bg-gradient-to-b from-transparent via-blue-500\/10 to-transparent/, 'bg-gradient-to-b from-transparent via-white/10 to-transparent');
  }

  return newContent;
}

async function processFiles() {
  let count = 0;
  for (const file of targetFiles) {
    const fullPath = path.join(basePath, file);
    if (fs.existsSync(fullPath)) {
      const content = fs.readFileSync(fullPath, 'utf8');
      const updated = appleRefactor(content);
      if (content !== updated) {
        fs.writeFileSync(fullPath, updated, 'utf8');
        console.log(`Updated ${file}`);
        count++;
      }
    } else {
      console.warn(`File not found: ${file}`);
    }
  }
  console.log(`Refactored ${count} components to Apple aesthetic.`);
}

processFiles();
