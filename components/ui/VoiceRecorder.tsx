"use client";

import React, { useState, useRef, useEffect } from 'react';
import { cn } from '../lib/utils';
import { motion, AnimatePresence } from 'framer-motion';
import { Mic, Square, Play, Pause, Trash2, Send } from 'lucide-react';
import { Button } from './Button';
import { Progress } from './Progress';

/* ========================================
   TYPES
   ======================================== */

export interface VoiceRecorderProps extends React.HTMLAttributes<HTMLDivElement> {
    onRecordingComplete?: (audioBlob: Blob, duration: number) => void;
    onSend?: (audioBlob: Blob) => void;
    maxDuration?: number;
    autoSend?: boolean;
    showWaveform?: boolean;
    className?: string;
}

/* ========================================
   COMPONENT
   ======================================== */

export const VoiceRecorder = React.forwardRef<HTMLDivElement, VoiceRecorderProps>(
    (
        {
            onRecordingComplete,
            onSend,
            maxDuration = 60,
            autoSend = false,
            showWaveform = true,
            className,
            ...props
        },
        ref
    ) => {
        const [isRecording, setIsRecording] = useState(false);
        const [isPaused, setIsPaused] = useState(false);
        const [duration, setDuration] = useState(0);
        const [audioBlob, setAudioBlob] = useState<Blob | null>(null);
        const [audioUrl, setAudioUrl] = useState<string | null>(null);
        const [isPlaying, setIsPlaying] = useState(false);

        const mediaRecorderRef = useRef<MediaRecorder | null>(null);
        const audioChunksRef = useRef<Blob[]>([]);
        const streamRef = useRef<MediaStream | null>(null);
        const audioRef = useRef<HTMLAudioElement | null>(null);
        const intervalRef = useRef<NodeJS.Timeout | null>(null);

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
            } catch (error) {
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

        const formatTime = (seconds: number): string => {
            const mins = Math.floor(seconds / 60);
            const secs = Math.floor(seconds % 60);
            return `${mins}:${secs.toString().padStart(2, '0')}`;
        };

        return (
            <div
                ref={ref}
                className={cn("w-full", className)}
                {...props}
            >
                {/* Recording State */}
                {isRecording && (
                    <div className="space-y-3">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <motion.div
                                    animate={{ scale: [1, 1.2, 1] }}
                                    transition={{ duration: 1, repeat: Infinity }}
                                    className="w-3 h-3 bg-status-error rounded-full"
                                />
                                <span className="text-sm font-medium text-text-primary">
                                    {formatTime(duration)}
                                </span>
                            </div>
                            <div className="flex items-center gap-2">
                                {isPaused ? (
                                    <Button
                                        variant="ghost"
                                        size="sm"
                                        onClick={resumeRecording}
                                    >
                                        <Play className="w-4 h-4" />
                                    </Button>
                                ) : (
                                    <Button
                                        variant="ghost"
                                        size="sm"
                                        onClick={pauseRecording}
                                    >
                                        <Pause className="w-4 h-4" />
                                    </Button>
                                )}
                                <Button
                                    variant="ghost"
                                    size="sm"
                                    onClick={stopRecording}
                                >
                                    <Square className="w-4 h-4" />
                                </Button>
                            </div>
                        </div>
                        <Progress value={(duration / maxDuration) * 100} />
                    </div>
                )}

                {/* Playback State */}
                {audioBlob && !isRecording && (
                    <div className="space-y-3">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                {isPlaying ? (
                                    <Button
                                        variant="ghost"
                                        size="sm"
                                        onClick={pausePlayback}
                                    >
                                        <Pause className="w-4 h-4" />
                                    </Button>
                                ) : (
                                    <Button
                                        variant="ghost"
                                        size="sm"
                                        onClick={playRecording}
                                    >
                                        <Play className="w-4 h-4" />
                                    </Button>
                                )}
                                <span className="text-sm font-medium text-text-primary">
                                    {formatTime(duration)}
                                </span>
                            </div>
                            <div className="flex items-center gap-2">
                                {onSend && (
                                    <Button
                                        variant="primary"
                                        size="sm"
                                        onClick={() => onSend(audioBlob)}
                                    >
                                        <Send className="w-4 h-4" />
                                    </Button>
                                )}
                                <Button
                                    variant="ghost"
                                    size="sm"
                                    onClick={deleteRecording}
                                >
                                    <Trash2 className="w-4 h-4" />
                                </Button>
                            </div>
                        </div>
                        <audio
                            ref={audioRef}
                            src={audioUrl || undefined}
                            onEnded={() => setIsPlaying(false)}
                            onTimeUpdate={(e) => {
                                const audio = e.currentTarget;
                                setDuration(audio.currentTime);
                            }}
                        />
                    </div>
                )}

                {/* Idle State */}
                {!isRecording && !audioBlob && (
                    <Button
                        variant="primary"
                        size="lg"
                        onClick={startRecording}
                        className="w-full"
                        leftIcon={<Mic className="w-5 h-5" />}
                    >
                        Start Recording
                    </Button>
                )}
            </div>
        );
    }
);

VoiceRecorder.displayName = 'VoiceRecorder';

