import{j as e}from"./jsx-runtime-u17CrQMm.js";import{T as r}from"./Text-Dhy74_-M.js";const b={title:"Typography/Text",component:r,parameters:{layout:"centered",docs:{description:{component:"A versatile text component for body copy, small text, and other text content. Supports multiple variants, weights, colors, and text utilities."}}},tags:[]},t={args:{children:"This is body text. It uses the default variant and styling for regular paragraph content."}},a={args:{variant:"lead",children:"This is lead text. It's larger and used for introductory paragraphs or important content."}},i={args:{variant:"small",children:"This is small text. Perfect for captions, labels, or secondary information."}},s={args:{variant:"tiny",children:"This is tiny text. Used for metadata, timestamps, or fine print."}},o={render:()=>e.jsxs("div",{className:"space-y-4",children:[e.jsx(r,{weight:"normal",children:"Normal weight text"}),e.jsx(r,{weight:"medium",children:"Medium weight text"}),e.jsx(r,{weight:"semibold",children:"Semibold weight text"}),e.jsx(r,{weight:"bold",children:"Bold weight text"})]})},n={render:()=>e.jsxs("div",{className:"space-y-4 bg-background-primary p-8 rounded-xl",children:[e.jsx(r,{color:"primary",children:"Primary color text"}),e.jsx(r,{color:"secondary",children:"Secondary color text"}),e.jsx(r,{color:"tertiary",children:"Tertiary color text"}),e.jsx(r,{color:"quaternary",children:"Quaternary color text"}),e.jsx(r,{color:"accent",children:"Accent color text"}),e.jsx(r,{color:"success",children:"Success color text"}),e.jsx(r,{color:"warning",children:"Warning color text"}),e.jsx(r,{color:"error",children:"Error color text"})]})},d={render:()=>e.jsxs("div",{className:"space-y-4 w-96",children:[e.jsx(r,{align:"left",children:"Left aligned text"}),e.jsx(r,{align:"center",children:"Center aligned text"}),e.jsx(r,{align:"right",children:"Right aligned text"}),e.jsx(r,{align:"justify",children:"Justified text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."})]})},c={args:{italic:!0,children:"This text is italicized for emphasis or quotes."}},l={args:{underline:!0,children:"This text is underlined."}},m={render:()=>e.jsx("div",{className:"w-64",children:e.jsx(r,{truncate:!0,children:"This is a very long text that will be truncated with an ellipsis when it exceeds the container width"})})},x={render:()=>e.jsxs("div",{className:"w-96 space-y-6",children:[e.jsxs("div",{children:[e.jsx("p",{className:"text-sm font-semibold text-text-secondary mb-2",children:"Line Clamp 2:"}),e.jsx(r,{lineClamp:2,children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."})]}),e.jsxs("div",{children:[e.jsx("p",{className:"text-sm font-semibold text-text-secondary mb-2",children:"Line Clamp 3:"}),e.jsx(r,{lineClamp:3,children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."})]})]})},p={render:()=>e.jsxs("p",{children:["This is a paragraph with ",e.jsx(r,{as:"span",color:"accent",weight:"semibold",children:"inline text"})," that uses the Text component as a span element."]})},u={render:()=>e.jsxs("div",{className:"space-y-6 max-w-2xl",children:[e.jsxs("div",{children:[e.jsx("p",{className:"text-xs font-semibold text-text-tertiary uppercase tracking-wide mb-2",children:"Lead"}),e.jsx(r,{variant:"lead",children:"The quick brown fox jumps over the lazy dog. This is lead text used for introductions."})]}),e.jsxs("div",{children:[e.jsx("p",{className:"text-xs font-semibold text-text-tertiary uppercase tracking-wide mb-2",children:"Body"}),e.jsx(r,{variant:"body",children:"The quick brown fox jumps over the lazy dog. This is body text used for regular content."})]}),e.jsxs("div",{children:[e.jsx("p",{className:"text-xs font-semibold text-text-tertiary uppercase tracking-wide mb-2",children:"Small"}),e.jsx(r,{variant:"small",children:"The quick brown fox jumps over the lazy dog. This is small text used for captions."})]}),e.jsxs("div",{children:[e.jsx("p",{className:"text-xs font-semibold text-text-tertiary uppercase tracking-wide mb-2",children:"Tiny"}),e.jsx(r,{variant:"tiny",children:"The quick brown fox jumps over the lazy dog. This is tiny text used for metadata."})]})]})},h={render:()=>e.jsxs("div",{className:"max-w-2xl space-y-6 bg-surface-primary p-8 rounded-2xl border border-border-primary",children:[e.jsx("div",{children:e.jsx(r,{variant:"lead",weight:"semibold",color:"primary",children:"Welcome to our Design System"})}),e.jsxs("div",{className:"space-y-4",children:[e.jsx(r,{variant:"body",color:"secondary",children:"Our design system provides a comprehensive set of components and guidelines to help you build beautiful, consistent user interfaces. Each component is carefully crafted with attention to detail and follows Apple's design principles."}),e.jsx(r,{variant:"body",color:"secondary",children:"Whether you're building a web application, mobile app, or desktop software, our components will help you create experiences that users love."})]}),e.jsxs("div",{className:"flex items-center gap-2 pt-4 border-t border-border-primary",children:[e.jsx(r,{variant:"small",color:"tertiary",children:"Last updated:"}),e.jsx(r,{variant:"small",color:"accent",weight:"medium",children:"November 24, 2024"})]})]})},g={parameters:{backgrounds:{default:"dark"}},decorators:[y=>e.jsx("div",{className:"dark",children:e.jsx(y,{})})],render:()=>e.jsxs("div",{className:"space-y-4 bg-background-primary p-8 rounded-xl",children:[e.jsx(r,{variant:"lead",weight:"bold",children:"Dark Mode Typography"}),e.jsx(r,{color:"primary",children:"Primary text in dark mode"}),e.jsx(r,{color:"secondary",children:"Secondary text in dark mode"}),e.jsx(r,{color:"tertiary",children:"Tertiary text in dark mode"}),e.jsx(r,{color:"accent",children:"Accent text in dark mode"})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'This is body text. It uses the default variant and styling for regular paragraph content.'
  }
}`,...t.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'lead',
    children: "This is lead text. It's larger and used for introductory paragraphs or important content."
  }
}`,...a.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'small',
    children: 'This is small text. Perfect for captions, labels, or secondary information.'
  }
}`,...i.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'tiny',
    children: 'This is tiny text. Used for metadata, timestamps, or fine print.'
  }
}`,...s.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => <div className="space-y-4">
            <Text weight="normal">Normal weight text</Text>
            <Text weight="medium">Medium weight text</Text>
            <Text weight="semibold">Semibold weight text</Text>
            <Text weight="bold">Bold weight text</Text>
        </div>
}`,...o.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: () => <div className="space-y-4 bg-background-primary p-8 rounded-xl">
            <Text color="primary">Primary color text</Text>
            <Text color="secondary">Secondary color text</Text>
            <Text color="tertiary">Tertiary color text</Text>
            <Text color="quaternary">Quaternary color text</Text>
            <Text color="accent">Accent color text</Text>
            <Text color="success">Success color text</Text>
            <Text color="warning">Warning color text</Text>
            <Text color="error">Error color text</Text>
        </div>
}`,...n.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => <div className="space-y-4 w-96">
            <Text align="left">Left aligned text</Text>
            <Text align="center">Center aligned text</Text>
            <Text align="right">Right aligned text</Text>
            <Text align="justify">
                Justified text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Text>
        </div>
}`,...d.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    italic: true,
    children: 'This text is italicized for emphasis or quotes.'
  }
}`,...c.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    underline: true,
    children: 'This text is underlined.'
  }
}`,...l.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => <div className="w-64">
            <Text truncate>
                This is a very long text that will be truncated with an ellipsis when it exceeds the container width
            </Text>
        </div>
}`,...m.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: () => <div className="w-96 space-y-6">
            <div>
                <p className="text-sm font-semibold text-text-secondary mb-2">Line Clamp 2:</p>
                <Text lineClamp={2}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </Text>
            </div>
            <div>
                <p className="text-sm font-semibold text-text-secondary mb-2">Line Clamp 3:</p>
                <Text lineClamp={3}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                </Text>
            </div>
        </div>
}`,...x.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => <p>
            This is a paragraph with <Text as="span" color="accent" weight="semibold">inline text</Text> that uses the Text component as a span element.
        </p>
}`,...p.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => <div className="space-y-6 max-w-2xl">
            <div>
                <p className="text-xs font-semibold text-text-tertiary uppercase tracking-wide mb-2">Lead</p>
                <Text variant="lead">
                    The quick brown fox jumps over the lazy dog. This is lead text used for introductions.
                </Text>
            </div>
            <div>
                <p className="text-xs font-semibold text-text-tertiary uppercase tracking-wide mb-2">Body</p>
                <Text variant="body">
                    The quick brown fox jumps over the lazy dog. This is body text used for regular content.
                </Text>
            </div>
            <div>
                <p className="text-xs font-semibold text-text-tertiary uppercase tracking-wide mb-2">Small</p>
                <Text variant="small">
                    The quick brown fox jumps over the lazy dog. This is small text used for captions.
                </Text>
            </div>
            <div>
                <p className="text-xs font-semibold text-text-tertiary uppercase tracking-wide mb-2">Tiny</p>
                <Text variant="tiny">
                    The quick brown fox jumps over the lazy dog. This is tiny text used for metadata.
                </Text>
            </div>
        </div>
}`,...u.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => <div className="max-w-2xl space-y-6 bg-surface-primary p-8 rounded-2xl border border-border-primary">
            <div>
                <Text variant="lead" weight="semibold" color="primary">
                    Welcome to our Design System
                </Text>
            </div>
            <div className="space-y-4">
                <Text variant="body" color="secondary">
                    Our design system provides a comprehensive set of components and guidelines to help you build beautiful, consistent user interfaces. Each component is carefully crafted with attention to detail and follows Apple's design principles.
                </Text>
                <Text variant="body" color="secondary">
                    Whether you're building a web application, mobile app, or desktop software, our components will help you create experiences that users love.
                </Text>
            </div>
            <div className="flex items-center gap-2 pt-4 border-t border-border-primary">
                <Text variant="small" color="tertiary">
                    Last updated:
                </Text>
                <Text variant="small" color="accent" weight="medium">
                    November 24, 2024
                </Text>
            </div>
        </div>
}`,...h.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  parameters: {
    backgrounds: {
      default: 'dark'
    }
  },
  decorators: [Story => <div className="dark">
                <Story />
            </div>],
  render: () => <div className="space-y-4 bg-background-primary p-8 rounded-xl">
            <Text variant="lead" weight="bold">Dark Mode Typography</Text>
            <Text color="primary">Primary text in dark mode</Text>
            <Text color="secondary">Secondary text in dark mode</Text>
            <Text color="tertiary">Tertiary text in dark mode</Text>
            <Text color="accent">Accent text in dark mode</Text>
        </div>
}`,...g.parameters?.docs?.source}}};const f=["Body","Lead","Small","Tiny","Weights","Colors","Alignment","Italic","Underline","Truncate","LineClamp","AsSpan","AllVariants","RealWorldExample","DarkMode"];export{d as Alignment,u as AllVariants,p as AsSpan,t as Body,n as Colors,g as DarkMode,c as Italic,a as Lead,x as LineClamp,h as RealWorldExample,i as Small,s as Tiny,m as Truncate,l as Underline,o as Weights,f as __namedExportsOrder,b as default};
