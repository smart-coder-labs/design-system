export const tokens = {
    // 🎨 PALETA DE COLORES
    colors: {
        // Neutrales (Light Mode)
        light: {
            background: {
                primary: '#FFFFFF',
                secondary: '#F5F5F7',
                tertiary: '#FFFFFF',
            },
            text: {
                primary: '#1D1D1F',
                secondary: '#6E6E73',
                tertiary: '#86868B',
            },
            border: {
                default: 'rgba(0, 0, 0, 0.1)',
                divider: 'rgba(0, 0, 0, 0.05)',
            },
        },
        // Neutrales (Dark Mode)
        dark: {
            background: {
                primary: '#000000',
                secondary: '#1C1C1E',
                tertiary: '#2C2C2E',
            },
            text: {
                primary: '#F5F5F7',
                secondary: '#98989D',
                tertiary: '#6E6E73',
            },
            border: {
                default: 'rgba(255, 255, 255, 0.12)',
                divider: 'rgba(255, 255, 255, 0.08)',
            },
        },
        // Accents
        accent: {
            light: {
                blue: '#007AFF',
                purple: '#AF52DE',
                pink: '#FF2D55',
                red: '#FF3B30',
                orange: '#FF9500',
                yellow: '#FFCC00',
                green: '#34C759',
                teal: '#5AC8FA',
                indigo: '#5856D6',
            },
            dark: {
                blue: '#0A84FF',
                purple: '#BF5AF2',
                pink: '#FF375F',
                red: '#FF453A',
                orange: '#FF9F0A',
                yellow: '#FFD60A',
                green: '#30D158',
                teal: '#64D2FF',
                indigo: '#5E5CE6',
            },
        },
    },
    // 🔲 RADIUS
    radius: {
        sm: '8px',
        md: '12px',
        lg: '16px',
        xl: '20px',
        full: '9999px',
    },
    // 🌫️ SOMBRAS
    shadows: {
        light: {
            sm: '0 2px 8px rgba(0, 0, 0, 0.04), 0 1px 2px rgba(0, 0, 0, 0.02)',
            md: '0 4px 16px rgba(0, 0, 0, 0.08), 0 2px 4px rgba(0, 0, 0, 0.04)',
            lg: '0 8px 32px rgba(0, 0, 0, 0.12), 0 4px 8px rgba(0, 0, 0, 0.06)',
        },
        dark: {
            sm: '0 2px 8px rgba(0, 0, 0, 0.2), 0 1px 2px rgba(0, 0, 0, 0.1)',
            md: '0 4px 16px rgba(0, 0, 0, 0.3), 0 2px 4px rgba(0, 0, 0, 0.2)',
            lg: '0 8px 32px rgba(0, 0, 0, 0.4), 0 4px 8px rgba(0, 0, 0, 0.3)',
        },
    },
    // ⚡ ANIMACIONES
    animation: {
        duration: {
            fast: '0.15s',
            normal: '0.2s',
            slow: '0.3s',
        },
        easing: {
            default: 'cubic-bezier(0.25, 0.1, 0.25, 1.0)',
            spring: 'cubic-bezier(0.175, 0.885, 0.32, 1.275)',
        },
    },
} as const;

export type Tokens = typeof tokens;
