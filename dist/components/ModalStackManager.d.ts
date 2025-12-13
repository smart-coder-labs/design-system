import React from 'react';
export type ModalConfig = {
    title: string;
    description?: string;
    content: React.ReactNode;
    footer?: React.ReactNode;
    size?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
};
export interface ModalStackManagerProps {
    /**
     * Initial modals to show (array of modal configs)
     */
    initialStack?: ModalConfig[];
    /**
     * Optional className for root
     */
    className?: string;
    /**
     * Controlled open state (optional)
     */
    open?: boolean;
    /**
     * Callback when all modals are closed
     */
    onCloseAll?: () => void;
}
/**
 * ModalStackManager: gestiona múltiples modales apilados estilo macOS/iOS
 * - Animación de entrada/salida con Framer Motion
 * - Cada modal puede abrir otro modal encima
 * - Cierre individual o en cascada
 */
export declare const ModalStackManager: React.FC<ModalStackManagerProps>;
//# sourceMappingURL=ModalStackManager.d.ts.map