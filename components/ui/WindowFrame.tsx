import React, { forwardRef, useState } from 'react';
import { cn } from '../lib/utils';
import { motion } from 'framer-motion';
import { Minus, Square, X } from 'lucide-react';

/* ========================================
   TYPES
   ======================================== */

export interface WindowFrameProps extends React.HTMLAttributes<HTMLDivElement> {
    title?: string;
    onClose?: () => void;
    onMinimize?: () => void;
    onMaximize?: () => void;
    showControls?: boolean;
    variant?: 'default' | 'dark';
}

/* ========================================
   WINDOW FRAME COMPONENT
   ======================================== */

export const WindowFrame = forwardRef<HTMLDivElement, WindowFrameProps>(
    (
        {
            title,
            onClose,
            onMinimize,
            onMaximize,
            showControls = true,
            variant = 'default',
            className,
            children,
            ...props
        },
        ref
    ) => {
        const [isHoveringControls, setIsHoveringControls] = useState(false);

        const variants = {
            default: {
                frame: "bg-surface-elevated border-border-primary",
                titleBar: "bg-surface-secondary/50",
                title: "text-text-primary",
            },
            dark: {
                frame: "bg-gray-900 border-gray-800",
                titleBar: "bg-gray-800/50",
                title: "text-gray-100",
            },
        };

        return (
            <div
                ref={ref}
                className={cn(
                    "rounded-xl border shadow-xl overflow-hidden",
                    variants[variant].frame,
                    className
                )}
                {...props}
            >
                {/* Title Bar */}
                <div
                    className={cn(
                        "flex items-center justify-between px-4 py-3 border-b backdrop-blur-sm",
                        variants[variant].titleBar,
                        variant === 'default' ? 'border-border-primary' : 'border-gray-800'
                    )}
                    onMouseEnter={() => setIsHoveringControls(true)}
                    onMouseLeave={() => setIsHoveringControls(false)}
                >
                    {/* macOS Window Controls */}
                    {showControls && (
                        <div className="flex items-center gap-2">
                            <motion.button
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={onClose}
                                className="w-3 h-3 rounded-full bg-[#FF5F57] hover:bg-[#FF5F57]/80 flex items-center justify-center group transition-colors focus:outline-none"
                                aria-label="Close"
                            >
                                {isHoveringControls && (
                                    <X className="w-2 h-2 text-[#8B0000] opacity-0 group-hover:opacity-100 transition-opacity" strokeWidth={3} />
                                )}
                            </motion.button>
                            <motion.button
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={onMinimize}
                                className="w-3 h-3 rounded-full bg-[#FEBC2E] hover:bg-[#FEBC2E]/80 flex items-center justify-center group transition-colors focus:outline-none"
                                aria-label="Minimize"
                            >
                                {isHoveringControls && (
                                    <Minus className="w-2 h-2 text-[#8B6914] opacity-0 group-hover:opacity-100 transition-opacity" strokeWidth={3} />
                                )}
                            </motion.button>
                            <motion.button
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={onMaximize}
                                className="w-3 h-3 rounded-full bg-[#28C840] hover:bg-[#28C840]/80 flex items-center justify-center group transition-colors focus:outline-none"
                                aria-label="Maximize"
                            >
                                {isHoveringControls && (
                                    <Square className="w-1.5 h-1.5 text-[#0F5323] opacity-0 group-hover:opacity-100 transition-opacity" strokeWidth={3} />
                                )}
                            </motion.button>
                        </div>
                    )}

                    {/* Title */}
                    {title && (
                        <div className={cn(
                            "absolute left-1/2 -translate-x-1/2 text-sm font-medium",
                            variants[variant].title
                        )}>
                            {title}
                        </div>
                    )}

                    {/* Spacer for layout balance */}
                    <div className="w-[52px]" />
                </div>

                {/* Content */}
                <div className="overflow-auto">
                    {children}
                </div>
            </div>
        );
    }
);

WindowFrame.displayName = 'WindowFrame';
