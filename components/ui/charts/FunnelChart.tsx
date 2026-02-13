'use client';

import React, { useState, useCallback, useMemo, useRef } from 'react';
import { motion } from 'framer-motion';
import { cn } from '../../../lib/utils';
import { chartSizes, chartPaletteArray, chartMotion, type ChartSize, type ChartVariant } from './shared/chartTokens';
import { formatValue } from './shared/chartUtils';
import { ChartContainer } from './shared/ChartContainer';
import { ChartTooltip } from './shared/ChartTooltip';
import { ChartLegend } from './shared/ChartLegend';

export interface FunnelChartProps {
  data: Array<{ label: string; value: number; color?: string }>;
  className?: string;
  size?: ChartSize;
  variant?: ChartVariant;
  animated?: boolean;
  interactive?: boolean;
  showTooltip?: boolean;
  showLabels?: boolean;
  showLegend?: boolean;
  showPercentage?: boolean;
  colorScheme?: string[];
  onDataPointClick?: (item: any, index: number) => void;
  onDataPointHover?: (item: any, index: number | null) => void;
  title?: string;
  subtitle?: string;
}

export const FunnelChart: React.FC<FunnelChartProps> = ({
  data,
  className,
  size = 'md',
  variant = 'default',
  animated = true,
  interactive = true,
  showTooltip = true,
  showLabels = true,
  showLegend = false,
  showPercentage = true,
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

  const maxValue = useMemo(() => Math.max(...data.map((d) => d.value), 1), [data]);

  const stageCount = data.length;
  const chartWidth = width - padding * 2;
  const chartHeight = height - padding * 2;
  const stageGap = Math.max(2, chartHeight * 0.02);
  const stageHeight = (chartHeight - stageGap * (stageCount - 1)) / stageCount;
  const minWidthRatio = 0.25; // Minimum trapezoid width as ratio of max

  // Build trapezoid shapes: each stage narrows proportionally
  const stages = useMemo(() => {
    return data.map((item, i) => {
      const widthRatio = maxValue > 0 ? item.value / maxValue : 1;
      const nextWidthRatio =
        i < data.length - 1
          ? data[i + 1].value / maxValue
          : widthRatio * minWidthRatio;

      const topW = Math.max(chartWidth * widthRatio, chartWidth * 0.05);
      const bottomW = Math.max(chartWidth * Math.max(nextWidthRatio, minWidthRatio * widthRatio), chartWidth * 0.05);
      const y = padding + i * (stageHeight + stageGap);
      const centerX = width / 2;

      const conversionRate =
        i > 0 && data[i - 1].value > 0
          ? ((item.value / data[i - 1].value) * 100).toFixed(1)
          : '100.0';

      const overallRate =
        data[0].value > 0
          ? ((item.value / data[0].value) * 100).toFixed(1)
          : '100.0';

      // Trapezoid path: top-left, top-right, bottom-right, bottom-left
      const path = [
        `M ${centerX - topW / 2} ${y}`,
        `L ${centerX + topW / 2} ${y}`,
        `L ${centerX + bottomW / 2} ${y + stageHeight}`,
        `L ${centerX - bottomW / 2} ${y + stageHeight}`,
        'Z',
      ].join(' ');

      return {
        ...item,
        path,
        y,
        topW,
        bottomW,
        centerX,
        conversionRate,
        overallRate,
        color: getColor(item, i),
      };
    });
  }, [data, maxValue, chartWidth, stageHeight, stageGap, width, padding, getColor, minWidthRatio]);

  const handleStageHover = useCallback(
    (index: number | null, event?: React.MouseEvent) => {
      setHoveredIndex(index);
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

  const handleStageClick = useCallback(
    (index: number) => {
      onDataPointClick?.(data[index], index);
    },
    [data, onDataPointClick],
  );

  const legendItems = useMemo(
    () =>
      data.map((d, i) => ({
        label: d.label,
        color: getColor(d, i),
      })),
    [data, getColor],
  );

  const ariaLabel = title
    ? `${title} funnel chart with ${data.length} stages`
    : `Funnel chart with ${data.length} stages`;

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
            {stages.map((stage, i) => {
              const isHovered = hoveredIndex === i;
              const isDimmed = hoveredIndex !== null && !isHovered;

              return (
                <g key={i}>
                  <motion.path
                    d={stage.path}
                    fill={stage.color}
                    opacity={isDimmed ? 0.35 : 1}
                    rx={4}
                    variants={
                      animated
                        ? {
                            hidden: { opacity: 0, x: -30 },
                            visible: {
                              opacity: isDimmed ? 0.35 : 1,
                              x: 0,
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
                      onMouseEnter: (e: React.MouseEvent) => handleStageHover(i, e),
                      onMouseMove: (e: React.MouseEvent) => handleStageHover(i, e),
                      onMouseLeave: () => handleStageHover(null),
                      onClick: () => handleStageClick(i),
                      cursor: 'pointer',
                      role: 'button',
                      'aria-label': `${stage.label}: ${formatValue(stage.value)} (${stage.overallRate}%)`,
                      tabIndex: -1,
                    })}
                  />
                  {showLabels && (
                    <>
                      <text
                        x={stage.centerX}
                        y={stage.y + stageHeight / 2 - (showPercentage ? fontSize * 0.3 : 0)}
                        textAnchor="middle"
                        dominantBaseline="central"
                        fontSize={fontSize - 1}
                        fontWeight={600}
                        fill="white"
                        pointerEvents="none"
                        opacity={isDimmed ? 0.35 : 1}
                      >
                        {stage.label} — {formatValue(stage.value)}
                      </text>
                      {showPercentage && i > 0 && (
                        <text
                          x={stage.centerX}
                          y={stage.y + stageHeight / 2 + fontSize * 0.8}
                          textAnchor="middle"
                          dominantBaseline="central"
                          fontSize={fontSize - 3}
                          fill="rgba(255,255,255,0.75)"
                          pointerEvents="none"
                          opacity={isDimmed ? 0.35 : 1}
                        >
                          {stage.conversionRate}% from previous
                        </text>
                      )}
                    </>
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
            label={stages[hoveredIndex].label}
            value={`${formatValue(stages[hoveredIndex].value)} (${stages[hoveredIndex].overallRate}% of total)`}
            color={stages[hoveredIndex].color}
          />
        )}
      </div>

      {showLegend && <ChartLegend items={legendItems} />}
    </ChartContainer>
  );
};

export default FunnelChart;
