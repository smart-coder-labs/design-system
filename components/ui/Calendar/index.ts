/* ========================================
   CALENDAR - BARREL EXPORT
   ======================================== */

export { Calendar } from './Calendar';
export type { 
    CalendarProps,
    CalendarHeaderProps,
    CalendarGridProps,
    CalendarDayCellProps,
    CalendarDay,
    CalendarMonth
} from './Calendar.types';
export { 
    calendarVariants, 
    calendarDayVariants, 
    calendarHeaderVariants 
} from './Calendar.styles';
export { 
    getDaysInMonth,
    getFirstDayOfMonth,
    isSameDay,
    isToday,
    formatMonth,
    formatYear,
    generateCalendarDays,
    addMonths,
    MONTH_LABELS,
    WEEKDAY_LABELS
} from './Calendar.utils';