import{n as e,o as t}from"./chunk-jRWAZmH_.js";import{a as n}from"./iframe-C3uANx_z.js";import{Gn as r,It as i,Lt as a,Nt as o,Ot as s,V as c,Yn as l,Yt as u,bn as d,dn as f,fn as p,ln as m,qn as h,t as g,v as _}from"./lucide-react-h9NbdGwk.js";import{n as v,t as y}from"./utils-CcEteFRA.js";import{t as b}from"./jsx-runtime-WZfjI2gv.js";import{n as x,r as S,t as C}from"./Avatar-Bpjw78c7.js";import{t as w}from"./Avatar-DJUnCAtF.js";var T,E,D,O,k,A,j=e((()=>{T=t(n()),v(),w(),g(),E=b(),D={default:d,comment:s,commit:p,pr:f,review:h,alert:l,success:h,file:d},O={default:`text-text-tertiary bg-surface-secondary`,comment:`text-accent-blue bg-accent-blue/10`,commit:`text-text-secondary bg-surface-secondary`,pr:`text-accent-purple bg-accent-purple/10`,review:`text-status-success bg-status-success/10`,alert:`text-status-error bg-status-error/10`,success:`text-status-success bg-status-success/10`,file:`text-accent-blue bg-accent-blue/10`},k=T.forwardRef(({actor:e,action:t,target:n,date:r,type:i=`default`,icon:a,showConnector:o=!0,isLast:s=!1,children:c,className:l,...u},d)=>{let f=a||D[i],p=O[i];return(0,E.jsxs)(`div`,{ref:d,className:y(`flex gap-4 group`,l),...u,children:[(0,E.jsxs)(`div`,{className:`flex flex-col items-center flex-none`,children:[(0,E.jsxs)(`div`,{className:`relative`,children:[(0,E.jsxs)(C,{className:`w-10 h-10 border-2 border-surface-primary shadow-sm z-10`,children:[(0,E.jsx)(S,{src:e.avatarSrc,alt:e.name}),(0,E.jsx)(x,{children:e.initials||e.name.charAt(0)})]}),(0,E.jsx)(`div`,{className:y(`absolute -bottom-1 -right-1 w-5 h-5 rounded-full border-2 border-surface-primary flex items-center justify-center text-[10px] z-20`,p),children:(0,E.jsx)(f,{className:`w-3 h-3`})})]}),o&&!s&&(0,E.jsx)(`div`,{className:`w-px flex-1 bg-border-primary/40 my-2 group-hover:bg-border-primary/60 transition-colors`})]}),(0,E.jsxs)(`div`,{className:`flex-1 pb-10 min-w-0`,children:[(0,E.jsxs)(`div`,{className:`flex items-center justify-between gap-4 mb-2`,children:[(0,E.jsxs)(`div`,{className:`flex items-center gap-1.5 text-sm text-text-primary min-w-0`,children:[(0,E.jsx)(`span`,{className:`font-semibold hover:underline cursor-pointer decoration-text-secondary/50 underline-offset-2 whitespace-nowrap`,children:e.name}),(0,E.jsx)(`span`,{className:`text-text-secondary whitespace-nowrap`,children:t}),n&&(0,E.jsx)(`span`,{className:`font-medium text-text-primary hover:text-accent-blue transition-colors cursor-pointer truncate`,children:n})]}),(0,E.jsx)(`span`,{className:`text-xs text-text-tertiary whitespace-nowrap flex-none`,children:r})]}),c&&(0,E.jsx)(`div`,{className:`mt-3 text-sm text-text-secondary bg-surface-secondary/30 rounded-xl p-4 border border-border-primary/40 leading-relaxed`,children:c})]})]})}),k.displayName=`ActivityItem`,A=T.forwardRef(({items:e,children:t,showConnector:n=!0,className:r,...i},a)=>{if(e)return(0,E.jsx)(`div`,{ref:a,className:y(`flex flex-col`,r),...i,children:e.map((t,r)=>(0,E.jsx)(k,{...t,showConnector:n,isLast:r===e.length-1},r))});let o=T.Children.toArray(t);return(0,E.jsx)(`div`,{ref:a,className:y(`flex flex-col`,r),...i,children:o.map((e,t)=>T.isValidElement(e)?T.cloneElement(e,{showConnector:n,isLast:t===o.length-1}):null)})}),A.displayName=`ActivityFeed`,k.__docgenInfo={description:``,methods:[],displayName:`ActivityItem`,props:{actor:{required:!0,tsType:{name:`ActivityActor`},description:``},action:{required:!0,tsType:{name:`ReactNode`},description:``},target:{required:!1,tsType:{name:`ReactNode`},description:``},date:{required:!0,tsType:{name:`ReactNode`},description:``},type:{required:!1,tsType:{name:`union`,raw:`'default' | 'comment' | 'commit' | 'pr' | 'review' | 'alert' | 'success' | 'file'`,elements:[{name:`literal`,value:`'default'`},{name:`literal`,value:`'comment'`},{name:`literal`,value:`'commit'`},{name:`literal`,value:`'pr'`},{name:`literal`,value:`'review'`},{name:`literal`,value:`'alert'`},{name:`literal`,value:`'success'`},{name:`literal`,value:`'file'`}]},description:``,defaultValue:{value:`'default'`,computed:!1}},icon:{required:!1,tsType:{name:`LucideIcon`},description:``},showConnector:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`true`,computed:!1}},isLast:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`false`,computed:!1}}},composes:[`HTMLAttributes`]},A.__docgenInfo={description:``,methods:[],displayName:`ActivityFeed`,props:{items:{required:!1,tsType:{name:`Array`,elements:[{name:`ActivityItemProps`}],raw:`ActivityItemProps[]`},description:``},children:{required:!1,tsType:{name:`ReactNode`},description:``},showConnector:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`true`,computed:!1}}},composes:[`HTMLAttributes`]}})),M=e((()=>{j()})),N,P,F,I,L,R=e((()=>{N=t(n()),v(),M(),g(),P=b(),F=e=>{switch(e){case`login`:return a;case`logout`:return i;case`password_change`:case`password_reset`:return u;case`2fa_enabled`:case`2fa_disabled`:return c;case`device_added`:case`device_removed`:return c;case`suspicious_activity`:return _;case`permission_granted`:return h;case`permission_revoked`:return r;default:return A}},I=(e,t)=>t===`error`||e===`suspicious_activity`?`alert`:t===`success`?`success`:`default`,L=N.forwardRef(({events:e,onEventClick:t,className:n,...r},i)=>(0,P.jsx)(`div`,{ref:i,className:y(`w-full`,n),...r,children:(0,P.jsx)(A,{children:e.map((t,n)=>{let r=F(t.type),i=I(t.type,t.status);return(0,P.jsx)(k,{actor:{name:t.user||`System`,initials:t.user?.charAt(0).toUpperCase()||`S`},action:t.description,date:t.timestamp,type:i,icon:r,isLast:n===e.length-1,children:(0,P.jsxs)(`div`,{className:`space-y-2 text-xs`,children:[t.location&&(0,P.jsxs)(`div`,{className:`flex items-center gap-2 text-text-secondary`,children:[(0,P.jsx)(o,{className:`w-3 h-3`}),(0,P.jsx)(`span`,{children:t.location})]}),t.ipAddress&&(0,P.jsxs)(`div`,{className:`flex items-center gap-2 text-text-secondary`,children:[(0,P.jsx)(m,{className:`w-3 h-3`}),(0,P.jsx)(`span`,{children:t.ipAddress})]}),t.device&&(0,P.jsxs)(`div`,{className:`text-text-tertiary`,children:[`Device: `,t.device]})]})},t.id)})})})),L.displayName=`SecurityActivityLog`,L.__docgenInfo={description:``,methods:[],displayName:`SecurityActivityLog`,props:{events:{required:!0,tsType:{name:`Array`,elements:[{name:`SecurityEvent`}],raw:`SecurityEvent[]`},description:``},onEventClick:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(event: SecurityEvent) => void`,signature:{arguments:[{type:{name:`SecurityEvent`},name:`event`}],return:{name:`void`}}},description:``},className:{required:!1,tsType:{name:`string`},description:``}}}})),z,B,V,H,U,W,G,K,q,J,Y,X;e((()=>{R(),z=t(n()),B=b(),V={title:`Data Display/SecurityActivityLog`,component:L,tags:[`autodocs`]},H={args:{activities:[{id:`1`,type:`login`,description:`Login from Chrome on macOS`,timestamp:`2 minutes ago`,ip:`192.168.1.100`,location:`New York, US`,status:`success`},{id:`2`,type:`login`,description:`Login from Safari on iOS`,timestamp:`1 hour ago`,ip:`203.0.113.45`,location:`San Francisco, US`,status:`success`},{id:`3`,type:`login_attempt`,description:`Failed login attempt`,timestamp:`3 hours ago`,ip:`198.51.100.22`,location:`Moscow, RU`,status:`failed`},{id:`4`,type:`password_change`,description:`Password changed`,timestamp:`1 day ago`,ip:`192.168.1.100`,location:`New York, US`,status:`success`},{id:`5`,type:`two_factor`,description:`2FA enabled`,timestamp:`3 days ago`,ip:`192.168.1.100`,location:`New York, US`,status:`success`}]}},U={args:{activities:[{id:`1`,type:`login`,description:`Chrome on Windows 11`,timestamp:`5m ago`,ip:`192.168.1.100`,device:`Windows Desktop`,location:`Austin, TX`,status:`success`},{id:`2`,type:`login`,description:`Safari on iPhone 15`,timestamp:`2h ago`,ip:`203.0.113.50`,device:`iPhone 15 Pro`,location:`Austin, TX`,status:`success`},{id:`3`,type:`api_access`,description:`API key: trading-bot-v2`,timestamp:`4h ago`,ip:`10.0.0.5`,device:`API Server`,location:`AWS us-east-1`,status:`success`},{id:`4`,type:`logout`,description:`Session ended (timeout)`,timestamp:`6h ago`,ip:`192.168.1.100`,device:`Windows Desktop`,location:`Austin, TX`,status:`warning`},{id:`5`,type:`login_attempt`,description:`Suspicious login attempt - wrong password 3x`,timestamp:`12h ago`,ip:`45.33.32.156`,device:`Unknown`,location:`Beijing, CN`,status:`failed`},{id:`6`,type:`security_question`,description:`Security questions updated`,timestamp:`2d ago`,ip:`192.168.1.100`,device:`Windows Desktop`,location:`Austin, TX`,status:`success`},{id:`7`,type:`two_factor`,description:`2FA method added: Authenticator App`,timestamp:`5d ago`,ip:`192.168.1.100`,device:`Chrome`,location:`Austin, TX`,status:`success`}]}},W={args:{activities:[{id:`1`,type:`login_attempt`,description:`Brute force attempt blocked`,timestamp:`1m ago`,ip:`185.220.101.45`,location:`Tor Exit Node`,status:`failed`},{id:`2`,type:`login_attempt`,description:`Failed login from unknown device`,timestamp:`5m ago`,ip:`89.45.67.123`,location:`Moscow, RU`,status:`failed`},{id:`3`,type:`login_attempt`,description:`Failed login attempt`,timestamp:`10m ago`,ip:`89.45.67.123`,location:`Moscow, RU`,status:`failed`},{id:`4`,type:`password_change`,description:`Password reset requested`,timestamp:`30m ago`,ip:`192.168.1.100`,location:`New York, US`,status:`warning`},{id:`5`,type:`settings_change`,description:`Notification preferences changed`,timestamp:`1h ago`,ip:`192.168.1.100`,location:`New York, US`,status:`success`}]}},G={render:()=>{let[e,t]=(0,z.useState)([{id:`1`,type:`login`,description:`Login from Chrome`,timestamp:`2m ago`,ip:`192.168.1.100`,location:`New York, US`,status:`success`}]);return(0,B.jsxs)(`div`,{className:`space-y-4`,children:[(0,B.jsx)(L,{activities:e}),(0,B.jsx)(`div`,{className:`flex gap-2`,children:[{type:`login`,desc:`Login from Safari`,status:`success`},{type:`login_attempt`,desc:`Failed login attempt`,status:`failed`},{type:`password_change`,desc:`Password changed`,status:`success`}].map((e,n)=>(0,B.jsxs)(`button`,{onClick:()=>t(t=>[{id:String(Date.now()+n),type:e.type,description:e.desc,timestamp:`Just now`,ip:`192.168.1.`+(100+n),location:`New York, US`,status:e.status},...t]),className:`px-3 py-1.5 text-xs bg-surface-secondary rounded-lg hover:bg-surface-tertiary`,children:[`+ `,e.desc.split(` `).slice(0,2).join(` `)]},n))})]})}},K={args:{activities:[]}},q={parameters:{themes:{themeOverride:`dark`}},args:{activities:[{id:`1`,type:`login`,description:`Login from Firefox on Linux`,timestamp:`5m ago`,ip:`192.168.1.100`,location:`Berlin, DE`,status:`success`},{id:`2`,type:`login_attempt`,description:`Failed login from unknown IP`,timestamp:`1h ago`,ip:`78.46.89.12`,location:`Warsaw, PL`,status:`failed`},{id:`3`,type:`two_factor`,description:`2FA backup code used`,timestamp:`3h ago`,ip:`192.168.1.100`,location:`Berlin, DE`,status:`warning`}]}},J={parameters:{viewport:{defaultViewport:`mobile1`}}},Y={parameters:{docs:{description:{story:`SecurityActivityLog used in a realistic fintech/banking context, demonstrating how it integrates into a financial dashboard workflow.`}}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  args: {
    activities: [{
      id: '1',
      type: 'login',
      description: 'Login from Chrome on macOS',
      timestamp: '2 minutes ago',
      ip: '192.168.1.100',
      location: 'New York, US',
      status: 'success'
    }, {
      id: '2',
      type: 'login',
      description: 'Login from Safari on iOS',
      timestamp: '1 hour ago',
      ip: '203.0.113.45',
      location: 'San Francisco, US',
      status: 'success'
    }, {
      id: '3',
      type: 'login_attempt',
      description: 'Failed login attempt',
      timestamp: '3 hours ago',
      ip: '198.51.100.22',
      location: 'Moscow, RU',
      status: 'failed'
    }, {
      id: '4',
      type: 'password_change',
      description: 'Password changed',
      timestamp: '1 day ago',
      ip: '192.168.1.100',
      location: 'New York, US',
      status: 'success'
    }, {
      id: '5',
      type: 'two_factor',
      description: '2FA enabled',
      timestamp: '3 days ago',
      ip: '192.168.1.100',
      location: 'New York, US',
      status: 'success'
    }]
  }
}`,...H.parameters?.docs?.source}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
  args: {
    activities: [{
      id: '1',
      type: 'login',
      description: 'Chrome on Windows 11',
      timestamp: '5m ago',
      ip: '192.168.1.100',
      device: 'Windows Desktop',
      location: 'Austin, TX',
      status: 'success'
    }, {
      id: '2',
      type: 'login',
      description: 'Safari on iPhone 15',
      timestamp: '2h ago',
      ip: '203.0.113.50',
      device: 'iPhone 15 Pro',
      location: 'Austin, TX',
      status: 'success'
    }, {
      id: '3',
      type: 'api_access',
      description: 'API key: trading-bot-v2',
      timestamp: '4h ago',
      ip: '10.0.0.5',
      device: 'API Server',
      location: 'AWS us-east-1',
      status: 'success'
    }, {
      id: '4',
      type: 'logout',
      description: 'Session ended (timeout)',
      timestamp: '6h ago',
      ip: '192.168.1.100',
      device: 'Windows Desktop',
      location: 'Austin, TX',
      status: 'warning'
    }, {
      id: '5',
      type: 'login_attempt',
      description: 'Suspicious login attempt - wrong password 3x',
      timestamp: '12h ago',
      ip: '45.33.32.156',
      device: 'Unknown',
      location: 'Beijing, CN',
      status: 'failed'
    }, {
      id: '6',
      type: 'security_question',
      description: 'Security questions updated',
      timestamp: '2d ago',
      ip: '192.168.1.100',
      device: 'Windows Desktop',
      location: 'Austin, TX',
      status: 'success'
    }, {
      id: '7',
      type: 'two_factor',
      description: '2FA method added: Authenticator App',
      timestamp: '5d ago',
      ip: '192.168.1.100',
      device: 'Chrome',
      location: 'Austin, TX',
      status: 'success'
    }]
  }
}`,...U.parameters?.docs?.source}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  args: {
    activities: [{
      id: '1',
      type: 'login_attempt',
      description: 'Brute force attempt blocked',
      timestamp: '1m ago',
      ip: '185.220.101.45',
      location: 'Tor Exit Node',
      status: 'failed'
    }, {
      id: '2',
      type: 'login_attempt',
      description: 'Failed login from unknown device',
      timestamp: '5m ago',
      ip: '89.45.67.123',
      location: 'Moscow, RU',
      status: 'failed'
    }, {
      id: '3',
      type: 'login_attempt',
      description: 'Failed login attempt',
      timestamp: '10m ago',
      ip: '89.45.67.123',
      location: 'Moscow, RU',
      status: 'failed'
    }, {
      id: '4',
      type: 'password_change',
      description: 'Password reset requested',
      timestamp: '30m ago',
      ip: '192.168.1.100',
      location: 'New York, US',
      status: 'warning'
    }, {
      id: '5',
      type: 'settings_change',
      description: 'Notification preferences changed',
      timestamp: '1h ago',
      ip: '192.168.1.100',
      location: 'New York, US',
      status: 'success'
    }]
  }
}`,...W.parameters?.docs?.source}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [activities, setActivities] = useState([{
      id: '1',
      type: 'login' as const,
      description: 'Login from Chrome',
      timestamp: '2m ago',
      ip: '192.168.1.100',
      location: 'New York, US',
      status: 'success' as const
    }]);
    const logTypes = [{
      type: 'login' as const,
      desc: 'Login from Safari',
      status: 'success' as const
    }, {
      type: 'login_attempt' as const,
      desc: 'Failed login attempt',
      status: 'failed' as const
    }, {
      type: 'password_change' as const,
      desc: 'Password changed',
      status: 'success' as const
    }];
    return <div className="space-y-4">
                <SecurityActivityLog activities={activities} />
                <div className="flex gap-2">
                    {logTypes.map((log, i) => <button key={i} onClick={() => setActivities(prev => [{
          id: String(Date.now() + i),
          type: log.type,
          description: log.desc,
          timestamp: 'Just now',
          ip: '192.168.1.' + (100 + i),
          location: 'New York, US',
          status: log.status
        }, ...prev])} className="px-3 py-1.5 text-xs bg-surface-secondary rounded-lg hover:bg-surface-tertiary">
                            + {log.desc.split(' ').slice(0, 2).join(' ')}
                        </button>)}
                </div>
            </div>;
  }
}`,...G.parameters?.docs?.source}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  args: {
    activities: []
  }
}`,...K.parameters?.docs?.source}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  parameters: {
    themes: {
      themeOverride: 'dark'
    }
  },
  args: {
    activities: [{
      id: '1',
      type: 'login',
      description: 'Login from Firefox on Linux',
      timestamp: '5m ago',
      ip: '192.168.1.100',
      location: 'Berlin, DE',
      status: 'success'
    }, {
      id: '2',
      type: 'login_attempt',
      description: 'Failed login from unknown IP',
      timestamp: '1h ago',
      ip: '78.46.89.12',
      location: 'Warsaw, PL',
      status: 'failed'
    }, {
      id: '3',
      type: 'two_factor',
      description: '2FA backup code used',
      timestamp: '3h ago',
      ip: '192.168.1.100',
      location: 'Berlin, DE',
      status: 'warning'
    }]
  }
}`,...q.parameters?.docs?.source}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  parameters: {
    viewport: {
      defaultViewport: 'mobile1'
    }
  }
}`,...J.parameters?.docs?.source}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'SecurityActivityLog used in a realistic fintech/banking context, demonstrating how it integrates into a financial dashboard workflow.'
      }
    }
  }
}`,...Y.parameters?.docs?.source}}},X=[`Default`,`WithDeviceInfo`,`SuspicousActivity`,`InteractiveLog`,`Empty`,`DarkMode`,`MobileView`,`FintechUseCase`]}))();export{q as DarkMode,H as Default,K as Empty,Y as FintechUseCase,G as InteractiveLog,J as MobileView,W as SuspicousActivity,U as WithDeviceInfo,X as __namedExportsOrder,V as default};