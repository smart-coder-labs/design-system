interface AutomationRule {
    amount: number;
    asset: string;
    frequency: 'daily' | 'weekly' | 'biweekly' | 'monthly';
}


interface RecurringInvestConfiguratorProps {
    className?: string;
    onSave?: (rule: AutomationRule) => void;
}
