import React from 'react';
export type Operator = 'equals' | 'not_equals' | 'contains' | 'gt' | 'lt' | 'gte' | 'lte' | 'starts_with' | 'ends_with';
export interface Field {
    id: string;
    label: string;
    type: 'text' | 'number' | 'date' | 'select';
    options?: {
        label: string;
        value: string;
    }[];
}
export interface Rule {
    id: string;
    fieldId: string;
    operator: Operator;
    value: any;
}
export interface RuleGroup {
    id: string;
    combinator: 'and' | 'or';
    rules: (Rule | RuleGroup)[];
}
export interface QueryBuilderProps {
    fields: Field[];
    value?: RuleGroup;
    onChange?: (value: RuleGroup) => void;
    className?: string;
}
export declare const QueryBuilder: React.FC<QueryBuilderProps>;
//# sourceMappingURL=QueryBuilder.d.ts.map