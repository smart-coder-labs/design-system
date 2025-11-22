import type { Config } from 'tailwindcss';
import { tokens } from './tokens';

const config: Config = {
    content: [
        './src/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                // Light mode
                background: tokens.colors.light.background,
                surface: tokens.colors.light.surface,
                text: tokens.colors.light.text,
                border: tokens.colors.light.border,
                accent: tokens.colors.light.accent,
                status: tokens.colors.light.status,
            },
            fontFamily: {
                sans: tokens.typography.fontFamily.base.split(', '),
                mono: tokens.typography.fontFamily.mono.split(', '),
            },
            fontSize: tokens.typography.fontSize,
            fontWeight: tokens.typography.fontWeight,
            lineHeight: tokens.typography.lineHeight,
            letterSpacing: tokens.typography.letterSpacing,
            borderRadius: tokens.radius,
            boxShadow: {
                ...tokens.shadows,
                'dark-xs': tokens.shadows.dark.xs,
                'dark-sm': tokens.shadows.dark.sm,
                'dark-md': tokens.shadows.dark.md,
                'dark-lg': tokens.shadows.dark.lg,
                'dark-xl': tokens.shadows.dark.xl,
            },
            blur: tokens.blur,
            opacity: tokens.opacity,
            spacing: tokens.spacing,
            transitionDuration: tokens.motion.duration,
            transitionTimingFunction: {
                'apple': tokens.motion.easing.standard,
                'apple-entrance': tokens.motion.easing.entrance,
                'apple-exit': tokens.motion.easing.exit,
            },
            zIndex: tokens.zIndex,
            backdropBlur: tokens.blur,
        },
    },
    plugins: [],
};

export default config;
