import{j as e}from"./jsx-runtime-u17CrQMm.js";import{r as R}from"./iframe-BQuKaBw1.js";import{M as l,R as h}from"./MessageReactions-OrX7ltmI.js";import{C as y}from"./ChatBubble-D_fz64mT.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-CDN07tui.js";import"./proxy-DCsQVuEn.js";import"./createLucideIcon-7-Glrotp.js";import"./thumbs-up-BJUrq61c.js";import"./heart-DcXMZ7mV.js";import"./Avatar-DAqbCRjS.js";import"./index-B_jtOnfb.js";const A={title:"Data Display/MessageReactions",component:l,parameters:{layout:"padded",docs:{description:{component:"Sistema de reacciones para mensajes. Permite a los usuarios reaccionar a mensajes con diferentes emojis y ver quién ha reaccionado."}}},tags:[]},r=[{type:"like",count:5,userReacted:!0},{type:"love",count:2},{type:"laugh",count:8,userReacted:!1}],o={args:{reactions:r},decorators:[t=>e.jsx("div",{className:"max-w-md mx-auto",children:e.jsx(t,{})})]},c={name:"Con Usuarios",args:{reactions:[{type:"like",count:5,users:["Alice","Bob","Charlie"],userReacted:!0},{type:"love",count:2,users:["Diana"],userReacted:!1}],showUsers:!0},decorators:[t=>e.jsx("div",{className:"max-w-md mx-auto",children:e.jsx(t,{})})]},n={name:"Sin Contador",args:{reactions:r,showCount:!1},decorators:[t=>e.jsx("div",{className:"max-w-md mx-auto",children:e.jsx(t,{})})]},i={args:{reactions:r},name:"En Chat Bubble",render:()=>e.jsxs("div",{className:"max-w-md mx-auto space-y-4",children:[e.jsx(y,{message:"Check out this amazing feature!",isOwn:!0,timestamp:"10:30 AM",children:e.jsx(l,{reactions:[{type:"like",count:12,userReacted:!0},{type:"love",count:5},{type:"laugh",count:3}]})}),e.jsx(y,{message:"That's really cool! 🎉",sender:"Alice",isOwn:!1,timestamp:"10:31 AM",children:e.jsx(l,{reactions:[{type:"like",count:1},{type:"thumbs-up",count:2}]})})]})},m={args:{reactions:r},name:"Reaction Picker",render:()=>{const[t,d]=R.useState(null);return e.jsxs("div",{className:"max-w-md mx-auto space-y-4",children:[e.jsx(h,{onReactionSelect:a=>{d(a),console.log("Selected:",a)}}),t&&e.jsxs("p",{className:"text-sm text-text-secondary",children:["Selected reaction: ",e.jsx("span",{className:"font-semibold",children:t})]})]})}},u={args:{reactions:r},name:"Interactivo",render:()=>{const[t,d]=R.useState([{type:"like",count:0}]),a=p=>{d(x=>x.find(s=>s.type===p)?x.map(s=>s.type===p?{...s,count:s.userReacted?s.count-1:s.count+1,userReacted:!s.userReacted}:s):[...x,{type:p,count:1,userReacted:!0}])};return e.jsxs("div",{className:"max-w-md mx-auto space-y-4",children:[e.jsx(y,{message:"Click on reactions to interact!",isOwn:!0,timestamp:"Now",children:e.jsx(l,{reactions:t,onReactionClick:a})}),e.jsx(h,{onReactionSelect:a})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    reactions: sampleReactions
  },
  decorators: [Story => <div className="max-w-md mx-auto">
                <Story />
            </div>]
}`,...o.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  name: 'Con Usuarios',
  args: {
    reactions: [{
      type: 'like',
      count: 5,
      users: ['Alice', 'Bob', 'Charlie'],
      userReacted: true
    }, {
      type: 'love',
      count: 2,
      users: ['Diana'],
      userReacted: false
    }],
    showUsers: true
  },
  decorators: [Story => <div className="max-w-md mx-auto">
                <Story />
            </div>]
}`,...c.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  name: 'Sin Contador',
  args: {
    reactions: sampleReactions,
    showCount: false
  },
  decorators: [Story => <div className="max-w-md mx-auto">
                <Story />
            </div>]
}`,...n.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    reactions: sampleReactions
  },
  name: 'En Chat Bubble',
  render: () => <div className="max-w-md mx-auto space-y-4">
            <ChatBubble message="Check out this amazing feature!" isOwn={true} timestamp="10:30 AM">
                <MessageReactions reactions={[{
        type: 'like',
        count: 12,
        userReacted: true
      }, {
        type: 'love',
        count: 5
      }, {
        type: 'laugh',
        count: 3
      }]} />
            </ChatBubble>
            <ChatBubble message="That's really cool! 🎉" sender="Alice" isOwn={false} timestamp="10:31 AM">
                <MessageReactions reactions={[{
        type: 'like',
        count: 1
      }, {
        type: 'thumbs-up',
        count: 2
      }]} />
            </ChatBubble>
        </div>
}`,...i.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    reactions: sampleReactions
  },
  name: 'Reaction Picker',
  render: () => {
    const [selected, setSelected] = useState<string | null>(null);
    return <div className="max-w-md mx-auto space-y-4">
                <ReactionPicker onReactionSelect={type => {
        setSelected(type);
        console.log('Selected:', type);
      }} />
                {selected && <p className="text-sm text-text-secondary">
                        Selected reaction: <span className="font-semibold">{selected}</span>
                    </p>}
            </div>;
  }
}`,...m.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    reactions: sampleReactions
  },
  name: 'Interactivo',
  render: () => {
    const [reactions, setReactions] = useState<Reaction[]>([{
      type: 'like',
      count: 0
    }]);
    const handleReactionClick = (type: string) => {
      setReactions(prev => {
        const existing = prev.find(r => r.type === type);
        if (existing) {
          return prev.map(r => r.type === type ? {
            ...r,
            count: r.userReacted ? r.count - 1 : r.count + 1,
            userReacted: !r.userReacted
          } : r);
        }
        return [...prev, {
          type: type as any,
          count: 1,
          userReacted: true
        }];
      });
    };
    return <div className="max-w-md mx-auto space-y-4">
                <ChatBubble message="Click on reactions to interact!" isOwn={true} timestamp="Now">
                    <MessageReactions reactions={reactions} onReactionClick={handleReactionClick} />
                </ChatBubble>
                <ReactionPicker onReactionSelect={handleReactionClick} />
            </div>;
  }
}`,...u.parameters?.docs?.source}}};const P=["Default","WithUsers","WithoutCount","OnChatBubble","ReactionPickerStory","Interactive"];export{o as Default,u as Interactive,i as OnChatBubble,m as ReactionPickerStory,c as WithUsers,n as WithoutCount,P as __namedExportsOrder,A as default};
