/* ========================================
   CALENDAR - UTILS
   ======================================== */

import type { CalendarDay } from './Calendar.types';

export const getDaysInMonth = (year: number, month: number): number => {
    return new Date(year, month + 1, 0).getDate();
};

export const getFirstDayOfMonth = (year: number, month: number): number => {
    return new Date(year, month, 1).getDay();
};

export const isSameDay = (date1: Date, date2: Date): boolean => {
    return (
        date1.getFullYear() === date2.getFullYear() &&
        date1.getMonth() === date2.getMonth() &&
        date1.getDate() === date2.getDate()
    );
};

export const isToday = (date: Date): boolean => {
    return isSameDay(date, new Date());
};

export const formatMonth = (date: Date, locale: string = 'en-US'): string => {
    return date.toLocaleDateString(locale, { month: 'long' });
};

export const formatYear = (date: Date): string => {
    return date.getFullYear().toString();
};

export const generateCalendarDays = (
    year: number,
    month: number,
    selectedDate?: Date,
    minDate?: Date,
    maxDate?: Date,
    disabledDates?: Date[]
): CalendarDay[] => {
    const days: CalendarDay[] = [];
    const daysInMonth = getDaysInMonth(year, month);
    const firstDay = getFirstDayOfMonth(year, month);

    // Previous month days
    const prevMonth = month === 0 ? 11 : month - 1;
    const prevYear = month === 0 ? year - 1 : year;
    const daysInPrevMonth = getDaysInMonth(prevYear, prevMonth);

    for (let i = firstDay - 1; i >= 0; i--) {
        const day = daysInPrevMonth - i;
        const date = new Date(prevYear, prevMonth, day);
        days.push({
            date,
            day,
            month: prevMonth,
            year: prevYear,
            isCurrentMonth: false,
            isToday: isToday(date),
            isSelected: selectedDate ? isSameDay(date, selectedDate) : false,
            isDisabled: isDateDisabled(date, minDate, maxDate, disabledDates),
        });
    }

    // Current month days
    for (let day = 1; day <= daysInMonth; day++) {
        const date = new Date(year, month, day);
        days.push({
            date,
            day,
            month,
            year,
            isCurrentMonth: true,
            isToday: isToday(date),
            isSelected: selectedDate ? isSameDay(date, selectedDate) : false,
            isDisabled: isDateDisabled(date, minDate, maxDate, disabledDates),
        });
    }

    // Next month days
    const remainingDays = 42 - days.length; // 6 rows * 7 days
    const nextMonth = month === 11 ? 0 : month + 1;
    const nextYear = month === 11 ? year + 1 : year;

    for (let day = 1; day <= remainingDays; day++) {
        const date = new Date(nextYear, nextMonth, day);
        days.push({
            date,
            day,
            month: nextMonth,
            year: nextYear,
            isCurrentMonth: false,
            isToday: isToday(date),
            isSelected: selectedDate ? isSameDay(date, selectedDate) : false,
            isDisabled: isDateDisabled(date, minDate, maxDate, disabledDates),
        });
    }

    return days;
};

const isDateDisabled = (
    date: Date,
    minDate?: Date,
    maxDate?: Date,
    disabledDates?: Date[]
): boolean => {
    if (minDate && date < minDate) return true;
    if (maxDate && date > maxDate) return true;
    if (disabledDates?.some((d) => isSameDay(d, date))) return true;
    return false;
};

export const addMonths = (date: Date, months: number): Date => {
    const d = new Date(date);
    d.setMonth(d.getMonth() + months);
    return d;
};

export const MONTH_LABELS = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
];

export const WEEKDAY_LABELS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];