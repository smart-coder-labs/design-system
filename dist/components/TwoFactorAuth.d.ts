import React from 'react';
export interface TwoFactorAuthProps extends React.HTMLAttributes<HTMLDivElement> {
    onVerify?: (code: string) => void | Promise<void>;
    onResend?: () => void;
    method?: 'sms' | 'email' | 'app';
    recipient?: string;
    isLoading?: boolean;
    error?: string;
    className?: string;
}
export declare const TwoFactorAuth: React.ForwardRefExoticComponent<TwoFactorAuthProps & React.RefAttributes<HTMLDivElement>>;
//# sourceMappingURL=TwoFactorAuth.d.ts.map