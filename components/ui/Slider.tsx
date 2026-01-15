"use client";

import * as React from "react";
import { cn } from "../../lib/utils";

type SliderProps = {
    value?: number;
    defaultValue?: number;
    min?: number;
    max?: number;
    step?: number;
    disabled?: boolean;
    onValueChange?: (value: number) => void;
    onValueCommit?: (value: number) => void;
    className?: string;
    trackClassName?: string;
    rangeClassName?: string;
    thumbClassName?: string;
};

function clamp(value: number, min: number, max: number) {
    return Math.min(Math.max(value, min), max);
}

function snapToStep(value: number, step: number, min: number) {
    if (step <= 0) return value;
    const snapped = Math.round((value - min) / step) * step + min;
    return snapped;
}

const Slider = React.forwardRef<HTMLDivElement, SliderProps>(
    (
        {
            value,
            defaultValue,
            min = 0,
            max = 100,
            step = 1,
            disabled = false,
            onValueChange,
            onValueCommit,
            className,
            trackClassName,
            rangeClassName,
            thumbClassName,
        },
        ref
    ) => {
        const [internalValue, setInternalValue] = React.useState(() => clamp(defaultValue ?? min, min, max));
        const currentValue = value !== undefined ? clamp(value, min, max) : internalValue;
        const trackRef = React.useRef<HTMLDivElement | null>(null);
        const [isDragging, setIsDragging] = React.useState(false);

        const getPercent = (val: number) => ((val - min) / (max - min)) * 100;

        const updateValue = React.useCallback(
            (next: number, commit?: boolean) => {
                const clamped = clamp(next, min, max);
                if (value === undefined) {
                    setInternalValue(clamped);
                }
                onValueChange?.(clamped);
                if (commit) {
                    onValueCommit?.(clamped);
                }
            },
            [max, min, onValueChange, onValueCommit, value]
        );

        const handlePointerMove = React.useCallback(
            (event: MouseEvent | TouchEvent) => {
                const track = trackRef.current;
                if (!track || disabled) return;
                const point = "touches" in event ? event.touches[0] : event;
                const rect = track.getBoundingClientRect();
                const ratio = (point.clientX - rect.left) / rect.width;
                const rawValue = min + ratio * (max - min);
                const stepped = snapToStep(rawValue, step, min);
                updateValue(stepped);
            },
            [disabled, max, min, step, updateValue]
        );

        const endPointer = React.useCallback(
            () => {
                if (!isDragging) return;
                setIsDragging(false);
                onValueCommit?.(currentValue);
            },
            [currentValue, isDragging, onValueCommit]
        );

        React.useEffect(() => {
            if (!isDragging) return;
            const move = (e: MouseEvent) => handlePointerMove(e);
            const touchMove = (e: TouchEvent) => handlePointerMove(e);
            const up = () => endPointer();
            document.addEventListener("mousemove", move);
            document.addEventListener("touchmove", touchMove);
            document.addEventListener("mouseup", up);
            document.addEventListener("touchend", up);
            document.addEventListener("touchcancel", up);
            return () => {
                document.removeEventListener("mousemove", move);
                document.removeEventListener("touchmove", touchMove);
                document.removeEventListener("mouseup", up);
                document.removeEventListener("touchend", up);
                document.removeEventListener("touchcancel", up);
            };
        }, [isDragging, handlePointerMove, endPointer]);

        const startDrag = (event: React.MouseEvent | React.TouchEvent) => {
            if (disabled) return;
            event.preventDefault();
            setIsDragging(true);
            if ("touches" in event && event.touches.length > 0) {
                handlePointerMove(event.nativeEvent as TouchEvent);
            } else {
                handlePointerMove(event.nativeEvent as MouseEvent);
            }
        };

        const handleKeyDown = (event: React.KeyboardEvent) => {
            if (disabled) return;
            const incrementKeys = ["ArrowRight", "ArrowUp"];
            const decrementKeys = ["ArrowLeft", "ArrowDown"];
            let delta = 0;
            if (incrementKeys.includes(event.key)) delta = step;
            if (decrementKeys.includes(event.key)) delta = -step;
            if (delta !== 0) {
                event.preventDefault();
                const nextVal = clamp(currentValue + delta, min, max);
                updateValue(nextVal, true);
            }
        };

        const percent = getPercent(currentValue);

        return (
            <div
                ref={ref}
                className={cn("relative flex w-full touch-none select-none items-center", className)}
                aria-disabled={disabled || undefined}
            >
                <div
                    ref={trackRef}
                    className={cn("relative h-1.5 w-full grow overflow-hidden rounded-full bg-surface-secondary", trackClassName)}
                    onMouseDown={startDrag}
                    onTouchStart={startDrag}
                >
                    <div
                        className={cn("absolute h-full bg-accent-blue", rangeClassName)}
                        style={{ width: `${percent}%` }}
                    />
                </div>

                <button
                    type="button"
                    role="slider"
                    aria-valuemin={min}
                    aria-valuemax={max}
                    aria-valuenow={currentValue}
                    aria-disabled={disabled || undefined}
                    tabIndex={disabled ? -1 : 0}
                    onKeyDown={handleKeyDown}
                    onMouseDown={startDrag}
                    onTouchStart={startDrag}
                    className={cn(
                        "absolute block h-6 w-6 -translate-x-1/2 rounded-full border border-border-primary/10 bg-white shadow-md ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:scale-105 transition-transform duration-200",
                        thumbClassName,
                        disabled && "pointer-events-none opacity-60"
                    )}
                    style={{ left: `${percent}%` }}
                />
            </div>
        );
    }
);
Slider.displayName = "Slider";

export { Slider };
