/* ========================================
   BIOMETRIC PROMPT - TYPES
   ======================================== */

export type BiometricType = 'faceId' | 'touchId';
export type BiometricStatus = 'idle' | 'scanning' | 'success' | 'failed';

export interface BiometricPromptProps {
    type?: BiometricType;
    status?: BiometricStatus;
    onAuthenticate?: () => void;
    onCancel?: () => void;
    title?: string;
    subtitle?: string;
    open?: boolean;
    className?: string;
}