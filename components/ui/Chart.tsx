import React from 'react';
import { cn } from '../../lib/utils';;

export interface ChartProps {
  type: 'pie' | 'donut' | 'line' | 'bar' | 'radial';
  // expects { labels: string[], datasets: [{ data: number[], backgroundColor?: string[] }] }
  data: {
    labels?: string[];
    datasets?: Array<{ data: number[]; backgroundColor?: string[] }>;
  };
  options?: any;
  className?: string;
  size?: number; // diameter
  activeIndex?: number | null;
  onSliceHover?: (index: number | null) => void;
}

const polarToCartesian = (cx: number, cy: number, r: number, angleDeg: number) => {
  const angleRad = ((angleDeg - 90) * Math.PI) / 180.0;
  return {
    x: cx + r * Math.cos(angleRad),
    y: cy + r * Math.sin(angleRad),
  };
};

const describeArc = (cx: number, cy: number, r: number, startAngle: number, endAngle: number) => {
  const start = polarToCartesian(cx, cy, r, endAngle);
  const end = polarToCartesian(cx, cy, r, startAngle);
  const largeArcFlag = endAngle - startAngle <= 180 ? '0' : '1';
  const d = ['M', start.x, start.y, 'A', r, r, 0, largeArcFlag, 0, end.x, end.y, 'L', cx, cy, 'Z'].join(' ');
  return d;
};

export const Chart: React.FC<ChartProps> = ({ type, data, options, className, size = 220, activeIndex = null, onSliceHover, }) => {
  const labels = data?.labels || [];
  const ds = data?.datasets && data.datasets[0];
  const values = ds?.data || [];
  const colors = ds?.backgroundColor || [];

  const total = values.reduce((s, v) => s + (Number(v) || 0), 0) || 1;

  if (type === 'pie' || type === 'donut') {
    let cumulative = 0;
    const cx = size / 2;
    const cy = size / 2;
    const r = size / 2 - 4; // padding
    const innerRadius = type === 'donut' ? r * 0.55 : 0;

    return (
      <div className={cn('inline-block', className)} style={{ width: size, height: size }}>
        <svg viewBox={`0 0 ${size} ${size}`} width={size} height={size} className="block" role="img" aria-label="Pie chart">
          <g>
            {values.map((v, i) => {
              const value = Number(v) || 0;
              const startAngle = (cumulative / total) * 360;
              cumulative += value;
              const endAngle = (cumulative / total) * 360;
              const path = describeArc(cx, cy, r, startAngle, endAngle);
              const fill = colors[i] || `hsl(${(i * 60) % 360} 75% 55%)`;
              const isActive = activeIndex === i;
              const opacity = activeIndex === null ? 1 : isActive ? 1 : 0.45;
              const transformStyle = isActive ? { transform: 'scale(1.03)', transformOrigin: `${cx}px ${cy}px` } : undefined;
              return (
                <path
                  key={i}
                  d={path}
                  fill={fill}
                  stroke="rgba(0,0,0,0.06)"
                  strokeWidth={isActive ? 1.5 : 0.5}
                  style={{ transition: 'opacity 180ms ease, transform 180ms ease', opacity, ...transformStyle }}
                  className="chart-slice"
                  onMouseEnter={() => onSliceHover && onSliceHover(i)}
                  onMouseLeave={() => onSliceHover && onSliceHover(null)}
                  onFocus={() => onSliceHover && onSliceHover(i)}
                  onBlur={() => onSliceHover && onSliceHover(null)}
                  tabIndex={0}
                  aria-label={`${data?.labels?.[i] || 'slice'}: ${value}`}
                />
              );
            })}

            {/* center hole for donut */}
            {type === 'donut' && (
              <circle cx={cx} cy={cy} r={innerRadius} fill="var(--surface-primary, #0b1220)" />
            )}
          </g>
        </svg>
      </div>
    );
  }

  // fallback placeholder for other chart types
  return (
    <div className={cn('bg-surface-primary rounded-xl shadow p-4 flex items-center justify-center min-h-[180px]', className)}>
      <span className="text-text-secondary">[Chart: {type}]</span>
    </div>
  );
};

export default Chart;
