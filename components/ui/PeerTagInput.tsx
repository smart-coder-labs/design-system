"use client";
import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, BadgeCheck, X, Shield, ArrowRight } from 'lucide-react';
import { cn } from '../../lib/utils';
import { Avatar, AvatarImage, AvatarFallback } from './Avatar';

export interface PeerTagContact {
    id: string;
    tag: string; // e.g. $username
    name: string;
    avatarUrl?: string;
    isVerified?: boolean;
    recentActivity?: string;
}

export interface PeerTagInputProps {
    contacts: PeerTagContact[];
    placeholder?: string;
    className?: string;
    onSelect?: (contact: PeerTagContact) => void;
}

export const PeerTagInput: React.FC<PeerTagInputProps> = ({
    contacts,
    placeholder = "Search $Name",
    className,
    onSelect,
}) => {
    const [query, setQuery] = useState("");
    const [isFocused, setIsFocused] = useState(false);
    const [selectedIndex, setSelectedIndex] = useState(0);
    const inputRef = useRef<HTMLInputElement>(null);

    const filteredContacts = contacts.filter(contact =>
        contact.tag.toLowerCase().includes(query.toLowerCase()) ||
        contact.name.toLowerCase().includes(query.toLowerCase())
    ).slice(0, 5); // Max 5 results for ultra-fast perceived performance

    useEffect(() => {
        setSelectedIndex(0);
    }, [query]);

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (!isFocused || filteredContacts.length === 0) return;

        switch (e.key) {
            case 'ArrowDown':
                e.preventDefault();
                setSelectedIndex(prev => (prev + 1) % filteredContacts.length);
                break;
            case 'ArrowUp':
                e.preventDefault();
                setSelectedIndex(prev => (prev === 0 ? filteredContacts.length - 1 : prev - 1));
                break;
            case 'Enter':
                e.preventDefault();
                handleSelect(filteredContacts[selectedIndex]);
                break;
            case 'Escape':
                inputRef.current?.blur();
                break;
        }
    };

    const handleSelect = (contact: PeerTagContact) => {
        setQuery(contact.tag);
        setIsFocused(false);
        onSelect?.(contact);
        inputRef.current?.blur();
    };

    return (
        <div className={cn("relative w-full max-w-sm", className)}>
            <div className={cn(
                "relative flex items-center bg-surface-primary rounded-2xl border-2 transition-all duration-200 overflow-hidden shadow-sm",
                isFocused
                    ? "border-emerald-500 ring-4 ring-emerald-500/20"
                    : "border-border-primary hover:border-zinc-300 dark:hover:border-zinc-700"
            )}>
                <div className="pl-4 pr-2 text-text-tertiary">
                    <Search className="w-5 h-5" />
                </div>
                <input
                    ref={inputRef}
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    onFocus={() => setIsFocused(true)}
                    onBlur={() => setTimeout(() => setIsFocused(false), 200)} // delay to allow clicks
                    onKeyDown={handleKeyDown}
                    placeholder={placeholder}
                    className="flex-1 bg-transparent border-none outline-none py-3 font-semibold text-text-primary placeholder:text-text-tertiary dark:placeholder:text-text-tertiary placeholder:font-normal"
                />
                
                <AnimatePresence>
                    {query && (
                        <motion.button
                            initial={{ scale: 0, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0, opacity: 0 }}
                            onClick={() => { setQuery(""); inputRef.current?.focus(); }}
                            className="p-2 mr-2 bg-background-secondary rounded-xl hover:bg-background-secondary transition"
                        >
                            <X className="w-4 h-4 text-text-tertiary" />
                        </motion.button>
                    )}
                </AnimatePresence>
            </div>

            <AnimatePresence>
                {isFocused && query && (
                    <motion.div
                        initial={{ opacity: 0, y: 5, scale: 0.98 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 5, scale: 0.98 }}
                        transition={{ duration: 0.15 }}
                        className="absolute top-full left-0 w-full mt-2 bg-surface-primary border border-border-primary rounded-3xl shadow-xl z-50 overflow-hidden"
                    >
                        {filteredContacts.length > 0 ? (
                            <div className="p-2 space-y-1">
                                <div className="px-3 py-2 text-xs font-bold uppercase tracking-wider text-text-tertiary flex items-center gap-1">
                                    <Shield className="w-3.5 h-3.5" /> Secure Search
                                </div>
                                {filteredContacts.map((contact, idx) => (
                                    <button
                                        key={contact.id}
                                        onClick={() => handleSelect(contact)}
                                        onMouseEnter={() => setSelectedIndex(idx)}
                                        className={cn(
                                            "w-full flex items-center justify-between p-3 rounded-2xl transition-apple cursor-pointer text-left group",
                                            selectedIndex === idx
                                                ? "bg-background-secondary"
                                                : "hover:bg-background-secondary"
                                        )}
                                    >
                                        <div className="flex items-center gap-3">
                                            <Avatar className="w-10 h-10">
                                                <AvatarImage src={contact.avatarUrl} alt={contact.name} />
                                                <AvatarFallback>{contact.name[0]}</AvatarFallback>
                                            </Avatar>
                                            <div>
                                                <div className="flex items-center gap-1.5">
                                                    <span className="font-bold text-text-primary">{contact.name}</span>
                                                    {contact.isVerified && (
                                                        <BadgeCheck className="w-4 h-4 text-emerald-500 fill-emerald-100 dark:fill-emerald-900/30" />
                                                    )}
                                                </div>
                                                <div className="flex items-center gap-2">
                                                    <span className="text-sm font-semibold text-text-tertiary">{contact.tag}</span>
                                                    {contact.recentActivity && (
                                                        <>
                                                            <span className="w-1 h-1 rounded-full bg-zinc-300 dark:bg-zinc-700" />
                                                            <span className="text-xs font-medium text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-500/10 px-1.5 rounded-md">
                                                                {contact.recentActivity}
                                                            </span>
                                                        </>
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                        <div className={cn("p-2 rounded-xl transition-all", selectedIndex === idx ? "bg-emerald-500 text-white shadow-md shadow-emerald-500/20 translate-x-0" : "bg-transparent text-transparent -translate-x-2")}>
                                            <ArrowRight className="w-4 h-4" />
                                        </div>
                                    </button>
                                ))}
                            </div>
                        ) : (
                            <div className="p-6 text-center text-text-tertiary font-medium">
                                No contacts found for "{query}"
                            </div>
                        )}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

PeerTagInput.displayName = 'PeerTagInput';
