import{j as r}from"./jsx-runtime-u17CrQMm.js";import{C as o,a as t,b as d,c as l,d as i,e as c}from"./Card-Bi9XUbhW.js";import{B as C}from"./Button-DwkrxhSZ.js";import"./iframe-Dan5ncgG.js";import"./preload-helper-PPVm8Dsz.js";import"./proxy-DCTGQFKY.js";import"./resolve-elements-juiWZL7b.js";const T={title:"Data Display/Card",component:o,tags:[],argTypes:{variant:{control:"select",options:["elevated","glass","outlined","flat"]},hoverable:{control:"boolean"},padding:{control:"select",options:["none","sm","md","lg"]}}},a={args:{children:r.jsxs(r.Fragment,{children:[r.jsxs(t,{children:[r.jsx(d,{children:"Card Title"}),r.jsx(l,{children:"Card description goes here"})]}),r.jsx(i,{children:r.jsx("p",{children:"Card content..."})}),r.jsx(c,{children:r.jsx(C,{children:"Action"})})]}),variant:"elevated"}},e={args:{children:r.jsxs(r.Fragment,{children:[r.jsx(t,{children:r.jsx(d,{children:"Glass Card"})}),r.jsx(i,{children:r.jsx("p",{children:"This is a glass card."})})]}),variant:"glass",hoverable:!0}},n={args:{children:r.jsxs(r.Fragment,{children:[r.jsx(t,{children:r.jsx(d,{children:"Outlined Card"})}),r.jsx(i,{children:r.jsx("p",{children:"This is an outlined card."})})]}),variant:"outlined"}},s={args:{children:r.jsxs(r.Fragment,{children:[r.jsx(t,{children:r.jsx(d,{children:"Flat Card"})}),r.jsx(i,{children:r.jsx("p",{children:"This is a flat card."})})]}),variant:"flat"}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    children: <>
                <CardHeader>
                    <CardTitle>Card Title</CardTitle>
                    <CardDescription>Card description goes here</CardDescription>
                </CardHeader>
                <CardContent>
                    <p>Card content...</p>
                </CardContent>
                <CardFooter>
                    <Button>Action</Button>
                </CardFooter>
            </>,
    variant: 'elevated'
  }
}`,...a.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    children: <>
                <CardHeader>
                    <CardTitle>Glass Card</CardTitle>
                </CardHeader>
                <CardContent>
                    <p>This is a glass card.</p>
                </CardContent>
            </>,
    variant: 'glass',
    hoverable: true
  }
}`,...e.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    children: <>
                <CardHeader>
                    <CardTitle>Outlined Card</CardTitle>
                </CardHeader>
                <CardContent>
                    <p>This is an outlined card.</p>
                </CardContent>
            </>,
    variant: 'outlined'
  }
}`,...n.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    children: <>
                <CardHeader>
                    <CardTitle>Flat Card</CardTitle>
                </CardHeader>
                <CardContent>
                    <p>This is a flat card.</p>
                </CardContent>
            </>,
    variant: 'flat'
  }
}`,...s.parameters?.docs?.source}}};const v=["Elevated","Glass","Outlined","Flat"];export{a as Elevated,s as Flat,e as Glass,n as Outlined,v as __namedExportsOrder,T as default};
