import React, { useState } from 'react';
import { tokens } from '../tokens';
import { Button } from './Button';
import { Modal, ModalHeader, ModalTitle, ModalContent, ModalFooter, ModalCloseButton } from './Modal';
import { Input, Textarea } from './Input';
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from './Select';
import { AgendaView } from './AgendaView';

export interface CalendarEvent {
    id: string;
    date: Date;
    startTime?: string;
    endTime?: string;
    title: string;
    description?: string;
    color?: string;
    location?: string;
}

export type CalendarView = 'month' | 'week' | 'day' | 'agenda';

export interface CalendarProps {
    value?: Date;
    onChange?: (date: Date) => void;
    events?: CalendarEvent[];
    onAddEvent?: (event: Omit<CalendarEvent, 'id'>) => void;
    onUpdateEvent?: (id: string, event: Partial<CalendarEvent>) => void;
    onDeleteEvent?: (id: string) => void;
    minDate?: Date;
    maxDate?: Date;
    showWeekNumbers?: boolean;
    highlightToday?: boolean;
    defaultView?: CalendarView;
    className?: string;
}

const DAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const DAYS_FULL = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const MONTHS = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
];

const EVENT_COLORS = [
    { value: '#007AFF', label: 'Blue' },
    { value: '#34C759', label: 'Green' },
    { value: '#FF9500', label: 'Orange' },
    { value: '#FF3B30', label: 'Red' },
    { value: '#5AC8FA', label: 'Cyan' },
    { value: '#AF52DE', label: 'Purple' },
];

export const Calendar: React.FC<CalendarProps> = ({
    value,
    onChange,
    events = [],
    onAddEvent,
    onUpdateEvent,
    onDeleteEvent,
    minDate,
    maxDate,
    highlightToday = true,
    defaultView = 'month',
    className = '',
}) => {
    const [currentDate, setCurrentDate] = useState(value || new Date());
    const [selectedDate, setSelectedDate] = useState<Date | null>(value || null);
    const [view, setView] = useState<CalendarView>(defaultView);
    const [showEventModal, setShowEventModal] = useState(false);
    const [selectedEvent, setSelectedEvent] = useState<CalendarEvent | null>(null);
    const [agendaPeriod, setAgendaPeriod] = useState<7 | 14 | 30>(30);
    const [eventFormData, setEventFormData] = useState({
        title: '',
        description: '',
        date: new Date(),
        startTime: '09:00',
        endTime: '10:00',
        color: '#007AFF',
        location: '',
    });

    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const getDaysInMonth = (date: Date) => {
        return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
    };

    const getFirstDayOfMonth = (date: Date) => {
        return new Date(date.getFullYear(), date.getMonth(), 1).getDay();
    };

    const isSameDay = (date1: Date, date2: Date) => {
        return (
            date1.getDate() === date2.getDate() &&
            date1.getMonth() === date2.getMonth() &&
            date1.getFullYear() === date2.getFullYear()
        );
    };

    const isDisabled = (date: Date) => {
        if (minDate && date < minDate) return true;
        if (maxDate && date > maxDate) return true;
        return false;
    };

    const getEventsForDate = (date: Date) => {
        return events.filter(event => isSameDay(event.date, date));
    };

    const handlePrevPeriod = () => {
        if (view === 'month') {
            setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1));
        } else if (view === 'week') {
            const newDate = new Date(currentDate);
            newDate.setDate(newDate.getDate() - 7);
            setCurrentDate(newDate);
        } else if (view === 'day') {
            const newDate = new Date(currentDate);
            newDate.setDate(newDate.getDate() - 1);
            setCurrentDate(newDate);
        }
    };

    const handleNextPeriod = () => {
        if (view === 'month') {
            setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1));
        } else if (view === 'week') {
            const newDate = new Date(currentDate);
            newDate.setDate(newDate.getDate() + 7);
            setCurrentDate(newDate);
        } else if (view === 'day') {
            const newDate = new Date(currentDate);
            newDate.setDate(newDate.getDate() + 1);
            setCurrentDate(newDate);
        }
    };

    const handleToday = () => {
        setCurrentDate(new Date());
        setSelectedDate(new Date());
        onChange?.(new Date());
    };

    const handleDateClick = (date: Date) => {
        if (!isDisabled(date)) {
            setSelectedDate(date);
            setEventFormData({ ...eventFormData, date });
            onChange?.(date);
        }
    };

    const handleAddEvent = () => {
        setSelectedEvent(null);
        setEventFormData({
            title: '',
            description: '',
            date: selectedDate || new Date(),
            startTime: '09:00',
            endTime: '10:00',
            color: '#007AFF',
            location: '',
        });
        setShowEventModal(true);
    };

    const handleEditEvent = (event: CalendarEvent) => {
        setSelectedEvent(event);
        setEventFormData({
            title: event.title,
            description: event.description || '',
            date: event.date,
            startTime: event.startTime || '09:00',
            endTime: event.endTime || '10:00',
            color: event.color || '#007AFF',
            location: event.location || '',
        });
        setShowEventModal(true);
    };

    const handleSaveEvent = () => {
        if (!eventFormData.title.trim()) return;

        if (selectedEvent) {
            // Update existing event
            onUpdateEvent?.(selectedEvent.id, {
                ...eventFormData,
            });
        } else {
            // Create new event
            onAddEvent?.({
                ...eventFormData,
            });
        }

        setShowEventModal(false);
        setSelectedEvent(null);
    };

    const handleDeleteEvent = () => {
        if (selectedEvent) {
            onDeleteEvent?.(selectedEvent.id);
            setShowEventModal(false);
            setSelectedEvent(null);
        }
    };

    const getWeekDates = () => {
        const startOfWeek = new Date(currentDate);
        const day = startOfWeek.getDay();
        startOfWeek.setDate(startOfWeek.getDate() - day);

        const dates = [];
        for (let i = 0; i < 7; i++) {
            const date = new Date(startOfWeek);
            date.setDate(date.getDate() + i);
            dates.push(date);
        }
        return dates;
    };

    const renderMonthView = () => {
        const daysInMonth = getDaysInMonth(currentDate);
        const firstDay = getFirstDayOfMonth(currentDate);
        const days = [];

        // Previous month's trailing days
        const prevMonthDays = getDaysInMonth(
            new Date(currentDate.getFullYear(), currentDate.getMonth() - 1)
        );
        for (let i = firstDay - 1; i >= 0; i--) {
            const day = prevMonthDays - i;
            days.push(
                <div
                    key={`prev-${day}`}
                    className="calendar-day-other"
                    style={{
                        padding: tokens.spacing[2],
                        minHeight: '80px',
                        color: 'var(--color-text-quaternary)',
                        fontSize: tokens.typography.fontSize.sm,
                    }}
                >
                    {day}
                </div>
            );
        }

        // Current month days
        for (let day = 1; day <= daysInMonth; day++) {
            const date = new Date(currentDate.getFullYear(), currentDate.getMonth(), day);
            const isToday = highlightToday && isSameDay(date, today);
            const isSelected = selectedDate && isSameDay(date, selectedDate);
            const disabled = isDisabled(date);
            const dayEvents = getEventsForDate(date);

            days.push(
                <div
                    key={`current-${day}`}
                    onClick={() => !disabled && handleDateClick(date)}
                    style={{
                        padding: tokens.spacing[2],
                        minHeight: '80px',
                        backgroundColor: isSelected ? 'var(--color-accent-blue-tint)' : 'transparent',
                        border: isToday ? '2px solid var(--color-accent-blue)' : '1px solid var(--color-border-secondary)',
                        borderRadius: tokens.radius.md,
                        cursor: disabled ? 'not-allowed' : 'pointer',
                        opacity: disabled ? 0.4 : 1,
                        transition: `all ${tokens.motion.duration.fast} ${tokens.motion.easing.standard}`,
                    }}
                    onMouseEnter={(e) => {
                        if (!disabled) {
                            e.currentTarget.style.backgroundColor = isSelected ? 'var(--color-accent-blue-tint)' : 'var(--color-background-secondary)';
                        }
                    }}
                    onMouseLeave={(e) => {
                        if (!disabled) {
                            e.currentTarget.style.backgroundColor = isSelected ? 'var(--color-accent-blue-tint)' : 'transparent';
                        }
                    }}
                >
                    <div style={{ fontWeight: isToday ? tokens.typography.fontWeight.semibold : tokens.typography.fontWeight.regular, color: isToday ? 'var(--color-accent-blue)' : 'var(--color-text-primary)', marginBottom: tokens.spacing[1] }}>
                        {day}
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: tokens.spacing[1] }}>
                        {dayEvents.slice(0, 3).map((event) => (
                            <div
                                key={event.id}
                                onClick={(e) => {
                                    e.stopPropagation();
                                    handleEditEvent(event);
                                }}
                                style={{
                                    fontSize: tokens.typography.fontSize.xs,
                                    padding: `2px ${tokens.spacing[1]}`,
                                    backgroundColor: event.color || 'var(--color-accent-blue)',
                                    color: '#FFFFFF',
                                    borderRadius: tokens.radius.sm,
                                    overflow: 'hidden',
                                    textOverflow: 'ellipsis',
                                    whiteSpace: 'nowrap',
                                    cursor: 'pointer',
                                }}
                            >
                                {event.startTime && `${event.startTime} `}{event.title}
                            </div>
                        ))}
                        {dayEvents.length > 3 && (
                            <div style={{ fontSize: tokens.typography.fontSize.xs, color: 'var(--color-text-tertiary)', paddingLeft: tokens.spacing[1] }}>
                                +{dayEvents.length - 3} more
                            </div>
                        )}
                    </div>
                </div>
            );
        }

        // Next month's leading days
        const totalDays = days.length;
        const remainingDays = totalDays % 7 === 0 ? 0 : 7 - (totalDays % 7);
        for (let day = 1; day <= remainingDays; day++) {
            days.push(
                <div
                    key={`next-${day}`}
                    className="calendar-day-other"
                    style={{
                        padding: tokens.spacing[2],
                        minHeight: '80px',
                        color: 'var(--color-text-quaternary)',
                        fontSize: tokens.typography.fontSize.sm,
                    }}
                >
                    {day}
                </div>
            );
        }

        return days;
    };

    const renderWeekView = () => {
        const weekDates = getWeekDates();
        const hours = Array.from({ length: 24 }, (_, i) => i);

        return (
            <div style={{ display: 'flex', gap: tokens.spacing[2] }}>
                {/* Time column */}
                <div style={{ width: '60px', flexShrink: 0 }}>
                    <div style={{ height: '60px' }}></div>
                    {hours.map(hour => (
                        <div key={hour} style={{ height: '60px', fontSize: tokens.typography.fontSize.xs, color: 'var(--color-text-tertiary)', paddingTop: tokens.spacing[1] }}>
                            {hour.toString().padStart(2, '0')}:00
                        </div>
                    ))}
                </div>

                {/* Days columns */}
                {weekDates.map((date, index) => {
                    const isToday = isSameDay(date, today);
                    const dayEvents = getEventsForDate(date);

                    return (
                        <div key={index} style={{ flex: 1, minWidth: '100px' }}>
                            <div style={{ height: '60px', textAlign: 'center', padding: tokens.spacing[2], backgroundColor: isToday ? 'var(--color-accent-blue-tint)' : 'transparent', borderRadius: tokens.radius.md }}>
                                <div style={{ fontSize: tokens.typography.fontSize.xs, color: 'var(--color-text-tertiary)' }}>{DAYS[date.getDay()]}</div>
                                <div style={{ fontSize: tokens.typography.fontSize.lg, fontWeight: isToday ? tokens.typography.fontWeight.bold : tokens.typography.fontWeight.medium, color: isToday ? 'var(--color-accent-blue)' : 'var(--color-text-primary)' }}>
                                    {date.getDate()}
                                </div>
                            </div>
                            <div style={{ position: 'relative' }}>
                                {hours.map(hour => (
                                    <div key={hour} style={{ height: '60px', borderTop: '1px solid var(--color-border-secondary)' }}></div>
                                ))}
                                {dayEvents.map(event => {
                                    const startHour = event.startTime ? parseInt(event.startTime.split(':')[0]) : 9;
                                    const startMinute = event.startTime ? parseInt(event.startTime.split(':')[1]) : 0;
                                    const endHour = event.endTime ? parseInt(event.endTime.split(':')[0]) : 10;
                                    const endMinute = event.endTime ? parseInt(event.endTime.split(':')[1]) : 0;
                                    const top = startHour * 60 + startMinute;
                                    const height = (endHour * 60 + endMinute) - top;

                                    return (
                                        <div
                                            key={event.id}
                                            onClick={() => handleEditEvent(event)}
                                            style={{
                                                position: 'absolute',
                                                top: `${top}px`,
                                                height: `${Math.max(height - 2, 20)}px`, // Subtract 2px for gap, min height 20px
                                                left: '4px',
                                                right: '4px',
                                                backgroundColor: event.color || 'var(--color-accent-blue)',
                                                color: '#FFFFFF',
                                                borderRadius: tokens.radius.sm,
                                                padding: tokens.spacing[1],
                                                fontSize: tokens.typography.fontSize.xs,
                                                overflow: 'hidden',
                                                cursor: 'pointer',
                                                zIndex: 10,
                                            }}
                                        >
                                            <div style={{ fontWeight: tokens.typography.fontWeight.semibold }}>{event.title}</div>
                                            {event.startTime && <div>{event.startTime} - {event.endTime}</div>}
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    );
                })}
            </div>
        );
    };

    const renderDayView = () => {
        const hours = Array.from({ length: 24 }, (_, i) => i);
        const dayEvents = getEventsForDate(currentDate);

        return (
            <div style={{ display: 'flex', gap: tokens.spacing[2] }}>
                {/* Time column */}
                <div style={{ width: '80px', flexShrink: 0 }}>
                    {hours.map(hour => (
                        <div key={hour} style={{ height: '80px', fontSize: tokens.typography.fontSize.sm, color: 'var(--color-text-tertiary)', paddingTop: tokens.spacing[2] }}>
                            {hour.toString().padStart(2, '0')}:00
                        </div>
                    ))}
                </div>

                {/* Day column */}
                <div style={{ flex: 1, position: 'relative' }}>
                    {hours.map(hour => (
                        <div key={hour} style={{ height: '80px', borderTop: '1px solid var(--color-border-secondary)' }}></div>
                    ))}
                    {dayEvents.map(event => {
                        const startHour = event.startTime ? parseInt(event.startTime.split(':')[0]) : 9;
                        const startMinute = event.startTime ? parseInt(event.startTime.split(':')[1]) : 0;
                        const endHour = event.endTime ? parseInt(event.endTime.split(':')[0]) : 10;
                        const endMinute = event.endTime ? parseInt(event.endTime.split(':')[1]) : 0;
                        const top = (startHour * 80) + (startMinute * 80 / 60);
                        const height = ((endHour * 80) + (endMinute * 80 / 60)) - top;

                        return (
                            <div
                                key={event.id}
                                onClick={() => handleEditEvent(event)}
                                style={{
                                    position: 'absolute',
                                    top: `${top}px`,
                                    height: `${Math.max(height - 2, 30)}px`, // Subtract 2px for gap, min height 30px
                                    left: '8px',
                                    right: '8px',
                                    backgroundColor: event.color || 'var(--color-accent-blue)',
                                    color: '#FFFFFF',
                                    borderRadius: tokens.radius.md,
                                    padding: tokens.spacing[2],
                                    fontSize: tokens.typography.fontSize.sm,
                                    overflow: 'hidden',
                                    cursor: 'pointer',
                                    boxShadow: tokens.shadows.sm,
                                    zIndex: 10,
                                }}
                            >
                                <div style={{ fontWeight: tokens.typography.fontWeight.bold, marginBottom: tokens.spacing[1] }}>{event.title}</div>
                                <div style={{ fontSize: tokens.typography.fontSize.xs }}>{event.startTime} - {event.endTime}</div>
                                {event.location && <div style={{ fontSize: tokens.typography.fontSize.xs, marginTop: tokens.spacing[1] }}>📍 {event.location}</div>}
                            </div>
                        );
                    })}
                </div>
            </div>
        );
    };

    const getViewTitle = () => {
        if (view === 'month') {
            return `${MONTHS[currentDate.getMonth()]} ${currentDate.getFullYear()}`;
        } else if (view === 'week') {
            const weekDates = getWeekDates();
            const start = weekDates[0];
            const end = weekDates[6];
            return `${MONTHS[start.getMonth()]} ${start.getDate()} - ${MONTHS[end.getMonth()]} ${end.getDate()}, ${end.getFullYear()}`;
        } else if (view === 'day') {
            return `${DAYS_FULL[currentDate.getDay()]}, ${MONTHS[currentDate.getMonth()]} ${currentDate.getDate()}, ${currentDate.getFullYear()}`;
        } else if (view === 'agenda') {
            // Agenda view - show date range
            const endDate = new Date(currentDate);
            endDate.setDate(endDate.getDate() + agendaPeriod - 1); // Subtract 1 because agendaPeriod is a count of days including the start day
            return `${MONTHS[currentDate.getMonth()]} ${currentDate.getDate()} - ${MONTHS[endDate.getMonth()]} ${endDate.getDate()}, ${endDate.getFullYear()}`;
        } else {
            return 'Agenda';
        }
    };

    return (
        <div
            className={`calendar ${className}`}
            style={{
                backgroundColor: 'var(--color-background-primary)',
                borderRadius: tokens.radius.lg,
                padding: tokens.spacing[4],
                border: `1px solid var(--color-border-primary)`,
                boxShadow: tokens.shadows.sm,
                width: '100%',
                maxWidth: view === 'month' ? '800px' : '100%',
            }}
        >
            {/* Header */}
            <div
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginBottom: tokens.spacing[4],
                    flexWrap: 'wrap',
                    gap: tokens.spacing[2],
                }}
            >
                <div style={{ display: 'flex', alignItems: 'center', gap: tokens.spacing[2] }}>
                    {view !== 'agenda' && (
                        <>
                            <Button variant="ghost" size="sm" onClick={handlePrevPeriod}>
                                ←
                            </Button>
                            <Button variant="ghost" size="sm" onClick={handleToday}>
                                Today
                            </Button>
                            <Button variant="ghost" size="sm" onClick={handleNextPeriod}>
                                →
                            </Button>
                        </>
                    )}
                    <h3
                        style={{
                            margin: 0,
                            fontSize: tokens.typography.fontSize.lg,
                            fontWeight: tokens.typography.fontWeight.semibold,
                            color: 'var(--color-text-primary)',
                        }}
                    >
                        {getViewTitle()}
                    </h3>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: tokens.spacing[2] }}>
                    {/* View Selector */}
                    <div style={{ display: 'flex', gap: tokens.spacing[1], backgroundColor: 'var(--color-background-secondary)', borderRadius: tokens.radius.md, padding: '2px' }}>
                        {(['month', 'week', 'day', 'agenda'] as CalendarView[]).map((v) => (
                            <button
                                key={v}
                                onClick={() => setView(v)}
                                style={{
                                    padding: `${tokens.spacing[1]} ${tokens.spacing[3]}`,
                                    fontSize: tokens.typography.fontSize.sm,
                                    fontWeight: tokens.typography.fontWeight.medium,
                                    color: view === v ? '#FFFFFF' : 'var(--color-text-secondary)',
                                    backgroundColor: view === v ? 'var(--color-accent-blue)' : 'transparent',
                                    border: 'none',
                                    borderRadius: tokens.radius.sm,
                                    cursor: 'pointer',
                                    transition: `all ${tokens.motion.duration.fast} ${tokens.motion.easing.standard}`,
                                    textTransform: 'capitalize',
                                }}
                            >
                                {v}
                            </button>
                        ))}
                    </div>

                    <Button variant="primary" size="sm" onClick={handleAddEvent}>
                        + Add Event
                    </Button>
                </div>
            </div>

            {/* Day Headers (Month view only) */}
            {view === 'month' && (
                <div
                    style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(7, 1fr)',
                        gap: tokens.spacing[1],
                        marginBottom: tokens.spacing[2],
                    }}
                >
                    {DAYS.map((day) => (
                        <div
                            key={day}
                            style={{
                                padding: tokens.spacing[2],
                                textAlign: 'center',
                                fontSize: tokens.typography.fontSize.xs,
                                fontWeight: tokens.typography.fontWeight.semibold,
                                color: 'var(--color-text-tertiary)',
                                textTransform: 'uppercase',
                            }}
                        >
                            {day}
                        </div>
                    ))}
                </div>
            )}

            {/* Calendar View */}
            <div style={{ overflowX: 'auto' }}>
                {view === 'month' && (
                    <div
                        style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(7, 1fr)',
                            gap: tokens.spacing[1],
                        }}
                    >
                        {renderMonthView()}
                    </div>
                )}
                {view === 'week' && renderWeekView()}
                {view === 'day' && renderDayView()}
                {view === 'agenda' && (
                    <AgendaView
                        events={events}
                        currentDate={currentDate}
                        days={agendaPeriod}
                        onEventClick={handleEditEvent}
                    />
                )}
            </div>

            {/* Event Modal */}
            <Modal open={showEventModal} onOpenChange={setShowEventModal} size="md">
                <ModalCloseButton />
                <ModalHeader>
                    <ModalTitle>{selectedEvent ? 'Edit Event' : 'Add Event'}</ModalTitle>
                </ModalHeader>
                <ModalContent>
                    <div className="space-y-4">
                        <Input
                            label="Title"
                            placeholder="Event title"
                            value={eventFormData.title}
                            onChange={(e) => setEventFormData({ ...eventFormData, title: e.target.value })}
                            required
                        />
                        <Textarea
                            label="Description"
                            placeholder="Event description (optional)"
                            value={eventFormData.description}
                            onChange={(e) => setEventFormData({ ...eventFormData, description: e.target.value })}
                            rows={3}
                        />
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: tokens.spacing[3] }}>
                            <Input
                                label="Start Time"
                                type="time"
                                value={eventFormData.startTime}
                                onChange={(e) => setEventFormData({ ...eventFormData, startTime: e.target.value })}
                            />
                            <Input
                                label="End Time"
                                type="time"
                                value={eventFormData.endTime}
                                onChange={(e) => setEventFormData({ ...eventFormData, endTime: e.target.value })}
                            />
                        </div>
                        <Input
                            label="Location"
                            placeholder="Event location (optional)"
                            value={eventFormData.location}
                            onChange={(e) => setEventFormData({ ...eventFormData, location: e.target.value })}
                        />
                        <div>
                            <label className="block text-sm font-medium text-text-primary mb-2">Color</label>
                            <Select value={eventFormData.color} onValueChange={(value) => setEventFormData({ ...eventFormData, color: value })}>
                                <SelectTrigger className="w-full">
                                    <SelectValue />
                                </SelectTrigger>
                                <SelectContent>
                                    {EVENT_COLORS.map(color => (
                                        <SelectItem key={color.value} value={color.value}>
                                            <div style={{ display: 'flex', alignItems: 'center', gap: tokens.spacing[2] }}>
                                                <div style={{ width: '16px', height: '16px', borderRadius: '50%', backgroundColor: color.value }} />
                                                {color.label}
                                            </div>
                                        </SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                        </div>
                    </div>
                </ModalContent>
                <ModalFooter>
                    {selectedEvent && (
                        <Button variant="ghost" onClick={handleDeleteEvent} style={{ marginRight: 'auto', color: 'var(--color-status-error)' }}>
                            Delete
                        </Button>
                    )}
                    <Button variant="ghost" onClick={() => setShowEventModal(false)}>
                        Cancel
                    </Button>
                    <Button variant="primary" onClick={handleSaveEvent} disabled={!eventFormData.title.trim()}>
                        {selectedEvent ? 'Update' : 'Add'}
                    </Button>
                </ModalFooter>
            </Modal>
        </div>
    );
};
