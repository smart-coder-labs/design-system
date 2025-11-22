import React from 'react';
import * as TabsPrimitive from '@radix-ui/react-tabs';
import { motion } from 'framer-motion';

/* ========================================
   TYPES
   ======================================== */

export interface TabsProps {
    defaultValue?: string;
    value?: string;
    onValueChange?: (value: string) => void;
    children: React.ReactNode;
    className?: string;
}

export interface TabsListProps {
    children: React.ReactNode;
    className?: string;
    variant?: 'default' | 'segmented';
}

export interface TabsTriggerProps {
    value: string;
    children: React.ReactNode;
    disabled?: boolean;
    className?: string;
}

export interface TabsContentProps {
    value: string;
    children: React.ReactNode;
    className?: string;
}

/* ========================================
   COMPONENTS
   ======================================== */

export const Tabs: React.FC<TabsProps> = ({
    defaultValue,
    value,
    onValueChange,
    children,
    className = '',
}) => (
    <TabsPrimitive.Root
        defaultValue={defaultValue}
        value={value}
        onValueChange={onValueChange}
        className={className}
    >
        {children}
    </TabsPrimitive.Root>
);

export const TabsList: React.FC<TabsListProps> = ({
    children,
    className = '',
    variant = 'default',
}) => {
    const variantStyles = {
        default: `
      inline-flex items-center gap-1
      border-b border-border-primary
    `,
        segmented: `
      inline-flex items-center gap-1
      p-1
      bg-surface-secondary
      rounded-xl
    `,
    };

    return (
        <TabsPrimitive.List className={`${variantStyles[variant]} ${className}`}>
            {children}
        </TabsPrimitive.List>
    );
};

export const TabsTrigger: React.FC<TabsTriggerProps> = ({
    value,
    children,
    disabled = false,
    className = '',
}) => {
    const [isActive, setIsActive] = React.useState(false);

    return (
        <TabsPrimitive.Trigger
            value={value}
            disabled={disabled}
            className={`
        relative
        px-4 py-2
        text-sm font-medium
        transition-apple
        outline-none
        disabled:opacity-40
        disabled:cursor-not-allowed
        ${className}
      `}
            data-state={isActive ? 'active' : 'inactive'}
            onFocus={() => setIsActive(true)}
            onBlur={() => setIsActive(false)}
        >
            {({ selected }) => (
                <>
                    <span
                        className={`
              relative z-10
              transition-apple
              ${selected
                                ? 'text-text-primary'
                                : 'text-text-secondary hover:text-text-primary'
                            }
            `}
                    >
                        {children}
                    </span>

                    {/* Indicador animado para variant default */}
                    {selected && (
                        <motion.div
                            layoutId="tab-indicator"
                            className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent-blue rounded-full"
                            initial={false}
                            transition={{
                                type: 'spring',
                                stiffness: 400,
                                damping: 30,
                                mass: 0.6,
                            }}
                        />
                    )}

                    {/* Background animado para variant segmented */}
                    {selected && (
                        <motion.div
                            layoutId="tab-background"
                            className="absolute inset-0 bg-surface-primary rounded-lg shadow-sm"
                            initial={false}
                            transition={{
                                type: 'spring',
                                stiffness: 400,
                                damping: 30,
                                mass: 0.6,
                            }}
                        />
                    )}
                </>
            )}
        </TabsPrimitive.Trigger>
    );
};

export const TabsContent: React.FC<TabsContentProps> = ({
    value,
    children,
    className = '',
}) => (
    <TabsPrimitive.Content
        value={value}
        className={`
      outline-none
      focus-visible:ring-2
      focus-visible:ring-accent-blue
      focus-visible:ring-offset-2
      rounded-xl
      ${className}
    `}
    >
        <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
                duration: 0.22,
                ease: [0.16, 1, 0.3, 1],
            }}
        >
            {children}
        </motion.div>
    </TabsPrimitive.Content>
);

/* ========================================
   USAGE EXAMPLES
   ======================================== */

/*
// Default tabs (underline style)
<Tabs defaultValue="tab1">
  <TabsList>
    <TabsTrigger value="tab1">Tab 1</TabsTrigger>
    <TabsTrigger value="tab2">Tab 2</TabsTrigger>
    <TabsTrigger value="tab3">Tab 3</TabsTrigger>
  </TabsList>
  
  <TabsContent value="tab1">
    <p>Content for tab 1</p>
  </TabsContent>
  
  <TabsContent value="tab2">
    <p>Content for tab 2</p>
  </TabsContent>
  
  <TabsContent value="tab3">
    <p>Content for tab 3</p>
  </TabsContent>
</Tabs>

// Segmented control style (iOS/macOS)
<Tabs defaultValue="tab1">
  <TabsList variant="segmented">
    <TabsTrigger value="tab1">Overview</TabsTrigger>
    <TabsTrigger value="tab2">Details</TabsTrigger>
    <TabsTrigger value="tab3">Settings</TabsTrigger>
  </TabsList>
  
  <TabsContent value="tab1">
    <p>Overview content</p>
  </TabsContent>
  
  <TabsContent value="tab2">
    <p>Details content</p>
  </TabsContent>
  
  <TabsContent value="tab3">
    <p>Settings content</p>
  </TabsContent>
</Tabs>

// Controlled tabs
const [activeTab, setActiveTab] = useState('tab1');

<Tabs value={activeTab} onValueChange={setActiveTab}>
  <TabsList>
    <TabsTrigger value="tab1">Tab 1</TabsTrigger>
    <TabsTrigger value="tab2">Tab 2</TabsTrigger>
  </TabsList>
  
  <TabsContent value="tab1">Content 1</TabsContent>
  <TabsContent value="tab2">Content 2</TabsContent>
</Tabs>
*/
