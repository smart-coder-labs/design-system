/* ========================================
   ASSET ALLOCATION CHART - TYPES
   ======================================== */

export type RiskLevel = 'low' | 'medium' | 'high';

export interface AllocationAsset {
    id: string;
    name: string;
    ticker: string;
    value: number;
    color: string;
    riskLevel: RiskLevel;
}

export interface AssetAllocationChartProps {
    assets: AllocationAsset[];
    currency?: string;
    className?: string;
}