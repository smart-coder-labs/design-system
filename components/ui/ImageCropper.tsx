import React, { useState, useRef, useEffect, useCallback } from 'react';
import { Slider } from './Slider';
import { Button } from './Button';
import { RotateCcw, ZoomIn, Check, X, Grid3X3, Crop as CropIcon, RotateCw } from 'lucide-react';
import { cn } from '../../lib/utils';;

export interface ImageCropperProps {
    src: string;
    aspectRatio?: number; // e.g., 1, 16/9, 4/3. If undefined, free form (but for this implementation fixed crop area is easier, so maybe default to 1 or allow changing)
    onCrop: (croppedImage: string) => void;
    onCancel: () => void;
    className?: string;
}

interface Point {
    x: number;
    y: number;
}

export const ImageCropper: React.FC<ImageCropperProps> = ({
    src,
    aspectRatio = 1,
    onCrop,
    onCancel,
    className,
}) => {
    const [image, setImage] = useState<HTMLImageElement | null>(null);
    const [scale, setScale] = useState(1);
    const [initialScale, setInitialScale] = useState(1);
    const [rotation, setRotation] = useState(0);
    const [position, setPosition] = useState<Point>({ x: 0, y: 0 });
    const [isDragging, setIsDragging] = useState(false);
    const [dragStart, setDragStart] = useState<Point>({ x: 0, y: 0 });
    
    const containerRef = useRef<HTMLDivElement>(null);
    const canvasRef = useRef<HTMLCanvasElement>(null);

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
    const handleMouseDown = (e: React.MouseEvent) => {
        setIsDragging(true);
        setDragStart({ x: e.clientX - position.x, y: e.clientY - position.y });
    };

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!isDragging) return;
        e.preventDefault();
        setPosition({
            x: e.clientX - dragStart.x,
            y: e.clientY - dragStart.y,
        });
    };

    const handleMouseUp = () => {
        setIsDragging(false);
    };

    const handleTouchStart = (e: React.TouchEvent) => {
        setIsDragging(true);
        const touch = e.touches[0];
        setDragStart({ x: touch.clientX - position.x, y: touch.clientY - position.y });
    };

    const handleTouchMove = (e: React.TouchEvent) => {
        if (!isDragging) return;
        const touch = e.touches[0];
        setPosition({
            x: touch.clientX - dragStart.x,
            y: touch.clientY - dragStart.y,
        });
    };

    // Crop Logic
    const getCroppedImg = useCallback(() => {
        if (!image || !containerRef.current) return;

        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

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
        ctx.drawImage(
            image,
            -image.naturalWidth / 2,
            -image.naturalHeight / 2
        );

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

    return (
        <div className={cn("flex flex-col gap-4 w-full max-w-2xl mx-auto p-4 bg-surface-primary rounded-2xl shadow-sm border border-border-primary", className)}>
            {/* Header */}
            <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-text-primary flex items-center gap-2">
                    <CropIcon className="w-5 h-5" />
                    Edit Image
                </h3>
                <div className="flex gap-2">
                    <Button variant="ghost" size="sm" onClick={() => {
                        setScale(initialScale);
                        setRotation(0);
                        setPosition({ x: 0, y: 0 });
                    }}>
                        Reset
                    </Button>
                </div>
            </div>

            {/* Editor Area */}
            <div 
                className="relative w-full h-[400px] bg-[#1c1c1e] rounded-xl overflow-hidden cursor-move touch-none select-none flex items-center justify-center"
                ref={containerRef}
                onMouseDown={handleMouseDown}
                onMouseMove={handleMouseMove}
                onMouseUp={handleMouseUp}
                onMouseLeave={handleMouseUp}
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleMouseUp}
            >
                {/* Image Layer */}
                {image && (
                    <div
                        style={{
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
                        }}
                    >
                        <img 
                            src={src} 
                            alt="Edit" 
                            className="max-w-none pointer-events-none select-none"
                            draggable={false}
                        />
                    </div>
                )}

                {/* Overlay / Crop Box */}
                <div 
                    className="absolute pointer-events-none border-2 border-white shadow-[0_0_0_9999px_rgba(0,0,0,0.7)]"
                    style={{
                        width: 300,
                        height: 300 / aspectRatio,
                    }}
                >
                    {/* Grid Lines (Rule of Thirds) */}
                    <div className="absolute inset-0 flex flex-col">
                        <div className="flex-1 border-b border-white/30" />
                        <div className="flex-1 border-b border-white/30" />
                        <div className="flex-1" />
                    </div>
                    <div className="absolute inset-0 flex">
                        <div className="flex-1 border-r border-white/30" />
                        <div className="flex-1 border-r border-white/30" />
                        <div className="flex-1" />
                    </div>
                </div>
            </div>

            {/* Controls */}
            <div className="flex flex-col gap-4 px-2">
                {/* Zoom Control */}
                <div className="flex items-center gap-4">
                    <ZoomIn className="w-4 h-4 text-text-secondary" />
                    <Slider 
                        value={scale} 
                        min={0.1} 
                        max={3} 
                        step={0.01} 
                        onValueChange={(v) => setScale(v)}
                        className="flex-1"
                    />
                    <span className="text-xs font-mono w-12 text-right text-text-secondary">
                        {Math.round(scale * 100)}%
                    </span>
                </div>

                {/* Rotation Control */}
                <div className="flex items-center gap-4">
                    <RotateCw className="w-4 h-4 text-text-secondary" />
                    <Slider 
                        value={rotation} 
                        min={-180} 
                        max={180} 
                        step={1} 
                        onValueChange={(v) => setRotation(v)}
                        className="flex-1"
                    />
                    <span className="text-xs font-mono w-12 text-right text-text-secondary">
                        {rotation}°
                    </span>
                </div>
            </div>

            {/* Actions */}
            <div className="flex items-center justify-end gap-3 pt-6">
                <Button variant="ghost" onClick={onCancel}>
                    <X className="w-4 h-4 mr-2" />
                    Cancel
                </Button>
                <Button variant="primary" onClick={getCroppedImg}>
                    <Check className="w-4 h-4 mr-2" />
                    Crop Image
                </Button>
            </div>
        </div>
    );
};
