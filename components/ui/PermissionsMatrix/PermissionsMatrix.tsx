import React from 'react';

import { Checkbox } from './Checkbox';

export interface Role {
    id: string;
    name: string;
    description?: string;
}

export interface Permission {
    id: string;
    name: string;
    description?: string;
    category?: string;
}

export interface PermissionsMatrixProps {
    roles: Role[];
    permissions: Permission[];
    rolePermissions: { [roleId: string]: string[] };
    onChange?: (roleId: string, permissionIds: string[]) => void;
    className?: string;
}

export const PermissionsMatrix: React.FC<PermissionsMatrixProps> = ({
    roles,
    permissions,
    rolePermissions,
    onChange,
    className = '',
}) => {
    const groupedPermissions = permissions.reduce((acc, perm) => {
        const category = perm.category || 'General';
        if (!acc[category]) acc[category] = [];
        acc[category].push(perm);
        return acc;
    }, {} as { [category: string]: Permission[] });

    const categories = Object.keys(groupedPermissions);

    const handleToggle = (roleId: string, permissionId: string, checked: boolean) => {
        if (!onChange) return;
        const currentPermissions = rolePermissions[roleId] || [];
        let newPermissions;
        if (checked) {
            newPermissions = [...currentPermissions, permissionId];
        } else {
            newPermissions = currentPermissions.filter(id => id !== permissionId);
        }
        onChange(roleId, newPermissions);
    };

    const handleToggleCategory = (roleId: string, category: string, checked: boolean) => {
        if (!onChange) return;
        const categoryPermIds = groupedPermissions[category].map(p => p.id);
        const currentPermissions = rolePermissions[roleId] || [];

        let newPermissions;
        if (checked) {
            const toAdd = categoryPermIds.filter(id => !currentPermissions.includes(id));
            newPermissions = [...currentPermissions, ...toAdd];
        } else {
            newPermissions = currentPermissions.filter(id => !categoryPermIds.includes(id));
        }
        onChange(roleId, newPermissions);
    };

    return (
        <div className={className} style={{ overflowX: 'auto', border: `1px solid var(--color-border-primary)`, borderRadius: '8px', backgroundColor: 'var(--color-background-primary)' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: '800px' }}>
                <thead>
                    <tr style={{ backgroundColor: 'var(--color-background-secondary)', borderBottom: `1px solid var(--color-border-primary)` }}>
                        <th style={{ padding: '16px', textAlign: 'left', width: '300px', color: 'var(--color-text-primary)' }}>Permission</th>
                        {roles.map(role => (
                            <th key={role.id} style={{ padding: '16px', textAlign: 'center', minWidth: '120px' }}>
                                <div style={{ fontWeight: '700', color: 'var(--color-text-primary)' }}>{role.name}</div>
                                {role.description && (
                                    <div style={{ fontSize: '12px', color: 'var(--color-text-tertiary)', fontWeight: 'normal', marginTop: '4px' }}>
                                        {role.description}
                                    </div>
                                )}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {categories.map(category => (
                        <React.Fragment key={category}>
                            <tr style={{ backgroundColor: 'var(--color-background-tertiary)', borderBottom: `1px solid var(--color-border-secondary)` }}>
                                <td style={{ padding: `${'8px'} ${'16px'}`, fontWeight: '700', color: 'var(--color-text-secondary)', fontSize: '13px' }}>
                                    {category}
                                </td>
                                {roles.map(role => {
                                    const categoryPermIds = groupedPermissions[category].map(p => p.id);
                                    const rolePerms = rolePermissions[role.id] || [];
                                    const allChecked = categoryPermIds.length > 0 && categoryPermIds.every(id => rolePerms.includes(id));

                                    return (
                                        <td key={role.id} style={{ textAlign: 'center', padding: '8px' }}>
                                            <div style={{ display: 'flex', justifyContent: 'center' }}>
                                                <Checkbox
                                                    checked={allChecked}
                                                    onCheckedChange={(checked) => handleToggleCategory(role.id, category, checked as boolean)}
                                                />
                                            </div>
                                        </td>
                                    );
                                })}
                            </tr>
                            {groupedPermissions[category].map(permission => (
                                <tr key={permission.id} style={{ borderBottom: `1px solid var(--color-border-secondary)` }}>
                                    <td style={{ padding: '12px', paddingLeft: '32px' }}>
                                        <div style={{ fontWeight: '500', color: 'var(--color-text-primary)' }}>{permission.name}</div>
                                        {permission.description && (
                                            <div style={{ fontSize: '12px', color: 'var(--color-text-tertiary)', marginTop: '2px' }}>
                                                {permission.description}
                                            </div>
                                        )}
                                    </td>
                                    {roles.map(role => {
                                        const isChecked = (rolePermissions[role.id] || []).includes(permission.id);
                                        return (
                                            <td key={role.id} style={{ textAlign: 'center', padding: '12px' }}>
                                                <div style={{ display: 'flex', justifyContent: 'center' }}>
                                                    <Checkbox
                                                        checked={isChecked}
                                                        onCheckedChange={(checked) => handleToggle(role.id, permission.id, checked as boolean)}
                                                    />
                                                </div>
                                            </td>
                                        );
                                    })}
                                </tr>
                            ))}
                        </React.Fragment>
                    ))}
                </tbody>
            </table>
        </div>
    );
};
