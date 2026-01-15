"use client";

import * as React from "react";
import { cn } from "../../lib/utils";

type ScrollAreaContextValue = {
    viewportRef: React.MutableRefObject<HTMLDivElement | null>;
};

const ScrollAreaContext = React.createContext<ScrollAreaContextValue | null>(null);

function useScrollAreaContext() {
    const context = React.useContext(ScrollAreaContext);
    if (!context) {
        throw new Error("ScrollArea components must be used within ScrollArea");
    }
    return context;
}

type ScrollAreaProps = React.HTMLAttributes<HTMLDivElement> & {
    children: React.ReactNode;
};

const ScrollArea = React.forwardRef<HTMLDivElement, ScrollAreaProps>(
    ({ className, children, ...props }, ref) => {
        const viewportRef = React.useRef<HTMLDivElement | null>(null);

        return (
            <ScrollAreaContext.Provider value={{ viewportRef }}>
                <div ref={ref} className={cn("relative overflow-hidden", className)} {...props}>
                    <div ref={viewportRef} className="h-full w-full rounded-[inherit] overflow-auto">
                        {children}
                    </div>
                    <ScrollBar orientation="vertical" />
                    <ScrollBar orientation="horizontal" />
                </div>
            </ScrollAreaContext.Provider>
        );
    }
);
ScrollArea.displayName = "ScrollArea";

type ScrollBarProps = {
    orientation?: "vertical" | "horizontal";
    className?: string;
};

const ScrollBar = React.forwardRef<HTMLDivElement, ScrollBarProps>(
    ({ className, orientation = "vertical" }, ref) => {
        const { viewportRef } = useScrollAreaContext();
        const trackRef = React.useRef<HTMLDivElement | null>(null);
        const thumbRef = React.useRef<HTMLDivElement | null>(null);

        const isVertical = orientation === "vertical";

        const syncThumb = React.useCallback(() => {
            const viewport = viewportRef.current;
            const track = trackRef.current;
            const thumb = thumbRef.current;
            if (!viewport || !track || !thumb) return;

            const contentSize = isVertical ? viewport.scrollHeight : viewport.scrollWidth;
            const viewportSize = isVertical ? viewport.clientHeight : viewport.clientWidth;
            const scrollPos = isVertical ? viewport.scrollTop : viewport.scrollLeft;
            const trackSize = isVertical ? track.clientHeight : track.clientWidth;

            if (contentSize <= viewportSize) {
                thumb.style.display = "none";
                return;
            }

            thumb.style.display = "block";
            const thumbSize = Math.max((viewportSize / contentSize) * trackSize, 24);
            const maxOffset = trackSize - thumbSize;
            const offset = Math.min(maxOffset, (scrollPos / (contentSize - viewportSize)) * maxOffset);

            if (isVertical) {
                thumb.style.height = `${thumbSize}px`;
                thumb.style.transform = `translateY(${offset}px)`;
            } else {
                thumb.style.width = `${thumbSize}px`;
                thumb.style.transform = `translateX(${offset}px)`;
            }
        }, [isVertical, viewportRef]);

        React.useEffect(() => {
            const viewport = viewportRef.current;
            if (!viewport) return;
            syncThumb();

            const handleScroll = () => syncThumb();
            const handleResize = () => syncThumb();

            viewport.addEventListener("scroll", handleScroll, { passive: true });
            window.addEventListener("resize", handleResize);

            return () => {
                viewport.removeEventListener("scroll", handleScroll);
                window.removeEventListener("resize", handleResize);
            };
        }, [syncThumb, viewportRef]);

        React.useEffect(() => {
            syncThumb();
        }, [syncThumb]);

        const handleTrackClick = (event: React.MouseEvent) => {
            event.preventDefault();
            const viewport = viewportRef.current;
            const track = trackRef.current;
            const thumb = thumbRef.current;
            if (!viewport || !track || !thumb) return;

            const rect = track.getBoundingClientRect();
            const thumbRect = thumb.getBoundingClientRect();
            const clickPos = isVertical ? event.clientY - rect.top : event.clientX - rect.left;
            const thumbSize = isVertical ? thumbRect.height : thumbRect.width;
            const viewportSize = isVertical ? viewport.clientHeight : viewport.clientWidth;
            const contentSize = isVertical ? viewport.scrollHeight : viewport.scrollWidth;
            const maxScroll = contentSize - viewportSize;
            const trackSize = isVertical ? track.clientHeight : track.clientWidth;

            const percent = (clickPos - thumbSize / 2) / (trackSize - thumbSize);
            const nextScroll = Math.max(0, Math.min(1, percent)) * maxScroll;

            if (isVertical) viewport.scrollTop = nextScroll;
            else viewport.scrollLeft = nextScroll;
        };

        const handleThumbDrag = (event: React.MouseEvent) => {
            event.preventDefault();
            const viewport = viewportRef.current;
            const track = trackRef.current;
            const thumb = thumbRef.current;
            if (!viewport || !track || !thumb) return;

            const startPos = isVertical ? event.clientY : event.clientX;
            const startScroll = isVertical ? viewport.scrollTop : viewport.scrollLeft;
            const trackSize = isVertical ? track.clientHeight : track.clientWidth;
            const thumbSize = isVertical ? thumb.clientHeight : thumb.clientWidth;
            const contentSize = isVertical ? viewport.scrollHeight : viewport.scrollWidth;
            const viewportSize = isVertical ? viewport.clientHeight : viewport.clientWidth;
            const maxScroll = Math.max(0, contentSize - viewportSize);
            const maxOffset = Math.max(1, trackSize - thumbSize);

            const onMove = (moveEvent: MouseEvent) => {
                const currentPos = isVertical ? moveEvent.clientY : moveEvent.clientX;
                const delta = currentPos - startPos;
                const ratio = delta / maxOffset;
                const nextScroll = Math.max(0, Math.min(maxScroll, startScroll + ratio * maxScroll));
                if (isVertical) viewport.scrollTop = nextScroll;
                else viewport.scrollLeft = nextScroll;
            };

            const onUp = () => {
                document.removeEventListener("mousemove", onMove);
                document.removeEventListener("mouseup", onUp);
            };

            document.addEventListener("mousemove", onMove);
            document.addEventListener("mouseup", onUp);
        };

        return (
            <div
                ref={ref}
                role="presentation"
                className={cn(
                    "absolute flex touch-none select-none transition-colors",
                    isVertical
                        ? "right-0 top-0 h-full w-2.5 p-[1px]"
                        : "left-0 bottom-0 w-full h-2.5 p-[1px] flex-col",
                    className
                )}
                onMouseDown={handleTrackClick}
            >
                <div
                    ref={trackRef}
                    className={cn(
                        "relative flex-1 rounded-full bg-transparent",
                        isVertical ? "w-full" : "h-full"
                    )}
                >
                    <div
                        ref={thumbRef}
                        onMouseDown={(e) => {
                            e.stopPropagation();
                            handleThumbDrag(e);
                        }}
                        className="absolute rounded-full bg-border-primary hover:bg-text-tertiary transition-colors"
                        style={
                            isVertical
                                ? { width: "100%", top: 0, height: 24 }
                                : { height: "100%", left: 0, width: 24 }
                        }
                    />
                </div>
            </div>
        );
    }
);
ScrollBar.displayName = "ScrollBar";

export { ScrollArea, ScrollBar };
