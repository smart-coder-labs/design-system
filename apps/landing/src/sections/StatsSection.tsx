'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent } from '../../../../components/ui/Card'
import { Title } from '../../../../components/ui/Title'
import Text from '../../../../components/ui/Text'

const stats = [
  { value: '40+', label: 'Components', detail: 'All with dark mode support' },
  { value: '100%', label: 'TypeScript', detail: 'Strict mode compliant' },
  { value: '6', label: 'Variants', detail: 'Per component average' },
  { value: '12K', label: 'GitHub Stars', detail: 'And growing daily' },
]

const counterVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
      ease: [0.16, 1, 0.3, 1],
    },
  }),
}

export default function StatsSection() {
  const [mounted, setMounted] = React.useState(false)
  React.useEffect(() => { setMounted(true) }, [])

  return (
    <section id="stats" className="relative py-24 md:py-32">
      <div className="absolute inset-0 hero-gradient-secondary" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <Title level={2} align="center" className="mb-4">
            Built for Scale
          </Title>
          <Text variant="lead" color="secondary" align="center" className="max-w-xl mx-auto">
            From startup MVPs to enterprise dashboards — our components are
            battle-tested and production-ready.
          </Text>
        </motion.div>

        {/* Stats grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              custom={i}
              variants={counterVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <Card variant="glass" padding="lg" className="text-center h-full">
                <CardContent className="flex flex-col items-center gap-2">
                  <span className="text-4xl md:text-5xl font-bold text-gradient-accent">
                    {stat.value}
                  </span>
                  <Title as="h3" level={6} weight="semibold">
                    {stat.label}
                  </Title>
                  <Text variant="tiny" color="tertiary">
                    {stat.detail}
                  </Text>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
