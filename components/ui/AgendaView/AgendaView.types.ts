import { CalendarEvent } from '../Calendar/Calendar.types';

export interface AgendaViewProps {
    events: CalendarEvent[];
    currentDate: Date;
    days?: number;
    onEventClick?: (event: CalendarEvent) => void;
}