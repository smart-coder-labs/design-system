'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Button } from '../../../../components/ui/Button'
import { Badge } from '../../../../components/ui/Badge'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1],
    },
  },
}

export default function HeroSection() {
  const [mounted, setMounted] = React.useState(false)
  React.useEffect(() => { setMounted(true) }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-14">
      {/* Background layers */}
      <div className="absolute inset-0 hero-gradient" />
      <div className="absolute inset-0 grid-pattern opacity-30" />

      {/* Animated glow orbs */}
      {mounted && (
        <>
          <motion.div
            className="absolute top-1/4 -left-32 w-96 h-96 rounded-full bg-accent-blue/5 blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 10, 0],
            }}
            transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
          />
          <motion.div
            className="absolute bottom-1/4 -right-32 w-80 h-80 rounded-full bg-purple-500/5 blur-3xl"
            animate={{
              scale: [1, 1.15, 1],
              rotate: [0, -10, 0],
            }}
            transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
          />
        </>
      )}

      {/* Content */}
      <motion.div
        className="relative z-10 max-w-4xl mx-auto px-6 text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={itemVariants} className="mb-6">
          <Badge variant="primary" size="lg" dot>
            🚀 v1.0.17 — Production Ready
          </Badge>
        </motion.div>

        <motion.h1
          variants={itemVariants}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[1.05] mb-6"
        >
          <span className="text-gradient">Build Beautiful</span>
          <br />
          <span className="text-gradient-accent">Apple-Style UIs</span>
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="text-lg sm:text-xl md:text-2xl text-text-secondary max-w-2xl mx-auto leading-relaxed mb-10"
        >
          A production-ready React design system inspired by Apple's human interface
          guidelines. Components that feel native, look premium, and ship fast.
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a href="https://github.com/smart-coder-labs/design-system" target="_blank" rel="noopener noreferrer">
            <Button variant="primary" size="lg" className="min-w-[180px]">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="mr-1">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              View on GitHub
            </Button>
          </a>
          <Button
            variant="secondary"
            size="lg"
            className="min-w-[180px]"
            onClick={() => {
              document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })
            }}
          >
            Explore Components
          </Button>
        </motion.div>

        {/* Tech stack badges */}
        <motion.div
          variants={itemVariants}
          className="flex flex-wrap items-center justify-center gap-3 mt-12"
        >
          {['React 19', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Radix UI'].map((tech) => (
            <span
              key={tech}
              className="px-3 py-1.5 text-xs font-medium rounded-full bg-surface-secondary text-text-secondary border border-border-primary"
            >
              {tech}
            </span>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        >
          <svg width="20" height="30" viewBox="0 0 20 30" fill="none" className="text-text-tertiary">
            <rect x="1.5" y="1.5" width="17" height="27" rx="8.5" stroke="currentColor" strokeWidth="2" />
            <motion.circle
              cx="10" cy="10" r="2.5"
              fill="currentColor"
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  )
}
