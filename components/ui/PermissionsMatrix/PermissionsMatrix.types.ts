interface Role {
    id: string;
    name: string;
    description?: string;
}


interface Permission {
    id: string;
    name: string;
    description?: string;
    category?: string;
}


interface PermissionsMatrixProps {
    roles: Role[];
    permissions: Permission[];
    rolePermissions: { [roleId: string]: string[] };