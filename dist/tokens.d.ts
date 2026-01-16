export declare const tokens: {
    readonly colors: {
        readonly light: {
            readonly background: {
                readonly primary: "#FFFFFF";
                readonly secondary: "#F5F5F7";
                readonly tertiary: "#FFFFFF";
            };
            readonly text: {
                readonly primary: "#1D1D1F";
                readonly secondary: "#6E6E73";
                readonly tertiary: "#86868B";
            };
            readonly border: {
                readonly default: "rgba(0, 0, 0, 0.1)";
                readonly divider: "rgba(0, 0, 0, 0.05)";
            };
        };
        readonly dark: {
            readonly background: {
                readonly primary: "#000000";
                readonly secondary: "#1C1C1E";
                readonly tertiary: "#2C2C2E";
            };
            readonly text: {
                readonly primary: "#F5F5F7";
                readonly secondary: "#98989D";
                readonly tertiary: "#6E6E73";
            };
            readonly border: {
                readonly default: "rgba(255, 255, 255, 0.12)";
                readonly divider: "rgba(255, 255, 255, 0.08)";
            };
        };
        readonly accent: {
            readonly light: {
                readonly blue: "#007AFF";
                readonly purple: "#AF52DE";
                readonly pink: "#FF2D55";
                readonly red: "#FF3B30";
                readonly orange: "#FF9500";
                readonly yellow: "#FFCC00";
                readonly green: "#34C759";
                readonly teal: "#5AC8FA";
                readonly indigo: "#5856D6";
            };
            readonly dark: {
                readonly blue: "#0A84FF";
                readonly purple: "#BF5AF2";
                readonly pink: "#FF375F";
                readonly red: "#FF453A";
                readonly orange: "#FF9F0A";
                readonly yellow: "#FFD60A";
                readonly green: "#30D158";
                readonly teal: "#64D2FF";
                readonly indigo: "#5E5CE6";
            };
        };
    };
    readonly radius: {
        readonly sm: "8px";
        readonly md: "12px";
        readonly lg: "16px";
        readonly xl: "20px";
        readonly full: "9999px";
    };
    readonly shadows: {
        readonly light: {
            readonly sm: "0 2px 8px rgba(0, 0, 0, 0.04), 0 1px 2px rgba(0, 0, 0, 0.02)";
            readonly md: "0 4px 16px rgba(0, 0, 0, 0.08), 0 2px 4px rgba(0, 0, 0, 0.04)";
            readonly lg: "0 8px 32px rgba(0, 0, 0, 0.12), 0 4px 8px rgba(0, 0, 0, 0.06)";
        };
        readonly dark: {
            readonly sm: "0 2px 8px rgba(0, 0, 0, 0.2), 0 1px 2px rgba(0, 0, 0, 0.1)";
            readonly md: "0 4px 16px rgba(0, 0, 0, 0.3), 0 2px 4px rgba(0, 0, 0, 0.2)";
            readonly lg: "0 8px 32px rgba(0, 0, 0, 0.4), 0 4px 8px rgba(0, 0, 0, 0.3)";
        };
    };
    readonly animation: {
        readonly duration: {
            readonly fast: "0.15s";
            readonly normal: "0.2s";
            readonly slow: "0.3s";
        };
        readonly easing: {
            readonly default: "cubic-bezier(0.25, 0.1, 0.25, 1.0)";
            readonly spring: "cubic-bezier(0.175, 0.885, 0.32, 1.275)";
        };
    };
};
export type Tokens = typeof tokens;
//# sourceMappingURL=tokens.d.ts.map