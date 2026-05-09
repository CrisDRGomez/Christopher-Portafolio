'use client'

import { useState } from 'react'
import { useLang } from '@/context/LangContext'
import { t } from '@/lib/translations'
import { Reveal } from '@/components/ui/Reveal'

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

export function Contact() {
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

  return (
    <section id="contact" className="section contact">
      <div className="section__container">
        <Reveal className=" contact__inner">
          <div className="contact__badge">
            <span className="hero__badge-dot" />
            {l(t.contact.available)}
          </div>

          <h2 className="contact__heading">
            {l(t.contact.heading1)}<br />{l(t.contact.heading2)}
          </h2>

          <p className="contact__desc">{l(t.contact.desc)}</p>

          <a href="mailto:christopher_gomez0306@hotmail.com" className="btn btn--primary btn--lg contact__cta">
            {l(t.contact.cta)}
            <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M3 8h10M9 4l4 4-4 4" />
            </svg>
          </a>

          <div className="contact__socials">
            <a href="https://github.com/CrisDRGomez" target="_blank" rel="noopener" className="contact__social-link">GitHub ↗</a>
            <a href="https://linkedin.com/in/christopher-d-ram%C3%ADrez-g" target="_blank" rel="noopener" className="contact__social-link">LinkedIn ↗</a>
            <a href="/cv/christopher-ramirez-cv.pdf" download className="contact__social-link">CV ↗</a>
          </div>

          <p className="contact__email-row">
            christopher_gomez0306@hotmail.com
            <button
              id="copyContactEmail"
              className={`contact__copy-btn hero__copy-btn${copied ? ' hero__copy-btn--copied' : ''}`}
              onClick={copyEmail}
              title={l(t.contact.copyEmail)}
            >
              {copied ? SVG_CHECK : SVG_COPY}
            </button>
          </p>
        </Reveal>
      </div>
    </section>
  )
}
