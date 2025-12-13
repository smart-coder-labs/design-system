import { jsx as _jsx } from "react/jsx-runtime";
const variantStyles = {
    lead: 'text-xl leading-relaxed',
    body: 'text-base leading-normal',
    small: 'text-sm leading-normal',
    tiny: 'text-xs leading-tight',
};
const weightStyles = {
    normal: 'font-normal',
    medium: 'font-medium',
    semibold: 'font-semibold',
    bold: 'font-bold',
};
const alignStyles = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right',
    justify: 'text-justify',
};
const colorStyles = {
    primary: 'text-text-primary',
    secondary: 'text-text-secondary',
    tertiary: 'text-text-tertiary',
    quaternary: 'text-text-quaternary',
    inverse: 'text-text-inverse',
    accent: 'text-accent-blue',
    success: 'text-status-success',
    warning: 'text-status-warning',
    error: 'text-status-error',
};
export const Text = ({ variant = 'body', weight = 'normal', align = 'left', color = 'primary', italic = false, underline = false, truncate = false, lineClamp, as: Component = 'p', className = '', children, ...props }) => {
    const combinedClassName = `
    ${variantStyles[variant]}
    ${weightStyles[weight]}
    ${alignStyles[align]}
    ${colorStyles[color]}
    ${italic ? 'italic' : ''}
    ${underline ? 'underline' : ''}
    ${truncate ? 'truncate' : ''}
    ${lineClamp ? `line-clamp-${lineClamp}` : ''}
    ${className}
  `.trim().replace(/\s+/g, ' ');
    return (_jsx(Component, { className: combinedClassName, ...props, children: children }));
};
Text.displayName = 'Text';
export default Text;
//# sourceMappingURL=Text.js.map