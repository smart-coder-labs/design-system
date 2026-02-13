"use client";

import React from 'react';

export interface ChartGridProps {
  x: number;
  y: number;
  width: number;
  height: number;
  horizontalLines?: number[];
  verticalLines?: number[];
  stroke?: string;
  strokeDasharray?: string;
}

export const ChartGrid: React.FC<ChartGridProps> = ({
  x,
  y,
  width,
  height,
  horizontalLines = [],
  verticalLines = [],
  stroke = 'var(--color-border-primary)',
  strokeDasharray = '4 4',
}) => {
  return (
    <g>
      {horizontalLines.map((ly, i) => (
        <line
          key={`h-${i}`}
          x1={x}
          y1={ly}
          x2={x + width}
          y2={ly}
          stroke={stroke}
          strokeDasharray={strokeDasharray}
          strokeWidth={1}
        />
      ))}
      {verticalLines.map((lx, i) => (
        <line
          key={`v-${i}`}
          x1={lx}
          y1={y}
          x2={lx}
          y2={y + height}
          stroke={stroke}
          strokeDasharray={strokeDasharray}
          strokeWidth={1}
        />
      ))}
    </g>
  );
};

export default ChartGrid;
