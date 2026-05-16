/* ========================================
   DATEPICKER - UTILITIES
   ======================================== */

export const formatDate = (date: Date, format: 'short' | 'medium' | 'long' = 'medium'): string => {
    const optionsMap: Record<string, Intl.DateTimeFormatOptions> = {
        short: { month: 'numeric', day: 'numeric', year: 'numeric' },
        medium: { month: 'short', day: 'numeric', year: 'numeric' },
        long: { month: 'long', day: 'numeric', year: 'numeric' },
    };

    return new Intl.DateTimeFormat('en-US', optionsMap[format]).format(date);
};

export const isSameDay = (date1: Date, date2: Date): boolean => {
    return (
        date1.getFullYear() === date2.getFullYear() &&
        date1.getMonth() === date2.getMonth() &&
        date1.getDate() === date2.getDate()
    );
};

export const getDaysInMonth = (year: number, month: number): number => {
    return new Date(year, month + 1, 0).getDate();
};

export const getFirstDayOfMonth = (year: number, month: number): number => {
    return new Date(year, month, 1).getDay();
};