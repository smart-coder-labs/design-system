'use client';

import React, { useState, useCallback, useMemo, useRef } from 'react';
import { motion } from 'framer-motion';
import { cn } from '../../../lib/utils';
import { chartSizes, chartPaletteArray, chartMotion, type ChartSize, type ChartVariant } from './shared/chartTokens';
import { linearScale, formatValue } from './shared/chartUtils';
import { ChartContainer } from './shared/ChartContainer';
import { ChartTooltip } from './shared/ChartTooltip';
import { ChartLegend } from './shared/ChartLegend';

export interface AlluvialNode {
  id: string;
  label: string;
  color?: string;
}

export interface AlluvialLink {
  source: string;
  target: string;
  value: number;
}

export interface AlluvialDiagramProps {
  data: {
    nodes: AlluvialNode[];
    links: AlluvialLink[];
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

export const AlluvialDiagram: React.FC<AlluvialDiagramProps> = ({
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

  const margin = { top: padding, right: padding + 40, bottom: padding, left: padding + 40 };
  const chartWidth = width - margin.left - margin.right;
  const chartHeight = height - margin.top - margin.bottom;

  const layout = useMemo(() => {
    const { nodes, links } = data;

    // Assign columns via BFS from source nodes
    const outgoing = new Map<string, string[]>();
    nodes.forEach((n) => outgoing.set(n.id, []));
    links.forEach((l) => outgoing.get(l.source)?.push(l.target));

    const columnMap = new Map<string, number>();
    const sources = new Set(nodes.map((n) => n.id));
    links.forEach((l) => sources.delete(l.target));

    const queue: string[] = [];
    sources.forEach((s) => { columnMap.set(s, 0); queue.push(s); });
    if (queue.length === 0 && nodes.length > 0) { columnMap.set(nodes[0].id, 0); queue.push(nodes[0].id); }

    while (queue.length > 0) {
      const id = queue.shift()!;
      const col = columnMap.get(id)!;
      (outgoing.get(id) ?? []).forEach((tid) => {
        const existing = columnMap.get(tid);
        if (existing === undefined || col + 1 > existing) {
          columnMap.set(tid, col + 1);
        }
        if (existing === undefined) queue.push(tid);
      });
    }

    const maxCol = Math.max(...Array.from(columnMap.values()), 0);
    const nodeWidth = Math.max(8, chartWidth * 0.035);

    // Node values
    const nodeValues = new Map<string, number>();
    nodes.forEach((n) => {
      const inVal = links.filter((l) => l.target === n.id).reduce((s, l) => s + l.value, 0);
      const outVal = links.filter((l) => l.source === n.id).reduce((s, l) => s + l.value, 0);
      nodeValues.set(n.id, Math.max(inVal, outVal, 1));
    });

    // Group by column and position vertically centered
    const columns = new Map<number, string[]>();
    columnMap.forEach((col, id) => {
      if (!columns.has(col)) columns.set(col, []);
      columns.get(col)!.push(id);
    });

    const positionedNodes: Array<{
      id: string; label: string; color: string;
      column: number; x: number; y: number; height: number; totalValue: number;
    }> = [];
    const nodePos = new Map<string, { x: number; y: number; height: number; color: string }>();

    columns.forEach((ids, col) => {
      const totalVal = ids.reduce((s, id) => s + (nodeValues.get(id) ?? 1), 0);
      const gap = Math.max(4, chartHeight * 0.03);
      const available = chartHeight - gap * (ids.length - 1);
      const totalHeight = ids.reduce((s, id) => {
        return s + Math.max(4, ((nodeValues.get(id) ?? 1) / totalVal) * available);
      }, 0);
      let startY = margin.top + (chartHeight - totalHeight - gap * (ids.length - 1)) / 2;

      ids.forEach((id, i) => {
        const nd = nodes.find((n) => n.id === id)!;
        const value = nodeValues.get(id) ?? 1;
        const nh = Math.max(4, (value / totalVal) * available);
        const x = margin.left + (maxCol > 0 ? (col / maxCol) * (chartWidth - nodeWidth) : 0);
        const color = nd.color ?? palette[nodes.indexOf(nd) % palette.length];

        positionedNodes.push({ id, label: nd.label, color, column: col, x, y: startY, height: nh, totalValue: value });
        nodePos.set(id, { x, y: startY, height: nh, color });
        startY += nh + gap;
      });
    });

    // Links with offsets
    const srcOff = new Map<string, number>();
    const tgtOff = new Map<string, number>();
    nodes.forEach((n) => { srcOff.set(n.id, 0); tgtOff.set(n.id, 0); });

    const positionedLinks = links.map((link, idx) => {
      const src = nodePos.get(link.source)!;
      const tgt = nodePos.get(link.target)!;
      const srcVal = nodeValues.get(link.source) ?? 1;
      const tgtVal = nodeValues.get(link.target) ?? 1;
      const w = Math.max(2, (link.value / Math.max(srcVal, tgtVal)) * Math.min(src.height, tgt.height));

      const so = srcOff.get(link.source) ?? 0;
      const to = tgtOff.get(link.target) ?? 0;
      const sy = src.y + so + w / 2;
      const ty = tgt.y + to + w / 2;
      srcOff.set(link.source, so + w);
      tgtOff.set(link.target, to + w);

      return { source: link.source, target: link.target, value: link.value, sourceY: sy, targetY: ty, width: w, color: src.color, index: idx };
    });

    return { nodes: positionedNodes, links: positionedLinks, nodeWidth };
  }, [data, chartWidth, chartHeight, margin.left, margin.top, palette]);

  const handleHover = useCallback(
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

  const handleClick = useCallback(
    (index: number) => { onDataPointClick?.(data.links[index], index); },
    [data.links, onDataPointClick],
  );

  const containerVariants = animated ? { hidden: {}, visible: { transition: { staggerChildren: 0.04 } } } : undefined;
  const linkVariants = animated
    ? { hidden: { opacity: 0, pathLength: 0 }, visible: { opacity: 0.5, pathLength: 1, transition: { type: 'spring', ...chartMotion.spring } } }
    : undefined;
  const nodeVariants = animated
    ? { hidden: { opacity: 0, scaleY: 0 }, visible: { opacity: 1, scaleY: 1, transition: { type: 'spring', ...chartMotion.spring } } }
    : undefined;

  const legendItems = useMemo(() => layout.nodes.map((n) => ({ label: n.label, color: n.color })), [layout.nodes]);

  const ariaLabel = title
    ? `${title} alluvial diagram with ${data.nodes.length} nodes and ${data.links.length} links`
    : `Alluvial diagram with ${data.nodes.length} nodes and ${data.links.length} links`;

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

          <motion.g variants={containerVariants} initial={animated ? 'hidden' : undefined} animate={animated ? 'visible' : undefined}>
            {layout.links.map((link, i) => {
              const srcNode = layout.nodes.find((n) => n.id === link.source)!;
              const tgtNode = layout.nodes.find((n) => n.id === link.target)!;
              const sx = srcNode.x + layout.nodeWidth;
              const tx = tgtNode.x;
              const mx = (sx + tx) / 2;
              const path = `M${sx},${link.sourceY} C${mx},${link.sourceY} ${mx},${link.targetY} ${tx},${link.targetY}`;
              const isHovered = hoveredIndex === link.index;

              return (
                <motion.path
                  key={`link-${i}`}
                  d={path}
                  fill="none"
                  stroke={link.color}
                  strokeWidth={link.width}
                  opacity={hoveredIndex !== null && !isHovered ? 0.15 : 0.5}
                  variants={linkVariants}
                  {...(!animated && { opacity: hoveredIndex !== null && !isHovered ? 0.15 : 0.5 })}
                  {...(interactive && {
                    onMouseEnter: (e: React.MouseEvent) => handleHover(link.index, e),
                    onMouseMove: (e: React.MouseEvent) => handleHover(link.index, e),
                    onMouseLeave: () => handleHover(null),
                    onClick: () => handleClick(link.index),
                    cursor: 'pointer',
                  })}
                />
              );
            })}
          </motion.g>

          <motion.g variants={containerVariants} initial={animated ? 'hidden' : undefined} animate={animated ? 'visible' : undefined}>
            {layout.nodes.map((node) => (
              <motion.rect
                key={`node-${node.id}`}
                x={node.x}
                y={node.y}
                width={layout.nodeWidth}
                height={node.height}
                rx={2}
                fill={node.color}
                variants={nodeVariants}
                {...(!animated && { opacity: 1 })}
                style={{ transformOrigin: `${node.x + layout.nodeWidth / 2}px ${node.y + node.height / 2}px` }}
              />
            ))}
          </motion.g>

          {showLabels && layout.nodes.map((node) => {
            const isLeft = node.column === 0;
            return (
              <text
                key={`label-${node.id}`}
                x={isLeft ? node.x - 4 : node.x + layout.nodeWidth + 4}
                y={node.y + node.height / 2}
                textAnchor={isLeft ? 'end' : 'start'}
                dominantBaseline="central"
                fontSize={fontSize - 2}
                fill="var(--color-text-secondary)"
                className="select-none"
              >
                {node.label}
              </text>
            );
          })}
        </svg>

        {showTooltip && interactive && hoveredIndex !== null && (
          <ChartTooltip
            visible
            x={tooltipPos.x}
            y={tooltipPos.y}
            label={`${data.links[hoveredIndex].source} → ${data.links[hoveredIndex].target}`}
            value={formatValue(data.links[hoveredIndex].value)}
            color={layout.links[hoveredIndex]?.color}
          />
        )}
      </div>

      {showLegend && <ChartLegend items={legendItems} />}
    </ChartContainer>
  );
};

export default AlluvialDiagram;
