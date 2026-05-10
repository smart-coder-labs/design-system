"use client";
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '../../lib/utils';
import { ScanFace, Fingerprint, ShieldCheck, Loader2, X } from 'lucide-react';

/* ========================================
   TYPES
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

/* ========================================
   COMPONENT
   ======================================== */

export const BiometricPrompt: React.FC<BiometricPromptProps> = ({
    type = 'faceId',
    status = 'idle',
    onAuthenticate,
    onCancel,
    title,
    subtitle,
    open = true,
    className = '',
}) => {
    const isFace = type === 'faceId';
    const Icon = isFace ? ScanFace : Fingerprint;

    const defaultTitle = isFace ? 'Face ID' : 'Touch ID';
    const defaultSubtitle = isFace
        ? 'Look at your device to authenticate'
        : 'Place your finger on the sensor';

    const resolvedTitle = title || defaultTitle;
    const resolvedSubtitle = subtitle || defaultSubtitle;

    // Scanning ring animation
    const scanVariants = {
        idle: { scale: 1, opacity: 0.3 },
        scanning: {
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.6, 0.3],
            transition: { duration: 1.5, repeat: Infinity, ease: 'easeInOut' as const },
        },
        success: { scale: 1.1, opacity: 0 },
        failed: { scale: 0.95, opacity: 0 },
    };

    return (
        <AnimatePresence>
            {open && (
                <>
                    {/* Overlay */}
                    <motion.div
                        className="fixed inset-0 bg-black/40 backdrop-blur-md z-50"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onCancel}
                    />
                    {/* Prompt */}
                    <motion.div
                        className={cn(
                            'fixed top-1/2 left-1/2 z-50 w-[300px]',
                            'bg-surface-primary border border-border-primary rounded-3xl shadow-xl p-8',
                            'flex flex-col items-center text-center',
                            className,
                        )}
                        initial={{ opacity: 0, scale: 0.92, x: '-50%', y: '-50%' }}
                        animate={{ opacity: 1, scale: 1, x: '-50%', y: '-50%' }}
                        exit={{ opacity: 0, scale: 0.92, x: '-50%', y: '-50%' }}
                        transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                        role="dialog"
                        aria-label={resolvedTitle}
                    >
                        {/* Close button */}
                        <button
                            onClick={onCancel}
                            className="absolute top-3 right-3 w-7 h-7 rounded-full bg-surface-secondary flex items-center justify-center text-text-tertiary hover:text-text-primary transition-apple"
                            aria-label="Close"
                        >
                            <X className="w-3.5 h-3.5" />
                        </button>

                        {/* Biometric icon with scanning ring */}
                        <div className="relative mb-6">
                            <motion.div
                                className={cn(
                                    'absolute inset-0 rounded-full',
                                    status === 'success' ? 'bg-status-success' :
                                    status === 'failed' ? 'bg-status-error' : 'bg-accent-blue',
                                )}
                                style={{ margin: '-12px' }}
                                variants={scanVariants}
                                animate={status}
                            />
                            <div className={cn(
                                'relative w-20 h-20 rounded-full flex items-center justify-center transition-apple duration-300',
                                status === 'success' ? 'bg-status-success/10 text-status-success' :
                                status === 'failed' ? 'bg-status-error/10 text-status-error' :
                                'bg-accent-blue/10 text-accent-blue',
                            )}>
                                <AnimatePresence mode="wait">
                                    {status === 'scanning' && (
                                        <motion.div key="scan" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                                            <Loader2 className="w-10 h-10 animate-spin" />
                                        </motion.div>
                                    )}
                                    {status === 'success' && (
                                        <motion.div
                                            key="success"
                                            initial={{ opacity: 0, scale: 0.5 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            transition={{ type: 'spring', stiffness: 400, damping: 20 }}
                                        >
                                            <ShieldCheck className="w-10 h-10" />
                                        </motion.div>
                                    )}
                                    {(status === 'idle' || status === 'failed') && (
                                        <motion.div
                                            key="icon"
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            exit={{ opacity: 0 }}
                                        >
                                            <Icon className="w-10 h-10" />
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        </div>

                        {/* Title */}
                        <h3 className="text-base font-bold text-text-primary mb-1">{resolvedTitle}</h3>
                        <p className="text-xs text-text-secondary leading-relaxed mb-6">{resolvedSubtitle}</p>

                        {/* Status messages */}
                        <AnimatePresence mode="wait">
                            {status === 'success' && (
                                <motion.p
                                    key="s"
                                    initial={{ opacity: 0, y: 6 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="text-xs font-semibold text-status-success"
                                >
                                    Authentication successful
                                </motion.p>
                            )}
                            {status === 'failed' && (
                                <motion.p
                                    key="f"
                                    initial={{ opacity: 0, y: 6 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="text-xs font-semibold text-status-error mb-4"
                                >
                                    Authentication failed. Try again.
                                </motion.p>
                            )}
                        </AnimatePresence>

                        {/* Action button */}
                        {(status === 'idle' || status === 'failed') && (
                            <motion.button
                                onClick={onAuthenticate}
                                className={cn(
                                    'w-full py-3 px-6 rounded-xl text-sm font-semibold text-white',
                                    'bg-accent-blue hover:bg-accent-blue-hover active:bg-accent-blue-active',
                                    'transition-apple duration-200',
                                    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-blue',
                                )}
                                whileTap={{ scale: 0.97 }}
                            >
                                {status === 'failed' ? 'Try Again' : `Authenticate with ${defaultTitle}`}
                            </motion.button>
                        )}
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
};

BiometricPrompt.displayName = 'BiometricPrompt';
export default BiometricPrompt;
