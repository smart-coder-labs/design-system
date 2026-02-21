const fs = require('fs');
const path = require('path');

const targetFiles = [
  "ComicPanel.stories.tsx",
  "CRTOverlay.stories.tsx",
  "FloatingElement.stories.tsx",
  "GlitchPageTransition.stories.tsx",
  "HolographicCard.stories.tsx",
  "ImmersiveHero.stories.tsx",
  "InfiniteHorizontalLoop.stories.tsx",
  "InteractiveCursor.stories.tsx",
  "KineticMarquee.stories.tsx",
  "MagneticButton.stories.tsx",
  "ParallaxBanner.stories.tsx",
  "ParallaxStoryStage.stories.tsx",
  "PowerMeterTracker.stories.tsx",
  "ScrollProgressBar.stories.tsx",
  "ScrollRevealCards.stories.tsx",
  "StickyImageTextSwap.stories.tsx",
  "SystemBootPreloader.stories.tsx",
  "TerminalAccordion.stories.tsx",
  "UnscramblingText.stories.tsx",
  "WebGLDistortionImage.stories.tsx",
  "WebGLHologram.stories.tsx",
  "WebGLTunnel.stories.tsx",
  "CyberpunkWebGL.stories.tsx"
];

const basePath = path.join(__dirname, 'stories');

// Function to apply Apple-like styling replacements
function appleRefactor(content) {
  let newContent = content;

  // Colors and Backgrounds
  newContent = newContent.replace(/bg-void-black/g, 'bg-white dark:bg-zinc-950');
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
  newContent = newContent.replace(/text-white(?![\w-])/g, 'text-zinc-900 dark:text-zinc-50');
  newContent = newContent.replace(/text-gray-400\b/g, 'text-zinc-500 dark:text-zinc-400');
  newContent = newContent.replace(/text-gray-300\b/g, 'text-zinc-600 dark:text-zinc-300');
  
  // Variables & Inline styles
  newContent = newContent.replace(/var\(--color-electric-orange\)/g, 'rgba(0,0,0,0.05)');
  newContent = newContent.replace(/var\(--color-acid-green\)/g, 'rgba(0,0,0,0.05)');
  newContent = newContent.replace(/acid-green\b/g, 'blue-500');
  newContent = newContent.replace(/electric-orange\b/g, 'blue-500');

  // Fonts
  newContent = newContent.replace(/var\(--font-vt323\)/g, 'var(--font-sans)');
  newContent = newContent.replace(/font-\[family-name:var\(--font-vt323\)\]/g, 'font-sans tracking-tight');
  newContent = newContent.replace(/tracking-widest/g, 'tracking-tight');
  newContent = newContent.replace(/tracking-\[0\.3em\]/g, 'tracking-normal');
  newContent = newContent.replace(/uppercase/g, '');

  // Specific glitch/CRT overwrites
  if (newContent.includes('globalScanline_8s')) {
    newContent = newContent.replace(/animate-\[globalScanline.*\]/, '');
    newContent = newContent.replace(/bg-gradient-to-b from-transparent via-blue-500\/10 to-transparent/, 'bg-gradient-to-b from-transparent via-white/10 to-transparent');
  }

  // Ensure font-[family-name:var(--font-sans)] is just font-sans
  newContent = newContent.replace(/font-\[family-name:var\(--font-sans\)\]/g, 'font-sans');

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
  console.log(`Refactored ${count} stories to Apple aesthetic.`);
}

processFiles();
