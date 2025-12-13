import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useRef, useEffect } from 'react';
import { tokens } from '../tokens';
import { Button } from './Button';
const MONTHS = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
];
const DAYS_FULL = [
    'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'
];
export const SchedulerTimeline = ({ resources, events, date, startHour = 8, endHour = 18, onEventClick, onTimeSlotClick, onDateChange, className = '', }) => {
    const [currentTime, setCurrentTime] = useState(new Date());
    const scrollContainerRef = useRef(null);
    // Update current time indicator every minute
    useEffect(() => {
        const interval = setInterval(() => setCurrentTime(new Date()), 60000);
        return () => clearInterval(interval);
    }, []);
    const hours = Array.from({ length: endHour - startHour + 1 }, (_, i) => startHour + i);
    const hourWidth = 100; // px per hour
    const headerHeight = 50;
    const resourceColumnWidth = 200;
    const timeToPixels = (time) => {
        const [h, m] = time.split(':').map(Number);
        if (h < startHour || h > endHour)
            return -1;
        return (h - startHour) * hourWidth + (m / 60) * hourWidth;
    };
    const handlePrevDay = () => {
        const newDate = new Date(date);
        newDate.setDate(date.getDate() - 1);
        onDateChange?.(newDate);
    };
    const handleNextDay = () => {
        const newDate = new Date(date);
        newDate.setDate(date.getDate() + 1);
        onDateChange?.(newDate);
    };
    const handleToday = () => {
        onDateChange?.(new Date());
    };
    const isSameDay = (d1, d2) => {
        return d1.getDate() === d2.getDate() &&
            d1.getMonth() === d2.getMonth() &&
            d1.getFullYear() === d2.getFullYear();
    };
    const isToday = (d) => {
        return isSameDay(d, new Date());
    };
    // Calculate current time line position
    const getCurrentTimePosition = () => {
        const now = currentTime;
        const h = now.getHours();
        const m = now.getMinutes();
        if (h < startHour || h > endHour)
            return null;
        return (h - startHour) * hourWidth + (m / 60) * hourWidth;
    };
    const currentTimePos = isToday(date) ? getCurrentTimePosition() : null;
    return (_jsxs("div", { className: `scheduler-timeline ${className}`, style: {
            backgroundColor: 'var(--color-background-primary)',
            borderRadius: tokens.radius.lg,
            border: `1px solid var(--color-border-primary)`,
            boxShadow: tokens.shadows.sm,
            display: 'flex',
            flexDirection: 'column',
            height: '100%',
            maxHeight: '800px',
            overflow: 'hidden',
        }, children: [_jsx("div", { style: {
                    padding: tokens.spacing[4],
                    borderBottom: `1px solid var(--color-border-primary)`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    backgroundColor: 'var(--color-background-primary)',
                }, children: _jsxs("div", { style: { display: 'flex', alignItems: 'center', gap: tokens.spacing[2] }, children: [_jsx(Button, { variant: "ghost", size: "sm", onClick: handlePrevDay, children: "\u2190" }), _jsx(Button, { variant: "ghost", size: "sm", onClick: handleToday, children: "Today" }), _jsx(Button, { variant: "ghost", size: "sm", onClick: handleNextDay, children: "\u2192" }), _jsxs("h3", { style: {
                                margin: 0,
                                marginLeft: tokens.spacing[2],
                                fontSize: tokens.typography.fontSize.lg,
                                fontWeight: tokens.typography.fontWeight.semibold,
                                color: 'var(--color-text-primary)',
                            }, children: [DAYS_FULL[date.getDay()], ", ", MONTHS[date.getMonth()], " ", date.getDate(), ", ", date.getFullYear()] })] }) }), _jsxs("div", { style: { display: 'flex', flex: 1, overflow: 'hidden' }, children: [_jsxs("div", { style: {
                            width: `${resourceColumnWidth}px`,
                            flexShrink: 0,
                            borderRight: `1px solid var(--color-border-primary)`,
                            backgroundColor: 'var(--color-background-secondary)',
                            zIndex: 20,
                            boxShadow: '2px 0 5px rgba(0,0,0,0.05)',
                        }, children: [_jsx("div", { style: {
                                    height: `${headerHeight}px`,
                                    borderBottom: `1px solid var(--color-border-primary)`,
                                    display: 'flex',
                                    alignItems: 'center',
                                    padding: `0 ${tokens.spacing[4]}`,
                                    fontWeight: tokens.typography.fontWeight.semibold,
                                    color: 'var(--color-text-secondary)',
                                    fontSize: tokens.typography.fontSize.sm,
                                    backgroundColor: 'var(--color-background-tertiary)',
                                }, children: "Resources" }), _jsxs("div", { style: { overflowY: 'hidden' }, children: [" ", resources.map(resource => (_jsxs("div", { style: {
                                            height: '80px',
                                            padding: `0 ${tokens.spacing[4]}`,
                                            display: 'flex',
                                            flexDirection: 'column',
                                            justifyContent: 'center',
                                            borderBottom: `1px solid var(--color-border-secondary)`,
                                            backgroundColor: 'var(--color-background-primary)',
                                        }, children: [_jsxs("div", { style: { display: 'flex', alignItems: 'center', gap: tokens.spacing[2] }, children: [resource.avatar && (_jsx("div", { style: {
                                                            width: '24px',
                                                            height: '24px',
                                                            borderRadius: '50%',
                                                            backgroundColor: resource.color || 'var(--color-accent-blue)',
                                                            display: 'flex',
                                                            alignItems: 'center',
                                                            justifyContent: 'center',
                                                            color: '#fff',
                                                            fontSize: '10px',
                                                            fontWeight: 'bold',
                                                        }, children: resource.avatar })), _jsx("div", { style: { fontWeight: tokens.typography.fontWeight.medium, color: 'var(--color-text-primary)' }, children: resource.name })] }), resource.subtitle && (_jsx("div", { style: { fontSize: tokens.typography.fontSize.xs, color: 'var(--color-text-tertiary)', marginTop: '2px' }, children: resource.subtitle }))] }, resource.id)))] })] }), _jsx("div", { ref: scrollContainerRef, style: {
                            flex: 1,
                            overflowX: 'auto',
                            overflowY: 'auto',
                            position: 'relative',
                        }, children: _jsxs("div", { style: { minWidth: `${hours.length * hourWidth}px` }, children: [_jsx("div", { style: {
                                        height: `${headerHeight}px`,
                                        display: 'flex',
                                        borderBottom: `1px solid var(--color-border-primary)`,
                                        position: 'sticky',
                                        top: 0,
                                        backgroundColor: 'var(--color-background-primary)',
                                        zIndex: 10,
                                    }, children: hours.map(hour => (_jsxs("div", { style: {
                                            width: `${hourWidth}px`,
                                            flexShrink: 0,
                                            padding: `${tokens.spacing[2]}`,
                                            fontSize: tokens.typography.fontSize.xs,
                                            color: 'var(--color-text-tertiary)',
                                            borderRight: `1px solid var(--color-border-secondary)`,
                                            display: 'flex',
                                            alignItems: 'center',
                                        }, children: [hour.toString().padStart(2, '0'), ":00"] }, hour))) }), _jsxs("div", { style: { position: 'relative' }, children: [currentTimePos !== null && (_jsx("div", { style: {
                                                position: 'absolute',
                                                top: 0,
                                                bottom: 0,
                                                left: `${currentTimePos}px`,
                                                width: '2px',
                                                backgroundColor: 'var(--color-accent-red)',
                                                zIndex: 5,
                                                pointerEvents: 'none',
                                            }, children: _jsx("div", { style: {
                                                    position: 'absolute',
                                                    top: '-6px',
                                                    left: '-4px',
                                                    width: '10px',
                                                    height: '10px',
                                                    borderRadius: '50%',
                                                    backgroundColor: 'var(--color-accent-red)',
                                                } }) })), resources.map(resource => (_jsxs("div", { style: {
                                                height: '80px',
                                                borderBottom: `1px solid var(--color-border-secondary)`,
                                                position: 'relative',
                                                backgroundImage: `linear-gradient(to right, transparent 99px, var(--color-border-secondary) 1px)`,
                                                backgroundSize: `${hourWidth}px 100%`,
                                            }, children: [events
                                                    .filter(e => e.resourceId === resource.id)
                                                    .filter(e => !e.date || isSameDay(e.date, date))
                                                    .map(event => {
                                                    const startPx = timeToPixels(event.startTime);
                                                    const endPx = timeToPixels(event.endTime);
                                                    if (startPx === -1 || endPx === -1)
                                                        return null;
                                                    const width = Math.max(endPx - startPx, 2); // Min width 2px
                                                    return (_jsxs("div", { onClick: (e) => {
                                                            e.stopPropagation();
                                                            onEventClick?.(event);
                                                        }, style: {
                                                            position: 'absolute',
                                                            left: `${startPx}px`,
                                                            width: `${width}px`,
                                                            top: '10px',
                                                            bottom: '10px',
                                                            backgroundColor: event.color || resource.color || 'var(--color-accent-blue)',
                                                            borderRadius: tokens.radius.md,
                                                            padding: tokens.spacing[2],
                                                            color: '#fff',
                                                            fontSize: tokens.typography.fontSize.xs,
                                                            overflow: 'hidden',
                                                            cursor: 'pointer',
                                                            boxShadow: tokens.shadows.sm,
                                                            transition: 'transform 0.2s',
                                                            zIndex: 1,
                                                        }, onMouseEnter: (e) => {
                                                            e.currentTarget.style.transform = 'scale(1.02)';
                                                            e.currentTarget.style.zIndex = '10';
                                                        }, onMouseLeave: (e) => {
                                                            e.currentTarget.style.transform = 'scale(1)';
                                                            e.currentTarget.style.zIndex = '1';
                                                        }, children: [_jsx("div", { style: { fontWeight: 'bold', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }, children: event.title }), event.description && (_jsx("div", { style: { whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', opacity: 0.9 }, children: event.description }))] }, event.id));
                                                }), hours.map(hour => (_jsx("div", { onClick: () => onTimeSlotClick?.(resource.id, `${hour.toString().padStart(2, '0')}:00`), style: {
                                                        position: 'absolute',
                                                        left: `${(hour - startHour) * hourWidth}px`,
                                                        width: `${hourWidth}px`,
                                                        top: 0,
                                                        bottom: 0,
                                                        cursor: 'pointer',
                                                        zIndex: 0,
                                                    }, title: `Click to add event at ${hour}:00` }, hour)))] }, resource.id)))] })] }) })] })] }));
};
//# sourceMappingURL=SchedulerTimeline.js.map