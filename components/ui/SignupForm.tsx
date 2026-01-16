"use client";

import React, { useState } from 'react';
import { cn } from '../../lib/utils';;
import { Input } from './Input';
import { Button } from './Button';
import { PasswordInput } from './PasswordInput';
import { Checkbox } from './Checkbox';
import { Mail, Lock, User, AlertCircle } from 'lucide-react';

/* ========================================
   TYPES
   ======================================== */

export interface SignupFormProps extends Omit<React.HTMLAttributes<HTMLFormElement>, 'onSubmit'> {
    onSubmit?: (data: { name: string; email: string; password: string; confirmPassword: string; acceptTerms: boolean }) => void | Promise<void>;
    isLoading?: boolean;
    error?: string;
    className?: string;
}

/* ========================================
   COMPONENT
   ======================================== */

export const SignupForm = React.forwardRef<HTMLFormElement, SignupFormProps>(
    (
        {
            onSubmit,
            isLoading = false,
            error,
            className,
            ...props
        },
        ref
    ) => {
        const [name, setName] = useState('');
        const [email, setEmail] = useState('');
        const [password, setPassword] = useState('');
        const [confirmPassword, setConfirmPassword] = useState('');
        const [acceptTerms, setAcceptTerms] = useState(false);
        const [formError, setFormError] = useState('');

        const handleSubmit = async (e: React.FormEvent) => {
            e.preventDefault();
            setFormError('');

            if (!name || !email || !password || !confirmPassword) {
                setFormError('Please fill in all fields');
                return;
            }

            if (password !== confirmPassword) {
                setFormError('Passwords do not match');
                return;
            }

            if (password.length < 8) {
                setFormError('Password must be at least 8 characters');
                return;
            }

            if (!acceptTerms) {
                setFormError('Please accept the terms and conditions');
                return;
            }

            try {
                await onSubmit?.({ name, email, password, confirmPassword, acceptTerms });
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
                    <h2 className="text-4xl font-bold text-text-primary">Create account</h2>
                    <p className="text-lg text-text-secondary">
                        Sign up to get started
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
                        type="text"
                        label="Full Name"
                        placeholder="John Doe"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        leftIcon={<User className="w-4 h-4" />}
                        required
                        disabled={isLoading}
                    />

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
                        placeholder="Create a password"
                        value={password}
                        onChange={(value) => setPassword(value)}
                        required
                        disabled={isLoading}
                    />

                    <PasswordInput
                        label="Confirm Password"
                        placeholder="Confirm your password"
                        value={confirmPassword}
                        onChange={(value) => setConfirmPassword(value)}
                        required
                        disabled={isLoading}
                    />
                </div>

                {/* Terms & Conditions */}
                <label className="flex items-start gap-2 cursor-pointer">
                    <Checkbox
                        id="terms"
                        checked={acceptTerms}
                        onCheckedChange={(checked) => setAcceptTerms(checked === true)}
                    />
                    <span className="text-sm text-text-secondary select-none">
                        I agree to the{' '}
                        <a href="#" className="text-accent-blue hover:underline" onClick={(e) => e.preventDefault()}>
                            Terms and Conditions
                        </a>{' '}
                        and{' '}
                        <a href="#" className="text-accent-blue hover:underline" onClick={(e) => e.preventDefault()}>
                            Privacy Policy
                        </a>
                    </span>
                </label>

                {/* Submit Button */}
                <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    fullWidth
                    loading={isLoading}
                    disabled={isLoading}
                >
                    Create Account
                </Button>
            </form>
        );
    }
);

SignupForm.displayName = 'SignupForm';

