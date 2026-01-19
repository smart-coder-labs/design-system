import{j as e}from"./jsx-runtime-u17CrQMm.js";import{R,r as D}from"./iframe-Cb93e_Z8.js";import{c as b}from"./utils-CDN07tui.js";import{B as d}from"./Button-DGE0rp2O.js";import{B as U}from"./Badge-CorNdVS6.js";import{B as j}from"./bell-B60OYc86.js";import{m as Y}from"./proxy-b22VB84a.js";import{X as B}from"./x-cLebVC1h.js";import{I as A}from"./info-CXpv8rUx.js";import{C as T}from"./circle-x-Bgm5phFE.js";import{C as S}from"./circle-alert-_hmxvS_r.js";import{C as M}from"./circle-check-DFHq-y0t.js";import{M as $}from"./mail-DPzt2fJt.js";import{C as E}from"./calendar-Cg2_nU_Z.js";import"./preload-helper-PPVm8Dsz.js";import"./createLucideIcon-DjNmKTqa.js";const q=a=>{switch(a){case"success":return e.jsx(M,{className:"w-5 h-5 text-status-success"});case"warning":return e.jsx(S,{className:"w-5 h-5 text-status-warning"});case"error":return e.jsx(T,{className:"w-5 h-5 text-status-error"});default:return e.jsx(A,{className:"w-5 h-5 text-accent-blue"})}},C=R.forwardRef(({notifications:a,onNotificationClick:t,onMarkAllRead:c,onClearAll:l,onDismiss:m,className:v,...i},n)=>{const o=a.filter(s=>!s.read).length;return e.jsxs("div",{ref:n,className:b("w-full max-w-md bg-surface-primary border border-border-primary rounded-2xl shadow-xl overflow-hidden",v),...i,children:[e.jsxs("div",{className:"flex items-center justify-between px-6 py-4 border-b border-border-primary",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx(j,{className:"w-5 h-5 text-text-primary"}),e.jsx("h2",{className:"text-lg font-semibold text-text-primary",children:"Notifications"}),o>0&&e.jsx(U,{variant:"error",size:"sm",children:o})]}),e.jsxs("div",{className:"flex items-center gap-2",children:[c&&o>0&&e.jsx(d,{variant:"ghost",size:"sm",onClick:c,children:"Mark all read"}),l&&a.length>0&&e.jsx(d,{variant:"ghost",size:"sm",onClick:l,children:"Clear all"})]})]}),e.jsx("div",{className:"max-h-[600px] overflow-y-auto",children:a.length===0?e.jsxs("div",{className:"flex flex-col items-center justify-center py-12 px-6 text-center",children:[e.jsx(j,{className:"w-12 h-12 text-text-tertiary mb-3"}),e.jsx("p",{className:"text-sm font-medium text-text-primary mb-1",children:"No notifications"}),e.jsx("p",{className:"text-xs text-text-secondary",children:"You're all caught up!"})]}):e.jsx("div",{className:"divide-y divide-border-primary",children:a.map((s,P)=>e.jsx(Y.div,{initial:{opacity:0,x:-10},animate:{opacity:1,x:0},transition:{delay:P*.05},className:b("relative px-6 py-4 transition-colors",!s.read&&"bg-accent-blue/5","hover:bg-surface-secondary/50"),onClick:()=>t?.(s),children:e.jsxs("div",{className:"flex items-start gap-3",children:[e.jsx("div",{className:"flex-shrink-0 mt-0.5",children:s.icon||q(s.type)}),e.jsxs("div",{className:"flex-1 min-w-0",children:[e.jsxs("div",{className:"flex items-start justify-between gap-2 mb-1",children:[e.jsx("h3",{className:b("text-sm font-semibold",s.read?"text-text-secondary":"text-text-primary"),children:s.title}),!s.read&&e.jsx("div",{className:"w-2 h-2 bg-accent-blue rounded-full flex-shrink-0 mt-1.5"})]}),s.message&&e.jsx("p",{className:"text-xs text-text-secondary mb-2 line-clamp-2",children:s.message}),e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("span",{className:"text-xs text-text-tertiary",children:s.timestamp}),s.action&&e.jsx(d,{variant:"ghost",size:"sm",onClick:w=>{w.stopPropagation(),s.action?.onClick()},children:s.action.label})]})]}),m&&e.jsx(d,{variant:"ghost",size:"sm",onClick:w=>{w.stopPropagation(),m(s)},className:"flex-shrink-0",children:e.jsx(B,{className:"w-4 h-4"})})]})},s.id))})})]})});C.displayName="NotificationCenterPanel";C.__docgenInfo={description:"",methods:[],displayName:"NotificationCenterPanel",props:{notifications:{required:!0,tsType:{name:"Array",elements:[{name:"Notification"}],raw:"Notification[]"},description:""},onNotificationClick:{required:!1,tsType:{name:"signature",type:"function",raw:"(notification: Notification) => void",signature:{arguments:[{type:{name:"Notification"},name:"notification"}],return:{name:"void"}}},description:""},onMarkAllRead:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onClearAll:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onDismiss:{required:!1,tsType:{name:"signature",type:"function",raw:"(notification: Notification) => void",signature:{arguments:[{type:{name:"Notification"},name:"notification"}],return:{name:"void"}}},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};const ae={title:"Components/NotificationCenterPanel",component:C,parameters:{layout:"centered"},tags:["autodocs"]},r=[{id:"1",title:"New message from Sarah",message:"Hey! Are we still on for the meeting tomorrow?",type:"info",timestamp:"2 minutes ago",read:!1,icon:e.jsx($,{className:"w-5 h-5"})},{id:"2",title:"Meeting reminder",message:"Team standup starts in 15 minutes",type:"info",timestamp:"10 minutes ago",read:!1,icon:e.jsx(E,{className:"w-5 h-5"})},{id:"3",title:"Deployment successful",message:"Your application has been deployed to production",type:"success",timestamp:"1 hour ago",read:!0,icon:e.jsx(M,{className:"w-5 h-5"})},{id:"4",title:"Security alert",message:"New login from unrecognized device",type:"warning",timestamp:"3 hours ago",read:!1,icon:e.jsx(S,{className:"w-5 h-5"}),action:{label:"Review",onClick:()=>console.log("Review security alert")}},{id:"5",title:"System update available",message:"A new version is ready to install",type:"info",timestamp:"1 day ago",read:!0,icon:e.jsx(A,{className:"w-5 h-5"}),action:{label:"Update",onClick:()=>console.log("Update system")}}],p={args:{notifications:r}},u={args:{notifications:r,onNotificationClick:a=>console.log("Clicked:",a),onMarkAllRead:()=>console.log("Mark all as read"),onClearAll:()=>console.log("Clear all"),onDismiss:a=>console.log("Dismiss:",a)}},f={args:{notifications:r},render:()=>{const[a,t]=D.useState(r),c=i=>{console.log("Notification clicked:",i),t(n=>n.map(o=>o.id===i.id?{...o,read:!0}:o))},l=()=>{console.log("Marking all as read"),t(i=>i.map(n=>({...n,read:!0})))},m=()=>{console.log("Clearing all notifications"),t([])},v=i=>{console.log("Dismissing:",i),t(n=>n.filter(o=>o.id!==i.id))};return e.jsx("div",{className:"w-full max-w-md",children:e.jsx(C,{notifications:a,onNotificationClick:c,onMarkAllRead:l,onClearAll:m,onDismiss:v})})}},g={args:{notifications:[]}},y={args:{notifications:r.filter(a=>!a.read),onMarkAllRead:()=>console.log("Mark all as read")}},x={args:{notifications:[{id:"1",title:"Payment processed",message:"Your payment of $99.99 has been successfully processed",type:"success",timestamp:"5 minutes ago",read:!1},{id:"2",title:"Profile updated",message:"Your profile information has been updated",type:"success",timestamp:"1 hour ago",read:!1},{id:"3",title:"Backup completed",message:"Your data has been backed up successfully",type:"success",timestamp:"2 hours ago",read:!0}]}},h={args:{notifications:[{id:"1",title:"Storage almost full",message:"You are using 95% of your storage space",type:"warning",timestamp:"10 minutes ago",read:!1,action:{label:"Upgrade",onClick:()=>console.log("Upgrade storage")}},{id:"2",title:"Unusual activity detected",message:"We noticed unusual login attempts on your account",type:"warning",timestamp:"1 hour ago",read:!1,action:{label:"Secure Account",onClick:()=>console.log("Secure account")}}]}},N={args:{notifications:[{id:"1",title:"Payment failed",message:"Your payment could not be processed. Please update your payment method.",type:"error",timestamp:"5 minutes ago",read:!1,action:{label:"Update Payment",onClick:()=>console.log("Update payment")}},{id:"2",title:"Sync error",message:"Failed to sync your data. Please try again.",type:"error",timestamp:"30 minutes ago",read:!1,action:{label:"Retry",onClick:()=>console.log("Retry sync")}}]}},k={args:{notifications:[...r,...r.map((a,t)=>({...a,id:`${a.id}-${t}`,timestamp:`${t+2} days ago`}))]}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    notifications: sampleNotifications
  }
}`,...p.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    notifications: sampleNotifications,
    onNotificationClick: notification => console.log('Clicked:', notification),
    onMarkAllRead: () => console.log('Mark all as read'),
    onClearAll: () => console.log('Clear all'),
    onDismiss: notification => console.log('Dismiss:', notification)
  }
}`,...u.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
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
}`,...f.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    notifications: []
  }
}`,...g.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    notifications: sampleNotifications.filter(n => !n.read),
    onMarkAllRead: () => console.log('Mark all as read')
  }
}`,...y.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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
}`,...x.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
}`,...h.parameters?.docs?.source}}};N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
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
}`,...N.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  args: {
    notifications: [...sampleNotifications, ...sampleNotifications.map((n, i) => ({
      ...n,
      id: \`\${n.id}-\${i}\`,
      timestamp: \`\${i + 2} days ago\`
    }))]
  }
}`,...k.parameters?.docs?.source}}};const se=["Default","WithActions","FullyInteractive","Empty","UnreadOnly","SuccessNotifications","WarningNotifications","ErrorNotifications","ManyNotifications"];export{p as Default,g as Empty,N as ErrorNotifications,f as FullyInteractive,k as ManyNotifications,x as SuccessNotifications,y as UnreadOnly,h as WarningNotifications,u as WithActions,se as __namedExportsOrder,ae as default};
