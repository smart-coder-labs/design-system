import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useRef, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, Pause, Volume2, VolumeX, Maximize, Minimize, Loader2 } from 'lucide-react';
import { Slider } from './Slider';
import { cn } from '../lib/utils';
export const VideoPlayer = ({ src, poster, autoPlay = false, loop = false, muted = false, className, }) => {
    const videoRef = useRef(null);
    const containerRef = useRef(null);
    const controlsTimeoutRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);
    const [volume, setVolume] = useState(1);
    const [isMuted, setIsMuted] = useState(muted);
    const [isFullscreen, setIsFullscreen] = useState(false);
    const [showControls, setShowControls] = useState(true);
    const [isLoading, setIsLoading] = useState(true);
    const [isBuffering, setIsBuffering] = useState(false);
    // Initialize
    useEffect(() => {
        const video = videoRef.current;
        if (!video)
            return;
        if (autoPlay) {
            video.play().catch(() => {
                // Autoplay failed (likely due to browser policy)
                setIsPlaying(false);
            });
        }
        setVolume(video.volume);
        setIsMuted(video.muted);
        const handleTimeUpdate = () => setCurrentTime(video.currentTime);
        const handleDurationChange = () => setDuration(video.duration);
        const handlePlay = () => setIsPlaying(true);
        const handlePause = () => setIsPlaying(false);
        const handleWaiting = () => setIsBuffering(true);
        const handlePlaying = () => {
            setIsBuffering(false);
            setIsLoading(false);
        };
        const handleLoadedData = () => setIsLoading(false);
        video.addEventListener('timeupdate', handleTimeUpdate);
        video.addEventListener('durationchange', handleDurationChange);
        video.addEventListener('play', handlePlay);
        video.addEventListener('pause', handlePause);
        video.addEventListener('waiting', handleWaiting);
        video.addEventListener('playing', handlePlaying);
        video.addEventListener('loadeddata', handleLoadedData);
        return () => {
            video.removeEventListener('timeupdate', handleTimeUpdate);
            video.removeEventListener('durationchange', handleDurationChange);
            video.removeEventListener('play', handlePlay);
            video.removeEventListener('pause', handlePause);
            video.removeEventListener('waiting', handleWaiting);
            video.removeEventListener('playing', handlePlaying);
            video.removeEventListener('loadeddata', handleLoadedData);
        };
    }, [autoPlay]);
    // Controls visibility
    const handleMouseMove = () => {
        setShowControls(true);
        if (controlsTimeoutRef.current) {
            clearTimeout(controlsTimeoutRef.current);
        }
        if (isPlaying) {
            controlsTimeoutRef.current = setTimeout(() => {
                setShowControls(false);
            }, 2000);
        }
    };
    const handleMouseLeave = () => {
        if (isPlaying) {
            setShowControls(false);
        }
    };
    const togglePlay = useCallback(() => {
        if (videoRef.current) {
            if (isPlaying) {
                videoRef.current.pause();
            }
            else {
                videoRef.current.play();
            }
        }
    }, [isPlaying]);
    const toggleMute = useCallback(() => {
        if (videoRef.current) {
            videoRef.current.muted = !isMuted;
            setIsMuted(!isMuted);
            if (!isMuted) {
                setVolume(0);
            }
            else {
                setVolume(1);
                videoRef.current.volume = 1;
            }
        }
    }, [isMuted]);
    const handleVolumeChange = (value) => {
        const newVolume = value[0];
        if (videoRef.current) {
            videoRef.current.volume = newVolume;
            setVolume(newVolume);
            setIsMuted(newVolume === 0);
        }
    };
    const handleSeek = (value) => {
        const newTime = value[0];
        if (videoRef.current) {
            videoRef.current.currentTime = newTime;
            setCurrentTime(newTime);
        }
    };
    const toggleFullscreen = useCallback(() => {
        if (!document.fullscreenElement) {
            containerRef.current?.requestFullscreen();
            setIsFullscreen(true);
        }
        else {
            document.exitFullscreen();
            setIsFullscreen(false);
        }
    }, []);
    const formatTime = (time) => {
        const minutes = Math.floor(time / 60);
        const seconds = Math.floor(time % 60);
        return `${minutes}:${seconds.toString().padStart(2, '0')}`;
    };
    return (_jsxs("div", { ref: containerRef, className: cn("relative group overflow-hidden bg-black rounded-xl shadow-lg", isFullscreen ? "w-full h-full rounded-none" : "w-full aspect-video", className), onMouseMove: handleMouseMove, onMouseLeave: handleMouseLeave, children: [_jsx("video", { ref: videoRef, src: src, poster: poster, loop: loop, muted: muted, className: "w-full h-full object-contain", onClick: togglePlay }), (isLoading || isBuffering) && (_jsx("div", { className: "absolute inset-0 flex items-center justify-center pointer-events-none", children: _jsx(Loader2, { className: "w-12 h-12 text-white animate-spin opacity-80" }) })), !isPlaying && !isLoading && !isBuffering && (_jsx("div", { className: "absolute inset-0 flex items-center justify-center bg-black/20 backdrop-blur-[2px] transition-opacity", children: _jsx("button", { onClick: togglePlay, className: "w-16 h-16 flex items-center justify-center rounded-full bg-white/20 backdrop-blur-md hover:bg-white/30 hover:scale-110 transition-all duration-200 group/play", children: _jsx(Play, { className: "w-8 h-8 text-white fill-white ml-1" }) }) })), _jsx(AnimatePresence, { children: showControls && (_jsxs(motion.div, { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, exit: { opacity: 0, y: 20 }, transition: { duration: 0.2 }, className: "absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 via-black/40 to-transparent", children: [_jsx("div", { className: "mb-4 group/slider", children: _jsx(Slider, { value: [currentTime], min: 0, max: duration || 100, step: 0.1, onValueChange: handleSeek, className: "cursor-pointer" }) }), _jsxs("div", { className: "flex items-center justify-between", children: [_jsxs("div", { className: "flex items-center gap-4", children: [_jsx("button", { onClick: togglePlay, className: "text-white hover:text-accent-blue transition-colors", children: isPlaying ? (_jsx(Pause, { className: "w-6 h-6 fill-current" })) : (_jsx(Play, { className: "w-6 h-6 fill-current" })) }), _jsxs("div", { className: "flex items-center gap-2 group/volume", children: [_jsx("button", { onClick: toggleMute, className: "text-white hover:text-accent-blue transition-colors", children: isMuted || volume === 0 ? (_jsx(VolumeX, { className: "w-5 h-5" })) : (_jsx(Volume2, { className: "w-5 h-5" })) }), _jsx("div", { className: "w-0 overflow-hidden group-hover/volume:w-24 transition-all duration-300", children: _jsx(Slider, { value: [isMuted ? 0 : volume], min: 0, max: 1, step: 0.01, onValueChange: handleVolumeChange, className: "w-20 ml-2" }) })] }), _jsxs("div", { className: "text-xs font-medium text-white/90 font-mono", children: [formatTime(currentTime), " / ", formatTime(duration)] })] }), _jsx("div", { className: "flex items-center gap-4", children: _jsx("button", { onClick: toggleFullscreen, className: "text-white hover:text-accent-blue transition-colors", children: isFullscreen ? (_jsx(Minimize, { className: "w-5 h-5" })) : (_jsx(Maximize, { className: "w-5 h-5" })) }) })] })] })) })] }));
};
//# sourceMappingURL=VideoPlayer.js.map