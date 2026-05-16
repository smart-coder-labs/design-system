import{n as e,o as t}from"./chunk-jRWAZmH_.js";import{a as n}from"./iframe-jtk2jlYO.js";import{n as r,t as i}from"./utils-4pdYZGDS.js";import{t as a}from"./jsx-runtime-BK76Wfr-.js";import{l as o,s,t as c}from"./es-DLZWAS6t.js";import{er as l,t as u}from"./lucide-react-LrcM5b-z.js";var d,f,p,m,h=e((()=>{d=t(n()),r(),f=a(),c(),u(),p=(0,d.forwardRef)(({sections:e,width:t=`280px`,className:n,...r},a)=>{let[c,u]=(0,d.useState)(new Set(e.filter(e=>e.defaultExpanded).map(e=>e.id))),p=e=>{u(t=>{let n=new Set(t);return n.has(e)?n.delete(e):n.add(e),n})};return(0,f.jsx)(`div`,{ref:a,className:i(`bg-surface-secondary border-l border-border-primary overflow-y-auto`,n),style:{width:t},...r,children:e.map(e=>{let t=c.has(e.id);return(0,f.jsxs)(`div`,{children:[(0,f.jsxs)(`button`,{onClick:()=>p(e.id),className:`w-full flex items-center justify-between px-4 py-4 text-left hover:bg-surface-tertiary transition-colors focus:outline-none group rounded-lg`,children:[(0,f.jsx)(`span`,{className:`text-sm font-bold text-text-primary uppercase tracking-wide`,children:e.title}),(0,f.jsx)(s.div,{animate:{rotate:t?90:0},transition:{duration:.2},children:(0,f.jsx)(l,{className:`w-4 h-4 text-text-tertiary`})})]}),(0,f.jsx)(o,{initial:!1,children:t&&(0,f.jsx)(s.div,{initial:{height:0,opacity:0},animate:{height:`auto`,opacity:1},exit:{height:0,opacity:0},transition:{duration:.2},className:`overflow-hidden`,children:(0,f.jsx)(`div`,{className:`px-4 pb-4 space-y-4`,children:e.content})})})]},e.id)})})}),p.displayName=`InspectorPanel`,m=({label:e,children:t})=>(0,f.jsxs)(`div`,{className:`space-y-1.5`,children:[(0,f.jsx)(`label`,{className:`text-xs font-medium text-text-secondary`,children:e}),(0,f.jsx)(`div`,{children:t})]}),m.displayName=`InspectorField`,p.__docgenInfo={description:``,methods:[],displayName:`InspectorPanel`,props:{sections:{required:!0,tsType:{name:`Array`,elements:[{name:`InspectorSection`}],raw:`InspectorSection[]`},description:``},width:{required:!1,tsType:{name:`string`},description:``,defaultValue:{value:`'280px'`,computed:!1}}}},m.__docgenInfo={description:``,methods:[],displayName:`InspectorField`,props:{label:{required:!0,tsType:{name:`string`},description:``},children:{required:!0,tsType:{name:`ReactReactNode`,raw:`React.ReactNode`},description:``}}}})),g,_,v,y,b,x,S,C,w,T,E,D;e((()=>{n(),h(),g=a(),_={title:`Surfaces/InspectorPanel`,component:p,tags:[`autodocs`],decorators:[e=>(0,g.jsxs)(`div`,{className:`h-[500px] flex border border-border-primary rounded-xl overflow-hidden`,children:[(0,g.jsx)(`div`,{className:`flex-1 p-6 text-sm text-text-secondary flex items-center justify-center bg-surface-primary`,children:`Preview Area`}),(0,g.jsx)(e,{})]})]},v=[{id:`properties`,title:`Properties`,defaultExpanded:!0,content:(0,g.jsxs)(`div`,{className:`space-y-3 px-4 pb-4`,children:[(0,g.jsxs)(`div`,{className:`flex justify-between`,children:[(0,g.jsx)(`span`,{className:`text-sm text-text-secondary`,children:`Width`}),(0,g.jsx)(`span`,{className:`text-sm font-mono`,children:`320px`})]}),(0,g.jsxs)(`div`,{className:`flex justify-between`,children:[(0,g.jsx)(`span`,{className:`text-sm text-text-secondary`,children:`Height`}),(0,g.jsx)(`span`,{className:`text-sm font-mono`,children:`480px`})]}),(0,g.jsxs)(`div`,{className:`flex justify-between`,children:[(0,g.jsx)(`span`,{className:`text-sm text-text-secondary`,children:`Opacity`}),(0,g.jsx)(`span`,{className:`text-sm font-mono`,children:`1`})]}),(0,g.jsxs)(`div`,{className:`flex justify-between`,children:[(0,g.jsx)(`span`,{className:`text-sm text-text-secondary`,children:`Position`}),(0,g.jsx)(`span`,{className:`text-sm font-mono`,children:`relative`})]})]})},{id:`styles`,title:`Styles`,content:(0,g.jsxs)(`div`,{className:`space-y-3 px-4 pb-4`,children:[(0,g.jsxs)(`div`,{className:`flex justify-between`,children:[(0,g.jsx)(`span`,{className:`text-sm text-text-secondary`,children:`Background`}),(0,g.jsx)(`span`,{className:`text-sm font-mono`,children:`#ffffff`})]}),(0,g.jsxs)(`div`,{className:`flex justify-between`,children:[(0,g.jsx)(`span`,{className:`text-sm text-text-secondary`,children:`Border Radius`}),(0,g.jsx)(`span`,{className:`text-sm font-mono`,children:`12px`})]}),(0,g.jsxs)(`div`,{className:`flex justify-between`,children:[(0,g.jsx)(`span`,{className:`text-sm text-text-secondary`,children:`Box Shadow`}),(0,g.jsx)(`span`,{className:`text-sm font-mono`,children:`0 2px 8px...`})]})]})},{id:`events`,title:`Events`,content:(0,g.jsxs)(`div`,{className:`space-y-2 px-4 pb-4`,children:[(0,g.jsx)(`div`,{className:`text-sm text-text-secondary`,children:`onClick: (e) => handleClick`}),(0,g.jsx)(`div`,{className:`text-sm text-text-secondary`,children:`onHover: (e) => handleHover`})]})}],y={args:{sections:v}},b={args:{sections:[{id:`props`,title:`Layout`,defaultExpanded:!0,content:(0,g.jsxs)(`div`,{className:`space-y-3 px-4 pb-4`,children:[(0,g.jsxs)(`div`,{className:`flex justify-between`,children:[(0,g.jsx)(`span`,{className:`text-sm text-text-secondary`,children:`Width`}),(0,g.jsx)(`span`,{className:`text-sm font-mono`,children:`100%`})]}),(0,g.jsxs)(`div`,{className:`flex justify-between`,children:[(0,g.jsx)(`span`,{className:`text-sm text-text-secondary`,children:`Height`}),(0,g.jsx)(`span`,{className:`text-sm font-mono`,children:`auto`})]})]})},{id:`display`,title:`Display`,defaultExpanded:!0,content:(0,g.jsxs)(`div`,{className:`space-y-3 px-4 pb-4`,children:[(0,g.jsxs)(`div`,{className:`flex justify-between`,children:[(0,g.jsx)(`span`,{className:`text-sm text-text-secondary`,children:`Flex`}),(0,g.jsx)(`span`,{className:`text-sm font-mono`,children:`row`})]}),(0,g.jsxs)(`div`,{className:`flex justify-between`,children:[(0,g.jsx)(`span`,{className:`text-sm text-text-secondary`,children:`Align`}),(0,g.jsx)(`span`,{className:`text-sm font-mono`,children:`center`})]})]})},{id:`spacing`,title:`Spacing`,defaultExpanded:!0,content:(0,g.jsxs)(`div`,{className:`space-y-3 px-4 pb-4`,children:[(0,g.jsxs)(`div`,{className:`flex justify-between`,children:[(0,g.jsx)(`span`,{className:`text-sm text-text-secondary`,children:`Padding`}),(0,g.jsx)(`span`,{className:`text-sm font-mono`,children:`16px`})]}),(0,g.jsxs)(`div`,{className:`flex justify-between`,children:[(0,g.jsx)(`span`,{className:`text-sm text-text-secondary`,children:`Margin`}),(0,g.jsx)(`span`,{className:`text-sm font-mono`,children:`0`})]}),(0,g.jsxs)(`div`,{className:`flex justify-between`,children:[(0,g.jsx)(`span`,{className:`text-sm text-text-secondary`,children:`Gap`}),(0,g.jsx)(`span`,{className:`text-sm font-mono`,children:`8px`})]})]})}]}},x={args:{sections:[{id:`s1`,title:`General`,defaultExpanded:!0,content:(0,g.jsx)(`div`,{className:`px-4 pb-4 text-sm text-text-secondary`,children:`General settings`})},{id:`s2`,title:`Appearance`,defaultExpanded:!0,content:(0,g.jsx)(`div`,{className:`px-4 pb-4 text-sm text-text-secondary`,children:`Appearance settings`})},{id:`s3`,title:`Typography`,content:(0,g.jsx)(`div`,{className:`px-4 pb-4 text-sm text-text-secondary`,children:`Font, size, weight`})},{id:`s4`,title:`Spacing`,content:(0,g.jsx)(`div`,{className:`px-4 pb-4 text-sm text-text-secondary`,children:`Padding, margin, gap`})},{id:`s5`,title:`Effects`,content:(0,g.jsx)(`div`,{className:`px-4 pb-4 text-sm text-text-secondary`,children:`Shadows, blur, opacity`})},{id:`s6`,title:`Animation`,content:(0,g.jsx)(`div`,{className:`px-4 pb-4 text-sm text-text-secondary`,children:`Duration, easing, delay`})},{id:`s7`,title:`Responsive`,content:(0,g.jsx)(`div`,{className:`px-4 pb-4 text-sm text-text-secondary`,children:`Breakpoints, media queries`})},{id:`s8`,title:`Accessibility`,content:(0,g.jsx)(`div`,{className:`px-4 pb-4 text-sm text-text-secondary`,children:`ARIA labels, roles`})}]}},S={args:{sections:[{id:`single`,title:`Only Section`,defaultExpanded:!0,content:(0,g.jsx)(`div`,{className:`px-4 pb-4 text-sm text-text-secondary`,children:`This is the only collapsible section.`})}]}},C={args:{sections:v,width:`380px`}},w={args:{sections:v,width:`200px`}},T={parameters:{backgrounds:{default:`dark`},themes:{themeOverride:`dark`}},decorators:[e=>(0,g.jsx)(`div`,{className:`dark bg-gray-950 min-h-screen p-8`,children:(0,g.jsx)(e,{})})]},E={parameters:{viewport:{defaultViewport:`mobile1`}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    sections: defaultSections
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    sections: [{
      id: 'props',
      title: 'Layout',
      defaultExpanded: true,
      content: <div className="space-y-3 px-4 pb-4">
                        <div className="flex justify-between"><span className="text-sm text-text-secondary">Width</span><span className="text-sm font-mono">100%</span></div>
                        <div className="flex justify-between"><span className="text-sm text-text-secondary">Height</span><span className="text-sm font-mono">auto</span></div>
                    </div>
    }, {
      id: 'display',
      title: 'Display',
      defaultExpanded: true,
      content: <div className="space-y-3 px-4 pb-4">
                        <div className="flex justify-between"><span className="text-sm text-text-secondary">Flex</span><span className="text-sm font-mono">row</span></div>
                        <div className="flex justify-between"><span className="text-sm text-text-secondary">Align</span><span className="text-sm font-mono">center</span></div>
                    </div>
    }, {
      id: 'spacing',
      title: 'Spacing',
      defaultExpanded: true,
      content: <div className="space-y-3 px-4 pb-4">
                        <div className="flex justify-between"><span className="text-sm text-text-secondary">Padding</span><span className="text-sm font-mono">16px</span></div>
                        <div className="flex justify-between"><span className="text-sm text-text-secondary">Margin</span><span className="text-sm font-mono">0</span></div>
                        <div className="flex justify-between"><span className="text-sm text-text-secondary">Gap</span><span className="text-sm font-mono">8px</span></div>
                    </div>
    }]
  }
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    sections: [{
      id: 's1',
      title: 'General',
      defaultExpanded: true,
      content: <div className="px-4 pb-4 text-sm text-text-secondary">General settings</div>
    }, {
      id: 's2',
      title: 'Appearance',
      defaultExpanded: true,
      content: <div className="px-4 pb-4 text-sm text-text-secondary">Appearance settings</div>
    }, {
      id: 's3',
      title: 'Typography',
      content: <div className="px-4 pb-4 text-sm text-text-secondary">Font, size, weight</div>
    }, {
      id: 's4',
      title: 'Spacing',
      content: <div className="px-4 pb-4 text-sm text-text-secondary">Padding, margin, gap</div>
    }, {
      id: 's5',
      title: 'Effects',
      content: <div className="px-4 pb-4 text-sm text-text-secondary">Shadows, blur, opacity</div>
    }, {
      id: 's6',
      title: 'Animation',
      content: <div className="px-4 pb-4 text-sm text-text-secondary">Duration, easing, delay</div>
    }, {
      id: 's7',
      title: 'Responsive',
      content: <div className="px-4 pb-4 text-sm text-text-secondary">Breakpoints, media queries</div>
    }, {
      id: 's8',
      title: 'Accessibility',
      content: <div className="px-4 pb-4 text-sm text-text-secondary">ARIA labels, roles</div>
    }]
  }
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    sections: [{
      id: 'single',
      title: 'Only Section',
      defaultExpanded: true,
      content: <div className="px-4 pb-4 text-sm text-text-secondary">This is the only collapsible section.</div>
    }]
  }
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    sections: defaultSections,
    width: '380px'
  }
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    sections: defaultSections,
    width: '200px'
  }
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  parameters: {
    backgrounds: {
      default: 'dark'
    },
    themes: {
      themeOverride: 'dark'
    }
  },
  decorators: [Story => <div className="dark bg-gray-950 min-h-screen p-8">
        <Story />
      </div>]
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  parameters: {
    viewport: {
      defaultViewport: 'mobile1'
    }
  }
}`,...E.parameters?.docs?.source}}},D=[`Default`,`AllExpanded`,`ManySections`,`SingleSection`,`WidePanel`,`NarrowPanel`,`DarkMode`,`MobileView`]}))();export{b as AllExpanded,T as DarkMode,y as Default,x as ManySections,E as MobileView,w as NarrowPanel,S as SingleSection,C as WidePanel,D as __namedExportsOrder,_ as default};