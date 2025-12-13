"use client";
import { jsx as _jsx } from "react/jsx-runtime";
import React from 'react';
import { Button } from './Button';
/* ========================================
   HAPTIC FEEDBACK UTILITIES
   ======================================== */
/**
 * Check if haptic feedback is supported
 */
const isHapticSupported = () => {
    if (typeof window === 'undefined')
        return false;
    // Check for Vibration API (most browsers)
    if ('vibrate' in navigator)
        return true;
    // Check for iOS Haptic Feedback (via WebKit)
    if (typeof window.DeviceMotionEvent !== 'undefined') {
        return true;
    }
    return false;
};
/**
 * Get vibration pattern for feedback type
 */
const getVibrationPattern = (type) => {
    switch (type) {
        case 'light':
        case 'selection':
            return 10;
        case 'medium':
        case 'impact':
            return 20;
        case 'heavy':
            return 30;
        case 'success':
            return [10, 50, 10];
        case 'warning':
            return [20, 50, 20];
        case 'error':
            return [30, 50, 30, 50, 30];
        case 'notification':
            return [20, 100, 20];
        default:
            return 20;
    }
};
/**
 * Trigger haptic feedback
 */
const triggerHaptic = (type) => {
    if (typeof window === 'undefined')
        return;
    if (type === false)
        return;
    const feedbackType = type === true ? 'medium' : type;
    // Use Vibration API if available
    if ('vibrate' in navigator) {
        const pattern = getVibrationPattern(feedbackType);
        navigator.vibrate(pattern);
        return;
    }
    // Fallback: Try to use iOS Haptic Feedback via WebKit
    // This is a workaround for iOS devices
    if (typeof window.DeviceMotionEvent !== 'undefined') {
        // iOS doesn't expose haptic API directly, but we can use vibration as fallback
        // For a more native iOS experience, you'd need a native app wrapper
        if (typeof navigator !== 'undefined' && navigator.vibrate) {
            navigator.vibrate(getVibrationPattern(feedbackType));
        }
    }
};
/* ========================================
   COMPONENT
   ======================================== */
export const HapticButton = React.forwardRef(({ hapticFeedback = 'medium', hapticOnHover = false, hapticOnTap = true, onMouseEnter, onMouseLeave, onMouseDown, onMouseUp, onClick, children, ...buttonProps }, ref) => {
    const handleMouseEnter = (e) => {
        if (hapticOnHover && hapticFeedback) {
            triggerHaptic(hapticFeedback);
        }
        onMouseEnter?.(e);
    };
    const handleMouseDown = (e) => {
        if (hapticOnTap && hapticFeedback) {
            triggerHaptic(hapticFeedback);
        }
        onMouseDown?.(e);
    };
    const handleTouchStart = (e) => {
        if (hapticOnTap && hapticFeedback) {
            triggerHaptic(hapticFeedback);
        }
    };
    const handleClick = (e) => {
        onClick?.(e);
    };
    return (_jsx(Button, { ref: ref, onMouseEnter: handleMouseEnter, onMouseDown: handleMouseDown, onTouchStart: handleTouchStart, onClick: handleClick, ...buttonProps, children: children }));
});
HapticButton.displayName = 'HapticButton';
/* ========================================
   EXPORT UTILITIES
   ======================================== */
export { isHapticSupported, triggerHaptic, getVibrationPattern };
//# sourceMappingURL=HapticButton.js.map