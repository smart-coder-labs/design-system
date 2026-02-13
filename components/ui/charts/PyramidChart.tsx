'use client';

import React, { useState, useCallback, useMemo, useRef } from 'react';
import { motion } from 'framer-motion';
import { cn } from '../../../lib/utils';
import { chartSizes, chartPaletteArray, chartMotion, type ChartSize, type ChartVariant } from './shared/chartTokens';
import { formatValue } from './shared/chartUtils';
import { ChartContainer } from './shared/ChartContainer';
import { ChartTooltip } from './shared/ChartTooltip';
import { ChartLegend } from './shared/ChartLegend';

export interface PyramidChartProps {
  data: Array<{ label: string; value: number; color?: string }>;
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

export const PyramidChart: React.FC<PyramidChartProps> = ({
  data,
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
  const [tooltipPos, setTooltipPos] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  const palette = colorScheme ?? chartPaletteArray;
  const { width, height, fontSize, padding } = chartSizes[size];

  const getColor = useCallback(
    (item: { color?: string }, index: number) =>
      item.color ?? palette[index % palette.length],
    [palette],
  );

  const totalValue = useMemo(() => Math.max(data.reduce((s, d) => s + d.value, 0), 1), [data]);

  // Build layers bottom-to-top: data[0] = top (smallest), data[last] = bottom (largest)
  // Sorted so largest is at the bottom for a proper pyramid shape
  const sortedData = useMemo(() => [...data].sort((a, b) => a.value - b.value), [data]);

  const chartWidth = width - padding * 2;
  const chartHeight = height - padding * 2;
  const layerGap = 2;

  const layers = useMemo(() => {
    const maxValue = Math.max(...sortedData.map((d) => d.value), 1);
    const totalLayerHeight = chartHeight - layerGap * (sortedData.length - 1);
    const layerHeight = totalLayerHeight / sortedData.length;
    const centerX = width / 2;

    return sortedData.map((item, i) => {
      const widthRatio = item.value / maxValue;
      const layerWidth = Math.max(chartWidth * 0.08, chartWidth * widthRatio);
      const y = padding + i * (layerHeight + layerGap);

      // For a pyramid: top layers are narrower, bottom layers wider
      // Current item top edge width
      const topWidthRatio = i === 0 ? 0.08 : sortedData[i - 1].value / maxValue;
      const topWidth = Math.max(chartWidth * 0.08, chartWidth * topWidthRatio);

      // Trapezoid path
      const path = [
        `M ${centerX - topWidth / 2} ${y}`,
        `L ${centerX + topWidth / 2} ${y}`,
        `L ${centerX + layerWidth / 2} ${y + layerHeight}`,
        `L ${centerX - layerWidth / 2} ${y + layerHeight}`,
        'Z',
      ].join(' ');

      return {
        ...item,
        originalIndex: data.indexOf(item),
        path,
        y,
        layerHeight,
        centerX,
        layerWidth,
        percentage: (item.value / totalValue) * 100,
      };
    });
  }, [sortedData, data, chartWidth, chartHeight, width, padding, totalValue, layerGap]);

  const handleLayerHover = useCallback(
    (index: number | null, event?: React.MouseEvent) => {
      setHoveredIndex(index);
      if (index !== null && event && containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setTooltipPos({
          x: event.clientX - rect.left,
          y: event.clientY - rect.top,
        });
      }
      onDataPointHover?.(index !== null ? sortedData[index] : null, index);
    },
    [sortedData, onDataPointHover],
  );

  const handleLayerClick = useCallback(
    (index: number) => {
      onDataPointClick?.(sortedData[index], index);
    },
    [sortedData, onDataPointClick],
  );

  const legendItems = useMemo(
    () =>
      sortedData.map((d, i) => ({
        label: d.label,
        color: getColor(d, i),
      })),
    [sortedData, getColor],
  );

  const ariaLabel = title
    ? `${title} pyramid chart with ${data.length} layers`
    : `Pyramid chart with ${data.length} layers`;

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

          <motion.g
            variants={
              animated
                ? { hidden: {}, visible: { transition: { staggerChildren: 0.08 } } }
                : undefined
            }
            initial={animated ? 'hidden' : undefined}
            animate={animated ? 'visible' : undefined}
          >
            {layers.map((layer, i) => {
              const isHovered = hoveredIndex === i;
              const isDimmed = hoveredIndex !== null && !isHovered;
              const color = getColor(layer, i);

              return (
                <g key={i}>
                  <motion.path
                    d={layer.path}
                    fill={color}
                    opacity={isDimmed ? 0.35 : 1}
                    variants={
                      animated
                        ? {
                            hidden: { opacity: 0, y: 20 },
                            visible: {
                              opacity: isDimmed ? 0.35 : 1,
                              y: 0,
                              transition: {
                                type: 'spring',
                                ...chartMotion.spring,
                              },
                            },
                          }
                        : undefined
                    }
                    {...(!animated && { opacity: isDimmed ? 0.35 : 1 })}
                    {...(interactive && {
                      onMouseEnter: (e: React.MouseEvent) => handleLayerHover(i, e),
                      onMouseMove: (e: React.MouseEvent) => handleLayerHover(i, e),
                      onMouseLeave: () => handleLayerHover(null),
                      onClick: () => handleLayerClick(i),
                      cursor: 'pointer',
                      role: 'button',
                      'aria-label': `${layer.label}: ${formatValue(layer.value)} (${layer.percentage.toFixed(1)}%)`,
                      tabIndex: -1,
                    })}
                  />
                  {showLabels && (
                    <text
                      x={layer.centerX}
                      y={layer.y + layer.layerHeight / 2}
                      textAnchor="middle"
                      dominantBaseline="central"
                      fontSize={fontSize - 1}
                      fontWeight={600}
                      fill="white"
                      pointerEvents="none"
                      opacity={isDimmed ? 0.35 : 1}
                    >
                      {layer.label} — {formatValue(layer.value)}
                    </text>
                  )}
                </g>
              );
            })}
          </motion.g>
        </svg>

        {showTooltip && interactive && hoveredIndex !== null && (
          <ChartTooltip
            visible
            x={tooltipPos.x}
            y={tooltipPos.y}
            label={layers[hoveredIndex].label}
            value={`${formatValue(layers[hoveredIndex].value)} (${layers[hoveredIndex].percentage.toFixed(1)}%)`}
            color={getColor(layers[hoveredIndex], hoveredIndex)}
          />
        )}
      </div>

      {showLabels && <ChartLegend items={legendItems} />}
    </ChartContainer>
  );
};

export default PyramidChart;
