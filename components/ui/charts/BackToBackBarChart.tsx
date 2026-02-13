'use client';

import React, { useState, useCallback, useMemo, useRef } from 'react';
import { motion } from 'framer-motion';
import { cn } from '../../../lib/utils';
import { chartSizes, chartPaletteArray, chartMotion, type ChartSize, type ChartVariant } from './shared/chartTokens';
import { linearScale, generateTicks, formatValue } from './shared/chartUtils';
import { ChartContainer } from './shared/ChartContainer';
import { ChartTooltip } from './shared/ChartTooltip';
import { ChartGrid } from './shared/ChartGrid';

export interface BackToBackBarChartProps {
  data: Array<{ label: string; leftValue: number; rightValue: number }>;
  leftLabel?: string;
  rightLabel?: string;
  leftColor?: string;
  rightColor?: string;
  className?: string;
  size?: ChartSize;
  variant?: ChartVariant;
  animated?: boolean;
  interactive?: boolean;
  showTooltip?: boolean;
  showLabels?: boolean;
  colorScheme?: string[];
  onDataPointClick?: (item: any, index: number) => void;
  onDataPointHover?: (item: any, index: number | null) => void;
  title?: string;
  subtitle?: string;
}

export const BackToBackBarChart: React.FC<BackToBackBarChartProps> = ({
  data,
  leftLabel = 'Group A',
  rightLabel = 'Group B',
  leftColor,
  rightColor,
  className,
  size = 'md',
  variant = 'default',
  animated = true,
  interactive = true,
  showTooltip = true,
  showLabels = true,
  colorScheme,
  onDataPointClick,
  onDataPointHover,
  title,
  subtitle,
}) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [hoveredSide, setHoveredSide] = useState<'left' | 'right' | null>(null);
  const [tooltipPos, setTooltipPos] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  const palette = colorScheme ?? chartPaletteArray;
  const { width, height: baseHeight, fontSize, padding } = chartSizes[size];

  const lColor = leftColor ?? palette[0];
  const rColor = rightColor ?? palette[1];

  const labelColumnWidth = showLabels ? (size === 'sm' ? 50 : size === 'md' ? 70 : 90) : 0;
  const margin = { top: padding + 20, right: padding, bottom: padding, left: padding };
  const chartWidth = width - margin.left - margin.right;
  const sideWidth = (chartWidth - labelColumnWidth) / 2;
  const centerX = margin.left + sideWidth;

  const rowCount = data.length;
  const rowGap = Math.max(3, size === 'sm' ? 4 : size === 'md' ? 6 : 8);
  const chartHeight = baseHeight - margin.top - margin.bottom;
  const barHeight = Math.max(4, (chartHeight - rowGap * (rowCount + 1)) / rowCount);
  const height = baseHeight;

  const domainMax = useMemo(() => {
    const max = Math.max(
      ...data.map((d) => d.leftValue),
      ...data.map((d) => d.rightValue),
      0,
    );
    return max === 0 ? 1 : max;
  }, [data]);

  const ticks = useMemo(() => generateTicks(0, domainMax, 4), [domainMax]);
  const tickMax = ticks[ticks.length - 1];

  const gridVerticalLines = useMemo(() => {
    const lines: number[] = [];
    ticks.forEach((t) => {
      // Left side (mirrored)
      lines.push(centerX - linearScale(t, 0, tickMax, 0, sideWidth));
      // Right side
      lines.push(centerX + labelColumnWidth + linearScale(t, 0, tickMax, 0, sideWidth));
    });
    return lines;
  }, [ticks, tickMax, centerX, sideWidth, labelColumnWidth]);

  const handleHover = useCallback(
    (index: number | null, side: 'left' | 'right' | null, event?: React.MouseEvent) => {
      setHoveredIndex(index);
      setHoveredSide(side);
      if (index !== null && event && containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setTooltipPos({
          x: event.clientX - rect.left,
          y: event.clientY - rect.top,
        });
      }
      onDataPointHover?.(index !== null ? data[index] : null, index);
    },
    [data, onDataPointHover],
  );

  const handleClick = useCallback(
    (index: number) => {
      onDataPointClick?.(data[index], index);
    },
    [data, onDataPointClick],
  );

  const containerVariants = animated
    ? { hidden: {}, visible: { transition: { staggerChildren: 0.05 } } }
    : undefined;

  const getBarVariants = (direction: 'left' | 'right', barW: number) =>
    animated
      ? {
          hidden: { width: 0, opacity: 0 },
          visible: {
            width: Math.max(0, barW),
            opacity: 1,
            transition: { type: 'spring', ...chartMotion.spring },
          },
        }
      : undefined;

  const ariaLabel = title
    ? `${title} back-to-back bar chart with ${data.length} categories`
    : `Back-to-back bar chart comparing ${leftLabel} and ${rightLabel} across ${data.length} categories`;

  return (
    <ChartContainer
      variant={variant}
      animated={animated}
      title={title}
      subtitle={subtitle}
      className={className}
    >
      <div ref={containerRef} className="relative w-full">
        <svg
          role="img"
          aria-label={ariaLabel}
          viewBox={`0 0 ${width} ${height}`}
          className="w-full h-auto"
          tabIndex={0}
          style={{ outline: 'none' }}
          onFocus={(e) => {
            e.currentTarget.style.outline = '2px solid var(--color-accent-blue)';
            e.currentTarget.style.outlineOffset = '2px';
            e.currentTarget.style.borderRadius = '8px';
          }}
          onBlur={(e) => {
            e.currentTarget.style.outline = 'none';
          }}
        >
          <title>{ariaLabel}</title>

          {/* Grid vertical lines */}
          <ChartGrid
            x={margin.left}
            y={margin.top}
            width={chartWidth}
            height={chartHeight}
            verticalLines={gridVerticalLines}
          />

          {/* Header labels */}
          <text
            x={centerX - sideWidth / 2}
            y={margin.top - 8}
            textAnchor="middle"
            fill={lColor}
            fontSize={fontSize - 1}
            fontWeight={600}
            fontFamily="-apple-system, BlinkMacSystemFont, 'Inter', sans-serif"
          >
            {leftLabel}
          </text>
          <text
            x={centerX + labelColumnWidth + sideWidth / 2}
            y={margin.top - 8}
            textAnchor="middle"
            fill={rColor}
            fontSize={fontSize - 1}
            fontWeight={600}
            fontFamily="-apple-system, BlinkMacSystemFont, 'Inter', sans-serif"
          >
            {rightLabel}
          </text>

          {/* Bars */}
          <motion.g
            variants={containerVariants}
            initial={animated ? 'hidden' : undefined}
            animate={animated ? 'visible' : undefined}
          >
            {data.map((item, i) => {
              const y = margin.top + rowGap + i * (barHeight + rowGap);
              const leftW = linearScale(item.leftValue, 0, tickMax, 0, sideWidth);
              const rightW = linearScale(item.rightValue, 0, tickMax, 0, sideWidth);
              const isHovered = hoveredIndex === i;

              return (
                <g key={i}>
                  {/* Left bar (grows right-to-left) */}
                  <motion.rect
                    y={y}
                    height={barHeight}
                    fill={lColor}
                    rx={Math.min(3, barHeight / 4)}
                    opacity={hoveredIndex !== null && !isHovered ? 0.4 : 1}
                    variants={getBarVariants('left', leftW)}
                    {...(!animated && { width: Math.max(0, leftW) })}
                    x={centerX - leftW}
                    {...(interactive && {
                      onMouseEnter: (e: React.MouseEvent) => handleHover(i, 'left', e),
                      onMouseMove: (e: React.MouseEvent) => handleHover(i, 'left', e),
                      onMouseLeave: () => handleHover(null, null),
                      onClick: () => handleClick(i),
                      cursor: 'pointer',
                      role: 'button',
                      'aria-label': `${item.label} ${leftLabel}: ${formatValue(item.leftValue)}`,
                      tabIndex: -1,
                    })}
                  />

                  {/* Right bar */}
                  <motion.rect
                    x={centerX + labelColumnWidth}
                    y={y}
                    height={barHeight}
                    fill={rColor}
                    rx={Math.min(3, barHeight / 4)}
                    opacity={hoveredIndex !== null && !isHovered ? 0.4 : 1}
                    variants={getBarVariants('right', rightW)}
                    {...(!animated && { width: Math.max(0, rightW) })}
                    {...(interactive && {
                      onMouseEnter: (e: React.MouseEvent) => handleHover(i, 'right', e),
                      onMouseMove: (e: React.MouseEvent) => handleHover(i, 'right', e),
                      onMouseLeave: () => handleHover(null, null),
                      onClick: () => handleClick(i),
                      cursor: 'pointer',
                      role: 'button',
                      'aria-label': `${item.label} ${rightLabel}: ${formatValue(item.rightValue)}`,
                      tabIndex: -1,
                    })}
                  />

                  {/* Center label */}
                  {showLabels && (
                    <text
                      x={centerX + labelColumnWidth / 2}
                      y={y + barHeight / 2 + fontSize / 3}
                      textAnchor="middle"
                      fill="var(--color-text-secondary)"
                      fontSize={fontSize - 2}
                      fontFamily="-apple-system, BlinkMacSystemFont, 'Inter', sans-serif"
                    >
                      {item.label}
                    </text>
                  )}
                </g>
              );
            })}
          </motion.g>
        </svg>

        {/* Tooltip */}
        {showTooltip && interactive && hoveredIndex !== null && (
          <ChartTooltip
            visible
            x={tooltipPos.x}
            y={tooltipPos.y}
            label={data[hoveredIndex].label}
            items={[
              { label: leftLabel, value: formatValue(data[hoveredIndex].leftValue), color: lColor },
              { label: rightLabel, value: formatValue(data[hoveredIndex].rightValue), color: rColor },
            ]}
          />
        )}
      </div>
    </ChartContainer>
  );
};

export default BackToBackBarChart;
