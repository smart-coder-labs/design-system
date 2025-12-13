import React from 'react';
import { ButtonProps } from './Button';
export type HapticFeedbackType = 'light' | 'medium' | 'heavy' | 'success' | 'warning' | 'error' | 'selection' | 'impact' | 'notification';
export interface HapticButtonProps extends ButtonProps {
    hapticFeedback?: HapticFeedbackType | boolean;
    hapticOnHover?: boolean;
    hapticOnTap?: boolean;
}
/**
 * Check if haptic feedback is supported
 */
declare const isHapticSupported: () => boolean;
/**
 * Get vibration pattern for feedback type
 */
declare const getVibrationPattern: (type: HapticFeedbackType) => number | number[];
/**
 * Trigger haptic feedback
 */
declare const triggerHaptic: (type: HapticFeedbackType | boolean) => void;
export declare const HapticButton: React.ForwardRefExoticComponent<Omit<HapticButtonProps, "ref"> & React.RefAttributes<HTMLButtonElement>>;
export { isHapticSupported, triggerHaptic, getVibrationPattern };
//# sourceMappingURL=HapticButton.d.ts.map