'use client'

import { useLang } from '@/context/LangContext'
import { t } from '@/lib/translations'

export function Footer() {
  const { l } = useLang()

  return (
    <footer id="footer" className="footer">
      <div className="footer__container">
        <span className="footer__copy">{l(t.footer.copy)}</span>
      </div>
    </footer>
  )
}
