'use client'

import { useLang } from '@/context/LangContext'

export function LangToggle() {
  const { lang, toggleLang } = useLang()

  return (
    <button
      onClick={toggleLang}
      className="nav-toggle-btn nav-toggle-btn--lang"
      aria-label={lang === 'es' ? 'Switch to English' : 'Cambiar a Español'}
      title={lang === 'es' ? 'Switch to English' : 'Cambiar a Español'}
    >
      {lang === 'es' ? 'EN' : 'ES'}
    </button>
  )
}
