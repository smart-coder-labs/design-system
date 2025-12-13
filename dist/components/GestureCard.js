"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React, { useRef, useState } from 'react';
import { cn } from '../lib/utils';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Card } from './Card';
/* ========================================
   COMPONENT
   ======================================== */
export const GestureCard = React.forwardRef(({ children, intensity = 15, perspective = 1000, glowEffect = true, glowColor = 'rgba(0, 122, 255, 0.3)', variant = 'elevated', padding = 'md', className, ...props }, ref) => {
    const cardRef = useRef(null);
    const [isHovered, setIsHovered] = useState(false);
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    // Transform normalized values (-1 to 1) to rotation degrees
    const rotateX = useSpring(useTransform(y, [-1, 1], [intensity, -intensity]), {
        stiffness: 300,
        damping: 30,
    });
    const rotateY = useSpring(useTransform(x, [-1, 1], [-intensity, intensity]), {
        stiffness: 300,
        damping: 30,
    });
    const handleMouseMove = (e) => {
        if (!cardRef.current)
            return;
        const rect = cardRef.current.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        // Calculate mouse position relative to center
        const mouseX = e.clientX - centerX;
        const mouseY = e.clientY - centerY;
        // Normalize to -1 to 1 range
        const normalizedX = Math.max(-1, Math.min(1, mouseX / (rect.width / 2)));
        const normalizedY = Math.max(-1, Math.min(1, mouseY / (rect.height / 2)));
        // Update motion values directly
        x.set(normalizedX);
        y.set(normalizedY);
    };
    const handleMouseLeave = () => {
        // Smoothly return to center
        x.set(0);
        y.set(0);
        setIsHovered(false);
    };
    const handleMouseEnter = () => {
        setIsHovered(true);
    };
    return (_jsx("div", { ref: ref, className: cn("relative", className), style: { perspective: `${perspective}px` }, ...props, children: _jsx(motion.div, { ref: cardRef, onMouseMove: handleMouseMove, onMouseLeave: handleMouseLeave, onMouseEnter: handleMouseEnter, style: {
                rotateX,
                rotateY,
                transformStyle: 'preserve-3d',
            }, className: "relative", children: _jsxs(Card, { variant: variant, padding: padding, hoverable: false, className: cn("relative", isHovered && "shadow-xl"), children: [glowEffect && isHovered && (_jsx(motion.div, { className: "absolute inset-0 rounded-2xl opacity-0 blur-xl pointer-events-none", style: {
                            background: `radial-gradient(circle at center, ${glowColor}, transparent 70%)`,
                        }, animate: { opacity: [0, 0.5, 0] }, transition: { duration: 2, repeat: Infinity } })), _jsx("div", { className: "relative z-10", style: { transform: 'translateZ(20px)' }, children: children })] }) }) }));
});
GestureCard.displayName = 'GestureCard';
//# sourceMappingURL=GestureCard.js.map