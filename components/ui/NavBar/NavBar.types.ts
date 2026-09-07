interface NavBarProps {
  children: React.ReactNode;
  variant?: 'default' | 'glass' | 'transparent';
  sticky?: boolean;
  open?: boolean;
  defaultOpen?: boolean;
  onOpenChange?: (open: boolean) => void;
  mobileMenuId?: string;
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


interface NavBarMobileToggleProps {
  size?: 'sm' | 'md' | 'lg';
  variant?: 'default' | 'primary' | 'ghost';
  'aria-label'?: string;
  className?: string;
}


interface NavBarMobileMenuProps {
  children: React.ReactNode;
  showBackdrop?: boolean;
  closeOnBackdropClick?: boolean;
  closeOnEscape?: boolean;
  lockScroll?: boolean;
  className?: string;
}


interface NavBarMobileMenuItemProps {
  children: React.ReactNode;
  active?: boolean;
  href?: string;
  onClick?: () => void;
  closeOnClick?: boolean;
  className?: string;
}
