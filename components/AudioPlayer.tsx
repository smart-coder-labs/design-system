import React, { useState, useRef, useEffect } from 'react';
import {
    Play,
    Pause,
    Volume2,
    VolumeX,
    SkipBack,
    SkipForward,
    MoreHorizontal,
    Download
} from 'lucide-react';
import { Slider } from './Slider';
import { Button } from './Button';
import { cn } from '../lib/utils';
import { Combobox } from './Combobox';

export interface AudioPlayerProps {
    src: string;
    title?: string;
    artist?: string;
    coverArt?: string;
    autoPlay?: boolean;
    className?: string;
}

export const AudioPlayer: React.FC<AudioPlayerProps> = ({
    src,
    title,
    artist,
    coverArt,
    autoPlay = false,
    className,
}) => {
    const audioRef = useRef<HTMLAudioElement>(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);
    const [volume, setVolume] = useState(1);
    const [isMuted, setIsMuted] = useState(false);
    const [playbackRate, setPlaybackRate] = useState(1);

    useEffect(() => {
        const audio = audioRef.current;
        if (!audio) return;

        if (autoPlay) {
            audio.play().catch(() => setIsPlaying(false));
        }

        const handleTimeUpdate = () => setCurrentTime(audio.currentTime);
        const handleDurationChange = () => setDuration(audio.duration);
        const handlePlay = () => setIsPlaying(true);
        const handlePause = () => setIsPlaying(false);
        const handleEnded = () => setIsPlaying(false);

        audio.addEventListener('timeupdate', handleTimeUpdate);
        audio.addEventListener('durationchange', handleDurationChange);
        audio.addEventListener('play', handlePlay);
        audio.addEventListener('pause', handlePause);
        audio.addEventListener('ended', handleEnded);

        return () => {
            audio.removeEventListener('timeupdate', handleTimeUpdate);
            audio.removeEventListener('durationchange', handleDurationChange);
            audio.removeEventListener('play', handlePlay);
            audio.removeEventListener('pause', handlePause);
            audio.removeEventListener('ended', handleEnded);
        };
    }, [autoPlay]);

    const playbackOptions = [
        { value: "0.5", label: "Speed: 0.5x" },
        { value: "1", label: "Speed: 1.0x" },
        { value: "1.5", label: "Speed: 1.5x" },
        { value: "2", label: "Speed: 2.0x" },
        { value: "download", label: "Download" },
    ];

    const togglePlay = () => {
        if (audioRef.current) {
            if (isPlaying) {
                audioRef.current.pause();
            } else {
                audioRef.current.play();
            }
        }
    };

    const handleSeek = (value: number) => {
        if (audioRef.current) {
            audioRef.current.currentTime = value;
            setCurrentTime(value);
        }
    };

    const handleVolumeChange = (value: number) => {
        const newVolume = value;
        if (audioRef.current) {
            audioRef.current.volume = newVolume;
            setVolume(newVolume);
            setIsMuted(newVolume === 0);
        }
    };

    const toggleMute = () => {
        if (audioRef.current) {
            audioRef.current.muted = !isMuted;
            setIsMuted(!isMuted);
            if (!isMuted) {
                setVolume(0);
            } else {
                setVolume(1);
                audioRef.current.volume = 1;
            }
        }
    };

    const skip = (seconds: number) => {
        if (audioRef.current) {
            audioRef.current.currentTime += seconds;
        }
    };

    const changePlaybackRate = (rate: number) => {
        if (audioRef.current) {
            audioRef.current.playbackRate = rate;
            setPlaybackRate(rate);
        }
    };

    const formatTime = (time: number) => {
        if (isNaN(time)) return "0:00";
        const minutes = Math.floor(time / 60);
        const seconds = Math.floor(time % 60);
        return `${minutes}:${seconds.toString().padStart(2, '0')}`;
    };

    return (
        <div className={cn(
            "flex flex-col gap-4 p-4 rounded-2xl bg-surface-primary border border-border-primary shadow-sm w-full max-w-md",
            className
        )}>
            <audio ref={audioRef} src={src} />

            {/* Header / Info */}
            <div className="flex items-center gap-4">
                {coverArt ? (
                    <div className={cn(
                        "w-16 h-16 rounded-xl overflow-hidden bg-surface-secondary flex-shrink-0 shadow-inner",
                        isPlaying && "animate-pulse-slow" // Optional subtle animation
                    )}>
                        <img src={coverArt} alt={title} className="w-full h-full object-cover" />
                    </div>
                ) : (
                    <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-accent-blue to-purple-500 flex-shrink-0 flex items-center justify-center text-black font-bold text-xl shadow-inner">
                        {title ? title[0] : <Volume2 className="text-white" />}
                    </div>
                )}

                <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-text-primary truncate">{title || "Unknown Track"}</h3>
                    <p className="text-sm text-text-secondary truncate">{artist || "Unknown Artist"}</p>
                </div>

                <div className="w-36">
                    <Combobox
                        items={playbackOptions.map((option) => ({
                            ...option,
                            label:
                                option.value !== "download"
                                    ? `${option.label}${playbackRate === Number(option.value) ? " ✓" : ""}`
                                    : option.label,
                        }))}
                        value={String(playbackRate)}
                        onChange={(val) => {
                            if (val === "download") {
                                window.open(src, "_blank");
                                return;
                            }
                            changePlaybackRate(Number(val));
                        }}
                        placeholder="Options"
                    />
                </div>
            </div>

            {/* Progress */}
            <div className="flex flex-col gap-1">
                <Slider
                    value={currentTime}
                    min={0}
                    max={duration || 100}
                    step={0.1}
                    onValueChange={handleSeek}
                    className="py-2"
                />
                <div className="flex justify-between text-xs font-mono text-text-tertiary">
                    <span>{formatTime(currentTime)}</span>
                    <span>{formatTime(duration)}</span>
                </div>
            </div>

            {/* Controls */}
            <div className="flex items-center justify-between">
                {/* Volume */}
                <div className="flex items-center gap-2 group w-24">
                    <button onClick={toggleMute} className="text-text-secondary hover:text-text-primary transition-colors">
                        {isMuted || volume === 0 ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                    </button>
                    <Slider
                        value={isMuted ? 0 : volume}
                        min={0}
                        max={1}
                        step={0.01}
                        onValueChange={handleVolumeChange}
                        className="w-full"
                    />
                </div>

                {/* Playback */}
                <div className="flex items-center gap-4">
                    <button
                        onClick={() => skip(-10)}
                        className="text-text-secondary hover:text-text-primary transition-colors p-1"
                    >
                        <SkipBack className="w-5 h-5" />
                    </button>

                    <button
                        onClick={togglePlay}
                        className="w-12 h-12 rounded-full bg-text-primary text-surface-primary flex items-center justify-center hover:scale-105 active:scale-95 transition-all shadow-md"
                    >
                        {isPlaying ? (
                            <Pause className="w-5 h-5" />
                        ) : (
                            <Play className="w-5 h-5 ml-0.5" />
                        )}
                    </button>

                    <button
                        onClick={() => skip(10)}
                        className="text-text-secondary hover:text-text-primary transition-colors p-1"
                    >
                        <SkipForward className="w-5 h-5" />
                    </button>
                </div>

                {/* Spacer to balance layout */}
                <div className="w-24 flex justify-end">
                    <span className="text-xs font-medium text-accent-blue bg-accent-blue/10 px-2 py-1 rounded-md">
                        {playbackRate}x
                    </span>
                </div>
            </div>
        </div>
    );
};
