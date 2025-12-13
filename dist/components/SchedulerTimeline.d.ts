import React from 'react';
export interface SchedulerResource {
    id: string;
    name: string;
    subtitle?: string;
    avatar?: string;
    color?: string;
}
export interface SchedulerEvent {
    id: string;
    resourceId: string;
    title: string;
    description?: string;
    startTime: string;
    endTime: string;
    date?: Date;
    color?: string;
}
export interface SchedulerTimelineProps {
    resources: SchedulerResource[];
    events: SchedulerEvent[];
    date: Date;
    startHour?: number;
    endHour?: number;
    onEventClick?: (event: SchedulerEvent) => void;
    onTimeSlotClick?: (resourceId: string, time: string) => void;
    onDateChange?: (date: Date) => void;
    className?: string;
}
export declare const SchedulerTimeline: React.FC<SchedulerTimelineProps>;
//# sourceMappingURL=SchedulerTimeline.d.ts.map