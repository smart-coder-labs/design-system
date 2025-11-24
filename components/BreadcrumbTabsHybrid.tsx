import React, { useState, useRef, useEffect } from 'react';
import { ChevronRight, Home } from 'lucide-react';

export interface BreadcrumbItem {
  label: string;
  href?: string;
  icon?: React.ReactNode;
}

export interface TabItem {
  id: string;
  label: string;
  icon?: React.ReactNode;
  badge?: number;
}

export interface BreadcrumbTabsHybridProps {
  breadcrumbs: BreadcrumbItem[];
  tabs: TabItem[];
  activeTab?: string;
  onTabChange?: (tabId: string) => void;
  onBreadcrumbClick?: (index: number) => void;
  variant?: 'default' | 'compact' | 'elevated';
  showHomeIcon?: boolean;
  className?: string;
}

export const BreadcrumbTabsHybrid: React.FC<BreadcrumbTabsHybridProps> = ({
  breadcrumbs,
  tabs,
  activeTab: controlledActiveTab,
  onTabChange,
  onBreadcrumbClick,
  variant = 'default',
  showHomeIcon = true,
  className = '',
}) => {
  const [internalActiveTab, setInternalActiveTab] = useState(tabs[0]?.id || '');
  const activeTab = controlledActiveTab ?? internalActiveTab;
  const tabRefs = useRef<{ [key: string]: HTMLButtonElement | null }>({});
  const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0 });

  const handleTabClick = (tabId: string) => {
    if (!controlledActiveTab) {
      setInternalActiveTab(tabId);
    }
    onTabChange?.(tabId);
  };

  const handleBreadcrumbClick = (index: number, href?: string) => {
    if (onBreadcrumbClick) {
      onBreadcrumbClick(index);
    } else if (href) {
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

  return (
    <div
      className={`breadcrumb-tabs-hybrid ${variantClasses[variant]} ${className}`}
    >
      {/* Breadcrumb Section */}
      <div className="breadcrumb-section px-6 pt-4 pb-2">
        <nav aria-label="Breadcrumb" className="flex items-center gap-1.5">
          {showHomeIcon && breadcrumbs.length > 0 && (
            <>
              <button
                onClick={() => handleBreadcrumbClick(0, breadcrumbs[0].href)}
                className="breadcrumb-home-button p-1.5 rounded-lg hover:bg-background-tertiary/50 transition-colors duration-200"
                aria-label="Home"
              >
                <Home className="w-4 h-4 text-text-secondary" />
              </button>
              {breadcrumbs.length > 1 && (
                <ChevronRight className="w-4 h-4 text-text-quaternary flex-shrink-0" />
              )}
            </>
          )}

          {breadcrumbs.slice(showHomeIcon ? 1 : 0).map((crumb, index) => {
            const actualIndex = showHomeIcon ? index + 1 : index;
            const isLast = actualIndex === breadcrumbs.length - 1;

            return (
              <React.Fragment key={actualIndex}>
                <button
                  onClick={() => handleBreadcrumbClick(actualIndex, crumb.href)}
                  className={`breadcrumb-item flex items-center gap-2 px-2.5 py-1.5 rounded-lg transition-all duration-200 ${isLast
                      ? 'text-text-primary font-medium cursor-default'
                      : 'text-text-secondary hover:text-text-primary hover:bg-background-tertiary/50'
                    }`}
                  aria-current={isLast ? 'page' : undefined}
                  disabled={isLast}
                >
                  {crumb.icon && (
                    <span className="flex-shrink-0">{crumb.icon}</span>
                  )}
                  <span className="text-sm whitespace-nowrap">{crumb.label}</span>
                </button>

                {!isLast && (
                  <ChevronRight className="w-4 h-4 text-text-quaternary flex-shrink-0" />
                )}
              </React.Fragment>
            );
          })}
        </nav>
      </div>

      {/* Tabs Section */}
      <div className="tabs-section px-6 relative">
        <div className="flex items-center gap-1 relative">
          {tabs.map((tab) => {
            const isActive = tab.id === activeTab;

            return (
              <button
                key={tab.id}
                ref={(el) => (tabRefs.current[tab.id] = el)}
                onClick={() => handleTabClick(tab.id)}
                className={`tab-item relative flex items-center gap-2 px-4 py-3 text-sm font-medium transition-all duration-200 ${isActive
                    ? 'text-accent-blue'
                    : 'text-text-secondary hover:text-text-primary'
                  }`}
                role="tab"
                aria-selected={isActive}
                aria-controls={`tabpanel-${tab.id}`}
              >
                {tab.icon && (
                  <span className="flex-shrink-0 w-4 h-4">{tab.icon}</span>
                )}
                <span>{tab.label}</span>
                {tab.badge !== undefined && tab.badge > 0 && (
                  <span
                    className={`badge inline-flex items-center justify-center min-w-[18px] h-[18px] px-1.5 rounded-full text-xs font-semibold transition-colors duration-200 ${isActive
                        ? 'bg-accent-blue text-white'
                        : 'bg-background-tertiary text-text-secondary'
                      }`}
                  >
                    {tab.badge > 99 ? '99+' : tab.badge}
                  </span>
                )}
              </button>
            );
          })}

          {/* Active Tab Indicator */}
          <div
            className="tab-indicator absolute bottom-0 h-0.5 bg-accent-blue transition-all duration-300 ease-out"
            style={{
              left: `${indicatorStyle.left}px`,
              width: `${indicatorStyle.width}px`,
            }}
          />
        </div>

        {/* Bottom Border */}
        {variant !== 'elevated' && (
          <div className="absolute bottom-0 left-0 right-0 h-px bg-border-primary" />
        )}
      </div>

      <style jsx>{`
        .breadcrumb-tabs-hybrid {
          position: relative;
          overflow: hidden;
        }

        .breadcrumb-item:disabled {
          cursor: default;
          pointer-events: none;
        }

        .tab-item {
          position: relative;
          user-select: none;
          -webkit-tap-highlight-color: transparent;
        }

        .tab-item::before {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: 8px;
          background: var(--color-background-tertiary);
          opacity: 0;
          transition: opacity 200ms cubic-bezier(0.16, 1, 0.3, 1);
        }

        .tab-item:hover::before {
          opacity: 0.5;
        }

        .tab-item:active::before {
          opacity: 0.7;
        }

        .tab-item[aria-selected='true']::before {
          opacity: 0;
        }

        .tab-indicator {
          border-radius: 1px 1px 0 0;
        }

        /* Smooth badge animation */
        .badge {
          animation: scaleIn 200ms cubic-bezier(0.16, 1, 0.3, 1);
        }

        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.8);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        /* Responsive adjustments */
        @media (max-width: 640px) {
          .breadcrumb-section {
            padding-left: 1rem;
            padding-right: 1rem;
          }

          .tabs-section {
            padding-left: 1rem;
            padding-right: 1rem;
            overflow-x: auto;
            -webkit-overflow-scrolling: touch;
          }

          .tabs-section::-webkit-scrollbar {
            display: none;
          }

          .tab-item {
            padding-left: 0.75rem;
            padding-right: 0.75rem;
            white-space: nowrap;
          }
        }
      `}</style>
    </div>
  );
};

export default BreadcrumbTabsHybrid;
