import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ListFilter } from 'lucide-react';

export interface ProgressiveDisclosurePanelProps {
  /** The primary summarized information */
  summary: React.ReactNode;
  /** The detailed information revealed upon expanding */
  details: React.ReactNode;
  /** Granular information revealed on a second expansion level if needed */
  deepDive?: React.ReactNode;
  /** Optional title for the panel */
  title?: string;
  defaultExpanded?: boolean;
}

export const ProgressiveDisclosurePanel: React.FC<ProgressiveDisclosurePanelProps> = ({
  summary,
  details,
  deepDive,
  title,
  defaultExpanded = false,
}) => {
  const [level, setLevel] = useState<0 | 1 | 2>(defaultExpanded ? 1 : 0);

  const expandToLevels = (targetLevel: 0 | 1 | 2) => {
    setLevel(level === targetLevel ? (targetLevel - 1) as 0 | 1 | 2 : targetLevel);
  };

  return (
    <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 shadow-sm overflow-hidden flex flex-col">
      {/* Header / Summary Level (0) */}
      <div 
        className="p-5 cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors flex flex-col"
        onClick={() => expandToLevels(1)}
      >
        {title && (
          <div className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-3 uppercase tracking-wider flex items-center gap-2">
            <ListFilter size={14} />
            {title}
          </div>
        )}
        <div className="flex justify-between items-center gap-4">
          <div className="flex-1">
            {summary}
          </div>
          <motion.div
            animate={{ rotate: level >= 1 ? 180 : 0 }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
            className="w-8 h-8 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center shrink-0"
          >
            <ChevronDown size={18} className="text-gray-500 dark:text-gray-400" />
          </motion.div>
        </div>
      </div>

      {/* Details Level (1) */}
      <AnimatePresence initial={false}>
        {level >= 1 && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="border-t border-gray-100 dark:border-gray-800 bg-gray-50/50 dark:bg-gray-800"
          >
            <div className="p-5">
              {details}
              
              {/* Deep Dive Action (if provided) */}
              {deepDive && (
                <div className="mt-4 flex justify-center">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      expandToLevels(2);
                    }}
                    className="text-xs font-medium text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 py-1.5 px-3 rounded-md hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors flex items-center gap-1.5"
                  >
                    {level === 2 ? 'Ocultar datos técnicos' : 'Ver datos técnicos en crudo'}
                    <motion.div animate={{ rotate: level === 2 ? 180 : 0 }}>
                      <ChevronDown size={12} />
                    </motion.div>
                  </button>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Deep Dive Level (2) */}
      <AnimatePresence initial={false}>
        {level === 2 && deepDive && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="border-t border-gray-100 dark:border-gray-800 bg-gray-100 dark:bg-gray-900 text-gray-600 dark:text-gray-300"
          >
            <div className="p-5 text-sm font-mono overflow-x-auto">
              {deepDive}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
