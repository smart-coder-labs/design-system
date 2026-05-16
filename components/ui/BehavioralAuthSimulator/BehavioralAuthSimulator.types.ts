/* ========================================
   BEHAVIORAL AUTH SIMULATOR - TYPES
   ======================================== */

export interface BehavioralAuthSimulatorProps {
    analyzingText?: string;
    successText?: string;
    onComplete?: () => void;
    duration?: number;
}