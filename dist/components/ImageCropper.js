import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useRef, useEffect, useCallback } from 'react';
import { Slider } from './Slider';
import { Button } from './Button';
import { ZoomIn, Check, X, Crop as CropIcon, RotateCw } from 'lucide-react';
import { cn } from '../lib/utils';
export const ImageCropper = ({ src, aspectRatio = 1, onCrop, onCancel, className, }) => {
    const [image, setImage] = useState(null);
    const [scale, setScale] = useState(1);
    const [initialScale, setInitialScale] = useState(1);
    const [rotation, setRotation] = useState(0);
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [isDragging, setIsDragging] = useState(false);
    const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
    const containerRef = useRef(null);
    const canvasRef = useRef(null);
    // Load image
    useEffect(() => {
        const img = new Image();
        img.src = src;
        img.crossOrigin = 'anonymous';
        img.onload = () => {
            setImage(img);
            // Calculate initial scale to fit the image inside the crop area
            const cropWidth = 300;
            const cropHeight = 300 / aspectRatio;
            // Calculate scale to cover the crop area
            const scaleW = cropWidth / img.naturalWidth;
            const scaleH = cropHeight / img.naturalHeight;
            // Use the larger scale to ensure it covers the crop area (like 'object-cover')
            const calculatedScale = Math.max(scaleW, scaleH);
            setInitialScale(calculatedScale);
            setScale(calculatedScale);
        };
    }, [src, aspectRatio]);
    // Handle Dragging
    const handleMouseDown = (e) => {
        setIsDragging(true);
        setDragStart({ x: e.clientX - position.x, y: e.clientY - position.y });
    };
    const handleMouseMove = (e) => {
        if (!isDragging)
            return;
        e.preventDefault();
        setPosition({
            x: e.clientX - dragStart.x,
            y: e.clientY - dragStart.y,
        });
    };
    const handleMouseUp = () => {
        setIsDragging(false);
    };
    const handleTouchStart = (e) => {
        setIsDragging(true);
        const touch = e.touches[0];
        setDragStart({ x: touch.clientX - position.x, y: touch.clientY - position.y });
    };
    const handleTouchMove = (e) => {
        if (!isDragging)
            return;
        const touch = e.touches[0];
        setPosition({
            x: touch.clientX - dragStart.x,
            y: touch.clientY - dragStart.y,
        });
    };
    // Crop Logic
    const getCroppedImg = useCallback(() => {
        if (!image || !containerRef.current)
            return;
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        if (!ctx)
            return;
        // We need to calculate the crop area relative to the image.
        // For simplicity in this custom implementation, let's assume the "Crop Area" is the visible viewport of the container.
        // Or better, a fixed box in the center of the container.
        // Let's define the crop box size. 
        // For this component, let's say the crop box is 300x300 (or based on aspect ratio)
        const cropWidth = 300;
        const cropHeight = 300 / aspectRatio;
        canvas.width = cropWidth;
        canvas.height = cropHeight;
        // Fill with black (optional, for transparency)
        // ctx.fillStyle = 'black';
        // ctx.fillRect(0, 0, canvas.width, canvas.height);
        // Calculate the transform
        // We want to draw the image such that the part under the crop box is drawn onto the canvas.
        // 1. Move origin to center of canvas
        ctx.translate(canvas.width / 2, canvas.height / 2);
        // 2. Apply rotation
        ctx.rotate((rotation * Math.PI) / 180);
        // 3. Apply scale
        ctx.scale(scale, scale);
        // 4. Draw image centered at the calculated position
        // The 'position' state tracks the translation of the image in the UI.
        // If position is (0,0), the image center is at the container center.
        // So we draw the image at (position.x, position.y) relative to the center.
        // Note: The position in UI is pixels.
        ctx.translate(position.x, position.y);
        // Draw image centered
        ctx.drawImage(image, -image.naturalWidth / 2, -image.naturalHeight / 2);
        const base64 = canvas.toDataURL('image/jpeg', 0.9);
        onCrop(base64);
    }, [image, scale, rotation, position, aspectRatio, onCrop]);
    // Real-time crop update
    useEffect(() => {
        const timeoutId = setTimeout(() => {
            if (image) {
                getCroppedImg();
            }
        }, 100);
        return () => clearTimeout(timeoutId);
    }, [image, scale, rotation, position, getCroppedImg]);
    return (_jsxs("div", { className: cn("flex flex-col gap-4 w-full max-w-2xl mx-auto p-4 bg-surface-primary rounded-2xl shadow-sm border border-border-primary", className), children: [_jsxs("div", { className: "flex items-center justify-between", children: [_jsxs("h3", { className: "text-lg font-semibold text-text-primary flex items-center gap-2", children: [_jsx(CropIcon, { className: "w-5 h-5" }), "Edit Image"] }), _jsx("div", { className: "flex gap-2", children: _jsx(Button, { variant: "ghost", size: "sm", onClick: () => {
                                setScale(initialScale);
                                setRotation(0);
                                setPosition({ x: 0, y: 0 });
                            }, children: "Reset" }) })] }), _jsxs("div", { className: "relative w-full h-[400px] bg-[#1c1c1e] rounded-xl overflow-hidden cursor-move touch-none select-none flex items-center justify-center", ref: containerRef, onMouseDown: handleMouseDown, onMouseMove: handleMouseMove, onMouseUp: handleMouseUp, onMouseLeave: handleMouseUp, onTouchStart: handleTouchStart, onTouchMove: handleTouchMove, onTouchEnd: handleMouseUp, children: [image && (_jsx("div", { style: {
                            transform: `translate(${position.x}px, ${position.y}px) rotate(${rotation}deg) scale(${scale})`,
                            transformOrigin: 'center',
                            width: image.naturalWidth,
                            height: image.naturalHeight,
                            position: 'absolute',
                            // We don't set top/left because we center it with flex in parent, 
                            // but actually flex center might fight with absolute.
                            // Let's rely on the transform for positioning relative to center.
                            // To do that, we need it to be centered initially.
                            left: '50%',
                            top: '50%',
                            marginLeft: -image.naturalWidth / 2,
                            marginTop: -image.naturalHeight / 2,
                        }, children: _jsx("img", { src: src, alt: "Edit", className: "max-w-none pointer-events-none select-none", draggable: false }) })), _jsxs("div", { className: "absolute pointer-events-none border-2 border-white shadow-[0_0_0_9999px_rgba(0,0,0,0.7)]", style: {
                            width: 300,
                            height: 300 / aspectRatio,
                        }, children: [_jsxs("div", { className: "absolute inset-0 flex flex-col", children: [_jsx("div", { className: "flex-1 border-b border-white/30" }), _jsx("div", { className: "flex-1 border-b border-white/30" }), _jsx("div", { className: "flex-1" })] }), _jsxs("div", { className: "absolute inset-0 flex", children: [_jsx("div", { className: "flex-1 border-r border-white/30" }), _jsx("div", { className: "flex-1 border-r border-white/30" }), _jsx("div", { className: "flex-1" })] })] })] }), _jsxs("div", { className: "flex flex-col gap-4 px-2", children: [_jsxs("div", { className: "flex items-center gap-4", children: [_jsx(ZoomIn, { className: "w-4 h-4 text-text-secondary" }), _jsx(Slider, { value: scale, min: 0.1, max: 3, step: 0.01, onValueChange: (v) => setScale(v), className: "flex-1" }), _jsxs("span", { className: "text-xs font-mono w-12 text-right text-text-secondary", children: [Math.round(scale * 100), "%"] })] }), _jsxs("div", { className: "flex items-center gap-4", children: [_jsx(RotateCw, { className: "w-4 h-4 text-text-secondary" }), _jsx(Slider, { value: rotation, min: -180, max: 180, step: 1, onValueChange: (v) => setRotation(v), className: "flex-1" }), _jsxs("span", { className: "text-xs font-mono w-12 text-right text-text-secondary", children: [rotation, "\u00B0"] })] })] }), _jsxs("div", { className: "flex items-center justify-end gap-3 pt-6", children: [_jsxs(Button, { variant: "ghost", onClick: onCancel, children: [_jsx(X, { className: "w-4 h-4 mr-2" }), "Cancel"] }), _jsxs(Button, { variant: "primary", onClick: getCroppedImg, children: [_jsx(Check, { className: "w-4 h-4 mr-2" }), "Crop Image"] })] })] }));
};
//# sourceMappingURL=ImageCropper.js.map