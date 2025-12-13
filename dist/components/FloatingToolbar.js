import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useState, useEffect } from 'react';
import { X, ChevronUp } from 'lucide-react';
export const FloatingToolbar = ({ actions, position = 'bottom', variant = 'default', showLabels = false, dismissible = false, onDismiss, className = '', offset = 24, defaultActiveId, }) => {
    const [isExpanded, setIsExpanded] = useState(true);
    const [isAnimating, setIsAnimating] = useState(false);
    const [activeActionId, setActiveActionId] = useState(defaultActiveId);
    useEffect(() => {
        setIsAnimating(true);
        const timer = setTimeout(() => setIsAnimating(false), 300);
        return () => clearTimeout(timer);
    }, []);
    const handleDismiss = () => {
        setIsExpanded(false);
        onDismiss?.();
    };
    const handleExpand = () => {
        setIsExpanded(true);
    };
    const handleActionClick = (action) => {
        setActiveActionId(action.id);
        action.onClick();
    };
    const positionClasses = {
        top: 'top-0 left-1/2 -translate-x-1/2',
        bottom: 'bottom-0 left-1/2 -translate-x-1/2',
        'top-left': 'top-0 left-0',
        'top-right': 'top-0 right-0',
        'bottom-left': 'bottom-0 left-0',
        'bottom-right': 'bottom-0 right-0',
    };
    const variantClasses = {
        default: 'bg-surface-primary border border-border-primary shadow-lg',
        compact: 'bg-surface-primary border border-border-primary shadow-md',
        glass: 'glass border border-border-primary shadow-xl',
    };
    const animationClasses = {
        top: isAnimating ? 'animate-slide-down' : '',
        bottom: isAnimating ? 'animate-slide-up' : '',
        'top-left': isAnimating ? 'animate-scale-in' : '',
        'top-right': isAnimating ? 'animate-scale-in' : '',
        'bottom-left': isAnimating ? 'animate-scale-in' : '',
        'bottom-right': isAnimating ? 'animate-scale-in' : '',
    };
    const getActionVariantClasses = (actionVariant, isActive) => {
        if (isActive) {
            return 'text-accent-blue border-b-2 border-accent-blue';
        }
        switch (actionVariant) {
            case 'primary':
                return 'text-accent-blue hover:bg-accent-blue/10';
            case 'danger':
                return 'text-status-error hover:bg-status-error/10';
            default:
                return 'text-text-primary hover:bg-background-tertiary/50';
        }
    };
    // Collapsed state - show small expand button
    if (!isExpanded && dismissible) {
        return (_jsx("div", { className: `floating-toolbar-collapsed fixed ${positionClasses[position]} z-50 ${className}`, style: {
                margin: `${offset}px`,
            }, children: _jsx("button", { onClick: handleExpand, className: `${variantClasses[variant]} rounded-full p-3 hover:scale-110 transition-all duration-200 animate-scale-in`, "aria-label": "Expand toolbar", children: _jsx(ChevronUp, { className: "w-5 h-5 text-text-primary" }) }) }));
    }
    return (_jsxs("div", { className: `floating-toolbar fixed ${positionClasses[position]} ${animationClasses[position]} z-50 ${className}`, style: {
            margin: `${offset}px`,
        }, children: [_jsxs("div", { className: `toolbar-container ${variantClasses[variant]} rounded-2xl ${variant === 'compact' ? 'p-1.5' : 'p-2'} flex items-center gap-1`, children: [_jsx("div", { className: "flex items-center gap-1", children: actions.map((action) => {
                            const isActive = activeActionId === action.id;
                            return (_jsxs("button", { onClick: () => handleActionClick(action), disabled: action.disabled, className: `toolbar-action relative flex items-center gap-2 ${variant === 'compact' ? 'px-2.5 py-2' : 'px-3 py-2.5'} rounded-xl font-medium text-sm transition-all duration-200 ${getActionVariantClasses(action.variant, isActive)} disabled:opacity-40 disabled:cursor-not-allowed group`, title: action.tooltip || action.label, "aria-label": action.label || action.tooltip, "aria-pressed": isActive, children: [_jsx("span", { className: "flex-shrink-0 w-5 h-5", children: action.icon }), showLabels && action.label && (_jsx("span", { className: "whitespace-nowrap", children: action.label })), action.tooltip && !showLabels && !isActive && (_jsxs("span", { className: "tooltip absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-1.5 bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 text-xs font-medium rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 whitespace-nowrap pointer-events-none shadow-lg", children: [action.tooltip, _jsx("span", { className: "tooltip-arrow absolute top-full left-1/2 -translate-x-1/2 -mt-px border-4 border-transparent border-t-gray-900 dark:border-t-gray-100" })] }))] }, action.id));
                        }) }), dismissible && (_jsxs(_Fragment, { children: [_jsx("div", { className: "w-px h-6 bg-border-primary mx-1" }), _jsx("button", { onClick: handleDismiss, className: `dismiss-button flex items-center justify-center ${variant === 'compact' ? 'w-8 h-8' : 'w-9 h-9'} rounded-xl text-text-secondary hover:text-text-primary hover:bg-background-tertiary/50 transition-all duration-200`, "aria-label": "Collapse toolbar", children: _jsx(X, { className: "w-4 h-4" }) })] }))] }), _jsx("style", { dangerouslySetInnerHTML: {
                    __html: `
        .floating-toolbar {
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }

        .toolbar-container {
          user-select: none;
          -webkit-user-select: none;
        }

        .toolbar-action {
          position: relative;
          overflow: visible;
        }

        .toolbar-action:not([aria-pressed="true"])::before {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: 12px;
          background: currentColor;
          opacity: 0;
          transition: opacity 200ms cubic-bezier(0.16, 1, 0.3, 1);
        }

        .toolbar-action:not([aria-pressed="true"]):hover::before {
          opacity: 0.08;
        }

        .toolbar-action:not([aria-pressed="true"]):active::before {
          opacity: 0.12;
        }

        .toolbar-action:disabled::before {
          opacity: 0;
        }

        .tooltip {
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
          z-index: 100;
        }

        .dark .tooltip {
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.4);
        }

        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(12px) translateX(-50%);
          }
          to {
            opacity: 1;
            transform: translateY(0) translateX(-50%);
          }
        }

        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-12px) translateX(-50%);
          }
          to {
            opacity: 1;
            transform: translateY(0) translateX(-50%);
          }
        }

        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.92);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        .animate-slide-up {
          animation: slideUp 300ms cubic-bezier(0.16, 1, 0.3, 1);
        }

        .animate-slide-down {
          animation: slideDown 300ms cubic-bezier(0.16, 1, 0.3, 1);
        }

        .animate-scale-in {
          animation: scaleIn 300ms cubic-bezier(0.16, 1, 0.3, 1);
        }

        @media (max-width: 640px) {
          .floating-toolbar {
            max-width: calc(100vw - 32px);
          }

          .toolbar-container {
            overflow-x: auto;
            -webkit-overflow-scrolling: touch;
          }

          .toolbar-container::-webkit-scrollbar {
            display: none;
          }
        }
      `,
                } })] }));
};
export default FloatingToolbar;
//# sourceMappingURL=FloatingToolbar.js.map