import * as React from "react";
interface RadioGroupProps extends React.HTMLAttributes<HTMLDivElement> {
    value?: string;
    defaultValue?: string;
    onValueChange?: (value: string) => void;
    name?: string;
    disabled?: boolean;
}
declare const RadioGroup: React.ForwardRefExoticComponent<RadioGroupProps & React.RefAttributes<HTMLDivElement>>;
interface RadioGroupItemProps extends Omit<React.LabelHTMLAttributes<HTMLLabelElement>, "onChange"> {
    value: string;
    disabled?: boolean;
}
declare const RadioGroupItem: React.ForwardRefExoticComponent<RadioGroupItemProps & React.RefAttributes<HTMLLabelElement>>;
export { RadioGroup, RadioGroupItem };
//# sourceMappingURL=RadioGroup.d.ts.map