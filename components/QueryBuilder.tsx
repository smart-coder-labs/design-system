import React, { useState, useEffect } from 'react';
import { tokens } from '../tokens';
import { Button } from './Button';
import { Input } from './Input';
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from './Select';

export type Operator = 'equals' | 'not_equals' | 'contains' | 'gt' | 'lt' | 'gte' | 'lte' | 'starts_with' | 'ends_with';

export interface Field {
    id: string;
    label: string;
    type: 'text' | 'number' | 'date' | 'select';
    options?: { label: string; value: string }[]; // For select type
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

const OPERATORS: { [key in Operator]: string } = {
    equals: 'Equals',
    not_equals: 'Not Equals',
    contains: 'Contains',
    starts_with: 'Starts With',
    ends_with: 'Ends With',
    gt: 'Greater Than',
    lt: 'Less Than',
    gte: 'Greater or Equal',
    lte: 'Less or Equal',
};

const OPERATORS_BY_TYPE: { [key: string]: Operator[] } = {
    text: ['equals', 'not_equals', 'contains', 'starts_with', 'ends_with'],
    number: ['equals', 'not_equals', 'gt', 'lt', 'gte', 'lte'],
    date: ['equals', 'not_equals', 'gt', 'lt', 'gte', 'lte'],
    select: ['equals', 'not_equals'],
};

const generateId = () => Math.random().toString(36).substr(2, 9);

export const QueryBuilder: React.FC<QueryBuilderProps> = ({
    fields,
    value,
    onChange,
    className = '',
}) => {
    const [query, setQuery] = useState<RuleGroup>(value || {
        id: generateId(),
        combinator: 'and',
        rules: [],
    });

    useEffect(() => {
        if (value) {
            setQuery(value);
        }
    }, [value]);

    const handleUpdate = (newQuery: RuleGroup) => {
        setQuery(newQuery);
        onChange?.(newQuery);
    };

    const updateRule = (groupId: string, ruleId: string, updates: Partial<Rule>) => {
        const updateGroup = (group: RuleGroup): RuleGroup => {
            if (group.id === groupId) {
                return {
                    ...group,
                    rules: group.rules.map(r => {
                        if ('fieldId' in r && r.id === ruleId) {
                            return { ...r, ...updates } as Rule;
                        }
                        return r;
                    }),
                };
            }
            return {
                ...group,
                rules: group.rules.map(r => {
                    if ('combinator' in r) {
                        return updateGroup(r as RuleGroup);
                    }
                    return r;
                }),
            };
        };
        handleUpdate(updateGroup(query));
    };

    const addRule = (groupId: string) => {
        const updateGroup = (group: RuleGroup): RuleGroup => {
            if (group.id === groupId) {
                const firstField = fields[0];
                return {
                    ...group,
                    rules: [
                        ...group.rules,
                        {
                            id: generateId(),
                            fieldId: firstField.id,
                            operator: OPERATORS_BY_TYPE[firstField.type][0],
                            value: '',
                        },
                    ],
                };
            }
            return {
                ...group,
                rules: group.rules.map(r => {
                    if ('combinator' in r) {
                        return updateGroup(r as RuleGroup);
                    }
                    return r;
                }),
            };
        };
        handleUpdate(updateGroup(query));
    };

    const addGroup = (groupId: string) => {
        const updateGroup = (group: RuleGroup): RuleGroup => {
            if (group.id === groupId) {
                return {
                    ...group,
                    rules: [
                        ...group.rules,
                        {
                            id: generateId(),
                            combinator: 'and',
                            rules: [],
                        },
                    ],
                };
            }
            return {
                ...group,
                rules: group.rules.map(r => {
                    if ('combinator' in r) {
                        return updateGroup(r as RuleGroup);
                    }
                    return r;
                }),
            };
        };
        handleUpdate(updateGroup(query));
    };

    const removeRule = (groupId: string, ruleId: string) => {
        const updateGroup = (group: RuleGroup): RuleGroup => {
            if (group.id === groupId) {
                return {
                    ...group,
                    rules: group.rules.filter(r => !('fieldId' in r && r.id === ruleId)),
                };
            }
            return {
                ...group,
                rules: group.rules.map(r => {
                    if ('combinator' in r) {
                        return updateGroup(r as RuleGroup);
                    }
                    return r;
                }),
            };
        };
        handleUpdate(updateGroup(query));
    };

    const removeGroup = (parentId: string, groupId: string) => {
        const updateGroup = (group: RuleGroup): RuleGroup => {
            if (group.id === parentId) {
                return {
                    ...group,
                    rules: group.rules.filter(r => !('combinator' in r && r.id === groupId)),
                };
            }
            return {
                ...group,
                rules: group.rules.map(r => {
                    if ('combinator' in r) {
                        return updateGroup(r as RuleGroup);
                    }
                    return r;
                }),
            };
        };
        handleUpdate(updateGroup(query));
    };

    const updateCombinator = (groupId: string, combinator: 'and' | 'or') => {
        const updateGroup = (group: RuleGroup): RuleGroup => {
            if (group.id === groupId) {
                return { ...group, combinator };
            }
            return {
                ...group,
                rules: group.rules.map(r => {
                    if ('combinator' in r) {
                        return updateGroup(r as RuleGroup);
                    }
                    return r;
                }),
            };
        };
        handleUpdate(updateGroup(query));
    };

    const renderRule = (rule: Rule, groupId: string) => {
        const field = fields.find(f => f.id === rule.fieldId) || fields[0];
        const availableOperators = OPERATORS_BY_TYPE[field.type] || [];

        return (
            <div key={rule.id} style={{ display: 'flex', gap: tokens.spacing[2], alignItems: 'center', marginBottom: tokens.spacing[2] }}>
                <div style={{ width: '150px' }}>
                    <Select
                        value={rule.fieldId}
                        onValueChange={(value) => {
                            const newField = fields.find(f => f.id === value);
                            updateRule(groupId, rule.id, {
                                fieldId: value,
                                operator: OPERATORS_BY_TYPE[newField?.type || 'text'][0],
                                value: '',
                            });
                        }}
                    >
                        <SelectTrigger>
                            <SelectValue placeholder="Select Field" />
                        </SelectTrigger>
                        <SelectContent>
                            {fields.map(f => (
                                <SelectItem key={f.id} value={f.id}>{f.label}</SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                </div>

                <div style={{ width: '150px' }}>
                    <Select
                        value={rule.operator}
                        onValueChange={(value) => updateRule(groupId, rule.id, { operator: value as Operator })}
                    >
                        <SelectTrigger>
                            <SelectValue placeholder="Operator" />
                        </SelectTrigger>
                        <SelectContent>
                            {availableOperators.map(op => (
                                <SelectItem key={op} value={op}>{OPERATORS[op]}</SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                </div>

                <div style={{ flex: 1 }}>
                    {field.type === 'select' && field.options ? (
                        <Select
                            value={rule.value}
                            onValueChange={(value) => updateRule(groupId, rule.id, { value })}
                        >
                            <SelectTrigger>
                                <SelectValue placeholder="Select Value" />
                            </SelectTrigger>
                            <SelectContent>
                                {field.options.map(opt => (
                                    <SelectItem key={opt.value} value={opt.value}>{opt.label}</SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                    ) : (
                        <Input
                            type={field.type === 'number' ? 'number' : field.type === 'date' ? 'date' : 'text'}
                            value={rule.value}
                            onChange={(e) => updateRule(groupId, rule.id, { value: e.target.value })}
                            placeholder="Value"
                        />
                    )}
                </div>

                <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => removeRule(groupId, rule.id)}
                    style={{ color: 'var(--color-accent-red)' }}
                >
                    ✕
                </Button>
            </div>
        );
    };

    const renderGroup = (group: RuleGroup, parentId?: string) => {
        return (
            <div
                key={group.id}
                style={{
                    padding: tokens.spacing[4],
                    backgroundColor: 'var(--color-background-secondary)',
                    borderRadius: tokens.radius.md,
                    border: `1px solid var(--color-border-primary)`,
                    display: 'flex',
                    flexDirection: 'column',
                    gap: tokens.spacing[2],
                    marginBottom: tokens.spacing[2],
                }}
            >
                <div style={{ display: 'flex', alignItems: 'center', gap: tokens.spacing[2], marginBottom: tokens.spacing[2] }}>
                    <div style={{ display: 'flex', backgroundColor: 'var(--color-background-primary)', borderRadius: tokens.radius.sm, padding: '2px', border: '1px solid var(--color-border-secondary)' }}>
                        <button
                            onClick={() => updateCombinator(group.id, 'and')}
                            style={{
                                padding: '4px 12px',
                                border: 'none',
                                background: group.combinator === 'and' ? 'var(--color-accent-blue)' : 'transparent',
                                color: group.combinator === 'and' ? '#fff' : 'var(--color-text-secondary)',
                                borderRadius: tokens.radius.sm,
                                cursor: 'pointer',
                                fontSize: tokens.typography.fontSize.xs,
                                fontWeight: 'bold',
                            }}
                        >
                            AND
                        </button>
                        <button
                            onClick={() => updateCombinator(group.id, 'or')}
                            style={{
                                padding: '4px 12px',
                                border: 'none',
                                background: group.combinator === 'or' ? 'var(--color-accent-blue)' : 'transparent',
                                color: group.combinator === 'or' ? '#fff' : 'var(--color-text-secondary)',
                                borderRadius: tokens.radius.sm,
                                cursor: 'pointer',
                                fontSize: tokens.typography.fontSize.xs,
                                fontWeight: 'bold',
                            }}
                        >
                            OR
                        </button>
                    </div>

                    <div style={{ flex: 1 }}></div>

                    <Button variant="outline" size="sm" onClick={() => addRule(group.id)}>+ Rule</Button>
                    <Button variant="outline" size="sm" onClick={() => addGroup(group.id)}>+ Group</Button>
                    {parentId && (
                        <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => removeGroup(parentId, group.id)}
                            style={{ color: 'var(--color-accent-red)' }}
                        >
                            Remove Group
                        </Button>
                    )}
                </div>

                {group.rules.map(ruleOrGroup => {
                    if ('combinator' in ruleOrGroup) {
                        return renderGroup(ruleOrGroup as RuleGroup, group.id);
                    }
                    return renderRule(ruleOrGroup as Rule, group.id);
                })}
            </div>
        );
    };

    return (
        <div className={`query-builder ${className}`}>
            {renderGroup(query)}
        </div>
    );
};
