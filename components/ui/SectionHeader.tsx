import React from 'react';
import { cn } from '../../lib/utils';;

export interface SectionHeaderProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'title'> {
    /**
     * The main title of the section.
     */
    title: React.ReactNode;
    /**
     * Optional description or subtitle.
     */
    description?: React.ReactNode;
    /**
     * Optional actions to display on the right side (e.g., Buttons).
     */
    actions?: React.ReactNode;
    /**
     * Size of the header, affecting typography.
     * @default "md"
     */
    size?: 'sm' | 'md' | 'lg';
    /**
     * Whether to show a divider line at the bottom.
     * @default false
     */
    divider?: boolean;
}

export const SectionHeader = React.forwardRef<HTMLDivElement, SectionHeaderProps>(
    ({ className, title, description, actions, size = 'md', divider = false, ...props }, ref) => {

        const titleSizes = {
            sm: 'text-lg',
            md: 'text-2xl',
            lg: 'text-3xl',
        };

        const descSizes = {
            sm: 'text-sm',
            md: 'text-base',
            lg: 'text-lg',
        };

        return (
            <div
                ref={ref}
                className={cn(
                    'flex flex-col gap-4 w-full',
                    divider && 'border-b border-border-primary pb-4 mb-4',
                    className
                )}
                {...props}
            >
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                    <div className="space-y-1 flex-1">
                        <h2 className={cn(
                            'font-bold text-text-primary tracking-tight',
                            titleSizes[size]
                        )}>
                            {title}
                        </h2>
                        {description && (
                            <p className={cn(
                                'text-text-secondary leading-relaxed',
                                descSizes[size]
                            )}>
                                {description}
                            </p>
                        )}
                    </div>

                    {actions && (
                        <div className="flex items-center gap-2 flex-shrink-0 mt-1 sm:mt-0">
                            {actions}
                        </div>
                    )}
                </div>
            </div>
        );
    }
);

SectionHeader.displayName = 'SectionHeader';
