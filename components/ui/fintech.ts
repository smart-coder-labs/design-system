/**
 * Fintech Component Catalog
 * Core banking & financial services UI components
 * 
 * Categories:
 * - KYC & Onboarding
 * - Account Management & Dashboard
 * - Money Movement (Payments)
 * - Card Management
 * - Investments & Data Visualization
 * - Dashboard Preview
 */

// KYC & Onboarding
export { SecurityOTPInput } from './SecurityOTPInput';
export type { SecurityOTPInputProps, OTPStatus } from './SecurityOTPInput';

export { IdentityVerificationStep } from './IdentityVerificationStep';
export type { IdentityVerificationStepProps, DocumentSlot, DocumentType, VerificationStatus } from './IdentityVerificationStep';

export { BiometricPrompt } from './BiometricPrompt';
export type { BiometricPromptProps, BiometricType, BiometricStatus } from './BiometricPrompt';

// Account Management & Dashboard
export { BankAccountCard } from './BankAccountCard';
export type { BankAccountCardProps, AccountType } from './BankAccountCard';

export { TransactionList, TransactionRow } from './TransactionList';
export type { TransactionListProps, TransactionRowProps, Transaction, TransactionType, TransactionStatus, TransactionCategory } from './TransactionList';

export { BalanceChart } from './BalanceChart';
export type { BalanceChartProps } from './BalanceChart';

// Money Movement
export { QuickTransferBar } from './QuickTransferBar';
export type { QuickTransferBarProps, QuickContact } from './QuickTransferBar';

export { TransferForm } from './TransferForm';
export type { TransferFormProps, TransferRecipient, CurrencyOption } from './TransferForm';

export { PaymentConfirmationModal } from './PaymentConfirmationModal';
export type { PaymentConfirmationModalProps, PaymentConfirmationData } from './PaymentConfirmationModal';

// Card Management
export { VirtualCardPreview } from './VirtualCardPreview';
export type { VirtualCardPreviewProps, CardBrand } from './VirtualCardPreview';

export { CardSecurityControls } from './CardSecurityControls';
export type { CardSecurityControlsProps, CardControl } from './CardSecurityControls';

export { CashbackWidget } from './CashbackWidget';
export type { CashbackWidgetProps } from './CashbackWidget';

// Investments & Data Visualization
export { PortfolioDistribution } from './PortfolioDistribution';
export type { PortfolioDistributionProps, PortfolioAsset } from './PortfolioDistribution';

export { AssetPriceTicker } from './AssetPriceTicker';
export type { AssetPriceTickerProps, AssetPrice } from './AssetPriceTicker';

// Dashboard Preview
export { FintechDashboardPreview } from './FintechDashboardPreview';
export type { FintechDashboardPreviewProps } from './FintechDashboardPreview';

// FX & International Payments
export { CurrencyConverterWidget } from './CurrencyConverterWidget';
export type { CurrencyConverterWidgetProps } from './CurrencyConverterWidget';

export { MultiCurrencyWallet } from './MultiCurrencyWallet';
export type { MultiCurrencyWalletProps, WalletBalance } from './MultiCurrencyWallet';

export { FairUseLimitTracker } from './FairUseLimitTracker';
export type { FairUseLimitTrackerProps, LimitCategory } from './FairUseLimitTracker';

// Credit & BNPL
export { CreditLimitManager } from './CreditLimitManager';
export type { CreditLimitManagerProps } from './CreditLimitManager';

export { InstallmentSimulator } from './InstallmentSimulator';
export type { InstallmentSimulatorProps } from './InstallmentSimulator';

export { EarlyPaymentDiscount } from './EarlyPaymentDiscount';
export type { EarlyPaymentDiscountProps } from './EarlyPaymentDiscount';

// Social & P2P Payments
export { InteractiveBillSplitter } from './InteractiveBillSplitter';
export type { InteractiveBillSplitterProps, SplitContact } from './InteractiveBillSplitter';

export { SocialPaymentFeed } from './SocialPaymentFeed';
export type { SocialPaymentFeedProps, SocialPaymentInfo } from './SocialPaymentFeed';

export { PeerTagInput } from './PeerTagInput';
export type { PeerTagInputProps, PeerTagContact } from './PeerTagInput';

// Wealth & Crypto
export { RetailSwapInterface } from './RetailSwapInterface';
export type { RetailSwapInterfaceProps, CryptoAsset } from './RetailSwapInterface';

export { RecurringInvestConfigurator } from './RecurringInvestConfigurator';
export type { RecurringInvestConfiguratorProps, AutomationRule } from './RecurringInvestConfigurator';

export { AssetAllocationChart } from './AssetAllocationChart';
export type { AssetAllocationChartProps, AllocationAsset } from './AssetAllocationChart';
