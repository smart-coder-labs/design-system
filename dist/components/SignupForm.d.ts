import React from 'react';
export interface SignupFormProps extends Omit<React.HTMLAttributes<HTMLFormElement>, 'onSubmit'> {
    onSubmit?: (data: {
        name: string;
        email: string;
        password: string;
        confirmPassword: string;
        acceptTerms: boolean;
    }) => void | Promise<void>;
    isLoading?: boolean;
    error?: string;
    className?: string;
}
export declare const SignupForm: React.ForwardRefExoticComponent<SignupFormProps & React.RefAttributes<HTMLFormElement>>;
//# sourceMappingURL=SignupForm.d.ts.map