"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import * as React from "react";
import { cn } from "../lib/utils";
function clamp(value, min, max) {
    return Math.min(Math.max(value, min), max);
}
function snapToStep(value, step, min) {
    if (step <= 0)
        return value;
    const snapped = Math.round((value - min) / step) * step + min;
    return snapped;
}
const RangeSlider = React.forwardRef(({ value, defaultValue, min = 0, max = 100, step = 1, disabled = false, onValueChange, onValueCommit, className, trackClassName, rangeClassName, thumbClassName, }, ref) => {
    const clampPair = React.useCallback((val) => {
        const first = clamp(val[0], min, max);
        const second = clamp(val[1], min, max);
        const lo = Math.min(first, second);
        const hi = Math.max(first, second);
        return [lo, hi];
    }, [min, max]);
    const [internalValue, setInternalValue] = React.useState(() => {
        const initial = defaultValue ?? [min, max];
        return clampPair(initial);
    });
    const currentValue = value ? clampPair(value) : internalValue;
    const trackRef = React.useRef(null);
    const [activeThumb, setActiveThumb] = React.useState(null);
    const updateValue = React.useCallback((next, commit) => {
        const clamped = clampPair(next);
        if (!value) {
            setInternalValue(clamped);
        }
        onValueChange?.(clamped);
        if (commit) {
            onValueCommit?.(clamped);
        }
    }, [clampPair, onValueChange, onValueCommit, value]);
    const getPercent = (val) => ((val - min) / (max - min)) * 100;
    const handlePointerMove = React.useCallback((event) => {
        if (activeThumb === null || disabled)
            return;
        const point = "touches" in event ? event.touches[0] : event;
        const track = trackRef.current;
        if (!track)
            return;
        const rect = track.getBoundingClientRect();
        const ratio = (point.clientX - rect.left) / rect.width;
        const rawValue = min + ratio * (max - min);
        const stepped = snapToStep(rawValue, step, min);
        const clamped = clamp(stepped, min, max);
        const next = activeThumb === 0 ? [clamped, currentValue[1]] : [currentValue[0], clamped];
        updateValue(next);
    }, [activeThumb, currentValue, disabled, max, min, step, updateValue]);
    const endPointer = React.useCallback(() => {
        if (activeThumb === null)
            return;
        setActiveThumb(null);
        onValueCommit?.(currentValue);
    }, [activeThumb, currentValue, onValueCommit]);
    React.useEffect(() => {
        if (activeThumb === null)
            return;
        const move = (e) => handlePointerMove(e);
        const touchMove = (e) => handlePointerMove(e);
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
    }, [activeThumb, handlePointerMove, endPointer]);
    const startDrag = (index) => (event) => {
        if (disabled)
            return;
        event.preventDefault();
        setActiveThumb(index);
        if ("touches" in event && event.touches.length > 0) {
            handlePointerMove(event.nativeEvent);
        }
        else {
            handlePointerMove(event.nativeEvent);
        }
    };
    const handleKeyDown = (index) => (event) => {
        if (disabled)
            return;
        const incrementKeys = ["ArrowRight", "ArrowUp"];
        const decrementKeys = ["ArrowLeft", "ArrowDown"];
        let delta = 0;
        if (incrementKeys.includes(event.key))
            delta = step;
        if (decrementKeys.includes(event.key))
            delta = -step;
        if (delta !== 0) {
            event.preventDefault();
            const nextVal = clamp(currentValue[index] + delta, min, max);
            const next = index === 0 ? [nextVal, currentValue[1]] : [currentValue[0], nextVal];
            updateValue(next, true);
        }
    };
    const percentMin = getPercent(currentValue[0]);
    const percentMax = getPercent(currentValue[1]);
    return (_jsxs("div", { ref: ref, className: cn("relative flex w-full touch-none select-none items-center", className), "aria-disabled": disabled || undefined, children: [_jsx("div", { ref: trackRef, className: cn("relative h-1.5 w-full grow overflow-hidden rounded-full bg-surface-secondary", trackClassName), children: _jsx("div", { className: cn("absolute h-full bg-accent-blue", rangeClassName), style: { left: `${percentMin}%`, width: `${percentMax - percentMin}%` } }) }), [0, 1].map((index) => {
                const valueForThumb = currentValue[index];
                const percent = getPercent(valueForThumb);
                const thumbMin = index === 0 ? min : currentValue[0];
                const thumbMax = index === 0 ? currentValue[1] : max;
                return (_jsx("button", { type: "button", role: "slider", "aria-valuemin": thumbMin, "aria-valuemax": thumbMax, "aria-valuenow": valueForThumb, "aria-disabled": disabled || undefined, tabIndex: disabled ? -1 : 0, onKeyDown: handleKeyDown(index), onMouseDown: startDrag(index), onTouchStart: startDrag(index), className: cn("absolute block h-6 w-6 -translate-x-1/2 rounded-full border border-border-primary/10 bg-white shadow-md ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:scale-105 transition-transform duration-200", thumbClassName, disabled && "pointer-events-none opacity-60"), style: { left: `${percent}%` } }, index));
            })] }));
});
RangeSlider.displayName = "RangeSlider";
export { RangeSlider };
//# sourceMappingURL=RangeSlider.js.map