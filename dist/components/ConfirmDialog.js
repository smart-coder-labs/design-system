import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Modal, ModalFooter, ModalHeader, ModalTitle } from './Modal';
import { Button } from './Button';
/* ========================================
   ICONS
   ======================================== */
const Icons = {
    default: (_jsx("svg", { className: "w-6 h-6 text-accent-blue", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", children: _jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" }) })),
    destructive: (_jsx("svg", { className: "w-6 h-6 text-status-error", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", children: _jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" }) })),
    warning: (_jsx("svg", { className: "w-6 h-6 text-status-warning", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", children: _jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" }) })),
    info: (_jsx("svg", { className: "w-6 h-6 text-accent-blue", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", children: _jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" }) })),
};
const VariantStyles = {
    default: {
        iconBg: 'bg-accent-blue/10',
        confirmBtn: 'primary',
    },
    destructive: {
        iconBg: 'bg-status-error/10',
        confirmBtn: 'destructive',
    },
    warning: {
        iconBg: 'bg-status-warning/10',
        confirmBtn: 'warning', // Assuming Button has a warning variant or we use primary with custom class
    },
    info: {
        iconBg: 'bg-accent-blue/10',
        confirmBtn: 'primary',
    },
};
/* ========================================
   COMPONENT
   ======================================== */
export const ConfirmDialog = ({ open, onOpenChange, title, description, confirmLabel = 'Confirm', cancelLabel = 'Cancel', onConfirm, onCancel, variant = 'default', isLoading = false, icon, }) => {
    const handleConfirm = () => {
        onConfirm();
    };
    const handleCancel = () => {
        if (onCancel)
            onCancel();
        onOpenChange(false);
    };
    const styles = VariantStyles[variant];
    const Icon = icon || Icons[variant];
    // Map variant to Button variant
    const getButtonVariant = (v) => {
        switch (v) {
            case 'destructive': return 'destructive';
            case 'warning': return 'primary'; // Could be improved with a specific warning variant
            default: return 'primary';
        }
    };
    return (_jsx(Modal, { open: open, onOpenChange: onOpenChange, size: "sm", children: _jsxs("div", { className: "flex flex-col sm:flex-row gap-4", children: [_jsx("div", { className: `
                    flex-shrink-0 
                    w-12 h-12 
                    rounded-full 
                    flex items-center justify-center 
                    ${styles.iconBg}
                    mx-auto sm:mx-0
                `, children: Icon }), _jsxs("div", { className: "flex-1 text-center sm:text-left", children: [_jsx(ModalHeader, { className: "!mb-2", children: _jsx(ModalTitle, { children: title }) }), description && (_jsx("div", { className: "text-sm text-text-secondary mb-6", children: description })), _jsxs(ModalFooter, { className: "!mt-0 !justify-center sm:!justify-end", children: [_jsx(Button, { variant: "ghost", onClick: handleCancel, disabled: isLoading, children: cancelLabel }), _jsx(Button, { variant: getButtonVariant(variant), onClick: handleConfirm, loading: isLoading, children: confirmLabel })] })] })] }) }));
};
//# sourceMappingURL=ConfirmDialog.js.map