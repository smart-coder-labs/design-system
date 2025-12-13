import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { tokens } from '../tokens';
const MONTHS = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
];
const DAYS_FULL = [
    'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'
];
export const AgendaView = ({ events, currentDate, days = 30, onEventClick, }) => {
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
    const groupedEvents = {};
    sortedEvents.forEach(event => {
        const dateKey = event.date.toDateString();
        if (!groupedEvents[dateKey]) {
            groupedEvents[dateKey] = [];
        }
        groupedEvents[dateKey].push(event);
    });
    return (_jsx("div", { style: { maxHeight: '600px', overflowY: 'auto' }, children: Object.keys(groupedEvents).length === 0 ? (_jsx("div", { style: { textAlign: 'center', padding: tokens.spacing[8], color: 'var(--color-text-tertiary)' }, children: "No events scheduled" })) : (Object.keys(groupedEvents).map(dateKey => {
            const date = new Date(dateKey);
            const dayEvents = groupedEvents[dateKey];
            return (_jsxs("div", { style: { marginBottom: tokens.spacing[4] }, children: [_jsxs("div", { style: { fontSize: tokens.typography.fontSize.lg, fontWeight: tokens.typography.fontWeight.semibold, color: 'var(--color-text-primary)', marginBottom: tokens.spacing[2], paddingBottom: tokens.spacing[2], borderBottom: `1px solid var(--color-border-primary)` }, children: [DAYS_FULL[date.getDay()], ", ", MONTHS[date.getMonth()], " ", date.getDate(), ", ", date.getFullYear()] }), _jsx("div", { style: { display: 'flex', flexDirection: 'column', gap: tokens.spacing[4] }, children: dayEvents.map(event => (_jsx("div", { onClick: () => onEventClick?.(event), style: {
                                padding: tokens.spacing[4],
                                backgroundColor: 'var(--color-background-secondary)',
                                borderLeft: `4px solid ${event.color || 'var(--color-accent-blue)'}`,
                                borderRadius: tokens.radius.md,
                                cursor: 'pointer',
                                transition: `all ${tokens.motion.duration.fast} ${tokens.motion.easing.standard}`,
                            }, onMouseEnter: (e) => {
                                e.currentTarget.style.backgroundColor = 'var(--color-background-tertiary)';
                            }, onMouseLeave: (e) => {
                                e.currentTarget.style.backgroundColor = 'var(--color-background-secondary)';
                            }, children: _jsx("div", { style: { display: 'flex', justifyContent: 'space-between', alignItems: 'start' }, children: _jsxs("div", { style: { flex: 1 }, children: [_jsx("div", { style: { fontSize: tokens.typography.fontSize.base, fontWeight: tokens.typography.fontWeight.semibold, color: 'var(--color-text-primary)', marginBottom: tokens.spacing[2] }, children: event.title }), event.description && (_jsx("div", { style: { fontSize: tokens.typography.fontSize.sm, color: 'var(--color-text-secondary)', marginBottom: tokens.spacing[2] }, children: event.description })), _jsxs("div", { style: { fontSize: tokens.typography.fontSize.sm, color: 'var(--color-text-tertiary)' }, children: [event.startTime && `${event.startTime} - ${event.endTime}`, event.location && ` • 📍 ${event.location}`] })] }) }) }, event.id))) })] }, dateKey));
        })) }));
};
//# sourceMappingURL=AgendaView.js.map