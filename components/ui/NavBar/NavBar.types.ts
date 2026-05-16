interface NavBarProps {
  children: React.ReactNode;
  variant?: 'default' | 'glass' | 'transparent';
  sticky?: boolean;
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
