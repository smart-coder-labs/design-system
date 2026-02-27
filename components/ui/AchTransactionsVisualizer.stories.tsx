import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { AchTransactionsVisualizer } from './AchTransactionsVisualizer';

const meta = {
    title: 'Fintech/AchTransactionsVisualizer',
    component: AchTransactionsVisualizer,
    parameters: {
        layout: 'padded',
        docs: {
            description: {
                component: "A premium, accessible component to view complex ACH transactions. Includes expandable rows for details, fees, and a history timeline.",
            },
        },
    },
    tags: ['autodocs'],
} satisfies Meta<typeof AchTransactionsVisualizer>;

export default meta;
type Story = StoryObj<typeof meta>;

// Sample data injected from the prompt
const mockData = [
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
    },
    {
        "id": "6983d29cafd43080a2aaac7a",
        "employerId": "6965815ea2944c128b9bcabe",
        "policyId": "69658160a2944c128b9bcf13",
        "carrierId": "60a2b8b92a45b8e4019d3f2e",
        "amount": 290.10,
        "currency": "USD",
        "type": "DEBIT",
        "description": "Audit Premium Adjustment",
        "status": "PENDING",
        "bankAccountId": "696aa757e7e59970df2918a6",
        "accountType": "checking",
        "effectiveDate": "2026-02-06T23:13:32.409Z",
        "routingNumber": "122000247",
        "accountNumberLast4": "4362",
        "requestedAt": "2026-02-04T23:13:32.429Z",
        "achServiceStatus": null,
        "retryCount": 0,
        "traceNumber": null,
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
        "fees": [],
        "history": [
            {
                "id": "h_6",
                "transactionId": "6983d29cafd43080a2aaac7a",
                "status": "PENDING",
                "action": "INITIATE",
                "payload": {},
                "reason": "Audit adjustment created",
                "changedBy": "admin_user",
                "changedAt": "2026-02-04T23:13:32.429Z"
            }
        ]
    },
    {
        "id": "697e38b6950f0b3d0d4a401b",
        "employerId": "6965815ea2944c128b9bcabe",
        "policyId": "69658160a2944c128b9bcf13",
        "carrierId": "60a2b8b92a45b8e4019d3f2e",
        "amount": 1000.00,
        "currency": "USD",
        "type": "DEBIT",
        "description": "Initial Down Payment",
        "status": "UPLOADED",
        "bankAccountId": "696aa757e7e59970df2918a6",
        "accountType": "checking",
        "effectiveDate": "2026-02-02T17:15:34.102Z",
        "routingNumber": "122000247",
        "accountNumberLast4": "4362",
        "requestedAt": "2026-01-31T17:15:34.435Z",
        "achServiceStatus": null,
        "retryCount": 0,
        "traceNumber": "987654329734661",
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
                "id": "f_3",
                "totalFeeInDollars": 0.50,
                "description": "Standard ACH Fee",
                "feeId": "FEE_ACH_STD"
            }
        ],
        "history": [
             {
                "id": "h_7",
                "transactionId": "697e38b6950f0b3d0d4a401b",
                "status": "PENDING",
                "action": "INITIATE",
                "payload": {},
                "reason": "Policy bound - initial payment",
                "changedBy": "user_123",
                "changedAt": "2026-01-31T17:15:34.435Z"
            },
            {
                "id": "h_8",
                "transactionId": "697e38b6950f0b3d0d4a401b",
                "status": "UPLOADED",
                "action": "BATCH_SENT",
                "payload": {},
                "reason": "Included in daily batch #4910",
                "changedBy": "system",
                "changedAt": "2026-02-01T17:00:00.000Z"
            }
        ]
    }
];

export const Default: Story = {
    args: {
        title: "ACH Transactions",
        transactions: mockData,
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
        transactions: [mockData[1]], // Just the completed one for focused view
    },
};

export const ErroredTransactions: Story = {
    args: {
        title: "ACH Transactions",
        transactions: [mockData[0]], // Details of the failed one
    },
};
