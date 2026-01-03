import React from 'react';
type ThemeName = 'light' | 'dark';
export type ThemeMode = ThemeName | 'system';
export interface ThemeToggleProps {
    /** Modo inicial. `system` respeta la preferencia del SO. */
    defaultMode?: ThemeMode;
    /** Clave usada para persistir la preferencia en `localStorage`. */
    storageKey?: string;
    /** Texto principal del control. */
    label?: string;
    /** Texto secundario opcional. Si no se define, se genera automáticamente. */
    description?: string;
    /** Permite volver al modo automático (prefiere color scheme del sistema). */
    allowSystem?: boolean;
    /** Clase adicional para el contenedor. */
    className?: string;
    /** Callback al cambiar el modo. */
    onModeChange?: (mode: ThemeMode, theme: ThemeName) => void;
}
export declare const ThemeToggle: React.FC<ThemeToggleProps>;
export {};
//# sourceMappingURL=ThemeToggle.d.ts.map