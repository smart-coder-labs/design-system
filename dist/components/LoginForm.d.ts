import React from 'react';
export interface LoginFormProps extends Omit<React.HTMLAttributes<HTMLFormElement>, 'onSubmit'> {
    onSubmit?: (data: {
        email: string;
        password: string;
        rememberMe: boolean;
    }) => void | Promise<void>;
    onForgotPassword?: () => void;
    isLoading?: boolean;
    error?: string;
    className?: string;
}
export declare const LoginForm: React.ForwardRefExoticComponent<LoginFormProps & React.RefAttributes<HTMLFormElement>>;
//# sourceMappingURL=LoginForm.d.ts.map