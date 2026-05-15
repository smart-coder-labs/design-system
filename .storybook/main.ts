import type { StorybookConfig } from "@storybook/react-vite";

const config: StorybookConfig = {
    stories: [
        "../stories/**/*.mdx",
        "../components/**/*.stories.@(js|jsx|mjs|ts|tsx)",
    ],
    addons: [
        "@storybook/addon-onboarding",
        "@storybook/addon-docs",
        "storybook-dark-mode",
    ],
    framework: {
        name: "@storybook/react-vite",
        options: {},
    },
    docs: {
    },
};
export default config;
