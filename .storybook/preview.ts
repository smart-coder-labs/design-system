import type { Preview } from "@storybook/react";
import "../globals.css";

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
