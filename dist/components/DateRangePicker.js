import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
/* ========================================
   UTILITY FUNCTIONS
   ======================================== */
const formatDate = (date, format = 'medium') => {
    const optionsMap = {
        short: { month: 'numeric', day: 'numeric', year: 'numeric' },
        medium: { month: 'short', day: 'numeric', year: 'numeric' },
        long: { month: 'long', day: 'numeric', year: 'numeric' },
    };
    return new Intl.DateTimeFormat('en-US', optionsMap[format]).format(date);
};
const isSameDay = (date1, date2) => {
    return (date1.getFullYear() === date2.getFullYear() &&
        date1.getMonth() === date2.getMonth() &&
        date1.getDate() === date2.getDate());
};
const getDaysInMonth = (year, month) => {
    return new Date(year, month + 1, 0).getDate();
};
const getFirstDayOfMonth = (year, month) => {
    return new Date(year, month, 1).getDay();
};
const isDateDisabled = (date, minDate, maxDate) => {
    if (minDate && date < minDate)
        return true;
    if (maxDate && date > maxDate)
        return true;
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
const Calendar = ({ range, onSelectDate, minDate, maxDate, currentMonth, onMonthChange, }) => {
    const [hoveredDate, setHoveredDate] = useState(null);
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
    const handleDayClick = (day) => {
        const date = new Date(year, month, day);
        if (!isDateDisabled(date, minDate, maxDate)) {
            onSelectDate(date);
        }
    };
    const isDateInRange = (date) => {
        if (range.from && range.to) {
            return date >= range.from && date <= range.to;
        }
        if (range.from && hoveredDate) {
            return (date >= range.from && date <= hoveredDate) || (date <= range.from && date >= hoveredDate);
        }
        return false;
    };
    return (_jsx(motion.div, { initial: { opacity: 0, y: -8, scale: 0.96 }, animate: { opacity: 1, y: 0, scale: 1 }, exit: { opacity: 0, y: -8, scale: 0.96 }, transition: {
            type: 'spring',
            stiffness: 400,
            damping: 30,
        }, className: "absolute top-full left-0 mt-2 z-[1300] w-full min-w-[300px] max-w-[340px]", children: _jsxs("div", { className: "bg-surface-primary border border-border-primary rounded-2xl shadow-lg p-4 backdrop-blur-xl", children: [_jsxs("div", { className: "flex items-center justify-between mb-4", children: [_jsx(motion.button, { whileHover: { scale: 1.05 }, whileTap: { scale: 0.95 }, onClick: handlePrevMonth, className: "p-2 rounded-lg hover:bg-surface-secondary transition-apple", type: "button", children: _jsx("svg", { className: "w-5 h-5 text-text-primary", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", children: _jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M15 19l-7-7 7-7" }) }) }), _jsxs("h3", { className: "text-base font-semibold text-text-primary", children: [monthNames[month], " ", year] }), _jsx(motion.button, { whileHover: { scale: 1.05 }, whileTap: { scale: 0.95 }, onClick: handleNextMonth, className: "p-2 rounded-lg hover:bg-surface-secondary transition-apple", type: "button", children: _jsx("svg", { className: "w-5 h-5 text-text-primary", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", children: _jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M9 5l7 7-7 7" }) }) })] }), _jsx("div", { className: "grid grid-cols-7 gap-1 mb-2", children: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'].map((day) => (_jsx("div", { className: "text-center text-xs font-medium text-text-tertiary py-2", children: day }, day))) }), _jsxs("div", { className: "grid grid-cols-7 gap-1", onMouseLeave: () => setHoveredDate(null), children: [emptyDays.map((_, index) => (_jsx("div", { className: "aspect-square" }, `empty-${index}`))), days.map((day) => {
                            const date = new Date(year, month, day);
                            const isSelectedStart = range.from && isSameDay(date, range.from);
                            const isSelectedEnd = range.to && isSameDay(date, range.to);
                            const isSelected = isSelectedStart || isSelectedEnd;
                            const isInRange = isDateInRange(date);
                            const isToday = isSameDay(date, today);
                            const isDisabled = isDateDisabled(date, minDate, maxDate);
                            let roundedClass = 'rounded-lg';
                            if (isInRange) {
                                if (isSelectedStart && isSelectedEnd)
                                    roundedClass = 'rounded-lg';
                                else if (isSelectedStart)
                                    roundedClass = 'rounded-l-lg rounded-r-none';
                                else if (isSelectedEnd)
                                    roundedClass = 'rounded-r-lg rounded-l-none';
                                else
                                    roundedClass = 'rounded-none';
                            }
                            return (_jsx(motion.button, { whileHover: !isDisabled ? { scale: 1.05, zIndex: 10 } : {}, whileTap: !isDisabled ? { scale: 0.95 } : {}, onClick: () => handleDayClick(day), onMouseEnter: () => setHoveredDate(date), disabled: isDisabled, className: `
                                    aspect-square text-sm font-medium relative
                                    transition-colors duration-200
                                    ${roundedClass}
                                    ${isSelected
                                    ? 'bg-accent-blue text-white z-10'
                                    : isInRange
                                        ? 'bg-accent-blue/10 text-text-primary'
                                        : isToday
                                            ? 'bg-accent-blue/5 text-accent-blue border border-accent-blue/20'
                                            : 'text-text-primary hover:bg-surface-secondary'}
                                    ${isDisabled ? 'opacity-30 cursor-not-allowed' : 'cursor-pointer'}
                                `, type: "button", children: day }, day));
                        })] })] }) }));
};
/* ========================================
   DATE RANGE PICKER COMPONENT
   ======================================== */
export const DateRangePicker = ({ label, value, onChange, placeholder = 'Select date range', error, helperText, disabled = false, minDate, maxDate, dateFormat = 'medium', size = 'md', className = '', }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [range, setRange] = useState(value || { from: null, to: null });
    const [currentMonth, setCurrentMonth] = useState(value?.from || new Date());
    const containerRef = useRef(null);
    const hasError = !!error;
    // Sync state with props
    useEffect(() => {
        if (value) {
            setRange(value);
            if (value.from)
                setCurrentMonth(value.from);
        }
    }, [value]);
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (containerRef.current && !containerRef.current.contains(event.target)) {
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
    const handleSelectDate = (date) => {
        let newRange = { ...range };
        if (!range.from || (range.from && range.to)) {
            // Start new range
            newRange = { from: date, to: null };
        }
        else {
            // Complete range
            if (date < range.from) {
                newRange = { from: date, to: range.from };
            }
            else {
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
    const handleClear = (e) => {
        e.stopPropagation();
        const newRange = { from: null, to: null };
        setRange(newRange);
        onChange?.(newRange);
    };
    const getDisplayText = () => {
        if (!range.from)
            return '';
        if (!range.to)
            return formatDate(range.from, dateFormat);
        return `${formatDate(range.from, dateFormat)} - ${formatDate(range.to, dateFormat)}`;
    };
    const inputClassName = `
        ${baseInputStyles}
        ${sizeStyles[size]}
        ${hasError ? 'border-status-error focus:border-status-error focus:ring-status-error/20' : ''}
        ${className}
    `.trim().replace(/\s+/g, ' ');
    return (_jsxs("div", { className: "w-full", ref: containerRef, children: [label && (_jsx("label", { className: "block text-sm font-medium text-text-primary mb-2", children: label })), _jsxs("div", { className: "relative", children: [_jsx(motion.div, { whileHover: !disabled ? { scale: 1.005 } : {}, transition: {
                            type: 'spring',
                            stiffness: 300,
                            damping: 30,
                        }, children: _jsx("input", { type: "text", readOnly: true, value: getDisplayText(), onClick: handleInputClick, placeholder: placeholder, disabled: disabled, className: inputClassName }) }), _jsxs("div", { className: "absolute right-3 top-1/2 -translate-y-1/2 flex items-center gap-1", children: [range.from && !disabled && (_jsx(motion.button, { whileHover: { scale: 1.1 }, whileTap: { scale: 0.9 }, onClick: handleClear, className: "p-1 rounded-md hover:bg-surface-secondary transition-apple", type: "button", children: _jsx("svg", { className: "w-4 h-4 text-text-tertiary", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", children: _jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M6 18L18 6M6 6l12 12" }) }) })), _jsx("svg", { className: "w-5 h-5 text-text-tertiary pointer-events-none", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", children: _jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" }) })] }), _jsx(AnimatePresence, { children: isOpen && (_jsx(Calendar, { range: range, onSelectDate: handleSelectDate, minDate: minDate, maxDate: maxDate, currentMonth: currentMonth, onMonthChange: setCurrentMonth })) })] }), (error || helperText) && (_jsx(motion.p, { initial: { opacity: 0, y: -4 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.16 }, className: `
                        mt-2 text-sm
                        ${hasError ? 'text-status-error' : 'text-text-secondary'}
                    `, children: error || helperText }))] }));
};
DateRangePicker.displayName = 'DateRangePicker';
//# sourceMappingURL=DateRangePicker.js.map