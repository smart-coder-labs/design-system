import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useRef, useState, useEffect } from 'react';
import { cn } from '../lib/utils';
import { Button } from './Button';
import { Eraser, Download } from 'lucide-react';
export const SignaturePad = ({ width, height = 200, penColor = '#000000', backgroundColor = '#FFFFFF', strokeWidth = 2, onEnd, className }) => {
    const canvasRef = useRef(null);
    const [isDrawing, setIsDrawing] = useState(false);
    const [hasSignature, setHasSignature] = useState(false);
    const containerRef = useRef(null);
    // Initialize canvas context
    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas)
            return;
        const ctx = canvas.getContext('2d');
        if (!ctx)
            return;
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
    const getCoordinates = (event) => {
        const canvas = canvasRef.current;
        if (!canvas)
            return { x: 0, y: 0 };
        const rect = canvas.getBoundingClientRect();
        let clientX, clientY;
        if ('touches' in event) {
            clientX = event.touches[0].clientX;
            clientY = event.touches[0].clientY;
        }
        else {
            clientX = event.clientX;
            clientY = event.clientY;
        }
        return {
            x: clientX - rect.left,
            y: clientY - rect.top
        };
    };
    const startDrawing = (e) => {
        e.preventDefault(); // Prevent scrolling on touch
        setIsDrawing(true);
        const { x, y } = getCoordinates(e);
        const ctx = canvasRef.current?.getContext('2d');
        if (ctx) {
            ctx.beginPath();
            ctx.moveTo(x, y);
        }
    };
    const draw = (e) => {
        e.preventDefault();
        if (!isDrawing)
            return;
        const { x, y } = getCoordinates(e);
        const ctx = canvasRef.current?.getContext('2d');
        if (ctx) {
            ctx.lineTo(x, y);
            ctx.stroke();
            if (!hasSignature)
                setHasSignature(true);
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
    return (_jsxs("div", { className: cn("flex flex-col gap-4 w-full max-w-md", className), ref: containerRef, children: [_jsxs("div", { className: "relative rounded-xl overflow-hidden border border-border-primary shadow-sm bg-white touch-none", children: [_jsx("canvas", { ref: canvasRef, width: width || 400, height: height, className: "cursor-crosshair block", onMouseDown: startDrawing, onMouseMove: draw, onMouseUp: stopDrawing, onMouseLeave: stopDrawing, onTouchStart: startDrawing, onTouchMove: draw, onTouchEnd: stopDrawing }), !hasSignature && (_jsx("div", { className: "absolute inset-0 flex items-center justify-center pointer-events-none text-text-tertiary/30 text-2xl font-handwriting select-none", children: "Sign here" }))] }), _jsxs("div", { className: "flex items-center justify-between gap-2", children: [_jsxs(Button, { variant: "ghost", size: "sm", onClick: clear, disabled: !hasSignature, className: "text-status-error hover:bg-status-error/10 hover:text-status-error", children: [_jsx(Eraser, { className: "w-4 h-4 mr-2" }), "Clear"] }), _jsxs(Button, { variant: "outline", size: "sm", onClick: download, disabled: !hasSignature, children: [_jsx(Download, { className: "w-4 h-4 mr-2" }), "Save"] })] })] }));
};
//# sourceMappingURL=SignaturePad.js.map