import{j as e}from"./jsx-runtime-u17CrQMm.js";import{A as a,a as t}from"./ActivityFeed-BDZB4YN2.js";import{B as o}from"./Button-DiLt8not.js";import{B as m}from"./Badge-g-1oBvWl.js";import{T as l}from"./thumbs-up-F0mk2OPB.js";import{M as p}from"./message-square-Dd9uNvNm.js";import{c as u}from"./createLucideIcon-BMKVoASg.js";import{L as x}from"./lock-BSGa_fzo.js";import{C as g}from"./calendar-BZsL3xLd.js";import"./iframe-CGazvlvx.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-CDN07tui.js";import"./Avatar-DuFdr9hG.js";import"./index-B_jtOnfb.js";import"./file-text-BEtjtG-0.js";import"./circle-check-Cl3IGCd8.js";import"./circle-alert-Cwnn9TMZ.js";import"./git-commit-horizontal-CPApmIyU.js";import"./proxy-BNOm_ZMq.js";import"./resolve-elements-juiWZL7b.js";const h=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"M12 8v4",key:"1got3b"}],["path",{d:"M12 16h.01",key:"1drbdi"}]],y=u("shield-alert",h),Y={title:"Data Display/ActivityFeed",component:a,parameters:{layout:"padded"},tags:[]},s={render:()=>e.jsx("div",{className:"max-w-2xl mx-auto",children:e.jsxs(a,{children:[e.jsx(t,{actor:{name:"Sarah Chen",initials:"SC"},action:"commented on",target:"Issue #429",date:"2h ago",type:"comment",children:e.jsx("p",{children:"I've updated the documentation to reflect the new API changes. Can someone review it?"})}),e.jsx(t,{actor:{name:"Mike Ross",initials:"MR"},action:"pushed 3 commits to",target:"feature/auth-v2",date:"4h ago",type:"commit",children:e.jsxs("div",{className:"space-y-1 font-mono text-xs",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("span",{className:"text-accent-blue",children:"a1b2c3d"}),e.jsx("span",{children:"feat: implement JWT rotation"})]}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("span",{className:"text-accent-blue",children:"d4e5f6g"}),e.jsx("span",{children:"fix: session timeout handling"})]}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("span",{className:"text-accent-blue",children:"h7i8j9k"}),e.jsx("span",{children:"chore: update dependencies"})]})]})}),e.jsx(t,{actor:{name:"Alex Morgan",initials:"AM"},action:"merged pull request",target:"#842: Timeline Component",date:"Yesterday",type:"pr"}),e.jsx(t,{actor:{name:"System",initials:"SY"},action:"deployed to",target:"Production",date:"Yesterday",type:"success",children:e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(m,{variant:"success",size:"sm",children:"Success"}),e.jsx("span",{className:"text-xs text-text-secondary",children:"Deployment #1024 completed in 45s"})]})})]})})},i={render:()=>e.jsx("div",{className:"max-w-2xl mx-auto",children:e.jsxs(a,{children:[e.jsxs(t,{actor:{name:"David Kim",initials:"DK"},action:"requested changes on",target:"PR #850",date:"10m ago",type:"alert",children:[e.jsx("p",{className:"mb-2",children:"We need to handle the edge case where the user has no permissions."}),e.jsxs("div",{className:"bg-surface-primary p-3 rounded border border-border-primary font-mono text-xs overflow-x-auto",children:[e.jsx("span",{className:"text-status-error",children:"- if (user.role === 'admin')"}),e.jsx("br",{}),e.jsx("span",{className:"text-status-success",children:"+ if (hasPermission(user, 'manage_users'))"})]})]}),e.jsxs(t,{actor:{name:"Emily White",initials:"EW"},action:"replied",date:"5m ago",type:"comment",children:[e.jsx("p",{children:"Good catch! I'll update it right away."}),e.jsxs("div",{className:"mt-3 flex gap-2",children:[e.jsx(o,{size:"sm",variant:"ghost",leftIcon:e.jsx(l,{className:"w-3 h-3"}),children:"Like"}),e.jsx(o,{size:"sm",variant:"ghost",leftIcon:e.jsx(p,{className:"w-3 h-3"}),children:"Reply"})]})]})]})})},r={args:{items:[{actor:{name:"Bot",initials:"B"},action:"created ticket",target:"OPS-123",date:"Just now",type:"default"},{actor:{name:"Alice",initials:"A"},action:"assigned to",target:"Bob",date:"1m ago",type:"default"},{actor:{name:"Bob",initials:"B"},action:"changed status to",target:"In Progress",date:"30s ago",type:"success"}]},render:d=>e.jsx("div",{className:"max-w-xl mx-auto",children:e.jsx(a,{...d})})},n={name:"🛡️ Use Case: Security Audit Log",render:()=>e.jsx("div",{className:"max-w-2xl mx-auto",children:e.jsxs(a,{children:[e.jsx(t,{actor:{name:"Admin User",initials:"AU"},action:"changed organization settings",date:"2 hours ago",type:"alert",icon:y,children:e.jsx("p",{children:'Enforced 2FA for all members of the "Engineering" group.'})}),e.jsx(t,{actor:{name:"System",initials:"SYS"},action:"blocked suspicious login attempt",target:"IP 192.168.1.1",date:"4 hours ago",type:"alert"}),e.jsx(t,{actor:{name:"Sarah Connor",initials:"SC"},action:"updated password",date:"Yesterday",type:"default",icon:x})]})})},c={name:"📊 Use Case: Project Management",render:()=>e.jsx("div",{className:"max-w-2xl mx-auto",children:e.jsxs(a,{children:[e.jsx(t,{actor:{name:"Product Manager",initials:"PM"},action:"moved ticket",target:"PROJ-123",date:"10m ago",type:"default",children:e.jsxs("div",{className:"flex items-center gap-2 text-xs",children:[e.jsx("span",{className:"bg-surface-secondary px-2 py-1 rounded",children:"In Progress"}),e.jsx("span",{children:"→"}),e.jsx("span",{className:"bg-accent-blue/10 text-accent-blue px-2 py-1 rounded font-medium",children:"QA Review"})]})}),e.jsx(t,{actor:{name:"Lead Dev",initials:"LD"},action:"attached file",target:"architecture_diagram.pdf",date:"1h ago",type:"file"}),e.jsx(t,{actor:{name:"QA Engineer",initials:"QA"},action:"added due date",target:"Nov 24, 2025",date:"2h ago",type:"default",icon:g})]})})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => <div className="max-w-2xl mx-auto">
            <ActivityFeed>
                <ActivityItem actor={{
        name: 'Sarah Chen',
        initials: 'SC'
      }} action="commented on" target="Issue #429" date="2h ago" type="comment">
                    <p>I've updated the documentation to reflect the new API changes. Can someone review it?</p>
                </ActivityItem>
                
                <ActivityItem actor={{
        name: 'Mike Ross',
        initials: 'MR'
      }} action="pushed 3 commits to" target="feature/auth-v2" date="4h ago" type="commit">
                    <div className="space-y-1 font-mono text-xs">
                        <div className="flex items-center gap-2">
                            <span className="text-accent-blue">a1b2c3d</span>
                            <span>feat: implement JWT rotation</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="text-accent-blue">d4e5f6g</span>
                            <span>fix: session timeout handling</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="text-accent-blue">h7i8j9k</span>
                            <span>chore: update dependencies</span>
                        </div>
                    </div>
                </ActivityItem>

                <ActivityItem actor={{
        name: 'Alex Morgan',
        initials: 'AM'
      }} action="merged pull request" target="#842: Timeline Component" date="Yesterday" type="pr" />

                <ActivityItem actor={{
        name: 'System',
        initials: 'SY'
      }} action="deployed to" target="Production" date="Yesterday" type="success">
                    <div className="flex items-center gap-2">
                        <Badge variant="success" size="sm">Success</Badge>
                        <span className="text-xs text-text-secondary">Deployment #1024 completed in 45s</span>
                    </div>
                </ActivityItem>
            </ActivityFeed>
        </div>
}`,...s.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => <div className="max-w-2xl mx-auto">
            <ActivityFeed>
                <ActivityItem actor={{
        name: 'David Kim',
        initials: 'DK'
      }} action="requested changes on" target="PR #850" date="10m ago" type="alert">
                    <p className="mb-2">We need to handle the edge case where the user has no permissions.</p>
                    <div className="bg-surface-primary p-3 rounded border border-border-primary font-mono text-xs overflow-x-auto">
                        <span className="text-status-error">- if (user.role === 'admin')</span><br />
                        <span className="text-status-success">+ if (hasPermission(user, 'manage_users'))</span>
                    </div>
                </ActivityItem>

                <ActivityItem actor={{
        name: 'Emily White',
        initials: 'EW'
      }} action="replied" date="5m ago" type="comment">
                    <p>Good catch! I'll update it right away.</p>
                    <div className="mt-3 flex gap-2">
                        <Button size="sm" variant="ghost" leftIcon={<ThumbsUp className="w-3 h-3" />}>Like</Button>
                        <Button size="sm" variant="ghost" leftIcon={<MessageSquare className="w-3 h-3" />}>Reply</Button>
                    </div>
                </ActivityItem>
            </ActivityFeed>
        </div>
}`,...i.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    items: [{
      actor: {
        name: 'Bot',
        initials: 'B'
      },
      action: 'created ticket',
      target: 'OPS-123',
      date: 'Just now',
      type: 'default'
    }, {
      actor: {
        name: 'Alice',
        initials: 'A'
      },
      action: 'assigned to',
      target: 'Bob',
      date: '1m ago',
      type: 'default'
    }, {
      actor: {
        name: 'Bob',
        initials: 'B'
      },
      action: 'changed status to',
      target: 'In Progress',
      date: '30s ago',
      type: 'success'
    }]
  },
  render: args => <div className="max-w-xl mx-auto">
            <ActivityFeed {...args} />
        </div>
}`,...r.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  name: '🛡️ Use Case: Security Audit Log',
  render: () => <div className="max-w-2xl mx-auto">
            <ActivityFeed>
                <ActivityItem actor={{
        name: 'Admin User',
        initials: 'AU'
      }} action="changed organization settings" date="2 hours ago" type="alert" icon={ShieldAlert}>
                    <p>Enforced 2FA for all members of the "Engineering" group.</p>
                </ActivityItem>
                <ActivityItem actor={{
        name: 'System',
        initials: 'SYS'
      }} action="blocked suspicious login attempt" target="IP 192.168.1.1" date="4 hours ago" type="alert" />
                <ActivityItem actor={{
        name: 'Sarah Connor',
        initials: 'SC'
      }} action="updated password" date="Yesterday" type="default" icon={Lock} />
            </ActivityFeed>
        </div>
}`,...n.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  name: '📊 Use Case: Project Management',
  render: () => <div className="max-w-2xl mx-auto">
            <ActivityFeed>
                <ActivityItem actor={{
        name: 'Product Manager',
        initials: 'PM'
      }} action="moved ticket" target="PROJ-123" date="10m ago" type="default">
                    <div className="flex items-center gap-2 text-xs">
                        <span className="bg-surface-secondary px-2 py-1 rounded">In Progress</span>
                        <span>→</span>
                        <span className="bg-accent-blue/10 text-accent-blue px-2 py-1 rounded font-medium">QA Review</span>
                    </div>
                </ActivityItem>
                <ActivityItem actor={{
        name: 'Lead Dev',
        initials: 'LD'
      }} action="attached file" target="architecture_diagram.pdf" date="1h ago" type="file" />
                <ActivityItem actor={{
        name: 'QA Engineer',
        initials: 'QA'
      }} action="added due date" target="Nov 24, 2025" date="2h ago" type="default" icon={Calendar} />
            </ActivityFeed>
        </div>
}`,...c.parameters?.docs?.source}}};const z=["Default","CodeReview","DataDriven","SecurityAuditLog","ProjectUpdates"];export{i as CodeReview,r as DataDriven,s as Default,c as ProjectUpdates,n as SecurityAuditLog,z as __namedExportsOrder,Y as default};
