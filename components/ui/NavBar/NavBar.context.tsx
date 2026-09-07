'use client';

import React from 'react';

/* ========================================
   CONTEXT
   ======================================== */

export interface NavBarMobileContextValue {
  /** Whether the mobile menu is currently open */
  open: boolean;
  /** Imperatively set the open state */
  setOpen: (open: boolean) => void;
  /** Toggle the open state */
  toggle: () => void;
  /** id of the mobile menu panel (used for aria-controls) */
  menuId: string;
}

export const NavBarMobileContext =
  React.createContext<NavBarMobileContextValue | null>(null);

export function useNavBarMobile(componentName: string): NavBarMobileContextValue {
  const context = React.useContext(NavBarMobileContext);

  if (!context) {
    throw new Error(`<${componentName}> must be used within <NavBar>`);
  }

  return context;
}
