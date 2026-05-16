/* ========================================
   BANK ACCOUNT CARD - STYLES
   ======================================== */

import type { AccountType } from './BankAccountCard.types';

export const cardContainerStyles = `
  relative overflow-hidden rounded-2xl p-6 cursor-pointer select-none
  bg-gradient-to-br text-white
  shadow-lg hover:shadow-xl transition-shadow duration-300
`;

export const cardGradientStyles: Record<AccountType, string> = {
    checking: 'from-blue-600 to-blue-800',
    savings: 'from-emerald-600 to-emerald-800',
    credit: 'from-violet-600 to-violet-800',
    investment: 'from-amber-600 to-amber-800',
};

export const accountTypeLabelStyles = 'text-xs font-medium text-white/60 uppercase tracking-wider';

export const accountNameStyles = 'text-sm font-bold text-white/90 mt-0.5';

export const iconContainerStyles = `
  flex items-center justify-center w-10 h-10 rounded-xl
  bg-white/10 backdrop-blur-sm
`;

export const balanceLabelStyles = 'text-xs font-medium text-white/50 mb-1';

export const balanceValueStyles = 'text-3xl font-bold tracking-tight';

export const balanceHiddenStyles = '••••••';

export const visibilityButtonStyles = `
  w-8 h-8 rounded-full bg-white/10 flex items-center justify-center
  hover:bg-white/20 transition-apple
`;

export const accountNumberLabelStyles = 'text-[10px] font-medium text-white/40 uppercase tracking-wider mb-0.5';

export const accountNumberStyles = 'text-sm font-mono text-white/70';

export const copyButtonStyles = `
  flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-apple
`;

export const copyButtonCopiedStyles = 'bg-white/20 text-white';

export const copyButtonDefaultStyles = 'bg-white/10 text-white/70 hover:bg-white/15';

export const decorativeCircleTopStyles = 'absolute -top-16 -right-16 w-48 h-48 rounded-full bg-white/[0.07]';

export const decorativeCircleBottomStyles = 'absolute -bottom-12 -left-12 w-36 h-36 rounded-full bg-white/[0.05]';