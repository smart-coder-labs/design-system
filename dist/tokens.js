"use strict";
/**
 * 🍏 Apple Design System Tokens
 * Inspirado en macOS, iOS y VisionOS
 *
 * Filosofía: Minimalismo, elegancia, espacio negativo amplio
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.tokens = void 0;
exports.tokens = {
    // 🎨 PALETA DE COLORES
    colors: {
        // Neutrales (Light Mode)
        light: {
            background: {
                primary: '#FFFFFF',
                secondary: '#F5F5F7',
                tertiary: '#E8E8ED',
                elevated: '#FFFFFF',
            },
            surface: {
                primary: '#FFFFFF',
                secondary: '#F5F5F7',
                glass: 'rgba(255, 255, 255, 0.72)',
                glassDark: 'rgba(255, 255, 255, 0.85)',
            },
            text: {
                primary: '#1D1D1F',
                secondary: '#6E6E73',
                tertiary: '#86868B',
                quaternary: '#A1A1A6',
                inverse: '#FFFFFF',
            },
            border: {
                primary: 'rgba(0, 0, 0, 0.08)',
                secondary: 'rgba(0, 0, 0, 0.04)',
                focus: 'rgba(0, 125, 250, 0.4)',
            },
            accent: {
                blue: '#007AFF',
                blueHover: '#0051D5',
                blueActive: '#004FC4',
                blueTint: 'rgba(0, 122, 255, 0.1)',
            },
            status: {
                success: '#34C759',
                warning: '#FF9500',
                error: '#FF3B30',
                info: '#5AC8FA',
            },
        },
        // Neutrales (Dark Mode)
        dark: {
            background: {
                primary: '#000000',
                secondary: '#1C1C1E',
                tertiary: '#2C2C2E',
                elevated: '#1C1C1E',
            },
            surface: {
                primary: '#1C1C1E',
                secondary: '#2C2C2E',
                glass: 'rgba(28, 28, 30, 0.72)',
                glassDark: 'rgba(28, 28, 30, 0.85)',
            },
            text: {
                primary: '#FFFFFF',
                secondary: '#98989D',
                tertiary: '#6E6E73',
                quaternary: '#48484A',
                inverse: '#000000',
            },
            border: {
                primary: 'rgba(255, 255, 255, 0.12)',
                secondary: 'rgba(255, 255, 255, 0.06)',
                focus: 'rgba(10, 132, 255, 0.6)',
            },
            accent: {
                blue: '#0A84FF',
                blueHover: '#409CFF',
                blueActive: '#5EB0FF',
                blueTint: 'rgba(10, 132, 255, 0.15)',
            },
            status: {
                success: '#32D74B',
                warning: '#FF9F0A',
                error: '#FF453A',
                info: '#64D2FF',
            },
        },
    },
    // 📐 TIPOGRAFÍA
    typography: {
        fontFamily: {
            base: '-apple-system, BlinkMacSystemFont, "Inter", "SF Pro Display", "Segoe UI", Roboto, sans-serif',
            mono: '"SF Mono", "Monaco", "Cascadia Code", "Courier New", monospace',
        },
        fontSize: {
            xs: '0.6875rem', // 11px
            sm: '0.8125rem', // 13px
            base: '0.9375rem', // 15px
            lg: '1.0625rem', // 17px
            xl: '1.25rem', // 20px
            '2xl': '1.5rem', // 24px
            '3xl': '1.875rem', // 30px
            '4xl': '2.25rem', // 36px
            '5xl': '3rem', // 48px
            '6xl': '3.75rem', // 60px
        },
        fontWeight: {
            regular: '400',
            medium: '500',
            semibold: '600',
            bold: '700',
        },
        lineHeight: {
            tight: '1.2',
            normal: '1.5',
            relaxed: '1.75',
        },
        letterSpacing: {
            tight: '-0.02em',
            normal: '0',
            wide: '0.01em',
        },
    },
    // 🔲 BORDER RADIUS
    radius: {
        none: '0',
        xs: '4px',
        sm: '8px',
        md: '12px',
        lg: '16px',
        xl: '20px',
        '2xl': '24px',
        full: '9999px',
    },
    // 🌫️ SHADOWS
    shadows: {
        none: 'none',
        xs: '0 1px 2px rgba(0, 0, 0, 0.04)',
        sm: '0 2px 8px rgba(0, 0, 0, 0.06), 0 1px 4px rgba(0, 0, 0, 0.04)',
        md: '0 4px 16px rgba(0, 0, 0, 0.08), 0 2px 8px rgba(0, 0, 0, 0.04)',
        lg: '0 8px 32px rgba(0, 0, 0, 0.12), 0 4px 16px rgba(0, 0, 0, 0.06)',
        xl: '0 16px 48px rgba(0, 0, 0, 0.16), 0 8px 24px rgba(0, 0, 0, 0.08)',
        // Dark mode shadows
        dark: {
            xs: '0 1px 2px rgba(0, 0, 0, 0.24)',
            sm: '0 2px 8px rgba(0, 0, 0, 0.32), 0 1px 4px rgba(0, 0, 0, 0.24)',
            md: '0 4px 16px rgba(0, 0, 0, 0.40), 0 2px 8px rgba(0, 0, 0, 0.32)',
            lg: '0 8px 32px rgba(0, 0, 0, 0.48), 0 4px 16px rgba(0, 0, 0, 0.40)',
            xl: '0 16px 48px rgba(0, 0, 0, 0.56), 0 8px 24px rgba(0, 0, 0, 0.48)',
        },
    },
    // 💨 BLUR
    blur: {
        none: '0',
        sm: '4px',
        md: '8px',
        lg: '16px',
        xl: '24px',
        '2xl': '40px',
    },
    // 🎭 OPACITY
    opacity: {
        disabled: '0.4',
        hover: '0.8',
        glass: '0.72',
        glassDark: '0.85',
    },
    // 📏 SPACING
    spacing: {
        0: '0',
        1: '0.25rem', // 4px
        2: '0.5rem', // 8px
        3: '0.75rem', // 12px
        4: '1rem', // 16px
        5: '1.25rem', // 20px
        6: '1.5rem', // 24px
        8: '2rem', // 32px
        10: '2.5rem', // 40px
        12: '3rem', // 48px
        16: '4rem', // 64px
        20: '5rem', // 80px
        24: '6rem', // 96px
        32: '8rem', // 128px
    },
    // ⚡ ANIMACIONES
    motion: {
        // Duraciones
        duration: {
            instant: '100ms',
            fast: '160ms',
            normal: '220ms',
            slow: '260ms',
            slower: '320ms',
        },
        // Easing curves (Apple-like)
        easing: {
            // Cubic bezier elegante tipo Apple
            standard: 'cubic-bezier(0.16, 1, 0.3, 1)',
            entrance: 'cubic-bezier(0, 0, 0.3, 1)',
            exit: 'cubic-bezier(0.7, 0, 1, 1)',
            // Springs suaves
            spring: {
                gentle: {
                    type: 'spring',
                    stiffness: 300,
                    damping: 30,
                    mass: 0.8,
                },
                bouncy: {
                    type: 'spring',
                    stiffness: 400,
                    damping: 25,
                    mass: 0.6,
                },
                snappy: {
                    type: 'spring',
                    stiffness: 500,
                    damping: 35,
                    mass: 0.5,
                },
            },
        },
        // Variantes de animación comunes
        variants: {
            fadeIn: {
                initial: { opacity: 0 },
                animate: { opacity: 1 },
                exit: { opacity: 0 },
            },
            scaleIn: {
                initial: { opacity: 0, scale: 0.96 },
                animate: { opacity: 1, scale: 1 },
                exit: { opacity: 0, scale: 0.96 },
            },
            slideUp: {
                initial: { opacity: 0, y: 8 },
                animate: { opacity: 1, y: 0 },
                exit: { opacity: 0, y: 8 },
            },
            slideDown: {
                initial: { opacity: 0, y: -8 },
                animate: { opacity: 1, y: 0 },
                exit: { opacity: 0, y: -8 },
            },
        },
    },
    // 📱 BREAKPOINTS
    breakpoints: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1536px',
    },
    // 🎯 Z-INDEX
    zIndex: {
        base: '0',
        dropdown: '1000',
        sticky: '1100',
        modal: '1200',
        popover: '1300',
        tooltip: '1400',
    },
};
//# sourceMappingURL=tokens.js.map