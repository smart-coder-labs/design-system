import * as React from "react";
type AccordionSingleProps = {
    type?: "single";
    value?: string;
    defaultValue?: string;
    onValueChange?: (value: string) => void;
    collapsible?: boolean;
};
type AccordionMultipleProps = {
    type: "multiple";
    value?: string[];
    defaultValue?: string[];
    onValueChange?: (value: string[]) => void;
    collapsible?: boolean;
};
type AccordionProps = (AccordionSingleProps | AccordionMultipleProps) & React.HTMLAttributes<HTMLDivElement>;
declare const Accordion: React.ForwardRefExoticComponent<AccordionProps & React.RefAttributes<HTMLDivElement>>;
declare const AccordionItem: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLDivElement> & {
    value: string;
    disabled?: boolean;
} & React.RefAttributes<HTMLDivElement>>;
type AccordionTriggerProps = React.ButtonHTMLAttributes<HTMLButtonElement>;
declare const AccordionTrigger: React.ForwardRefExoticComponent<AccordionTriggerProps & React.RefAttributes<HTMLButtonElement>>;
type AccordionContentProps = React.HTMLAttributes<HTMLDivElement>;
declare const AccordionContent: React.ForwardRefExoticComponent<AccordionContentProps & React.RefAttributes<HTMLDivElement>>;
export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
//# sourceMappingURL=Accordion.d.ts.map