import React from 'react';
import { cn } from '../lib/utils';

export interface StickyContainerProps {
  /**
   * Children to render inside the sticky container
   */
  children: React.ReactNode;
  /**
   * Top offset in px (default: 0)
   */
  top?: number;
  /**
   * Z-index (default: 20)
   */
  zIndex?: number;
  /**
   * Optional className for custom styles
   */
  className?: string;
  /**
   * Optional style for custom CSS
   */
  style?: React.CSSProperties;
}

/**
 * StickyContainer: Apple/macOS style sticky surface
 * - Uses position: sticky
 * - Glass effect, border, shadow
 * - Top offset configurable
 * - Responsive, works in scrollable containers
 */
export const StickyContainer: React.FC<StickyContainerProps> = ({
  children,
  top = 0,
  zIndex = 20,
  className,
  style,
}) => {
  return (
    <div
      className={cn(
        'sticky',
        'bg-surface-secondary/80 backdrop-blur-xl border border-border-primary shadow-sm',
        'rounded-xl',
        'px-4 py-2',
        className
      )}
      style={{
        top,
        zIndex,
        ...style,
      }}
    >
      {children}
    </div>
  );
};
