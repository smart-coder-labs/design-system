"use client";
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { cn } from '../../lib/utils';
import {
    Home, CreditCard, ArrowLeftRight, BarChart3, Settings,
    Bell, Search, Plus
} from 'lucide-react';

import { BankAccountCard } from './BankAccountCard';
import { TransactionList, type Transaction } from './TransactionList';
import { BalanceChart } from './BalanceChart';
import { QuickTransferBar, type QuickContact } from './QuickTransferBar';
import { VirtualCardPreview } from './VirtualCardPreview';
import { CardSecurityControls } from './CardSecurityControls';
import { CashbackWidget } from './CashbackWidget';
import { PortfolioDistribution, type PortfolioAsset } from './PortfolioDistribution';
import { AssetPriceTicker, type AssetPrice } from './AssetPriceTicker';

/* ========================================
   MOCK DATA
   ======================================== */

const mockTransactions: Transaction[] = [
    { id: '1', title: 'Starbucks Coffee', description: 'Av. Reforma 222', amount: 89.50, type: 'expense', category: 'food', status: 'completed', date: 'Today, 10:30 AM' },
    { id: '2', title: 'Salary Deposit', description: 'Acme Corp.', amount: 45000, type: 'income', category: 'work', status: 'completed', date: 'Today, 8:00 AM' },
    { id: '3', title: 'Netflix', description: 'Monthly subscription', amount: 299, type: 'expense', category: 'utilities', status: 'completed', date: 'Yesterday' },
    { id: '4', title: 'Transfer to Ana', description: 'Rent split', amount: 5000, type: 'expense', category: 'transfer', status: 'pending', date: 'Yesterday' },
    { id: '5', title: 'Amazon Purchase', description: 'Electronics', amount: 1250, type: 'expense', category: 'shopping', status: 'completed', date: 'Feb 22' },
    { id: '6', title: 'Freelance Payment', description: 'Design project', amount: 12000, type: 'income', category: 'work', status: 'completed', date: 'Feb 21' },
];

const mockContacts: QuickContact[] = [
    { id: '1', name: 'Ana García', initials: 'AG' },
    { id: '2', name: 'Carlos Medina', initials: 'CM' },
    { id: '3', name: 'Laura Pérez', initials: 'LP' },
    { id: '4', name: 'Miguel Torres', initials: 'MT' },
    { id: '5', name: 'Sofia Ruiz', initials: 'SR' },
    { id: '6', name: 'Diego López', initials: 'DL' },
];

const mockBalanceData = [
    { label: 'Mon', value: 42500 },
    { label: 'Tue', value: 43200 },
    { label: 'Wed', value: 41800 },
    { label: 'Thu', value: 44500 },
    { label: 'Fri', value: 45000 },
    { label: 'Sat', value: 44200 },
    { label: 'Sun', value: 46800 },
];

const mockPortfolio: PortfolioAsset[] = [
    { id: '1', name: 'Stocks', value: 28500, color: '#007AFF', change: 3.2 },
    { id: '2', name: 'Crypto', value: 12000, color: '#FF9500', change: -1.8 },
    { id: '3', name: 'Bonds', value: 8000, color: '#34C759', change: 0.5 },
    { id: '4', name: 'Real Estate', value: 15000, color: '#AF52DE', change: 1.1 },
    { id: '5', name: 'Cash', value: 5000, color: '#8E8E93', change: 0 },
];

const mockAssets: AssetPrice[] = [
    { id: '1', symbol: 'BTC', name: 'Bitcoin', price: 97234.50, change: 2.34, type: 'crypto', icon: '₿' },
    { id: '2', symbol: 'ETH', name: 'Ethereum', price: 3456.12, change: -0.56, type: 'crypto', icon: 'Ξ' },
    { id: '3', symbol: 'USD/MXN', name: 'Dollar/Peso', price: 17.15, change: 0.12, type: 'forex', icon: '🇲🇽' },
    { id: '4', symbol: 'AAPL', name: 'Apple Inc.', price: 245.80, change: 1.45, type: 'stock', icon: '🍎' },
    { id: '5', symbol: 'TSLA', name: 'Tesla', price: 312.50, change: -2.10, type: 'stock', icon: '⚡' },
];

/* ========================================
   TYPES
   ======================================== */

type DashboardTab = 'home' | 'cards' | 'transfers' | 'invest' | 'settings';

export interface FintechDashboardPreviewProps {
    userName?: string;
    className?: string;
}

/* ========================================
   COMPONENT
   ======================================== */

export const FintechDashboardPreview: React.FC<FintechDashboardPreviewProps> = ({
    userName = 'Carlos',
    className = '',
}) => {
    const [activeTab, setActiveTab] = useState<DashboardTab>('home');

    const tabs: { id: DashboardTab; label: string; icon: React.ReactNode }[] = [
        { id: 'home', label: 'Home', icon: <Home className="w-5 h-5" /> },
        { id: 'cards', label: 'Cards', icon: <CreditCard className="w-5 h-5" /> },
        { id: 'transfers', label: 'Send', icon: <ArrowLeftRight className="w-5 h-5" /> },
        { id: 'invest', label: 'Invest', icon: <BarChart3 className="w-5 h-5" /> },
        { id: 'settings', label: 'More', icon: <Settings className="w-5 h-5" /> },
    ];

    return (
        <div className={cn(
            'w-full max-w-[1200px] mx-auto bg-background-primary min-h-screen',
            className,
        )}>
            {/* ===== TOP BAR ===== */}
            <header className="sticky top-0 z-30 glass border-b border-border-secondary px-6 py-4">
                <div className="flex items-center justify-between">
                    <div>
                        <p className="text-xs text-text-tertiary">Good morning,</p>
                        <h1 className="text-lg font-bold text-text-primary">{userName} 👋</h1>
                    </div>
                    <div className="flex items-center gap-2">
                        <button className="w-9 h-9 rounded-full bg-surface-secondary flex items-center justify-center text-text-secondary hover:text-text-primary transition-apple focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-blue">
                            <Search className="w-4 h-4" />
                        </button>
                        <button className="relative w-9 h-9 rounded-full bg-surface-secondary flex items-center justify-center text-text-secondary hover:text-text-primary transition-apple">
                            <Bell className="w-4 h-4" />
                            <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-status-error rounded-full" />
                        </button>
                    </div>
                </div>
            </header>

            {/* ===== CONTENT ===== */}
            <main className="px-6 py-6 pb-24 space-y-6">
                {/* Asset price ticker */}
                <AssetPriceTicker assets={mockAssets} compact />

                {activeTab === 'home' && (
                    <motion.div
                        className="space-y-6"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.3 }}
                    >
                        {/* Account card */}
                        <BankAccountCard
                            accountName="Personal Checking"
                            accountType="checking"
                            balance={46800}
                            currency="MXN"
                            locale="es-MX"
                            clabeOrIban="012180001234567891"
                        />

                        {/* Balance chart */}
                        <BalanceChart
                            data={mockBalanceData}
                            currency="MXN"
                            locale="es-MX"
                            title="Balance — Last 7 Days"
                        />

                        {/* Quick transfer */}
                        <QuickTransferBar contacts={mockContacts} />

                        {/* Transactions */}
                        <TransactionList
                            transactions={mockTransactions}
                            currency="MXN"
                            locale="es-MX"
                        />
                    </motion.div>
                )}

                {activeTab === 'cards' && (
                    <motion.div
                        className="space-y-6"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.3 }}
                    >
                        <div className="flex justify-center">
                            <VirtualCardPreview
                                cardholderName="Carlos Medina"
                                cardNumber="4242 4242 4242 8421"
                                expiryDate="09/28"
                                cvv="314"
                                brand="visa"
                                gradient="dark"
                                balance={46800}
                                currency="MXN"
                            />
                        </div>
                        <CashbackWidget earned={342.50} total={500} currency="MXN" percentage={3.5} />
                        <CardSecurityControls />
                    </motion.div>
                )}

                {activeTab === 'transfers' && (
                    <motion.div
                        className="space-y-6"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.3 }}
                    >
                        <QuickTransferBar contacts={mockContacts} />
                        <TransactionList
                            transactions={mockTransactions.filter(t => t.category === 'transfer')}
                            title="Transfer History"
                            currency="MXN"
                            locale="es-MX"
                        />
                    </motion.div>
                )}

                {activeTab === 'invest' && (
                    <motion.div
                        className="space-y-6"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.3 }}
                    >
                        <PortfolioDistribution
                            assets={mockPortfolio}
                            currency="MXN"
                            locale="es-MX"
                        />
                        <AssetPriceTicker assets={mockAssets} layout="vertical" />
                    </motion.div>
                )}
            </main>

            {/* ===== BOTTOM NAV ===== */}
            <nav className="fixed bottom-0 left-0 right-0 z-40 glass border-t border-border-secondary">
                <div className="max-w-[1200px] mx-auto flex items-center justify-around py-2 px-4">
                    {tabs.map((tab) => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={cn(
                                'flex flex-col items-center gap-0.5 px-3 py-1.5 rounded-xl transition-apple focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-blue',
                                activeTab === tab.id
                                    ? 'text-accent-blue'
                                    : 'text-text-tertiary hover:text-text-secondary',
                            )}
                        >
                            {tab.icon}
                            <span className="text-[10px] font-semibold">{tab.label}</span>
                            {activeTab === tab.id && (
                                <motion.div
                                    className="absolute -bottom-0.5 w-5 h-0.5 bg-accent-blue rounded-full"
                                    layoutId="tab-indicator"
                                    transition={{ type: 'spring', stiffness: 500, damping: 35 }}
                                />
                            )}
                        </button>
                    ))}
                </div>
            </nav>
        </div>
    );
};

FintechDashboardPreview.displayName = 'FintechDashboardPreview';
export default FintechDashboardPreview;
