import React from 'react';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import { motion, AnimatePresence } from 'framer-motion';

/* ========================================
   TYPES
   ======================================== */

export interface DropdownProps {
    trigger: React.ReactNode;
    children: React.ReactNode;
    align?: 'start' | 'center' | 'end';
    sideOffset?: number;
}

/* ========================================
   COMPONENT
   ======================================== */

export const Dropdown: React.FC<DropdownProps> = ({
    trigger,
    children,
    align = 'end',
    sideOffset = 8,
}) => {
    const [open, setOpen] = React.useState(false);

    return (
        <DropdownMenu.Root open={open} onOpenChange={setOpen}>
            <DropdownMenu.Trigger asChild>{trigger}</DropdownMenu.Trigger>

            <AnimatePresence>
                {open && (
                    <DropdownMenu.Portal forceMount>
                        <DropdownMenu.Content asChild align={align} sideOffset={sideOffset}>
                            <motion.div
                                className="
                  min-w-[200px]
                  bg-surface-primary
                  border border-border-primary
                  rounded-xl
                  shadow-lg
                  p-1
                  z-dropdown
                  focus:outline-none
                "
                                initial={{ opacity: 0, scale: 0.96, y: -8 }}
                                animate={{ opacity: 1, scale: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.96, y: -8 }}
                                transition={{
                                    type: 'spring',
                                    stiffness: 400,
                                    damping: 25,
                                    mass: 0.6,
                                }}
                            >
                                {children}
                            </motion.div>
                        </DropdownMenu.Content>
                    </DropdownMenu.Portal>
                )}
            </AnimatePresence>
        </DropdownMenu.Root>
    );
};

/* ========================================
   SUB-COMPONENTS
   ======================================== */

export const DropdownItem: React.FC<{
    children: React.ReactNode;
    onSelect?: () => void;
    disabled?: boolean;
    destructive?: boolean;
    leftIcon?: React.ReactNode;
    rightIcon?: React.ReactNode;
    className?: string;
}> = ({
    children,
    onSelect,
    disabled = false,
    destructive = false,
    leftIcon,
    rightIcon,
    className = '',
}) => (
        <DropdownMenu.Item
            onSelect={onSelect}
            disabled={disabled}
            className={`
      flex items-center gap-3
      px-3 py-2
      rounded-lg
      text-sm
      cursor-pointer
      outline-none
      transition-apple
      ${destructive
                    ? 'text-status-error hover:bg-status-error/10'
                    : 'text-text-primary hover:bg-surface-secondary'
                }
      ${disabled ? 'opacity-40 cursor-not-allowed' : ''}
      ${className}
    `}
        >
            {leftIcon && <span className="w-4 h-4 flex-shrink-0">{leftIcon}</span>}
            <span className="flex-1">{children}</span>
            {rightIcon && <span className="w-4 h-4 flex-shrink-0">{rightIcon}</span>}
        </DropdownMenu.Item>
    );

export const DropdownSeparator: React.FC = () => (
    <DropdownMenu.Separator className="h-px bg-border-secondary my-1" />
);

export const DropdownLabel: React.FC<{
    children: React.ReactNode;
    className?: string;
}> = ({ children, className = '' }) => (
    <DropdownMenu.Label
        className={`
      px-3 py-2
      text-xs
      font-medium
      text-text-tertiary
      uppercase
      tracking-wide
      ${className}
    `}
    >
        {children}
    </DropdownMenu.Label>
);

export const DropdownCheckboxItem: React.FC<{
    children: React.ReactNode;
    checked?: boolean;
    onCheckedChange?: (checked: boolean) => void;
    disabled?: boolean;
    className?: string;
}> = ({
    children,
    checked = false,
    onCheckedChange,
    disabled = false,
    className = '',
}) => (
        <DropdownMenu.CheckboxItem
            checked={checked}
            onCheckedChange={onCheckedChange}
            disabled={disabled}
            className={`
      flex items-center gap-3
      px-3 py-2
      rounded-lg
      text-sm
      cursor-pointer
      outline-none
      transition-apple
      text-text-primary
      hover:bg-surface-secondary
      ${disabled ? 'opacity-40 cursor-not-allowed' : ''}
      ${className}
    `}
        >
            <DropdownMenu.ItemIndicator className="w-4 h-4 flex items-center justify-center">
                <svg
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M2 7L5.5 10.5L12 3.5"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            </DropdownMenu.ItemIndicator>
            <span className="flex-1">{children}</span>
        </DropdownMenu.CheckboxItem>
    );

export const DropdownRadioGroup: React.FC<{
    value: string;
    onValueChange: (value: string) => void;
    children: React.ReactNode;
}> = ({ value, onValueChange, children }) => (
    <DropdownMenu.RadioGroup value={value} onValueChange={onValueChange}>
        {children}
    </DropdownMenu.RadioGroup>
);

export const DropdownRadioItem: React.FC<{
    value: string;
    children: React.ReactNode;
    disabled?: boolean;
    className?: string;
}> = ({ value, children, disabled = false, className = '' }) => (
    <DropdownMenu.RadioItem
        value={value}
        disabled={disabled}
        className={`
      flex items-center gap-3
      px-3 py-2
      rounded-lg
      text-sm
      cursor-pointer
      outline-none
      transition-apple
      text-text-primary
      hover:bg-surface-secondary
      ${disabled ? 'opacity-40 cursor-not-allowed' : ''}
      ${className}
    `}
    >
        <DropdownMenu.ItemIndicator className="w-4 h-4 flex items-center justify-center">
            <div className="w-2 h-2 rounded-full bg-accent-blue" />
        </DropdownMenu.ItemIndicator>
        <span className="flex-1">{children}</span>
    </DropdownMenu.RadioItem>
);

/* ========================================
   USAGE EXAMPLES
   ======================================== */

/*
<Dropdown
  trigger={
    <Button variant="secondary">
      Options
    </Button>
  }
>
  <DropdownLabel>Actions</DropdownLabel>
  
  <DropdownItem leftIcon={<EditIcon />}>
    Edit
  </DropdownItem>
  
  <DropdownItem leftIcon={<CopyIcon />}>
    Duplicate
  </DropdownItem>
  
  <DropdownSeparator />
  
  <DropdownItem destructive leftIcon={<TrashIcon />}>
    Delete
  </DropdownItem>
</Dropdown>

// With checkbox items
<Dropdown trigger={<Button>View</Button>}>
  <DropdownCheckboxItem checked={showPanel} onCheckedChange={setShowPanel}>
    Show Panel
  </DropdownCheckboxItem>
</Dropdown>

// With radio group
<Dropdown trigger={<Button>Sort</Button>}>
  <DropdownRadioGroup value={sortBy} onValueChange={setSortBy}>
    <DropdownRadioItem value="name">Name</DropdownRadioItem>
    <DropdownRadioItem value="date">Date</DropdownRadioItem>
  </DropdownRadioGroup>
</Dropdown>
*/
