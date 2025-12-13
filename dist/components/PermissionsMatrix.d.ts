import React from 'react';
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
    rolePermissions: {
        [roleId: string]: string[];
    };
    onChange?: (roleId: string, permissionIds: string[]) => void;
    className?: string;
}
export declare const PermissionsMatrix: React.FC<PermissionsMatrixProps>;
//# sourceMappingURL=PermissionsMatrix.d.ts.map