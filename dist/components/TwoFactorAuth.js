"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React, { useState } from 'react';
import { cn } from '../lib/utils';
import { OTPInput } from './OTPInput';
import { Button } from './Button';
import { AlertCircle, Shield, CheckCircle2 } from 'lucide-react';
/* ========================================
   COMPONENT
   ======================================== */
export const TwoFactorAuth = React.forwardRef(({ onVerify, onResend, method = 'email', recipient, isLoading = false, error, className, ...props }, ref) => {
    const [code, setCode] = useState('');
    const [isVerified, setIsVerified] = useState(false);
    const [formError, setFormError] = useState('');
    const handleComplete = async (value) => {
        setFormError('');
        try {
            await onVerify?.(value);
            setIsVerified(true);
        }
        catch (err) {
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
        return (_jsxs("div", { ref: ref, className: cn("w-full max-w-md space-y-6 text-center", className), ...props, children: [_jsx("div", { className: "flex justify-center", children: _jsx("div", { className: "w-16 h-16 rounded-full bg-status-success/10 flex items-center justify-center", children: _jsx(CheckCircle2, { className: "w-8 h-8 text-status-success" }) }) }), _jsxs("div", { children: [_jsx("h3", { className: "text-xl font-semibold text-text-primary mb-2", children: "Verification Successful" }), _jsx("p", { className: "text-sm text-text-secondary", children: "Your account has been verified successfully." })] })] }));
    }
    return (_jsxs("div", { ref: ref, className: cn("w-full max-w-md space-y-6", className), ...props, children: [_jsxs("div", { className: "text-center space-y-2", children: [_jsx("div", { className: "flex justify-center mb-4", children: _jsx("div", { className: "w-16 h-16 rounded-full bg-accent-blue/10 flex items-center justify-center", children: _jsx(Shield, { className: "w-8 h-8 text-accent-blue" }) }) }), _jsx("h2", { className: "text-2xl font-bold text-text-primary", children: "Two-Factor Authentication" }), _jsxs("p", { className: "text-sm text-text-secondary", children: ["Enter the verification code sent to your ", methodLabels[method]] }), recipient && (_jsx("p", { className: "text-xs text-text-tertiary font-medium", children: maskedRecipient }))] }), displayError && (_jsxs("div", { className: "flex items-center gap-2 p-3 bg-status-error/10 border border-status-error/20 rounded-xl text-status-error text-sm", children: [_jsx(AlertCircle, { className: "w-4 h-4 flex-shrink-0" }), _jsx("span", { children: displayError })] })), _jsx("div", { className: "flex justify-center", children: _jsx(OTPInput, { length: 6, value: code, onChange: setCode, onComplete: handleComplete, disabled: isLoading, error: !!displayError, autoFocus: true }) }), onResend && (_jsxs("div", { className: "text-center", children: [_jsx("p", { className: "text-sm text-text-secondary mb-2", children: "Didn't receive the code?" }), _jsx(Button, { variant: "ghost", size: "sm", onClick: handleResend, disabled: isLoading, children: "Resend Code" })] }))] }));
});
TwoFactorAuth.displayName = 'TwoFactorAuth';
//# sourceMappingURL=TwoFactorAuth.js.map