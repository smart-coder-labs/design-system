import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { AchTransactionsVisualizer, VisualizerTransaction } from './AchTransactionsVisualizer';
import { Building2, Calendar, CreditCard, FileText, Hash, ShieldAlert, ShieldCheck, Activity } from 'lucide-react';

const meta = {
    title: 'Fintech/AchTransactionsVisualizer',
    component: AchTransactionsVisualizer,
    parameters: {
        layout: 'padded',
        docs: {
            description: {
                component: "A premium, accessible component to view complex ACH transactions. Completely customizable layout letting consumers choose exactly what to render for detail properties, fees and history.",
            },
        },
    },
    tags: ['autodocs'],
} satisfies Meta<typeof AchTransactionsVisualizer>;

export default meta;
type Story = StoryObj<typeof meta>;

// Helper to format date in stories
const formatDate = (dateStr: string) => {
    return new Intl.DateTimeFormat('en-US', {
        month: 'short', day: 'numeric', year: 'numeric',
        hour: '2-digit', minute: '2-digit'
    }).format(new Date(dateStr));
};

// Raw data injected from GraphQL
const rawData = [
    {
        "id": "699ce385437670de7502c7be",
        "employerId": "",
        "policyId": "",
        "carrierId": "6998f0832f481007a2b35a8b",
        "amount": 1,
        "currency": "USD",
        "type": "CREDIT",
        "description": "Carrier Payout - Feb 2024",
        "status": "FAILED",
        "bankAccountId": "696aa6c5e7e59970df291682",
        "accountType": "checking",
        "effectiveDate": "2026-02-25T23:32:17.575Z",
        "routingNumber": "123000220",
        "accountNumberLast4": "5863",
        "requestedAt": "2026-02-23T23:32:21.002Z",
        "achServiceStatus": null,
        "retryCount": 0,
        "traceNumber": null,
        "errorMessage": "Insufficient funds in carrier account.",
        "employer": {
            "_id": "6965815ea2944c128b9bcabe",
            "business_name": "LUMBER INC"
        },
        "carrier": {
            "_id": "6998f0832f481007a2b35a8b",
            "carrier_name": "Hartford"
        },
        "policy": {
            "_id": "69658160a2944c128b9bcf13",
            "policy_number": "WC99812"
        },
        "bankAccount": {
            "_id": "696aa6c5e7e59970df291682",
            "name": "Bank of America"
        },
        "fees": [
            {
                "id": "f_1",
                "totalFeeInDollars": 2.50,
                "description": "ACH Return Item Fee",
                "feeId": "FEE_RET_ACH"
            }
        ],
        "history": [
            {
                "id": "h_1",
                "transactionId": "699ce385437670de7502c7be",
                "status": "UPLOADED",
                "action": "CREATE",
                "payload": {},
                "reason": "Sent to clearing house",
                "changedBy": "system",
                "changedAt": "2026-02-23T23:35:21.002Z"
            },
            {
                "id": "h_2",
                "transactionId": "699ce385437670de7502c7be",
                "status": "FAILED",
                "action": "BANK_REJECT",
                "payload": {},
                "reason": "R01 Insufficient Funds",
                "changedBy": "bank_webhook",
                "changedAt": "2026-02-25T14:32:17.575Z"
            }
        ]
    },
    {
        "id": "6983d67d5a284ada3d751167",
        "employerId": "6965815ea2944c128b9bcabe",
        "policyId": "69658160a2944c128b9bcf13",
        "carrierId": "60a2b8b92a45b8e4019d3f2e",
        "amount": 10560.10,
        "currency": "USD",
        "type": "DEBIT",
        "description": "Workers Comp Premium - Feb 2026",
        "status": "COMPLETED",
        "bankAccountId": "696aa757e7e59970df2918a6",
        "accountType": "checking",
        "effectiveDate": "2026-02-06T23:30:05.563Z",
        "routingNumber": "122000247",
        "accountNumberLast4": "4362",
        "requestedAt": "2026-02-04T23:30:05.586Z",
        "achServiceStatus": null,
        "retryCount": 0,
        "traceNumber": "063100277805603",
        "errorMessage": null,
        "employer": {
            "_id": "6965815ea2944c128b9bcabe",
            "business_name": "BEE THE QUEEN INC"
        },
        "carrier": {
            "_id": "60a2b8b92a45b8e4019d3f2e",
            "carrier_name": "CopperPoint"
        },
        "policy": {
            "_id": "69658160a2944c128b9bcf13",
            "policy_number": "WC1029352"
        },
        "bankAccount": {
            "_id": "696aa757e7e59970df2918a6",
            "name": "Wells Fargo Bank"
        },
        "fees": [
            {
                "id": "f_2",
                "totalFeeInDollars": 0.50,
                "description": "Standard ACH Fee",
                "feeId": "FEE_ACH_STD"
            }
        ],
        "history": [
            {
                "id": "h_3",
                "transactionId": "6983d67d5a284ada3d751167",
                "status": "PENDING",
                "action": "INITIATE",
                "payload": {},
                "reason": "Scheduled recurring premium",
                "changedBy": "system",
                "changedAt": "2026-02-04T23:30:05.586Z"
            },
            {
                "id": "h_4",
                "transactionId": "6983d67d5a284ada3d751167",
                "status": "UPLOADED",
                "action": "BATCH_SENT",
                "payload": {},
                "reason": "Included in daily batch #4928",
                "changedBy": "system",
                "changedAt": "2026-02-05T17:00:00.000Z"
            },
             {
                "id": "h_5",
                "transactionId": "6983d67d5a284ada3d751167",
                "status": "COMPLETED",
                "action": "SETTLED",
                "payload": {},
                "reason": "Confirmed by bank",
                "changedBy": "bank_webhook",
                "changedAt": "2026-02-06T23:31:05.563Z"
            }
        ]
    }
];

// Mapper Example: Converting GraphQL payload into Visualizer Config
const mapToVisualizer = (data: typeof rawData): VisualizerTransaction[] => {
    return data.map((tx) => {
        return {
            id: tx.id,
            amount: tx.amount,
            currency: tx.currency,
            type: tx.type,
            status: tx.status,
            date: formatDate(tx.effectiveDate),
            title: tx.employer?.business_name || 'System Provider',
            subtitle: `${tx.bankAccount?.name || 'Bank'} (•••${tx.accountNumberLast4})`,
            description: tx.description,
            
            // Customizing the specific details we want to render below
            details: [
                { id: '1', icon: Hash, label: 'Transaction ID', value: <span className="font-mono text-xs">{tx.id}</span> },
                { id: '2', icon: Calendar, label: 'Requested At', value: formatDate(tx.requestedAt) },
                { id: '3', icon: Building2, label: 'Carrier', value: tx.carrier?.carrier_name || '—' },
                { id: '4', icon: ShieldCheck, label: 'Policy Number', value: tx.policy?.policy_number || '—' },
                { id: '5', icon: CreditCard, label: 'Bank Account', value: `${tx.bankAccount?.name} (${tx.accountType})` },
                { id: '6', icon: FileText, label: 'Trace Number', value: tx.traceNumber || '—' },
                ...(tx.errorMessage ? [{
                    id: 'error',
                    icon: ShieldAlert,
                    label: 'Error Message',
                    value: <span className="text-status-error">{tx.errorMessage}</span>,
                    fullWidth: true
                }] : [])
            ],

            // Customizing fees to abstract structure
            fees: tx.fees?.map(f => ({
                id: f.id,
                title: f.description || 'App Fee',
                subtitle: `ID: ${f.feeId}`,
                amount: f.totalFeeInDollars,
            })) || [],

            // Customizing history and timeline events
            history: tx.history?.map(h => {
                let sType: 'default' | 'success' | 'warning' | 'error' | 'info' = 'default';
                if (h.status === 'FAILED') sType = 'error';
                else if (h.status === 'COMPLETED') sType = 'success';
                else if (['PENDING', 'UPLOADED'].includes(h.status)) sType = 'info';

                return {
                    id: h.id,
                    statusType: sType,
                    date: formatDate(h.changedAt),
                    title: `Status: ${h.status}`,
                    description: (
                        <div className="mt-1 space-y-2">
                            {h.action && <span className="inline-block px-2 py-0.5 bg-surface-secondary border border-border-secondary rounded text-[10px] font-bold text-text-primary mr-2 uppercase tracking-wide">{h.action}</span>}
                            {h.reason && <p className="text-sm">Reason: {h.reason}</p>}
                            {h.changedBy && <p className="text-xs text-text-quaternary mt-2">Sys Actor: {h.changedBy}</p>}
                        </div>
                    )
                }
            }) || []
        };
    });
};

const processedData = mapToVisualizer(rawData);

export const Default: Story = {
    args: {
        title: "ACH Transactions",
        transactions: processedData,
        layout: 'list'
    },
};

export const DataGridVariant: Story = {
    args: {
        title: "ACH Transactions (DataGrid View)",
        transactions: processedData,
        layout: 'table',
        tableColumns: [
            {
                key: 'title',
                header: 'Insured / Entity',
                sortable: true,
                render: (_, row) => (
                    <span className="font-bold underline cursor-pointer hover:text-accent-blue">{row.title}</span>
                )
            },
            {
                key: 'description',
                header: 'Description',
                sortable: false,
                render: (_, row) => (
                    <span className="text-text-secondary">{row.description}</span>
                )
            },
            {
                key: 'amount',
                header: 'Amount',
                sortable: true,
                render: (_, row) => {
                    const isCredit = row.type === 'CREDIT';
                    return (
                        <span className={`font-mono font-medium ${isCredit ? 'text-status-success' : 'text-text-primary'}`}>
                            {isCredit ? '+' : '-'}${Math.abs(row.amount).toFixed(2)}
                        </span>
                    );
                }
            },
            {
                key: 'status',
                header: 'Status',
                sortable: true,
                render: (_, row) => (
                    <span className="inline-flex px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wide bg-surface-secondary border border-border-secondary">
                        {row.status}
                    </span>
                )
            }
        ]
    },
};

export const EmptyState: Story = {
    args: {
        title: "ACH Transactions",
        transactions: [],
    },
};

export const SingleTransactionFocus: Story = {
    args: {
        title: "ACH Transactions",
        transactions: [processedData[1]], 
    },
};

export const ErroredTransactions: Story = {
    args: {
        title: "ACH Transactions",
        transactions: [processedData[0]],
    },
};
