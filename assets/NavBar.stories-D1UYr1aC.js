import{j as a}from"./jsx-runtime-u17CrQMm.js";import{N as i,a as o,b as t,c as r,d as c}from"./NavBar-CoOoyyDq.js";import{B as s}from"./Button-DGE0rp2O.js";import"./proxy-b22VB84a.js";import"./iframe-Cb93e_Z8.js";import"./preload-helper-PPVm8Dsz.js";const p={title:"Navigation/NavBar",component:i,tags:[],argTypes:{variant:{control:"select",options:["default","glass","transparent"]},sticky:{control:"boolean"}}},n={args:{children:a.jsxs(a.Fragment,{children:[a.jsx(o,{href:"/",children:a.jsx("span",{children:"Brand"})}),a.jsxs(t,{align:"center",children:[a.jsx(r,{active:!0,href:"#",children:"Home"}),a.jsx(r,{href:"#",children:"Products"}),a.jsx(r,{href:"#",children:"About"}),a.jsx(r,{href:"#",children:"Contact"})]}),a.jsxs(t,{align:"right",children:[a.jsx(c,{}),a.jsx(s,{variant:"ghost",children:"Sign In"}),a.jsx(s,{variant:"primary",children:"Sign Up"})]})]})}},e={args:{variant:"glass",children:a.jsxs(a.Fragment,{children:[a.jsx(o,{href:"/",children:a.jsx("span",{children:"Glass Brand"})}),a.jsxs(t,{align:"right",children:[a.jsx(r,{active:!0,href:"#",children:"Home"}),a.jsx(r,{href:"#",children:"About"})]})]})}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    children: <>
                <NavBarBrand href="/">
                    <span>Brand</span>
                </NavBarBrand>
                <NavBarContent align="center">
                    <NavBarItem active href="#">Home</NavBarItem>
                    <NavBarItem href="#">Products</NavBarItem>
                    <NavBarItem href="#">About</NavBarItem>
                    <NavBarItem href="#">Contact</NavBarItem>
                </NavBarContent>
                <NavBarContent align="right">
                    <NavBarSeparator />
                    <Button variant="ghost">Sign In</Button>
                    <Button variant="primary">Sign Up</Button>
                </NavBarContent>
            </>
  }
}`,...n.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'glass',
    children: <>
                <NavBarBrand href="/">
                    <span>Glass Brand</span>
                </NavBarBrand>
                <NavBarContent align="right">
                    <NavBarItem active href="#">Home</NavBarItem>
                    <NavBarItem href="#">About</NavBarItem>
                </NavBarContent>
            </>
  }
}`,...e.parameters?.docs?.source}}};const N=["Default","Glass"];export{n as Default,e as Glass,N as __namedExportsOrder,p as default};
