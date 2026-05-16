import{n as e}from"./chunk-jRWAZmH_.js";import{r as t,t as n}from"./ActivityFeed-C_2_35ve.js";var r,i,a,o,s,c,l,u,d,f,p;e((()=>{t(),r={title:`Data Display/ActivityFeed`,component:n,tags:[`autodocs`]},i=[{actor:{name:`Alice Johnson`,initials:`AJ`},action:`created a new budget plan`,date:`2 min ago`,type:`success`},{actor:{name:`Bob Smith`,initials:`BS`},action:`approved transfer of $1,200`,date:`15 min ago`,type:`pr`},{actor:{name:`Carol Davis`,initials:`CD`},action:`flagged suspicious transaction`,date:`1 hour ago`,type:`alert`},{actor:{name:`David Lee`,initials:`DL`},action:`updated monthly savings goal`,date:`3 hours ago`,type:`comment`},{actor:{name:`Eve Martinez`,initials:`EM`},action:`added a new payment method`,date:`5 hours ago`,type:`file`}],a={args:{items:i}},o={args:{items:i.slice(0,3),showConnector:!0}},s={args:{items:i.slice(0,3),showConnector:!1}},c={args:{items:[i[0]]}},l={args:{items:[]}},u={args:{items:[{actor:{name:`System`,initials:`SY`},action:`ACH transfer of $12,450.00 completed to Wells Fargo`,date:`1 min ago`,type:`success`},{actor:{name:`Fraud Detection`,initials:`FD`},action:`flagged transaction #TX-4421 for unusual spending pattern`,date:`5 min ago`,type:`alert`},{actor:{name:`Maria G.`,initials:`MG`},action:`approved wire transfer of $5,200 USD to Banco Santander`,date:`12 min ago`,type:`pr`},{actor:{name:`System`,initials:`SY`},action:`monthly interest payment of $34.50 credited to Savings (#7890)`,date:`30 min ago`,type:`success`},{actor:{name:`Compliance`,initials:`CP`},action:`review completed for onboarding request #2024-09-452`,date:`45 min ago`,type:`file`},{actor:{name:`Alert`,initials:`AL`},action:`credit card spending approaching monthly limit ($4,250 / $5,000)`,date:`1 hour ago`,type:`alert`}],showConnector:!0},parameters:{docs:{description:{story:`A realistic fintech transaction feed showing ACH transfers, fraud alerts, wire approvals, compliance reviews, and spending limit warnings.`}}}},d={args:{items:Array.from({length:20},(e,t)=>({actor:{name:[`System`,`Alice`,`Bob`,`Carol`][t%4],initials:[`SY`,`AJ`,`BS`,`CD`][t%4]},action:[`processed batch payment`,`updated budget`,`reviewed transaction`,`added beneficiary`][t%4],date:`${t*8} min ago`,type:[`success`,`pr`,`alert`,`comment`][t%4]})),showConnector:!0},parameters:{docs:{description:{story:`ActivityFeed with 20 items to test scrolling and rendering performance with a larger data set.`}}}},f={args:{items:i,showConnector:!0},parameters:{docs:{description:{story:`ActivityFeed with the connector enabled and the full set of item types (success, PR, alert, comment, file) for testing all visual variants.`}}}},a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    items: sampleItems
  }
}`,...a.parameters?.docs?.source}}},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    items: sampleItems.slice(0, 3),
    showConnector: true
  }
}`,...o.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    items: sampleItems.slice(0, 3),
    showConnector: false
  }
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    items: [sampleItems[0]]
  }
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    items: []
  }
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    items: [{
      actor: {
        name: 'System',
        initials: 'SY'
      },
      action: 'ACH transfer of $12,450.00 completed to Wells Fargo',
      date: '1 min ago',
      type: 'success' as const
    }, {
      actor: {
        name: 'Fraud Detection',
        initials: 'FD'
      },
      action: 'flagged transaction #TX-4421 for unusual spending pattern',
      date: '5 min ago',
      type: 'alert' as const
    }, {
      actor: {
        name: 'Maria G.',
        initials: 'MG'
      },
      action: 'approved wire transfer of $5,200 USD to Banco Santander',
      date: '12 min ago',
      type: 'pr' as const
    }, {
      actor: {
        name: 'System',
        initials: 'SY'
      },
      action: 'monthly interest payment of $34.50 credited to Savings (#7890)',
      date: '30 min ago',
      type: 'success' as const
    }, {
      actor: {
        name: 'Compliance',
        initials: 'CP'
      },
      action: 'review completed for onboarding request #2024-09-452',
      date: '45 min ago',
      type: 'file' as const
    }, {
      actor: {
        name: 'Alert',
        initials: 'AL'
      },
      action: 'credit card spending approaching monthly limit ($4,250 / $5,000)',
      date: '1 hour ago',
      type: 'alert' as const
    }],
    showConnector: true
  },
  parameters: {
    docs: {
      description: {
        story: 'A realistic fintech transaction feed showing ACH transfers, fraud alerts, wire approvals, compliance reviews, and spending limit warnings.'
      }
    }
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    items: Array.from({
      length: 20
    }, (_, i) => ({
      actor: {
        name: ['System', 'Alice', 'Bob', 'Carol'][i % 4],
        initials: ['SY', 'AJ', 'BS', 'CD'][i % 4]
      },
      action: ['processed batch payment', 'updated budget', 'reviewed transaction', 'added beneficiary'][i % 4],
      date: \`\${i * 8} min ago\`,
      type: (['success', 'pr', 'alert', 'comment'] as const)[i % 4]
    })),
    showConnector: true
  },
  parameters: {
    docs: {
      description: {
        story: 'ActivityFeed with 20 items to test scrolling and rendering performance with a larger data set.'
      }
    }
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    items: sampleItems,
    showConnector: true
  },
  parameters: {
    docs: {
      description: {
        story: 'ActivityFeed with the connector enabled and the full set of item types (success, PR, alert, comment, file) for testing all visual variants.'
      }
    }
  }
}`,...f.parameters?.docs?.source}}},p=[`Default`,`WithConnector`,`WithoutConnector`,`SingleItem`,`EmptyFeed`,`FintechTransactionsFeed`,`LongActivityFeed`,`InteractiveFeed`]}))();export{a as Default,l as EmptyFeed,u as FintechTransactionsFeed,f as InteractiveFeed,d as LongActivityFeed,c as SingleItem,o as WithConnector,s as WithoutConnector,p as __namedExportsOrder,r as default};