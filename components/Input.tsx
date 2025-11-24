import React, { forwardRef } from 'react';
import { motion } from 'framer-motion';

/* ========================================
   TYPES
   ======================================== */

export interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
    label?: string;
    error?: string;
    helperText?: string;
    leftIcon?: React.ReactNode;
    rightIcon?: React.ReactNode;
    inputSize?: 'sm' | 'md' | 'lg';
}

/* ========================================
   STYLES
   ======================================== */

const baseInputStyles = `
  w-full
  bg-surface-primary
  border border-border-primary
  text-text-primary
  placeholder:text-text-tertiary
  transition-apple
  focus:outline-none
  focus:border-accent-blue
  focus:ring-2
  focus:ring-accent-blue/20
  disabled:opacity-40
  disabled:cursor-not-allowed
`;

const sizeStyles = {
    sm: 'h-8 px-3 text-sm rounded-lg',
    md: 'h-10 px-4 text-base rounded-xl',
    lg: 'h-12 px-5 text-lg rounded-xl',
};

const withIconPadding = {
    left: {
        sm: 'pl-9',
        md: 'pl-10',
        lg: 'pl-12',
    },
    right: {
        sm: 'pr-9',
        md: 'pr-10',
        lg: 'pr-12',
    },
};

/* ========================================
   COMPONENT
   ======================================== */

export const Input = forwardRef<HTMLInputElement, InputProps>(
    (
        {
            label,
            error,
            helperText,
            leftIcon,
            rightIcon,
            inputSize = 'md',
            className = '',
            disabled,
            ...props
        },
        ref
    ) => {
        const hasError = !!error;

        const inputClassName = `
      ${baseInputStyles}
      ${sizeStyles[inputSize]}
      ${leftIcon ? withIconPadding.left[inputSize] : ''}
      ${rightIcon ? withIconPadding.right[inputSize] : ''}
      ${hasError ? 'border-status-error focus:border-status-error focus:ring-status-error/20' : ''}
      ${className}
    `.trim().replace(/\s+/g, ' ');

        const iconSizeMap = {
            sm: 'w-4 h-4',
            md: 'w-5 h-5',
            lg: 'w-6 h-6',
        };

        const iconPositionMap = {
            left: {
                sm: 'left-3',
                md: 'left-3',
                lg: 'left-4',
            },
            right: {
                sm: 'right-3',
                md: 'right-3',
                lg: 'right-4',
            },
        };

        return (
            <div className="w-full">
                {label && (
                    <label className="block text-sm font-medium text-text-primary mb-2">
                        {label}
                    </label>
                )}

                <div className="relative">
                    {leftIcon && (
                        <div
                            className={`
                absolute top-1/2 -translate-y-1/2
                ${iconPositionMap.left[inputSize]}
                ${iconSizeMap[inputSize]}
                text-text-tertiary
                pointer-events-none
                flex items-center justify-center
              `}
                        >
                            {leftIcon}
                        </div>
                    )}

                    <motion.input
                        ref={ref}
                        className={inputClassName}
                        disabled={disabled}
                        whileFocus={{
                            scale: 1.005,
                        }}
                        transition={{
                            type: 'spring',
                            stiffness: 300,
                            damping: 30,
                        }}
                        {...props}
                    />

                    {rightIcon && (
                        <div
                            className={`
                absolute top-1/2 -translate-y-1/2
                ${iconPositionMap.right[inputSize]}
                ${iconSizeMap[inputSize]}
                text-text-tertiary
                pointer-events-none
                flex items-center justify-center
              `}
                        >
                            {rightIcon}
                        </div>
                    )}
                </div>

                {(error || helperText) && (
                    <motion.p
                        initial={{ opacity: 0, y: -4 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.16 }}
                        className={`
              mt-2 text-sm
              ${hasError ? 'text-status-error' : 'text-text-secondary'}
            `}
                    >
                        {error || helperText}
                    </motion.p>
                )}
            </div>
        );
    }
);

Input.displayName = 'Input';

/* ========================================
   TEXTAREA COMPONENT
   ======================================== */

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
    label?: string;
    error?: string;
    helperText?: string;
    resize?: 'none' | 'vertical' | 'horizontal' | 'both';
}

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
    (
        {
            label,
            error,
            helperText,
            resize = 'vertical',
            className = '',
            disabled,
            ...props
        },
        ref
    ) => {
        const hasError = !!error;

        const textareaClassName = `
      ${baseInputStyles}
      px-4 py-3
      rounded-xl
      min-h-[100px]
      resize-${resize}
      ${hasError ? 'border-status-error focus:border-status-error focus:ring-status-error/20' : ''}
      ${className}
    `.trim().replace(/\s+/g, ' ');

        return (
            <div className="w-full">
                {label && (
                    <label className="block text-sm font-medium text-text-primary mb-2">
                        {label}
                    </label>
                )}

                <motion.textarea
                    ref={ref}
                    className={textareaClassName}
                    disabled={disabled}
                    whileFocus={{
                        scale: 1.005,
                    }}
                    transition={{
                        type: 'spring',
                        stiffness: 300,
                        damping: 30,
                    }}
                    {...props}
                />

                {(error || helperText) && (
                    <motion.p
                        initial={{ opacity: 0, y: -4 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.16 }}
                        className={`
              mt-2 text-sm
              ${hasError ? 'text-status-error' : 'text-text-secondary'}
            `}
                    >
                        {error || helperText}
                    </motion.p>
                )}
            </div>
        );
    }
);

Textarea.displayName = 'Textarea';

/* ========================================
   USAGE EXAMPLES
   ======================================== */

/*
// Basic input
<Input
  label="Email"
  placeholder="Enter your email"
  type="email"
/>

// Input with icon
<Input
  label="Search"
  placeholder="Search..."
  leftIcon={<SearchIcon />}
/>

// Input with error
<Input
  label="Password"
  type="password"
  error="Password is required"
/>

// Input with helper text
<Input
  label="Username"
  helperText="Choose a unique username"
/>

// Textarea
<Textarea
  label="Description"
  placeholder="Enter description..."
  rows={4}
/>
*/
