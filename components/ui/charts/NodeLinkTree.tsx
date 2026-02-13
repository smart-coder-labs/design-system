'use client';

import React, { useState, useCallback, useMemo, useRef } from 'react';
import { motion } from 'framer-motion';
import { cn } from '../../../lib/utils';
import { chartSizes, chartPaletteArray, chartMotion, type ChartSize, type ChartVariant } from './shared/chartTokens';
import { linearScale, formatValue } from './shared/chartUtils';
import { ChartContainer } from './shared/ChartContainer';
import { ChartTooltip } from './shared/ChartTooltip';
import { ChartLegend } from './shared/ChartLegend';

export interface TreeNode {
  label: string;
  children?: TreeNode[];
  color?: string;
  value?: number;
}

export interface NodeLinkTreeProps {
  data: TreeNode;
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

interface FlatNode {
  id: string;
  label: string;
  color: string;
  x: number;
  y: number;
  depth: number;
  parentId: string | null;
  value?: number;
  index: number;
}

export const NodeLinkTree: React.FC<NodeLinkTreeProps> = ({
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

  const margin = { top: padding + 10, right: padding, bottom: padding + 10, left: padding };
  const chartWidth = width - margin.left - margin.right;
  const chartHeight = height - margin.top - margin.bottom;
  const nodeRadius = Math.max(3, Math.min(6, chartWidth / 60));

  const flatNodes = useMemo(() => {
    const nodes: FlatNode[] = [];
    let idx = 0;

    // First pass: count leaves per depth level for positioning
    const getMaxDepth = (node: TreeNode, depth: number): number => {
      if (!node.children || node.children.length === 0) return depth;
      return Math.max(...node.children.map((c) => getMaxDepth(c, depth + 1)));
    };
    const maxDepth = getMaxDepth(data, 0);
    const levelHeight = maxDepth > 0 ? chartHeight / maxDepth : chartHeight;

    // Count leaves for width distribution
    const countLeaves = (node: TreeNode): number => {
      if (!node.children || node.children.length === 0) return 1;
      return node.children.reduce((s, c) => s + countLeaves(c), 0);
    };

    const traverse = (
      node: TreeNode,
      depth: number,
      parentId: string | null,
      xStart: number,
      xEnd: number,
      colorIdx: number,
    ) => {
      const id = `node-${idx}`;
      const totalLeaves = countLeaves(node);
      const x = (xStart + xEnd) / 2;
      const y = margin.top + depth * levelHeight;
      const color = node.color ?? palette[colorIdx % palette.length];

      nodes.push({
        id,
        label: node.label,
        color,
        x: margin.left + linearScale(x, 0, 1, 0, chartWidth),
        y,
        depth,
        parentId,
        value: node.value,
        index: idx,
      });

      const currentIdx = idx;
      idx++;

      if (node.children && node.children.length > 0) {
        let childStart = xStart;
        node.children.forEach((child, ci) => {
          const childLeaves = countLeaves(child);
          const childEnd = childStart + (childLeaves / totalLeaves) * (xEnd - xStart);
          traverse(child, depth + 1, `node-${currentIdx}`, childStart, childEnd, ci);
          childStart = childEnd;
        });
      }
    };

    traverse(data, 0, null, 0, 1, 0);
    return nodes;
  }, [data, chartWidth, chartHeight, margin.left, margin.top, palette]);

  const nodeMap = useMemo(() => {
    const map = new Map<string, FlatNode>();
    flatNodes.forEach((n) => map.set(n.id, n));
    return map;
  }, [flatNodes]);

  const links = useMemo(
    () =>
      flatNodes
        .filter((n) => n.parentId !== null)
        .map((n) => {
          const parent = nodeMap.get(n.parentId!)!;
          return { source: parent, target: n };
        }),
    [flatNodes, nodeMap],
  );

  const handleNodeHover = useCallback(
    (index: number | null, event?: React.MouseEvent) => {
      setHoveredIndex(index);
      if (index !== null && event && containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setTooltipPos({ x: event.clientX - rect.left, y: event.clientY - rect.top });
      }
      onDataPointHover?.(index !== null ? flatNodes[index] : null, index);
    },
    [flatNodes, onDataPointHover],
  );

  const handleNodeClick = useCallback(
    (index: number) => { onDataPointClick?.(flatNodes[index], index); },
    [flatNodes, onDataPointClick],
  );

  const containerVariants = animated ? { hidden: {}, visible: { transition: { staggerChildren: 0.03 } } } : undefined;
  const linkVariants = animated
    ? { hidden: { pathLength: 0, opacity: 0 }, visible: { pathLength: 1, opacity: 0.4, transition: { duration: chartMotion.duration.slow, ease: chartMotion.easing } } }
    : undefined;
  const circleVariants = animated
    ? { hidden: { scale: 0, opacity: 0 }, visible: { scale: 1, opacity: 1, transition: { type: 'spring', ...chartMotion.spring } } }
    : undefined;

  const legendItems = useMemo(() => {
    const topLevel = flatNodes.filter((n) => n.depth <= 1);
    return topLevel.map((n) => ({ label: n.label, color: n.color }));
  }, [flatNodes]);

  const ariaLabel = title
    ? `${title} tree diagram with ${flatNodes.length} nodes`
    : `Tree diagram with ${flatNodes.length} nodes`;

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

          {/* Links */}
          <motion.g
            variants={containerVariants}
            initial={animated ? 'hidden' : undefined}
            animate={animated ? 'visible' : undefined}
          >
            {links.map((link, i) => {
              const midY = (link.source.y + link.target.y) / 2;
              const path = `M${link.source.x},${link.source.y} C${link.source.x},${midY} ${link.target.x},${midY} ${link.target.x},${link.target.y}`;

              return (
                <motion.path
                  key={`link-${i}`}
                  d={path}
                  fill="none"
                  stroke="var(--color-border-secondary)"
                  strokeWidth={1.5}
                  variants={linkVariants}
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
            {flatNodes.map((node) => {
              const isHovered = hoveredIndex === node.index;
              return (
                <motion.circle
                  key={node.id}
                  cx={node.x}
                  cy={node.y}
                  r={isHovered ? nodeRadius * 1.5 : nodeRadius}
                  fill={node.color}
                  stroke="var(--color-bg-primary)"
                  strokeWidth={2}
                  variants={circleVariants}
                  {...(!animated && { opacity: 1 })}
                  style={{ transformOrigin: `${node.x}px ${node.y}px` }}
                  {...(interactive && {
                    onMouseEnter: (e: React.MouseEvent) => handleNodeHover(node.index, e),
                    onMouseMove: (e: React.MouseEvent) => handleNodeHover(node.index, e),
                    onMouseLeave: () => handleNodeHover(null),
                    onClick: () => handleNodeClick(node.index),
                    cursor: 'pointer',
                    role: 'button',
                    'aria-label': `${node.label}${node.value !== undefined ? `: ${formatValue(node.value)}` : ''}`,
                    tabIndex: -1,
                  })}
                />
              );
            })}
          </motion.g>

          {/* Labels */}
          {showLabels && flatNodes.map((node) => (
            <text
              key={`label-${node.id}`}
              x={node.x}
              y={node.y - nodeRadius - 4}
              textAnchor="middle"
              fontSize={fontSize - 3}
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
            label={flatNodes[hoveredIndex].label}
            value={flatNodes[hoveredIndex].value !== undefined ? formatValue(flatNodes[hoveredIndex].value!) : `Depth: ${flatNodes[hoveredIndex].depth}`}
            color={flatNodes[hoveredIndex].color}
          />
        )}
      </div>

      {showLegend && <ChartLegend items={legendItems} />}
    </ChartContainer>
  );
};

export default NodeLinkTree;
