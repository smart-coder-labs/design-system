declare const config: {
    darkMode: string;
    theme: {
        extend: {
            colors: {
                background: {
                    primary: string;
                    secondary: string;
                    tertiary: string;
                    elevated: string;
                };
                surface: {
                    primary: string;
                    secondary: string;
                    glass: string;
                    'glass-dark': string;
                };
                text: {
                    primary: string;
                    secondary: string;
                    tertiary: string;
                    quaternary: string;
                    inverse: string;
                };
                border: {
                    primary: string;
                    secondary: string;
                    focus: string;
                };
                accent: {
                    blue: string;
                    'blue-hover': string;
                    'blue-active': string;
                    'blue-tint': string;
                };
                status: {
                    success: string;
                    warning: string;
                    error: string;
                    info: string;
                };
                foreground: string;
            };
            textColor: {
                primary: string;
                secondary: string;
                tertiary: string;
                quaternary: string;
                inverse: string;
            };
            backgroundColor: {
                primary: string;
                secondary: string;
                tertiary: string;
                elevated: string;
            };
            borderColor: {
                primary: string;
                secondary: string;
                focus: string;
            };
            fontFamily: {
                sans: string[];
                mono: string[];
            };
            fontSize: {
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
            fontWeight: {
                readonly regular: "400";
                readonly medium: "500";
                readonly semibold: "600";
                readonly bold: "700";
            };
            lineHeight: {
                readonly tight: "1.2";
                readonly normal: "1.5";
                readonly relaxed: "1.75";
            };
            letterSpacing: {
                readonly tight: "-0.02em";
                readonly normal: "0";
                readonly wide: "0.01em";
            };
            spacing: {
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
            borderRadius: {
                readonly none: "0";
                readonly xs: "4px";
                readonly sm: "8px";
                readonly md: "12px";
                readonly lg: "16px";
                readonly xl: "20px";
                readonly '2xl': "24px";
                readonly full: "9999px";
            };
            zIndex: {
                readonly base: "0";
                readonly dropdown: "1000";
                readonly sticky: "1100";
                readonly modal: "1200";
                readonly popover: "1300";
                readonly tooltip: "1400";
            };
            blur: {
                readonly none: "0";
                readonly sm: "4px";
                readonly md: "8px";
                readonly lg: "16px";
                readonly xl: "24px";
                readonly '2xl': "40px";
            };
            backdropBlur: {
                readonly none: "0";
                readonly sm: "4px";
                readonly md: "8px";
                readonly lg: "16px";
                readonly xl: "24px";
                readonly '2xl': "40px";
            };
            opacity: {
                readonly disabled: "0.4";
                readonly hover: "0.8";
                readonly glass: "0.72";
                readonly glassDark: "0.85";
            };
            boxShadow: {
                none: "none";
                xs: "0 1px 2px rgba(0, 0, 0, 0.04)";
                sm: "0 2px 8px rgba(0, 0, 0, 0.06), 0 1px 4px rgba(0, 0, 0, 0.04)";
                md: "0 4px 16px rgba(0, 0, 0, 0.08), 0 2px 8px rgba(0, 0, 0, 0.04)";
                lg: "0 8px 32px rgba(0, 0, 0, 0.12), 0 4px 16px rgba(0, 0, 0, 0.06)";
                xl: "0 16px 48px rgba(0, 0, 0, 0.16), 0 8px 24px rgba(0, 0, 0, 0.08)";
                'dark-xs': "0 1px 2px rgba(0, 0, 0, 0.24)";
                'dark-sm': "0 2px 8px rgba(0, 0, 0, 0.32), 0 1px 4px rgba(0, 0, 0, 0.24)";
                'dark-md': "0 4px 16px rgba(0, 0, 0, 0.40), 0 2px 8px rgba(0, 0, 0, 0.32)";
                'dark-lg': "0 8px 32px rgba(0, 0, 0, 0.48), 0 4px 16px rgba(0, 0, 0, 0.40)";
                'dark-xl': "0 16px 48px rgba(0, 0, 0, 0.56), 0 8px 24px rgba(0, 0, 0, 0.48)";
            };
            transitionDuration: {
                readonly instant: "100ms";
                readonly fast: "160ms";
                readonly normal: "220ms";
                readonly slow: "260ms";
                readonly slower: "320ms";
            };
            transitionTimingFunction: {
                apple: "cubic-bezier(0.16, 1, 0.3, 1)";
                'apple-entrance': "cubic-bezier(0, 0, 0.3, 1)";
                'apple-exit': "cubic-bezier(0.7, 0, 1, 1)";
            };
            keyframes: {
                'spinner-fade': {
                    '0%': {
                        opacity: string;
                    };
                    '100%': {
                        opacity: string;
                    };
                };
                'accordion-down': {
                    from: {
                        height: string;
                    };
                    to: {
                        height: string;
                    };
                };
                'accordion-up': {
                    from: {
                        height: string;
                    };
                    to: {
                        height: string;
                    };
                };
            };
            animation: {
                'spinner-fade': string;
                'accordion-down': string;
                'accordion-up': string;
            };
        };
    };
    plugins: never[];
};
export default config;
//# sourceMappingURL=tailwind.config.d.ts.map