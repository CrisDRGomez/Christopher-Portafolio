'use client'
 
import { useState } from 'react'
import { useLang } from '@/context/LangContext'
import { t } from '@/lib/translations'
 
const SVG_COPY = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="9" y="9" width="13" height="13" rx="2" /><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
  </svg>
)
const SVG_CHECK = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12" />
  </svg>
)
 
export function Hero() {
  const { l } = useLang()
  const [copied, setCopied] = useState(false)
 
  const copyEmail = async (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    try {
      await navigator.clipboard.writeText('christopher_gomez0306@hotmail.com')
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      window.location.href = 'mailto:christopher_gomez0306@hotmail.com'
    }
  }
 
  const scrollTo = (href: string) => (e: React.MouseEvent) => {
    e.preventDefault()
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
 
  return (
    <section id="hero" className="hero">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={`${process.env.NEXT_PUBLIC_BASE_PATH ?? ''}/img/hero.png`} alt="" className="hero__bg" aria-hidden="true" />
      <div className="hero__overlay" aria-hidden="true" />
 
      <div className="hero__container">
        <div className="hero__badge">
          <span className="hero__badge-dot" />
          {l(t.hero.available)}
          <span className="hero__badge-sep">—</span>
          {l(t.hero.location)}
        </div>
 
        <div className="hero__content">
          <div className="hero__headline">
            <p className="hero__greeting">
              {l(t.hero.greeting)} <span className="hero__greeting-accent">Cris</span>
            </p>
            <h1 className="hero__title">
              {l(t.hero.title)}
              <span className="hero__title-accent">{l(t.hero.titleAccent)}</span>
            </h1>
            <p className="hero__tagline">{l(t.hero.tagline)}</p>
          </div>
 
          <div className="hero__actions">
            <div className="hero__buttons">
              <a href="https://github.com/CrisDRGomez" target="_blank" rel="noopener" className="hero__btn" aria-label="GitHub">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                </svg>
                GitHub
              </a>
 
              <a href="https://linkedin.com/in/christopher-d-ram%C3%ADrez-g" target="_blank" rel="noopener" className="hero__btn" aria-label="LinkedIn">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
                LinkedIn
              </a>
 
              <a href="/cv/christopher-ramirez-cv.pdf" download className="hero__btn hero__btn--cv" aria-label="Descargar CV">
                {l(t.hero.scroll) === 'Scroll' ? 'CV' : 'CV'}
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 3v13M7 11l5 5 5-5" /><path d="M5 21h14" />
                </svg>
              </a>
            </div>
 
            <div className="hero__email-pill">
              <svg className="hero__email-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="4" width="20" height="16" rx="3" /><path d="M2 7l10 7 10-7" />
              </svg>
              <span>christopher_gomez0306@hotmail.com</span>
              <button
                className={`hero__copy-btn${copied ? ' hero__copy-btn--copied' : ''}`}
                onClick={copyEmail}
                aria-label={l(t.hero.copyEmail)}
                title={l(t.hero.copyEmail)}
              >
                {copied ? SVG_CHECK : SVG_COPY}
              </button>
            </div>
          </div>
        </div>
      </div>
 
      <div className="hero__scroll-hint" aria-hidden="true" onClick={scrollTo('#about')}>
        <span>{l(t.hero.scroll)}</span>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 5v14M5 12l7 7 7-7" />
        </svg>
      </div>
    </section>
  )
}