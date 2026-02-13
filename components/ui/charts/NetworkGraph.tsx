'use client';

import React, { useState, useCallback, useMemo, useRef } from 'react';
import { motion } from 'framer-motion';
import { cn } from '../../../lib/utils';
import { chartSizes, chartPaletteArray, chartMotion, type ChartSize, type ChartVariant } from './shared/chartTokens';
import { linearScale, formatValue } from './shared/chartUtils';
import { ChartContainer } from './shared/ChartContainer';
import { ChartTooltip } from './shared/ChartTooltip';
import { ChartLegend } from './shared/ChartLegend';

export interface NetworkNode {
  id: string;
  label: string;
  x?: number;
  y?: number;
  color?: string;
  size?: number;
}

export interface NetworkEdge {
  source: string;
  target: string;
  weight?: number;
}

export interface NetworkGraphProps {
  data: {
    nodes: NetworkNode[];
    edges: NetworkEdge[];
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

export const NetworkGraph: React.FC<NetworkGraphProps> = ({
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
  const layoutRadius = Math.min(width, height) / 2 - padding - 30;

  const positionedNodes = useMemo(() => {
    const { nodes } = data;
    const hasPositions = nodes.some((n) => n.x !== undefined && n.y !== undefined);

    if (hasPositions) {
      const xs = nodes.filter((n) => n.x !== undefined).map((n) => n.x!);
      const ys = nodes.filter((n) => n.y !== undefined).map((n) => n.y!);
      const minX = Math.min(...xs);
      const maxX = Math.max(...xs);
      const minY = Math.min(...ys);
      const maxY = Math.max(...ys);

      return nodes.map((node, i) => ({
        ...node,
        px: linearScale(node.x ?? 0, minX, maxX, padding + 30, width - padding - 30),
        py: linearScale(node.y ?? 0, minY, maxY, padding + 30, height - padding - 30),
        color: node.color ?? palette[i % palette.length],
        nodeSize: node.size ?? 6,
      }));
    }

    // Circular layout
    return nodes.map((node, i) => {
      const angle = (i / nodes.length) * 2 * Math.PI - Math.PI / 2;
      return {
        ...node,
        px: cx + layoutRadius * Math.cos(angle),
        py: cy + layoutRadius * Math.sin(angle),
        color: node.color ?? palette[i % palette.length],
        nodeSize: node.size ?? 6,
      };
    });
  }, [data, width, height, padding, cx, cy, layoutRadius, palette]);

  const nodeMap = useMemo(() => {
    const map = new Map<string, typeof positionedNodes[0]>();
    positionedNodes.forEach((n) => map.set(n.id, n));
    return map;
  }, [positionedNodes]);

  const handleNodeHover = useCallback(
    (index: number | null, event?: React.MouseEvent) => {
      setHoveredIndex(index);
      if (index !== null && event && containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setTooltipPos({ x: event.clientX - rect.left, y: event.clientY - rect.top });
      }
      onDataPointHover?.(index !== null ? data.nodes[index] : null, index);
    },
    [data.nodes, onDataPointHover],
  );

  const handleNodeClick = useCallback(
    (index: number) => { onDataPointClick?.(data.nodes[index], index); },
    [data.nodes, onDataPointClick],
  );

  const containerVariants = animated ? { hidden: {}, visible: { transition: { staggerChildren: 0.04 } } } : undefined;
  const edgeVariants = animated
    ? { hidden: { pathLength: 0, opacity: 0 }, visible: { pathLength: 1, opacity: 0.4, transition: { duration: chartMotion.duration.slow, ease: chartMotion.easing } } }
    : undefined;
  const nodeVariants = animated
    ? { hidden: { scale: 0, opacity: 0 }, visible: { scale: 1, opacity: 1, transition: { type: 'spring', ...chartMotion.spring } } }
    : undefined;

  const legendItems = useMemo(
    () => positionedNodes.map((n) => ({ label: n.label, color: n.color })),
    [positionedNodes],
  );

  const ariaLabel = title
    ? `${title} network graph with ${data.nodes.length} nodes and ${data.edges.length} edges`
    : `Network graph with ${data.nodes.length} nodes and ${data.edges.length} edges`;

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

          {/* Edges */}
          <motion.g
            variants={containerVariants}
            initial={animated ? 'hidden' : undefined}
            animate={animated ? 'visible' : undefined}
          >
            {data.edges.map((edge, i) => {
              const src = nodeMap.get(edge.source);
              const tgt = nodeMap.get(edge.target);
              if (!src || !tgt) return null;
              const strokeWidth = edge.weight ? Math.max(1, Math.min(4, edge.weight)) : 1.5;

              return (
                <motion.line
                  key={`edge-${i}`}
                  x1={src.px}
                  y1={src.py}
                  x2={tgt.px}
                  y2={tgt.py}
                  stroke="var(--color-border-secondary)"
                  strokeWidth={strokeWidth}
                  opacity={0.4}
                  variants={edgeVariants}
                  {...(!animated && { opacity: 0.4 })}
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
            {positionedNodes.map((node, i) => {
              const isHovered = hoveredIndex === i;
              return (
                <motion.circle
                  key={`node-${node.id}`}
                  cx={node.px}
                  cy={node.py}
                  r={isHovered ? node.nodeSize * 1.4 : node.nodeSize}
                  fill={node.color}
                  stroke="var(--color-bg-primary)"
                  strokeWidth={2}
                  variants={nodeVariants}
                  {...(!animated && { opacity: 1 })}
                  style={{ transformOrigin: `${node.px}px ${node.py}px` }}
                  {...(interactive && {
                    onMouseEnter: (e: React.MouseEvent) => handleNodeHover(i, e),
                    onMouseMove: (e: React.MouseEvent) => handleNodeHover(i, e),
                    onMouseLeave: () => handleNodeHover(null),
                    onClick: () => handleNodeClick(i),
                    cursor: 'pointer',
                    role: 'button',
                    'aria-label': node.label,
                    tabIndex: -1,
                  })}
                />
              );
            })}
          </motion.g>

          {/* Labels */}
          {showLabels && positionedNodes.map((node) => (
            <text
              key={`label-${node.id}`}
              x={node.px}
              y={node.py + node.nodeSize + fontSize}
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
            label={data.nodes[hoveredIndex].label}
            value={`${data.edges.filter((e) => e.source === data.nodes[hoveredIndex].id || e.target === data.nodes[hoveredIndex].id).length} connections`}
            color={positionedNodes[hoveredIndex]?.color}
          />
        )}
      </div>

      {showLegend && <ChartLegend items={legendItems} />}
    </ChartContainer>
  );
};

export default NetworkGraph;
