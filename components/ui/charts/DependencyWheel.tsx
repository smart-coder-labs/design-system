'use client';

import React, { useState, useCallback, useMemo, useRef } from 'react';
import { motion } from 'framer-motion';
import { cn } from '../../../lib/utils';
import { chartSizes, chartPaletteArray, chartMotion, type ChartSize, type ChartVariant } from './shared/chartTokens';
import { linearScale, formatValue } from './shared/chartUtils';
import { ChartContainer } from './shared/ChartContainer';
import { ChartTooltip } from './shared/ChartTooltip';
import { ChartLegend } from './shared/ChartLegend';

export interface DependencyWheelProps {
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

export const DependencyWheel: React.FC<DependencyWheelProps> = ({
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

  const cxCenter = width / 2;
  const cyCenter = height / 2;
  const outerR = Math.min(width, height) / 2 - padding - 20;
  const innerR = outerR * 0.82;
  const gapAngle = 0.02;

  const layout = useMemo(() => {
    const { labels, matrix } = data;
    const n = labels.length;
    const total = matrix.reduce((s, row) => s + row.reduce((rs, v) => rs + v, 0), 0);
    if (total === 0) return { arcs: [], chords: [] };

    const groupTotals = matrix.map((row) => row.reduce((s, v) => s + v, 0));
    const usableAngle = 2 * Math.PI - gapAngle * n;

    const arcs: Array<{
      index: number; label: string; color: string;
      startAngle: number; endAngle: number; total: number;
    }> = [];
    let angle = 0;

    groupTotals.forEach((gt, i) => {
      const a = (gt / total) * usableAngle;
      arcs.push({
        index: i, label: labels[i], color: palette[i % palette.length],
        startAngle: angle, endAngle: angle + a, total: gt,
      });
      angle += a + gapAngle;
    });

    const chords: Array<{
      srcIdx: number; tgtIdx: number;
      srcStart: number; srcEnd: number;
      tgtStart: number; tgtEnd: number;
      value: number; color: string; chordIndex: number;
    }> = [];
    const offsets = arcs.map((a) => a.startAngle);
    let ci = 0;

    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
        if (i === j || matrix[i][j] === 0) continue;
        const srcA = (matrix[i][j] / total) * usableAngle;
        const tgtA = (matrix[i][j] / total) * usableAngle;

        chords.push({
          srcIdx: i, tgtIdx: j,
          srcStart: offsets[i], srcEnd: offsets[i] + srcA,
          tgtStart: offsets[j], tgtEnd: offsets[j] + tgtA,
          value: matrix[i][j], color: palette[i % palette.length],
          chordIndex: ci++,
        });
        offsets[i] += srcA;
        offsets[j] += tgtA;
      }
    }

    return { arcs, chords };
  }, [data, palette, gapAngle]);

  const toXY = useCallback((a: number, r: number) => ({
    x: cxCenter + r * Math.cos(a - Math.PI / 2),
    y: cyCenter + r * Math.sin(a - Math.PI / 2),
  }), [cxCenter, cyCenter]);

  const describeArcPath = useCallback((sa: number, ea: number, r: number) => {
    const s = toXY(sa, r);
    const e = toXY(ea, r);
    const la = ea - sa > Math.PI ? 1 : 0;
    return `M${s.x},${s.y} A${r},${r} 0 ${la} 1 ${e.x},${e.y}`;
  }, [toXY]);

  const describeChordPath = useCallback((chord: typeof layout.chords[0]) => {
    const s0 = toXY(chord.srcStart, innerR);
    const s1 = toXY(chord.srcEnd, innerR);
    const t0 = toXY(chord.tgtStart, innerR);
    const t1 = toXY(chord.tgtEnd, innerR);
    const sla = chord.srcEnd - chord.srcStart > Math.PI ? 1 : 0;
    const tla = chord.tgtEnd - chord.tgtStart > Math.PI ? 1 : 0;

    return `M${s0.x},${s0.y} A${innerR},${innerR} 0 ${sla} 1 ${s1.x},${s1.y} Q${cxCenter},${cyCenter} ${t0.x},${t0.y} A${innerR},${innerR} 0 ${tla} 1 ${t1.x},${t1.y} Q${cxCenter},${cyCenter} ${s0.x},${s0.y} Z`;
  }, [toXY, innerR, cxCenter, cyCenter]);

  const handleHover = useCallback(
    (index: number | null, event?: React.MouseEvent) => {
      setHoveredIndex(index);
      if (index !== null && event && containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setTooltipPos({ x: event.clientX - rect.left, y: event.clientY - rect.top });
      }
      onDataPointHover?.(index !== null ? layout.chords[index] : null, index);
    },
    [layout.chords, onDataPointHover],
  );

  const handleClick = useCallback(
    (index: number) => { onDataPointClick?.(layout.chords[index], index); },
    [layout.chords, onDataPointClick],
  );

  const containerVariants = animated ? { hidden: {}, visible: { transition: { staggerChildren: 0.03 } } } : undefined;
  const arcPathVariants = animated
    ? { hidden: { opacity: 0, pathLength: 0 }, visible: { opacity: 1, pathLength: 1, transition: { duration: chartMotion.duration.slow, ease: chartMotion.easing } } }
    : undefined;
  const chordVariants = animated
    ? { hidden: { opacity: 0, scale: 0 }, visible: { opacity: 0.5, scale: 1, transition: { type: 'spring', ...chartMotion.spring } } }
    : undefined;

  const legendItems = useMemo(
    () => layout.arcs.map((a) => ({ label: a.label, color: a.color })),
    [layout.arcs],
  );

  const ariaLabel = title
    ? `${title} dependency wheel with ${data.labels.length} items`
    : `Dependency wheel with ${data.labels.length} items`;

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

          {/* Chords */}
          <motion.g
            variants={containerVariants}
            initial={animated ? 'hidden' : undefined}
            animate={animated ? 'visible' : undefined}
            style={{ transformOrigin: `${cxCenter}px ${cyCenter}px` }}
          >
            {layout.chords.map((chord) => {
              const isHovered = hoveredIndex === chord.chordIndex;
              return (
                <motion.path
                  key={`chord-${chord.chordIndex}`}
                  d={describeChordPath(chord)}
                  fill={chord.color}
                  opacity={hoveredIndex !== null && !isHovered ? 0.08 : 0.5}
                  variants={chordVariants}
                  {...(!animated && { opacity: hoveredIndex !== null && !isHovered ? 0.08 : 0.5 })}
                  style={{ transformOrigin: `${cxCenter}px ${cyCenter}px` }}
                  {...(interactive && {
                    onMouseEnter: (e: React.MouseEvent) => handleHover(chord.chordIndex, e),
                    onMouseMove: (e: React.MouseEvent) => handleHover(chord.chordIndex, e),
                    onMouseLeave: () => handleHover(null),
                    onClick: () => handleClick(chord.chordIndex),
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
            {layout.arcs.map((arc) => (
              <motion.path
                key={`arc-${arc.index}`}
                d={describeArcPath(arc.startAngle, arc.endAngle, outerR)}
                fill="none"
                stroke={arc.color}
                strokeWidth={outerR - innerR}
                strokeLinecap="butt"
                variants={arcPathVariants}
                {...(!animated && { opacity: 1 })}
              />
            ))}
          </motion.g>

          {/* Labels */}
          {showLabels && layout.arcs.map((arc) => {
            const mid = (arc.startAngle + arc.endAngle) / 2;
            const lr = outerR + 12;
            const pos = toXY(mid, lr);
            const deg = (mid * 180) / Math.PI - 90;
            const flip = deg > 90 && deg < 270;

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
                transform={`rotate(${flip ? deg + 180 : deg}, ${pos.x}, ${pos.y})`}
              >
                {arc.label}
              </text>
            );
          })}
        </svg>

        {showTooltip && interactive && hoveredIndex !== null && (() => {
          const chord = layout.chords[hoveredIndex];
          if (!chord) return null;
          return (
            <ChartTooltip
              visible
              x={tooltipPos.x}
              y={tooltipPos.y}
              label={`${data.labels[chord.srcIdx]} → ${data.labels[chord.tgtIdx]}`}
              value={formatValue(chord.value)}
              color={chord.color}
            />
          );
        })()}
      </div>

      {showLegend && <ChartLegend items={legendItems} />}
    </ChartContainer>
  );
};

export default DependencyWheel;
