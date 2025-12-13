"use client";
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import React from 'react';
import { cn } from '../lib/utils';
import { motion } from 'framer-motion';
import { Smartphone, Monitor, Tablet, Laptop, Trash2, MoreVertical } from 'lucide-react';
import { Button } from './Button';
import { Badge } from './Badge';
/* ========================================
   HELPERS
   ======================================== */
const getDeviceIcon = (type) => {
    switch (type) {
        case 'phone':
            return _jsx(Smartphone, { className: "w-5 h-5" });
        case 'tablet':
            return _jsx(Tablet, { className: "w-5 h-5" });
        case 'laptop':
            return _jsx(Laptop, { className: "w-5 h-5" });
        case 'desktop':
            return _jsx(Monitor, { className: "w-5 h-5" });
        default:
            return _jsx(Smartphone, { className: "w-5 h-5" });
    }
};
const getStatusBadge = (status, isCurrent) => {
    if (isCurrent) {
        return _jsx(Badge, { variant: "success", size: "sm", children: "Current Device" });
    }
    switch (status) {
        case 'active':
            return _jsx(Badge, { variant: "success", size: "sm", children: "Active" });
        case 'inactive':
            return _jsx(Badge, { variant: "default", size: "sm", children: "Inactive" });
        case 'suspended':
            return _jsx(Badge, { variant: "error", size: "sm", children: "Suspended" });
    }
};
/* ========================================
   COMPONENT
   ======================================== */
export const DeviceList = React.forwardRef(({ devices, onRemove, onMoreActions, showActions = true, className, ...props }, ref) => {
    return (_jsx("div", { ref: ref, className: cn("w-full space-y-2", className), ...props, children: devices.map((device, index) => (_jsxs(motion.div, { initial: { opacity: 0, y: 10 }, animate: { opacity: 1, y: 0 }, transition: { delay: index * 0.05 }, className: cn("flex items-center gap-4 p-4 rounded-xl border", "bg-surface-primary border-border-primary", "hover:bg-surface-secondary transition-colors"), children: [_jsx("div", { className: "flex-shrink-0 p-2 bg-surface-secondary rounded-lg text-text-tertiary", children: getDeviceIcon(device.type) }), _jsxs("div", { className: "flex-1 min-w-0", children: [_jsxs("div", { className: "flex items-center gap-2 mb-1", children: [_jsx("h3", { className: "text-sm font-semibold text-text-primary truncate", children: device.name }), getStatusBadge(device.status, device.isCurrentDevice)] }), _jsxs("div", { className: "flex flex-wrap items-center gap-3 text-xs text-text-secondary", children: [device.os && _jsx("span", { children: device.os }), device.browser && (_jsxs(_Fragment, { children: [_jsx("span", { className: "text-text-tertiary", children: "\u2022" }), _jsx("span", { children: device.browser })] })), device.lastActive && (_jsxs(_Fragment, { children: [_jsx("span", { className: "text-text-tertiary", children: "\u2022" }), _jsxs("span", { children: ["Last active: ", device.lastActive] })] }))] }), device.location && (_jsx("p", { className: "text-xs text-text-tertiary mt-1", children: device.location }))] }), showActions && (_jsxs("div", { className: "flex-shrink-0 flex items-center gap-2", children: [onMoreActions && (_jsx(Button, { variant: "ghost", size: "sm", onClick: () => onMoreActions(device), children: _jsx(MoreVertical, { className: "w-4 h-4" }) })), onRemove && !device.isCurrentDevice && (_jsx(Button, { variant: "ghost", size: "sm", onClick: () => onRemove(device), children: _jsx(Trash2, { className: "w-4 h-4 text-status-error" }) }))] }))] }, device.id))) }));
});
DeviceList.displayName = 'DeviceList';
//# sourceMappingURL=DeviceList.js.map