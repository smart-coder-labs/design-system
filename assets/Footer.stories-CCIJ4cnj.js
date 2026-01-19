import{j as e}from"./jsx-runtime-u17CrQMm.js";import{R as c}from"./iframe-vYzePaRW.js";import{c as d}from"./utils-CDN07tui.js";import{G as u,R as N,C as y}from"./GridSystem-DEp2nnRO.js";import{B as b}from"./Button-Bvw_y_KB.js";import{c as k}from"./createLucideIcon-Ckxz52bH.js";import"./preload-helper-PPVm8Dsz.js";import"./proxy-DMGrdN83.js";const C=[["path",{d:"M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",key:"tonef"}],["path",{d:"M9 18c-4.51 2-5-2-7-2",key:"9comsn"}]],w=k("github",C);const R=[["path",{d:"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",key:"c2jq9f"}],["rect",{width:"4",height:"12",x:"2",y:"9",key:"mk3on5"}],["circle",{cx:"4",cy:"4",r:"2",key:"bt5ra8"}]],A=k("linkedin",R);const I=[["path",{d:"M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z",key:"pff0z6"}]],j=k("twitter",I),a=c.forwardRef(({className:i,children:o,...s},n)=>e.jsx("footer",{ref:n,className:d("w-full bg-surface-secondary border-t border-border-primary pt-12 pb-10",i),...s,children:o}));a.displayName="Footer";const L=c.forwardRef(({className:i,title:o="Acme Inc.",description:s,icon:n,socials:l,...g},v)=>e.jsxs(u,{ref:v,className:d("max-w-3xl flex flex-col items-center text-center mb-12",i),...g,children:[n||e.jsx("div",{className:"w-14 h-14 rounded-full bg-text-primary text-background flex items-center justify-center text-lg font-bold",children:"A"}),e.jsx("h2",{className:"text-xl font-semibold mt-4",children:o}),s&&e.jsx("p",{className:"mt-2 text-sm text-text-secondary max-w-prose",children:s}),l&&e.jsx("div",{className:"flex items-center gap-4 mt-4 text-text-secondary",children:l})]}));L.displayName="FooterTop";const h=c.forwardRef(({className:i,children:o,...s},n)=>e.jsx(u,{as:"div",ref:n,className:d(i),...s,children:e.jsx(N,{className:"justify-between w-full",children:o})}));h.displayName="FooterContent";const t=c.forwardRef(({className:i,title:o,children:s,span:n,...l},g)=>e.jsxs(y,{ref:g,xs:12,md:n||!0,className:d("flex flex-col gap-3 mb-8 md:mb-0",!n&&"md:w-auto md:flex-1",i),...l,children:[o&&e.jsx("h3",{className:"font-semibold text-text-primary text-sm tracking-wide uppercase mb-1",children:o}),e.jsx("div",{className:"flex flex-col gap-2",children:s})]}));t.displayName="FooterColumn";const r=c.forwardRef(({className:i,as:o="a",children:s,...n},l)=>e.jsx(o,{ref:l,className:d("text-sm text-text-secondary hover:text-text-primary transition-colors w-fit",i),...n,children:s}));r.displayName="FooterLink";const m=c.forwardRef(({className:i,children:o,...s},n)=>e.jsx(u,{ref:n,className:d("pt-8 mt-8 border-t border-border-primary flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-text-tertiary",i),...s,children:o}));m.displayName="FooterBottom";a.__docgenInfo={description:"",methods:[],displayName:"Footer",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};L.__docgenInfo={description:"",methods:[],displayName:"FooterTop",props:{title:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"Acme Inc."',computed:!1}},description:{required:!1,tsType:{name:"string"},description:""},icon:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},socials:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};h.__docgenInfo={description:"",methods:[],displayName:"FooterContent",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};t.__docgenInfo={description:"",methods:[],displayName:"FooterColumn",props:{title:{required:!1,tsType:{name:"string"},description:""},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},span:{required:!1,tsType:{name:"number"},description:"Number of columns to span (out of 12). Defaults to auto-sizing (equal width)"}}};r.__docgenInfo={description:"",methods:[],displayName:"FooterLink",props:{as:{required:!1,tsType:{name:"ReactElementType",raw:"React.ElementType"},description:"",defaultValue:{value:"'a'",computed:!1}}}};m.__docgenInfo={description:"",methods:[],displayName:"FooterBottom",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};const q={title:"Layout/Footer",component:a,tags:[],parameters:{layout:"fullscreen"}},x={render:()=>e.jsxs(a,{children:[e.jsxs(h,{children:[e.jsxs(t,{title:"Product",children:[e.jsx(r,{href:"#",children:"Features"}),e.jsx(r,{href:"#",children:"Integrations"}),e.jsx(r,{href:"#",children:"Pricing"}),e.jsx(r,{href:"#",children:"Changelog"}),e.jsx(r,{href:"#",children:"Docs"})]}),e.jsxs(t,{title:"Company",children:[e.jsx(r,{href:"#",children:"About Us"}),e.jsx(r,{href:"#",children:"Careers"}),e.jsx(r,{href:"#",children:"Blog"}),e.jsx(r,{href:"#",children:"Contact"}),e.jsx(r,{href:"#",children:"Partners"})]}),e.jsxs(t,{title:"Resources",children:[e.jsx(r,{href:"#",children:"Community"}),e.jsx(r,{href:"#",children:"Help Center"}),e.jsx(r,{href:"#",children:"Webinars"}),e.jsx(r,{href:"#",children:"Status"})]}),e.jsxs(t,{title:"Legal",children:[e.jsx(r,{href:"#",children:"Privacy"}),e.jsx(r,{href:"#",children:"Terms"}),e.jsx(r,{href:"#",children:"Security"})]})]}),e.jsxs(m,{children:[e.jsx("p",{children:"© 2024 Acme Inc. All rights reserved."}),e.jsxs("div",{className:"flex gap-6",children:[e.jsx(r,{href:"#",children:"Privacy Policy"}),e.jsx(r,{href:"#",children:"Terms of Service"}),e.jsx(r,{href:"#",children:"Cookies Settings"})]})]})]})},f={render:()=>e.jsxs(a,{className:"pt-8",children:[e.jsxs(h,{children:[e.jsx(t,{className:"md:items-start",children:e.jsx("div",{className:"flex items-center gap-2",children:e.jsx("span",{className:"font-bold text-lg",children:"Acme Inc."})})}),e.jsx(t,{className:"md:items-center",children:e.jsxs("div",{className:"flex gap-6",children:[e.jsx(r,{href:"#",children:"About"}),e.jsx(r,{href:"#",children:"Blog"}),e.jsx(r,{href:"#",children:"Careers"}),e.jsx(r,{href:"#",children:"Contact"})]})}),e.jsx(t,{className:"md:items-end",children:e.jsxs("div",{className:"flex gap-4",children:[e.jsx(j,{size:20,className:"text-text-secondary hover:text-text-primary cursor-pointer"}),e.jsx(w,{size:20,className:"text-text-secondary hover:text-text-primary cursor-pointer"})]})})]}),e.jsx(m,{className:"mt-8",children:e.jsx("p",{children:"© 2024 Acme Inc. All rights reserved."})})]})},p={render:()=>e.jsx(a,{className:"py-6 border-t-0 bg-transparent",children:e.jsx(u,{children:e.jsxs("div",{className:"flex flex-col items-center gap-4 text-center",children:[e.jsxs("div",{className:"flex gap-6 text-sm text-text-secondary",children:[e.jsx("a",{href:"#",className:"hover:text-text-primary",children:"Home"}),e.jsx("a",{href:"#",className:"hover:text-text-primary",children:"Profile"}),e.jsx("a",{href:"#",className:"hover:text-text-primary",children:"Settings"})]}),e.jsx("p",{className:"text-xs text-text-tertiary",children:"© 2024 Acme Inc."})]})})})},F={render:()=>e.jsxs(a,{className:"bg-white pt-16 pb-8 border-t border-gray-200",children:[e.jsxs(h,{className:"mb-12",children:[e.jsxs(t,{title:"Features",children:[e.jsx(r,{href:"#",children:"Interaction design"}),e.jsx(r,{href:"#",children:"Visual design"}),e.jsx(r,{href:"#",children:"Collaboration"}),e.jsx(r,{href:"#",children:"Requirements"}),e.jsx(r,{href:"#",children:"Design systems"}),e.jsx(r,{href:"#",children:"Integrations"}),e.jsx(r,{href:"#",children:"API & SDK"}),e.jsx(r,{href:"#",children:"All features"})]}),e.jsxs(t,{title:"Use Cases",children:[e.jsx(r,{href:"#",children:"Wireframing"}),e.jsx(r,{href:"#",children:"Prototyping"}),e.jsx(r,{href:"#",children:"Mockup"}),e.jsx(r,{href:"#",children:"Web design"}),e.jsx(r,{href:"#",children:"Mobile app design"}),e.jsx(r,{href:"#",children:"VR & AR design"})]}),e.jsxs(t,{title:"Learn",children:[e.jsx(r,{href:"#",children:"UI design"}),e.jsx(r,{href:"#",children:"UX design"}),e.jsx(r,{href:"#",children:"Wireframe design"}),e.jsx(r,{href:"#",className:"text-gray-400 pointer-events-none",children:"Prototype design"}),e.jsx(r,{href:"#",children:"Mockup design"}),e.jsx(r,{href:"#",children:"Web design"}),e.jsx(r,{href:"#",children:"Interaction design"}),e.jsx(r,{href:"#",children:"Forms design"})]}),e.jsxs(t,{title:"Articles",children:[e.jsx(r,{href:"#",children:"User personas"}),e.jsx(r,{href:"#",children:"User flows"}),e.jsx(r,{href:"#",children:"Dashboard design"}),e.jsx(r,{href:"#",children:"Functional specifications"}),e.jsx(r,{href:"#",children:"App templates"}),e.jsx(r,{href:"#",children:"Requirements management"})]}),e.jsxs(t,{title:"Resources",children:[e.jsx(r,{href:"#",children:"Login"}),e.jsx(r,{href:"#",children:"Download"}),e.jsx(r,{href:"#",children:"Help Center"}),e.jsx(r,{href:"#",children:"Design templates"}),e.jsx(r,{href:"#",children:"UI Kits"}),e.jsx(r,{href:"#",children:"Customers"}),e.jsx(r,{href:"#",children:"UX talks"}),e.jsx(r,{href:"#",children:"Blog"})]}),e.jsxs(t,{title:"Company",children:[e.jsx(r,{href:"#",children:"Contact us"}),e.jsx(r,{href:"#",children:"About us"}),e.jsx(r,{href:"#",children:"Brand assets"}),e.jsx(r,{href:"#",children:"Figma alternative"}),e.jsx(r,{href:"#",children:"Sketch alternative"}),e.jsx(r,{href:"#",children:"Adobe XD alternative"}),e.jsx(r,{href:"#",children:"InVision alternative"})]})]}),e.jsx(m,{className:"pt-8 border-t border-gray-200 mt-8",children:e.jsxs("div",{className:"flex flex-col lg:flex-row justify-between items-center w-full gap-6",children:[e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("div",{className:"w-6 h-6 rounded-full bg-gradient-to-tr from-purple-500 to-pink-500"}),e.jsx("span",{className:"font-bold text-xl text-black",children:"Justinmind"})]}),e.jsx("span",{className:"text-gray-500 text-sm",children:"© 2025 Justinmind"})]}),e.jsxs("div",{className:"flex flex-col md:flex-row items-center gap-6",children:[e.jsxs("div",{className:"flex items-center gap-4 text-gray-400",children:[e.jsxs("a",{href:"#",className:"hover:text-gray-600",children:[e.jsx("span",{className:"sr-only",children:"Facebook"}),e.jsx("svg",{className:"w-5 h-5",fill:"currentColor",viewBox:"0 0 24 24","aria-hidden":"true",children:e.jsx("path",{fillRule:"evenodd",d:"M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z",clipRule:"evenodd"})})]}),e.jsx("a",{href:"#",className:"hover:text-gray-600",children:e.jsx(j,{size:20})}),e.jsx("a",{href:"#",className:"hover:text-gray-600",children:e.jsx(A,{size:20})}),e.jsxs("a",{href:"#",className:"hover:text-gray-600",children:[e.jsx("span",{className:"sr-only",children:"Dribbble"}),e.jsx("svg",{className:"w-5 h-5",fill:"currentColor",viewBox:"0 0 24 24","aria-hidden":"true",children:e.jsx("path",{fillRule:"evenodd",d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.197 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.753 1.003-1.83 2.41-2.234 3.374-5.975 1.75-7.235 1.75-7.235 1.75zm.733 4.962c1.554-4.683 4.16-7.842 7.37-9.211.932 2.154 1.72 4.738 2.007 6.434-3.374 1.087-6.646 2.373-9.377 2.777zM12 20.547a8.482 8.482 0 01-5.298-1.869c2.857-.425 6.123-1.726 9.698-2.848.352.921.673 1.856.948 2.82A8.536 8.536 0 0112 20.547zm6.168-2.2c-.342-.976-.687-1.935-1.061-2.873 2.619-.321 5.123.14 5.39.19a8.53 8.53 0 01-4.329 2.683z",clipRule:"evenodd"})})]})]}),e.jsxs("div",{className:"flex items-center gap-4 text-sm text-gray-500",children:[e.jsx("a",{href:"#",className:"hover:text-gray-900",children:"Privacy Policy"}),e.jsx("div",{className:"h-3 w-px bg-gray-300"}),e.jsx("a",{href:"#",className:"hover:text-gray-900",children:"Terms of use"})]}),e.jsxs("div",{className:"flex items-center gap-1 text-sm text-gray-700 cursor-pointer hover:text-black",children:[e.jsx("span",{children:"English"}),e.jsx("svg",{className:"w-4 h-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M19 9l-7 7-7-7"})})]}),e.jsx(b,{variant:"primary",className:"bg-black text-white hover:bg-gray-800 rounded-md px-6",children:"Download Free"})]})]})})]})};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: () => <Footer>
            <FooterContent>
                <FooterColumn title="Product">
                    <FooterLink href="#">Features</FooterLink>
                    <FooterLink href="#">Integrations</FooterLink>
                    <FooterLink href="#">Pricing</FooterLink>
                    <FooterLink href="#">Changelog</FooterLink>
                    <FooterLink href="#">Docs</FooterLink>
                </FooterColumn>

                <FooterColumn title="Company">
                    <FooterLink href="#">About Us</FooterLink>
                    <FooterLink href="#">Careers</FooterLink>
                    <FooterLink href="#">Blog</FooterLink>
                    <FooterLink href="#">Contact</FooterLink>
                    <FooterLink href="#">Partners</FooterLink>
                </FooterColumn>

                <FooterColumn title="Resources">
                    <FooterLink href="#">Community</FooterLink>
                    <FooterLink href="#">Help Center</FooterLink>
                    <FooterLink href="#">Webinars</FooterLink>
                    <FooterLink href="#">Status</FooterLink>
                </FooterColumn>

                <FooterColumn title="Legal">
                    <FooterLink href="#">Privacy</FooterLink>
                    <FooterLink href="#">Terms</FooterLink>
                    <FooterLink href="#">Security</FooterLink>
                </FooterColumn>
            </FooterContent>

            <FooterBottom>
                <p>© 2024 Acme Inc. All rights reserved.</p>
                <div className="flex gap-6">
                    <FooterLink href="#">Privacy Policy</FooterLink>
                    <FooterLink href="#">Terms of Service</FooterLink>
                    <FooterLink href="#">Cookies Settings</FooterLink>
                </div>
            </FooterBottom>
        </Footer>
}`,...x.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: () => <Footer className="pt-8">
            <FooterContent>
                <FooterColumn className="md:items-start">
                    <div className="flex items-center gap-2">
                        <span className="font-bold text-lg">Acme Inc.</span>
                    </div>
                </FooterColumn>
                <FooterColumn className="md:items-center">
                    <div className="flex gap-6">
                        <FooterLink href="#">About</FooterLink>
                        <FooterLink href="#">Blog</FooterLink>
                        <FooterLink href="#">Careers</FooterLink>
                        <FooterLink href="#">Contact</FooterLink>
                    </div>
                </FooterColumn>
                <FooterColumn className="md:items-end">
                    <div className="flex gap-4">
                        <Twitter size={20} className="text-text-secondary hover:text-text-primary cursor-pointer" />
                        <Github size={20} className="text-text-secondary hover:text-text-primary cursor-pointer" />
                    </div>
                </FooterColumn>
            </FooterContent>
            <FooterBottom className="mt-8">
                <p>© 2024 Acme Inc. All rights reserved.</p>
            </FooterBottom>
        </Footer>
}`,...f.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => <Footer className="py-6 border-t-0 bg-transparent">
            <Container>
                <div className="flex flex-col items-center gap-4 text-center">
                    <div className="flex gap-6 text-sm text-text-secondary">
                        <a href="#" className="hover:text-text-primary">Home</a>
                        <a href="#" className="hover:text-text-primary">Profile</a>
                        <a href="#" className="hover:text-text-primary">Settings</a>
                    </div>
                    <p className="text-xs text-text-tertiary">
                        © 2024 Acme Inc.
                    </p>
                </div>
            </Container>
        </Footer>
}`,...p.parameters?.docs?.source}}};F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  render: () => <Footer className="bg-white pt-16 pb-8 border-t border-gray-200">
            <FooterContent className="mb-12">
                <FooterColumn title="Features">
                    <FooterLink href="#">Interaction design</FooterLink>
                    <FooterLink href="#">Visual design</FooterLink>
                    <FooterLink href="#">Collaboration</FooterLink>
                    <FooterLink href="#">Requirements</FooterLink>
                    <FooterLink href="#">Design systems</FooterLink>
                    <FooterLink href="#">Integrations</FooterLink>
                    <FooterLink href="#">API & SDK</FooterLink>
                    <FooterLink href="#">All features</FooterLink>
                </FooterColumn>

                <FooterColumn title="Use Cases">
                    <FooterLink href="#">Wireframing</FooterLink>
                    <FooterLink href="#">Prototyping</FooterLink>
                    <FooterLink href="#">Mockup</FooterLink>
                    <FooterLink href="#">Web design</FooterLink>
                    <FooterLink href="#">Mobile app design</FooterLink>
                    <FooterLink href="#">VR & AR design</FooterLink>
                </FooterColumn>

                <FooterColumn title="Learn">
                    <FooterLink href="#">UI design</FooterLink>
                    <FooterLink href="#">UX design</FooterLink>
                    <FooterLink href="#">Wireframe design</FooterLink>
                    <FooterLink href="#" className="text-gray-400 pointer-events-none">Prototype design</FooterLink>
                    <FooterLink href="#">Mockup design</FooterLink>
                    <FooterLink href="#">Web design</FooterLink>
                    <FooterLink href="#">Interaction design</FooterLink>
                    <FooterLink href="#">Forms design</FooterLink>
                </FooterColumn>

                <FooterColumn title="Articles">
                    <FooterLink href="#">User personas</FooterLink>
                    <FooterLink href="#">User flows</FooterLink>
                    <FooterLink href="#">Dashboard design</FooterLink>
                    <FooterLink href="#">Functional specifications</FooterLink>
                    <FooterLink href="#">App templates</FooterLink>
                    <FooterLink href="#">Requirements management</FooterLink>
                </FooterColumn>

                <FooterColumn title="Resources">
                    <FooterLink href="#">Login</FooterLink>
                    <FooterLink href="#">Download</FooterLink>
                    <FooterLink href="#">Help Center</FooterLink>
                    <FooterLink href="#">Design templates</FooterLink>
                    <FooterLink href="#">UI Kits</FooterLink>
                    <FooterLink href="#">Customers</FooterLink>
                    <FooterLink href="#">UX talks</FooterLink>
                    <FooterLink href="#">Blog</FooterLink>
                </FooterColumn>

                <FooterColumn title="Company">
                    <FooterLink href="#">Contact us</FooterLink>
                    <FooterLink href="#">About us</FooterLink>
                    <FooterLink href="#">Brand assets</FooterLink>
                    <FooterLink href="#">Figma alternative</FooterLink>
                    <FooterLink href="#">Sketch alternative</FooterLink>
                    <FooterLink href="#">Adobe XD alternative</FooterLink>
                    <FooterLink href="#">InVision alternative</FooterLink>
                </FooterColumn>
            </FooterContent>

            <FooterBottom className="pt-8 border-t border-gray-200 mt-8">
                <div className="flex flex-col lg:flex-row justify-between items-center w-full gap-6">
                    {/* Left Side: Logo & Copyright */}
                    <div className="flex items-center gap-4">
                        <div className="flex items-center gap-2">
                            {/* Placeholder Logo */}
                            <div className="w-6 h-6 rounded-full bg-gradient-to-tr from-purple-500 to-pink-500"></div>
                            <span className="font-bold text-xl text-black">Justinmind</span>
                        </div>
                        <span className="text-gray-500 text-sm">© 2025 Justinmind</span>
                    </div>

                    {/* Right Side: Socials, Links, Language, Button */}
                    <div className="flex flex-col md:flex-row items-center gap-6">
                        {/* Social Icons */}
                        <div className="flex items-center gap-4 text-gray-400">
                            <a href="#" className="hover:text-gray-600"><span className="sr-only">Facebook</span><svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" /></svg></a>
                            <a href="#" className="hover:text-gray-600"><Twitter size={20} /></a>
                            <a href="#" className="hover:text-gray-600"><Linkedin size={20} /></a>
                            <a href="#" className="hover:text-gray-600"><span className="sr-only">Dribbble</span><svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.197 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.753 1.003-1.83 2.41-2.234 3.374-5.975 1.75-7.235 1.75-7.235 1.75zm.733 4.962c1.554-4.683 4.16-7.842 7.37-9.211.932 2.154 1.72 4.738 2.007 6.434-3.374 1.087-6.646 2.373-9.377 2.777zM12 20.547a8.482 8.482 0 01-5.298-1.869c2.857-.425 6.123-1.726 9.698-2.848.352.921.673 1.856.948 2.82A8.536 8.536 0 0112 20.547zm6.168-2.2c-.342-.976-.687-1.935-1.061-2.873 2.619-.321 5.123.14 5.39.19a8.53 8.53 0 01-4.329 2.683z" clipRule="evenodd" /></svg></a>
                        </div>

                        {/* Links */}
                        <div className="flex items-center gap-4 text-sm text-gray-500">
                            <a href="#" className="hover:text-gray-900">Privacy Policy</a>
                            <div className="h-3 w-px bg-gray-300"></div>
                            <a href="#" className="hover:text-gray-900">Terms of use</a>
                        </div>

                        {/* Language Selector */}
                        <div className="flex items-center gap-1 text-sm text-gray-700 cursor-pointer hover:text-black">
                            <span>English</span>
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                        </div>

                        {/* CTA Button */}
                        <Button variant="primary" className="bg-black text-white hover:bg-gray-800 rounded-md px-6">
                            Download Free
                        </Button>
                    </div>
                </div>
            </FooterBottom>
        </Footer>
}`,...F.parameters?.docs?.source}}};const U=["Default","Simple","Minimal","JustinmindReplica"];export{x as Default,F as JustinmindReplica,p as Minimal,f as Simple,U as __namedExportsOrder,q as default};
