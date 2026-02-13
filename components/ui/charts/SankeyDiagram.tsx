'use client';

import React, { useState, useCallback, useMemo, useRef } from 'react';
import { motion } from 'framer-motion';
import { cn } from '../../../lib/utils';
import { chartSizes, chartPaletteArray, chartMotion, type ChartSize, type ChartVariant } from './shared/chartTokens';
import { linearScale, formatValue } from './shared/chartUtils';
import { ChartContainer } from './shared/ChartContainer';
import { ChartTooltip } from './shared/ChartTooltip';
import { ChartLegend } from './shared/ChartLegend';

export interface SankeyNode {
  id: string;
  label: string;
  color?: string;
}

export interface SankeyLink {
  source: string;
  target: string;
  value: number;
}

export interface SankeyDiagramProps {
  data: {
    nodes: SankeyNode[];
    links: SankeyLink[];
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

interface LayoutNode {
  id: string;
  label: string;
  color: string;
  column: number;
  x: number;
  y: number;
  height: number;
  totalValue: number;
}

interface LayoutLink {
  source: string;
  target: string;
  value: number;
  sourceY: number;
  targetY: number;
  width: number;
  color: string;
  index: number;
}

export const SankeyDiagram: React.FC<SankeyDiagramProps> = ({
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

    // Assign columns using topological depth
    const nodeMap = new Map<string, { column: number; outgoing: string[] }>();
    nodes.forEach((n) => nodeMap.set(n.id, { column: 0, outgoing: [] }));
    links.forEach((l) => {
      const s = nodeMap.get(l.source);
      if (s) s.outgoing.push(l.target);
    });

    // BFS to assign columns
    const visited = new Set<string>();
    const queue: string[] = [];
    const sources = new Set(nodes.map((n) => n.id));
    links.forEach((l) => sources.delete(l.target));
    sources.forEach((s) => {
      queue.push(s);
      visited.add(s);
    });
    if (queue.length === 0 && nodes.length > 0) {
      queue.push(nodes[0].id);
      visited.add(nodes[0].id);
    }

    while (queue.length > 0) {
      const current = queue.shift()!;
      const node = nodeMap.get(current)!;
      node.outgoing.forEach((targetId) => {
        const target = nodeMap.get(targetId);
        if (target) {
          target.column = Math.max(target.column, node.column + 1);
          if (!visited.has(targetId)) {
            visited.add(targetId);
            queue.push(targetId);
          }
        }
      });
    }

    const maxColumn = Math.max(...Array.from(nodeMap.values()).map((n) => n.column), 0);
    const nodeWidth = Math.max(8, chartWidth * 0.04);

    // Calculate total values for each node
    const nodeValues = new Map<string, number>();
    nodes.forEach((n) => {
      const inValue = links.filter((l) => l.target === n.id).reduce((s, l) => s + l.value, 0);
      const outValue = links.filter((l) => l.source === n.id).reduce((s, l) => s + l.value, 0);
      nodeValues.set(n.id, Math.max(inValue, outValue, 1));
    });

    // Group nodes by column
    const columns = new Map<number, string[]>();
    nodeMap.forEach((val, id) => {
      const col = val.column;
      if (!columns.has(col)) columns.set(col, []);
      columns.get(col)!.push(id);
    });

    // Position nodes
    const layoutNodes: LayoutNode[] = [];
    const nodePositions = new Map<string, LayoutNode>();
    const totalMaxValue = Math.max(...Array.from(nodeValues.values()), 1);

    columns.forEach((ids, col) => {
      const totalColValue = ids.reduce((s, id) => s + (nodeValues.get(id) ?? 1), 0);
      const gap = Math.max(4, chartHeight * 0.03);
      const availableHeight = chartHeight - gap * (ids.length - 1);
      let currentY = margin.top;

      ids.forEach((id, i) => {
        const nodeData = nodes.find((n) => n.id === id)!;
        const value = nodeValues.get(id) ?? 1;
        const nodeHeight = Math.max(4, (value / totalColValue) * availableHeight);
        const x = margin.left + (maxColumn > 0 ? (col / maxColumn) * (chartWidth - nodeWidth) : 0);

        const layoutNode: LayoutNode = {
          id,
          label: nodeData.label,
          color: nodeData.color ?? palette[i % palette.length],
          column: col,
          x,
          y: currentY,
          height: nodeHeight,
          totalValue: value,
        };
        layoutNodes.push(layoutNode);
        nodePositions.set(id, layoutNode);
        currentY += nodeHeight + gap;
      });
    });

    // Position links
    const sourceOffsets = new Map<string, number>();
    const targetOffsets = new Map<string, number>();
    nodes.forEach((n) => {
      sourceOffsets.set(n.id, 0);
      targetOffsets.set(n.id, 0);
    });

    const layoutLinks: LayoutLink[] = links.map((link, idx) => {
      const sourceNode = nodePositions.get(link.source)!;
      const targetNode = nodePositions.get(link.target)!;
      const sourceTotal = nodeValues.get(link.source) ?? 1;
      const targetTotal = nodeValues.get(link.target) ?? 1;

      const linkWidth = Math.max(2, (link.value / Math.max(sourceTotal, targetTotal)) * Math.min(sourceNode.height, targetNode.height));

      const sOffset = sourceOffsets.get(link.source) ?? 0;
      const tOffset = targetOffsets.get(link.target) ?? 0;

      const sourceY = sourceNode.y + sOffset + linkWidth / 2;
      const targetY = targetNode.y + tOffset + linkWidth / 2;

      sourceOffsets.set(link.source, sOffset + linkWidth);
      targetOffsets.set(link.target, tOffset + linkWidth);

      return {
        source: link.source,
        target: link.target,
        value: link.value,
        sourceY,
        targetY,
        width: linkWidth,
        color: sourceNode.color,
        index: idx,
      };
    });

    return { nodes: layoutNodes, links: layoutLinks, nodeWidth };
  }, [data, chartWidth, chartHeight, margin.left, margin.top, palette]);

  const handleLinkHover = useCallback(
    (index: number | null, event?: React.MouseEvent) => {
      setHoveredIndex(index);
      if (index !== null && event && containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setTooltipPos({
          x: event.clientX - rect.left,
          y: event.clientY - rect.top,
        });
      }
      onDataPointHover?.(index !== null ? data.links[index] : null, index);
    },
    [data.links, onDataPointHover],
  );

  const handleLinkClick = useCallback(
    (index: number) => {
      onDataPointClick?.(data.links[index], index);
    },
    [data.links, onDataPointClick],
  );

  const containerVariants = animated
    ? { hidden: {}, visible: { transition: { staggerChildren: 0.04 } } }
    : undefined;

  const linkVariants = animated
    ? {
        hidden: { opacity: 0, pathLength: 0 },
        visible: {
          opacity: 0.5,
          pathLength: 1,
          transition: { type: 'spring', ...chartMotion.spring },
        },
      }
    : undefined;

  const nodeVariants = animated
    ? {
        hidden: { opacity: 0, scaleY: 0 },
        visible: {
          opacity: 1,
          scaleY: 1,
          transition: { type: 'spring', ...chartMotion.spring },
        },
      }
    : undefined;

  const legendItems = useMemo(
    () =>
      layout.nodes.map((n) => ({
        label: n.label,
        color: n.color,
      })),
    [layout.nodes],
  );

  const ariaLabel = title
    ? `${title} sankey diagram with ${data.nodes.length} nodes and ${data.links.length} links`
    : `Sankey diagram with ${data.nodes.length} nodes and ${data.links.length} links`;

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

          {/* Links */}
          <motion.g
            variants={containerVariants}
            initial={animated ? 'hidden' : undefined}
            animate={animated ? 'visible' : undefined}
          >
            {layout.links.map((link, i) => {
              const sourceNode = layout.nodes.find((n) => n.id === link.source)!;
              const targetNode = layout.nodes.find((n) => n.id === link.target)!;
              const sx = sourceNode.x + layout.nodeWidth;
              const tx = targetNode.x;
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
                    onMouseEnter: (e: React.MouseEvent) => handleLinkHover(link.index, e),
                    onMouseMove: (e: React.MouseEvent) => handleLinkHover(link.index, e),
                    onMouseLeave: () => handleLinkHover(null),
                    onClick: () => handleLinkClick(link.index),
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
            {layout.nodes.map((node, i) => (
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

          {/* Labels */}
          {showLabels &&
            layout.nodes.map((node) => {
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

export default SankeyDiagram;
