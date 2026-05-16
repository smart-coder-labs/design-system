/* ========================================
   CALENDAR - MOCK DATA
   ======================================== */

import type { CalendarEvent } from './Calendar.types';

export const mockEvents: CalendarEvent[] = [
    {
        id: '1',
        date: new Date('2024-06-15'),
        startTime: '10:00',
        endTime: '11:00',
        title: 'Team Meeting',
        description: 'Weekly sync with the team',
        color: 'var(--color-accent-blue)',
        location: 'Conference Room A',
    },
    {
        id: '2',
        date: new Date('2024-06-18'),
        startTime: '14:00',
        endTime: '15:30',
        title: 'Client Presentation',
        description: 'Q2 Review with client',
        color: 'var(--color-status-success)',
        location: 'Zoom',
    },
    {
        id: '3',
        date: new Date('2024-06-20'),
        title: 'Deadline: Project Delivery',
        color: 'var(--color-status-error)',
    },
];

export const mockDateRange = {
    min: new Date('2024-01-01'),
    max: new Date('2024-12-31'),
};

export const mockDisabledDates = [
    new Date('2024-12-25'),
    new Date('2024-01-01'),
];

export const defaultCalendarProps = {
    selectedDate: new Date(),
    firstDayOfWeek: 0 as const,
    showWeekNumbers: true,
    showOutsideDays: true,
    locale: 'en-US',
};