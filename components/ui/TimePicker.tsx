import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Clock } from 'lucide-react';
import { cn } from '../lib/utils';

/* ========================================
   TYPES
   ======================================== */

export interface TimePickerProps {
    label?: string;
    value?: string; // Format: "HH:mm" (24h)
    onChange?: (time: string | null) => void;
    placeholder?: string;
    error?: string;
    helperText?: string;
    disabled?: boolean;
    format?: '12h' | '24h';
    step?: number; // Minute step (e.g., 1, 5, 15, 30)
    className?: string;
}

/* ========================================
   UTILITY FUNCTIONS
   ======================================== */

const parseTime = (timeStr: string): { hours: number; minutes: number } | null => {
    if (!timeStr) return null;
    const [hours, minutes] = timeStr.split(':').map(Number);
    if (isNaN(hours) || isNaN(minutes)) return null;
    if (hours < 0 || hours > 23 || minutes < 0 || minutes > 59) return null;
    return { hours, minutes };
};

const formatTimeDisplay = (hours: number, minutes: number, format: '12h' | '24h'): string => {
    const mm = minutes.toString().padStart(2, '0');

    if (format === '24h') {
        const hh = hours.toString().padStart(2, '0');
        return `${hh}:${mm}`;
    } else {
        const period = hours >= 12 ? 'PM' : 'AM';
        const h12 = hours % 12 || 12;
        return `${h12}:${mm} ${period}`;
    }
};

/* ========================================
   STYLES
   ======================================== */

const baseInputStyles = `
  w-full
  bg-surface-primary
  border border-border-primary
  text-text-primary
  placeholder:text-text-tertiary
  transition-apple
  focus:outline-none
  focus:border-accent-blue
  focus:ring-2
  focus:ring-accent-blue/20
  disabled:opacity-40
  disabled:cursor-not-allowed
  cursor-pointer
  h-10 px-4 text-base rounded-xl
`;

/* ========================================
   TIME PICKER COMPONENT
   ======================================== */

export const TimePicker: React.FC<TimePickerProps> = ({
    label,
    value,
    onChange,
    placeholder = 'Select time',
    error,
    helperText,
    disabled = false,
    format = '12h',
    step = 15,
    className = '',
}) => {
    const [isOpen, setIsOpen] = useState(false);
    const [inputValue, setInputValue] = useState('');
    const containerRef = useRef<HTMLDivElement>(null);

    // Internal state for the dropdown selection
    const [selectedHour, setSelectedHour] = useState<number>(new Date().getHours());
    const [selectedMinute, setSelectedMinute] = useState<number>(Math.floor(new Date().getMinutes() / step) * step);
    const [selectedPeriod, setSelectedPeriod] = useState<'AM' | 'PM'>(new Date().getHours() >= 12 ? 'PM' : 'AM');

    const hasError = !!error;

    // Sync state with props
    useEffect(() => {
        if (value) {
            const parsed = parseTime(value);
            if (parsed) {
                setInputValue(formatTimeDisplay(parsed.hours, parsed.minutes, format));
                setSelectedHour(parsed.hours);
                setSelectedMinute(parsed.minutes);
                setSelectedPeriod(parsed.hours >= 12 ? 'PM' : 'AM');
            }
        } else {
            setInputValue('');
        }
    }, [value, format]);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };

        if (isOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isOpen]);

    const handleInputClick = () => {
        if (!disabled) {
            setIsOpen(!isOpen);
        }
    };

    const handleTimeChange = (newHour: number, newMinute: number) => {
        setSelectedHour(newHour);
        setSelectedMinute(newMinute);

        // Format for value prop (always 24h HH:mm)
        const hh = newHour.toString().padStart(2, '0');
        const mm = newMinute.toString().padStart(2, '0');
        const timeString = `${hh}:${mm}`;

        onChange?.(timeString);
        setInputValue(formatTimeDisplay(newHour, newMinute, format));
    };

    const handleHourSelect = (hour: number) => {
        let newHour = hour;
        if (format === '12h') {
            if (selectedPeriod === 'PM' && hour !== 12) newHour = hour + 12;
            if (selectedPeriod === 'AM' && hour === 12) newHour = 0;
        }
        handleTimeChange(newHour, selectedMinute);
    };

    const handleMinuteSelect = (minute: number) => {
        handleTimeChange(selectedHour, minute);
    };

    const handlePeriodSelect = (period: 'AM' | 'PM') => {
        setSelectedPeriod(period);
        let newHour = selectedHour;

        if (period === 'AM' && selectedHour >= 12) {
            newHour = selectedHour - 12;
        } else if (period === 'PM' && selectedHour < 12) {
            newHour = selectedHour + 12;
        }

        handleTimeChange(newHour, selectedMinute);
    };

    // Generate options
    const hours = format === '12h'
        ? Array.from({ length: 12 }, (_, i) => i + 1) // 1-12
        : Array.from({ length: 24 }, (_, i) => i);    // 0-23

    const minutes = Array.from({ length: 60 / step }, (_, i) => i * step);

    return (
        <div className={cn("w-full", className)} ref={containerRef}>
            {label && (
                <label className="block text-sm font-medium text-text-primary mb-2">
                    {label}
                </label>
            )}

            <div className="relative">
                <motion.div
                    whileHover={!disabled ? { scale: 1.005 } : {}}
                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                >
                    <input
                        type="text"
                        readOnly
                        value={inputValue}
                        onClick={handleInputClick}
                        placeholder={placeholder}
                        disabled={disabled}
                        className={cn(
                            baseInputStyles,
                            hasError && 'border-status-error focus:border-status-error focus:ring-status-error/20'
                        )}
                    />
                </motion.div>

                <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
                    <Clock className="w-5 h-5 text-text-tertiary" />
                </div>

                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ opacity: 0, y: -8, scale: 0.96 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: -8, scale: 0.96 }}
                            transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                            className="absolute top-full left-0 mt-2 z-[1300] w-full min-w-[280px] p-4 bg-surface-primary border border-border-primary rounded-2xl shadow-lg backdrop-blur-xl"
                        >
                            <div className="flex gap-2 h-48">
                                {/* Hours Column */}
                                <div className="flex-1 flex flex-col">
                                    <div className="text-xs font-medium text-text-tertiary mb-2 text-center">Hour</div>
                                    <div className="flex-1 overflow-y-auto scrollbar-hide space-y-1">
                                        {hours.map((h) => {
                                            const isSelected = format === '12h'
                                                ? (selectedHour % 12 || 12) === h
                                                : selectedHour === h;

                                            return (
                                                <button
                                                    key={h}
                                                    onClick={() => handleHourSelect(h)}
                                                    className={cn(
                                                        "w-full py-1.5 px-2 rounded-lg text-sm transition-colors",
                                                        isSelected
                                                            ? "bg-accent-blue text-white font-medium"
                                                            : "text-text-primary hover:bg-surface-secondary"
                                                    )}
                                                >
                                                    {h.toString().padStart(2, '0')}
                                                </button>
                                            );
                                        })}
                                    </div>
                                </div>

                                {/* Separator */}
                                <div className="flex items-center justify-center text-text-tertiary">:</div>

                                {/* Minutes Column */}
                                <div className="flex-1 flex flex-col">
                                    <div className="text-xs font-medium text-text-tertiary mb-2 text-center">Minute</div>
                                    <div className="flex-1 overflow-y-auto scrollbar-hide space-y-1">
                                        {minutes.map((m) => (
                                            <button
                                                key={m}
                                                onClick={() => handleMinuteSelect(m)}
                                                className={cn(
                                                    "w-full py-1.5 px-2 rounded-lg text-sm transition-colors",
                                                    selectedMinute === m
                                                        ? "bg-accent-blue text-white font-medium"
                                                        : "text-text-primary hover:bg-surface-secondary"
                                                )}
                                            >
                                                {m.toString().padStart(2, '0')}
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                {/* AM/PM Column (only for 12h) */}
                                {format === '12h' && (
                                    <>
                                        <div className="w-px bg-border-primary mx-1" />
                                        <div className="flex-1 flex flex-col">
                                            <div className="text-xs font-medium text-text-tertiary mb-2 text-center">Period</div>
                                            <div className="flex-1 space-y-1">
                                                {(['AM', 'PM'] as const).map((period) => (
                                                    <button
                                                        key={period}
                                                        onClick={() => handlePeriodSelect(period)}
                                                        className={cn(
                                                            "w-full py-1.5 px-2 rounded-lg text-sm transition-colors",
                                                            selectedPeriod === period
                                                                ? "bg-accent-blue text-white font-medium"
                                                                : "text-text-primary hover:bg-surface-secondary"
                                                        )}
                                                    >
                                                        {period}
                                                    </button>
                                                ))}
                                            </div>
                                        </div>
                                    </>
                                )}
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>

            {(error || helperText) && (
                <motion.p
                    initial={{ opacity: 0, y: -4 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.16 }}
                    className={cn(
                        "mt-2 text-sm",
                        hasError ? "text-status-error" : "text-text-secondary"
                    )}
                >
                    {error || helperText}
                </motion.p>
            )}
        </div>
    );
};

TimePicker.displayName = 'TimePicker';
