import React, { useState } from 'react';
import { cn } from '../lib/utils';
import Chart from './Chart';

export interface CountersListWithChartItem {
  label: string;
  value: number;
  percent: number;
  color?: string;
}

export interface CountersListWithChartProps {
  title?: string;
  items: CountersListWithChartItem[];
  chartType?: 'donut' | 'pie';
  className?: string;
}

export const CountersListWithChart: React.FC<CountersListWithChartProps> = ({
  title,
  items,
  chartType = 'donut',
  className,
}) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  // Prepare chart data
  const chartData = {
    labels: items.map(i => i.label),
    datasets: [
      {
        data: items.map(i => i.value),
        backgroundColor: items.map(i => i.color || '#3b82f6'),
      },
    ],
  };

  return (
    <div className={cn('bg-surface-primary rounded-2xl shadow-lg p-6 flex flex-col md:flex-row gap-6', className)}>
      <div className="flex-1 flex flex-col gap-4 justify-center">
        {title && <h3 className="text-lg font-semibold text-text-primary mb-2">{title}</h3>}
        {items.map((item, idx) => {
          const isActive = activeIndex === idx;
          return (
            <div
              key={idx}
              className={cn(
                'flex items-center justify-between py-2 border-b last:border-b-0 transition-colors',
                isActive ? 'bg-surface-secondary/80 rounded-lg px-3' : 'border-gray-800'
              )}
              onMouseEnter={() => setActiveIndex(idx)}
              onMouseLeave={() => setActiveIndex(null)}
              onFocus={() => setActiveIndex(idx)}
              onBlur={() => setActiveIndex(null)}
              tabIndex={0}
              role="button"
              aria-pressed={isActive}
            >
              <span className={cn('text-base font-medium', isActive ? 'text-text-primary' : 'text-text-primary')}>{item.label}</span>
              <div className="flex items-center gap-4">
                <span className={cn('text-xl font-bold', isActive ? 'text-text-primary' : 'text-text-primary')}>{item.value}</span>
                <span className="text-base font-semibold" style={{ color: item.color || '#3b82f6' }}>{item.percent}%</span>
              </div>
            </div>
          );
        })}
      </div>
      <div className="flex items-center justify-center md:w-1/3">
        <Chart type={chartType} data={chartData} activeIndex={activeIndex} onSliceHover={(i) => setActiveIndex(i)} />
      </div>
    </div>
  );
};
