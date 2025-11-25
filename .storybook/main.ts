import type { StorybookConfig } from "@storybook/react-vite";

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
        // autodocs: "tag",
    },
    async viteFinal(config) {
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
