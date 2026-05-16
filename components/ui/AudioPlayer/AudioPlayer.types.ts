/* ========================================
   AUDIO PLAYER - TYPES
   ======================================== */

export interface AudioPlayerProps {
    src: string;
    title?: string;
    artist?: string;
    album?: string;
    coverArt?: string;
    onPlay?: () => void;
    onPause?: () => void;
    onEnded?: () => void;
    onTimeUpdate?: (currentTime: number) => void;
    onVolumeChange?: (volume: number) => void;
    autoPlay?: boolean;
    loop?: boolean;
    showControls?: boolean;
    showVolume?: boolean;
    showProgress?: boolean;
    className?: string;
}

export interface AudioPlayerState {
    isPlaying: boolean;
    currentTime: number;
    duration: number;
    volume: number;
    isMuted: boolean;
}