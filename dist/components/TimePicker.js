import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Clock } from 'lucide-react';
import { cn } from '../lib/utils';
/* ========================================
   UTILITY FUNCTIONS
   ======================================== */
const parseTime = (timeStr) => {
    if (!timeStr)
        return null;
    const [hours, minutes] = timeStr.split(':').map(Number);
    if (isNaN(hours) || isNaN(minutes))
        return null;
    if (hours < 0 || hours > 23 || minutes < 0 || minutes > 59)
        return null;
    return { hours, minutes };
};
const formatTimeDisplay = (hours, minutes, format) => {
    const mm = minutes.toString().padStart(2, '0');
    if (format === '24h') {
        const hh = hours.toString().padStart(2, '0');
        return `${hh}:${mm}`;
    }
    else {
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
export const TimePicker = ({ label, value, onChange, placeholder = 'Select time', error, helperText, disabled = false, format = '12h', step = 15, className = '', }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [inputValue, setInputValue] = useState('');
    const containerRef = useRef(null);
    // Internal state for the dropdown selection
    const [selectedHour, setSelectedHour] = useState(new Date().getHours());
    const [selectedMinute, setSelectedMinute] = useState(Math.floor(new Date().getMinutes() / step) * step);
    const [selectedPeriod, setSelectedPeriod] = useState(new Date().getHours() >= 12 ? 'PM' : 'AM');
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
        }
        else {
            setInputValue('');
        }
    }, [value, format]);
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
    const handleInputClick = () => {
        if (!disabled) {
            setIsOpen(!isOpen);
        }
    };
    const handleTimeChange = (newHour, newMinute) => {
        setSelectedHour(newHour);
        setSelectedMinute(newMinute);
        // Format for value prop (always 24h HH:mm)
        const hh = newHour.toString().padStart(2, '0');
        const mm = newMinute.toString().padStart(2, '0');
        const timeString = `${hh}:${mm}`;
        onChange?.(timeString);
        setInputValue(formatTimeDisplay(newHour, newMinute, format));
    };
    const handleHourSelect = (hour) => {
        let newHour = hour;
        if (format === '12h') {
            if (selectedPeriod === 'PM' && hour !== 12)
                newHour = hour + 12;
            if (selectedPeriod === 'AM' && hour === 12)
                newHour = 0;
        }
        handleTimeChange(newHour, selectedMinute);
    };
    const handleMinuteSelect = (minute) => {
        handleTimeChange(selectedHour, minute);
    };
    const handlePeriodSelect = (period) => {
        setSelectedPeriod(period);
        let newHour = selectedHour;
        if (period === 'AM' && selectedHour >= 12) {
            newHour = selectedHour - 12;
        }
        else if (period === 'PM' && selectedHour < 12) {
            newHour = selectedHour + 12;
        }
        handleTimeChange(newHour, selectedMinute);
    };
    // Generate options
    const hours = format === '12h'
        ? Array.from({ length: 12 }, (_, i) => i + 1) // 1-12
        : Array.from({ length: 24 }, (_, i) => i); // 0-23
    const minutes = Array.from({ length: 60 / step }, (_, i) => i * step);
    return (_jsxs("div", { className: cn("w-full", className), ref: containerRef, children: [label && (_jsx("label", { className: "block text-sm font-medium text-text-primary mb-2", children: label })), _jsxs("div", { className: "relative", children: [_jsx(motion.div, { whileHover: !disabled ? { scale: 1.005 } : {}, transition: { type: 'spring', stiffness: 300, damping: 30 }, children: _jsx("input", { type: "text", readOnly: true, value: inputValue, onClick: handleInputClick, placeholder: placeholder, disabled: disabled, className: cn(baseInputStyles, hasError && 'border-status-error focus:border-status-error focus:ring-status-error/20') }) }), _jsx("div", { className: "absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none", children: _jsx(Clock, { className: "w-5 h-5 text-text-tertiary" }) }), _jsx(AnimatePresence, { children: isOpen && (_jsx(motion.div, { initial: { opacity: 0, y: -8, scale: 0.96 }, animate: { opacity: 1, y: 0, scale: 1 }, exit: { opacity: 0, y: -8, scale: 0.96 }, transition: { type: 'spring', stiffness: 400, damping: 30 }, className: "absolute top-full left-0 mt-2 z-[1300] w-full min-w-[280px] p-4 bg-surface-primary border border-border-primary rounded-2xl shadow-lg backdrop-blur-xl", children: _jsxs("div", { className: "flex gap-2 h-48", children: [_jsxs("div", { className: "flex-1 flex flex-col", children: [_jsx("div", { className: "text-xs font-medium text-text-tertiary mb-2 text-center", children: "Hour" }), _jsx("div", { className: "flex-1 overflow-y-auto scrollbar-hide space-y-1", children: hours.map((h) => {
                                                    const isSelected = format === '12h'
                                                        ? (selectedHour % 12 || 12) === h
                                                        : selectedHour === h;
                                                    return (_jsx("button", { onClick: () => handleHourSelect(h), className: cn("w-full py-1.5 px-2 rounded-lg text-sm transition-colors", isSelected
                                                            ? "bg-accent-blue text-white font-medium"
                                                            : "text-text-primary hover:bg-surface-secondary"), children: h.toString().padStart(2, '0') }, h));
                                                }) })] }), _jsx("div", { className: "flex items-center justify-center text-text-tertiary", children: ":" }), _jsxs("div", { className: "flex-1 flex flex-col", children: [_jsx("div", { className: "text-xs font-medium text-text-tertiary mb-2 text-center", children: "Minute" }), _jsx("div", { className: "flex-1 overflow-y-auto scrollbar-hide space-y-1", children: minutes.map((m) => (_jsx("button", { onClick: () => handleMinuteSelect(m), className: cn("w-full py-1.5 px-2 rounded-lg text-sm transition-colors", selectedMinute === m
                                                        ? "bg-accent-blue text-white font-medium"
                                                        : "text-text-primary hover:bg-surface-secondary"), children: m.toString().padStart(2, '0') }, m))) })] }), format === '12h' && (_jsxs(_Fragment, { children: [_jsx("div", { className: "w-px bg-border-primary mx-1" }), _jsxs("div", { className: "flex-1 flex flex-col", children: [_jsx("div", { className: "text-xs font-medium text-text-tertiary mb-2 text-center", children: "Period" }), _jsx("div", { className: "flex-1 space-y-1", children: ['AM', 'PM'].map((period) => (_jsx("button", { onClick: () => handlePeriodSelect(period), className: cn("w-full py-1.5 px-2 rounded-lg text-sm transition-colors", selectedPeriod === period
                                                                ? "bg-accent-blue text-white font-medium"
                                                                : "text-text-primary hover:bg-surface-secondary"), children: period }, period))) })] })] }))] }) })) })] }), (error || helperText) && (_jsx(motion.p, { initial: { opacity: 0, y: -4 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.16 }, className: cn("mt-2 text-sm", hasError ? "text-status-error" : "text-text-secondary"), children: error || helperText }))] }));
};
TimePicker.displayName = 'TimePicker';
//# sourceMappingURL=TimePicker.js.map