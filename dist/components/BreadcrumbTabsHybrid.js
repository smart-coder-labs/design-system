import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import React, { useState, useRef, useEffect } from 'react';
import { ChevronRight, Home } from 'lucide-react';
export const BreadcrumbTabsHybrid = ({ breadcrumbs, tabs, activeTab: controlledActiveTab, onTabChange, onBreadcrumbClick, variant = 'default', showHomeIcon = true, className = '', }) => {
    const [internalActiveTab, setInternalActiveTab] = useState(tabs[0]?.id || '');
    const activeTab = controlledActiveTab ?? internalActiveTab;
    const tabRefs = useRef({});
    const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0 });
    const handleTabClick = (tabId) => {
        if (!controlledActiveTab) {
            setInternalActiveTab(tabId);
        }
        onTabChange?.(tabId);
    };
    const handleBreadcrumbClick = (index, href) => {
        if (onBreadcrumbClick) {
            onBreadcrumbClick(index);
        }
        else if (href) {
            window.location.href = href;
        }
    };
    // Update indicator position when active tab changes
    useEffect(() => {
        const activeTabElement = tabRefs.current[activeTab];
        if (activeTabElement) {
            const { offsetLeft, offsetWidth } = activeTabElement;
            setIndicatorStyle({
                left: offsetLeft,
                width: offsetWidth,
            });
        }
    }, [activeTab, tabs]);
    const variantClasses = {
        default: 'bg-background-secondary border-b border-border-primary',
        compact: 'bg-transparent',
        elevated: 'bg-surface-primary shadow-sm border border-border-primary rounded-xl',
    };
    return (_jsxs("div", { className: `breadcrumb-tabs-hybrid ${variantClasses[variant]} ${className}`, children: [_jsx("div", { className: "breadcrumb-section px-6 pt-4 pb-2", children: _jsxs("nav", { "aria-label": "Breadcrumb", className: "flex items-center gap-1.5", children: [showHomeIcon && breadcrumbs.length > 0 && (_jsxs(_Fragment, { children: [_jsx("button", { onClick: () => handleBreadcrumbClick(0, breadcrumbs[0].href), className: "breadcrumb-home-button p-1.5 rounded-lg hover:bg-background-tertiary/50 transition-colors duration-200", "aria-label": "Home", children: _jsx(Home, { className: "w-4 h-4 text-text-secondary" }) }), breadcrumbs.length > 1 && (_jsx(ChevronRight, { className: "w-4 h-4 text-text-quaternary flex-shrink-0" }))] })), breadcrumbs.slice(showHomeIcon ? 1 : 0).map((crumb, index) => {
                            const actualIndex = showHomeIcon ? index + 1 : index;
                            const isLast = actualIndex === breadcrumbs.length - 1;
                            return (_jsxs(React.Fragment, { children: [_jsxs("button", { onClick: () => handleBreadcrumbClick(actualIndex, crumb.href), className: `breadcrumb-item flex items-center gap-2 px-2.5 py-1.5 rounded-lg transition-all duration-200 ${isLast
                                            ? 'text-text-primary font-medium cursor-default'
                                            : 'text-text-secondary hover:text-text-primary hover:bg-background-tertiary/50'}`, "aria-current": isLast ? 'page' : undefined, disabled: isLast, children: [crumb.icon && (_jsx("span", { className: "flex-shrink-0", children: crumb.icon })), _jsx("span", { className: "text-sm whitespace-nowrap", children: crumb.label })] }), !isLast && (_jsx(ChevronRight, { className: "w-4 h-4 text-text-quaternary flex-shrink-0" }))] }, actualIndex));
                        })] }) }), _jsxs("div", { className: "tabs-section px-6 relative", children: [_jsxs("div", { className: "flex items-center gap-1 relative", children: [tabs.map((tab) => {
                                const isActive = tab.id === activeTab;
                                return (_jsxs("button", { ref: (el) => { tabRefs.current[tab.id] = el; }, onClick: () => handleTabClick(tab.id), className: `tab-item relative flex items-center gap-2 px-4 py-3 text-sm font-medium transition-all duration-200 ${isActive
                                        ? 'text-accent-blue'
                                        : 'text-text-secondary hover:text-text-primary'}`, role: "tab", "aria-selected": isActive, "aria-controls": `tabpanel-${tab.id}`, children: [tab.icon && (_jsx("span", { className: "flex-shrink-0 w-4 h-4", children: tab.icon })), _jsx("span", { children: tab.label }), tab.badge !== undefined && tab.badge > 0 && (_jsx("span", { className: `badge inline-flex items-center justify-center min-w-[18px] h-[18px] px-1.5 rounded-full text-xs font-semibold transition-colors duration-200 ${isActive
                                                ? 'bg-accent-blue text-white'
                                                : 'bg-background-tertiary text-text-secondary'}`, children: tab.badge > 99 ? '99+' : tab.badge }))] }, tab.id));
                            }), _jsx("div", { className: "tab-indicator absolute bottom-0 h-0.5 bg-accent-blue transition-all duration-300 ease-out", style: {
                                    left: `${indicatorStyle.left}px`,
                                    width: `${indicatorStyle.width}px`,
                                } })] }), variant !== 'elevated' && (_jsx("div", { className: "absolute bottom-0 left-0 right-0 h-px bg-border-primary" }))] })] }));
};
export default BreadcrumbTabsHybrid;
//# sourceMappingURL=BreadcrumbTabsHybrid.js.map