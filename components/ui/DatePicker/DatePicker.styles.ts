/* ========================================
   DATEPICKER - STYLES
   ======================================== */

export const datePickerContainerStyles = 'relative w-full';

export const inputContainerStyles = 'relative';

export const calendarContainerStyles = `
  absolute z-50 mt-2 p-4 rounded-2xl
  bg-surface-primary border border-border-primary shadow-xl
`;

export const calendarGridStyles = 'grid grid-cols-7 gap-1';

export const dayCellStyles = `
  w-10 h-10 flex items-center justify-center rounded-lg
  text-sm font-medium transition-apple
  hover:bg-surface-secondary cursor-pointer
`;

export const dayCellSelectedStyles = 'bg-accent-blue text-white';

export const dayCellTodayStyles = 'font-bold border border-accent-blue';