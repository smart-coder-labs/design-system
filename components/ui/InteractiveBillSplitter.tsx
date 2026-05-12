"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Users, UserPlus, Check, Percent, Receipt, ChevronDown, CheckCircle2 } from 'lucide-react';
import { cn } from '../../lib/utils';
import { Avatar, AvatarImage, AvatarFallback } from './Avatar';

export interface SplitContact {
    id: string;
    name: string;
    avatarUrl?: string;
    isUser?: boolean; // indicates if it's the current user
}

export interface InteractiveBillSplitterProps {
    billAmount: number;
    currency?: string;
    friends: SplitContact[];
    className?: string;
    onSplitComplete?: (finalSplits: { contactId: string; amount: number }[]) => void;
}

export const InteractiveBillSplitter: React.FC<InteractiveBillSplitterProps> = ({
    billAmount = 150.75,
    currency = 'USD',
    friends,
    className,
    onSplitComplete,
}) => {
    // Current user + friends selected
    const initialParticipants = friends.filter(f => f.isUser);
    const [participants, setParticipants] = useState<SplitContact[]>(initialParticipants.length ? initialParticipants : [friends[0]]);
    const [tipPercentage, setTipPercentage] = useState<number>(15);
    const [isSelecting, setIsSelecting] = useState(false);

    const tipAmount = billAmount * (tipPercentage / 100);
    const totalAmount = billAmount + tipAmount;
    
    // Simplistic equal split
    const splitAmount = participants.length > 0 ? totalAmount / participants.length : 0;

    const toggleParticipant = (friend: SplitContact) => {
        if (participants.find(p => p.id === friend.id)) {
            if (participants.length > 1) { // prevent removing everyone
                setParticipants(prev => prev.filter(p => p.id !== friend.id));
            }
        } else {
            setParticipants(prev => [...prev, friend]);
        }
    };

    const formatCurrency = (val: number) =>
        new Intl.NumberFormat('en-US', { style: 'currency', currency }).format(val);

    return (
        <div className={cn("w-full max-w-md bg-white dark:bg-zinc-900 rounded-[2rem] p-6 shadow-xl border border-zinc-200 dark:border-zinc-800 flex flex-col gap-6", className)}>
            
            {/* Header */}
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <div className="p-3 bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 rounded-2xl">
                        <Receipt className="w-5 h-5" />
                    </div>
                    <div>
                        <h3 className="text-lg font-bold text-zinc-900 dark:text-zinc-100">Bill Splitter</h3>
                        <p className="text-sm text-zinc-500 dark:text-zinc-400">Dinner at Gusteau's</p>
                    </div>
                </div>
            </div>

            {/* Bill Info & Tip */}
            <div className="bg-zinc-50 dark:bg-zinc-800/40 rounded-3xl p-5 border border-zinc-200 dark:border-zinc-700/50">
                <div className="flex justify-between items-center mb-4">
                    <span className="text-sm font-semibold text-zinc-500 uppercase tracking-wider">Subtotal</span>
                    <span className="text-xl font-bold text-zinc-900 dark:text-zinc-100">{formatCurrency(billAmount)}</span>
                </div>

                <div className="flex flex-wrap justify-between items-center gap-4 bg-white dark:bg-zinc-900 rounded-2xl p-3 shadow-sm border border-zinc-100 dark:border-zinc-800">
                    <div className="flex items-center gap-2 text-sm font-medium text-zinc-600 dark:text-zinc-400">
                        <Percent className="w-4 h-4" /> Tip
                    </div>
                    <div className="flex gap-2">
                        {[10, 15, 20].map(tip => (
                            <button
                                key={tip}
                                onClick={() => setTipPercentage(tip)}
                                className={cn(
                                    "px-3 py-1.5 rounded-lg text-sm font-bold transition-apple cursor-pointer",
                                    tipPercentage === tip 
                                        ? "bg-indigo-600 text-white shadow-md shadow-indigo-500/20" 
                                        : "bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 hover:bg-zinc-200 dark:hover:bg-zinc-700"
                                )}
                            >
                                {tip}%
                            </button>
                        ))}
                    </div>
                </div>

                <div className="h-px bg-zinc-200 dark:bg-zinc-700/50 my-4" />

                <div className="flex justify-between items-center">
                    <span className="text-sm font-bold text-zinc-900 dark:text-zinc-100 uppercase tracking-wider">Total</span>
                    <span className="text-xl font-bold text-indigo-600 dark:text-indigo-400 tracking-tight">{formatCurrency(totalAmount)}</span>
                </div>
            </div>

            {/* Participants */}
            <div>
                <div className="flex justify-between items-center mb-3">
                    <span className="text-sm font-semibold text-zinc-700 dark:text-zinc-300">Split with ({participants.length})</span>
                    <button 
                        onClick={() => setIsSelecting(!isSelecting)}
                        className="text-indigo-600 dark:text-indigo-400 text-sm font-bold flex items-center gap-1 hover:underline"
                    >
                        {isSelecting ? "Done" : "Edit"} <ChevronDown className={cn("w-4 h-4 transition-transform", isSelecting ? "rotate-180" : "")} />
                    </button>
                </div>

                <AnimatePresence>
                    {isSelecting && (
                        <motion.div 
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="bg-zinc-50 dark:bg-zinc-800/40 rounded-2xl p-3 mb-4 overflow-hidden border border-zinc-200 dark:border-zinc-700/50"
                        >
                            <div className="flex items-center gap-3 overflow-x-auto pb-2 custom-scrollbar">
                                {friends.map(friend => {
                                    const isSelected = participants.some(p => p.id === friend.id);
                                    return (
                                        <button 
                                            key={friend.id} 
                                            onClick={() => toggleParticipant(friend)}
                                            className={cn(
                                                "relative flex-shrink-0 flex items-center justify-center p-1 rounded-full transition-all border-2",
                                                isSelected ? "border-indigo-500" : "border-transparent opacity-60 hover:opacity-100"
                                            )}
                                        >
                                            <Avatar className="w-12 h-12">
                                                <AvatarImage src={friend.avatarUrl} alt={friend.name} />
                                                <AvatarFallback>{friend.name.substring(0, 2)}</AvatarFallback>
                                            </Avatar>
                                            {isSelected && (
                                                <div className="absolute -bottom-1 -right-1 bg-white dark:bg-zinc-900 rounded-full">
                                                    <CheckCircle2 className="w-5 h-5 text-indigo-500" />
                                                </div>
                                            )}
                                        </button>
                                    );
                                })}
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* Split Results */}
                <div className="flex flex-col gap-3">
                    <AnimatePresence mode="popLayout">
                        {participants.map(p => (
                            <motion.div
                                key={p.id}
                                layout
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                className="flex items-center justify-between bg-white dark:bg-zinc-800 p-3 rounded-2xl border border-zinc-100 dark:border-zinc-700 shadow-sm"
                            >
                                <div className="flex items-center gap-3">
                                    <Avatar className="w-10 h-10 ring-2 ring-indigo-50 dark:ring-indigo-900/30">
                                        <AvatarImage src={p.avatarUrl} alt={p.name} />
                                        <AvatarFallback>{p.name.substring(0, 2)}</AvatarFallback>
                                    </Avatar>
                                    <div>
                                        <p className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">{p.isUser ? "You" : p.name}</p>
                                        <p className="text-[10px] text-zinc-500 dark:text-zinc-400 uppercase font-bold tracking-wider">Equal Split</p>
                                    </div>
                                </div>
                                <span className="font-bold text-zinc-900 dark:text-zinc-100">{formatCurrency(splitAmount)}</span>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>
            </div>

            <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => onSplitComplete?.(participants.map(p => ({ contactId: p.id, amount: splitAmount })))}
                className="w-full py-4 bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 font-bold rounded-xl flex items-center justify-center gap-2 hover:shadow-xl transition-all shadow-md group mt-2"
            >
                <Users className="w-5 h-5 group-hover:scale-110 transition-transform" />
                Request Splits
            </motion.button>
        </div>
    );
};

InteractiveBillSplitter.displayName = 'InteractiveBillSplitter';
