import{n as e,o as t}from"./chunk-jRWAZmH_.js";import{a as n}from"./iframe-C3uANx_z.js";import{Gn as r,Pt as i,Yn as a,Zt as o,cr as s,i as c,qn as l,t as u,yr as d}from"./lucide-react-h9NbdGwk.js";import{n as f,t as p}from"./utils-CcEteFRA.js";import{t as m}from"./jsx-runtime-WZfjI2gv.js";import{s as h,t as g}from"./es-Y5rqk_dr.js";import{n as _,t as v}from"./Button-DZsJlLci.js";import{n as y,t as b}from"./Badge-BuZjI4Ov.js";var x,S,C,w,T=e((()=>{x=t(n()),f(),g(),u(),v(),b(),S=m(),C=e=>{switch(e){case`success`:return(0,S.jsx)(l,{className:`w-5 h-5 text-status-success`});case`warning`:return(0,S.jsx)(a,{className:`w-5 h-5 text-status-warning`});case`error`:return(0,S.jsx)(r,{className:`w-5 h-5 text-status-error`});default:return(0,S.jsx)(o,{className:`w-5 h-5 text-accent-blue`})}},w=x.forwardRef(({notifications:e,onNotificationClick:t,onMarkAllRead:n,onClearAll:r,onDismiss:i,className:a,...o},s)=>{let l=e.filter(e=>!e.read).length;return(0,S.jsxs)(`div`,{ref:s,className:p(`w-full max-w-md bg-surface-primary border border-border-primary rounded-2xl shadow-xl overflow-hidden`,a),...o,children:[(0,S.jsxs)(`div`,{className:`flex items-center justify-between px-6 py-4 border-b border-border-primary`,children:[(0,S.jsxs)(`div`,{className:`flex items-center gap-3`,children:[(0,S.jsx)(d,{className:`w-5 h-5 text-text-primary`}),(0,S.jsx)(`h2`,{className:`text-lg font-semibold text-text-primary`,children:`Notifications`}),l>0&&(0,S.jsx)(y,{variant:`error`,size:`sm`,children:l})]}),(0,S.jsxs)(`div`,{className:`flex items-center gap-2`,children:[n&&l>0&&(0,S.jsx)(_,{variant:`ghost`,size:`sm`,onClick:n,children:`Mark all read`}),r&&e.length>0&&(0,S.jsx)(_,{variant:`ghost`,size:`sm`,onClick:r,children:`Clear all`})]})]}),(0,S.jsx)(`div`,{className:`max-h-[600px] overflow-y-auto`,children:e.length===0?(0,S.jsxs)(`div`,{className:`flex flex-col items-center justify-center py-12 px-6 text-center`,children:[(0,S.jsx)(d,{className:`w-12 h-12 text-text-tertiary mb-3`}),(0,S.jsx)(`p`,{className:`text-sm font-medium text-text-primary mb-1`,children:`No notifications`}),(0,S.jsx)(`p`,{className:`text-xs text-text-secondary`,children:`You're all caught up!`})]}):(0,S.jsx)(`div`,{className:`divide-y divide-border-primary`,children:e.map((e,n)=>(0,S.jsx)(h.div,{initial:{opacity:0,x:-10},animate:{opacity:1,x:0},transition:{delay:n*.05},className:p(`relative px-6 py-4 transition-colors`,!e.read&&`bg-accent-blue/5`,`hover:bg-surface-secondary/50`),onClick:()=>t?.(e),children:(0,S.jsxs)(`div`,{className:`flex items-start gap-3`,children:[(0,S.jsx)(`div`,{className:`flex-shrink-0 mt-0.5`,children:e.icon||C(e.type)}),(0,S.jsxs)(`div`,{className:`flex-1 min-w-0`,children:[(0,S.jsxs)(`div`,{className:`flex items-start justify-between gap-2 mb-1`,children:[(0,S.jsx)(`h3`,{className:p(`text-sm font-semibold`,e.read?`text-text-secondary`:`text-text-primary`),children:e.title}),!e.read&&(0,S.jsx)(`div`,{className:`w-2 h-2 bg-accent-blue rounded-full flex-shrink-0 mt-1.5`})]}),e.message&&(0,S.jsx)(`p`,{className:`text-xs text-text-secondary mb-2 line-clamp-2`,children:e.message}),(0,S.jsxs)(`div`,{className:`flex items-center justify-between`,children:[(0,S.jsx)(`span`,{className:`text-xs text-text-tertiary`,children:e.timestamp}),e.action&&(0,S.jsx)(_,{variant:`ghost`,size:`sm`,onClick:t=>{t.stopPropagation(),e.action?.onClick()},children:e.action.label})]})]}),i&&(0,S.jsx)(_,{variant:`ghost`,size:`sm`,onClick:t=>{t.stopPropagation(),i(e)},className:`flex-shrink-0`,children:(0,S.jsx)(c,{className:`w-4 h-4`})})]})},e.id))})})]})}),w.displayName=`NotificationCenterPanel`,w.__docgenInfo={description:``,methods:[],displayName:`NotificationCenterPanel`,props:{notifications:{required:!0,tsType:{name:`Array`,elements:[{name:`Notification`}],raw:`Notification[]`},description:``},onNotificationClick:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(notification: Notification) => void`,signature:{arguments:[{type:{name:`Notification`},name:`notification`}],return:{name:`void`}}},description:``},onMarkAllRead:{required:!1,tsType:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}},description:``},onClearAll:{required:!1,tsType:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}},description:``},onDismiss:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(notification: Notification) => void`,signature:{arguments:[{type:{name:`Notification`},name:`notification`}],return:{name:`void`}}},description:``},className:{required:!1,tsType:{name:`string`},description:``}}}})),E,D,O,k,A,j,M,N,P,F,I,L,R,z;e((()=>{T(),u(),E=t(n()),D=m(),O={title:`Surfaces/NotificationCenterPanel`,component:w,parameters:{layout:`centered`},tags:[`autodocs`]},k=[{id:`1`,title:`New message from Sarah`,message:`Hey! Are we still on for the meeting tomorrow?`,type:`info`,timestamp:`2 minutes ago`,read:!1,icon:(0,D.jsx)(i,{className:`w-5 h-5`})},{id:`2`,title:`Meeting reminder`,message:`Team standup starts in 15 minutes`,type:`info`,timestamp:`10 minutes ago`,read:!1,icon:(0,D.jsx)(s,{className:`w-5 h-5`})},{id:`3`,title:`Deployment successful`,message:`Your application has been deployed to production`,type:`success`,timestamp:`1 hour ago`,read:!0,icon:(0,D.jsx)(l,{className:`w-5 h-5`})},{id:`4`,title:`Security alert`,message:`New login from unrecognized device`,type:`warning`,timestamp:`3 hours ago`,read:!1,icon:(0,D.jsx)(a,{className:`w-5 h-5`}),action:{label:`Review`,onClick:()=>console.log(`Review security alert`)}},{id:`5`,title:`System update available`,message:`A new version is ready to install`,type:`info`,timestamp:`1 day ago`,read:!0,icon:(0,D.jsx)(o,{className:`w-5 h-5`}),action:{label:`Update`,onClick:()=>console.log(`Update system`)}}],A={args:{notifications:k}},j={args:{notifications:k,onNotificationClick:e=>console.log(`Clicked:`,e),onMarkAllRead:()=>console.log(`Mark all as read`),onClearAll:()=>console.log(`Clear all`),onDismiss:e=>console.log(`Dismiss:`,e)}},M={args:{notifications:k},render:()=>{let[e,t]=(0,E.useState)(k);return(0,D.jsx)(`div`,{className:`w-full max-w-md`,children:(0,D.jsx)(w,{notifications:e,onNotificationClick:e=>{console.log(`Notification clicked:`,e),t(t=>t.map(t=>t.id===e.id?{...t,read:!0}:t))},onMarkAllRead:()=>{console.log(`Marking all as read`),t(e=>e.map(e=>({...e,read:!0})))},onClearAll:()=>{console.log(`Clearing all notifications`),t([])},onDismiss:e=>{console.log(`Dismissing:`,e),t(t=>t.filter(t=>t.id!==e.id))}})})}},N={args:{notifications:[]}},P={args:{notifications:k.filter(e=>!e.read),onMarkAllRead:()=>console.log(`Mark all as read`)}},F={args:{notifications:[{id:`1`,title:`Payment processed`,message:`Your payment of $99.99 has been successfully processed`,type:`success`,timestamp:`5 minutes ago`,read:!1},{id:`2`,title:`Profile updated`,message:`Your profile information has been updated`,type:`success`,timestamp:`1 hour ago`,read:!1},{id:`3`,title:`Backup completed`,message:`Your data has been backed up successfully`,type:`success`,timestamp:`2 hours ago`,read:!0}]}},I={args:{notifications:[{id:`1`,title:`Storage almost full`,message:`You are using 95% of your storage space`,type:`warning`,timestamp:`10 minutes ago`,read:!1,action:{label:`Upgrade`,onClick:()=>console.log(`Upgrade storage`)}},{id:`2`,title:`Unusual activity detected`,message:`We noticed unusual login attempts on your account`,type:`warning`,timestamp:`1 hour ago`,read:!1,action:{label:`Secure Account`,onClick:()=>console.log(`Secure account`)}}]}},L={args:{notifications:[{id:`1`,title:`Payment failed`,message:`Your payment could not be processed. Please update your payment method.`,type:`error`,timestamp:`5 minutes ago`,read:!1,action:{label:`Update Payment`,onClick:()=>console.log(`Update payment`)}},{id:`2`,title:`Sync error`,message:`Failed to sync your data. Please try again.`,type:`error`,timestamp:`30 minutes ago`,read:!1,action:{label:`Retry`,onClick:()=>console.log(`Retry sync`)}}]}},R={args:{notifications:[...k,...k.map((e,t)=>({...e,id:`${e.id}-${t}`,timestamp:`${t+2} days ago`}))]}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  args: {
    notifications: sampleNotifications
  }
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  args: {
    notifications: sampleNotifications,
    onNotificationClick: notification => console.log('Clicked:', notification),
    onMarkAllRead: () => console.log('Mark all as read'),
    onClearAll: () => console.log('Clear all'),
    onDismiss: notification => console.log('Dismiss:', notification)
  }
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  args: {
    notifications: sampleNotifications
  },
  render: () => {
    const [notifications, setNotifications] = useState(sampleNotifications);
    const handleNotificationClick = (notification: Notification) => {
      console.log('Notification clicked:', notification);
      // Mark as read when clicked
      setNotifications(prev => prev.map(n => n.id === notification.id ? {
        ...n,
        read: true
      } : n));
    };
    const handleMarkAllRead = () => {
      console.log('Marking all as read');
      setNotifications(prev => prev.map(n => ({
        ...n,
        read: true
      })));
    };
    const handleClearAll = () => {
      console.log('Clearing all notifications');
      setNotifications([]);
    };
    const handleDismiss = (notification: Notification) => {
      console.log('Dismissing:', notification);
      setNotifications(prev => prev.filter(n => n.id !== notification.id));
    };
    return <div className="w-full max-w-md">
                <NotificationCenterPanel notifications={notifications} onNotificationClick={handleNotificationClick} onMarkAllRead={handleMarkAllRead} onClearAll={handleClearAll} onDismiss={handleDismiss} />
            </div>;
  }
}`,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  args: {
    notifications: []
  }
}`,...N.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  args: {
    notifications: sampleNotifications.filter(n => !n.read),
    onMarkAllRead: () => console.log('Mark all as read')
  }
}`,...P.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  args: {
    notifications: [{
      id: '1',
      title: 'Payment processed',
      message: 'Your payment of $99.99 has been successfully processed',
      type: 'success' as const,
      timestamp: '5 minutes ago',
      read: false
    }, {
      id: '2',
      title: 'Profile updated',
      message: 'Your profile information has been updated',
      type: 'success' as const,
      timestamp: '1 hour ago',
      read: false
    }, {
      id: '3',
      title: 'Backup completed',
      message: 'Your data has been backed up successfully',
      type: 'success' as const,
      timestamp: '2 hours ago',
      read: true
    }]
  }
}`,...F.parameters?.docs?.source}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  args: {
    notifications: [{
      id: '1',
      title: 'Storage almost full',
      message: 'You are using 95% of your storage space',
      type: 'warning' as const,
      timestamp: '10 minutes ago',
      read: false,
      action: {
        label: 'Upgrade',
        onClick: () => console.log('Upgrade storage')
      }
    }, {
      id: '2',
      title: 'Unusual activity detected',
      message: 'We noticed unusual login attempts on your account',
      type: 'warning' as const,
      timestamp: '1 hour ago',
      read: false,
      action: {
        label: 'Secure Account',
        onClick: () => console.log('Secure account')
      }
    }]
  }
}`,...I.parameters?.docs?.source}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  args: {
    notifications: [{
      id: '1',
      title: 'Payment failed',
      message: 'Your payment could not be processed. Please update your payment method.',
      type: 'error' as const,
      timestamp: '5 minutes ago',
      read: false,
      action: {
        label: 'Update Payment',
        onClick: () => console.log('Update payment')
      }
    }, {
      id: '2',
      title: 'Sync error',
      message: 'Failed to sync your data. Please try again.',
      type: 'error' as const,
      timestamp: '30 minutes ago',
      read: false,
      action: {
        label: 'Retry',
        onClick: () => console.log('Retry sync')
      }
    }]
  }
}`,...L.parameters?.docs?.source}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  args: {
    notifications: [...sampleNotifications, ...sampleNotifications.map((n, i) => ({
      ...n,
      id: \`\${n.id}-\${i}\`,
      timestamp: \`\${i + 2} days ago\`
    }))]
  }
}`,...R.parameters?.docs?.source}}},z=[`Default`,`WithActions`,`FullyInteractive`,`Empty`,`UnreadOnly`,`SuccessNotifications`,`WarningNotifications`,`ErrorNotifications`,`ManyNotifications`]}))();export{A as Default,N as Empty,L as ErrorNotifications,M as FullyInteractive,R as ManyNotifications,F as SuccessNotifications,P as UnreadOnly,I as WarningNotifications,j as WithActions,z as __namedExportsOrder,O as default};