/**
 * 🍏 Apple Design System Tokens
 * Inspirado en macOS, iOS y VisionOS
 *
 * Filosofía: Minimalismo, elegancia, espacio negativo amplio
 */
export declare const tokens: {
    readonly colors: {
        readonly light: {
            readonly background: {
                readonly primary: "#FFFFFF";
                readonly secondary: "#F5F5F7";
                readonly tertiary: "#E8E8ED";
                readonly elevated: "#FFFFFF";
            };
            readonly surface: {
                readonly primary: "#FFFFFF";
                readonly secondary: "#F5F5F7";
                readonly glass: "rgba(255, 255, 255, 0.72)";
                readonly glassDark: "rgba(255, 255, 255, 0.85)";
            };
            readonly text: {
                readonly primary: "#1D1D1F";
                readonly secondary: "#6E6E73";
                readonly tertiary: "#86868B";
                readonly quaternary: "#A1A1A6";
                readonly inverse: "#FFFFFF";
            };
            readonly border: {
                readonly primary: "rgba(0, 0, 0, 0.08)";
                readonly secondary: "rgba(0, 0, 0, 0.04)";
                readonly focus: "rgba(0, 125, 250, 0.4)";
            };
            readonly accent: {
                readonly blue: "#007AFF";
                readonly blueHover: "#0051D5";
                readonly blueActive: "#004FC4";
                readonly blueTint: "rgba(0, 122, 255, 0.1)";
            };
            readonly status: {
                readonly success: "#34C759";
                readonly warning: "#FF9500";
                readonly error: "#FF3B30";
                readonly info: "#5AC8FA";
            };
        };
        readonly dark: {
            readonly background: {
                readonly primary: "#000000";
                readonly secondary: "#1C1C1E";
                readonly tertiary: "#2C2C2E";
                readonly elevated: "#1C1C1E";
            };
            readonly surface: {
                readonly primary: "#1C1C1E";
                readonly secondary: "#2C2C2E";
                readonly glass: "rgba(28, 28, 30, 0.72)";
                readonly glassDark: "rgba(28, 28, 30, 0.85)";
            };
            readonly text: {
                readonly primary: "#FFFFFF";
                readonly secondary: "#98989D";
                readonly tertiary: "#6E6E73";
                readonly quaternary: "#48484A";
                readonly inverse: "#000000";
            };
            readonly border: {
                readonly primary: "rgba(255, 255, 255, 0.12)";
                readonly secondary: "rgba(255, 255, 255, 0.06)";
                readonly focus: "rgba(10, 132, 255, 0.6)";
            };
            readonly accent: {
                readonly blue: "#0A84FF";
                readonly blueHover: "#409CFF";
                readonly blueActive: "#5EB0FF";
                readonly blueTint: "rgba(10, 132, 255, 0.15)";
            };
            readonly status: {
                readonly success: "#32D74B";
                readonly warning: "#FF9F0A";
                readonly error: "#FF453A";
                readonly info: "#64D2FF";
            };
        };
    };
    readonly typography: {
        readonly fontFamily: {
            readonly base: "-apple-system, BlinkMacSystemFont, \"Inter\", \"SF Pro Display\", \"Segoe UI\", Roboto, sans-serif";
            readonly mono: "\"SF Mono\", \"Monaco\", \"Cascadia Code\", \"Courier New\", monospace";
        };
        readonly fontSize: {
            readonly xs: "0.6875rem";
            readonly sm: "0.8125rem";
            readonly base: "0.9375rem";
            readonly lg: "1.0625rem";
            readonly xl: "1.25rem";
            readonly '2xl': "1.5rem";
            readonly '3xl': "1.875rem";
            readonly '4xl': "2.25rem";
            readonly '5xl': "3rem";
            readonly '6xl': "3.75rem";
        };
        readonly fontWeight: {
            readonly regular: "400";
            readonly medium: "500";
            readonly semibold: "600";
            readonly bold: "700";
        };
        readonly lineHeight: {
            readonly tight: "1.2";
            readonly normal: "1.5";
            readonly relaxed: "1.75";
        };
        readonly letterSpacing: {
            readonly tight: "-0.02em";
            readonly normal: "0";
            readonly wide: "0.01em";
        };
    };
    readonly radius: {
        readonly none: "0";
        readonly xs: "4px";
        readonly sm: "8px";
        readonly md: "12px";
        readonly lg: "16px";
        readonly xl: "20px";
        readonly '2xl': "24px";
        readonly full: "9999px";
    };
    readonly shadows: {
        readonly none: "none";
        readonly xs: "0 1px 2px rgba(0, 0, 0, 0.04)";
        readonly sm: "0 2px 8px rgba(0, 0, 0, 0.06), 0 1px 4px rgba(0, 0, 0, 0.04)";
        readonly md: "0 4px 16px rgba(0, 0, 0, 0.08), 0 2px 8px rgba(0, 0, 0, 0.04)";
        readonly lg: "0 8px 32px rgba(0, 0, 0, 0.12), 0 4px 16px rgba(0, 0, 0, 0.06)";
        readonly xl: "0 16px 48px rgba(0, 0, 0, 0.16), 0 8px 24px rgba(0, 0, 0, 0.08)";
        readonly dark: {
            readonly xs: "0 1px 2px rgba(0, 0, 0, 0.24)";
            readonly sm: "0 2px 8px rgba(0, 0, 0, 0.32), 0 1px 4px rgba(0, 0, 0, 0.24)";
            readonly md: "0 4px 16px rgba(0, 0, 0, 0.40), 0 2px 8px rgba(0, 0, 0, 0.32)";
            readonly lg: "0 8px 32px rgba(0, 0, 0, 0.48), 0 4px 16px rgba(0, 0, 0, 0.40)";
            readonly xl: "0 16px 48px rgba(0, 0, 0, 0.56), 0 8px 24px rgba(0, 0, 0, 0.48)";
        };
    };
    readonly blur: {
        readonly none: "0";
        readonly sm: "4px";
        readonly md: "8px";
        readonly lg: "16px";
        readonly xl: "24px";
        readonly '2xl': "40px";
    };
    readonly opacity: {
        readonly disabled: "0.4";
        readonly hover: "0.8";
        readonly glass: "0.72";
        readonly glassDark: "0.85";
    };
    readonly spacing: {
        readonly 0: "0";
        readonly 1: "0.25rem";
        readonly 2: "0.5rem";
        readonly 3: "0.75rem";
        readonly 4: "1rem";
        readonly 5: "1.25rem";
        readonly 6: "1.5rem";
        readonly 8: "2rem";
        readonly 10: "2.5rem";
        readonly 12: "3rem";
        readonly 16: "4rem";
        readonly 20: "5rem";
        readonly 24: "6rem";
        readonly 32: "8rem";
    };
    readonly motion: {
        readonly duration: {
            readonly instant: "100ms";
            readonly fast: "160ms";
            readonly normal: "220ms";
            readonly slow: "260ms";
            readonly slower: "320ms";
        };
        readonly easing: {
            readonly standard: "cubic-bezier(0.16, 1, 0.3, 1)";
            readonly entrance: "cubic-bezier(0, 0, 0.3, 1)";
            readonly exit: "cubic-bezier(0.7, 0, 1, 1)";
            readonly spring: {
                readonly gentle: {
                    readonly type: "spring";
                    readonly stiffness: 300;
                    readonly damping: 30;
                    readonly mass: 0.8;
                };
                readonly bouncy: {
                    readonly type: "spring";
                    readonly stiffness: 400;
                    readonly damping: 25;
                    readonly mass: 0.6;
                };
                readonly snappy: {
                    readonly type: "spring";
                    readonly stiffness: 500;
                    readonly damping: 35;
                    readonly mass: 0.5;
                };
            };
        };
        readonly variants: {
            readonly fadeIn: {
                readonly initial: {
                    readonly opacity: 0;
                };
                readonly animate: {
                    readonly opacity: 1;
                };
                readonly exit: {
                    readonly opacity: 0;
                };
            };
            readonly scaleIn: {
                readonly initial: {
                    readonly opacity: 0;
                    readonly scale: 0.96;
                };
                readonly animate: {
                    readonly opacity: 1;
                    readonly scale: 1;
                };
                readonly exit: {
                    readonly opacity: 0;
                    readonly scale: 0.96;
                };
            };
            readonly slideUp: {
                readonly initial: {
                    readonly opacity: 0;
                    readonly y: 8;
                };
                readonly animate: {
                    readonly opacity: 1;
                    readonly y: 0;
                };
                readonly exit: {
                    readonly opacity: 0;
                    readonly y: 8;
                };
            };
            readonly slideDown: {
                readonly initial: {
                    readonly opacity: 0;
                    readonly y: -8;
                };
                readonly animate: {
                    readonly opacity: 1;
                    readonly y: 0;
                };
                readonly exit: {
                    readonly opacity: 0;
                    readonly y: -8;
                };
            };
        };
    };
    readonly breakpoints: {
        readonly sm: "640px";
        readonly md: "768px";
        readonly lg: "1024px";
        readonly xl: "1280px";
        readonly '2xl': "1536px";
    };
    readonly zIndex: {
        readonly base: "0";
        readonly dropdown: "1000";
        readonly sticky: "1100";
        readonly modal: "1200";
        readonly popover: "1300";
        readonly tooltip: "1400";
    };
};
export type Tokens = typeof tokens;
//# sourceMappingURL=tokens.d.ts.map