import React from 'react';
import { tokens } from '../tokens';
import { CalendarEvent } from './Calendar';

interface AgendaViewProps {
    events: CalendarEvent[];
    currentDate: Date;
    days?: number;
    onEventClick?: (event: CalendarEvent) => void;
}

const MONTHS = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
];

const DAYS_FULL = [
    'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'
];

export const AgendaView: React.FC<AgendaViewProps> = ({
    events,
    currentDate,
    days = 30,
    onEventClick,
}) => {
    // Filter events within the specified number of days from currentDate
    const startDate = new Date(currentDate);
    startDate.setHours(0, 0, 0, 0);
    const endDate = new Date(currentDate);
    endDate.setDate(endDate.getDate() + days);
    endDate.setHours(23, 59, 59, 999);

    const filteredEvents = events.filter(event => {
        const eventDate = new Date(event.date);
        return eventDate >= startDate && eventDate <= endDate;
    });

    const sortedEvents = [...filteredEvents].sort((a, b) => a.date.getTime() - b.date.getTime());
    const groupedEvents: { [key: string]: CalendarEvent[] } = {};

    sortedEvents.forEach(event => {
        const dateKey = event.date.toDateString();
        if (!groupedEvents[dateKey]) {
            groupedEvents[dateKey] = [];
        }
        groupedEvents[dateKey].push(event);
    });

    return (
        <div style={{ maxHeight: '600px', overflowY: 'auto' }}>
            {Object.keys(groupedEvents).length === 0 ? (
                <div style={{ textAlign: 'center', padding: tokens.spacing[8], color: 'var(--color-text-tertiary)' }}>
                    No events scheduled
                </div>
            ) : (
                Object.keys(groupedEvents).map(dateKey => {
                    const date = new Date(dateKey);
                    const dayEvents = groupedEvents[dateKey];

                    return (
                        <div key={dateKey} style={{ marginBottom: tokens.spacing[4] }}>
                            <div style={{ fontSize: tokens.typography.fontSize.lg, fontWeight: tokens.typography.fontWeight.semibold, color: 'var(--color-text-primary)', marginBottom: tokens.spacing[2], paddingBottom: tokens.spacing[2], borderBottom: `1px solid var(--color-border-primary)` }}>
                                {DAYS_FULL[date.getDay()]}, {MONTHS[date.getMonth()]} {date.getDate()}, {date.getFullYear()}
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: tokens.spacing[4] }}>
                                {dayEvents.map(event => (
                                    <div
                                        key={event.id}
                                        onClick={() => onEventClick?.(event)}
                                        style={{
                                            padding: tokens.spacing[4],
                                            backgroundColor: 'var(--color-background-secondary)',
                                            borderLeft: `4px solid ${event.color || 'var(--color-accent-blue)'}`,
                                            borderRadius: tokens.radius.md,
                                            cursor: 'pointer',
                                            transition: `all ${tokens.motion.duration.fast} ${tokens.motion.easing.standard}`,
                                        }}
                                        onMouseEnter={(e) => {
                                            e.currentTarget.style.backgroundColor = 'var(--color-background-tertiary)';
                                        }}
                                        onMouseLeave={(e) => {
                                            e.currentTarget.style.backgroundColor = 'var(--color-background-secondary)';
                                        }}
                                    >
                                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start' }}>
                                            <div style={{ flex: 1 }}>
                                                <div style={{ fontSize: tokens.typography.fontSize.base, fontWeight: tokens.typography.fontWeight.semibold, color: 'var(--color-text-primary)', marginBottom: tokens.spacing[2] }}>
                                                    {event.title}
                                                </div>
                                                {event.description && (
                                                    <div style={{ fontSize: tokens.typography.fontSize.sm, color: 'var(--color-text-secondary)', marginBottom: tokens.spacing[2] }}>
                                                        {event.description}
                                                    </div>
                                                )}
                                                <div style={{ fontSize: tokens.typography.fontSize.sm, color: 'var(--color-text-tertiary)' }}>
                                                    {event.startTime && `${event.startTime} - ${event.endTime}`}
                                                    {event.location && ` • 📍 ${event.location}`}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    );
                })
            )}
        </div>
    );
};
