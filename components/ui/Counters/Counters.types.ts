export interface CountersItem {
  value: string | number;
  label: string;
  subtitle?: string;
}

export interface CountersProps {
  items: CountersItem[];
  className?: string;
  compact?: boolean;
}