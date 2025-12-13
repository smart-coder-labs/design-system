import React from 'react';
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
export declare const Calendar: React.FC<CalendarProps>;
//# sourceMappingURL=Calendar.d.ts.map