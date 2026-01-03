import * as React from "react";
type CheckedState = boolean | "indeterminate";
export interface CheckboxProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "type" | "checked" | "defaultChecked" | "onChange"> {
    checked?: CheckedState;
    defaultChecked?: CheckedState;
    onCheckedChange?: (checked: CheckedState) => void;
}
declare const Checkbox: React.ForwardRefExoticComponent<CheckboxProps & React.RefAttributes<HTMLInputElement>>;
export { Checkbox };
//# sourceMappingURL=Checkbox.d.ts.map