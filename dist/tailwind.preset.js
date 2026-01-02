/**
 * 🍏 Apple Design System - Tailwind Preset
 * Preset de configuración de Tailwind para proyectos consumidores
 */
import { tokens } from './tokens';
/**
 * Preset de Tailwind para el Apple Design System
 *
 * Uso en tu proyecto:
 * javascript
 * import preset from '@smart-coder-labs/design-system/tailwind.preset';
 *
 * export default {
 *   presets: [preset],
 *   content: ['./src/**\/*.{js,ts,jsx,tsx}'],
 *   // ... resto de tu configuración
 * };
 *
 */
const preset = {
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                // Using CSS variables for automatic dark mode support
                'background-primary': 'var(--color-bg-primary)',
                'background-secondary': 'var(--color-bg-secondary)',
                'background-tertiary': 'var(--color-bg-tertiary)',
                'background-elevated': 'var(--color-bg-elevated)',
                'surface-primary': 'var(--color-surface-primary)',
                'surface-secondary': 'var(--color-surface-secondary)',
                'surface-glass': 'var(--color-surface-glass)',
                'surface-glass-dark': 'var(--color-surface-glass-dark)',
                'text-primary': 'var(--color-text-primary)',
                'text-secondary': 'var(--color-text-secondary)',
                'text-tertiary': 'var(--color-text-tertiary)',
                'text-quaternary': 'var(--color-text-quaternary)',
                'text-inverse': 'var(--color-text-inverse)',
                'border-primary': 'var(--color-border-primary)',
                'border-secondary': 'var(--color-border-secondary)',
                'border-focus': 'var(--color-border-focus)',
                'accent-blue': 'var(--color-accent-blue)',
                'accent-blue-hover': 'var(--color-accent-blue-hover)',
                'accent-blue-active': 'var(--color-accent-blue-active)',
                'accent-blue-tint': 'var(--color-accent-blue-tint)',
                'status-success': 'var(--color-status-success)',
                'status-warning': 'var(--color-status-warning)',
                'status-error': 'var(--color-status-error)',
                'status-info': 'var(--color-status-info)',
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
//# sourceMappingURL=tailwind.preset.js.map