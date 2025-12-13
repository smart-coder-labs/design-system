import { jsxs as _jsxs, jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
import { useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, Download } from 'lucide-react';
import { cn } from '../lib/utils';
import { Button } from './Button';
export const Lightbox = ({ isOpen, images, currentIndex, onClose, onNext, onPrev, onIndexChange, className, }) => {
    // Handle keyboard navigation
    useEffect(() => {
        if (!isOpen)
            return;
        const handleKeyDown = (e) => {
            if (e.key === 'Escape')
                onClose();
            if (e.key === 'ArrowRight')
                handleNext();
            if (e.key === 'ArrowLeft')
                handlePrev();
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [isOpen, currentIndex, onClose]);
    // Lock body scroll
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        }
        else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);
    const handleNext = useCallback(() => {
        if (onNext) {
            onNext();
        }
        else if (onIndexChange) {
            onIndexChange((currentIndex + 1) % images.length);
        }
    }, [currentIndex, images.length, onNext, onIndexChange]);
    const handlePrev = useCallback(() => {
        if (onPrev) {
            onPrev();
        }
        else if (onIndexChange) {
            onIndexChange((currentIndex - 1 + images.length) % images.length);
        }
    }, [currentIndex, images.length, onPrev, onIndexChange]);
    const currentImage = images[currentIndex];
    return (_jsx(AnimatePresence, { children: isOpen && (_jsxs(motion.div, { initial: { opacity: 0 }, animate: { opacity: 1 }, exit: { opacity: 0 }, transition: { duration: 0.2 }, className: cn("fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-sm", className), onClick: onClose, children: [_jsxs("div", { className: "absolute top-0 left-0 right-0 p-4 flex justify-between items-center z-50 bg-gradient-to-b from-black/50 to-transparent", onClick: (e) => e.stopPropagation(), children: [_jsxs("div", { className: "text-white/80 text-sm font-medium", children: [currentIndex + 1, " / ", images.length] }), _jsxs("div", { className: "flex items-center gap-2", children: [_jsx(Button, { variant: "ghost", size: "sm", className: "text-white/80 hover:text-white hover:bg-white/10", onClick: () => window.open(currentImage.src, '_blank'), children: _jsx(Download, { className: "w-5 h-5" }) }), _jsx(Button, { variant: "ghost", size: "sm", className: "text-white/80 hover:text-white hover:bg-white/10", onClick: onClose, children: _jsx(X, { className: "w-6 h-6" }) })] })] }), images.length > 1 && (_jsxs(_Fragment, { children: [_jsx(Button, { variant: "ghost", className: "absolute left-4 top-1/2 -translate-y-1/2 text-white/80 hover:text-white hover:bg-white/10 rounded-full p-2 h-12 w-12 z-50", onClick: (e) => {
                                e.stopPropagation();
                                handlePrev();
                            }, children: _jsx(ChevronLeft, { className: "w-8 h-8" }) }), _jsx(Button, { variant: "ghost", className: "absolute right-4 top-1/2 -translate-y-1/2 text-white/80 hover:text-white hover:bg-white/10 rounded-full p-2 h-12 w-12 z-50", onClick: (e) => {
                                e.stopPropagation();
                                handleNext();
                            }, children: _jsx(ChevronRight, { className: "w-8 h-8" }) })] })), _jsxs("div", { className: "relative w-full h-full flex items-center justify-center p-4 md:p-12", onClick: (e) => e.stopPropagation(), children: [_jsx(AnimatePresence, { mode: "wait", children: _jsx(motion.img, { src: currentImage.src, alt: currentImage.alt || `Image ${currentIndex + 1}`, initial: { opacity: 0, scale: 0.9 }, animate: { opacity: 1, scale: 1 }, exit: { opacity: 0, scale: 0.9 }, transition: { type: "spring", stiffness: 300, damping: 30 }, className: "max-w-full max-h-full object-contain shadow-2xl rounded-sm select-none", draggable: false }, currentIndex) }), currentImage.caption && (_jsx("div", { className: "absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent text-center", children: _jsx("p", { className: "text-white text-lg font-medium max-w-3xl mx-auto", children: currentImage.caption }) }))] })] })) }));
};
//# sourceMappingURL=Lightbox.js.map