import{n as e,o as t}from"./chunk-jRWAZmH_.js";import{a as n}from"./iframe-Bjuc5Sdq.js";import{t as r}from"./jsx-runtime-DaLCRA3n.js";import{l as i,t as a}from"./Modal-C2gZnFt2.js";var o,s,c,l,u,d,f,p,m,h,g,_,v;e((()=>{o=t(n()),i(),s=r(),{action:c}=__STORYBOOK_MODULE_ACTIONS__,l={title:`Overlays/Modal`,component:a,tags:[`autodocs`],parameters:{layout:`centered`}},u={args:{open:!0,onClose:c(`close`),title:`Confirm Transfer`,children:(0,s.jsx)(`p`,{className:`text-text-secondary`,children:`This will transfer $250.00 to Alice Johnson.`})}},d={args:{open:!0,onClose:c(`close`),title:`Confirm Payment`,children:(0,s.jsx)(`p`,{className:`text-text-secondary`,children:`Are you sure you want to send $250.00 to Alice Johnson?`}),footer:(0,s.jsxs)(`div`,{className:`flex gap-3 justify-end`,children:[(0,s.jsx)(`button`,{onClick:c(`cancel`),className:`px-4 py-2 text-sm font-semibold text-text-secondary bg-surface-secondary rounded-lg hover:bg-surface-tertiary transition`,children:`Cancel`}),(0,s.jsx)(`button`,{onClick:c(`confirm`),className:`px-4 py-2 text-sm font-semibold text-white bg-accent-blue rounded-lg hover:bg-accent-blue-hover transition`,children:`Confirm`})]})}},f={args:{open:!0,onClose:c(`close`),title:`Transaction Details`,size:`lg`,children:(0,s.jsx)(`div`,{className:`space-y-4`,children:(0,s.jsxs)(`div`,{className:`grid grid-cols-2 gap-4`,children:[(0,s.jsxs)(`div`,{className:`p-3 bg-surface-secondary rounded-xl`,children:[(0,s.jsx)(`p`,{className:`text-xs text-text-tertiary`,children:`Amount`}),(0,s.jsx)(`p`,{className:`text-lg font-bold text-text-primary`,children:`$1,200.00`})]}),(0,s.jsxs)(`div`,{className:`p-3 bg-surface-secondary rounded-xl`,children:[(0,s.jsx)(`p`,{className:`text-xs text-text-tertiary`,children:`Status`}),(0,s.jsx)(`p`,{className:`text-sm font-semibold text-status-success`,children:`Completed`})]}),(0,s.jsxs)(`div`,{className:`p-3 bg-surface-secondary rounded-xl`,children:[(0,s.jsx)(`p`,{className:`text-xs text-text-tertiary`,children:`From`}),(0,s.jsx)(`p`,{className:`text-sm font-medium text-text-primary`,children:`Checking •••• 4821`})]}),(0,s.jsxs)(`div`,{className:`p-3 bg-surface-secondary rounded-xl`,children:[(0,s.jsx)(`p`,{className:`text-xs text-text-tertiary`,children:`To`}),(0,s.jsx)(`p`,{className:`text-sm font-medium text-text-primary`,children:`Acme Corp`})]})]})})}},p={args:{open:!0,onClose:c(`close`),title:`Success`,size:`sm`,children:(0,s.jsxs)(`div`,{className:`text-center py-4`,children:[(0,s.jsx)(`p`,{className:`text-4xl mb-3`,children:`✓`}),(0,s.jsx)(`p`,{className:`text-lg font-bold text-text-primary`,children:`Payment Sent!`}),(0,s.jsx)(`p`,{className:`text-sm text-text-tertiary mt-1`,children:`$250.00 to Alice Johnson`})]})}},m={args:{open:!0,onClose:c(`close`),title:`Payment Confirmation`,children:(0,s.jsxs)(`div`,{className:`space-y-4`,children:[(0,s.jsxs)(`div`,{className:`flex items-center justify-between py-2 border-b border-border-primary`,children:[(0,s.jsx)(`span`,{className:`text-sm text-text-secondary`,children:`Recipient`}),(0,s.jsx)(`span`,{className:`text-sm font-semibold text-text-primary`,children:`Alice Johnson`})]}),(0,s.jsxs)(`div`,{className:`flex items-center justify-between py-2 border-b border-border-primary`,children:[(0,s.jsx)(`span`,{className:`text-sm text-text-secondary`,children:`Amount`}),(0,s.jsx)(`span`,{className:`text-sm font-bold text-text-primary`,children:`$250.00`})]}),(0,s.jsxs)(`div`,{className:`flex items-center justify-between py-2 border-b border-border-primary`,children:[(0,s.jsx)(`span`,{className:`text-sm text-text-secondary`,children:`Fee`}),(0,s.jsx)(`span`,{className:`text-sm font-semibold text-text-primary`,children:`$0.00`})]}),(0,s.jsxs)(`div`,{className:`flex items-center justify-between py-2`,children:[(0,s.jsx)(`span`,{className:`text-sm text-text-secondary`,children:`Total`}),(0,s.jsx)(`span`,{className:`text-base font-bold text-accent-blue`,children:`$250.00`})]})]}),footer:(0,s.jsxs)(`div`,{className:`flex gap-3 justify-end`,children:[(0,s.jsx)(`button`,{onClick:c(`cancel`),className:`px-4 py-2 text-sm font-semibold text-text-secondary bg-surface-secondary rounded-lg hover:bg-surface-tertiary transition`,children:`Cancel`}),(0,s.jsx)(`button`,{onClick:c(`confirm`),className:`px-4 py-2 text-sm font-semibold text-white bg-accent-blue rounded-lg hover:bg-accent-blue-hover transition`,children:`Confirm Payment`})]})}},h={args:{open:!0,onClose:c(`close`),title:`Swap Confirmation`,children:(0,s.jsxs)(`div`,{className:`space-y-4`,children:[(0,s.jsxs)(`div`,{className:`flex items-center justify-between p-3 bg-surface-secondary rounded-xl`,children:[(0,s.jsxs)(`div`,{children:[(0,s.jsx)(`p`,{className:`text-xs text-text-tertiary`,children:`From`}),(0,s.jsx)(`p`,{className:`text-sm font-bold text-text-primary`,children:`0.025 BTC`})]}),(0,s.jsx)(`span`,{className:`text-lg text-text-tertiary`,children:`→`}),(0,s.jsxs)(`div`,{className:`text-right`,children:[(0,s.jsx)(`p`,{className:`text-xs text-text-tertiary`,children:`To`}),(0,s.jsx)(`p`,{className:`text-sm font-bold text-text-primary`,children:`0.42 ETH`})]})]}),(0,s.jsxs)(`div`,{className:`flex items-center justify-between text-xs text-text-tertiary`,children:[(0,s.jsx)(`span`,{children:`Rate: 1 BTC = 16.8 ETH`}),(0,s.jsx)(`span`,{children:`Fee: 0.1%`})]})]}),footer:(0,s.jsxs)(`div`,{className:`flex gap-3 justify-end`,children:[(0,s.jsx)(`button`,{onClick:c(`cancel`),className:`px-4 py-2 text-sm font-semibold text-text-secondary bg-surface-secondary rounded-lg transition`,children:`Cancel`}),(0,s.jsx)(`button`,{onClick:c(`confirm`),className:`px-4 py-2 text-sm font-semibold text-white bg-accent-blue rounded-lg transition`,children:`Confirm Swap`})]})}},g={args:{open:!0,onClose:c(`close`),children:(0,s.jsx)(`p`,{className:`text-text-secondary py-4`,children:`A modal without a title header.`})}},_={render:()=>{let[e,t]=o.useState(!1);return(0,s.jsxs)(`div`,{className:`flex flex-col items-center gap-4 p-12`,children:[(0,s.jsx)(`button`,{onClick:()=>t(!0),className:`px-6 py-3 bg-accent-blue text-white rounded-xl font-semibold hover:bg-accent-blue-hover transition`,children:`Send $250`}),(0,s.jsxs)(a,{open:e,onClose:()=>t(!1),title:`Send Money`,children:[(0,s.jsx)(`p`,{className:`text-text-secondary mb-4`,children:`This will send $250.00 to Alice Johnson from your checking account.`}),(0,s.jsxs)(`div`,{className:`flex gap-3 justify-end`,children:[(0,s.jsx)(`button`,{onClick:()=>t(!1),className:`px-4 py-2 text-sm font-semibold text-text-secondary bg-surface-secondary rounded-lg transition`,children:`Cancel`}),(0,s.jsx)(`button`,{onClick:()=>{alert(`Sent!`),t(!1)},className:`px-4 py-2 text-sm font-semibold text-white bg-accent-blue rounded-lg transition`,children:`Send`})]})]})]})}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    open: true,
    onClose: action('close'),
    title: 'Confirm Transfer',
    children: <p className="text-text-secondary">This will transfer $250.00 to Alice Johnson.</p>
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    open: true,
    onClose: action('close'),
    title: 'Confirm Payment',
    children: <p className="text-text-secondary">Are you sure you want to send $250.00 to Alice Johnson?</p>,
    footer: <div className="flex gap-3 justify-end">
        <button onClick={action('cancel')} className="px-4 py-2 text-sm font-semibold text-text-secondary bg-surface-secondary rounded-lg hover:bg-surface-tertiary transition">Cancel</button>
        <button onClick={action('confirm')} className="px-4 py-2 text-sm font-semibold text-white bg-accent-blue rounded-lg hover:bg-accent-blue-hover transition">Confirm</button>
      </div>
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    open: true,
    onClose: action('close'),
    title: 'Transaction Details',
    size: 'lg',
    children: <div className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div className="p-3 bg-surface-secondary rounded-xl">
            <p className="text-xs text-text-tertiary">Amount</p>
            <p className="text-lg font-bold text-text-primary">$1,200.00</p>
          </div>
          <div className="p-3 bg-surface-secondary rounded-xl">
            <p className="text-xs text-text-tertiary">Status</p>
            <p className="text-sm font-semibold text-status-success">Completed</p>
          </div>
          <div className="p-3 bg-surface-secondary rounded-xl">
            <p className="text-xs text-text-tertiary">From</p>
            <p className="text-sm font-medium text-text-primary">Checking •••• 4821</p>
          </div>
          <div className="p-3 bg-surface-secondary rounded-xl">
            <p className="text-xs text-text-tertiary">To</p>
            <p className="text-sm font-medium text-text-primary">Acme Corp</p>
          </div>
        </div>
      </div>
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    open: true,
    onClose: action('close'),
    title: 'Success',
    size: 'sm',
    children: <div className="text-center py-4">
        <p className="text-4xl mb-3">✓</p>
        <p className="text-lg font-bold text-text-primary">Payment Sent!</p>
        <p className="text-sm text-text-tertiary mt-1">$250.00 to Alice Johnson</p>
      </div>
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    open: true,
    onClose: action('close'),
    title: 'Payment Confirmation',
    children: <div className="space-y-4">
        <div className="flex items-center justify-between py-2 border-b border-border-primary">
          <span className="text-sm text-text-secondary">Recipient</span>
          <span className="text-sm font-semibold text-text-primary">Alice Johnson</span>
        </div>
        <div className="flex items-center justify-between py-2 border-b border-border-primary">
          <span className="text-sm text-text-secondary">Amount</span>
          <span className="text-sm font-bold text-text-primary">$250.00</span>
        </div>
        <div className="flex items-center justify-between py-2 border-b border-border-primary">
          <span className="text-sm text-text-secondary">Fee</span>
          <span className="text-sm font-semibold text-text-primary">$0.00</span>
        </div>
        <div className="flex items-center justify-between py-2">
          <span className="text-sm text-text-secondary">Total</span>
          <span className="text-base font-bold text-accent-blue">$250.00</span>
        </div>
      </div>,
    footer: <div className="flex gap-3 justify-end">
        <button onClick={action('cancel')} className="px-4 py-2 text-sm font-semibold text-text-secondary bg-surface-secondary rounded-lg hover:bg-surface-tertiary transition">Cancel</button>
        <button onClick={action('confirm')} className="px-4 py-2 text-sm font-semibold text-white bg-accent-blue rounded-lg hover:bg-accent-blue-hover transition">Confirm Payment</button>
      </div>
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    open: true,
    onClose: action('close'),
    title: 'Swap Confirmation',
    children: <div className="space-y-4">
        <div className="flex items-center justify-between p-3 bg-surface-secondary rounded-xl">
          <div>
            <p className="text-xs text-text-tertiary">From</p>
            <p className="text-sm font-bold text-text-primary">0.025 BTC</p>
          </div>
          <span className="text-lg text-text-tertiary">→</span>
          <div className="text-right">
            <p className="text-xs text-text-tertiary">To</p>
            <p className="text-sm font-bold text-text-primary">0.42 ETH</p>
          </div>
        </div>
        <div className="flex items-center justify-between text-xs text-text-tertiary">
          <span>Rate: 1 BTC = 16.8 ETH</span>
          <span>Fee: 0.1%</span>
        </div>
      </div>,
    footer: <div className="flex gap-3 justify-end">
        <button onClick={action('cancel')} className="px-4 py-2 text-sm font-semibold text-text-secondary bg-surface-secondary rounded-lg transition">Cancel</button>
        <button onClick={action('confirm')} className="px-4 py-2 text-sm font-semibold text-white bg-accent-blue rounded-lg transition">Confirm Swap</button>
      </div>
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    open: true,
    onClose: action('close'),
    children: <p className="text-text-secondary py-4">A modal without a title header.</p>
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [open, setOpen] = React.useState(false);
    return <div className="flex flex-col items-center gap-4 p-12">
        <button onClick={() => setOpen(true)} className="px-6 py-3 bg-accent-blue text-white rounded-xl font-semibold hover:bg-accent-blue-hover transition">
          Send $250
        </button>
        <Modal open={open} onClose={() => setOpen(false)} title="Send Money">
          <p className="text-text-secondary mb-4">This will send $250.00 to Alice Johnson from your checking account.</p>
          <div className="flex gap-3 justify-end">
            <button onClick={() => setOpen(false)} className="px-4 py-2 text-sm font-semibold text-text-secondary bg-surface-secondary rounded-lg transition">Cancel</button>
            <button onClick={() => {
            alert('Sent!');
            setOpen(false);
          }} className="px-4 py-2 text-sm font-semibold text-white bg-accent-blue rounded-lg transition">Send</button>
          </div>
        </Modal>
      </div>;
  }
}`,..._.parameters?.docs?.source}}},v=[`Default`,`WithActions`,`LargeContent`,`SmallModal`,`PaymentConfirmation`,`CryptoSwapModal`,`NoTitle`,`InteractiveModal`]}))();export{h as CryptoSwapModal,u as Default,_ as InteractiveModal,f as LargeContent,g as NoTitle,m as PaymentConfirmation,p as SmallModal,d as WithActions,v as __namedExportsOrder,l as default};