'use client'

import { useEffect, useRef } from 'react'

interface RevealProps {
  children?: React.ReactNode
  className?: string
  delay?: 0 | 1 | 2 | 3 | 4 | 5
  as?: string
  // pass-through for anchor tags etc.
  href?: string
  target?: string
  rel?: string
  style?: React.CSSProperties
  [key: string]: unknown
}

export function Reveal({
  children,
  className = '',
  delay = 0,
  as: Tag = 'div',
  ...rest
}: RevealProps) {
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('reveal--visible')
          observer.unobserve(el)
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  const delayClass = delay > 0 ? ` reveal--delay-${delay}` : ''
  const finalClass = `reveal${delayClass}${className ? ` ${className}` : ''}`

  // @ts-expect-error dynamic tag
  return <Tag ref={ref} className={finalClass} {...rest}>{children}</Tag>
}
