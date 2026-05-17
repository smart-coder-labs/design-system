// Main component
export { SearchInput } from './SearchInput';
export { searchInputVariants } from './SearchInput.types';
export type { SearchInputProps, SearchInputComponent } from './SearchInput';

// Compound components - import from separate files
export { SearchInputInput } from './SearchInput.input';
export { SearchInputDropdown } from './SearchInput.dropdown';
export { SearchInputSection } from './SearchInput.section';
export { SearchInputItem } from './SearchInput.item';
export { SearchInputItemContent } from './SearchInput.itemContent';
export { SearchInputTrailingBadge } from './SearchInput.trailingBadge';
export { SearchInputItemIcon } from './SearchInput.itemIcon';

// Compound component types
export type {
    SearchInputInputProps,
    SearchInputDropdownProps,
    SearchInputSectionProps,
    SearchInputItemProps,
    SearchInputItemContentProps,
    SearchInputTrailingBadgeProps,
    SearchInputItemIconProps,
    SearchInputContextValue,
} from './SearchInput.types';