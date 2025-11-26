"use client";

import React from 'react';
import { cn } from '../lib/utils';
import { motion } from 'framer-motion';
import { Smartphone, Monitor, Tablet, Laptop, Trash2, MoreVertical, CheckCircle2, AlertCircle } from 'lucide-react';
import { Button } from './Button';
import { Badge } from './Badge';

/* ========================================
   TYPES
   ======================================== */

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

/* ========================================
   HELPERS
   ======================================== */

const getDeviceIcon = (type: DeviceType) => {
    switch (type) {
        case 'phone':
            return <Smartphone className="w-5 h-5" />;
        case 'tablet':
            return <Tablet className="w-5 h-5" />;
        case 'laptop':
            return <Laptop className="w-5 h-5" />;
        case 'desktop':
            return <Monitor className="w-5 h-5" />;
        default:
            return <Smartphone className="w-5 h-5" />;
    }
};

const getStatusBadge = (status: DeviceStatus, isCurrent?: boolean) => {
    if (isCurrent) {
        return <Badge variant="success" size="sm">Current Device</Badge>;
    }
    switch (status) {
        case 'active':
            return <Badge variant="success" size="sm">Active</Badge>;
        case 'inactive':
            return <Badge variant="secondary" size="sm">Inactive</Badge>;
        case 'suspended':
            return <Badge variant="error" size="sm">Suspended</Badge>;
    }
};

/* ========================================
   COMPONENT
   ======================================== */

export const DeviceList = React.forwardRef<HTMLDivElement, DeviceListProps>(
    (
        {
            devices,
            onRemove,
            onMoreActions,
            showActions = true,
            className,
            ...props
        },
        ref
    ) => {
        return (
            <div
                ref={ref}
                className={cn("w-full space-y-2", className)}
                {...props}
            >
                {devices.map((device, index) => (
                    <motion.div
                        key={device.id}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.05 }}
                        className={cn(
                            "flex items-center gap-4 p-4 rounded-xl border",
                            "bg-surface-primary border-border-primary",
                            "hover:bg-surface-secondary transition-colors"
                        )}
                    >
                        {/* Icon */}
                        <div className="flex-shrink-0 p-2 bg-surface-secondary rounded-lg text-text-tertiary">
                            {getDeviceIcon(device.type)}
                        </div>

                        {/* Info */}
                        <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-2 mb-1">
                                <h3 className="text-sm font-semibold text-text-primary truncate">
                                    {device.name}
                                </h3>
                                {getStatusBadge(device.status, device.isCurrentDevice)}
                            </div>
                            <div className="flex flex-wrap items-center gap-3 text-xs text-text-secondary">
                                {device.os && <span>{device.os}</span>}
                                {device.browser && (
                                    <>
                                        <span className="text-text-tertiary">•</span>
                                        <span>{device.browser}</span>
                                    </>
                                )}
                                {device.lastActive && (
                                    <>
                                        <span className="text-text-tertiary">•</span>
                                        <span>Last active: {device.lastActive}</span>
                                    </>
                                )}
                            </div>
                            {device.location && (
                                <p className="text-xs text-text-tertiary mt-1">
                                    {device.location}
                                </p>
                            )}
                        </div>

                        {/* Actions */}
                        {showActions && (
                            <div className="flex-shrink-0 flex items-center gap-2">
                                {onMoreActions && (
                                    <Button
                                        variant="ghost"
                                        size="sm"
                                        onClick={() => onMoreActions(device)}
                                    >
                                        <MoreVertical className="w-4 h-4" />
                                    </Button>
                                )}
                                {onRemove && !device.isCurrentDevice && (
                                    <Button
                                        variant="ghost"
                                        size="sm"
                                        onClick={() => onRemove(device)}
                                    >
                                        <Trash2 className="w-4 h-4 text-status-error" />
                                    </Button>
                                )}
                            </div>
                        )}
                    </motion.div>
                ))}
            </div>
        );
    }
);

DeviceList.displayName = 'DeviceList';

