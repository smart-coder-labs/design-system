import React, { useRef, useState } from 'react';
import { cn } from '../lib/utils';

export interface ResizablePanelProps {
  /** Initial width in px or % (e.g. '400px', '30%') */
  initialSize?: string;
  minSize?: number; // px
  maxSize?: number; // px
  direction?: 'horizontal' | 'vertical';
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

/**
 * A resizable panel (horizontal or vertical).
 * Usage:
 * <ResizablePanel direction="horizontal">...</ResizablePanel>
 */
export const ResizablePanel: React.FC<ResizablePanelProps> = ({
  initialSize = '400px',
  minSize = 200,
  maxSize = 1000,
  direction = 'horizontal',
  children,
  className,
  style,
}) => {
  const panelRef = useRef<HTMLDivElement>(null);
  const [size, setSize] = useState<string>(initialSize);
  const [dragging, setDragging] = useState(false);

  // Mouse/touch drag logic
  const onDragStart = (e: React.MouseEvent | React.TouchEvent) => {
    setDragging(true);
    document.body.style.cursor = direction === 'horizontal' ? 'col-resize' : 'row-resize';
  };

  const onDragEnd = () => {
    setDragging(false);
    document.body.style.cursor = '';
  };

  const onDrag = (e: MouseEvent | TouchEvent) => {
    if (!dragging || !panelRef.current) return;
    let clientPos = 0;
    if ('touches' in e) {
      clientPos = direction === 'horizontal' ? e.touches[0].clientX : e.touches[0].clientY;
    } else {
      clientPos = direction === 'horizontal' ? e.clientX : e.clientY;
    }
    const rect = panelRef.current.getBoundingClientRect();
    let newSize = direction === 'horizontal'
      ? clientPos - rect.left
      : clientPos - rect.top;
    newSize = Math.max(minSize, Math.min(maxSize, newSize));
    setSize(newSize + 'px');
  };

  React.useEffect(() => {
    if (!dragging) return;
    const moveHandler = (e: MouseEvent | TouchEvent) => onDrag(e);
    const upHandler = () => onDragEnd();
    window.addEventListener('mousemove', moveHandler);
    window.addEventListener('touchmove', moveHandler);
    window.addEventListener('mouseup', upHandler);
    window.addEventListener('touchend', upHandler);
    return () => {
      window.removeEventListener('mousemove', moveHandler);
      window.removeEventListener('touchmove', moveHandler);
      window.removeEventListener('mouseup', upHandler);
      window.removeEventListener('touchend', upHandler);
    };
  }, [dragging]);

  return (
    <div
      ref={panelRef}
      className={cn(
        'relative bg-surface-secondary rounded shadow flex flex-col',
        direction === 'horizontal' ? 'h-full' : 'w-full',
        className
      )}
      style={{
        ...(direction === 'horizontal' ? { width: size } : { height: size }),
        ...style,
      }}
    >
      <div className="flex-1 overflow-auto">{children}</div>
      <div
        className={cn(
          'absolute z-10 transition-colors',
          direction === 'horizontal'
            ? 'top-0 right-0 h-full w-2 cursor-col-resize bg-border-primary hover:bg-border-accent'
            : 'bottom-0 left-0 w-full h-2 cursor-row-resize bg-border-primary hover:bg-border-accent'
        )}
        onMouseDown={onDragStart}
        onTouchStart={onDragStart}
        role="separator"
        aria-orientation={direction}
        tabIndex={0}
        style={{
          background: dragging ? 'var(--color-border-accent, #bdbdbd)' : 'var(--color-border-primary, #e0e0e0)',
        }}
      />
    </div>
  );
};
