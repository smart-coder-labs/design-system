import React from 'react';
import { cn } from '../../../lib/utils';
import type { DividerProps } from './Divider.types';

export const Divider = React.forwardRef<HTMLDivElement, DividerProps>(
    ({
        className,
        orientation = 'horizontal',
        label,
        labelPosition = 'center',
        variant = 'solid',
        lineClassName,
        ...props
    }, ref) => {

        const borderStyle = variant === 'dashed' ? 'border-dashed' : variant === 'dotted' ? 'border-dotted' : 'border-solid';

        if (orientation === 'vertical') {
            return (
                <div
                    ref={ref}
                    className={cn(
                        'inline-block self-stretch w-0 border-l border-border-primary mx-2',
                        borderStyle,
                        className
                    )}
                    role="separator"
                    aria-orientation="vertical"
                    {...props}
                />
            );
        }

        // Horizontal
        if (label) {
            return (
                <div
                    ref={ref}
                    className={cn(
                        'flex items-center w-full my-4',
                        className
                    )}
                    role="separator"
                    aria-orientation="horizontal"
                    {...props}
                >
                    <div
                        className={cn(
                            'flex-grow border-t border-border-primary',
                            borderStyle,
                            labelPosition === 'left' ? 'flex-grow-0 w-4 mr-4' : '',
                            labelPosition === 'right' ? 'flex-grow' : '',
                            lineClassName
                        )}
                    />

                    <span className={cn(
                        'text-sm text-text-tertiary font-medium px-4',
                        labelPosition === 'left' ? 'pl-0' : '',
                        labelPosition === 'right' ? 'pr-0' : ''
                    )}>
                        {label}
                    </span>

                    <div
                        className={cn(
                            'flex-grow border-t border-border-primary',
                            borderStyle,
                            labelPosition === 'right' ? 'flex-grow-0 w-4 ml-4' : '',
                            labelPosition === 'left' ? 'flex-grow' : '',
                            lineClassName
                        )}
                    />
                </div>
            );
        }

        return (
            <div
                ref={ref}
                className={cn(
                    'w-full border-t border-border-primary my-4',
                    borderStyle,
                    className
                )}
                role="separator"
                aria-orientation="horizontal"
                {...props}
            />
        );
    }
);

Divider.displayName = 'Divider';