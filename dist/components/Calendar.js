import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useState } from 'react';
import { tokens } from '../tokens';
import { Button } from './Button';
import { Modal, ModalHeader, ModalTitle, ModalContent, ModalFooter, ModalCloseButton } from './Modal';
import { Input, Textarea } from './Input';
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from './Select';
import { AgendaView } from './AgendaView';
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
export const Calendar = ({ value, onChange, events = [], onAddEvent, onUpdateEvent, onDeleteEvent, minDate, maxDate, highlightToday = true, defaultView = 'month', className = '', }) => {
    const [currentDate, setCurrentDate] = useState(value || new Date());
    const [selectedDate, setSelectedDate] = useState(value || null);
    const [view, setView] = useState(defaultView);
    const [showEventModal, setShowEventModal] = useState(false);
    const [selectedEvent, setSelectedEvent] = useState(null);
    const [agendaPeriod, setAgendaPeriod] = useState(30);
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
    const getDaysInMonth = (date) => {
        return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
    };
    const getFirstDayOfMonth = (date) => {
        return new Date(date.getFullYear(), date.getMonth(), 1).getDay();
    };
    const isSameDay = (date1, date2) => {
        return (date1.getDate() === date2.getDate() &&
            date1.getMonth() === date2.getMonth() &&
            date1.getFullYear() === date2.getFullYear());
    };
    const isDisabled = (date) => {
        if (minDate && date < minDate)
            return true;
        if (maxDate && date > maxDate)
            return true;
        return false;
    };
    const getEventsForDate = (date) => {
        return events.filter(event => isSameDay(event.date, date));
    };
    const handlePrevPeriod = () => {
        if (view === 'month') {
            setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1));
        }
        else if (view === 'week') {
            const newDate = new Date(currentDate);
            newDate.setDate(newDate.getDate() - 7);
            setCurrentDate(newDate);
        }
        else if (view === 'day') {
            const newDate = new Date(currentDate);
            newDate.setDate(newDate.getDate() - 1);
            setCurrentDate(newDate);
        }
    };
    const handleNextPeriod = () => {
        if (view === 'month') {
            setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1));
        }
        else if (view === 'week') {
            const newDate = new Date(currentDate);
            newDate.setDate(newDate.getDate() + 7);
            setCurrentDate(newDate);
        }
        else if (view === 'day') {
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
    const handleDateClick = (date) => {
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
    const handleEditEvent = (event) => {
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
        if (!eventFormData.title.trim())
            return;
        if (selectedEvent) {
            // Update existing event
            onUpdateEvent?.(selectedEvent.id, {
                ...eventFormData,
            });
        }
        else {
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
        const prevMonthDays = getDaysInMonth(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1));
        for (let i = firstDay - 1; i >= 0; i--) {
            const day = prevMonthDays - i;
            days.push(_jsx("div", { className: "calendar-day-other", style: {
                    padding: tokens.spacing[2],
                    minHeight: '80px',
                    color: 'var(--color-text-quaternary)',
                    fontSize: tokens.typography.fontSize.sm,
                }, children: day }, `prev-${day}`));
        }
        // Current month days
        for (let day = 1; day <= daysInMonth; day++) {
            const date = new Date(currentDate.getFullYear(), currentDate.getMonth(), day);
            const isToday = highlightToday && isSameDay(date, today);
            const isSelected = selectedDate && isSameDay(date, selectedDate);
            const disabled = isDisabled(date);
            const dayEvents = getEventsForDate(date);
            days.push(_jsxs("div", { onClick: () => !disabled && handleDateClick(date), style: {
                    padding: tokens.spacing[2],
                    minHeight: '80px',
                    backgroundColor: isSelected ? 'var(--color-accent-blue-tint)' : 'transparent',
                    border: isToday ? '2px solid var(--color-accent-blue)' : '1px solid var(--color-border-secondary)',
                    borderRadius: tokens.radius.md,
                    cursor: disabled ? 'not-allowed' : 'pointer',
                    opacity: disabled ? 0.4 : 1,
                    transition: `all ${tokens.motion.duration.fast} ${tokens.motion.easing.standard}`,
                }, onMouseEnter: (e) => {
                    if (!disabled) {
                        e.currentTarget.style.backgroundColor = isSelected ? 'var(--color-accent-blue-tint)' : 'var(--color-background-secondary)';
                    }
                }, onMouseLeave: (e) => {
                    if (!disabled) {
                        e.currentTarget.style.backgroundColor = isSelected ? 'var(--color-accent-blue-tint)' : 'transparent';
                    }
                }, children: [_jsx("div", { style: { fontWeight: isToday ? tokens.typography.fontWeight.semibold : tokens.typography.fontWeight.regular, color: isToday ? 'var(--color-accent-blue)' : 'var(--color-text-primary)', marginBottom: tokens.spacing[1] }, children: day }), _jsxs("div", { style: { display: 'flex', flexDirection: 'column', gap: tokens.spacing[1] }, children: [dayEvents.slice(0, 3).map((event) => (_jsxs("div", { onClick: (e) => {
                                    e.stopPropagation();
                                    handleEditEvent(event);
                                }, style: {
                                    fontSize: tokens.typography.fontSize.xs,
                                    padding: `2px ${tokens.spacing[1]}`,
                                    backgroundColor: event.color || 'var(--color-accent-blue)',
                                    color: '#FFFFFF',
                                    borderRadius: tokens.radius.sm,
                                    overflow: 'hidden',
                                    textOverflow: 'ellipsis',
                                    whiteSpace: 'nowrap',
                                    cursor: 'pointer',
                                }, children: [event.startTime && `${event.startTime} `, event.title] }, event.id))), dayEvents.length > 3 && (_jsxs("div", { style: { fontSize: tokens.typography.fontSize.xs, color: 'var(--color-text-tertiary)', paddingLeft: tokens.spacing[1] }, children: ["+", dayEvents.length - 3, " more"] }))] })] }, `current-${day}`));
        }
        // Next month's leading days
        const totalDays = days.length;
        const remainingDays = totalDays % 7 === 0 ? 0 : 7 - (totalDays % 7);
        for (let day = 1; day <= remainingDays; day++) {
            days.push(_jsx("div", { className: "calendar-day-other", style: {
                    padding: tokens.spacing[2],
                    minHeight: '80px',
                    color: 'var(--color-text-quaternary)',
                    fontSize: tokens.typography.fontSize.sm,
                }, children: day }, `next-${day}`));
        }
        return days;
    };
    const renderWeekView = () => {
        const weekDates = getWeekDates();
        const hours = Array.from({ length: 24 }, (_, i) => i);
        return (_jsxs("div", { style: { display: 'flex', gap: tokens.spacing[2] }, children: [_jsxs("div", { style: { width: '60px', flexShrink: 0 }, children: [_jsx("div", { style: { height: '60px' } }), hours.map(hour => (_jsxs("div", { style: { height: '60px', fontSize: tokens.typography.fontSize.xs, color: 'var(--color-text-tertiary)', paddingTop: tokens.spacing[1] }, children: [hour.toString().padStart(2, '0'), ":00"] }, hour)))] }), weekDates.map((date, index) => {
                    const isToday = isSameDay(date, today);
                    const dayEvents = getEventsForDate(date);
                    return (_jsxs("div", { style: { flex: 1, minWidth: '100px' }, children: [_jsxs("div", { style: { height: '60px', textAlign: 'center', padding: tokens.spacing[2], backgroundColor: isToday ? 'var(--color-accent-blue-tint)' : 'transparent', borderRadius: tokens.radius.md }, children: [_jsx("div", { style: { fontSize: tokens.typography.fontSize.xs, color: 'var(--color-text-tertiary)' }, children: DAYS[date.getDay()] }), _jsx("div", { style: { fontSize: tokens.typography.fontSize.lg, fontWeight: isToday ? tokens.typography.fontWeight.bold : tokens.typography.fontWeight.medium, color: isToday ? 'var(--color-accent-blue)' : 'var(--color-text-primary)' }, children: date.getDate() })] }), _jsxs("div", { style: { position: 'relative' }, children: [hours.map(hour => (_jsx("div", { style: { height: '60px', borderTop: '1px solid var(--color-border-secondary)' } }, hour))), dayEvents.map(event => {
                                        const startHour = event.startTime ? parseInt(event.startTime.split(':')[0]) : 9;
                                        const startMinute = event.startTime ? parseInt(event.startTime.split(':')[1]) : 0;
                                        const endHour = event.endTime ? parseInt(event.endTime.split(':')[0]) : 10;
                                        const endMinute = event.endTime ? parseInt(event.endTime.split(':')[1]) : 0;
                                        const top = startHour * 60 + startMinute;
                                        const height = (endHour * 60 + endMinute) - top;
                                        return (_jsxs("div", { onClick: () => handleEditEvent(event), style: {
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
                                            }, children: [_jsx("div", { style: { fontWeight: tokens.typography.fontWeight.semibold }, children: event.title }), event.startTime && _jsxs("div", { children: [event.startTime, " - ", event.endTime] })] }, event.id));
                                    })] })] }, index));
                })] }));
    };
    const renderDayView = () => {
        const hours = Array.from({ length: 24 }, (_, i) => i);
        const dayEvents = getEventsForDate(currentDate);
        return (_jsxs("div", { style: { display: 'flex', gap: tokens.spacing[2] }, children: [_jsx("div", { style: { width: '80px', flexShrink: 0 }, children: hours.map(hour => (_jsxs("div", { style: { height: '80px', fontSize: tokens.typography.fontSize.sm, color: 'var(--color-text-tertiary)', paddingTop: tokens.spacing[2] }, children: [hour.toString().padStart(2, '0'), ":00"] }, hour))) }), _jsxs("div", { style: { flex: 1, position: 'relative' }, children: [hours.map(hour => (_jsx("div", { style: { height: '80px', borderTop: '1px solid var(--color-border-secondary)' } }, hour))), dayEvents.map(event => {
                            const startHour = event.startTime ? parseInt(event.startTime.split(':')[0]) : 9;
                            const startMinute = event.startTime ? parseInt(event.startTime.split(':')[1]) : 0;
                            const endHour = event.endTime ? parseInt(event.endTime.split(':')[0]) : 10;
                            const endMinute = event.endTime ? parseInt(event.endTime.split(':')[1]) : 0;
                            const top = (startHour * 80) + (startMinute * 80 / 60);
                            const height = ((endHour * 80) + (endMinute * 80 / 60)) - top;
                            return (_jsxs("div", { onClick: () => handleEditEvent(event), style: {
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
                                }, children: [_jsx("div", { style: { fontWeight: tokens.typography.fontWeight.bold, marginBottom: tokens.spacing[1] }, children: event.title }), _jsxs("div", { style: { fontSize: tokens.typography.fontSize.xs }, children: [event.startTime, " - ", event.endTime] }), event.location && _jsxs("div", { style: { fontSize: tokens.typography.fontSize.xs, marginTop: tokens.spacing[1] }, children: ["\uD83D\uDCCD ", event.location] })] }, event.id));
                        })] })] }));
    };
    const getViewTitle = () => {
        if (view === 'month') {
            return `${MONTHS[currentDate.getMonth()]} ${currentDate.getFullYear()}`;
        }
        else if (view === 'week') {
            const weekDates = getWeekDates();
            const start = weekDates[0];
            const end = weekDates[6];
            return `${MONTHS[start.getMonth()]} ${start.getDate()} - ${MONTHS[end.getMonth()]} ${end.getDate()}, ${end.getFullYear()}`;
        }
        else if (view === 'day') {
            return `${DAYS_FULL[currentDate.getDay()]}, ${MONTHS[currentDate.getMonth()]} ${currentDate.getDate()}, ${currentDate.getFullYear()}`;
        }
        else if (view === 'agenda') {
            // Agenda view - show date range
            const endDate = new Date(currentDate);
            endDate.setDate(endDate.getDate() + agendaPeriod - 1); // Subtract 1 because agendaPeriod is a count of days including the start day
            return `${MONTHS[currentDate.getMonth()]} ${currentDate.getDate()} - ${MONTHS[endDate.getMonth()]} ${endDate.getDate()}, ${endDate.getFullYear()}`;
        }
        else {
            return 'Agenda';
        }
    };
    return (_jsxs("div", { className: `calendar ${className}`, style: {
            backgroundColor: 'var(--color-background-primary)',
            borderRadius: tokens.radius.lg,
            padding: tokens.spacing[4],
            border: `1px solid var(--color-border-primary)`,
            boxShadow: tokens.shadows.sm,
            width: '100%',
            maxWidth: view === 'month' ? '800px' : '100%',
        }, children: [_jsxs("div", { style: {
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginBottom: tokens.spacing[4],
                    flexWrap: 'wrap',
                    gap: tokens.spacing[2],
                }, children: [_jsxs("div", { style: { display: 'flex', alignItems: 'center', gap: tokens.spacing[2] }, children: [view !== 'agenda' && (_jsxs(_Fragment, { children: [_jsx(Button, { variant: "ghost", size: "sm", onClick: handlePrevPeriod, children: "\u2190" }), _jsx(Button, { variant: "ghost", size: "sm", onClick: handleToday, children: "Today" }), _jsx(Button, { variant: "ghost", size: "sm", onClick: handleNextPeriod, children: "\u2192" })] })), _jsx("h3", { style: {
                                    margin: 0,
                                    fontSize: tokens.typography.fontSize.lg,
                                    fontWeight: tokens.typography.fontWeight.semibold,
                                    color: 'var(--color-text-primary)',
                                }, children: getViewTitle() })] }), _jsxs("div", { style: { display: 'flex', alignItems: 'center', gap: tokens.spacing[2] }, children: [_jsx("div", { style: { display: 'flex', gap: tokens.spacing[1], backgroundColor: 'var(--color-background-secondary)', borderRadius: tokens.radius.md, padding: '2px' }, children: ['month', 'week', 'day', 'agenda'].map((v) => (_jsx("button", { onClick: () => setView(v), style: {
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
                                    }, children: v }, v))) }), _jsx(Button, { variant: "primary", size: "sm", onClick: handleAddEvent, children: "+ Add Event" })] })] }), view === 'month' && (_jsx("div", { style: {
                    display: 'grid',
                    gridTemplateColumns: 'repeat(7, 1fr)',
                    gap: tokens.spacing[1],
                    marginBottom: tokens.spacing[2],
                }, children: DAYS.map((day) => (_jsx("div", { style: {
                        padding: tokens.spacing[2],
                        textAlign: 'center',
                        fontSize: tokens.typography.fontSize.xs,
                        fontWeight: tokens.typography.fontWeight.semibold,
                        color: 'var(--color-text-tertiary)',
                        textTransform: 'uppercase',
                    }, children: day }, day))) })), _jsxs("div", { style: { overflowX: 'auto' }, children: [view === 'month' && (_jsx("div", { style: {
                            display: 'grid',
                            gridTemplateColumns: 'repeat(7, 1fr)',
                            gap: tokens.spacing[1],
                        }, children: renderMonthView() })), view === 'week' && renderWeekView(), view === 'day' && renderDayView(), view === 'agenda' && (_jsx(AgendaView, { events: events, currentDate: currentDate, days: agendaPeriod, onEventClick: handleEditEvent }))] }), _jsxs(Modal, { open: showEventModal, onOpenChange: setShowEventModal, size: "md", children: [_jsx(ModalCloseButton, {}), _jsx(ModalHeader, { children: _jsx(ModalTitle, { children: selectedEvent ? 'Edit Event' : 'Add Event' }) }), _jsx(ModalContent, { children: _jsxs("div", { className: "space-y-4", children: [_jsx(Input, { label: "Title", placeholder: "Event title", value: eventFormData.title, onChange: (e) => setEventFormData({ ...eventFormData, title: e.target.value }), required: true }), _jsx(Textarea, { label: "Description", placeholder: "Event description (optional)", value: eventFormData.description, onChange: (e) => setEventFormData({ ...eventFormData, description: e.target.value }), rows: 3 }), _jsxs("div", { style: { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: tokens.spacing[3] }, children: [_jsx(Input, { label: "Start Time", type: "time", value: eventFormData.startTime, onChange: (e) => setEventFormData({ ...eventFormData, startTime: e.target.value }) }), _jsx(Input, { label: "End Time", type: "time", value: eventFormData.endTime, onChange: (e) => setEventFormData({ ...eventFormData, endTime: e.target.value }) })] }), _jsx(Input, { label: "Location", placeholder: "Event location (optional)", value: eventFormData.location, onChange: (e) => setEventFormData({ ...eventFormData, location: e.target.value }) }), _jsxs("div", { children: [_jsx("label", { className: "block text-sm font-medium text-text-primary mb-2", children: "Color" }), _jsxs(Select, { value: eventFormData.color, onValueChange: (value) => setEventFormData({ ...eventFormData, color: value }), children: [_jsx(SelectTrigger, { className: "w-full", children: _jsx(SelectValue, {}) }), _jsx(SelectContent, { children: EVENT_COLORS.map(color => (_jsx(SelectItem, { value: color.value, children: _jsxs("div", { style: { display: 'flex', alignItems: 'center', gap: tokens.spacing[2] }, children: [_jsx("div", { style: { width: '16px', height: '16px', borderRadius: '50%', backgroundColor: color.value } }), color.label] }) }, color.value))) })] })] })] }) }), _jsxs(ModalFooter, { children: [selectedEvent && (_jsx(Button, { variant: "ghost", onClick: handleDeleteEvent, style: { marginRight: 'auto', color: 'var(--color-status-error)' }, children: "Delete" })), _jsx(Button, { variant: "ghost", onClick: () => setShowEventModal(false), children: "Cancel" }), _jsx(Button, { variant: "primary", onClick: handleSaveEvent, disabled: !eventFormData.title.trim(), children: selectedEvent ? 'Update' : 'Add' })] })] })] }));
};
//# sourceMappingURL=Calendar.js.map