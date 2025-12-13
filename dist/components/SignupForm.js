"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React, { useState } from 'react';
import { cn } from '../lib/utils';
import { Input } from './Input';
import { Button } from './Button';
import { PasswordInput } from './PasswordInput';
import { Checkbox } from './Checkbox';
import { Mail, User, AlertCircle } from 'lucide-react';
/* ========================================
   COMPONENT
   ======================================== */
export const SignupForm = React.forwardRef(({ onSubmit, isLoading = false, error, className, ...props }, ref) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [acceptTerms, setAcceptTerms] = useState(false);
    const [formError, setFormError] = useState('');
    const handleSubmit = async (e) => {
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
        }
        catch (err) {
            setFormError(err instanceof Error ? err.message : 'An error occurred');
        }
    };
    const displayError = error || formError;
    return (_jsxs("form", { ref: ref, onSubmit: handleSubmit, className: cn("w-full max-w-xl space-y-10", className), ...props, children: [_jsxs("div", { className: "text-center space-y-4", children: [_jsx("h2", { className: "text-4xl font-bold text-text-primary", children: "Create account" }), _jsx("p", { className: "text-lg text-text-secondary", children: "Sign up to get started" })] }), displayError && (_jsxs("div", { className: "flex items-center gap-2 p-3 bg-status-error/10 border border-status-error/20 rounded-xl text-status-error text-sm", children: [_jsx(AlertCircle, { className: "w-4 h-4 flex-shrink-0" }), _jsx("span", { children: displayError })] })), _jsxs("div", { className: "space-y-6", children: [_jsx(Input, { type: "text", label: "Full Name", placeholder: "John Doe", value: name, onChange: (e) => setName(e.target.value), leftIcon: _jsx(User, { className: "w-4 h-4" }), required: true, disabled: isLoading }), _jsx(Input, { type: "email", label: "Email", placeholder: "you@example.com", value: email, onChange: (e) => setEmail(e.target.value), leftIcon: _jsx(Mail, { className: "w-4 h-4" }), required: true, disabled: isLoading }), _jsx(PasswordInput, { label: "Password", placeholder: "Create a password", value: password, onChange: (value) => setPassword(value), required: true, disabled: isLoading }), _jsx(PasswordInput, { label: "Confirm Password", placeholder: "Confirm your password", value: confirmPassword, onChange: (value) => setConfirmPassword(value), required: true, disabled: isLoading })] }), _jsxs("label", { className: "flex items-start gap-2 cursor-pointer", children: [_jsx(Checkbox, { id: "terms", checked: acceptTerms, onCheckedChange: (checked) => setAcceptTerms(checked === true) }), _jsxs("span", { className: "text-sm text-text-secondary select-none", children: ["I agree to the", ' ', _jsx("a", { href: "#", className: "text-accent-blue hover:underline", onClick: (e) => e.preventDefault(), children: "Terms and Conditions" }), ' ', "and", ' ', _jsx("a", { href: "#", className: "text-accent-blue hover:underline", onClick: (e) => e.preventDefault(), children: "Privacy Policy" })] })] }), _jsx(Button, { type: "submit", variant: "primary", size: "lg", fullWidth: true, loading: isLoading, disabled: isLoading, children: "Create Account" })] }));
});
SignupForm.displayName = 'SignupForm';
//# sourceMappingURL=SignupForm.js.map