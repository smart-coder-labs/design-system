'use client';

import React, { useState, useCallback, useMemo, useRef } from 'react';
import { motion } from 'framer-motion';
import { cn } from '../../../lib/utils';
import { chartSizes, chartPaletteArray, chartMotion, type ChartSize, type ChartVariant } from './shared/chartTokens';
import { linearScale, formatValue } from './shared/chartUtils';
import { ChartContainer } from './shared/ChartContainer';
import { ChartTooltip } from './shared/ChartTooltip';
import { ChartLegend } from './shared/ChartLegend';

export interface ChordDiagramProps {
  data: {
    labels: string[];
    matrix: number[][];
  };
  className?: string;
  size?: ChartSize;
  variant?: ChartVariant;
  animated?: boolean;
  interactive?: boolean;
  showLegend?: boolean;
  showTooltip?: boolean;
  showLabels?: boolean;
  colorScheme?: string[];
  onDataPointClick?: (item: any, index: number) => void;
  onDataPointHover?: (item: any, index: number | null) => void;
  title?: string;
  subtitle?: string;
}

export const ChordDiagram: React.FC<ChordDiagramProps> = ({
  data,
  className,
  size = 'md',
  variant = 'default',
  animated = true,
  interactive = true,
  showLegend = false,
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

  const cx = width / 2;
  const cy = height / 2;
  const outerRadius = Math.min(width, height) / 2 - padding - 20;
  const innerRadius = outerRadius * 0.85;
  const arcGap = 0.02; // radians

  const layout = useMemo(() => {
    const { labels, matrix } = data;
    const n = labels.length;
    const total = matrix.reduce((s, row) => s + row.reduce((rs, v) => rs + v, 0), 0);
    if (total === 0) return { arcs: [], ribbons: [] };

    // Group totals
    const groupTotals = matrix.map((row) => row.reduce((s, v) => s + v, 0));
    const totalAngle = 2 * Math.PI - arcGap * n;

    // Arc angles
    const arcs: Array<{
      index: number; label: string; color: string;
      startAngle: number; endAngle: number; total: number;
    }> = [];
    let currentAngle = 0;

    groupTotals.forEach((gt, i) => {
      const angle = (gt / total) * totalAngle;
      arcs.push({
        index: i,
        label: labels[i],
        color: palette[i % palette.length],
        startAngle: currentAngle,
        endAngle: currentAngle + angle,
        total: gt,
      });
      currentAngle += angle + arcGap;
    });

    // Ribbons
    const ribbons: Array<{
      sourceIndex: number; targetIndex: number;
      sourceStart: number; sourceEnd: number;
      targetStart: number; targetEnd: number;
      value: number; color: string; ribbonIndex: number;
    }> = [];
    const groupOffsets = arcs.map((a) => a.startAngle);
    let ribbonIdx = 0;

    for (let i = 0; i < n; i++) {
      for (let j = i; j < n; j++) {
        const val = matrix[i][j] + (i !== j ? matrix[j][i] : 0);
        if (val === 0) continue;

        const srcAngle = (matrix[i][j] / total) * totalAngle;
        const tgtAngle = (i !== j ? matrix[j][i] : matrix[i][j]) / total * totalAngle;

        ribbons.push({
          sourceIndex: i,
          targetIndex: j,
          sourceStart: groupOffsets[i],
          sourceEnd: groupOffsets[i] + srcAngle,
          targetStart: groupOffsets[j] + (i === j ? srcAngle : 0),
          targetEnd: groupOffsets[j] + (i === j ? srcAngle : 0) + tgtAngle,
          value: val,
          color: palette[i % palette.length],
          ribbonIndex: ribbonIdx++,
        });

        groupOffsets[i] += srcAngle;
        if (i !== j) groupOffsets[j] += tgtAngle;
      }
    }

    return { arcs, ribbons };
  }, [data, palette, arcGap]);

  const polarToXY = useCallback((angle: number, r: number) => ({
    x: cx + r * Math.cos(angle - Math.PI / 2),
    y: cy + r * Math.sin(angle - Math.PI / 2),
  }), [cx, cy]);

  const describeArcPath = useCallback((startAngle: number, endAngle: number, r: number) => {
    const start = polarToXY(startAngle, r);
    const end = polarToXY(endAngle, r);
    const largeArc = endAngle - startAngle > Math.PI ? 1 : 0;
    return `M${start.x},${start.y} A${r},${r} 0 ${largeArc} 1 ${end.x},${end.y}`;
  }, [polarToXY]);

  const describeRibbonPath = useCallback((ribbon: typeof layout.ribbons[0]) => {
    const s0 = polarToXY(ribbon.sourceStart, innerRadius);
    const s1 = polarToXY(ribbon.sourceEnd, innerRadius);
    const t0 = polarToXY(ribbon.targetStart, innerRadius);
    const t1 = polarToXY(ribbon.targetEnd, innerRadius);
    const srcLargeArc = ribbon.sourceEnd - ribbon.sourceStart > Math.PI ? 1 : 0;
    const tgtLargeArc = ribbon.targetEnd - ribbon.targetStart > Math.PI ? 1 : 0;

    return `M${s0.x},${s0.y} A${innerRadius},${innerRadius} 0 ${srcLargeArc} 1 ${s1.x},${s1.y} Q${cx},${cy} ${t0.x},${t0.y} A${innerRadius},${innerRadius} 0 ${tgtLargeArc} 1 ${t1.x},${t1.y} Q${cx},${cy} ${s0.x},${s0.y} Z`;
  }, [polarToXY, innerRadius, cx, cy]);

  const handleHover = useCallback(
    (index: number | null, event?: React.MouseEvent) => {
      setHoveredIndex(index);
      if (index !== null && event && containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setTooltipPos({ x: event.clientX - rect.left, y: event.clientY - rect.top });
      }
      onDataPointHover?.(index !== null ? layout.ribbons[index] : null, index);
    },
    [layout.ribbons, onDataPointHover],
  );

  const handleClick = useCallback(
    (index: number) => { onDataPointClick?.(layout.ribbons[index], index); },
    [layout.ribbons, onDataPointClick],
  );

  const containerVariants = animated ? { hidden: {}, visible: { transition: { staggerChildren: 0.03 } } } : undefined;
  const arcVariants = animated
    ? { hidden: { opacity: 0, pathLength: 0 }, visible: { opacity: 1, pathLength: 1, transition: { duration: chartMotion.duration.slow, ease: chartMotion.easing } } }
    : undefined;
  const ribbonVariants = animated
    ? { hidden: { opacity: 0, scale: 0 }, visible: { opacity: 0.6, scale: 1, transition: { type: 'spring', ...chartMotion.spring } } }
    : undefined;

  const legendItems = useMemo(
    () => layout.arcs.map((a) => ({ label: a.label, color: a.color })),
    [layout.arcs],
  );

  const ariaLabel = title
    ? `${title} chord diagram with ${data.labels.length} groups`
    : `Chord diagram with ${data.labels.length} groups`;

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

          {/* Ribbons */}
          <motion.g
            variants={containerVariants}
            initial={animated ? 'hidden' : undefined}
            animate={animated ? 'visible' : undefined}
            style={{ transformOrigin: `${cx}px ${cy}px` }}
          >
            {layout.ribbons.map((ribbon) => {
              const isHovered = hoveredIndex === ribbon.ribbonIndex;
              return (
                <motion.path
                  key={`ribbon-${ribbon.ribbonIndex}`}
                  d={describeRibbonPath(ribbon)}
                  fill={ribbon.color}
                  opacity={hoveredIndex !== null && !isHovered ? 0.1 : 0.6}
                  variants={ribbonVariants}
                  {...(!animated && { opacity: hoveredIndex !== null && !isHovered ? 0.1 : 0.6 })}
                  style={{ transformOrigin: `${cx}px ${cy}px` }}
                  {...(interactive && {
                    onMouseEnter: (e: React.MouseEvent) => handleHover(ribbon.ribbonIndex, e),
                    onMouseMove: (e: React.MouseEvent) => handleHover(ribbon.ribbonIndex, e),
                    onMouseLeave: () => handleHover(null),
                    onClick: () => handleClick(ribbon.ribbonIndex),
                    cursor: 'pointer',
                  })}
                />
              );
            })}
          </motion.g>

          {/* Arcs */}
          <motion.g
            variants={containerVariants}
            initial={animated ? 'hidden' : undefined}
            animate={animated ? 'visible' : undefined}
          >
            {layout.arcs.map((arc) => {
              const path = describeArcPath(arc.startAngle, arc.endAngle, outerRadius);
              return (
                <motion.path
                  key={`arc-${arc.index}`}
                  d={path}
                  fill="none"
                  stroke={arc.color}
                  strokeWidth={outerRadius - innerRadius}
                  strokeLinecap="butt"
                  variants={arcVariants}
                  {...(!animated && { opacity: 1 })}
                />
              );
            })}
          </motion.g>

          {/* Labels */}
          {showLabels && layout.arcs.map((arc) => {
            const midAngle = (arc.startAngle + arc.endAngle) / 2;
            const labelR = outerRadius + 12;
            const pos = polarToXY(midAngle, labelR);
            const angleDeg = (midAngle * 180) / Math.PI - 90;
            const flip = angleDeg > 90 && angleDeg < 270;

            return (
              <text
                key={`label-${arc.index}`}
                x={pos.x}
                y={pos.y}
                textAnchor={flip ? 'end' : 'start'}
                dominantBaseline="central"
                fontSize={fontSize - 2}
                fill="var(--color-text-secondary)"
                className="select-none"
                transform={`rotate(${flip ? angleDeg + 180 : angleDeg}, ${pos.x}, ${pos.y})`}
              >
                {arc.label}
              </text>
            );
          })}
        </svg>

        {showTooltip && interactive && hoveredIndex !== null && (() => {
          const ribbon = layout.ribbons[hoveredIndex];
          if (!ribbon) return null;
          return (
            <ChartTooltip
              visible
              x={tooltipPos.x}
              y={tooltipPos.y}
              label={`${data.labels[ribbon.sourceIndex]} ↔ ${data.labels[ribbon.targetIndex]}`}
              value={formatValue(ribbon.value)}
              color={ribbon.color}
            />
          );
        })()}
      </div>

      {showLegend && <ChartLegend items={legendItems} />}
    </ChartContainer>
  );
};

export default ChordDiagram;
