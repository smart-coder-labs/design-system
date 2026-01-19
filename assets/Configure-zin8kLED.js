import{j as n}from"./jsx-runtime-u17CrQMm.js";import{useMDXComponents as o}from"./index-CRDcZPS7.js";import{M as i}from"./blocks-BA66o24d.js";import"./iframe-vYzePaRW.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BJIm5mAp.js";import"./index-DweI-fs8.js";function r(s){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",hr:"hr",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...s.components};return n.jsxs(n.Fragment,{children:[n.jsx(i,{title:"Design System Overview"}),`
`,n.jsx("img",{src:"/header.png",alt:"SmartCoder Design System",className:"w-full block m-0 p-0"}),`
`,n.jsx(e.h1,{id:"smartcoder-design-system",children:"SmartCoder Design System"}),`
`,n.jsx(e.p,{children:"A catalog of reusable frontend components for high‑quality interfaces."}),`
`,n.jsx(e.p,{children:"Tokens, components, and utilities for building consistent React applications — fully documented in Storybook."}),`
`,n.jsx("br",{}),`
`,n.jsx(e.h2,{id:"-foundations",children:"🎨 Foundations"}),`
`,n.jsx(e.h3,{id:"colors",children:"Colors"}),`
`,n.jsxs(e.p,{children:["The system ships with a ",n.jsx(e.strong,{children:"dark‑mode ready"})," palette built on HSL values for easy theming. Primary, secondary, neutrals, and semantic colors are defined as CSS variables in ",n.jsx(e.code,{children:"src/tokens/colors.css"}),"."]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-css",children:`:root {
  --ds-color-primary: hsl(220, 90%, 55%);
  --ds-color-primary-dark: hsl(220, 90%, 45%);
  --ds-color-background: hsl(210, 10%, 98%);
  --ds-color-background-dark: hsl(210, 10%, 10%);
}
`})}),`
`,n.jsx(e.h3,{id:"typography",children:"Typography"}),`
`,n.jsxs(e.p,{children:["We use ",n.jsx(e.strong,{children:"Inter"})," as the primary typeface, loaded via Google Fonts. The token file ",n.jsx(e.code,{children:"src/tokens/typography.css"})," defines a clear hierarchy:"]}),`
`,n.jsx(e.p,{children:`| Token | Font‑size | Line‑height | Weight |
|-------|-----------|-------------|--------|
| --ds-font‑h1 | 2.5rem | 1.2 | 700 |
| --ds-font‑h2 | 2rem | 1.3 | 600 |
| --ds-font‑body | 1rem | 1.5 | 400 |`}),`
`,n.jsx(e.h3,{id:"spacing--layout",children:"Spacing & Layout"}),`
`,n.jsxs(e.p,{children:["A ",n.jsx(e.strong,{children:"8‑point grid"})," powers all margins, paddings, and component gaps. Tokens are exposed as ",n.jsx(e.code,{children:"--ds-space‑1"})," … ",n.jsx(e.code,{children:"--ds-space‑8"}),"."]}),`
`,n.jsx(e.hr,{}),`
`,n.jsx(e.h2,{id:"-components",children:"🧩 Components"}),`
`,n.jsxs(e.p,{children:["The design system includes a curated set of ",n.jsx(e.strong,{children:"React components"})," that are fully Storybook‑documented:"]}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Button"})," – variants: primary, secondary, ghost, with smooth hover micro‑animations."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Input"})," – text, number (with min/max validation), password, with focus ring."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Card"})," – elevation, glass‑morphism background, responsive layout."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Modal"})," – accessible focus trap, dark‑mode aware."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Grid"})," – flexible 12‑column layout with auto‑responsive breakpoints."]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Icon"})," – SVG sprite system, color‑aware."]}),`
`]}),`
`,n.jsxs(e.p,{children:["Each component lives under ",n.jsx(e.code,{children:"src/components/"})," and follows the ",n.jsx(e.strong,{children:"Atomic Design"})," methodology (atoms → molecules → organisms)."]}),`
`,n.jsx(e.hr,{}),`
`,n.jsx(e.h2,{id:"-tokens--utilities",children:"📦 Tokens & Utilities"}),`
`,n.jsxs(e.p,{children:["All design decisions are exposed as ",n.jsx(e.strong,{children:"CSS‑in‑JS tokens"})," for easy consumption:"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-js",children:`export const colors = {
  primary: "var(--ds-color-primary)",
  background: "var(--ds-color-background)",
  // …
};

export const typography = {
  h1: "var(--ds-font-h1)",
  body: "var(--ds-font-body)",
};
`})}),`
`,n.jsxs(e.p,{children:["Utility classes (e.g., ",n.jsx(e.code,{children:".ds-flex"}),", ",n.jsx(e.code,{children:".ds-center"}),") are generated via a tiny PostCSS plugin, keeping the HTML markup clean while preserving performance."]}),`
`,n.jsx(e.hr,{}),`
`,n.jsx(e.h2,{id:"-usage",children:"🚀 Usage"}),`
`,n.jsxs(e.ol,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Install"})," the package:",`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-bash",children:`npm i @smartcoder/design-system
`})}),`
`]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Import the CSS baseline"})," in your entry point:",`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-js",children:`import "@smartcoder/design-system/dist/base.css";
`})}),`
`]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Start using components"}),":",`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-jsx",children:`import { Button, Card } from "@smartcoder/design-system";

<Card>
  <h2>Welcome</h2>
  <Button variant="primary">Get started</Button>
</Card>
`})}),`
`]}),`
`]}),`
`,n.jsxs(e.p,{children:["The Storybook docs (this page) provide live examples, accessibility checks, and a ",n.jsx(e.strong,{children:"theming playground"})," where you can toggle dark/light mode."]}),`
`,n.jsx(e.hr,{}),`
`,n.jsx(e.h2,{id:"-contributing",children:"🤝 Contributing"}),`
`,n.jsx(e.p,{children:"We welcome contributions! Follow these steps:"}),`
`,n.jsxs(e.ol,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Fork"})," the repo and create a feature branch."]}),`
`,n.jsxs(e.li,{children:["Run ",n.jsx(e.code,{children:"npm install && npm run storybook"})," to see your changes in real time."]}),`
`,n.jsxs(e.li,{children:["Follow the ",n.jsx(e.strong,{children:"component checklist"})," (tests, a11y, docs)."]}),`
`,n.jsx(e.li,{children:"Submit a PR with a clear description and screenshots."}),`
`]}),`
`,n.jsxs(e.p,{children:["All contributions are automatically linted with ",n.jsx(e.strong,{children:"ESLint"}),", ",n.jsx(e.strong,{children:"Prettier"}),", and ",n.jsx(e.strong,{children:"Stylelint"})," to keep the codebase consistent."]}),`
`,n.jsx(e.hr,{}),`
`,n.jsx(e.h2,{id:"-community--support",children:"📞 Community & Support"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"GitHub"})," – https://github.com/smart-coder-labs/design-system"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Gmail"})," – coder4021@gmail.com"]}),`
`]}),`
`,n.jsx(e.p,{children:"Feel free to open an issue, or contribute a new component."}),`
`,n.jsx(e.hr,{}),`
`,n.jsx("style",{children:`
.ds-hero h1 {
  font-family: 'Inter', sans-serif;
  font-weight: 700;
}
.ds-hero p {
  font-family: 'Inter', sans-serif;
  font-weight: 400;
}
`})]})}function m(s={}){const{wrapper:e}={...o(),...s.components};return e?n.jsx(e,{...s,children:n.jsx(r,{...s})}):r(s)}export{m as default};
