/* ========================================
   SWITCH - TYPES
   ======================================== */

export type SwitchSize = 'sm' | 'md' | 'lg';

export interface SwitchProps {
    /** Controlled checked state. The component holds no internal state. */
    checked?: boolean;
    /** Called with the next checked value when the switch is activated. */
    onCheckedChange?: (checked: boolean) => void;
    /** Prevents interaction and dims the switch. */
    disabled?: boolean;
    /** Visible label rendered next to the switch; also names it for assistive tech. */
    label?: string;
    /** Visible helper text rendered under the label; exposed as the accessible description. */
    description?: string;
    /** Track/thumb dimensions. */
    size?: SwitchSize;
    /** Extra classes merged onto the switch track. */
    className?: string;
    /** Accessible name to use when no visible `label` is provided. */
    'aria-label'?: string;
}
