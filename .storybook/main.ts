import type { StorybookConfig } from "@storybook/react-vite";
import tailwindcss from '@tailwindcss/postcss';

const config: StorybookConfig = {
    stories: [
        "../stories/**/*.mdx",
        "../stories/**/*.stories.@(js|jsx|mjs|ts|tsx)",
        "../components/**/*.stories.@(js|jsx|mjs|ts|tsx)",
    ],
    addons: [
        "@storybook/addon-onboarding",
        "@storybook/addon-docs",
    ],
    framework: {
        name: "@storybook/react-vite",
        options: {},
    },
    docs: {
    },
    async viteFinal(config) {
        // Ensure PostCSS is configured for Tailwind 4
        config.css = {
            postcss: {
                plugins: [
                    tailwindcss
                ]
            }
        };

        if (config.optimizeDeps) {
            config.optimizeDeps.include = [
                ...(config.optimizeDeps.include || []),
                'html2canvas',
                'jspdf'
            ];
        }
        return config;
    },
};
export default config;
