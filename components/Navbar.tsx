'use client'

import { useEffect, useRef, useState } from 'react'
import { useLang } from '@/context/LangContext'
import { t } from '@/lib/translations'
import { ThemeToggle } from '@/components/ui/ThemeToggle'
import { LangToggle } from '@/components/ui/LangToggle'

const NAV_SECTIONS = [
  { href: '#about',      labelKey: t.nav.about      },
  { href: '#experience', labelKey: t.nav.experience  },
  { href: '#stack',      labelKey: t.nav.stack       },
  { href: '#projects',   labelKey: t.nav.projects    },
  { href: '#education',  labelKey: t.nav.education   },
]

export function Navbar() {
  const { l } = useLang()
  const [scrolled, setScrolled]     = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeId, setActiveId]     = useState('')
  const navRef = useRef<HTMLElement>(null)

  // Scroll state
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close mobile menu on outside click
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setMobileOpen(false)
      }
    }
    document.addEventListener('click', handler)
    return () => document.removeEventListener('click', handler)
  }, [])

  // Active link tracking
  useEffect(() => {
    const sections = document.querySelectorAll<HTMLElement>('section[id]')
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) setActiveId(entry.target.id)
        })
      },
      { rootMargin: '-68px 0px -55% 0px', threshold: 0 }
    )
    sections.forEach(s => observer.observe(s))
    return () => observer.disconnect()
  }, [])

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    setMobileOpen(false)
    const target = document.querySelector(href)
    if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <nav
      id="navbar"
      ref={navRef}
      className={`navbar${scrolled ? ' navbar--scrolled' : ''}`}
    >
      <div className="navbar__container">
        <a href="#hero" className="navbar__logo" onClick={e => handleNavClick(e, '#hero')}>
          Christopher Ramírez
        </a>

        <ul className="navbar__links">
          {NAV_SECTIONS.map(({ href, labelKey }) => (
            <li key={href}>
              <a
                href={href}
                className={`navbar__link${activeId === href.slice(1) ? ' navbar__link--active' : ''}`}
                onClick={e => handleNavClick(e, href)}
              >
                {l(labelKey)}
              </a>
            </li>
          ))}
        </ul>

        {/* Controls */}
        <div className="navbar__controls">
          <ThemeToggle />
          <LangToggle />
          <a
            href="#contact"
            className="btn btn--cta navbar__cta"
            onClick={e => handleNavClick(e, '#contact')}
          >
            {l(t.nav.contact)}
          </a>
        </div>

        <button
          className={`navbar__toggle${mobileOpen ? ' navbar__toggle--open' : ''}`}
          id="navToggle"
          aria-label="Abrir menú"
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen(o => !o)}
        >
          <span /><span /><span />
        </button>
      </div>

      {/* Mobile menu */}
      <div className={`navbar__mobile${mobileOpen ? ' navbar__mobile--open' : ''}`} id="navMobile">
        {NAV_SECTIONS.map(({ href, labelKey }) => (
          <a
            key={href}
            href={href}
            className="navbar__mobile-link"
            onClick={e => handleNavClick(e, href)}
          >
            {l(labelKey)}
          </a>
        ))}
        <a
          href="#contact"
          className="navbar__mobile-link navbar__mobile-cta"
          onClick={e => handleNavClick(e, '#contact')}
        >
          {l(t.nav.contact)}
        </a>
        <div className="navbar__mobile-controls">
          <ThemeToggle />
          <LangToggle />
        </div>
      </div>
    </nav>
  )
}
