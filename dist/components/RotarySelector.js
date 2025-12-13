import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "../lib/utils";
export const RotarySelector = React.forwardRef(({ options, value, onChange, size = "md", showLabel = true, disabled = false, className = "", }, ref) => {
    const innerRef = React.useRef(null);
    React.useImperativeHandle(ref, () => innerRef.current);
    const [isDragging, setIsDragging] = React.useState(false);
    const [selectedIndex, setSelectedIndex] = React.useState(() => {
        const idx = options.findIndex((o) => o.value === value);
        return idx >= 0 ? idx : 0;
    });
    React.useEffect(() => {
        if (value !== undefined) {
            const idx = options.findIndex((o) => o.value === value);
            if (idx !== -1 && idx !== selectedIndex) {
                setSelectedIndex(idx);
            }
        }
    }, [value, options, selectedIndex]);
    const sizeStyles = {
        sm: {
            container: "w-64 h-64",
            center: "w-24 h-24",
            option: "w-10 h-10 text-xs",
            posRadius: 90,
        },
        md: {
            container: "w-96 h-96",
            center: "w-32 h-32",
            option: "w-14 h-14 text-sm",
            posRadius: 135,
        },
        lg: {
            container: "w-[32rem] h-[32rem]",
            center: "w-40 h-40",
            option: "w-16 h-16 text-base",
            posRadius: 180,
        },
    };
    const { container, center, option, posRadius } = sizeStyles[size];
    const angleStep = 360 / options.length;
    /** Detect rotation on pointer move */
    const handlePointerMove = (e) => {
        if (!isDragging || !innerRef.current)
            return;
        const rect = innerRef.current.getBoundingClientRect();
        const cx = rect.left + rect.width / 2;
        const cy = rect.top + rect.height / 2;
        const dx = e.clientX - cx;
        const dy = e.clientY - cy;
        let angle = (Math.atan2(dy, dx) * 180) / Math.PI;
        // normalize 0–360
        angle = (angle + 450) % 360;
        const idx = Math.round(angle / angleStep) % options.length;
        if (idx !== selectedIndex && !options[idx]?.disabled) {
            setSelectedIndex(idx);
            onChange?.(options[idx].value, options[idx]);
        }
    };
    /** Pointer event listeners */
    React.useEffect(() => {
        if (isDragging) {
            window.addEventListener("pointermove", handlePointerMove);
            window.addEventListener("pointerup", () => setIsDragging(false), {
                once: true,
            });
        }
        else {
            window.removeEventListener("pointermove", handlePointerMove);
        }
        return () => {
            window.removeEventListener("pointermove", handlePointerMove);
        };
    }, [isDragging]);
    const selectedOption = options[selectedIndex];
    return (_jsxs("div", { ref: innerRef, className: cn("relative flex items-center justify-center select-none", container, disabled && "opacity-50 grayscale", className), children: [options.map((opt, i) => {
                const angle = (i * angleStep - 90) * (Math.PI / 180);
                const x = Math.cos(angle) * posRadius;
                const y = Math.sin(angle) * posRadius;
                const isSelected = i === selectedIndex;
                return (_jsxs(motion.button, { onClick: () => {
                        if (!opt.disabled && !disabled) {
                            setSelectedIndex(i);
                            onChange?.(opt.value, opt);
                        }
                    }, disabled: disabled || opt.disabled, className: cn("absolute rounded-full flex items-center justify-center transition-all duration-300", option, isSelected
                        ? "bg-accent-blue text-white shadow-[0_0_20px_rgba(0,122,255,0.4)] scale-110 z-10"
                        : "bg-surface-elevated/80 backdrop-blur-md text-text-secondary hover:bg-surface-elevated hover:text-text-primary", opt.disabled && "opacity-30 cursor-not-allowed"), style: {
                        left: `calc(50% + ${x}px)`,
                        top: `calc(50% + ${y}px)`,
                        transform: "translate(-50%, -50%)",
                    }, children: [opt.icon ? (_jsx("span", { className: "text-xl", children: opt.icon })) : (_jsx("span", { className: "font-semibold", children: opt.label })), isSelected && (_jsx(motion.div, { layoutId: "active-glow", className: "absolute inset-0 rounded-full ring-2 ring-white/30" }))] }, opt.id));
            }), _jsxs(motion.div, { className: cn("absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full flex flex-col items-center justify-center bg-surface-elevated/90 backdrop-blur-xl border border-white/20 shadow-[0_8px_32px_rgba(0,0,0,0.12)] z-20", center), onPointerDown: () => !disabled && setIsDragging(true), animate: {
                    scale: isDragging ? 0.96 : 1,
                }, children: [_jsx(AnimatePresence, { mode: "wait", children: selectedOption?.icon && (_jsx(motion.div, { initial: { opacity: 0, scale: 0.5 }, animate: { opacity: 1, scale: 1 }, exit: { opacity: 0, scale: 0.5 }, className: "text-3xl text-accent-blue mb-1", children: selectedOption.icon }, selectedOption.id)) }), showLabel && (_jsxs("div", { className: "flex flex-col items-center text-center", children: [_jsx("span", { className: "text-xs font-semibold text-text-primary", children: selectedOption?.label }), _jsx("span", { className: "text-[10px] text-text-tertiary font-medium", children: selectedOption?.value })] }))] })] }));
});
RotarySelector.displayName = "RotarySelector";
//# sourceMappingURL=RotarySelector.js.map