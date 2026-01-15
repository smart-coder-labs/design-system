import React, { useState, useRef, useEffect } from 'react';
import { tokens } from '../tokens';
import { Button } from './Button';

export interface SchedulerResource {
    id: string;
    name: string;
    subtitle?: string;
    avatar?: string;
    color?: string;
}

export interface SchedulerEvent {
    id: string;
    resourceId: string;
    title: string;
    description?: string;
    startTime: string; // Format "HH:MM"
    endTime: string;   // Format "HH:MM"
    date?: Date;       // Date of the event
    color?: string;
}

export interface SchedulerTimelineProps {
    resources: SchedulerResource[];
    events: SchedulerEvent[];
    date: Date;
    startHour?: number;
    endHour?: number;
    onEventClick?: (event: SchedulerEvent) => void;
    onTimeSlotClick?: (resourceId: string, time: string) => void;
    onDateChange?: (date: Date) => void;
    className?: string;
}

const MONTHS = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
];

const DAYS_FULL = [
    'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'
];

export const SchedulerTimeline: React.FC<SchedulerTimelineProps> = ({
    resources,
    events,
    date,
    startHour = 8,
    endHour = 18,
    onEventClick,
    onTimeSlotClick,
    onDateChange,
    className = '',
}) => {
    const [currentTime, setCurrentTime] = useState(new Date());
    const scrollContainerRef = useRef<HTMLDivElement>(null);

    // Update current time indicator every minute
    useEffect(() => {
        const interval = setInterval(() => setCurrentTime(new Date()), 60000);
        return () => clearInterval(interval);
    }, []);

    const hours = Array.from({ length: endHour - startHour + 1 }, (_, i) => startHour + i);
    const hourWidth = 100; // px per hour
    const headerHeight = 50;
    const resourceColumnWidth = 200;

    const timeToPixels = (time: string) => {
        const [h, m] = time.split(':').map(Number);
        if (h < startHour || h > endHour) return -1;
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

    const isSameDay = (d1: Date, d2: Date) => {
        return d1.getDate() === d2.getDate() &&
            d1.getMonth() === d2.getMonth() &&
            d1.getFullYear() === d2.getFullYear();
    };

    const isToday = (d: Date) => {
        return isSameDay(d, new Date());
    };

    // Calculate current time line position
    const getCurrentTimePosition = () => {
        const now = currentTime;
        const h = now.getHours();
        const m = now.getMinutes();
        if (h < startHour || h > endHour) return null;
        return (h - startHour) * hourWidth + (m / 60) * hourWidth;
    };

    const currentTimePos = isToday(date) ? getCurrentTimePosition() : null;

    return (
        <div
            className={`scheduler-timeline ${className}`}
            style={{
                backgroundColor: 'var(--color-background-primary)',
                borderRadius: tokens.radius.lg,
                border: `1px solid var(--color-border-primary)`,
                boxShadow: tokens.shadows.sm,
                display: 'flex',
                flexDirection: 'column',
                height: '100%',
                maxHeight: '800px',
                overflow: 'hidden',
            }}
        >
            {/* Header Controls */}
            <div
                style={{
                    padding: tokens.spacing[4],
                    borderBottom: `1px solid var(--color-border-primary)`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    backgroundColor: 'var(--color-background-primary)',
                }}
            >
                <div style={{ display: 'flex', alignItems: 'center', gap: tokens.spacing[2] }}>
                    <Button variant="ghost" size="sm" onClick={handlePrevDay}>←</Button>
                    <Button variant="ghost" size="sm" onClick={handleToday}>Today</Button>
                    <Button variant="ghost" size="sm" onClick={handleNextDay}>→</Button>
                    <h3
                        style={{
                            margin: 0,
                            marginLeft: tokens.spacing[2],
                            fontSize: tokens.typography.fontSize.lg,
                            fontWeight: tokens.typography.fontWeight.semibold,
                            color: 'var(--color-text-primary)',
                        }}
                    >
                        {DAYS_FULL[date.getDay()]}, {MONTHS[date.getMonth()]} {date.getDate()}, {date.getFullYear()}
                    </h3>
                </div>
            </div>

            {/* Timeline Content */}
            <div style={{ display: 'flex', flex: 1, overflow: 'hidden' }}>
                {/* Resources Column */}
                <div
                    style={{
                        width: `${resourceColumnWidth}px`,
                        flexShrink: 0,
                        borderRight: `1px solid var(--color-border-primary)`,
                        backgroundColor: 'var(--color-background-secondary)',
                        zIndex: 20,
                        boxShadow: '2px 0 5px rgba(0,0,0,0.05)',
                    }}
                >
                    {/* Corner Header */}
                    <div
                        style={{
                            height: `${headerHeight}px`,
                            borderBottom: `1px solid var(--color-border-primary)`,
                            display: 'flex',
                            alignItems: 'center',
                            padding: `0 ${tokens.spacing[4]}`,
                            fontWeight: tokens.typography.fontWeight.semibold,
                            color: 'var(--color-text-secondary)',
                            fontSize: tokens.typography.fontSize.sm,
                            backgroundColor: 'var(--color-background-tertiary)',
                        }}
                    >
                        Resources
                    </div>
                    {/* Resource List */}
                    <div style={{ overflowY: 'hidden' }}> {/* Synced scroll would go here ideally */}
                        {resources.map(resource => (
                            <div
                                key={resource.id}
                                style={{
                                    height: '80px',
                                    padding: `0 ${tokens.spacing[4]}`,
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'center',
                                    borderBottom: `1px solid var(--color-border-secondary)`,
                                    backgroundColor: 'var(--color-background-primary)',
                                }}
                            >
                                <div style={{ display: 'flex', alignItems: 'center', gap: tokens.spacing[2] }}>
                                    {resource.avatar && (
                                        <div
                                            style={{
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
                                            }}
                                        >
                                            {resource.avatar}
                                        </div>
                                    )}
                                    <div style={{ fontWeight: tokens.typography.fontWeight.medium, color: 'var(--color-text-primary)' }}>
                                        {resource.name}
                                    </div>
                                </div>
                                {resource.subtitle && (
                                    <div style={{ fontSize: tokens.typography.fontSize.xs, color: 'var(--color-text-tertiary)', marginTop: '2px' }}>
                                        {resource.subtitle}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Grid Area */}
                <div
                    ref={scrollContainerRef}
                    style={{
                        flex: 1,
                        overflowX: 'auto',
                        overflowY: 'auto',
                        position: 'relative',
                    }}
                >
                    <div style={{ minWidth: `${hours.length * hourWidth}px` }}>
                        {/* Time Header */}
                        <div
                            style={{
                                height: `${headerHeight}px`,
                                display: 'flex',
                                borderBottom: `1px solid var(--color-border-primary)`,
                                position: 'sticky',
                                top: 0,
                                backgroundColor: 'var(--color-background-primary)',
                                zIndex: 10,
                            }}
                        >
                            {hours.map(hour => (
                                <div
                                    key={hour}
                                    style={{
                                        width: `${hourWidth}px`,
                                        flexShrink: 0,
                                        padding: `${tokens.spacing[2]}`,
                                        fontSize: tokens.typography.fontSize.xs,
                                        color: 'var(--color-text-tertiary)',
                                        borderRight: `1px solid var(--color-border-secondary)`,
                                        display: 'flex',
                                        alignItems: 'center',
                                    }}
                                >
                                    {hour.toString().padStart(2, '0')}:00
                                </div>
                            ))}
                        </div>

                        {/* Resource Rows & Grid */}
                        <div style={{ position: 'relative' }}>
                            {/* Current Time Indicator */}
                            {currentTimePos !== null && (
                                <div
                                    style={{
                                        position: 'absolute',
                                        top: 0,
                                        bottom: 0,
                                        left: `${currentTimePos}px`,
                                        width: '2px',
                                        backgroundColor: 'var(--color-accent-red)',
                                        zIndex: 5,
                                        pointerEvents: 'none',
                                    }}
                                >
                                    <div
                                        style={{
                                            position: 'absolute',
                                            top: '-6px',
                                            left: '-4px',
                                            width: '10px',
                                            height: '10px',
                                            borderRadius: '50%',
                                            backgroundColor: 'var(--color-accent-red)',
                                        }}
                                    />
                                </div>
                            )}

                            {resources.map(resource => (
                                <div
                                    key={resource.id}
                                    style={{
                                        height: '80px',
                                        borderBottom: `1px solid var(--color-border-secondary)`,
                                        position: 'relative',
                                        backgroundImage: `linear-gradient(to right, transparent 99px, var(--color-border-secondary) 1px)`,
                                        backgroundSize: `${hourWidth}px 100%`,
                                    }}
                                >
                                    {/* Events for this resource */}
                                    {events
                                        .filter(e => e.resourceId === resource.id)
                                        .filter(e => !e.date || isSameDay(e.date, date))
                                        .map(event => {
                                            const startPx = timeToPixels(event.startTime);
                                            const endPx = timeToPixels(event.endTime);

                                            if (startPx === -1 || endPx === -1) return null;

                                            const width = Math.max(endPx - startPx, 2); // Min width 2px

                                            return (
                                                <div
                                                    key={event.id}
                                                    onClick={(e) => {
                                                        e.stopPropagation();
                                                        onEventClick?.(event);
                                                    }}
                                                    style={{
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
                                                    }}
                                                    onMouseEnter={(e) => {
                                                        e.currentTarget.style.transform = 'scale(1.02)';
                                                        e.currentTarget.style.zIndex = '10';
                                                    }}
                                                    onMouseLeave={(e) => {
                                                        e.currentTarget.style.transform = 'scale(1)';
                                                        e.currentTarget.style.zIndex = '1';
                                                    }}
                                                >
                                                    <div style={{ fontWeight: 'bold', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                                                        {event.title}
                                                    </div>
                                                    {event.description && (
                                                        <div style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', opacity: 0.9 }}>
                                                            {event.description}
                                                        </div>
                                                    )}
                                                </div>
                                            );
                                        })}

                                    {/* Clickable slots (invisible overlay) */}
                                    {hours.map(hour => (
                                        <div
                                            key={hour}
                                            onClick={() => onTimeSlotClick?.(resource.id, `${hour.toString().padStart(2, '0')}:00`)}
                                            style={{
                                                position: 'absolute',
                                                left: `${(hour - startHour) * hourWidth}px`,
                                                width: `${hourWidth}px`,
                                                top: 0,
                                                bottom: 0,
                                                cursor: 'pointer',
                                                zIndex: 0,
                                            }}
                                            title={`Click to add event at ${hour}:00`}
                                        />
                                    ))}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
