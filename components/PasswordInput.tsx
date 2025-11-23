import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Eye, EyeOff, Check, X } from 'lucide-react';
import { cn } from '../lib/utils';

/* ========================================
   TYPES
   ======================================== */

export interface PasswordInputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type' | 'onChange'> {
    label?: string;
    value: string;
    onChange: (value: string) => void;
    error?: string;
    helperText?: string;
    showStrengthMeter?: boolean;
    strengthRequirements?: StrengthRequirement[];
}

export interface StrengthRequirement {
    regex: RegExp;
    label: string;
}

/* ========================================
   CONSTANTS
   ======================================== */

const DEFAULT_REQUIREMENTS: StrengthRequirement[] = [
    { regex: /.{8,}/, label: 'At least 8 characters' },
    { regex: /[0-9]/, label: 'Contains a number' },
    { regex: /[a-z]/, label: 'Contains a lowercase letter' },
    { regex: /[A-Z]/, label: 'Contains an uppercase letter' },
    { regex: /[^A-Za-z0-9]/, label: 'Contains a special character' },
];

/* ========================================
   PASSWORD INPUT COMPONENT
   ======================================== */

export const PasswordInput: React.FC<PasswordInputProps> = ({
    label,
    value,
    onChange,
    error,
    helperText,
    showStrengthMeter = true,
    strengthRequirements = DEFAULT_REQUIREMENTS,
    className,
    disabled,
    ...props
}) => {
    const [showPassword, setShowPassword] = useState(false);
    const [isFocused, setIsFocused] = useState(false);

    const toggleVisibility = () => {
        if (!disabled) {
            setShowPassword(!showPassword);
        }
    };

    const calculateStrength = (val: string) => {
        let score = 0;
        strengthRequirements.forEach(req => {
            if (req.regex.test(val)) score++;
        });
        return score;
    };

    const strengthScore = calculateStrength(value);
    const maxScore = strengthRequirements.length;
    const strengthPercentage = (strengthScore / maxScore) * 100;

    const getStrengthColor = (score: number) => {
        if (score <= 1) return 'bg-status-error';
        if (score <= 3) return 'bg-status-warning';
        return 'bg-status-success';
    };

    const getStrengthLabel = (score: number) => {
        if (score === 0) return '';
        if (score <= 1) return 'Weak';
        if (score <= 3) return 'Medium';
        return 'Strong';
    };

    return (
        <div className={cn("w-full space-y-2", className)}>
            {label && (
                <label className="block text-sm font-medium text-text-primary">
                    {label}
                </label>
            )}

            <div className="relative">
                <input
                    type={showPassword ? 'text' : 'password'}
                    value={value}
                    onChange={(e) => onChange(e.target.value)}
                    disabled={disabled}
                    onFocus={() => setIsFocused(true)}
                    onBlur={() => setIsFocused(false)}
                    className={cn(
                        "w-full h-10 px-4 pr-10 rounded-xl border bg-surface-primary text-text-primary transition-all",
                        "focus:outline-none focus:ring-2 focus:ring-accent-blue/20 focus:border-accent-blue",
                        "disabled:opacity-50 disabled:cursor-not-allowed",
                        error
                            ? "border-status-error focus:border-status-error focus:ring-status-error/20"
                            : "border-border-primary"
                    )}
                    {...props}
                />
                <button
                    type="button"
                    onClick={toggleVisibility}
                    disabled={disabled}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-text-tertiary hover:text-text-primary transition-colors focus:outline-none disabled:opacity-50"
                >
                    {showPassword ? (
                        <EyeOff className="w-4 h-4" />
                    ) : (
                        <Eye className="w-4 h-4" />
                    )}
                </button>
            </div>

            {/* Strength Meter */}
            {showStrengthMeter && value.length > 0 && (
                <div className="space-y-2">
                    <div className="flex items-center justify-between text-xs">
                        <span className={cn(
                            "font-medium transition-colors",
                            strengthScore <= 1 ? "text-status-error" :
                                strengthScore <= 3 ? "text-status-warning" : "text-status-success"
                        )}>
                            {getStrengthLabel(strengthScore)}
                        </span>
                        <span className="text-text-tertiary">
                            {strengthScore}/{maxScore}
                        </span>
                    </div>

                    {/* Progress Bar */}
                    <div className="h-1.5 w-full bg-surface-secondary rounded-full overflow-hidden">
                        <motion.div
                            className={cn("h-full transition-colors duration-300", getStrengthColor(strengthScore))}
                            initial={{ width: 0 }}
                            animate={{ width: `${strengthPercentage}%` }}
                            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                        />
                    </div>

                    {/* Requirements List (Only show when focused or typing) */}
                    <motion.div
                        initial={false}
                        animate={{
                            height: isFocused || value.length > 0 ? 'auto' : 0,
                            opacity: isFocused || value.length > 0 ? 1 : 0
                        }}
                        className="overflow-hidden"
                    >
                        <ul className="space-y-1 mt-2">
                            {strengthRequirements.map((req, index) => {
                                const isMet = req.regex.test(value);
                                return (
                                    <li key={index} className="flex items-center gap-2 text-xs">
                                        {isMet ? (
                                            <Check className="w-3 h-3 text-status-success" />
                                        ) : (
                                            <X className="w-3 h-3 text-text-tertiary" />
                                        )}
                                        <span className={cn(
                                            "transition-colors",
                                            isMet ? "text-text-secondary" : "text-text-tertiary"
                                        )}>
                                            {req.label}
                                        </span>
                                    </li>
                                );
                            })}
                        </ul>
                    </motion.div>
                </div>
            )}

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

PasswordInput.displayName = 'PasswordInput';
