import React from 'react';
import * as SwitchPrimitive from '@radix-ui/react-switch';
import { motion } from 'framer-motion';

/* ========================================
   TYPES
   ======================================== */

export interface SwitchProps {
    checked?: boolean;
    onCheckedChange?: (checked: boolean) => void;
    disabled?: boolean;
    label?: string;
    description?: string;
    size?: 'sm' | 'md' | 'lg';
    className?: string;
}

/* ========================================
   STYLES
   ======================================== */

const sizeStyles = {
    sm: {
        root: 'w-9 h-5',
        thumb: 'w-4 h-4',
        translate: 'translate-x-4',
    },
    md: {
        root: 'w-11 h-6',
        thumb: 'w-5 h-5',
        translate: 'translate-x-5',
    },
    lg: {
        root: 'w-14 h-8',
        thumb: 'w-7 h-7',
        translate: 'translate-x-6',
    },
};

/* ========================================
   COMPONENT
   ======================================== */

export const Switch: React.FC<SwitchProps> = ({
    checked,
    onCheckedChange,
    disabled = false,
    label,
    description,
    size = 'md',
    className = '',
}) => {
    const sizes = sizeStyles[size];

    const switchElement = (
        <SwitchPrimitive.Root
            checked={checked}
            onCheckedChange={onCheckedChange}
            disabled={disabled}
            className={`
        ${sizes.root} relative rounded-full transition-apple focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-blue focus-visible:ring-offset-2 disabled:opacity-40 disabled:cursor-not-allowed data-[state=checked]:bg-accent-blue data-[state=unchecked]:bg-surface-secondary ${className} group
      `}
        >
            <SwitchPrimitive.Thumb asChild>
                <motion.span
                    className={`
            ${sizes.thumb}
            block
            bg-white
            rounded-full
            shadow-sm
            transform
            `}
                    animate={{
                        x: checked ? (size === 'sm' ? 16 : size === 'md' ? 20 : 24) : 0,
                    }}
                    transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                />
            </SwitchPrimitive.Thumb>
        </SwitchPrimitive.Root>
    );

    if (label || description) {
        return (
            <label className="flex items-start gap-3 cursor-pointer">
                {switchElement}
                <div className="flex-1">
                    {label && (
                        <p className="text-sm font-medium text-text-primary">{label}</p>
                    )}
                    {description && (
                        <p className="text-xs text-text-secondary mt-0.5">{description}</p>
                    )}
                </div>
            </label>
        );
    }

    return switchElement;
};

/* ========================================
   USAGE EXAMPLES
   ======================================== */

/*
// Basic switch
const [enabled, setEnabled] = useState(false);

<Switch checked={enabled} onCheckedChange={setEnabled} />

// Switch with label
<Switch
  checked={enabled}
  onCheckedChange={setEnabled}
  label="Enable notifications"
/>

// Switch with label and description
<Switch
  checked={enabled}
  onCheckedChange={setEnabled}
  label="Dark Mode"
  description="Toggle between light and dark theme"
/>

// Different sizes
<Switch size="sm" checked={enabled} onCheckedChange={setEnabled} />
<Switch size="md" checked={enabled} onCheckedChange={setEnabled} />
<Switch size="lg" checked={enabled} onCheckedChange={setEnabled} />

// Disabled switch
<Switch
  checked={enabled}
  onCheckedChange={setEnabled}
  disabled
  label="Disabled switch"
/>
*/
