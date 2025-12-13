import React from 'react';
export type DeviceType = 'phone' | 'tablet' | 'laptop' | 'desktop' | 'other';
export type DeviceStatus = 'active' | 'inactive' | 'suspended';
export interface Device {
    id: string;
    name: string;
    type: DeviceType;
    os?: string;
    browser?: string;
    lastActive?: string;
    location?: string;
    ipAddress?: string;
    status: DeviceStatus;
    isCurrentDevice?: boolean;
}
export interface DeviceListProps extends React.HTMLAttributes<HTMLDivElement> {
    devices: Device[];
    onRemove?: (device: Device) => void;
    onMoreActions?: (device: Device) => void;
    showActions?: boolean;
    className?: string;
}
export declare const DeviceList: React.ForwardRefExoticComponent<DeviceListProps & React.RefAttributes<HTMLDivElement>>;
//# sourceMappingURL=DeviceList.d.ts.map