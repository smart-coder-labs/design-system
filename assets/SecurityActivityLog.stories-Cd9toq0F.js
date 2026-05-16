import{n as e,o as t}from"./chunk-jRWAZmH_.js";import{a as n}from"./iframe-jtk2jlYO.js";import{n as r,t as i}from"./utils-4pdYZGDS.js";import{t as a}from"./jsx-runtime-BK76Wfr-.js";import{H as o,Lt as s,Pt as c,Rt as l,Yn as u,Yt as d,qn as f,t as p,un as m,v as h}from"./lucide-react-LrcM5b-z.js";import{n as g,r as _,t as v}from"./ActivityFeed-J07BC0JS.js";var y,b,x,S,C,w=e((()=>{y=t(n()),r(),b=a(),_(),p(),x=e=>{switch(e){case`login`:return l;case`logout`:return s;case`password_change`:case`password_reset`:return d;case`2fa_enabled`:case`2fa_disabled`:return o;case`device_added`:case`device_removed`:return o;case`suspicious_activity`:return h;case`permission_granted`:return u;case`permission_revoked`:return f;default:return v}},S=(e,t)=>t===`error`||e===`suspicious_activity`?`alert`:t===`success`?`success`:`default`,C=y.forwardRef(({events:e,onEventClick:t,className:n,...r},a)=>(0,b.jsx)(`div`,{ref:a,className:i(`w-full`,n),...r,children:(0,b.jsx)(v,{children:e.map((t,n)=>{let r=x(t.type),i=S(t.type,t.status);return(0,b.jsx)(g,{actor:{name:t.user||`System`,initials:t.user?.charAt(0).toUpperCase()||`S`},action:t.description,date:t.timestamp,type:i,icon:r,isLast:n===e.length-1,children:(0,b.jsxs)(`div`,{className:`space-y-2 text-xs`,children:[t.location&&(0,b.jsxs)(`div`,{className:`flex items-center gap-2 text-text-secondary`,children:[(0,b.jsx)(c,{className:`w-3 h-3`}),(0,b.jsx)(`span`,{children:t.location})]}),t.ipAddress&&(0,b.jsxs)(`div`,{className:`flex items-center gap-2 text-text-secondary`,children:[(0,b.jsx)(m,{className:`w-3 h-3`}),(0,b.jsx)(`span`,{children:t.ipAddress})]}),t.device&&(0,b.jsxs)(`div`,{className:`text-text-tertiary`,children:[`Device: `,t.device]})]})},t.id)})})})),C.displayName=`SecurityActivityLog`,C.__docgenInfo={description:``,methods:[],displayName:`SecurityActivityLog`,props:{events:{required:!0,tsType:{name:`Array`,elements:[{name:`SecurityEvent`}],raw:`SecurityEvent[]`},description:``},onEventClick:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(event: SecurityEvent) => void`,signature:{arguments:[{type:{name:`SecurityEvent`},name:`event`}],return:{name:`void`}}},description:``},className:{required:!1,tsType:{name:`string`},description:``}}}})),T,E,D,O,k,A,j,M,N,P,F,I;e((()=>{w(),T=t(n()),E=a(),D={title:`Data Display/SecurityActivityLog`,component:C,tags:[`autodocs`]},O={args:{activities:[{id:`1`,type:`login`,description:`Login from Chrome on macOS`,timestamp:`2 minutes ago`,ip:`192.168.1.100`,location:`New York, US`,status:`success`},{id:`2`,type:`login`,description:`Login from Safari on iOS`,timestamp:`1 hour ago`,ip:`203.0.113.45`,location:`San Francisco, US`,status:`success`},{id:`3`,type:`login_attempt`,description:`Failed login attempt`,timestamp:`3 hours ago`,ip:`198.51.100.22`,location:`Moscow, RU`,status:`failed`},{id:`4`,type:`password_change`,description:`Password changed`,timestamp:`1 day ago`,ip:`192.168.1.100`,location:`New York, US`,status:`success`},{id:`5`,type:`two_factor`,description:`2FA enabled`,timestamp:`3 days ago`,ip:`192.168.1.100`,location:`New York, US`,status:`success`}]}},k={args:{activities:[{id:`1`,type:`login`,description:`Chrome on Windows 11`,timestamp:`5m ago`,ip:`192.168.1.100`,device:`Windows Desktop`,location:`Austin, TX`,status:`success`},{id:`2`,type:`login`,description:`Safari on iPhone 15`,timestamp:`2h ago`,ip:`203.0.113.50`,device:`iPhone 15 Pro`,location:`Austin, TX`,status:`success`},{id:`3`,type:`api_access`,description:`API key: trading-bot-v2`,timestamp:`4h ago`,ip:`10.0.0.5`,device:`API Server`,location:`AWS us-east-1`,status:`success`},{id:`4`,type:`logout`,description:`Session ended (timeout)`,timestamp:`6h ago`,ip:`192.168.1.100`,device:`Windows Desktop`,location:`Austin, TX`,status:`warning`},{id:`5`,type:`login_attempt`,description:`Suspicious login attempt - wrong password 3x`,timestamp:`12h ago`,ip:`45.33.32.156`,device:`Unknown`,location:`Beijing, CN`,status:`failed`},{id:`6`,type:`security_question`,description:`Security questions updated`,timestamp:`2d ago`,ip:`192.168.1.100`,device:`Windows Desktop`,location:`Austin, TX`,status:`success`},{id:`7`,type:`two_factor`,description:`2FA method added: Authenticator App`,timestamp:`5d ago`,ip:`192.168.1.100`,device:`Chrome`,location:`Austin, TX`,status:`success`}]}},A={args:{activities:[{id:`1`,type:`login_attempt`,description:`Brute force attempt blocked`,timestamp:`1m ago`,ip:`185.220.101.45`,location:`Tor Exit Node`,status:`failed`},{id:`2`,type:`login_attempt`,description:`Failed login from unknown device`,timestamp:`5m ago`,ip:`89.45.67.123`,location:`Moscow, RU`,status:`failed`},{id:`3`,type:`login_attempt`,description:`Failed login attempt`,timestamp:`10m ago`,ip:`89.45.67.123`,location:`Moscow, RU`,status:`failed`},{id:`4`,type:`password_change`,description:`Password reset requested`,timestamp:`30m ago`,ip:`192.168.1.100`,location:`New York, US`,status:`warning`},{id:`5`,type:`settings_change`,description:`Notification preferences changed`,timestamp:`1h ago`,ip:`192.168.1.100`,location:`New York, US`,status:`success`}]}},j={render:()=>{let[e,t]=(0,T.useState)([{id:`1`,type:`login`,description:`Login from Chrome`,timestamp:`2m ago`,ip:`192.168.1.100`,location:`New York, US`,status:`success`}]);return(0,E.jsxs)(`div`,{className:`space-y-4`,children:[(0,E.jsx)(C,{activities:e}),(0,E.jsx)(`div`,{className:`flex gap-2`,children:[{type:`login`,desc:`Login from Safari`,status:`success`},{type:`login_attempt`,desc:`Failed login attempt`,status:`failed`},{type:`password_change`,desc:`Password changed`,status:`success`}].map((e,n)=>(0,E.jsxs)(`button`,{onClick:()=>t(t=>[{id:String(Date.now()+n),type:e.type,description:e.desc,timestamp:`Just now`,ip:`192.168.1.`+(100+n),location:`New York, US`,status:e.status},...t]),className:`px-3 py-1.5 text-xs bg-surface-secondary rounded-lg hover:bg-surface-tertiary`,children:[`+ `,e.desc.split(` `).slice(0,2).join(` `)]},n))})]})}},M={args:{activities:[]}},N={parameters:{themes:{themeOverride:`dark`}},args:{activities:[{id:`1`,type:`login`,description:`Login from Firefox on Linux`,timestamp:`5m ago`,ip:`192.168.1.100`,location:`Berlin, DE`,status:`success`},{id:`2`,type:`login_attempt`,description:`Failed login from unknown IP`,timestamp:`1h ago`,ip:`78.46.89.12`,location:`Warsaw, PL`,status:`failed`},{id:`3`,type:`two_factor`,description:`2FA backup code used`,timestamp:`3h ago`,ip:`192.168.1.100`,location:`Berlin, DE`,status:`warning`}]}},P={parameters:{viewport:{defaultViewport:`mobile1`}}},F={parameters:{docs:{description:{story:`SecurityActivityLog used in a realistic fintech/banking context, demonstrating how it integrates into a financial dashboard workflow.`}}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
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
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
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
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
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
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
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
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  args: {
    activities: []
  }
}`,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
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
}`,...N.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  parameters: {
    viewport: {
      defaultViewport: 'mobile1'
    }
  }
}`,...P.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'SecurityActivityLog used in a realistic fintech/banking context, demonstrating how it integrates into a financial dashboard workflow.'
      }
    }
  }
}`,...F.parameters?.docs?.source}}},I=[`Default`,`WithDeviceInfo`,`SuspicousActivity`,`InteractiveLog`,`Empty`,`DarkMode`,`MobileView`,`FintechUseCase`]}))();export{N as DarkMode,O as Default,M as Empty,F as FintechUseCase,j as InteractiveLog,P as MobileView,A as SuspicousActivity,k as WithDeviceInfo,I as __namedExportsOrder,D as default};