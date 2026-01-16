import React from 'react';
import { cn } from '../../lib/utils';;
import { ResizablePanel } from './ResizablePanel';

export interface SplitViewProps {
  /**
   * Left panel content (Finder sidebar, etc)
   */
  left: React.ReactNode;
  /**
   * Main panel content (Finder files, etc)
   */
  right: React.ReactNode;
  /**
   * Initial width of left panel (px or %)
   */
  initialLeftSize?: string;
  /**
   * Minimum width of left panel (px)
   */
  minLeftSize?: number;
  /**
   * Maximum width of left panel (px)
   */
  maxLeftSize?: number;
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
 * SplitView (macOS Finder style):
 * - Left panel resizable
 * - Right panel fills remaining space
 * - Glass effect, subtle border, shadow
 * - Responsive, mobile stacks panels
 */
export const SplitView: React.FC<SplitViewProps> = ({
  left,
  right,
  initialLeftSize = '320px',
  minLeftSize = 200,
  maxLeftSize = 600,
  className,
  style,
}) => {
  return (
    <div
      className={cn(
        'relative flex h-full w-full bg-background',
        'rounded-xl shadow-lg border border-border-primary overflow-hidden',
        'md:flex-row flex-col',
        className
      )}
      style={style}
    >
      <ResizablePanel
        initialSize={initialLeftSize}
        minSize={minLeftSize}
        maxSize={maxLeftSize}
        direction="horizontal"
        className={cn(
          'bg-surface-secondary/80 backdrop-blur-xl border-r border-border-primary',
          'transition-all duration-200 ease-[cubic-bezier(0.16,1,0.3,1)]',
          'flex-shrink-0'
        )}
        style={{ minHeight: 0 }}
      >
        <div className="h-full w-full p-6 flex flex-col gap-4">
          {left}
        </div>
      </ResizablePanel>
      <div className="flex-1 h-full w-full bg-background p-6 flex flex-col gap-4">
        {right}
      </div>
    </div>
  );
};
