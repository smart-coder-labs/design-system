import React from 'react';

export interface FinancialGoalTrackerProps {
  goalName?: string;
  targetAmount?: number;
  currentAmount?: number;
  icon?: React.ReactNode;
  color?: string;
}