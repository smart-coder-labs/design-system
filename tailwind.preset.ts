/**
 * 🍏 Apple Design System - Tailwind Preset
 * Preset de configuración de Tailwind para proyectos consumidores
 */

import type { Config } from 'tailwindcss';
import { tokens } from './tokens';

/**
 * Preset de Tailwind para el Apple Design System
 *
 * Uso en tu proyecto:
 * ```javascript
 * import preset from '@smart-coder-labs/design-system/tailwind.preset';
 *
 * export default {
 *   presets: [preset],
 *   content: ['./src/**\/*.{js,ts,jsx,tsx}'],
 *   // ... resto de tu configuración
 * };
 * ```
 */
const preset: Partial<Config> = {
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                // Light mode colors
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
            blur: tokens.blur,
            opacity: tokens.opacity,
            spacing: tokens.spacing,
            transitionDuration: tokens.motion.duration,
            transitionTimingFunction: {
                'apple': tokens.motion.easing.standard,
                'apple-entrance': tokens.motion.easing.entrance,
                'apple-exit': tokens.motion.easing.exit,
            },
            keyframes: {
                "spinner-fade": {
                    "0%": { opacity: "1" },
                    "100%": { opacity: "0.2" },
                },
                "accordion-down": {
                    from: { height: "0" },
                    to: { height: "var(--radix-accordion-content-height)" },
                },
                "accordion-up": {
                    from: { height: "var(--radix-accordion-content-height)" },
                    to: { height: "0" },
                },
            },
            animation: {
                "spinner-fade": "spinner-fade 0.8s linear infinite",
                "accordion-down": "accordion-down 0.2s ease-out",
                "accordion-up": "accordion-up 0.2s ease-out",
            },
            zIndex: tokens.zIndex,
            backdropBlur: tokens.blur,
        },
    },
};

export default preset;
