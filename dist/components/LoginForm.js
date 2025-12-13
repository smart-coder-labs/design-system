"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React, { useState } from 'react';
import { cn } from '../lib/utils';
import { Input } from './Input';
import { Button } from './Button';
import { PasswordInput } from './PasswordInput';
import { Checkbox } from './Checkbox';
import { Mail, AlertCircle } from 'lucide-react';
/* ========================================
   COMPONENT
   ======================================== */
export const LoginForm = React.forwardRef(({ onSubmit, onForgotPassword, isLoading = false, error, className, ...props }, ref) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rememberMe, setRememberMe] = useState(false);
    const [formError, setFormError] = useState('');
    const handleSubmit = async (e) => {
        e.preventDefault();
        setFormError('');
        if (!email || !password) {
            setFormError('Please fill in all fields');
            return;
        }
        try {
            await onSubmit?.({ email, password, rememberMe });
        }
        catch (err) {
            setFormError(err instanceof Error ? err.message : 'An error occurred');
        }
    };
    const displayError = error || formError;
    return (_jsxs("form", { ref: ref, onSubmit: handleSubmit, className: cn("w-full max-w-xl space-y-10", className), ...props, children: [_jsxs("div", { className: "text-center space-y-4", children: [_jsx("h2", { className: "text-4xl font-bold text-text-primary", children: "Welcome back" }), _jsx("p", { className: "text-lg text-text-secondary", children: "Sign in to your account to continue" })] }), displayError && (_jsxs("div", { className: "flex items-center gap-2 p-3 bg-status-error/10 border border-status-error/20 rounded-xl text-status-error text-sm", children: [_jsx(AlertCircle, { className: "w-4 h-4 flex-shrink-0" }), _jsx("span", { children: displayError })] })), _jsxs("div", { className: "space-y-6", children: [_jsx(Input, { type: "email", label: "Email", placeholder: "you@example.com", value: email, onChange: (e) => setEmail(e.target.value), leftIcon: _jsx(Mail, { className: "w-4 h-4" }), required: true, disabled: isLoading }), _jsx(PasswordInput, { label: "Password", placeholder: "Enter your password", value: password, onChange: (value) => setPassword(value), required: true, disabled: isLoading })] }), _jsxs("div", { className: "flex items-center justify-between", children: [_jsxs("label", { className: "flex items-center gap-2 cursor-pointer", children: [_jsx(Checkbox, { id: "remember", checked: rememberMe, onCheckedChange: (checked) => setRememberMe(checked === true) }), _jsx("span", { className: "text-sm text-text-secondary select-none", children: "Remember me" })] }), onForgotPassword && (_jsx("button", { type: "button", onClick: onForgotPassword, className: "text-sm text-accent-blue hover:text-accent-blue-hover transition-colors", children: "Forgot password?" }))] }), _jsx(Button, { type: "submit", variant: "primary", size: "lg", fullWidth: true, loading: isLoading, disabled: isLoading, children: "Sign In" })] }));
});
LoginForm.displayName = 'LoginForm';
//# sourceMappingURL=LoginForm.js.map