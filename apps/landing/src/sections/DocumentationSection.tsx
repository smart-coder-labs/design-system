'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '../../../../components/ui/Card'
import { Button } from '../../../../components/ui/Button'
import { Title } from '../../../../components/ui/Title'
import Text from '../../../../components/ui/Text'
import { Badge } from '../../../../components/ui/Badge'
import { Tabs, TabsList, TabsTrigger, TabsContent } from '../../../../components/ui/Tabs'

const installSections = [
  {
    id: 'cli',
    label: 'CLI (shadcn-style)',
    steps: [
      {
        title: '1. Init your project',
        code: 'npx @smart-coder-labs/apple-design-system init',
        description: 'Configures Tailwind, installs peer deps, and creates design-system.json',
      },
      {
        title: '2. Add components',
        code: 'npx @smart-coder-labs/apple-design-system add Button Card Modal Tabs',
        description: 'Downloads source code to ./components/ui. You own the code.',
      },
      {
        title: '3. Import & use',
        code: `import { Button, Card } from "@/components/ui/Button" // or

import { Button } from '@smart-coder-labs/apple-design-system'`,
        description: 'Import from your local components or directly from the npm package.',
      },
    ],
  },
  {
    id: 'npm',
    label: 'npm Package',
    steps: [
      {
        title: '1. Install',
        code: 'npm install @smart-coder-labs/apple-design-system',
        description: 'Install the package and its peer dependencies.',
      },
      {
        title: '2. Tailwind config',
        code: `import preset from '@smart-coder-labs/apple-design-system/tailwind.preset';

export default {
  presets: [preset],
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
    './node_modules/@smart-coder-labs/apple-design-system/**/*.{js,ts,jsx,tsx}',
  ],
};`,
        description: 'Use the Tailwind preset to get all design tokens.',
      },
      {
        title: '3. Import globals',
        code: "import '@smart-coder-labs/apple-design-system/globals.css';",
        description: 'Import global styles in your root layout.',
      },
    ],
  },
  {
    id: 'byoc',
    label: 'BYOC (Source)',
    steps: [
      {
        title: '1. Clone the repo',
        code: 'git clone https://github.com/smart-coder-labs/design-system.git',
        description: 'Full access to all components, stories, and docs.',
      },
      {
        title: '2. Copy components',
        code: 'cp -r components/ui ./my-project/src/components/',
        description: 'Copy only what you need — full ownership of the code.',
      },
      {
        title: '3. Import directly',
        code: "import { Button } from '@/components/ui/Button'",
        description: 'Works with any Vite, Next.js, or Remix setup.',
      },
    ],
  },
]

const docLinks = [
  {
    title: 'Quick Start',
    description: 'Get up and running in 5 minutes',
    href: 'https://github.com/smart-coder-labs/design-system/blob/main/QUICKSTART.md',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
      </svg>
    ),
  },
  {
    title: 'Examples',
    description: '50+ code examples for every component',
    href: 'https://github.com/smart-coder-labs/design-system/blob/main/EXAMPLES.md',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    ),
  },
  {
    title: 'Design Decisions',
    description: 'Why every pixel matters',
    href: 'https://github.com/smart-coder-labs/design-system/blob/main/DESIGN_DECISIONS.md',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="3" />
        <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
      </svg>
    ),
  },
  {
    title: 'Migration Guide',
    description: 'Upgrade from v1.0.x to latest',
    href: 'https://github.com/smart-coder-labs/design-system/blob/main/MIGRATION.md',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="23 4 23 10 17 10" />
        <path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10" />
      </svg>
    ),
  },
  {
    title: 'Storybook',
    description: 'Interactive component playground',
    href: 'https://smart-coder-labs.github.io/design-system/',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
        <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
      </svg>
    ),
  },
  {
    title: 'GitHub',
    description: 'Source code, issues, PRs',
    href: 'https://github.com/smart-coder-labs/design-system',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
      </svg>
    ),
  },
]

const designTokens = [
  { label: 'Colors', value: '80+', desc: 'Light & dark palettes' },
  { label: 'Spacing', value: '16', desc: 'Scale (0–32)' },
  { label: 'Shadows', value: '10', desc: 'Light & dark mode' },
  { label: 'Breakpoints', value: '6', desc: 'sm to 2xl' },
  { label: 'Border Radius', value: '8', desc: 'none → full' },
  { label: 'Typography', value: '12', desc: 'xs → 6xl' },
]

export default function DocumentationSection() {
  return (
    <section id="docs" className="relative py-24 md:py-32 bg-surface-secondary/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          className="text-center mb-16 md:mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <Title level={2} align="center" className="mb-4">
            Documentation & API
          </Title>
          <Text variant="lead" color="secondary" align="center" className="max-w-2xl mx-auto">
            Three ways to use the design system — pick your workflow. Full documentation,
            examples, and migration guides included.
          </Text>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Installation methods */}
          <div className="lg:col-span-3">
            <Tabs defaultValue="cli">
              <div className="mb-6">
                <TabsList variant="segmented">
                  <TabsTrigger value="cli">🧩 CLI (shadcn-style)</TabsTrigger>
                  <TabsTrigger value="npm">📦 npm Package</TabsTrigger>
                  <TabsTrigger value="byoc">📁 BYOC (Source)</TabsTrigger>
                </TabsList>
              </div>

              {installSections.map((section) => (
                <TabsContent key={section.id} value={section.id} className="mt-0">
                  <Card variant="elevated" padding="lg">
                    <CardContent className="flex flex-col gap-5">
                      {section.steps.map((step, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, y: 12 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: i * 0.1, duration: 0.3 }}
                        >
                          <div className="flex items-start gap-3">
                            <div className="w-6 h-6 rounded-full bg-accent-blue-tint text-accent-blue flex items-center justify-center shrink-0 mt-0.5">
                              <span className="text-xs font-semibold">{i + 1}</span>
                            </div>
                            <div className="flex-1 min-w-0">
                              <Text weight="semibold" variant="small" className="mb-1">
                                {step.title}
                              </Text>
                              <div className="code-preview mb-2">
                                <pre className="p-3 overflow-x-auto text-xs font-mono text-gray-300">
                                  <code>{step.code}</code>
                                </pre>
                              </div>
                              <Text variant="tiny" color="tertiary">
                                {step.description}
                              </Text>
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </CardContent>
                  </Card>
                </TabsContent>
              ))}
            </Tabs>
          </div>

          {/* Sidebar: doc links + tokens */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            {/* Design tokens */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            >
              <Card variant="glass" padding="md">
                <CardHeader>
                  <CardTitle className="text-base">Design Tokens</CardTitle>
                  <CardDescription>Complete design foundation</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-2">
                    {designTokens.map((token) => (
                      <div key={token.label} className="flex items-center gap-2 p-2 rounded-lg bg-surface-secondary/50">
                        <div className="text-right min-w-[32px]">
                          <Text weight="semibold" variant="tiny" color="accent">
                            {token.value}
                          </Text>
                        </div>
                        <div className="flex-1 min-w-0">
                          <Text variant="tiny" weight="medium">
                            {token.label}
                          </Text>
                          <Text variant="tiny" color="tertiary">
                            {token.desc}
                          </Text>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Quick links */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            >
              <Card variant="glass" padding="md">
                <CardHeader>
                  <CardTitle className="text-base">Quick Links</CardTitle>
                  <CardDescription>Docs, examples, and resources</CardDescription>
                </CardHeader>
                <CardContent className="flex flex-col gap-1">
                  {docLinks.map((link) => (
                    <a
                      key={link.title}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-surface-secondary transition-colors group"
                    >
                      <div className="w-8 h-8 rounded-lg bg-accent-blue-tint text-accent-blue flex items-center justify-center group-hover:scale-110 transition-transform">
                        {link.icon}
                      </div>
                      <div className="flex-1 min-w-0">
                        <Text variant="small" weight="medium">
                          {link.title}
                        </Text>
                        <Text variant="tiny" color="tertiary">
                          {link.description}
                        </Text>
                      </div>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-text-tertiary shrink-0">
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                        <polyline points="15 3 21 3 21 9" />
                        <line x1="10" y1="14" x2="21" y2="3" />
                      </svg>
                    </a>
                  ))}
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
