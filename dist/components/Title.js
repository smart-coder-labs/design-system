import { jsx as _jsx } from "react/jsx-runtime";
const levelStyles = {
    1: 'text-5xl md:text-6xl leading-tight tracking-tight',
    2: 'text-4xl md:text-5xl leading-tight tracking-tight',
    3: 'text-3xl md:text-4xl leading-snug',
    4: 'text-2xl md:text-3xl leading-snug',
    5: 'text-xl md:text-2xl leading-normal',
    6: 'text-lg md:text-xl leading-normal',
};
const weightStyles = {
    normal: 'font-normal',
    medium: 'font-medium',
    semibold: 'font-semibold',
    bold: 'font-bold',
    black: 'font-black',
};
const alignStyles = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right',
};
const colorStyles = {
    primary: 'text-text-primary',
    secondary: 'text-text-secondary',
    tertiary: 'text-text-tertiary',
    inverse: 'text-text-inverse',
    accent: 'text-accent-blue',
    success: 'text-status-success',
    warning: 'text-status-warning',
    error: 'text-status-error',
};
export const Title = ({ level = 1, weight = 'bold', align = 'left', color = 'primary', gradient = false, truncate = false, as, className = '', children, ...props }) => {
    const Component = as || `h${level}`;
    const combinedClassName = `
    ${levelStyles[level]}
    ${weightStyles[weight]}
    ${alignStyles[align]}
    ${gradient ? 'bg-gradient-to-r from-accent-blue to-purple-600 text-white px-3 py-1 rounded-lg inline-block' : colorStyles[color]}
    ${truncate ? 'truncate' : ''}
    ${className}
  `.trim().replace(/\s+/g, ' ');
    return (_jsx(Component, { className: combinedClassName, ...props, children: children }));
};
Title.displayName = 'Title';
export default Title;
//# sourceMappingURL=Title.js.map