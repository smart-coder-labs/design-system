'use client';

import React, { useState, useMemo, useRef } from 'react';
import { motion } from 'framer-motion';
import { cn } from '../../../lib/utils';
import { chartSizes, chartPaletteArray, chartMotion, type ChartSize, type ChartVariant } from './shared/chartTokens';
import { linearScale, formatValue } from './shared/chartUtils';
import { ChartContainer } from './shared/ChartContainer';
import { ChartTooltip } from './shared/ChartTooltip';

export interface WordCloudDataPoint {
  text: string;
  value: number;
  color?: string;
}

export interface WordCloudProps {
  data: WordCloudDataPoint[];
  className?: string;
  size?: ChartSize;
  variant?: ChartVariant;
  animated?: boolean;
  interactive?: boolean;
  showTooltip?: boolean;
  showLabels?: boolean;
  colorScheme?: string[];
  title?: string;
  subtitle?: string;
}

export const WordCloud: React.FC<WordCloudProps> = ({
  data,
  className,
  size = 'md',
  variant = 'default',
  animated = true,
  interactive = true,
  showTooltip = true,
  showLabels = true,
  colorScheme,
  title,
  subtitle,
}) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [tooltipPos, setTooltipPos] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  const palette = colorScheme ?? chartPaletteArray;
  const { width, height, fontSize } = chartSizes[size];

  const sortedData = useMemo(() => [...data].sort((a, b) => b.value - a.value), [data]);

  const minVal = useMemo(() => Math.min(...data.map((d) => d.value)), [data]);
  const maxVal = useMemo(() => Math.max(...data.map((d) => d.value)), [data]);

  const minFontSize = fontSize;
  const maxFontSize = fontSize * 3;

  // Spiral placement algorithm
  const wordPositions = useMemo(() => {
    const positions: Array<{ x: number; y: number; fontSize: number; rotation: number }> = [];
    const cx = width / 2;
    const cy = height / 2;
    const placed: Array<{ x: number; y: number; w: number; h: number }> = [];

    sortedData.forEach((word, i) => {
      const fs = maxVal > minVal
        ? minFontSize + ((word.value - minVal) / (maxVal - minVal)) * (maxFontSize - minFontSize)
        : (minFontSize + maxFontSize) / 2;

      const estimatedW = word.text.length * fs * 0.6;
      const estimatedH = fs * 1.2;
      const rotation = i % 5 === 0 ? -15 + Math.random() * 30 : 0;

      // Spiral outward to find non-overlapping position
      let x = cx;
      let y = cy;
      let angle = 0;
      let radius = 0;
      let found = false;

      for (let step = 0; step < 300 && !found; step++) {
        angle = step * 0.5;
        radius = step * 2;
        x = cx + radius * Math.cos(angle) - estimatedW / 2;
        y = cy + radius * Math.sin(angle);

        // Check bounds
        if (x < 10 || x + estimatedW > width - 10 || y - estimatedH / 2 < 10 || y + estimatedH / 2 > height - 10) continue;

        // Check overlap with placed words
        const overlaps = placed.some((p) =>
          x < p.x + p.w && x + estimatedW > p.x &&
          y - estimatedH / 2 < p.y + p.h / 2 && y + estimatedH / 2 > p.y - p.h / 2
        );

        if (!overlaps) {
          found = true;
        }
      }

      if (found) {
        placed.push({ x, y, w: estimatedW, h: estimatedH });
        positions.push({ x: x + estimatedW / 2, y, fontSize: fs, rotation });
      } else {
        // Fallback: place at offset position
        positions.push({ x: cx + (i % 3 - 1) * 60, y: cy + Math.floor(i / 3) * 30, fontSize: fs * 0.7, rotation: 0 });
      }
    });

    return positions;
  }, [sortedData, width, height, minVal, maxVal, minFontSize, maxFontSize]);

  const handleHover = (index: number | null, event?: React.MouseEvent) => {
    setHoveredIndex(index);
    if (index !== null && event && containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      setTooltipPos({ x: event.clientX - rect.left, y: event.clientY - rect.top });
    }
  };

  const ariaLabel = title
    ? `${title} word cloud with ${data.length} words`
    : `Word cloud with ${data.length} words`;

  const containerVariants = animated
    ? { hidden: {}, visible: { transition: { staggerChildren: 0.04 } } }
    : undefined;

  const itemVariants = animated
    ? {
        hidden: { opacity: 0, scale: 0 },
        visible: { opacity: 1, scale: 1, transition: { type: 'spring', ...chartMotion.spring } },
      }
    : undefined;

  return (
    <ChartContainer variant={variant} animated={animated} title={title} subtitle={subtitle} className={className}>
      <div ref={containerRef} className="relative w-full">
        <svg
          role="img"
          aria-label={ariaLabel}
          viewBox={`0 0 ${width} ${height}`}
          className="w-full h-auto"
          tabIndex={0}
          style={{ outline: 'none' }}
          onFocus={(e) => { e.currentTarget.style.outline = '2px solid var(--color-accent-blue)'; e.currentTarget.style.outlineOffset = '2px'; e.currentTarget.style.borderRadius = '8px'; }}
          onBlur={(e) => { e.currentTarget.style.outline = 'none'; }}
        >
          <title>{ariaLabel}</title>

          <motion.g
            variants={containerVariants}
            initial={animated ? 'hidden' : undefined}
            animate={animated ? 'visible' : undefined}
          >
            {sortedData.map((word, i) => {
              if (!wordPositions[i]) return null;
              const pos = wordPositions[i];
              const isHovered = hoveredIndex === i;
              const dimmed = hoveredIndex !== null && !isHovered;
              const wordColor = word.color ?? palette[i % palette.length];

              return (
                <motion.text
                  key={i}
                  variants={itemVariants}
                  x={pos.x}
                  y={pos.y}
                  textAnchor="middle"
                  dominantBaseline="central"
                  fontSize={pos.fontSize}
                  fontWeight={isHovered ? 700 : 600}
                  fill={wordColor}
                  opacity={dimmed ? 0.3 : 1}
                  transform={pos.rotation !== 0 ? `rotate(${pos.rotation}, ${pos.x}, ${pos.y})` : undefined}
                  cursor={interactive ? 'pointer' : undefined}
                  onMouseEnter={(e) => interactive && handleHover(i, e)}
                  onMouseMove={(e) => interactive && handleHover(i, e)}
                  onMouseLeave={() => interactive && handleHover(null)}
                  style={{ transformOrigin: `${pos.x}px ${pos.y}px` }}
                >
                  {word.text}
                </motion.text>
              );
            })}
          </motion.g>
        </svg>

        {showTooltip && interactive && hoveredIndex !== null && (
          <ChartTooltip
            visible
            x={tooltipPos.x}
            y={tooltipPos.y}
            label={sortedData[hoveredIndex].text}
            value={formatValue(sortedData[hoveredIndex].value)}
            color={sortedData[hoveredIndex].color ?? palette[hoveredIndex % palette.length]}
          />
        )}
      </div>
    </ChartContainer>
  );
};

export default WordCloud;
