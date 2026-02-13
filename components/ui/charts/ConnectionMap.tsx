'use client';

import React, { useState, useCallback, useMemo, useRef } from 'react';
import { motion } from 'framer-motion';
import { cn } from '../../../lib/utils';
import { chartSizes, chartPaletteArray, chartMotion, type ChartSize, type ChartVariant } from './shared/chartTokens';
import { linearScale, formatValue } from './shared/chartUtils';
import { ChartContainer } from './shared/ChartContainer';
import { ChartTooltip } from './shared/ChartTooltip';

export interface ConnectionMapPoint {
  id: string;
  label: string;
  x: number;
  y: number;
}

export interface ConnectionMapConnection {
  from: string;
  to: string;
  value?: number;
}

export interface ConnectionMapData {
  points: ConnectionMapPoint[];
  connections: ConnectionMapConnection[];
}

export interface ConnectionMapProps {
  data: ConnectionMapData;
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

export const ConnectionMap: React.FC<ConnectionMapProps> = ({
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
  const [hoveredPoint, setHoveredPoint] = useState<number | null>(null);
  const [hoveredConnection, setHoveredConnection] = useState<number | null>(null);
  const [tooltipPos, setTooltipPos] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  const palette = colorScheme ?? chartPaletteArray;
  const { width, height, fontSize, padding } = chartSizes[size];

  const margin = { top: padding, right: padding, bottom: padding, left: padding };
  const chartWidth = width - margin.left - margin.right;
  const chartHeight = height - margin.top - margin.bottom;

  const { xMin, xMax, yMin, yMax } = useMemo(() => {
    const xs = data.points.map((p) => p.x);
    const ys = data.points.map((p) => p.y);
    return {
      xMin: Math.min(...xs),
      xMax: Math.max(...xs),
      yMin: Math.min(...ys),
      yMax: Math.max(...ys),
    };
  }, [data.points]);

  const scaleX = useCallback(
    (v: number) => margin.left + linearScale(v, xMin, xMax, 10, chartWidth - 10),
    [margin.left, xMin, xMax, chartWidth],
  );

  const scaleY = useCallback(
    (v: number) => margin.top + chartHeight - linearScale(v, yMin, yMax, 10, chartHeight - 10),
    [margin.top, chartHeight, yMin, yMax],
  );

  const pointMap = useMemo(() => {
    const map = new Map<string, { point: ConnectionMapPoint; index: number; cx: number; cy: number }>();
    data.points.forEach((p, i) => {
      map.set(p.id, { point: p, index: i, cx: scaleX(p.x), cy: scaleY(p.y) });
    });
    return map;
  }, [data.points, scaleX, scaleY]);

  const connectionPaths = useMemo(() => {
    const maxVal = Math.max(...data.connections.map((c) => c.value ?? 1), 1);
    return data.connections.map((conn) => {
      const fromPt = pointMap.get(conn.from);
      const toPt = pointMap.get(conn.to);
      if (!fromPt || !toPt) return null;

      const mx = (fromPt.cx + toPt.cx) / 2;
      const my = (fromPt.cy + toPt.cy) / 2;
      const dist = Math.sqrt((toPt.cx - fromPt.cx) ** 2 + (toPt.cy - fromPt.cy) ** 2);
      const controlY = my - dist * 0.3;

      const d = `M ${fromPt.cx} ${fromPt.cy} Q ${mx} ${controlY} ${toPt.cx} ${toPt.cy}`;
      const strokeWidth = conn.value != null ? linearScale(conn.value, 0, maxVal, 1, 4) : 1.5;
      return { d, strokeWidth, from: fromPt.point.label, to: toPt.point.label, conn };
    }).filter(Boolean) as Array<{ d: string; strokeWidth: number; from: string; to: string; conn: ConnectionMapConnection }>;
  }, [data.connections, pointMap]);

  const handlePointHover = useCallback(
    (index: number | null, event?: React.MouseEvent) => {
      setHoveredPoint(index);
      setHoveredConnection(null);
      if (index !== null && event && containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setTooltipPos({ x: event.clientX - rect.left, y: event.clientY - rect.top });
      }
      onDataPointHover?.(index !== null ? data.points[index] : null, index);
    },
    [data.points, onDataPointHover],
  );

  const handleConnectionHover = useCallback(
    (index: number | null, event?: React.MouseEvent) => {
      setHoveredConnection(index);
      setHoveredPoint(null);
      if (index !== null && event && containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setTooltipPos({ x: event.clientX - rect.left, y: event.clientY - rect.top });
      }
    },
    [],
  );

  const handlePointClick = useCallback(
    (index: number) => { onDataPointClick?.(data.points[index], index); },
    [data.points, onDataPointClick],
  );

  const containerVariants = animated
    ? { hidden: {}, visible: { transition: { staggerChildren: 0.06 } } }
    : undefined;

  const itemVariants = animated
    ? {
        hidden: { opacity: 0, scale: 0 },
        visible: { opacity: 1, scale: 1, transition: { type: 'spring', ...chartMotion.spring } },
      }
    : undefined;

  const pathVariants = animated
    ? {
        hidden: { pathLength: 0, opacity: 0 },
        visible: { pathLength: 1, opacity: 1, transition: { duration: chartMotion.duration.slow, ease: chartMotion.easing } },
      }
    : undefined;

  const ariaLabel = title
    ? `${title} connection map with ${data.points.length} points and ${data.connections.length} connections`
    : `Connection map with ${data.points.length} points and ${data.connections.length} connections`;

  const tooltipContent = useMemo(() => {
    if (hoveredPoint !== null) {
      const pt = data.points[hoveredPoint];
      return {
        label: pt.label,
        items: [
          { label: 'X', value: formatValue(pt.x), color: palette[hoveredPoint % palette.length] },
          { label: 'Y', value: formatValue(pt.y) },
        ],
      };
    }
    if (hoveredConnection !== null) {
      const cp = connectionPaths[hoveredConnection];
      if (!cp) return null;
      const items: Array<{ label: string; value: string | number; color?: string }> = [
        { label: 'From', value: cp.from },
        { label: 'To', value: cp.to },
      ];
      if (cp.conn.value != null) {
        items.push({ label: 'Value', value: formatValue(cp.conn.value) });
      }
      return { label: `${cp.from} → ${cp.to}`, items };
    }
    return null;
  }, [hoveredPoint, hoveredConnection, data.points, connectionPaths, palette]);

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
            {connectionPaths.map((cp, i) => {
              const isHovered = hoveredConnection === i;
              const dimmed = (hoveredPoint !== null || hoveredConnection !== null) && !isHovered;

              const interactiveProps = interactive ? {
                onMouseEnter: (e: React.MouseEvent) => handleConnectionHover(i, e),
                onMouseMove: (e: React.MouseEvent) => handleConnectionHover(i, e),
                onMouseLeave: () => handleConnectionHover(null),
                cursor: 'pointer' as const,
              } : {};

              return (
                <motion.path
                  key={`conn-${i}`}
                  variants={pathVariants}
                  d={cp.d}
                  fill="none"
                  stroke={palette[i % palette.length]}
                  strokeWidth={isHovered ? cp.strokeWidth + 1 : cp.strokeWidth}
                  strokeOpacity={dimmed ? 0.2 : 0.6}
                  {...interactiveProps}
                />
              );
            })}

            {data.points.map((point, i) => {
              const entry = pointMap.get(point.id);
              if (!entry) return null;
              const { cx, cy } = entry;
              const color = palette[i % palette.length];
              const isHovered = hoveredPoint === i;
              const dimmed = (hoveredPoint !== null || hoveredConnection !== null) && !isHovered;

              const interactiveProps = interactive ? {
                onMouseEnter: (e: React.MouseEvent) => handlePointHover(i, e),
                onMouseMove: (e: React.MouseEvent) => handlePointHover(i, e),
                onMouseLeave: () => handlePointHover(null),
                onClick: () => handlePointClick(i),
                cursor: 'pointer' as const,
              } : {};

              return (
                <React.Fragment key={`pt-${point.id}`}>
                  <motion.circle
                    variants={itemVariants}
                    cx={cx}
                    cy={cy}
                    r={isHovered ? 7 : 5}
                    fill={color}
                    stroke={color}
                    strokeWidth={isHovered ? 2 : 1}
                    opacity={dimmed ? 0.4 : 1}
                    style={{ transformOrigin: `${cx}px ${cy}px` }}
                    {...interactiveProps}
                  />
                  {showLabels && (
                    <text
                      x={cx}
                      y={cy - 10}
                      textAnchor="middle"
                      fill="var(--color-text-secondary)"
                      fontSize={fontSize - 2}
                      fontFamily="-apple-system, BlinkMacSystemFont, 'Inter', sans-serif"
                      opacity={dimmed ? 0.4 : 1}
                    >
                      {point.label}
                    </text>
                  )}
                </React.Fragment>
              );
            })}
          </motion.g>
        </svg>

        {showTooltip && interactive && tooltipContent && (
          <ChartTooltip
            visible
            x={tooltipPos.x}
            y={tooltipPos.y}
            label={tooltipContent.label}
            items={tooltipContent.items}
          />
        )}
      </div>
    </ChartContainer>
  );
};

export default ConnectionMap;
