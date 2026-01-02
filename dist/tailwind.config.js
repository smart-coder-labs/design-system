import { tokens } from './tokens';
const config = {
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                /* =========================
                   LIGHT MODE
                   ========================= */
                background: {
                    primary: '#ffffff',
                    secondary: '#f5f5f7',
                    tertiary: '#e8e8ed',
                    elevated: '#ffffff',
                },
                surface: {
                    primary: '#ffffff',
                    secondary: '#f5f5f7',
                    glass: 'rgba(255, 255, 255, 0.72)',
                    'glass-dark': 'rgba(255, 255, 255, 0.85)',
                },
                text: {
                    primary: '#1d1d1f',
                    secondary: '#6e6e73',
                    tertiary: '#86868b',
                    quaternary: '#a1a1a6',
                    inverse: '#ffffff',
                },
                border: {
                    primary: 'rgba(0, 0, 0, 0.08)',
                    secondary: 'rgba(0, 0, 0, 0.04)',
                    focus: 'rgba(0, 125, 250, 0.4)',
                },
                accent: {
                    blue: '#007aff',
                    'blue-hover': '#0051d5',
                    'blue-active': '#004fc4',
                    'blue-tint': 'rgba(0, 122, 255, 0.1)',
                },
                status: {
                    success: '#34c759',
                    warning: '#ff9500',
                    error: '#ff3b30',
                    info: '#5ac8fa',
                },
                /* Alias común (shadcn / radix / iconos) */
                foreground: '#1d1d1f',
            },
            /* =========================
               DARK MODE (via `dark:`)
               ========================= */
            textColor: {
                primary: '#ffffff',
                secondary: '#98989d',
                tertiary: '#6e6e73',
                quaternary: '#48484a',
                inverse: '#000000',
            },
            backgroundColor: {
                primary: '#000000',
                secondary: '#1c1c1e',
                tertiary: '#2c2c2e',
                elevated: '#1c1c1e',
            },
            borderColor: {
                primary: 'rgba(255, 255, 255, 0.12)',
                secondary: 'rgba(255, 255, 255, 0.06)',
                focus: 'rgba(10, 132, 255, 0.6)',
            },
            /* =========================
               TYPOGRAPHY & TOKENS
               ========================= */
            fontFamily: {
                sans: tokens.typography.fontFamily.base.split(', '),
                mono: tokens.typography.fontFamily.mono.split(', '),
            },
            fontSize: tokens.typography.fontSize,
            fontWeight: tokens.typography.fontWeight,
            lineHeight: tokens.typography.lineHeight,
            letterSpacing: tokens.typography.letterSpacing,
            spacing: tokens.spacing,
            borderRadius: tokens.radius,
            zIndex: tokens.zIndex,
            blur: tokens.blur,
            backdropBlur: tokens.blur,
            opacity: tokens.opacity,
            boxShadow: {
                none: tokens.shadows.none,
                xs: tokens.shadows.xs,
                sm: tokens.shadows.sm,
                md: tokens.shadows.md,
                lg: tokens.shadows.lg,
                xl: tokens.shadows.xl,
                'dark-xs': tokens.shadows.dark.xs,
                'dark-sm': tokens.shadows.dark.sm,
                'dark-md': tokens.shadows.dark.md,
                'dark-lg': tokens.shadows.dark.lg,
                'dark-xl': tokens.shadows.dark.xl,
            },
            transitionDuration: tokens.motion.duration,
            transitionTimingFunction: {
                apple: tokens.motion.easing.standard,
                'apple-entrance': tokens.motion.easing.entrance,
                'apple-exit': tokens.motion.easing.exit,
            },
            keyframes: {
                'spinner-fade': {
                    '0%': { opacity: '1' },
                    '100%': { opacity: '0.2' },
                },
                'accordion-down': {
                    from: { height: '0' },
                    to: { height: 'var(--radix-accordion-content-height)' },
                },
                'accordion-up': {
                    from: { height: 'var(--radix-accordion-content-height)' },
                    to: { height: '0' },
                },
            },
            animation: {
                'spinner-fade': 'spinner-fade 0.8s linear infinite',
                'accordion-down': 'accordion-down 0.2s ease-out',
                'accordion-up': 'accordion-up 0.2s ease-out',
            },
        },
    },
    plugins: [],
};
export default config;
//# sourceMappingURL=tailwind.config.js.map