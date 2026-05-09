'use client'

import { ThemeProvider } from '@/context/ThemeContext'
import { LangProvider } from '@/context/LangContext'
import { useLenis } from '@/hooks/useLenis'

function LenisInit({ children }: { children: React.ReactNode }) {
  useLenis()
  return <>{children}</>
}

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider>
      <LangProvider>
        <LenisInit>
          {children}
        </LenisInit>
      </LangProvider>
    </ThemeProvider>
  )
}
