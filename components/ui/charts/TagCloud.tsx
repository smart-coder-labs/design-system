'use client';

import React, { useState, useMemo, useRef } from 'react';
import { motion } from 'framer-motion';
import { cn } from '../../../lib/utils';
import { chartSizes, chartPaletteArray, chartMotion, type ChartSize, type ChartVariant } from './shared/chartTokens';
import { linearScale, formatValue } from './shared/chartUtils';
import { ChartContainer } from './shared/ChartContainer';
import { ChartTooltip } from './shared/ChartTooltip';

export interface TagCloudDataPoint {
  text: string;
  value: number;
  color?: string;
}

export interface TagCloudProps {
  data: TagCloudDataPoint[];
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
  onTagClick?: (item: TagCloudDataPoint, index: number) => void;
}

export const TagCloud: React.FC<TagCloudProps> = ({
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
  onTagClick,
}) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [tooltipPos, setTooltipPos] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  const palette = colorScheme ?? chartPaletteArray;
  const { width, height, fontSize } = chartSizes[size];

  const minVal = useMemo(() => Math.min(...data.map((d) => d.value)), [data]);
  const maxVal = useMemo(() => Math.max(...data.map((d) => d.value)), [data]);

  const minFontSize = fontSize - 2;
  const maxFontSize = fontSize + 4;

  // Flow layout: place pills left-to-right, wrapping
  const tagLayout = useMemo(() => {
    const positions: Array<{ x: number; y: number; w: number; h: number; fs: number }> = [];
    const padX = 12;
    const padY = 6;
    const gapX = 8;
    const gapY = 8;
    let curX = padX;
    let curY = padY;
    const marginLeft = 8;

    data.forEach((tag) => {
      const fs = maxVal > minVal
        ? minFontSize + ((tag.value - minVal) / (maxVal - minVal)) * (maxFontSize - minFontSize)
        : (minFontSize + maxFontSize) / 2;

      const textW = tag.text.length * fs * 0.55;
      const pillW = textW + fs * 2;
      const pillH = fs * 2;

      if (curX + pillW > width - marginLeft && curX > padX) {
        curX = padX;
        curY += pillH + gapY;
      }

      positions.push({ x: curX, y: curY, w: pillW, h: pillH, fs });
      curX += pillW + gapX;
    });

    return positions;
  }, [data, width, minVal, maxVal, minFontSize, maxFontSize]);

  const totalHeight = useMemo(() => {
    if (tagLayout.length === 0) return height;
    const maxY = Math.max(...tagLayout.map((t) => t.y + t.h));
    return Math.max(maxY + 16, 60);
  }, [tagLayout, height]);

  const handleHover = (index: number | null, event?: React.MouseEvent) => {
    setHoveredIndex(index);
    if (index !== null && event && containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      setTooltipPos({ x: event.clientX - rect.left, y: event.clientY - rect.top });
    }
  };

  const ariaLabel = title
    ? `${title} tag cloud with ${data.length} tags`
    : `Tag cloud with ${data.length} tags`;

  const containerVariants = animated
    ? { hidden: {}, visible: { transition: { staggerChildren: 0.03 } } }
    : undefined;

  const itemVariants = animated
    ? {
        hidden: { opacity: 0, scale: 0.8 },
        visible: { opacity: 1, scale: 1, transition: { type: 'spring', ...chartMotion.spring } },
      }
    : undefined;

  return (
    <ChartContainer variant={variant} animated={animated} title={title} subtitle={subtitle} className={className}>
      <div ref={containerRef} className="relative w-full">
        <svg
          role="img"
          aria-label={ariaLabel}
          viewBox={`0 0 ${width} ${totalHeight}`}
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
            {data.map((tag, i) => {
              const pos = tagLayout[i];
              if (!pos) return null;
              const isHovered = hoveredIndex === i;
              const dimmed = hoveredIndex !== null && !isHovered;
              const tagColor = tag.color ?? palette[i % palette.length];

              return (
                <motion.g
                  key={i}
                  variants={itemVariants}
                  cursor={interactive ? 'pointer' : undefined}
                  onMouseEnter={(e) => interactive && handleHover(i, e)}
                  onMouseMove={(e) => interactive && handleHover(i, e)}
                  onMouseLeave={() => interactive && handleHover(null)}
                  onClick={() => onTagClick?.(tag, i)}
                  opacity={dimmed ? 0.4 : 1}
                >
                  {/* Pill background */}
                  <rect
                    x={pos.x}
                    y={pos.y}
                    width={pos.w}
                    height={pos.h}
                    rx={pos.h / 2}
                    fill={tagColor}
                    fillOpacity={isHovered ? 0.25 : 0.12}
                    stroke={tagColor}
                    strokeWidth={isHovered ? 1.5 : 1}
                    strokeOpacity={isHovered ? 0.8 : 0.4}
                  />
                  {/* Tag text */}
                  <text
                    x={pos.x + pos.w / 2}
                    y={pos.y + pos.h / 2}
                    textAnchor="middle"
                    dominantBaseline="central"
                    fontSize={pos.fs}
                    fontWeight={isHovered ? 600 : 500}
                    fill={tagColor}
                  >
                    {tag.text}
                  </text>
                </motion.g>
              );
            })}
          </motion.g>
        </svg>

        {showTooltip && interactive && hoveredIndex !== null && (
          <ChartTooltip
            visible
            x={tooltipPos.x}
            y={tooltipPos.y}
            label={data[hoveredIndex].text}
            value={formatValue(data[hoveredIndex].value)}
            color={data[hoveredIndex].color ?? palette[hoveredIndex % palette.length]}
          />
        )}
      </div>
    </ChartContainer>
  );
};

export default TagCloud;
