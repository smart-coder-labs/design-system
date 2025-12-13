import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useRef, useEffect } from 'react';
import { Play, Pause, Volume2, VolumeX, SkipBack, SkipForward, MoreHorizontal, Download } from 'lucide-react';
import { Slider } from './Slider';
import { Button } from './Button';
import { cn } from '../lib/utils';
import { Dropdown, DropdownItem } from './Dropdown';
export const AudioPlayer = ({ src, title, artist, coverArt, autoPlay = false, className, }) => {
    const audioRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);
    const [volume, setVolume] = useState(1);
    const [isMuted, setIsMuted] = useState(false);
    const [playbackRate, setPlaybackRate] = useState(1);
    useEffect(() => {
        const audio = audioRef.current;
        if (!audio)
            return;
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
    const togglePlay = () => {
        if (audioRef.current) {
            if (isPlaying) {
                audioRef.current.pause();
            }
            else {
                audioRef.current.play();
            }
        }
    };
    const handleSeek = (value) => {
        if (audioRef.current) {
            audioRef.current.currentTime = value[0];
            setCurrentTime(value[0]);
        }
    };
    const handleVolumeChange = (value) => {
        const newVolume = value[0];
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
            }
            else {
                setVolume(1);
                audioRef.current.volume = 1;
            }
        }
    };
    const skip = (seconds) => {
        if (audioRef.current) {
            audioRef.current.currentTime += seconds;
        }
    };
    const changePlaybackRate = (rate) => {
        if (audioRef.current) {
            audioRef.current.playbackRate = rate;
            setPlaybackRate(rate);
        }
    };
    const formatTime = (time) => {
        if (isNaN(time))
            return "0:00";
        const minutes = Math.floor(time / 60);
        const seconds = Math.floor(time % 60);
        return `${minutes}:${seconds.toString().padStart(2, '0')}`;
    };
    return (_jsxs("div", { className: cn("flex flex-col gap-4 p-4 rounded-2xl bg-surface-primary border border-border-primary shadow-sm w-full max-w-md", className), children: [_jsx("audio", { ref: audioRef, src: src }), _jsxs("div", { className: "flex items-center gap-4", children: [coverArt ? (_jsx("div", { className: cn("w-16 h-16 rounded-xl overflow-hidden bg-surface-secondary flex-shrink-0 shadow-inner", isPlaying && "animate-pulse-slow" // Optional subtle animation
                        ), children: _jsx("img", { src: coverArt, alt: title, className: "w-full h-full object-cover" }) })) : (_jsx("div", { className: "w-16 h-16 rounded-xl bg-gradient-to-br from-accent-blue to-purple-500 flex-shrink-0 flex items-center justify-center text-black font-bold text-xl shadow-inner", children: title ? title[0] : _jsx(Volume2, { className: "text-white" }) })), _jsxs("div", { className: "flex-1 min-w-0", children: [_jsx("h3", { className: "font-semibold text-text-primary truncate", children: title || "Unknown Track" }), _jsx("p", { className: "text-sm text-text-secondary truncate", children: artist || "Unknown Artist" })] }), _jsxs(Dropdown, { trigger: _jsx(Button, { variant: "ghost", size: "sm", className: "h-8 w-8 p-0", children: _jsx(MoreHorizontal, { className: "w-4 h-4" }) }), children: [_jsx(DropdownItem, { onSelect: () => changePlaybackRate(0.5), children: "Speed: 0.5x" }), _jsxs(DropdownItem, { onSelect: () => changePlaybackRate(1), children: ["Speed: 1.0x ", playbackRate === 1 && '✓'] }), _jsxs(DropdownItem, { onSelect: () => changePlaybackRate(1.5), children: ["Speed: 1.5x ", playbackRate === 1.5 && '✓'] }), _jsxs(DropdownItem, { onSelect: () => changePlaybackRate(2), children: ["Speed: 2.0x ", playbackRate === 2 && '✓'] }), _jsx("div", { className: "h-px bg-border-primary my-1" }), _jsxs(DropdownItem, { onSelect: () => window.open(src, '_blank'), children: [_jsx(Download, { className: "w-3 h-3 mr-2" }), " Download"] })] })] }), _jsxs("div", { className: "flex flex-col gap-1", children: [_jsx(Slider, { value: [currentTime], min: 0, max: duration || 100, step: 0.1, onValueChange: handleSeek, className: "py-2" }), _jsxs("div", { className: "flex justify-between text-xs font-mono text-text-tertiary", children: [_jsx("span", { children: formatTime(currentTime) }), _jsx("span", { children: formatTime(duration) })] })] }), _jsxs("div", { className: "flex items-center justify-between", children: [_jsxs("div", { className: "flex items-center gap-2 group w-24", children: [_jsx("button", { onClick: toggleMute, className: "text-text-secondary hover:text-text-primary transition-colors", children: isMuted || volume === 0 ? _jsx(VolumeX, { className: "w-4 h-4" }) : _jsx(Volume2, { className: "w-4 h-4" }) }), _jsx(Slider, { value: [isMuted ? 0 : volume], min: 0, max: 1, step: 0.01, onValueChange: handleVolumeChange, className: "w-full" })] }), _jsxs("div", { className: "flex items-center gap-4", children: [_jsx("button", { onClick: () => skip(-10), className: "text-text-secondary hover:text-text-primary transition-colors p-1", children: _jsx(SkipBack, { className: "w-5 h-5" }) }), _jsx("button", { onClick: togglePlay, className: "w-12 h-12 rounded-full bg-text-primary text-surface-primary flex items-center justify-center hover:scale-105 active:scale-95 transition-all shadow-md", children: isPlaying ? (_jsx(Pause, { className: "w-5 h-5" })) : (_jsx(Play, { className: "w-5 h-5 ml-0.5" })) }), _jsx("button", { onClick: () => skip(10), className: "text-text-secondary hover:text-text-primary transition-colors p-1", children: _jsx(SkipForward, { className: "w-5 h-5" }) })] }), _jsx("div", { className: "w-24 flex justify-end", children: _jsxs("span", { className: "text-xs font-medium text-accent-blue bg-accent-blue/10 px-2 py-1 rounded-md", children: [playbackRate, "x"] }) })] })] }));
};
//# sourceMappingURL=AudioPlayer.js.map