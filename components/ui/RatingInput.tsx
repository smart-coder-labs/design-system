import React, { useState } from 'react';
import { Star } from 'lucide-react';
import { cn } from '../../lib/utils';;
import { motion } from 'framer-motion';
import { Label } from './Label';

/* ========================================
   TYPES
   ======================================== */

export interface RatingInputProps {
    value?: number;
    onChange?: (value: number) => void;
    max?: number;
    label?: string;
    error?: string;
    helperText?: string;
    disabled?: boolean;
    readOnly?: boolean;
    size?: 'sm' | 'md' | 'lg';
    className?: string;
}

/* ========================================
   RATING INPUT COMPONENT
   ======================================== */

export const RatingInput: React.FC<RatingInputProps> = ({
    value = 0,
    onChange,
    max = 5,
    label,
    error,
    helperText,
    disabled = false,
    readOnly = false,
    size = 'md',
    className,
}) => {
    const [hoverValue, setHoverValue] = useState<number | null>(null);

    const sizeClasses = {
        sm: 'w-4 h-4',
        md: 'w-6 h-6',
        lg: 'w-8 h-8',
    };

    const handleMouseEnter = (index: number) => {
        if (!disabled && !readOnly) {
            setHoverValue(index);
        }
    };

    const handleMouseLeave = () => {
        if (!disabled && !readOnly) {
            setHoverValue(null);
        }
    };

    const handleClick = (index: number) => {
        if (!disabled && !readOnly && onChange) {
            onChange(index);
        }
    };

    return (
        <div className={cn("space-y-2", className)}>
            {label && (
                <Label className="mb-2">
                    {label}
                </Label>
            )}

            <div
                className="flex items-center gap-1"
                onMouseLeave={handleMouseLeave}
            >
                {Array.from({ length: max }).map((_, i) => {
                    const index = i + 1;
                    const isFilled = (hoverValue !== null ? hoverValue : value) >= index;
                    const isHovered = hoverValue !== null && hoverValue >= index;

                    return (
                        <button
                            key={index}
                            type="button"
                            onClick={() => handleClick(index)}
                            onMouseEnter={() => handleMouseEnter(index)}
                            disabled={disabled || readOnly}
                            className={cn(
                                "focus:outline-none transition-transform active:scale-95",
                                (disabled || readOnly) ? "cursor-default" : "cursor-pointer hover:scale-110",
                                disabled && "opacity-50"
                            )}
                        >
                            <motion.div
                                initial={false}
                                animate={{
                                    scale: isHovered ? 1.1 : 1,
                                }}
                            >
                                <Star
                                    className={cn(
                                        sizeClasses[size],
                                        "transition-colors duration-200",
                                        isFilled
                                            ? "fill-yellow-400 text-yellow-400"
                                            : "fill-transparent text-text-tertiary"
                                    )}
                                />
                            </motion.div>
                        </button>
                    );
                })}
            </div>

            {(error || helperText) && (
                <motion.p
                    initial={{ opacity: 0, y: -4 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={cn(
                        "text-sm",
                        error ? "text-status-error" : "text-text-secondary"
                    )}
                >
                    {error || helperText}
                </motion.p>
            )}
        </div>
    );
};

RatingInput.displayName = 'RatingInput';
