import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useState } from 'react';
import { motion } from 'framer-motion';
import { cn } from '../lib/utils';
import { Lightbox } from './Lightbox';
import { Maximize2, ImageOff } from 'lucide-react';
const GalleryItem = ({ image, index, aspectRatio, getAspectRatioClass, onClick }) => {
    const [hasError, setHasError] = useState(false);
    return (_jsxs(motion.div, { layoutId: `gallery-image-${index}`, className: cn("group relative overflow-hidden rounded-xl bg-surface-secondary cursor-zoom-in", getAspectRatioClass()), onClick: onClick, whileHover: { scale: 1.02 }, transition: { type: "spring", stiffness: 400, damping: 30 }, children: [hasError ? (_jsxs("div", { className: "w-full h-full flex flex-col items-center justify-center bg-surface-tertiary text-text-secondary p-4 text-center select-none", children: [_jsx(ImageOff, { className: "w-8 h-8 mb-2 opacity-50" }), _jsx("span", { className: "text-xs font-medium opacity-70 truncate max-w-full px-2", children: image.alt || "Image not found" })] })) : (_jsx("img", { src: image.src, alt: image.alt || `Gallery image ${index + 1}`, className: cn("w-full h-full object-cover transition-transform duration-500 group-hover:scale-110", aspectRatio === 'auto' ? "h-auto" : ""), loading: "lazy", onError: () => setHasError(true) })), !hasError && (_jsx("div", { className: "absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100", children: _jsx("div", { className: "bg-black/50 backdrop-blur-sm p-2 rounded-full text-white", children: _jsx(Maximize2, { className: "w-5 h-5" }) }) })), image.caption && !hasError && (_jsx("div", { className: "absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-2 group-hover:translate-y-0", children: _jsx("p", { className: "text-white text-xs font-medium truncate", children: image.caption }) }))] }));
};
export const Gallery = ({ images, columns = 3, gap = 16, aspectRatio = 'square', className, }) => {
    const [lightboxOpen, setLightboxOpen] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);
    const openLightbox = (index) => {
        setCurrentIndex(index);
        setLightboxOpen(true);
    };
    const getAspectRatioClass = () => {
        switch (aspectRatio) {
            case 'square': return 'aspect-square';
            case 'video': return 'aspect-video';
            case 'portrait': return 'aspect-[3/4]';
            case 'auto': return '';
            default: return 'aspect-square';
        }
    };
    return (_jsxs(_Fragment, { children: [_jsx("div", { className: cn("grid", className), style: {
                    gridTemplateColumns: `repeat(auto-fill, minmax(min(100%, ${100 / columns}% - ${gap}px), 1fr))`,
                    gap: `${gap}px`
                }, children: images.map((image, index) => (_jsx(GalleryItem, { image: image, index: index, aspectRatio: aspectRatio, getAspectRatioClass: getAspectRatioClass, onClick: () => openLightbox(index) }, index))) }), _jsx(Lightbox, { isOpen: lightboxOpen, images: images, currentIndex: currentIndex, onClose: () => setLightboxOpen(false), onIndexChange: setCurrentIndex })] }));
};
//# sourceMappingURL=Gallery.js.map