"use client";

import React from 'react';
import { cn } from '../../../../lib/utils';

export interface ChartLegendItem {
  label: string;
  color: string;
}

export interface ChartLegendProps {
  items: ChartLegendItem[];
  className?: string;
  direction?: 'horizontal' | 'vertical';
  onItemClick?: (item: ChartLegendItem, index: number) => void;
  onItemHover?: (item: ChartLegendItem | null, index: number | null) => void;
}

export const ChartLegend: React.FC<ChartLegendProps> = ({
  items,
  className,
  direction = 'horizontal',
  onItemClick,
  onItemHover,
}) => {
  return (
    <div
      className={cn(
        'flex gap-3 mt-3',
        direction === 'horizontal' ? 'flex-wrap' : 'flex-col',
        className
      )}
    >
      {items.map((item, i) => (
        <button
          key={i}
          type="button"
          className={cn(
            'flex items-center gap-1.5 text-[12px] text-[var(--color-text-secondary)]',
            'transition-opacity duration-150 hover:opacity-80',
            (onItemClick || onItemHover) && 'cursor-pointer'
          )}
          onClick={() => onItemClick?.(item, i)}
          onMouseEnter={() => onItemHover?.(item, i)}
          onMouseLeave={() => onItemHover?.(null, null)}
          tabIndex={onItemClick ? 0 : -1}
        >
          <span
            className="w-2.5 h-2.5 rounded-full flex-shrink-0"
            style={{ backgroundColor: item.color }}
          />
          <span>{item.label}</span>
        </button>
      ))}
    </div>
  );
};

export default ChartLegend;
