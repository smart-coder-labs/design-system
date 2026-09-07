interface NavBarProps {
  children: React.ReactNode;
  variant?: 'default' | 'glass' | 'transparent';
  sticky?: boolean;
  /** Controlled open state of the mobile menu */
  open?: boolean;
  /** Initial open state of the mobile menu (uncontrolled) */
  defaultOpen?: boolean;
  /** Called whenever the mobile menu opens or closes */
  onOpenChange?: (open: boolean) => void;
  className?: string;
}


interface NavBarBrandProps {
  children: React.ReactNode;
  href?: string;
  className?: string;
}


interface NavBarContentProps {
  children: React.ReactNode;
  align?: 'left' | 'center' | 'right';
  className?: string;
}


interface NavBarItemProps {
  children: React.ReactNode;
  active?: boolean;
  href?: string;
  onClick?: () => void;
  className?: string;
}


interface NavBarMobileTriggerProps {
  size?: 'sm' | 'md' | 'lg';
  variant?: 'default' | 'primary' | 'ghost';
  className?: string;
  'aria-label'?: string;
}


interface NavBarMobileMenuProps {
  children: React.ReactNode;
  variant?: 'solid' | 'glass';
  closeOnItemClick?: boolean;
  className?: string;
}
