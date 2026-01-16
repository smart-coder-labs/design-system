import React, { forwardRef, useState } from 'react';
import { cn } from '../../lib/utils';;
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight } from 'lucide-react';

/* ========================================
   TYPES
   ======================================== */

export interface InspectorSection {
    id: string;
    title: string;
    content: React.ReactNode;
    defaultExpanded?: boolean;
}

export interface InspectorPanelProps extends React.HTMLAttributes<HTMLDivElement> {
    sections: InspectorSection[];
    width?: string;
}

/* ========================================
   INSPECTOR PANEL COMPONENT
   ======================================== */

export const InspectorPanel = forwardRef<HTMLDivElement, InspectorPanelProps>(
    (
        {
            sections,
            width = '280px',
            className,
            ...props
        },
        ref
    ) => {
        const [expandedSections, setExpandedSections] = useState<Set<string>>(
            new Set(sections.filter(s => s.defaultExpanded).map(s => s.id))
        );

        const toggleSection = (sectionId: string) => {
            setExpandedSections(prev => {
                const newSet = new Set(prev);
                if (newSet.has(sectionId)) {
                    newSet.delete(sectionId);
                } else {
                    newSet.add(sectionId);
                }
                return newSet;
            });
        };

        return (
            <div
                ref={ref}
                className={cn(
                    "bg-surface-secondary border-l border-border-primary overflow-y-auto",
                    className
                )}
                style={{ width }}
                {...props}
            >
                {sections.map((section) => {
                    const isExpanded = expandedSections.has(section.id);

                    return (
                        <div key={section.id}>
                            {/* Section Header */}
                            <button
                                onClick={() => toggleSection(section.id)}
                                className="w-full flex items-center justify-between px-4 py-4 text-left hover:bg-surface-tertiary transition-colors focus:outline-none group rounded-lg"
                            >
                                <span className="text-sm font-bold text-text-primary uppercase tracking-wide">
                                    {section.title}
                                </span>
                                <motion.div
                                    animate={{ rotate: isExpanded ? 90 : 0 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <ChevronRight className="w-4 h-4 text-text-tertiary" />
                                </motion.div>
                            </button>

                            {/* Section Content */}
                            <AnimatePresence initial={false}>
                                {isExpanded && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: 'auto', opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.2 }}
                                        className="overflow-hidden"
                                    >
                                        <div className="px-4 pb-4 space-y-4">
                                            {section.content}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    );
                })}
            </div>
        );
    }
);

InspectorPanel.displayName = 'InspectorPanel';

/* ========================================
   INSPECTOR FIELD COMPONENT
   ======================================== */

export interface InspectorFieldProps {
    label: string;
    children: React.ReactNode;
}

export const InspectorField: React.FC<InspectorFieldProps> = ({ label, children }) => {
    return (
        <div className="space-y-1.5">
            <label className="text-xs font-medium text-text-secondary">
                {label}
            </label>
            <div>
                {children}
            </div>
        </div>
    );
};

InspectorField.displayName = 'InspectorField';
