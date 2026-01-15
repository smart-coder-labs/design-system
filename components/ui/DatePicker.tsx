import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

/* ========================================
   TYPES
   ======================================== */

export interface DatePickerProps {
    label?: string;
    value?: Date;
    onChange?: (date: Date | null) => void;
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

const isDateInRange = (date: Date, minDate?: Date, maxDate?: Date): boolean => {
    if (minDate && date < minDate) return false;
    if (maxDate && date > maxDate) return false;
    return true;
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
    selectedDate: Date | null;
    onSelectDate: (date: Date) => void;
    minDate?: Date;
    maxDate?: Date;
    currentMonth: Date;
    onMonthChange: (date: Date) => void;
}

const Calendar: React.FC<CalendarProps> = ({
    selectedDate,
    onSelectDate,
    minDate,
    maxDate,
    currentMonth,
    onMonthChange,
}) => {
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
        if (isDateInRange(date, minDate, maxDate)) {
            onSelectDate(date);
        }
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
            className="absolute top-full left-0 mt-2 z-[1300] w-full min-w-[280px] max-w-[320px]"
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
                <div className="grid grid-cols-7 gap-1">
                    {emptyDays.map((_, index) => (
                        <div key={`empty-${index}`} className="aspect-square" />
                    ))}
                    {days.map((day) => {
                        const date = new Date(year, month, day);
                        const isSelected = selectedDate && isSameDay(date, selectedDate);
                        const isToday = isSameDay(date, today);
                        const isDisabled = !isDateInRange(date, minDate, maxDate);

                        return (
                            <motion.button
                                key={day}
                                whileHover={!isDisabled ? { scale: 1.05 } : {}}
                                whileTap={!isDisabled ? { scale: 0.95 } : {}}
                                onClick={() => handleDayClick(day)}
                                disabled={isDisabled}
                                className={`
                                    aspect-square rounded-lg text-sm font-medium
                                    transition-apple
                                    ${isSelected
                                        ? 'bg-accent-blue text-white'
                                        : isToday
                                            ? 'bg-accent-blue/10 text-accent-blue'
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

                {/* Today button */}
                <div className="mt-4 pt-4 border-t border-border-primary">
                    <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => onSelectDate(new Date())}
                        className="w-full py-2 px-4 rounded-lg bg-surface-secondary hover:bg-surface-tertiary text-text-primary text-sm font-medium transition-apple"
                        type="button"
                    >
                        Today
                    </motion.button>
                </div>
            </div>
        </motion.div>
    );
};

/* ========================================
   DATE PICKER COMPONENT
   ======================================== */

export const DatePicker: React.FC<DatePickerProps> = ({
    label,
    value,
    onChange,
    placeholder = 'Select date',
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
    const [selectedDate, setSelectedDate] = useState<Date | null>(value || null);
    const [currentMonth, setCurrentMonth] = useState(value || new Date());
    const [inputValue, setInputValue] = useState('');
    const [isFocused, setIsFocused] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);

    const hasError = !!error;

    // Format date specifically for input (MM/DD/YYYY)
    const formatDateForInput = (date: Date): string => {
        const mm = String(date.getMonth() + 1).padStart(2, '0');
        const dd = String(date.getDate()).padStart(2, '0');
        const yyyy = date.getFullYear();
        return `${mm}/${dd}/${yyyy}`;
    };

    // Sync state with props
    useEffect(() => {
        if (value) {
            setSelectedDate(value);
            setCurrentMonth(value);
            // Only update input if not currently focused to avoid interrupting typing
            if (!isFocused) {
                setInputValue(formatDate(value, dateFormat));
            }
        } else if (!isFocused) {
            setInputValue('');
        }
    }, [value, dateFormat, isFocused]);

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
        setSelectedDate(date);
        setCurrentMonth(date);
        // When selecting from calendar, we want to show the formatted date (display mode)
        // unless we are still focused on the input, but usually clicking calendar steals focus or we want to close it.
        // Let's assume selection closes the calendar and resets focus state effectively for the user.
        setInputValue(formatDate(date, dateFormat));
        onChange?.(date);
        setIsOpen(false);
        setIsFocused(false); // Reset focus state to show pretty format
    };

    const handleFocus = () => {
        if (!disabled) {
            setIsFocused(true);
            setIsOpen(true);
            if (selectedDate) {
                setInputValue(formatDateForInput(selectedDate));
            } else {
                setInputValue('');
            }
        }
    };

    const handleBlur = () => {
        setIsFocused(false);
        // On blur, validate and format back to display format
        if (selectedDate) {
            setInputValue(formatDate(selectedDate, dateFormat));
        } else {
            setInputValue('');
        }
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        let val = e.target.value;

        // Allow only numbers and slashes
        val = val.replace(/[^\d/]/g, '');

        // Auto-format: Add slashes automatically
        const isDeleting = val.length < inputValue.length;
        if (!isDeleting) {
            if (val.length === 2 && inputValue.charAt(2) !== '/') val += '/';
            if (val.length === 5 && inputValue.charAt(5) !== '/') val += '/';
        }

        // Limit length to 10 chars (MM/DD/YYYY)
        if (val.length > 10) val = val.slice(0, 10);

        setInputValue(val);

        // Parse date only if complete (MM/DD/YYYY is 10 chars)
        if (val.length === 10) {
            const date = new Date(val);
            if (!isNaN(date.getTime())) {
                const [mm, dd, yyyy] = val.split('/').map(Number);
                if (
                    date.getMonth() + 1 === mm &&
                    date.getDate() === dd &&
                    date.getFullYear() === yyyy
                ) {
                    if (isDateInRange(date, minDate, maxDate)) {
                        setSelectedDate(date);
                        setCurrentMonth(date);
                        onChange?.(date);
                    }
                }
            }
        } else if (val === '') {
            setSelectedDate(null);
            onChange?.(null);
        }
    };

    const handleInputClick = () => {
        if (!disabled && !isOpen) {
            setIsOpen(true);
        }
    };

    const handleClear = (e: React.MouseEvent) => {
        e.stopPropagation();
        setSelectedDate(null);
        setInputValue('');
        onChange?.(null);
        if (isFocused) {
            // Keep focus if we were focused
        }
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
                        value={inputValue}
                        onChange={handleInputChange}
                        onFocus={handleFocus}
                        onBlur={handleBlur}
                        onClick={handleInputClick}
                        placeholder={isFocused ? 'MM/DD/YYYY' : placeholder}
                        disabled={disabled}
                        maxLength={10}
                        className={inputClassName}
                    />
                </motion.div>

                {/* Calendar icon */}
                <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center gap-1">
                    {inputValue && !disabled && (
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
                            selectedDate={selectedDate}
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

DatePicker.displayName = 'DatePicker';

/* ========================================
   USAGE EXAMPLES
   ======================================== */

/*
// Basic date picker
<DatePicker
  label="Select Date"
  placeholder="Choose a date"
  onChange={(date) => console.log(date)}
/>

// With initial value
<DatePicker
  label="Birth Date"
  value={new Date()}
  onChange={(date) => console.log(date)}
/>

// With date range
<DatePicker
  label="Appointment Date"
  minDate={new Date()}
  maxDate={new Date(2025, 11, 31)}
  onChange={(date) => console.log(date)}
/>

// With error
<DatePicker
  label="Date"
  error="Please select a valid date"
/>

// Different formats
<DatePicker
  label="Short Format"
  dateFormat="short"
  onChange={(date) => console.log(date)}
/>

<DatePicker
  label="Long Format"
  dateFormat="long"
  onChange={(date) => console.log(date)}
/>
*/
