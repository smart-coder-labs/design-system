'use client';

import React, { useState, useCallback, useMemo, useRef } from 'react';
import { motion } from 'framer-motion';
import { cn } from '../../../lib/utils';
import { chartSizes, chartPaletteArray, chartMotion, type ChartSize, type ChartVariant } from './shared/chartTokens';
import { linearScale, formatValue } from './shared/chartUtils';
import { ChartContainer } from './shared/ChartContainer';
import { ChartTooltip } from './shared/ChartTooltip';
import { ChartLegend } from './shared/ChartLegend';

export interface ArcNode {
  id: string;
  label: string;
  color?: string;
}

export interface ArcLink {
  source: string;
  target: string;
  value?: number;
}

export interface ArcDiagramProps {
  data: {
    nodes: ArcNode[];
    links: ArcLink[];
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

export const ArcDiagram: React.FC<ArcDiagramProps> = ({
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

  const margin = { top: padding, right: padding + 20, bottom: padding + 20, left: padding + 20 };
  const chartWidth = width - margin.left - margin.right;
  const baselineY = height - margin.bottom;
  const nodeRadius = Math.max(4, Math.min(8, chartWidth / (data.nodes.length * 4)));

  const nodePositions = useMemo(() => {
    const { nodes } = data;
    const gap = chartWidth / (nodes.length - 1 || 1);

    return nodes.map((node, i) => ({
      ...node,
      x: margin.left + (nodes.length > 1 ? i * gap : chartWidth / 2),
      y: baselineY,
      color: node.color ?? palette[i % palette.length],
    }));
  }, [data, chartWidth, margin.left, baselineY, palette]);

  const nodeMap = useMemo(() => {
    const map = new Map<string, typeof nodePositions[0]>();
    nodePositions.forEach((n) => map.set(n.id, n));
    return map;
  }, [nodePositions]);

  const maxValue = useMemo(() => {
    const values = data.links.map((l) => l.value ?? 1);
    return Math.max(...values, 1);
  }, [data.links]);

  const handleLinkHover = useCallback(
    (index: number | null, event?: React.MouseEvent) => {
      setHoveredIndex(index);
      if (index !== null && event && containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setTooltipPos({ x: event.clientX - rect.left, y: event.clientY - rect.top });
      }
      onDataPointHover?.(index !== null ? data.links[index] : null, index);
    },
    [data.links, onDataPointHover],
  );

  const handleLinkClick = useCallback(
    (index: number) => { onDataPointClick?.(data.links[index], index); },
    [data.links, onDataPointClick],
  );

  const containerVariants = animated ? { hidden: {}, visible: { transition: { staggerChildren: 0.05 } } } : undefined;
  const arcVariants = animated
    ? { hidden: { pathLength: 0, opacity: 0 }, visible: { pathLength: 1, opacity: 0.6, transition: { duration: chartMotion.duration.slow, ease: chartMotion.easing } } }
    : undefined;
  const nodeVariants = animated
    ? { hidden: { scale: 0, opacity: 0 }, visible: { scale: 1, opacity: 1, transition: { type: 'spring', ...chartMotion.spring } } }
    : undefined;

  const legendItems = useMemo(
    () => nodePositions.map((n) => ({ label: n.label, color: n.color })),
    [nodePositions],
  );

  const ariaLabel = title
    ? `${title} arc diagram with ${data.nodes.length} nodes and ${data.links.length} links`
    : `Arc diagram with ${data.nodes.length} nodes and ${data.links.length} links`;

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

          {/* Arcs */}
          <motion.g
            variants={containerVariants}
            initial={animated ? 'hidden' : undefined}
            animate={animated ? 'visible' : undefined}
          >
            {data.links.map((link, i) => {
              const src = nodeMap.get(link.source);
              const tgt = nodeMap.get(link.target);
              if (!src || !tgt) return null;

              const x1 = Math.min(src.x, tgt.x);
              const x2 = Math.max(src.x, tgt.x);
              const midX = (x1 + x2) / 2;
              const radius = (x2 - x1) / 2;
              const strokeWidth = Math.max(1.5, linearScale(link.value ?? 1, 0, maxValue, 1.5, 5));
              const isHovered = hoveredIndex === i;

              const path = `M${x1},${baselineY} A${radius},${radius} 0 0 1 ${x2},${baselineY}`;

              return (
                <motion.path
                  key={`arc-${i}`}
                  d={path}
                  fill="none"
                  stroke={src.color}
                  strokeWidth={strokeWidth}
                  opacity={hoveredIndex !== null && !isHovered ? 0.15 : 0.6}
                  variants={arcVariants}
                  {...(!animated && { opacity: hoveredIndex !== null && !isHovered ? 0.15 : 0.6 })}
                  {...(interactive && {
                    onMouseEnter: (e: React.MouseEvent) => handleLinkHover(i, e),
                    onMouseMove: (e: React.MouseEvent) => handleLinkHover(i, e),
                    onMouseLeave: () => handleLinkHover(null),
                    onClick: () => handleLinkClick(i),
                    cursor: 'pointer',
                  })}
                />
              );
            })}
          </motion.g>

          {/* Nodes */}
          <motion.g
            variants={containerVariants}
            initial={animated ? 'hidden' : undefined}
            animate={animated ? 'visible' : undefined}
          >
            {nodePositions.map((node, i) => (
              <motion.circle
                key={`node-${node.id}`}
                cx={node.x}
                cy={node.y}
                r={nodeRadius}
                fill={node.color}
                stroke="var(--color-bg-primary)"
                strokeWidth={2}
                variants={nodeVariants}
                {...(!animated && { opacity: 1 })}
                style={{ transformOrigin: `${node.x}px ${node.y}px` }}
              />
            ))}
          </motion.g>

          {/* Labels */}
          {showLabels && nodePositions.map((node) => (
            <text
              key={`label-${node.id}`}
              x={node.x}
              y={node.y + nodeRadius + fontSize + 2}
              textAnchor="middle"
              fontSize={fontSize - 2}
              fill="var(--color-text-secondary)"
              className="select-none"
            >
              {node.label}
            </text>
          ))}
        </svg>

        {showTooltip && interactive && hoveredIndex !== null && (
          <ChartTooltip
            visible
            x={tooltipPos.x}
            y={tooltipPos.y}
            label={`${data.links[hoveredIndex].source} → ${data.links[hoveredIndex].target}`}
            value={data.links[hoveredIndex].value !== undefined ? formatValue(data.links[hoveredIndex].value!) : undefined}
            color={nodeMap.get(data.links[hoveredIndex].source)?.color}
          />
        )}
      </div>

      {showLegend && <ChartLegend items={legendItems} />}
    </ChartContainer>
  );
};

export default ArcDiagram;
