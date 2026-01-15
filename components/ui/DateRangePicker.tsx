import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

/* ========================================
   TYPES
   ======================================== */

export interface DateRange {
    from: Date | null;
    to: Date | null;
}

export interface DateRangePickerProps {
    label?: string;
    value?: DateRange;
    onChange?: (range: DateRange) => void;
    placeholder?: string;
    error?: string;
    helperText?: string;
    disabled?: boolean;
    minDate?: Date;
    maxDate?: Date;
    dateFormat?: 'short' | 'medium' | 'long';
    size?: 'sm' | 'md' | 'lg';
    className?: string;
}

/* ========================================
   UTILITY FUNCTIONS
   ======================================== */

const formatDate = (date: Date, format: 'short' | 'medium' | 'long' = 'medium'): string => {
    const optionsMap: Record<string, Intl.DateTimeFormatOptions> = {
        short: { month: 'numeric', day: 'numeric', year: 'numeric' },
        medium: { month: 'short', day: 'numeric', year: 'numeric' },
        long: { month: 'long', day: 'numeric', year: 'numeric' },
    };

    return new Intl.DateTimeFormat('en-US', optionsMap[format]).format(date);
};

const isSameDay = (date1: Date, date2: Date): boolean => {
    return (
        date1.getFullYear() === date2.getFullYear() &&
        date1.getMonth() === date2.getMonth() &&
        date1.getDate() === date2.getDate()
    );
};

const getDaysInMonth = (year: number, month: number): number => {
    return new Date(year, month + 1, 0).getDate();
};

const getFirstDayOfMonth = (year: number, month: number): number => {
    return new Date(year, month, 1).getDay();
};

const isDateDisabled = (date: Date, minDate?: Date, maxDate?: Date): boolean => {
    if (minDate && date < minDate) return true;
    if (maxDate && date > maxDate) return true;
    return false;
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
`;

const sizeStyles = {
    sm: 'h-8 px-3 text-sm rounded-lg',
    md: 'h-10 px-4 text-base rounded-xl',
    lg: 'h-12 px-5 text-lg rounded-xl',
};

/* ========================================
   CALENDAR COMPONENT
   ======================================== */

interface CalendarProps {
    range: DateRange;
    onSelectDate: (date: Date) => void;
    minDate?: Date;
    maxDate?: Date;
    currentMonth: Date;
    onMonthChange: (date: Date) => void;
}

const Calendar: React.FC<CalendarProps> = ({
    range,
    onSelectDate,
    minDate,
    maxDate,
    currentMonth,
    onMonthChange,
}) => {
    const [hoveredDate, setHoveredDate] = useState<Date | null>(null);
    const year = currentMonth.getFullYear();
    const month = currentMonth.getMonth();
    const daysInMonth = getDaysInMonth(year, month);
    const firstDay = getFirstDayOfMonth(year, month);
    const today = new Date();

    const days = Array.from({ length: daysInMonth }, (_, i) => i + 1);
    const emptyDays = Array.from({ length: firstDay }, (_, i) => i);

    const monthNames = [
        'January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'
    ];

    const handlePrevMonth = () => {
        const newDate = new Date(year, month - 1, 1);
        onMonthChange(newDate);
    };

    const handleNextMonth = () => {
        const newDate = new Date(year, month + 1, 1);
        onMonthChange(newDate);
    };

    const handleDayClick = (day: number) => {
        const date = new Date(year, month, day);
        if (!isDateDisabled(date, minDate, maxDate)) {
            onSelectDate(date);
        }
    };

    const isDateInRange = (date: Date) => {
        if (range.from && range.to) {
            return date >= range.from && date <= range.to;
        }
        if (range.from && hoveredDate) {
            return (date >= range.from && date <= hoveredDate) || (date <= range.from && date >= hoveredDate);
        }
        return false;
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: -8, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.96 }}
            transition={{
                type: 'spring',
                stiffness: 400,
                damping: 30,
            }}
            className="absolute top-full left-0 mt-2 z-[1300] w-full min-w-[300px] max-w-[340px]"
        >
            <div className="bg-surface-primary border border-border-primary rounded-2xl shadow-lg p-4 backdrop-blur-xl">
                {/* Header */}
                <div className="flex items-center justify-between mb-4">
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={handlePrevMonth}
                        className="p-2 rounded-lg hover:bg-surface-secondary transition-apple"
                        type="button"
                    >
                        <svg
                            className="w-5 h-5 text-text-primary"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M15 19l-7-7 7-7"
                            />
                        </svg>
                    </motion.button>

                    <h3 className="text-base font-semibold text-text-primary">
                        {monthNames[month]} {year}
                    </h3>

                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={handleNextMonth}
                        className="p-2 rounded-lg hover:bg-surface-secondary transition-apple"
                        type="button"
                    >
                        <svg
                            className="w-5 h-5 text-text-primary"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M9 5l7 7-7 7"
                            />
                        </svg>
                    </motion.button>
                </div>

                {/* Weekday headers */}
                <div className="grid grid-cols-7 gap-1 mb-2">
                    {['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'].map((day) => (
                        <div
                            key={day}
                            className="text-center text-xs font-medium text-text-tertiary py-2"
                        >
                            {day}
                        </div>
                    ))}
                </div>

                {/* Calendar grid */}
                <div className="grid grid-cols-7 gap-1" onMouseLeave={() => setHoveredDate(null)}>
                    {emptyDays.map((_, index) => (
                        <div key={`empty-${index}`} className="aspect-square" />
                    ))}
                    {days.map((day) => {
                        const date = new Date(year, month, day);
                        const isSelectedStart = range.from && isSameDay(date, range.from);
                        const isSelectedEnd = range.to && isSameDay(date, range.to);
                        const isSelected = isSelectedStart || isSelectedEnd;
                        const isInRange = isDateInRange(date);
                        const isToday = isSameDay(date, today);
                        const isDisabled = isDateDisabled(date, minDate, maxDate);

                        let roundedClass = 'rounded-lg';
                        if (isInRange) {
                            if (isSelectedStart && isSelectedEnd) roundedClass = 'rounded-lg';
                            else if (isSelectedStart) roundedClass = 'rounded-l-lg rounded-r-none';
                            else if (isSelectedEnd) roundedClass = 'rounded-r-lg rounded-l-none';
                            else roundedClass = 'rounded-none';
                        }

                        return (
                            <motion.button
                                key={day}
                                whileHover={!isDisabled ? { scale: 1.05, zIndex: 10 } : {}}
                                whileTap={!isDisabled ? { scale: 0.95 } : {}}
                                onClick={() => handleDayClick(day)}
                                onMouseEnter={() => setHoveredDate(date)}
                                disabled={isDisabled}
                                className={`
                                    aspect-square text-sm font-medium relative
                                    transition-colors duration-200
                                    ${roundedClass}
                                    ${isSelected
                                        ? 'bg-accent-blue text-white z-10'
                                        : isInRange
                                            ? 'bg-accent-blue/10 text-text-primary'
                                            : isToday
                                                ? 'bg-accent-blue/5 text-accent-blue border border-accent-blue/20'
                                                : 'text-text-primary hover:bg-surface-secondary'
                                    }
                                    ${isDisabled ? 'opacity-30 cursor-not-allowed' : 'cursor-pointer'}
                                `}
                                type="button"
                            >
                                {day}
                            </motion.button>
                        );
                    })}
                </div>
            </div>
        </motion.div>
    );
};

/* ========================================
   DATE RANGE PICKER COMPONENT
   ======================================== */

export const DateRangePicker: React.FC<DateRangePickerProps> = ({
    label,
    value,
    onChange,
    placeholder = 'Select date range',
    error,
    helperText,
    disabled = false,
    minDate,
    maxDate,
    dateFormat = 'medium',
    size = 'md',
    className = '',
}) => {
    const [isOpen, setIsOpen] = useState(false);
    const [range, setRange] = useState<DateRange>(value || { from: null, to: null });
    const [currentMonth, setCurrentMonth] = useState(value?.from || new Date());
    const containerRef = useRef<HTMLDivElement>(null);

    const hasError = !!error;

    // Sync state with props
    useEffect(() => {
        if (value) {
            setRange(value);
            if (value.from) setCurrentMonth(value.from);
        }
    }, [value]);

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

    const handleSelectDate = (date: Date) => {
        let newRange = { ...range };

        if (!range.from || (range.from && range.to)) {
            // Start new range
            newRange = { from: date, to: null };
        } else {
            // Complete range
            if (date < range.from) {
                newRange = { from: date, to: range.from };
            } else {
                newRange = { from: range.from, to: date };
            }
            setIsOpen(false); // Close on second selection
        }

        setRange(newRange);
        onChange?.(newRange);
    };

    const handleInputClick = () => {
        if (!disabled && !isOpen) {
            setIsOpen(true);
        }
    };

    const handleClear = (e: React.MouseEvent) => {
        e.stopPropagation();
        const newRange = { from: null, to: null };
        setRange(newRange);
        onChange?.(newRange);
    };

    const getDisplayText = () => {
        if (!range.from) return '';
        if (!range.to) return formatDate(range.from, dateFormat);
        return `${formatDate(range.from, dateFormat)} - ${formatDate(range.to, dateFormat)}`;
    };

    const inputClassName = `
        ${baseInputStyles}
        ${sizeStyles[size]}
        ${hasError ? 'border-status-error focus:border-status-error focus:ring-status-error/20' : ''}
        ${className}
    `.trim().replace(/\s+/g, ' ');

    return (
        <div className="w-full" ref={containerRef}>
            {label && (
                <label className="block text-sm font-medium text-text-primary mb-2">
                    {label}
                </label>
            )}

            <div className="relative">
                <motion.div
                    whileHover={!disabled ? { scale: 1.005 } : {}}
                    transition={{
                        type: 'spring',
                        stiffness: 300,
                        damping: 30,
                    }}
                >
                    <input
                        type="text"
                        readOnly
                        value={getDisplayText()}
                        onClick={handleInputClick}
                        placeholder={placeholder}
                        disabled={disabled}
                        className={inputClassName}
                    />
                </motion.div>

                {/* Calendar icon */}
                <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center gap-1">
                    {range.from && !disabled && (
                        <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={handleClear}
                            className="p-1 rounded-md hover:bg-surface-secondary transition-apple"
                            type="button"
                        >
                            <svg
                                className="w-4 h-4 text-text-tertiary"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        </motion.button>
                    )}
                    <svg
                        className="w-5 h-5 text-text-tertiary pointer-events-none"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                        />
                    </svg>
                </div>

                {/* Calendar dropdown */}
                <AnimatePresence>
                    {isOpen && (
                        <Calendar
                            range={range}
                            onSelectDate={handleSelectDate}
                            minDate={minDate}
                            maxDate={maxDate}
                            currentMonth={currentMonth}
                            onMonthChange={setCurrentMonth}
                        />
                    )}
                </AnimatePresence>
            </div>

            {(error || helperText) && (
                <motion.p
                    initial={{ opacity: 0, y: -4 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.16 }}
                    className={`
                        mt-2 text-sm
                        ${hasError ? 'text-status-error' : 'text-text-secondary'}
                    `}
                >
                    {error || helperText}
                </motion.p>
            )}
        </div>
    );
};

DateRangePicker.displayName = 'DateRangePicker';
