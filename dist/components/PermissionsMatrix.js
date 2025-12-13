import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from 'react';
import { tokens } from '../tokens';
import { Checkbox } from './Checkbox';
export const PermissionsMatrix = ({ roles, permissions, rolePermissions, onChange, className = '', }) => {
    const groupedPermissions = permissions.reduce((acc, perm) => {
        const category = perm.category || 'General';
        if (!acc[category])
            acc[category] = [];
        acc[category].push(perm);
        return acc;
    }, {});
    const categories = Object.keys(groupedPermissions);
    const handleToggle = (roleId, permissionId, checked) => {
        if (!onChange)
            return;
        const currentPermissions = rolePermissions[roleId] || [];
        let newPermissions;
        if (checked) {
            newPermissions = [...currentPermissions, permissionId];
        }
        else {
            newPermissions = currentPermissions.filter(id => id !== permissionId);
        }
        onChange(roleId, newPermissions);
    };
    const handleToggleCategory = (roleId, category, checked) => {
        if (!onChange)
            return;
        const categoryPermIds = groupedPermissions[category].map(p => p.id);
        const currentPermissions = rolePermissions[roleId] || [];
        let newPermissions;
        if (checked) {
            const toAdd = categoryPermIds.filter(id => !currentPermissions.includes(id));
            newPermissions = [...currentPermissions, ...toAdd];
        }
        else {
            newPermissions = currentPermissions.filter(id => !categoryPermIds.includes(id));
        }
        onChange(roleId, newPermissions);
    };
    return (_jsx("div", { className: className, style: { overflowX: 'auto', border: `1px solid var(--color-border-primary)`, borderRadius: tokens.radius.md, backgroundColor: 'var(--color-background-primary)' }, children: _jsxs("table", { style: { width: '100%', borderCollapse: 'collapse', minWidth: '800px' }, children: [_jsx("thead", { children: _jsxs("tr", { style: { backgroundColor: 'var(--color-background-secondary)', borderBottom: `1px solid var(--color-border-primary)` }, children: [_jsx("th", { style: { padding: tokens.spacing[4], textAlign: 'left', width: '300px', color: 'var(--color-text-primary)' }, children: "Permission" }), roles.map(role => (_jsxs("th", { style: { padding: tokens.spacing[4], textAlign: 'center', minWidth: '120px' }, children: [_jsx("div", { style: { fontWeight: tokens.typography.fontWeight.bold, color: 'var(--color-text-primary)' }, children: role.name }), role.description && (_jsx("div", { style: { fontSize: tokens.typography.fontSize.xs, color: 'var(--color-text-tertiary)', fontWeight: 'normal', marginTop: '4px' }, children: role.description }))] }, role.id)))] }) }), _jsx("tbody", { children: categories.map(category => (_jsxs(React.Fragment, { children: [_jsxs("tr", { style: { backgroundColor: 'var(--color-background-tertiary)', borderBottom: `1px solid var(--color-border-secondary)` }, children: [_jsx("td", { style: { padding: `${tokens.spacing[2]} ${tokens.spacing[4]}`, fontWeight: tokens.typography.fontWeight.bold, color: 'var(--color-text-secondary)', fontSize: tokens.typography.fontSize.sm }, children: category }), roles.map(role => {
                                        const categoryPermIds = groupedPermissions[category].map(p => p.id);
                                        const rolePerms = rolePermissions[role.id] || [];
                                        const allChecked = categoryPermIds.length > 0 && categoryPermIds.every(id => rolePerms.includes(id));
                                        return (_jsx("td", { style: { textAlign: 'center', padding: tokens.spacing[2] }, children: _jsx("div", { style: { display: 'flex', justifyContent: 'center' }, children: _jsx(Checkbox, { checked: allChecked, onCheckedChange: (checked) => handleToggleCategory(role.id, category, checked) }) }) }, role.id));
                                    })] }), groupedPermissions[category].map(permission => (_jsxs("tr", { style: { borderBottom: `1px solid var(--color-border-secondary)` }, children: [_jsxs("td", { style: { padding: tokens.spacing[3], paddingLeft: tokens.spacing[8] }, children: [_jsx("div", { style: { fontWeight: tokens.typography.fontWeight.medium, color: 'var(--color-text-primary)' }, children: permission.name }), permission.description && (_jsx("div", { style: { fontSize: tokens.typography.fontSize.xs, color: 'var(--color-text-tertiary)', marginTop: '2px' }, children: permission.description }))] }), roles.map(role => {
                                        const isChecked = (rolePermissions[role.id] || []).includes(permission.id);
                                        return (_jsx("td", { style: { textAlign: 'center', padding: tokens.spacing[3] }, children: _jsx("div", { style: { display: 'flex', justifyContent: 'center' }, children: _jsx(Checkbox, { checked: isChecked, onCheckedChange: (checked) => handleToggle(role.id, permission.id, checked) }) }) }, role.id));
                                    })] }, permission.id)))] }, category))) })] }) }));
};
//# sourceMappingURL=PermissionsMatrix.js.map