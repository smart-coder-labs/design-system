import{j as e}from"./jsx-runtime-u17CrQMm.js";import{S as t}from"./Sparkline-DpKBg7V6.js";const y={title:"Components/Sparkline",component:t,parameters:{layout:"centered"},tags:[],argTypes:{trend:{control:"select",options:["up","down","neutral"]}}},r=[10,15,13,18,22,25,28,30,35,40],p=[40,38,35,32,30,28,25,22,20,18],h=[20,25,22,28,24,30,26,32,28,35],u=[20,21,20,22,21,23,22,24,23,25],a={args:{data:r,width:100,height:30}},s={args:{data:r,width:100,height:30,trend:"up"}},d={args:{data:p,width:100,height:30,trend:"down"}},n={args:{data:r,width:100,height:30,showArea:!0}},i={args:{data:h,width:100,height:30,showDots:!0}},o={args:{data:r,width:200,height:60,strokeWidth:3}},c={args:{data:r,width:60,height:20,strokeWidth:1.5}},x={args:{data:u,width:100,height:30,color:"#007AFF",fillColor:"rgba(0, 122, 255, 0.1)",showArea:!0}},m={render:()=>e.jsx("div",{className:"bg-surface-primary rounded-xl border border-border-primary overflow-hidden",children:e.jsxs("table",{className:"w-full",children:[e.jsx("thead",{children:e.jsxs("tr",{className:"bg-background-secondary/50 border-b border-border-primary",children:[e.jsx("th",{className:"py-3 px-4 text-left text-xs font-semibold text-text-tertiary uppercase",children:"Metric"}),e.jsx("th",{className:"py-3 px-4 text-right text-xs font-semibold text-text-tertiary uppercase",children:"Value"}),e.jsx("th",{className:"py-3 px-4 text-right text-xs font-semibold text-text-tertiary uppercase",children:"Trend"})]})}),e.jsxs("tbody",{className:"divide-y divide-border-primary",children:[e.jsxs("tr",{className:"hover:bg-background-secondary/30",children:[e.jsx("td",{className:"py-3 px-4 text-sm text-text-primary",children:"Revenue"}),e.jsx("td",{className:"py-3 px-4 text-sm text-text-primary text-right font-medium",children:"$45,231"}),e.jsx("td",{className:"py-3 px-4 text-right",children:e.jsx(t,{data:r,width:80,height:24})})]}),e.jsxs("tr",{className:"hover:bg-background-secondary/30",children:[e.jsx("td",{className:"py-3 px-4 text-sm text-text-primary",children:"Users"}),e.jsx("td",{className:"py-3 px-4 text-sm text-text-primary text-right font-medium",children:"12,543"}),e.jsx("td",{className:"py-3 px-4 text-right",children:e.jsx(t,{data:h,width:80,height:24})})]}),e.jsxs("tr",{className:"hover:bg-background-secondary/30",children:[e.jsx("td",{className:"py-3 px-4 text-sm text-text-primary",children:"Bounce Rate"}),e.jsx("td",{className:"py-3 px-4 text-sm text-text-primary text-right font-medium",children:"32%"}),e.jsx("td",{className:"py-3 px-4 text-right",children:e.jsx(t,{data:p,width:80,height:24})})]})]})]})})},l={render:()=>e.jsxs("div",{className:"grid grid-cols-3 gap-4",children:[e.jsxs("div",{className:"bg-surface-primary rounded-xl border border-border-primary p-4",children:[e.jsxs("div",{className:"flex items-center justify-between mb-2",children:[e.jsx("span",{className:"text-xs font-semibold text-text-tertiary uppercase",children:"Sales"}),e.jsx("span",{className:"text-xs text-status-success",children:"+12%"})]}),e.jsx("div",{className:"text-2xl font-bold text-text-primary mb-3",children:"$24,500"}),e.jsx(t,{data:r,width:150,height:40,showArea:!0})]}),e.jsxs("div",{className:"bg-surface-primary rounded-xl border border-border-primary p-4",children:[e.jsxs("div",{className:"flex items-center justify-between mb-2",children:[e.jsx("span",{className:"text-xs font-semibold text-text-tertiary uppercase",children:"Traffic"}),e.jsx("span",{className:"text-xs text-status-error",children:"-5%"})]}),e.jsx("div",{className:"text-2xl font-bold text-text-primary mb-3",children:"8,234"}),e.jsx(t,{data:p,width:150,height:40,showArea:!0})]}),e.jsxs("div",{className:"bg-surface-primary rounded-xl border border-border-primary p-4",children:[e.jsxs("div",{className:"flex items-center justify-between mb-2",children:[e.jsx("span",{className:"text-xs font-semibold text-text-tertiary uppercase",children:"Conversion"}),e.jsx("span",{className:"text-xs text-text-secondary",children:"~0%"})]}),e.jsx("div",{className:"text-2xl font-bold text-text-primary mb-3",children:"3.2%"}),e.jsx(t,{data:u,width:150,height:40,showArea:!0,trend:"neutral"})]})]})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    data: upwardTrend,
    width: 100,
    height: 30
  }
}`,...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    data: upwardTrend,
    width: 100,
    height: 30,
    trend: 'up'
  }
}`,...s.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    data: downwardTrend,
    width: 100,
    height: 30,
    trend: 'down'
  }
}`,...d.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    data: upwardTrend,
    width: 100,
    height: 30,
    showArea: true
  }
}`,...n.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    data: volatileData,
    width: 100,
    height: 30,
    showDots: true
  }
}`,...i.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    data: upwardTrend,
    width: 200,
    height: 60,
    strokeWidth: 3
  }
}`,...o.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    data: upwardTrend,
    width: 60,
    height: 20,
    strokeWidth: 1.5
  }
}`,...c.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    data: steadyData,
    width: 100,
    height: 30,
    color: '#007AFF',
    fillColor: 'rgba(0, 122, 255, 0.1)',
    showArea: true
  }
}`,...x.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => <div className="bg-surface-primary rounded-xl border border-border-primary overflow-hidden">
            <table className="w-full">
                <thead>
                    <tr className="bg-background-secondary/50 border-b border-border-primary">
                        <th className="py-3 px-4 text-left text-xs font-semibold text-text-tertiary uppercase">Metric</th>
                        <th className="py-3 px-4 text-right text-xs font-semibold text-text-tertiary uppercase">Value</th>
                        <th className="py-3 px-4 text-right text-xs font-semibold text-text-tertiary uppercase">Trend</th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-border-primary">
                    <tr className="hover:bg-background-secondary/30">
                        <td className="py-3 px-4 text-sm text-text-primary">Revenue</td>
                        <td className="py-3 px-4 text-sm text-text-primary text-right font-medium">$45,231</td>
                        <td className="py-3 px-4 text-right">
                            <Sparkline data={upwardTrend} width={80} height={24} />
                        </td>
                    </tr>
                    <tr className="hover:bg-background-secondary/30">
                        <td className="py-3 px-4 text-sm text-text-primary">Users</td>
                        <td className="py-3 px-4 text-sm text-text-primary text-right font-medium">12,543</td>
                        <td className="py-3 px-4 text-right">
                            <Sparkline data={volatileData} width={80} height={24} />
                        </td>
                    </tr>
                    <tr className="hover:bg-background-secondary/30">
                        <td className="py-3 px-4 text-sm text-text-primary">Bounce Rate</td>
                        <td className="py-3 px-4 text-sm text-text-primary text-right font-medium">32%</td>
                        <td className="py-3 px-4 text-right">
                            <Sparkline data={downwardTrend} width={80} height={24} />
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
}`,...m.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => <div className="grid grid-cols-3 gap-4">
            <div className="bg-surface-primary rounded-xl border border-border-primary p-4">
                <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-semibold text-text-tertiary uppercase">Sales</span>
                    <span className="text-xs text-status-success">+12%</span>
                </div>
                <div className="text-2xl font-bold text-text-primary mb-3">$24,500</div>
                <Sparkline data={upwardTrend} width={150} height={40} showArea />
            </div>
            <div className="bg-surface-primary rounded-xl border border-border-primary p-4">
                <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-semibold text-text-tertiary uppercase">Traffic</span>
                    <span className="text-xs text-status-error">-5%</span>
                </div>
                <div className="text-2xl font-bold text-text-primary mb-3">8,234</div>
                <Sparkline data={downwardTrend} width={150} height={40} showArea />
            </div>
            <div className="bg-surface-primary rounded-xl border border-border-primary p-4">
                <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-semibold text-text-tertiary uppercase">Conversion</span>
                    <span className="text-xs text-text-secondary">~0%</span>
                </div>
                <div className="text-2xl font-bold text-text-primary mb-3">3.2%</div>
                <Sparkline data={steadyData} width={150} height={40} showArea trend="neutral" />
            </div>
        </div>
}`,...l.parameters?.docs?.source}}};const w=["Default","UpwardTrend","DownwardTrend","WithArea","WithDots","Large","Small","CustomColor","InTable","InCards"];export{x as CustomColor,a as Default,d as DownwardTrend,l as InCards,m as InTable,o as Large,c as Small,s as UpwardTrend,n as WithArea,i as WithDots,w as __namedExportsOrder,y as default};
