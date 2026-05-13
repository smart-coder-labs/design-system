'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '../../../../components/ui/Card'
import { Button } from '../../../../components/ui/Button'
import { Title } from '../../../../components/ui/Title'
import Text from '../../../../components/ui/Text'
import { Badge } from '../../../../components/ui/Badge'
import { Tabs, TabsList, TabsTrigger, TabsContent } from '../../../../components/ui/Tabs'

const componentGroups = [
  {
    id: 'buttons',
    label: 'Buttons',
    code: `// Button with spring animations
<Button variant="primary" size="md">
  Continue
</Button>

<Button variant="secondary" leftIcon={<Icon />}>
  Back
</Button>

<Button variant="ghost">
  Cancel
</Button>`,
  },
  {
    id: 'cards',
    label: 'Cards',
    code: `<Card variant="elevated" padding="md">
  <CardHeader>
    <CardTitle>Account Overview</CardTitle>
    <CardDescription>
      Your balance and recent activity
    </CardDescription>
  </CardHeader>
  <CardContent>
    <p>Card content goes here...</p>
  </CardContent>
  <CardFooter>
    <Button variant="primary">View All</Button>
  </CardFooter>
</Card>

<Card variant="glass" hoverable>
  <p>Glass card with blur effect</p>
</Card>`,
  },
  {
    id: 'tabs',
    label: 'Tabs',
    code: `<Tabs defaultValue="tab1">
  <TabsList variant="segmented">
    <TabsTrigger value="tab1">
      Tab 1
    </TabsTrigger>
    <TabsTrigger value="tab2">
      Tab 2
    </TabsTrigger>
  </TabsList>
  <TabsContent value="tab1">
    <p>Content for tab 1</p>
  </TabsContent>
  <TabsContent value="tab2">
    <p>Content for tab 2</p>
  </TabsContent>
</Tabs>`,
  },
  {
    id: 'buttons-group',
    label: 'Badges',
    code: `<Badge variant="primary" dot>
  Active
</Badge>

<Badge variant="success" size="sm">
  Completed
</Badge>

<Badge variant="warning">
  Pending review
</Badge>

<Badge variant="error" size="lg">
  Offline
</Badge>

<NotificationBadge count={5}>
  <Button variant="ghost">
    Notifications
  </Button>
</NotificationBadge>`,
  },
]

export default function ShowcaseSection() {
  const [mounted, setMounted] = React.useState(false)
  React.useEffect(() => { setMounted(true) }, [])

  return (
    <section id="showcase" className="relative py-24 md:py-32 bg-surface-secondary/50">
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
            Components in Action
          </Title>
          <Text variant="lead" color="secondary" align="center" className="max-w-2xl mx-auto">
            Every component is designed with Apple-level attention to detail —
            spring animations, glass effects, and pixel-perfect spacing.
          </Text>
        </motion.div>

        {/* Live preview + code */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">
          {/* Live preview */}
          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <Card variant="glass" padding="lg">
              <CardHeader>
                <CardTitle>Live Preview</CardTitle>
                <CardDescription>Interactive components using design system</CardDescription>
              </CardHeader>
              <CardContent className="flex flex-col gap-6">
                {/* Button variants */}
                <div className="flex flex-wrap gap-2">
                  <Button variant="primary" size="sm">Primary</Button>
                  <Button variant="secondary" size="sm">Secondary</Button>
                  <Button variant="ghost" size="sm">Ghost</Button>
                  <Button variant="subtle" size="sm">Subtle</Button>
                  <Button variant="outline" size="sm">Outline</Button>
                </div>

                {/* Badge variants */}
                <div className="flex flex-wrap gap-2">
                  <Badge variant="default">Default</Badge>
                  <Badge variant="primary" dot>Active</Badge>
                  <Badge variant="success">Success</Badge>
                  <Badge variant="warning">Warning</Badge>
                  <Badge variant="error">Error</Badge>
                  <Badge variant="info">Info</Badge>
                </div>

                {/* Segmented tabs */}
                <Tabs defaultValue="preview1">
                  <TabsList variant="segmented" className="w-full">
                    <TabsTrigger value="preview1" className="flex-1">Profile</TabsTrigger>
                    <TabsTrigger value="preview2" className="flex-1">Settings</TabsTrigger>
                    <TabsTrigger value="preview3" className="flex-1">Billing</TabsTrigger>
                  </TabsList>
                  <TabsContent value="preview1">
                    <Text variant="small" color="secondary">Profile settings and preferences</Text>
                  </TabsContent>
                  <TabsContent value="preview2">
                    <Text variant="small" color="secondary">Appearance and notifications</Text>
                  </TabsContent>
                  <TabsContent value="preview3">
                    <Text variant="small" color="secondary">Payment methods and invoices</Text>
                  </TabsContent>
                </Tabs>

                {/* Glass card */}
                <Card variant="glass" padding="sm" className="text-center">
                  <Text variant="small" color="secondary">
                    Glass card with 20px backdrop blur
                  </Text>
                </Card>
              </CardContent>
            </Card>
          </motion.div>

          {/* Code examples */}
          <motion.div
            className="lg:col-span-3"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          >
            <Card variant="elevated" padding="none" className="overflow-hidden">
              <Tabs defaultValue="buttons">
                <div className="px-6 pt-4 pb-0 border-b border-border-primary">
                  <TabsList variant="default" className="w-full">
                    {componentGroups.map((group) => (
                      <TabsTrigger key={group.id} value={group.id}>
                        {group.label}
                      </TabsTrigger>
                    ))}
                  </TabsList>
                </div>

                {componentGroups.map((group) => (
                  <TabsContent key={group.id} value={group.id} className="m-0 p-0">
                    <div className="code-preview">
                      <pre className="p-6 overflow-x-auto text-sm leading-relaxed font-mono text-gray-300">
                        <code>{group.code}</code>
                      </pre>
                    </div>
                  </TabsContent>
                ))}
              </Tabs>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
