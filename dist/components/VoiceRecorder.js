"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React, { useState, useRef, useEffect } from 'react';
import { cn } from '../lib/utils';
import { motion } from 'framer-motion';
import { Mic, Square, Play, Pause, Trash2, Send } from 'lucide-react';
import { Button } from './Button';
import { Progress } from './Progress';
/* ========================================
   COMPONENT
   ======================================== */
export const VoiceRecorder = React.forwardRef(({ onRecordingComplete, onSend, maxDuration = 60, autoSend = false, showWaveform = true, className, ...props }, ref) => {
    const [isRecording, setIsRecording] = useState(false);
    const [isPaused, setIsPaused] = useState(false);
    const [duration, setDuration] = useState(0);
    const [audioBlob, setAudioBlob] = useState(null);
    const [audioUrl, setAudioUrl] = useState(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const mediaRecorderRef = useRef(null);
    const audioChunksRef = useRef([]);
    const streamRef = useRef(null);
    const audioRef = useRef(null);
    const intervalRef = useRef(null);
    useEffect(() => {
        return () => {
            if (intervalRef.current) {
                clearInterval(intervalRef.current);
            }
            if (streamRef.current) {
                streamRef.current.getTracks().forEach(track => track.stop());
            }
            if (audioUrl) {
                URL.revokeObjectURL(audioUrl);
            }
        };
    }, [audioUrl]);
    const startRecording = async () => {
        try {
            const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
            streamRef.current = stream;
            const mediaRecorder = new MediaRecorder(stream);
            mediaRecorderRef.current = mediaRecorder;
            audioChunksRef.current = [];
            mediaRecorder.ondataavailable = (event) => {
                if (event.data.size > 0) {
                    audioChunksRef.current.push(event.data);
                }
            };
            mediaRecorder.onstop = () => {
                const blob = new Blob(audioChunksRef.current, { type: 'audio/webm' });
                setAudioBlob(blob);
                const url = URL.createObjectURL(blob);
                setAudioUrl(url);
                onRecordingComplete?.(blob, duration);
                if (autoSend) {
                    onSend?.(blob);
                }
                stream.getTracks().forEach(track => track.stop());
            };
            mediaRecorder.start();
            setIsRecording(true);
            setDuration(0);
            intervalRef.current = setInterval(() => {
                setDuration((prev) => {
                    const newDuration = prev + 0.1;
                    if (newDuration >= maxDuration) {
                        stopRecording();
                        return maxDuration;
                    }
                    return newDuration;
                });
            }, 100);
        }
        catch (error) {
            console.error('Error starting recording:', error);
            alert('Error accessing microphone. Please check permissions.');
        }
    };
    const stopRecording = () => {
        if (mediaRecorderRef.current && isRecording) {
            mediaRecorderRef.current.stop();
            setIsRecording(false);
            setIsPaused(false);
            if (intervalRef.current) {
                clearInterval(intervalRef.current);
            }
        }
    };
    const pauseRecording = () => {
        if (mediaRecorderRef.current && isRecording) {
            mediaRecorderRef.current.pause();
            setIsPaused(true);
            if (intervalRef.current) {
                clearInterval(intervalRef.current);
            }
        }
    };
    const resumeRecording = () => {
        if (mediaRecorderRef.current && isPaused) {
            mediaRecorderRef.current.resume();
            setIsPaused(false);
            intervalRef.current = setInterval(() => {
                setDuration((prev) => {
                    const newDuration = prev + 0.1;
                    if (newDuration >= maxDuration) {
                        stopRecording();
                        return maxDuration;
                    }
                    return newDuration;
                });
            }, 100);
        }
    };
    const playRecording = () => {
        if (audioUrl && audioRef.current) {
            audioRef.current.play();
            setIsPlaying(true);
        }
    };
    const pausePlayback = () => {
        if (audioRef.current) {
            audioRef.current.pause();
            setIsPlaying(false);
        }
    };
    const deleteRecording = () => {
        setAudioBlob(null);
        if (audioUrl) {
            URL.revokeObjectURL(audioUrl);
            setAudioUrl(null);
        }
        setDuration(0);
    };
    const formatTime = (seconds) => {
        const mins = Math.floor(seconds / 60);
        const secs = Math.floor(seconds % 60);
        return `${mins}:${secs.toString().padStart(2, '0')}`;
    };
    return (_jsxs("div", { ref: ref, className: cn("w-full", className), ...props, children: [isRecording && (_jsxs("div", { className: "space-y-3", children: [_jsxs("div", { className: "flex items-center justify-between", children: [_jsxs("div", { className: "flex items-center gap-3", children: [_jsx(motion.div, { animate: { scale: [1, 1.2, 1] }, transition: { duration: 1, repeat: Infinity }, className: "w-3 h-3 bg-status-error rounded-full" }), _jsx("span", { className: "text-sm font-medium text-text-primary", children: formatTime(duration) })] }), _jsxs("div", { className: "flex items-center gap-2", children: [isPaused ? (_jsx(Button, { variant: "ghost", size: "sm", onClick: resumeRecording, children: _jsx(Play, { className: "w-4 h-4" }) })) : (_jsx(Button, { variant: "ghost", size: "sm", onClick: pauseRecording, children: _jsx(Pause, { className: "w-4 h-4" }) })), _jsx(Button, { variant: "ghost", size: "sm", onClick: stopRecording, children: _jsx(Square, { className: "w-4 h-4" }) })] })] }), _jsx(Progress, { value: (duration / maxDuration) * 100 })] })), audioBlob && !isRecording && (_jsxs("div", { className: "space-y-3", children: [_jsxs("div", { className: "flex items-center justify-between", children: [_jsxs("div", { className: "flex items-center gap-3", children: [isPlaying ? (_jsx(Button, { variant: "ghost", size: "sm", onClick: pausePlayback, children: _jsx(Pause, { className: "w-4 h-4" }) })) : (_jsx(Button, { variant: "ghost", size: "sm", onClick: playRecording, children: _jsx(Play, { className: "w-4 h-4" }) })), _jsx("span", { className: "text-sm font-medium text-text-primary", children: formatTime(duration) })] }), _jsxs("div", { className: "flex items-center gap-2", children: [onSend && (_jsx(Button, { variant: "primary", size: "sm", onClick: () => onSend(audioBlob), children: _jsx(Send, { className: "w-4 h-4" }) })), _jsx(Button, { variant: "ghost", size: "sm", onClick: deleteRecording, children: _jsx(Trash2, { className: "w-4 h-4" }) })] })] }), _jsx("audio", { ref: audioRef, src: audioUrl || undefined, onEnded: () => setIsPlaying(false), onTimeUpdate: (e) => {
                            const audio = e.currentTarget;
                            setDuration(audio.currentTime);
                        } })] })), !isRecording && !audioBlob && (_jsx(Button, { variant: "primary", size: "lg", onClick: startRecording, className: "w-full", leftIcon: _jsx(Mic, { className: "w-5 h-5" }), children: "Start Recording" }))] }));
});
VoiceRecorder.displayName = 'VoiceRecorder';
//# sourceMappingURL=VoiceRecorder.js.map