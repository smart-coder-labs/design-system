"use client";

import React from 'react';

export interface ChartAxisProps {
  type: 'x' | 'y';
  x: number;
  y: number;
  length: number;
  ticks: Array<{ position: number; label: string }>;
  fontSize?: number;
  color?: string;
}

export const ChartAxis: React.FC<ChartAxisProps> = ({
  type,
  x,
  y,
  length,
  ticks,
  fontSize = 11,
  color = 'var(--color-text-tertiary)',
}) => {
  if (type === 'x') {
    return (
      <g>
        <line
          x1={x}
          y1={y}
          x2={x + length}
          y2={y}
          stroke="var(--color-border-primary)"
          strokeWidth={1}
        />
        {ticks.map((tick, i) => (
          <g key={i}>
            <line
              x1={tick.position}
              y1={y}
              x2={tick.position}
              y2={y + 4}
              stroke="var(--color-border-primary)"
              strokeWidth={1}
            />
            <text
              x={tick.position}
              y={y + 16}
              textAnchor="middle"
              fill={color}
              fontSize={fontSize}
              fontFamily="-apple-system, BlinkMacSystemFont, 'Inter', sans-serif"
            >
              {tick.label}
            </text>
          </g>
        ))}
      </g>
    );
  }

  return (
    <g>
      <line
        x1={x}
        y1={y}
        x2={x}
        y2={y + length}
        stroke="var(--color-border-primary)"
        strokeWidth={1}
      />
      {ticks.map((tick, i) => (
        <g key={i}>
          <line
            x1={x - 4}
            y1={tick.position}
            x2={x}
            y2={tick.position}
            stroke="var(--color-border-primary)"
            strokeWidth={1}
          />
          <text
            x={x - 8}
            y={tick.position + 4}
            textAnchor="end"
            fill={color}
            fontSize={fontSize}
            fontFamily="-apple-system, BlinkMacSystemFont, 'Inter', sans-serif"
          >
            {tick.label}
          </text>
        </g>
      ))}
    </g>
  );
};

export default ChartAxis;
