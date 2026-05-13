'use client'

import React from 'react'
import HeroSection from './sections/HeroSection'
import FeaturesSection from './sections/FeaturesSection'
import ComponentsGallery from './sections/ComponentsGallery'
import ShowcaseSection from './sections/ShowcaseSection'
import DocumentationSection from './sections/DocumentationSection'
import StatsSection from './sections/StatsSection'
import CTASection from './sections/CTASection'
import LandingFooter from './sections/LandingFooter'
import ThemeToggle from './components/ThemeToggle'

export default function App() {
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
    // Apply saved theme on load
    const saved = localStorage.getItem('apple-ds-theme')
    if (saved === 'dark') {
      document.documentElement.classList.add('dark')
    }
  }, [])

  const toggleTheme = () => {
    const isDark = document.documentElement.classList.toggle('dark')
    localStorage.setItem('apple-ds-theme', isDark ? 'dark' : 'light')
  }

  return (
    <div className="min-h-screen bg-background-primary text-text-primary overflow-hidden">
      {/* Fixed nav bar with glass effect */}
      <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-border-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-14 flex items-center justify-between">
          <a href="/" className="flex items-center gap-2 text-sm font-semibold text-text-primary">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 2L2 7l10 5 10-5-10-5z" />
              <path d="M2 17l10 5 10-5" />
              <path d="M2 12l10 5 10-5" />
            </svg>
            Design System
          </a>

          <div className="hidden md:flex items-center gap-6">
            <a href="#features" className="text-sm text-text-secondary hover:text-text-primary transition-colors">Features</a>
            <a href="#components" className="text-sm text-text-secondary hover:text-text-primary transition-colors">Components</a>
            <a href="#showcase" className="text-sm text-text-secondary hover:text-text-primary transition-colors">Showcase</a>
            <a href="#docs" className="text-sm text-text-secondary hover:text-text-primary transition-colors">Docs</a>
            <a href="#cta" className="text-sm text-text-secondary hover:text-text-primary transition-colors">Get Started</a>
            <ThemeToggle />
          </div>

          <div className="flex md:hidden items-center gap-2">
            <ThemeToggle />
            <MobileMenu />
          </div>
        </div>
      </nav>

      <main>
        <HeroSection />
        <FeaturesSection />
        <ComponentsGallery />
        <ShowcaseSection />
        <DocumentationSection />
        <StatsSection />
        <CTASection />
      </main>

      <LandingFooter />
    </div>
  )
}

/* Mobile menu */
function MobileMenu() {
  const [open, setOpen] = React.useState(false)

  return (
    <>
      <button
        onClick={() => setOpen(!open)}
        className="p-2 text-text-secondary hover:text-text-primary transition-colors"
        aria-label="Toggle menu"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
          {open ? (
            <>
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </>
          ) : (
            <>
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </>
          )}
        </svg>
      </button>

      {open && (
        <div className="fixed inset-0 top-14 z-40 bg-background-primary/98 backdrop-blur-xl">
          <div className="flex flex-col items-center gap-6 pt-12">
            {['Features', 'Components', 'Showcase', 'Docs', 'Get Started'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
                onClick={() => setOpen(false)}
                className="text-lg font-medium text-text-secondary hover:text-text-primary transition-colors"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      )}
    </>
  )
}
