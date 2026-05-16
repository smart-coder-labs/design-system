/* ========================================
   CALENDAR - CONSTANTS
   ======================================== */

export const DAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'] as const;
export const DAYS_FULL = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'] as const;

export const MONTHS = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
] as const;

export const EVENT_COLORS = [
    { value: '#007AFF', label: 'Blue' },
    { value: '#34C759', label: 'Green' },
    { value: '#FF9500', label: 'Orange' },
    { value: '#FF3B30', label: 'Red' },
    { value: '#5AC8FA', label: 'Cyan' },
    { value: '#AF52DE', label: 'Purple' },
] as const;

export const DEFAULT_VIEW: import('./Calendar.types').CalendarView = 'month';