'use client'

import { createContext, useContext, useEffect, useState } from 'react'
import type { Lang } from '@/lib/translations'

interface LangContextValue {
  lang: Lang
  toggleLang: () => void
  l: (s: { es: string; en: string } | string) => string
}

const LangContext = createContext<LangContextValue>({
  lang: 'es',
  toggleLang: () => {},
  l: (s) => (typeof s === 'string' ? s : s.es),
})

export function LangProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Lang>('es')

  useEffect(() => {
    const saved = localStorage.getItem('lang') as Lang | null
    if (saved === 'es' || saved === 'en') {
      setLang(saved)
      document.documentElement.setAttribute('lang', saved)
    }
  }, [])

  const toggleLang = () => {
    setLang(prev => {
      const next: Lang = prev === 'es' ? 'en' : 'es'
      localStorage.setItem('lang', next)
      document.documentElement.setAttribute('lang', next)
      return next
    })
  }

  /** Resolve a BiLang object or plain string to the active language */
  const l = (s: { es: string; en: string } | string): string => {
    if (typeof s === 'string') return s
    return s[lang]
  }

  return (
    <LangContext.Provider value={{ lang, toggleLang, l }}>
      {children}
    </LangContext.Provider>
  )
}

export const useLang = () => useContext(LangContext)
