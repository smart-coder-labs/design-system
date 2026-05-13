'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Button } from '../../../../components/ui/Button'
import { Title } from '../../../../components/ui/Title'
import Text from '../../../../components/ui/Text'
import { Card, CardContent } from '../../../../components/ui/Card'

export default function CTASection() {
  const [mounted, setMounted] = React.useState(false)
  React.useEffect(() => { setMounted(true) }, [])

  return (
    <section id="cta" className="relative py-24 md:py-32 bg-surface-secondary/50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <Card
            variant="elevated"
            padding="lg"
            className="text-center relative overflow-hidden"
          >
            {/* Decorative blobs */}
            {mounted && (
              <>
                <motion.div
                  className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-accent-blue/5 blur-3xl"
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 8, repeat: Infinity }}
                />
                <motion.div
                  className="absolute -bottom-20 -left-20 w-64 h-64 rounded-full bg-purple-500/5 blur-3xl"
                  animate={{ scale: [1, 1.15, 1] }}
                  transition={{ duration: 10, repeat: Infinity, delay: 2 }}
                />
              </>
            )}

            <CardContent className="relative z-10 flex flex-col items-center gap-6 py-8">
              <Title level={2} align="center" className="max-w-2xl">
                Start Building Today
              </Title>
              <Text
                variant="lead"
                color="secondary"
                align="center"
                className="max-w-lg"
              >
                Install the design system and get premium Apple-style components
                in your React project in minutes.
              </Text>

              {/* Install command */}
              <div className="w-full max-w-lg mx-auto mt-2">
                <div className="code-preview px-5 py-3.5 flex items-center justify-between">
                  <code className="text-sm font-mono text-gray-300">
                    npm install @smart-coder-labs/apple-design-system
                  </code>
                  <button
                    onClick={() => {
                      navigator.clipboard.writeText(
                        'npm install @smart-coder-labs/apple-design-system'
                      )
                    }}
                    className="text-text-tertiary hover:text-text-secondary transition-colors p-1"
                    aria-label="Copy command"
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
                    </svg>
                  </button>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-4 mt-2">
                <a
                  href="https://github.com/smart-coder-labs/design-system"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="primary" size="lg" className="min-w-[180px]">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="mr-1">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                    GitHub
                  </Button>
                </a>
                <Button
                  variant="secondary"
                  size="lg"
                  className="min-w-[180px]"
                  onClick={() => {
                    const readme = 'https://github.com/smart-coder-labs/design-system#readme'
                    window.open(readme, '_blank', 'noopener,noreferrer')
                  }}
                >
                  Read the Docs
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
