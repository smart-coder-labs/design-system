"use client";

import React, { useState } from 'react';
import { cn } from '../../lib/utils';;
import { OTPInput } from './OTPInput';
import { Button } from './Button';
import { AlertCircle, Shield, CheckCircle2 } from 'lucide-react';

/* ========================================
   TYPES
   ======================================== */

export interface TwoFactorAuthProps extends React.HTMLAttributes<HTMLDivElement> {
    onVerify?: (code: string) => void | Promise<void>;
    onResend?: () => void;
    method?: 'sms' | 'email' | 'app';
    recipient?: string;
    isLoading?: boolean;
    error?: string;
    className?: string;
}

/* ========================================
   COMPONENT
   ======================================== */

export const TwoFactorAuth = React.forwardRef<HTMLDivElement, TwoFactorAuthProps>(
    (
        {
            onVerify,
            onResend,
            method = 'email',
            recipient,
            isLoading = false,
            error,
            className,
            ...props
        },
        ref
    ) => {
        const [code, setCode] = useState('');
        const [isVerified, setIsVerified] = useState(false);
        const [formError, setFormError] = useState('');

        const handleComplete = async (value: string) => {
            setFormError('');
            try {
                await onVerify?.(value);
                setIsVerified(true);
            } catch (err) {
                setFormError(err instanceof Error ? err.message : 'Invalid code');
                setCode('');
            }
        };

        const handleResend = () => {
            setCode('');
            setFormError('');
            onResend?.();
        };

        const displayError = error || formError;

        const methodLabels = {
            sms: 'SMS',
            email: 'Email',
            app: 'Authenticator App',
        };

        const maskedRecipient = recipient
            ? recipient.replace(/(.{2})(.*)(.{2})/, (_, start, middle, end) => {
                  return `${start}${'*'.repeat(Math.min(middle.length, 6))}${end}`;
              })
            : '';

        if (isVerified) {
            return (
                <div
                    ref={ref}
                    className={cn("w-full max-w-md space-y-6 text-center", className)}
                    {...props}
                >
                    <div className="flex justify-center">
                        <div className="w-16 h-16 rounded-full bg-status-success/10 flex items-center justify-center">
                            <CheckCircle2 className="w-8 h-8 text-status-success" />
                        </div>
                    </div>
                    <div>
                        <h3 className="text-xl font-semibold text-text-primary mb-2">
                            Verification Successful
                        </h3>
                        <p className="text-sm text-text-secondary">
                            Your account has been verified successfully.
                        </p>
                    </div>
                </div>
            );
        }

        return (
            <div
                ref={ref}
                className={cn("w-full max-w-md space-y-6", className)}
                {...props}
            >
                {/* Header */}
                <div className="text-center space-y-2">
                    <div className="flex justify-center mb-4">
                        <div className="w-16 h-16 rounded-full bg-accent-blue/10 flex items-center justify-center">
                            <Shield className="w-8 h-8 text-accent-blue" />
                        </div>
                    </div>
                    <h2 className="text-2xl font-bold text-text-primary">
                        Two-Factor Authentication
                    </h2>
                    <p className="text-sm text-text-secondary">
                        Enter the verification code sent to your {methodLabels[method]}
                    </p>
                    {recipient && (
                        <p className="text-xs text-text-tertiary font-medium">
                            {maskedRecipient}
                        </p>
                    )}
                </div>

                {/* Error Message */}
                {displayError && (
                    <div className="flex items-center gap-2 p-3 bg-status-error/10 border border-status-error/20 rounded-xl text-status-error text-sm">
                        <AlertCircle className="w-4 h-4 flex-shrink-0" />
                        <span>{displayError}</span>
                    </div>
                )}

                {/* OTP Input */}
                <div className="flex justify-center">
                    <OTPInput
                        length={6}
                        value={code}
                        onChange={setCode}
                        onComplete={handleComplete}
                        disabled={isLoading}
                        error={!!displayError}
                        autoFocus
                    />
                </div>

                {/* Resend */}
                {onResend && (
                    <div className="text-center">
                        <p className="text-sm text-text-secondary mb-2">
                            Didn't receive the code?
                        </p>
                        <Button
                            variant="ghost"
                            size="sm"
                            onClick={handleResend}
                            disabled={isLoading}
                        >
                            Resend Code
                        </Button>
                    </div>
                )}
            </div>
        );
    }
);

TwoFactorAuth.displayName = 'TwoFactorAuth';

