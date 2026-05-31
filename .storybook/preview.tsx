import type { Preview } from "@storybook/react";
import { addons } from "storybook/preview-api";
import "../globals.css";

const STORAGE_KEY = "sb-addon-themes-3";
const DARK_MODE_EVENT = "DARK_MODE";

// ─── Module-level dark mode sync ─────────────────────────────────────────────
// Runs synchronously when the preview bundle loads in EVERY preview context,
// including the nested story canvas iframes that the docs page embeds.
// storybook-dark-mode's updatePreview() only targets the top-level
// storybook-preview-iframe by ID and cannot reach these nested iframes.

function applyDark(isDark: boolean) {
    document.documentElement.classList.toggle("dark", isDark);
    // Storybook injects an unlayered body { background-color: appBg } that wins
    // over our @layer base rules. Inline styles beat any stylesheet rule, and
    // var() in inline styles resolves dynamically against the cascade (html.dark).
    if (document.body) {
        document.body.style.setProperty("background-color", "var(--color-bg-primary)");
        document.body.style.setProperty("color", "var(--color-text-primary)");
    }
}

function readStorage(): boolean {
    try {
        const stored = localStorage.getItem(STORAGE_KEY);
        if (stored) return JSON.parse(stored).current === "dark";
    } catch {}
    return false;
}

// 1. Apply initial state synchronously (no event needed)
applyDark(readStorage());

// 2. Channel event — fires when the user toggles dark mode
try {
    addons.getChannel().on(DARK_MODE_EVENT, applyDark);
} catch {}

// 3. Storage event fallback — fires in same-origin iframes when localStorage changes
window.addEventListener("storage", (e) => {
    if (e.key === null || e.key === STORAGE_KEY) applyDark(readStorage());
});

// ─────────────────────────────────────────────────────────────────────────────

const preview: Preview = {
    parameters: {
        darkMode: {
            classTarget: "html",
            stylePreview: true,
        },
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i,
            },
        },
    },
};

export default preview;
