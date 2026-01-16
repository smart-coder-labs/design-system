import React, { useRef, useState, useEffect, useCallback } from 'react';
import { cn } from '../../lib/utils';;
import { Button } from './Button';
import { Eraser, Download, Undo } from 'lucide-react';

export interface SignaturePadProps {
    /** Width of the canvas in pixels (default: 100% of container) */
    width?: number;
    /** Height of the canvas in pixels (default: 200) */
    height?: number;
    /** Color of the pen stroke (default: #000000) */
    penColor?: string;
    /** Background color of the canvas (default: #FFFFFF) */
    backgroundColor?: string;
    /** Stroke width (default: 2) */
    strokeWidth?: number;
    /** Callback when drawing ends */
    onEnd?: (dataUrl: string) => void;
    /** Additional CSS classes */
    className?: string;
}

export const SignaturePad: React.FC<SignaturePadProps> = ({
    width,
    height = 200,
    penColor = '#000000',
    backgroundColor = '#FFFFFF',
    strokeWidth = 2,
    onEnd,
    className
}) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [isDrawing, setIsDrawing] = useState(false);
    const [hasSignature, setHasSignature] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);

    // Initialize canvas context
    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        ctx.lineCap = 'round';
        ctx.lineJoin = 'round';
        ctx.strokeStyle = penColor;
        ctx.lineWidth = strokeWidth;
        
        // Fill background
        ctx.fillStyle = backgroundColor;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
    }, [penColor, backgroundColor, strokeWidth]);

    // Handle resizing
    useEffect(() => {
        const handleResize = () => {
            if (containerRef.current && canvasRef.current && !width) {
                const containerWidth = containerRef.current.offsetWidth;
                const canvas = canvasRef.current;
                
                // Save current content
                const tempCanvas = document.createElement('canvas');
                const tempCtx = tempCanvas.getContext('2d');
                tempCanvas.width = canvas.width;
                tempCanvas.height = canvas.height;
                tempCtx?.drawImage(canvas, 0, 0);

                // Resize
                canvas.width = containerWidth;
                canvas.height = height;

                // Restore context settings
                const ctx = canvas.getContext('2d');
                if (ctx) {
                    ctx.lineCap = 'round';
                    ctx.lineJoin = 'round';
                    ctx.strokeStyle = penColor;
                    ctx.lineWidth = strokeWidth;
                    ctx.fillStyle = backgroundColor;
                    ctx.fillRect(0, 0, canvas.width, canvas.height);
                    // Restore content (optional, might look stretched or cropped)
                    // For a signature pad, usually clearing on resize is safer or just keeping it fixed
                    // Here we just re-fill background to avoid transparency issues
                }
            }
        };

        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [width, height, penColor, strokeWidth, backgroundColor]);

    const getCoordinates = (event: React.MouseEvent | React.TouchEvent) => {
        const canvas = canvasRef.current;
        if (!canvas) return { x: 0, y: 0 };

        const rect = canvas.getBoundingClientRect();
        let clientX, clientY;

        if ('touches' in event) {
            clientX = event.touches[0].clientX;
            clientY = event.touches[0].clientY;
        } else {
            clientX = (event as React.MouseEvent).clientX;
            clientY = (event as React.MouseEvent).clientY;
        }

        return {
            x: clientX - rect.left,
            y: clientY - rect.top
        };
    };

    const startDrawing = (e: React.MouseEvent | React.TouchEvent) => {
        e.preventDefault(); // Prevent scrolling on touch
        setIsDrawing(true);
        const { x, y } = getCoordinates(e);
        
        const ctx = canvasRef.current?.getContext('2d');
        if (ctx) {
            ctx.beginPath();
            ctx.moveTo(x, y);
        }
    };

    const draw = (e: React.MouseEvent | React.TouchEvent) => {
        e.preventDefault();
        if (!isDrawing) return;

        const { x, y } = getCoordinates(e);
        const ctx = canvasRef.current?.getContext('2d');
        if (ctx) {
            ctx.lineTo(x, y);
            ctx.stroke();
            if (!hasSignature) setHasSignature(true);
        }
    };

    const stopDrawing = () => {
        if (isDrawing) {
            setIsDrawing(false);
            const canvas = canvasRef.current;
            if (canvas && onEnd) {
                onEnd(canvas.toDataURL());
            }
        }
    };

    const clear = () => {
        const canvas = canvasRef.current;
        const ctx = canvas?.getContext('2d');
        if (canvas && ctx) {
            ctx.fillStyle = backgroundColor;
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            setHasSignature(false);
        }
    };

    const download = () => {
        const canvas = canvasRef.current;
        if (canvas) {
            const url = canvas.toDataURL('image/png');
            const link = document.createElement('a');
            link.download = `signature-${Date.now()}.png`;
            link.href = url;
            link.click();
        }
    };

    return (
        <div className={cn("flex flex-col gap-4 w-full max-w-md", className)} ref={containerRef}>
            <div className="relative rounded-xl overflow-hidden border border-border-primary shadow-sm bg-white touch-none">
                <canvas
                    ref={canvasRef}
                    width={width || 400}
                    height={height}
                    className="cursor-crosshair block"
                    onMouseDown={startDrawing}
                    onMouseMove={draw}
                    onMouseUp={stopDrawing}
                    onMouseLeave={stopDrawing}
                    onTouchStart={startDrawing}
                    onTouchMove={draw}
                    onTouchEnd={stopDrawing}
                />
                {!hasSignature && (
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none text-text-tertiary/30 text-2xl font-handwriting select-none">
                        Sign here
                    </div>
                )}
            </div>

            <div className="flex items-center justify-between gap-2">
                <Button
                    variant="ghost"
                    size="sm"
                    onClick={clear}
                    disabled={!hasSignature}
                    className="text-status-error hover:bg-status-error/10 hover:text-status-error"
                >
                    <Eraser className="w-4 h-4 mr-2" />
                    Clear
                </Button>
                
                <Button
                    variant="outline"
                    size="sm"
                    onClick={download}
                    disabled={!hasSignature}
                >
                    <Download className="w-4 h-4 mr-2" />
                    Save
                </Button>
            </div>
        </div>
    );
};
