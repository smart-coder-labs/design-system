interface SchedulerResource {
    id: string;
    name: string;
    subtitle?: string;
    avatar?: string;
    color?: string;
}


interface SchedulerEvent {
    id: string;
    resourceId: string;
    title: string;
    description?: string;
    startTime: string; // Format "HH:MM"
    endTime: string;   // Format "HH:MM"
    date?: Date;       // Date of the event
    color?: string;
}


interface SchedulerTimelineProps {
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
