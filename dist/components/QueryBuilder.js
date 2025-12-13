import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useEffect } from 'react';
import { tokens } from '../tokens';
import { Button } from './Button';
import { Input } from './Input';
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from './Select';
const OPERATORS = {
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
const OPERATORS_BY_TYPE = {
    text: ['equals', 'not_equals', 'contains', 'starts_with', 'ends_with'],
    number: ['equals', 'not_equals', 'gt', 'lt', 'gte', 'lte'],
    date: ['equals', 'not_equals', 'gt', 'lt', 'gte', 'lte'],
    select: ['equals', 'not_equals'],
};
const generateId = () => Math.random().toString(36).substr(2, 9);
export const QueryBuilder = ({ fields, value, onChange, className = '', }) => {
    const [query, setQuery] = useState(value || {
        id: generateId(),
        combinator: 'and',
        rules: [],
    });
    useEffect(() => {
        if (value) {
            setQuery(value);
        }
    }, [value]);
    const handleUpdate = (newQuery) => {
        setQuery(newQuery);
        onChange?.(newQuery);
    };
    const updateRule = (groupId, ruleId, updates) => {
        const updateGroup = (group) => {
            if (group.id === groupId) {
                return {
                    ...group,
                    rules: group.rules.map(r => {
                        if ('fieldId' in r && r.id === ruleId) {
                            return { ...r, ...updates };
                        }
                        return r;
                    }),
                };
            }
            return {
                ...group,
                rules: group.rules.map(r => {
                    if ('combinator' in r) {
                        return updateGroup(r);
                    }
                    return r;
                }),
            };
        };
        handleUpdate(updateGroup(query));
    };
    const addRule = (groupId) => {
        const updateGroup = (group) => {
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
                        return updateGroup(r);
                    }
                    return r;
                }),
            };
        };
        handleUpdate(updateGroup(query));
    };
    const addGroup = (groupId) => {
        const updateGroup = (group) => {
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
                        return updateGroup(r);
                    }
                    return r;
                }),
            };
        };
        handleUpdate(updateGroup(query));
    };
    const removeRule = (groupId, ruleId) => {
        const updateGroup = (group) => {
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
                        return updateGroup(r);
                    }
                    return r;
                }),
            };
        };
        handleUpdate(updateGroup(query));
    };
    const removeGroup = (parentId, groupId) => {
        const updateGroup = (group) => {
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
                        return updateGroup(r);
                    }
                    return r;
                }),
            };
        };
        handleUpdate(updateGroup(query));
    };
    const updateCombinator = (groupId, combinator) => {
        const updateGroup = (group) => {
            if (group.id === groupId) {
                return { ...group, combinator };
            }
            return {
                ...group,
                rules: group.rules.map(r => {
                    if ('combinator' in r) {
                        return updateGroup(r);
                    }
                    return r;
                }),
            };
        };
        handleUpdate(updateGroup(query));
    };
    const renderRule = (rule, groupId) => {
        const field = fields.find(f => f.id === rule.fieldId) || fields[0];
        const availableOperators = OPERATORS_BY_TYPE[field.type] || [];
        return (_jsxs("div", { style: { display: 'flex', gap: tokens.spacing[2], alignItems: 'center', marginBottom: tokens.spacing[2] }, children: [_jsx("div", { style: { width: '150px' }, children: _jsxs(Select, { value: rule.fieldId, onValueChange: (value) => {
                            const newField = fields.find(f => f.id === value);
                            updateRule(groupId, rule.id, {
                                fieldId: value,
                                operator: OPERATORS_BY_TYPE[newField?.type || 'text'][0],
                                value: '',
                            });
                        }, children: [_jsx(SelectTrigger, { children: _jsx(SelectValue, { placeholder: "Select Field" }) }), _jsx(SelectContent, { children: fields.map(f => (_jsx(SelectItem, { value: f.id, children: f.label }, f.id))) })] }) }), _jsx("div", { style: { width: '150px' }, children: _jsxs(Select, { value: rule.operator, onValueChange: (value) => updateRule(groupId, rule.id, { operator: value }), children: [_jsx(SelectTrigger, { children: _jsx(SelectValue, { placeholder: "Operator" }) }), _jsx(SelectContent, { children: availableOperators.map(op => (_jsx(SelectItem, { value: op, children: OPERATORS[op] }, op))) })] }) }), _jsx("div", { style: { flex: 1 }, children: field.type === 'select' && field.options ? (_jsxs(Select, { value: rule.value, onValueChange: (value) => updateRule(groupId, rule.id, { value }), children: [_jsx(SelectTrigger, { children: _jsx(SelectValue, { placeholder: "Select Value" }) }), _jsx(SelectContent, { children: field.options.map(opt => (_jsx(SelectItem, { value: opt.value, children: opt.label }, opt.value))) })] })) : (_jsx(Input, { type: field.type === 'number' ? 'number' : field.type === 'date' ? 'date' : 'text', value: rule.value, onChange: (e) => updateRule(groupId, rule.id, { value: e.target.value }), placeholder: "Value" })) }), _jsx(Button, { variant: "ghost", size: "sm", onClick: () => removeRule(groupId, rule.id), style: { color: 'var(--color-accent-red)' }, children: "\u2715" })] }, rule.id));
    };
    const renderGroup = (group, parentId) => {
        return (_jsxs("div", { style: {
                padding: tokens.spacing[4],
                backgroundColor: 'var(--color-background-secondary)',
                borderRadius: tokens.radius.md,
                border: `1px solid var(--color-border-primary)`,
                display: 'flex',
                flexDirection: 'column',
                gap: tokens.spacing[2],
                marginBottom: tokens.spacing[2],
            }, children: [_jsxs("div", { style: { display: 'flex', alignItems: 'center', gap: tokens.spacing[2], marginBottom: tokens.spacing[2] }, children: [_jsxs("div", { style: { display: 'flex', backgroundColor: 'var(--color-background-primary)', borderRadius: tokens.radius.sm, padding: '2px', border: '1px solid var(--color-border-secondary)' }, children: [_jsx("button", { onClick: () => updateCombinator(group.id, 'and'), style: {
                                        padding: '4px 12px',
                                        border: 'none',
                                        background: group.combinator === 'and' ? 'var(--color-accent-blue)' : 'transparent',
                                        color: group.combinator === 'and' ? '#fff' : 'var(--color-text-secondary)',
                                        borderRadius: tokens.radius.sm,
                                        cursor: 'pointer',
                                        fontSize: tokens.typography.fontSize.xs,
                                        fontWeight: 'bold',
                                    }, children: "AND" }), _jsx("button", { onClick: () => updateCombinator(group.id, 'or'), style: {
                                        padding: '4px 12px',
                                        border: 'none',
                                        background: group.combinator === 'or' ? 'var(--color-accent-blue)' : 'transparent',
                                        color: group.combinator === 'or' ? '#fff' : 'var(--color-text-secondary)',
                                        borderRadius: tokens.radius.sm,
                                        cursor: 'pointer',
                                        fontSize: tokens.typography.fontSize.xs,
                                        fontWeight: 'bold',
                                    }, children: "OR" })] }), _jsx("div", { style: { flex: 1 } }), _jsx(Button, { variant: "outline", size: "sm", onClick: () => addRule(group.id), children: "+ Rule" }), _jsx(Button, { variant: "outline", size: "sm", onClick: () => addGroup(group.id), children: "+ Group" }), parentId && (_jsx(Button, { variant: "ghost", size: "sm", onClick: () => removeGroup(parentId, group.id), style: { color: 'var(--color-accent-red)' }, children: "Remove Group" }))] }), group.rules.map(ruleOrGroup => {
                    if ('combinator' in ruleOrGroup) {
                        return renderGroup(ruleOrGroup, group.id);
                    }
                    return renderRule(ruleOrGroup, group.id);
                })] }, group.id));
    };
    return (_jsx("div", { className: `query-builder ${className}`, children: renderGroup(query) }));
};
//# sourceMappingURL=QueryBuilder.js.map