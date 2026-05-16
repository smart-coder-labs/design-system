import{n as e}from"./chunk-jRWAZmH_.js";import{t}from"./jsx-runtime-BscHEzdU.js";import{n,r,t as i}from"./Tooltip-EZU-krzq.js";var a,o,s,c,l,u,d,f,p,m,h;e((()=>{r(),a=t(),o={title:`Overlays/Tooltip`,component:i,tags:[`autodocs`],decorators:[e=>(0,a.jsx)(n,{children:(0,a.jsx)(`div`,{className:`flex items-center justify-center p-12`,children:(0,a.jsx)(e,{})})})]},s={args:{content:`Portfolio value: $124,532`,children:(0,a.jsx)(`button`,{className:`px-4 py-2 bg-gray-900 text-white rounded-lg text-sm`,children:`Hover me`}),side:`top`}},c={args:{content:`Click to view transaction details`,children:(0,a.jsx)(`button`,{className:`px-4 py-2 bg-blue-600 text-white rounded-lg text-sm`,children:`View Details`}),side:`bottom`}},l={args:{content:`24/7 Customer Support`,children:(0,a.jsx)(`button`,{className:`px-4 py-2 bg-green-600 text-white rounded-lg text-sm`,children:`Help`}),side:`right`}},u={args:{content:`Total balance: $45,230.50`,children:(0,a.jsx)(`button`,{className:`px-4 py-2 bg-purple-600 text-white rounded-lg text-sm`,children:`Balance`}),side:`left`}},d={args:{content:(0,a.jsxs)(`div`,{className:`space-y-1`,children:[(0,a.jsx)(`p`,{className:`font-semibold`,children:`BTC - Bitcoin`}),(0,a.jsx)(`p`,{className:`text-green-400`,children:`+2.45% ▲ $67,432`}),(0,a.jsx)(`p`,{className:`text-xs text-gray-400`,children:`24h volume: $28.5B`})]}),children:(0,a.jsx)(`button`,{className:`px-4 py-2 bg-orange-500 text-white rounded-lg text-sm`,children:`BTC Price`}),side:`top`}},f={args:{children:(0,a.jsx)(`span`,{style:{padding:`8px 16px`,background:`#e5e7eb`,borderRadius:6,display:`inline-block`},children:`Hover me`}),content:`Tooltip on the right side`,side:`right`}},p={args:{children:(0,a.jsx)(`span`,{style:{padding:`8px 16px`,background:`#e5e7eb`,borderRadius:6,display:`inline-block`},children:`Bottom tooltip`}),content:`This tooltip appears below with end alignment`,side:`bottom`,align:`end`}},m={render:()=>(0,a.jsx)(`div`,{className:`space-y-4 p-6`,children:(0,a.jsx)(n,{children:(0,a.jsxs)(`div`,{className:`flex items-center gap-8 justify-center`,children:[(0,a.jsx)(i,{content:`Your available balance after pending transactions`,children:(0,a.jsx)(`span`,{className:`underline decoration-dotted cursor-help`,children:`Available Balance: $3,420.50`})}),(0,a.jsx)(i,{content:`Annual Percentage Yield - Current rate: 4.5%`,children:(0,a.jsx)(`span`,{className:`underline decoration-dotted cursor-help`,children:`APY: 4.5%`})})]})})}),decorators:[e=>(0,a.jsx)(`div`,{style:{padding:`80px 20px`,display:`flex`,justifyContent:`center`},children:(0,a.jsx)(e,{})})]},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    content: 'Portfolio value: $124,532',
    children: <button className="px-4 py-2 bg-gray-900 text-white rounded-lg text-sm">Hover me</button>,
    side: 'top'
  }
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    content: 'Click to view transaction details',
    children: <button className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm">View Details</button>,
    side: 'bottom'
  }
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    content: '24/7 Customer Support',
    children: <button className="px-4 py-2 bg-green-600 text-white rounded-lg text-sm">Help</button>,
    side: 'right'
  }
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    content: 'Total balance: $45,230.50',
    children: <button className="px-4 py-2 bg-purple-600 text-white rounded-lg text-sm">Balance</button>,
    side: 'left'
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    content: <div className="space-y-1">
                <p className="font-semibold">BTC - Bitcoin</p>
                <p className="text-green-400">+2.45% ▲ $67,432</p>
                <p className="text-xs text-gray-400">24h volume: $28.5B</p>
            </div>,
    children: <button className="px-4 py-2 bg-orange-500 text-white rounded-lg text-sm">BTC Price</button>,
    side: 'top'
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    children: <span style={{
      padding: '8px 16px',
      background: '#e5e7eb',
      borderRadius: 6,
      display: 'inline-block'
    }}>Hover me</span>,
    content: 'Tooltip on the right side',
    side: 'right'
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    children: <span style={{
      padding: '8px 16px',
      background: '#e5e7eb',
      borderRadius: 6,
      display: 'inline-block'
    }}>Bottom tooltip</span>,
    content: 'This tooltip appears below with end alignment',
    side: 'bottom',
    align: 'end'
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => <div className="space-y-4 p-6">
            <TooltipProvider>
                <div className="flex items-center gap-8 justify-center">
                    <Tooltip content="Your available balance after pending transactions">
                        <span className="underline decoration-dotted cursor-help">Available Balance: $3,420.50</span>
                    </Tooltip>
                    <Tooltip content="Annual Percentage Yield - Current rate: 4.5%">
                        <span className="underline decoration-dotted cursor-help">APY: 4.5%</span>
                    </Tooltip>
                </div>
            </TooltipProvider>
        </div>,
  decorators: [Story => <div style={{
    padding: '80px 20px',
    display: 'flex',
    justifyContent: 'center'
  }}>
                <Story />
            </div>]
}`,...m.parameters?.docs?.source}}},h=[`Top`,`Bottom`,`Right`,`Left`,`RichContent`,`RightSide`,`BottomAlign`,`FintechHelp`]}))();export{c as Bottom,p as BottomAlign,m as FintechHelp,u as Left,d as RichContent,l as Right,f as RightSide,s as Top,h as __namedExportsOrder,o as default};