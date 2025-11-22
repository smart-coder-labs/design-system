/**
 * 🍏 Apple Design System - Component Exports
 * 
 * Todos los componentes del design system en un solo lugar
 */

// Tokens y configuración
export { tokens } from './tokens';
export type { Tokens } from './tokens';

// Componentes
export { Button } from './components/Button';
export type { ButtonProps, ButtonVariant, ButtonSize } from './components/Button';

export { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from './components/Card';
export type { CardProps, CardVariant } from './components/Card';

export { Input, Textarea } from './components/Input';
export type { InputProps, TextareaProps } from './components/Input';

export { Modal, ModalHeader, ModalTitle, ModalDescription, ModalContent, ModalFooter, ModalClose, ModalCloseButton } from './components/Modal';
export type { ModalProps } from './components/Modal';

export {
    Dropdown,
    DropdownItem,
    DropdownSeparator,
    DropdownLabel,
    DropdownCheckboxItem,
    DropdownRadioGroup,
    DropdownRadioItem,
} from './components/Dropdown';
export type { DropdownProps } from './components/Dropdown';

export { Tooltip, TooltipProvider } from './components/Tooltip';
export type { TooltipProps } from './components/Tooltip';

export { Tabs, TabsList, TabsTrigger, TabsContent } from './components/Tabs';
export type { TabsProps, TabsListProps, TabsTriggerProps, TabsContentProps } from './components/Tabs';

export { Switch } from './components/Switch';
export type { SwitchProps } from './components/Switch';

export { Badge, NotificationBadge } from './components/Badge';
export type { BadgeProps, BadgeVariant, BadgeSize, NotificationBadgeProps } from './components/Badge';

export { NavBar, NavBarBrand, NavBarContent, NavBarItem, NavBarSeparator } from './components/NavBar';
export type { NavBarProps, NavBarBrandProps, NavBarContentProps, NavBarItemProps } from './components/NavBar';
