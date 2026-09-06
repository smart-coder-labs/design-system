import{n as e}from"./chunk-jRWAZmH_.js";import{n as t,t as n}from"./QuickTransferBar-Bzt1iFPH.js";var r,i,a,o,s,c,l,u,d,f,p,m;e((()=>{t(),{fn:r}=__STORYBOOK_MODULE_TEST__,i={title:`Fintech/Payments/QuickTransferBar`,component:n,tags:[`autodocs`]},a=[{id:`1`,name:`Alice Johnson`,initials:`AJ`,lastTransfer:`2h ago`},{id:`2`,name:`Bob Martinez`,initials:`BM`,lastTransfer:`Yesterday`},{id:`3`,name:`Carol Smith`,initials:`CS`,lastTransfer:`3d ago`},{id:`4`,name:`Dave Wilson`,initials:`DW`,lastTransfer:`1w ago`},{id:`5`,name:`Eve Davis`,initials:`ED`,lastTransfer:`2w ago`},{id:`6`,name:`Frank Lee`,initials:`FL`,lastTransfer:`3w ago`},{id:`7`,name:`Grace Kim`,initials:`GK`,lastTransfer:`1mo ago`}],o={args:{contacts:a.slice(0,5),onSelect:r(),onAddNew:r()}},s={args:{contacts:[{id:`1`,name:`Alice Johnson`,initials:`AJ`}],onSelect:r(),onAddNew:r()}},c={args:{contacts:a,onSelect:r(),onAddNew:r()}},l={args:{contacts:a.slice(0,4),title:`Send to`,onSelect:r(),onAddNew:r()}},u={args:{contacts:[{id:`1`,name:`Alice Johnson`,avatarUrl:`https://i.pravatar.cc/150?u=alice`,initials:`AJ`},{id:`2`,name:`Bob Martinez`,avatarUrl:`https://i.pravatar.cc/150?u=bob`,initials:`BM`},{id:`3`,name:`Carol Smith`,avatarUrl:`https://i.pravatar.cc/150?u=carol`,initials:`CS`}],onSelect:r(),onAddNew:r()}},d={args:{contacts:[],onSelect:r(),onAddNew:r()}},f={args:{contacts:a.slice(0,4).map(e=>({...e,lastTransfer:e.lastTransfer})),onSelect:r(),onAddNew:r(),title:`Recent transfers`}},p={args:{contacts:[],title:`Quick Transfer`}},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    contacts: sampleContacts.slice(0, 5),
    onSelect: fn(),
    onAddNew: fn()
  }
}`,...o.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    contacts: [{
      id: '1',
      name: 'Alice Johnson',
      initials: 'AJ'
    }],
    onSelect: fn(),
    onAddNew: fn()
  }
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    contacts: sampleContacts,
    onSelect: fn(),
    onAddNew: fn()
  }
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    contacts: sampleContacts.slice(0, 4),
    title: 'Send to',
    onSelect: fn(),
    onAddNew: fn()
  }
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    contacts: [{
      id: '1',
      name: 'Alice Johnson',
      avatarUrl: 'https://i.pravatar.cc/150?u=alice',
      initials: 'AJ'
    }, {
      id: '2',
      name: 'Bob Martinez',
      avatarUrl: 'https://i.pravatar.cc/150?u=bob',
      initials: 'BM'
    }, {
      id: '3',
      name: 'Carol Smith',
      avatarUrl: 'https://i.pravatar.cc/150?u=carol',
      initials: 'CS'
    }],
    onSelect: fn(),
    onAddNew: fn()
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    contacts: [],
    onSelect: fn(),
    onAddNew: fn()
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    contacts: sampleContacts.slice(0, 4).map(c => ({
      ...c,
      lastTransfer: c.lastTransfer
    })),
    onSelect: fn(),
    onAddNew: fn(),
    title: 'Recent transfers'
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    contacts: [],
    title: 'Quick Transfer'
  }
}`,...p.parameters?.docs?.source}}},m=[`Default`,`Minimal`,`ManyContacts`,`CustomTitle`,`WithAvatars`,`NoContacts`,`WithLastTransfer`,`EmptyNoAddNew`]}))();export{l as CustomTitle,o as Default,p as EmptyNoAddNew,c as ManyContacts,s as Minimal,d as NoContacts,u as WithAvatars,f as WithLastTransfer,m as __namedExportsOrder,i as default};