"use client";
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { cn } from '../../lib/utils';
import { Wifi, Eye, EyeOff } from 'lucide-react';

/* ========================================
   TYPES
   ======================================== */

export type CardBrand = 'visa' | 'mastercard' | 'amex';

export interface VirtualCardPreviewProps {
    cardholderName?: string;
    cardNumber?: string;
    expiryDate?: string;
    cvv?: string;
    brand?: CardBrand;
    gradient?: string;
    balance?: number;
    currency?: string;
    frozen?: boolean;
    variant?: 'full' | 'compact';
    className?: string;
}

/* ========================================
   CONSTANTS
   ======================================== */

const brandLogos: Record<CardBrand, React.ReactNode> = {
    visa: (
        <svg viewBox="0 0 48 16" className="h-4 w-auto drop-shadow-sm" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M18.425 1.157L15.412 14.846H18.78L21.793 1.157H18.425Z" fill="white"/>
            <path d="M7.456 1.157L4.14 10.587L3.774 8.718C3.125 6.495 1.146 3.91 1.146 3.91L3.896 14.846H7.424L12.671 1.157H7.456Z" fill="white"/>
            <path d="M37.755 1.157L34.191 14.846H37.423L40.987 1.157H37.755Z" fill="white"/>
            <path d="M25.756 1.157C23.978 1.157 22.569 2.055 22.569 4.298C22.569 7.828 27.435 8.169 27.435 9.877C27.435 10.424 26.855 11.004 25.756 11.004C24.321 11.004 23.364 10.252 23.364 10.252L22.818 13.02C22.818 13.02 24.116 14.114 26.473 14.114C28.385 14.114 30.843 13.156 30.843 10.765C30.843 6.936 25.926 6.561 25.926 5.399C25.926 4.989 26.369 4.27 27.633 4.27C28.794 4.27 29.818 4.783 29.818 4.783L30.33 2.055C30.33 2.055 29.204 1.157 25.756 1.157Z" fill="white"/>
            <path d="M45.544 1.157H42.748L37.72 14.846H41.054L41.72 13.036H45.698L46.073 14.846H49.199L46.434 1.157H45.544ZM42.607 10.605L43.837 7.29L44.553 10.605H42.607Z" fill="white"/>
        </svg>
    ),
    mastercard: (
        <div className="flex items-center">
            <div className="w-6 h-6 rounded-full bg-[#EB001B] shadow-inner" />
            <div className="w-6 h-6 rounded-full bg-[#F79E1B] -ml-2 mix-blend-screen shadow-inner" />
        </div>
    ),
    amex: (
        <div className="bg-[#0070D1] px-1.5 py-0.5 rounded-sm border border-white/20">
            <span className="text-[9px] font-black text-white italic tracking-tighter">AMERICAN EXPRESS</span>
        </div>
    ),
};

const gradientMap: Record<string, string> = {
    dark: 'from-zinc-900 via-zinc-800 to-zinc-950',
    blue: 'from-blue-600 via-indigo-600 to-blue-900',
    purple: 'from-fuchsia-600 via-purple-600 to-indigo-900',
    gold: 'from-[#BF953F] via-[#FCF6BA] to-[#B38728]',
    emerald: 'from-emerald-500 via-teal-600 to-cyan-900',
    glass: 'bg-white/10 backdrop-blur-xl border border-white/20 shadow-[0_8px_32px_0_rgba(31,38,135,0.37)]',
    mesh: 'bg-[#1a1a1a] bg-[radial-gradient(at_0%_0%,_#3b82f6_0,_transparent_50%),_radial-gradient(at_50%_0%,_#8b5cf6_0,_transparent_50%),_radial-gradient(at_100%_0%,_#ec4899_0,_transparent_50%)]',
};

/* ========================================
   COMPONENT
   ======================================== */

export const VirtualCardPreview: React.FC<VirtualCardPreviewProps> = ({
    cardholderName = 'John Doe',
    cardNumber = '4242 4242 4242 4242',
    expiryDate = '12/28',
    cvv = '123',
    brand = 'visa',
    gradient = 'dark',
    balance,
    currency = 'USD',
    frozen = false,
    variant = 'full',
    className = '',
}) => {
    const [isFlipped, setIsFlipped] = useState(false);
    const [showCvv, setShowCvv] = useState(false);
    const isCompact = variant === 'compact';
    
    // Smooth 3D tilt values
    const [rotateX, setRotateX] = useState(0);
    const [rotateY, setRotateY] = useState(0);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (isFlipped || isCompact) return;
        const rect = e.currentTarget.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const rX = ((y - centerY) / centerY) * -10;
        const rY = ((x - centerX) / centerX) * 10;
        setRotateX(rX);
        setRotateY(rY);
    };

    const handleMouseLeave = () => {
        setRotateX(0);
        setRotateY(0);
    };

    const maskedNumber = cardNumber.replace(/\d(?=\d{4})/g, '•');
    const last4 = cardNumber.slice(-4);
    const gradientClass = gradientMap[gradient] || gradientMap.dark;

    const formatBalance = (v: number) =>
        new Intl.NumberFormat('en-US', { style: 'currency', currency, minimumFractionDigits: 2 }).format(v);

    if (isCompact) {
        return (
            <div 
                className={cn(
                    'relative w-full aspect-[1.5858/1] rounded-xl overflow-hidden shadow-sm group cursor-pointer transition-transform hover:scale-105 active:scale-95',
                    'bg-gradient-to-br border border-white/5',
                    gradientClass,
                    className
                )}
                onClick={() => setIsFlipped(!isFlipped)}
            >
                <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="absolute inset-0 flex flex-col items-center justify-center p-3">
                    <div className="scale-125 mb-1">{brandLogos[brand]}</div>
                    <p className="text-[10px] font-mono text-white/40 tracking-widest mt-1">•••• {last4}</p>
                </div>
                {frozen && (
                    <div className="absolute inset-0 bg-zinc-950/40 backdrop-blur-[1px] flex items-center justify-center">
                        <span className="text-[10px] font-bold text-white/60">FROZEN</span>
                    </div>
                )}
            </div>
        );
    }

    return (
        <div className={cn('perspective-[1200px] w-full max-w-[400px] mx-auto', className)}>
            <motion.div
                className="relative w-full cursor-pointer select-none"
                style={{ 
                    transformStyle: 'preserve-3d', 
                    aspectRatio: '1.5858 / 1',
                }}
                animate={{
                    rotateY: isFlipped ? 180 : rotateY,
                    rotateX: isFlipped ? 0 : rotateX,
                    scale: 1,
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                transition={{ 
                    rotateY: { type: 'spring', stiffness: 260, damping: 20 },
                    rotateX: { type: 'spring', stiffness: 260, damping: 20 },
                    scale: { type: 'spring', stiffness: 300, damping: 20 }
                }}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                onClick={() => setIsFlipped((p) => !p)}
                role="button"
                tabIndex={0}
                aria-label={`Virtual card. ${isFlipped ? 'Showing back' : 'Showing front'}. Click to flip.`}
            >
                {/* ======= FRONT ======= */}
                <div
                    className={cn(
                        'absolute inset-0 rounded-[24px] p-8 text-white overflow-hidden shadow-2xl transition-all duration-500',
                        'bg-gradient-to-br border border-white/10 saturate-[1.2]',
                        gradientClass,
                        frozen && 'grayscale contrast-75',
                    )}
                    style={{ backfaceVisibility: 'hidden' }}
                >
                    {/* Glossy Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent pointer-events-none" />
                    
                    {/* Grain Texture */}
                    <div className="absolute inset-0 opacity-[0.15] mix-blend-overlay pointer-events-none" style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/carbon-fibre.png")' }} />

                    {/* Decorative pattern */}
                    <div className="absolute inset-0 opacity-[0.1] pointer-events-none">
                        <div className="absolute -top-24 -right-24 w-80 h-80 rounded-full bg-white/20 blur-3xl" />
                        <div className="absolute -bottom-24 -left-24 w-64 h-64 rounded-full bg-white/20 blur-3xl" />
                    </div>

                    {/* Holographic Shimmer (Front Only) */}
                    {!isFlipped && (
                        <motion.div 
                            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-[100%]"
                            animate={{ x: ['100%', '-100%'] }}
                            transition={{ duration: 3, repeat: Infinity, ease: "linear", repeatDelay: 2 }}
                        />
                    )}

                    {/* Frozen overlay */}
                    {frozen && (
                        <div className="absolute inset-0 bg-zinc-950/40 backdrop-blur-[2px] flex flex-col items-center justify-center z-10 rounded-[24px]">
                            <div className="bg-white/10 backdrop-blur-md border border-white/20 px-4 py-2 rounded-xl flex items-center gap-2">
                                <span className="text-lg">❄️</span>
                                <span className="text-sm font-bold tracking-tight">CARD FROZEN</span>
                            </div>
                        </div>
                    )}

                    {/* Top row */}
                    <div className="relative flex items-start justify-between">
                        <div className="space-y-1">
                            {balance !== undefined && (
                                <>
                                    <p className="text-[10px] text-white/40 font-bold uppercase tracking-[0.2em]">Available Balance</p>
                                    <p className="text-2xl font-bold tracking-tight leading-tight">{formatBalance(balance)}</p>
                                </>
                            )}
                        </div>
                        <div className="flex flex-col items-end gap-3">
                            <div className="h-8 flex items-center">{brandLogos[brand]}</div>
                            <Wifi className="w-5 h-5 text-white/30 rotate-90" />
                        </div>
                    </div>

                    {/* Chip - More Realistic */}
                    <div className="relative mt-auto mb-6">
                        <div className="w-12 h-10 rounded-lg bg-gradient-to-br from-amber-200 via-amber-400 to-amber-600 shadow-inner overflow-hidden border border-amber-500/30">
                            <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent_10%,rgba(0,0,0,0.1)_10%,rgba(0,0,0,0.1)_12%,transparent_12%,transparent_48%,rgba(0,0,0,0.1)_48%,rgba(0,0,0,0.1)_50%,transparent_50%,transparent_88%,rgba(0,0,0,0.1)_88%,rgba(0,0,0,0.1)_90%,transparent_90%)]" />
                            <div className="absolute inset-0 bg-[linear-gradient(0deg,transparent_45%,rgba(0,0,0,0.1)_45%,rgba(0,0,0,0.1)_55%,transparent_55%)]" />
                        </div>
                    </div>

                    {/* Card number */}
                    <div className="relative mb-6">
                        <p className="text-xl font-mono tracking-[0.15em] text-white font-medium drop-shadow-md">
                            {maskedNumber}
                        </p>
                    </div>

                    {/* Bottom row */}
                    <div className="relative flex items-end justify-between">
                        <div className="space-y-0.5">
                            <p className="text-[9px] text-white/30 font-bold uppercase tracking-[0.15em]">Card Holder</p>
                            <p className="text-xs font-bold text-white/90 uppercase tracking-widest drop-shadow-sm">
                                {cardholderName}
                            </p>
                        </div>
                        <div className="space-y-0.5 text-right">
                            <p className="text-[9px] text-white/30 font-bold uppercase tracking-[0.15em]">Expires</p>
                            <p className="text-xs font-bold text-white/90 font-mono tracking-widest drop-shadow-sm">{expiryDate}</p>
                        </div>
                    </div>
                </div>

                {/* ======= BACK ======= */}
                <div
                    className={cn(
                        'absolute inset-0 rounded-[24px] overflow-hidden shadow-2xl transition-all duration-500',
                        'bg-gradient-to-br border border-white/10',
                        gradientClass,
                    )}
                    style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
                >
                    {/* Magnetic stripe */}
                    <div className="mt-10 w-full h-14 bg-zinc-950/80 shadow-inner" />

                    {/* Signature / CVV strip */}
                    <div className="mx-8 mt-10">
                        <div className="flex items-center">
                            <div className="flex-1 h-12 bg-zinc-100 rounded-l-lg opacity-90 shadow-inner flex items-center pl-4" 
                                 style={{ backgroundImage: 'repeating-linear-gradient(45deg, #e5e7eb, #e5e7eb 5px, #f3f4f6 5px, #f3f4f6 10px)' }}>
                                <span className="text-[10px] font-bold text-zinc-400 italic font-mono select-none">Authorized Signature</span>
                            </div>
                            <div className="w-20 h-12 bg-white flex items-center justify-center rounded-r-lg shadow-inner">
                                <button
                                    onClick={(e) => { e.stopPropagation(); setShowCvv((p) => !p); }}
                                    className="flex items-center gap-1 text-zinc-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-blue rounded"
                                >
                                    {showCvv ? (
                                        <span className="text-base font-bold font-mono tracking-widest">{cvv}</span>
                                    ) : (
                                        <span className="text-base font-bold font-mono tracking-widest">•••</span>
                                    )}
                                </button>
                            </div>
                        </div>
                        <div className="flex items-center justify-end gap-1 mt-3">
                            <button
                                onClick={(e) => { e.stopPropagation(); setShowCvv((p) => !p); }}
                                className="text-[10px] font-bold text-white/40 flex items-center gap-1.5 hover:text-white/60 transition-apple uppercase tracking-wider"
                            >
                                {showCvv ? <EyeOff className="w-3.5 h-3.5" /> : <Eye className="w-3.5 h-3.5" />}
                                {showCvv ? 'Hide CVV' : 'Show CVV'}
                            </button>
                        </div>
                    </div>

                    {/* Info Text */}
                    <div className="absolute bottom-8 left-8 right-8 flex items-end justify-between">
                        <div className="max-w-[180px]">
                            <p className="text-[8px] text-white/20 leading-tight uppercase font-medium tracking-tight">
                                This card is property of the issuing bank. Possession of this card does not imply ownership. 
                                Use is governed by the cardholder agreement.
                            </p>
                        </div>
                        <div className="opacity-40 grayscale flex flex-col items-end gap-2">
                           {brandLogos[brand]}
                           <span className="text-[8px] font-bold text-white/40 tracking-[0.2em] uppercase">Debit</span>
                        </div>
                    </div>
                </div>
            </motion.div>

            {/* Hint */}
            <p className="text-center text-[10px] text-text-quaternary mt-6 font-bold uppercase tracking-[0.2em] opacity-50 flex items-center justify-center gap-2">
                <span className="w-1 h-1 rounded-full bg-current" />
                Tap to Flip
                <span className="w-1 h-1 rounded-full bg-current" />
            </p>
        </div>
    );
};

VirtualCardPreview.displayName = 'VirtualCardPreview';
export default VirtualCardPreview;
