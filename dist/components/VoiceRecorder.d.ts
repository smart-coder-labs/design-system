import React from 'react';
export interface VoiceRecorderProps extends React.HTMLAttributes<HTMLDivElement> {
    onRecordingComplete?: (audioBlob: Blob, duration: number) => void;
    onSend?: (audioBlob: Blob) => void;
    maxDuration?: number;
    autoSend?: boolean;
    showWaveform?: boolean;
    className?: string;
}
export declare const VoiceRecorder: React.ForwardRefExoticComponent<VoiceRecorderProps & React.RefAttributes<HTMLDivElement>>;
//# sourceMappingURL=VoiceRecorder.d.ts.map