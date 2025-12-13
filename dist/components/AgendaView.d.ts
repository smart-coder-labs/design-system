import React from 'react';
import { CalendarEvent } from './Calendar';
interface AgendaViewProps {
    events: CalendarEvent[];
    currentDate: Date;
    days?: number;
    onEventClick?: (event: CalendarEvent) => void;
}
export declare const AgendaView: React.FC<AgendaViewProps>;
export {};
//# sourceMappingURL=AgendaView.d.ts.map