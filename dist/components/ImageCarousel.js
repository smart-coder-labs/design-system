import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '../lib/utils';
import { Button } from './Button';
export const ImageCarousel = ({ images, autoPlay = false, interval = 5000, showArrows = true, showIndicators = true, effect = 'slide', className, height = '400px', }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [direction, setDirection] = useState(0);
    const [isPaused, setIsPaused] = useState(false);
    const paginate = useCallback((newDirection) => {
        setDirection(newDirection);
        setCurrentIndex((prevIndex) => {
            let nextIndex = prevIndex + newDirection;
            if (nextIndex < 0)
                nextIndex = images.length - 1;
            if (nextIndex >= images.length)
                nextIndex = 0;
            return nextIndex;
        });
    }, [images.length]);
    useEffect(() => {
        if (autoPlay && !isPaused) {
            const timer = setInterval(() => {
                paginate(1);
            }, interval);
            return () => clearInterval(timer);
        }
    }, [autoPlay, interval, isPaused, paginate]);
    const variants = {
        enter: (direction) => ({
            x: effect === 'slide' ? (direction > 0 ? '100%' : '-100%') : 0,
            opacity: effect === 'fade' ? 0 : 1,
        }),
        center: {
            zIndex: 1,
            x: 0,
            opacity: 1,
        },
        exit: (direction) => ({
            zIndex: 0,
            x: effect === 'slide' ? (direction < 0 ? '100%' : '-100%') : 0,
            opacity: effect === 'fade' ? 0 : 1,
        }),
    };
    const swipeConfidenceThreshold = 10000;
    const swipePower = (offset, velocity) => {
        return Math.abs(offset) * velocity;
    };
    if (!images || images.length === 0) {
        return (_jsx("div", { className: cn("flex items-center justify-center bg-surface-secondary rounded-2xl border border-border-primary", className), style: { height }, children: _jsx("span", { className: "text-text-secondary", children: "No images to display" }) }));
    }
    return (_jsxs("div", { className: cn("relative overflow-hidden rounded-2xl bg-gray-900 group w-full", className), style: { height, minHeight: typeof height === 'number' ? `${height}px` : height }, onMouseEnter: () => setIsPaused(true), onMouseLeave: () => setIsPaused(false), children: [_jsx(AnimatePresence, { initial: false, custom: direction, children: _jsxs(motion.div, { custom: direction, variants: variants, initial: "enter", animate: "center", exit: "exit", transition: {
                        x: { type: "spring", stiffness: 300, damping: 30 },
                        opacity: { duration: 0.2 }
                    }, drag: effect === 'slide' ? "x" : false, dragConstraints: { left: 0, right: 0 }, dragElastic: 1, onDragEnd: (e, { offset, velocity }) => {
                        const swipe = swipePower(offset.x, velocity.x);
                        if (swipe < -swipeConfidenceThreshold) {
                            paginate(1);
                        }
                        else if (swipe > swipeConfidenceThreshold) {
                            paginate(-1);
                        }
                    }, className: "absolute inset-0 w-full h-full flex items-center justify-center bg-black", children: [_jsx("img", { src: images[currentIndex]?.src, alt: images[currentIndex]?.alt, className: "w-full h-full object-cover pointer-events-none", onError: (e) => {
                                console.error("Image failed to load", images[currentIndex]?.src);
                                e.currentTarget.style.display = 'none';
                            } }), images[currentIndex]?.caption && (_jsx("div", { className: "absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent", children: _jsx("p", { className: "text-white text-lg font-medium", children: images[currentIndex].caption }) }))] }, currentIndex) }), showArrows && (_jsxs(_Fragment, { children: [_jsx("div", { className: "absolute left-4 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-10", children: _jsx(Button, { variant: "ghost", size: "sm", className: "h-10 w-10 rounded-full bg-black/20 hover:bg-black/40 text-white backdrop-blur-sm p-0", onClick: () => paginate(-1), children: _jsx(ChevronLeft, { className: "w-6 h-6" }) }) }), _jsx("div", { className: "absolute right-4 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-10", children: _jsx(Button, { variant: "ghost", size: "sm", className: "h-10 w-10 rounded-full bg-black/20 hover:bg-black/40 text-white backdrop-blur-sm p-0", onClick: () => paginate(1), children: _jsx(ChevronRight, { className: "w-6 h-6" }) }) })] })), showIndicators && (_jsx("div", { className: "absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10", children: images.map((_, index) => (_jsx("button", { onClick: () => {
                        setDirection(index > currentIndex ? 1 : -1);
                        setCurrentIndex(index);
                    }, className: cn("w-2 h-2 rounded-full transition-all duration-300", index === currentIndex
                        ? "bg-white w-6"
                        : "bg-white/50 hover:bg-white/80"), "aria-label": `Go to slide ${index + 1}` }, index))) }))] }));
};
//# sourceMappingURL=ImageCarousel.js.map