interface PortfolioAsset {
    id: string;
    name: string;
    value: number;
    color: string;
    percentage?: number;
    change?: number;
}


interface PortfolioDistributionProps {
    assets: PortfolioAsset[];
    totalLabel?: string;
    currency?: string;
    locale?: string;
    size?: number;
    className?: string;
}
