import React from 'react';
import { cn } from '../lib/utils';

export interface MasonryLayoutProps {
  /**
   * Array of React nodes to render as items
   */
  children: React.ReactNode[];
  /**
   * Number of columns (default: 3)
   */
  columns?: number;
  /**
   * Gap between items (default: 16px)
   */
  gap?: number;
  /**
   * Optional className for root
   */
  className?: string;
  /**
   * Optional style for root
   */
  style?: React.CSSProperties;
}

/**
 * MasonryLayout: Apple-minimal masonry grid
 * - Responsive, fluid columns
 * - Animaciones suaves al reordenar
 * - Accesible y configurable
 */
export const MasonryLayout: React.FC<MasonryLayoutProps> = ({
  children,
  columns = 3,
  gap = 16,
  className,
  style,
}) => {
  // Distribute children into columns
  const columnItems: React.ReactNode[][] = Array.from({ length: columns }, () => []);
  children.forEach((child, i) => {
    columnItems[i % columns].push(child);
  });

  return (
    <div
      className={cn(
        'w-full flex',
        className
      )}
      style={{ gap, ...style }}
      role="list"
    >
      {columnItems.map((items, colIdx) => (
        <div
          key={colIdx}
          className="flex-1 flex flex-col"
          style={{ gap }}
          role="listitem"
        >
          {items}
        </div>
      ))}
    </div>
  );
};
