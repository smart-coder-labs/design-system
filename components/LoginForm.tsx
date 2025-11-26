"use client";

import React, { useState } from 'react';
import { cn } from '../lib/utils';
import { Input } from './Input';
import { Button } from './Button';
import { PasswordInput } from './PasswordInput';
import { Checkbox } from './Checkbox';
import { Mail, Lock, AlertCircle } from 'lucide-react';

/* ========================================
   TYPES
   ======================================== */

export interface LoginFormProps extends React.HTMLAttributes<HTMLFormElement> {
    onSubmit?: (data: { email: string; password: string; rememberMe: boolean }) => void | Promise<void>;
    onForgotPassword?: () => void;
    isLoading?: boolean;
    error?: string;
    className?: string;
}

/* ========================================
   COMPONENT
   ======================================== */

export const LoginForm = React.forwardRef<HTMLFormElement, LoginFormProps>(
    (
        {
            onSubmit,
            onForgotPassword,
            isLoading = false,
            error,
            className,
            ...props
        },
        ref
    ) => {
        const [email, setEmail] = useState('');
        const [password, setPassword] = useState('');
        const [rememberMe, setRememberMe] = useState(false);
        const [formError, setFormError] = useState('');

        const handleSubmit = async (e: React.FormEvent) => {
            e.preventDefault();
            setFormError('');

            if (!email || !password) {
                setFormError('Please fill in all fields');
                return;
            }

            try {
                await onSubmit?.({ email, password, rememberMe });
            } catch (err) {
                setFormError(err instanceof Error ? err.message : 'An error occurred');
            }
        };

        const displayError = error || formError;

        return (
            <form
                ref={ref}
                onSubmit={handleSubmit}
                className={cn("w-full max-w-xl space-y-10", className)}
                {...props}
            >
                {/* Header */}
                <div className="text-center space-y-4">
                    <h2 className="text-4xl font-bold text-text-primary">Welcome back</h2>
                    <p className="text-lg text-text-secondary">
                        Sign in to your account to continue
                    </p>
                </div>

                {/* Error Message */}
                {displayError && (
                    <div className="flex items-center gap-2 p-3 bg-status-error/10 border border-status-error/20 rounded-xl text-status-error text-sm">
                        <AlertCircle className="w-4 h-4 flex-shrink-0" />
                        <span>{displayError}</span>
                    </div>
                )}

                {/* Form Fields */}
                <div className="space-y-6">
                    <Input
                        type="email"
                        label="Email"
                        placeholder="you@example.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        leftIcon={<Mail className="w-4 h-4" />}
                        required
                        disabled={isLoading}
                    />

                    <PasswordInput
                        label="Password"
                        placeholder="Enter your password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        leftIcon={<Lock className="w-4 h-4" />}
                        required
                        disabled={isLoading}
                    />
                </div>

                {/* Remember Me & Forgot Password */}
                <div className="flex items-center justify-between">
                    <label className="flex items-center gap-2 cursor-pointer">
                        <Checkbox
                            id="remember"
                            checked={rememberMe}
                            onCheckedChange={(checked) => setRememberMe(checked === true)}
                        />
                        <span className="text-sm text-text-secondary select-none">Remember me</span>
                    </label>
                    {onForgotPassword && (
                        <button
                            type="button"
                            onClick={onForgotPassword}
                            className="text-sm text-accent-blue hover:text-accent-blue-hover transition-colors"
                        >
                            Forgot password?
                        </button>
                    )}
                </div>

                {/* Submit Button */}
                <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    fullWidth
                    loading={isLoading}
                    disabled={isLoading}
                >
                    Sign In
                </Button>
            </form>
        );
    }
);

LoginForm.displayName = 'LoginForm';

