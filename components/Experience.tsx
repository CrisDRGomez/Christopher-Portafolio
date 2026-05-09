'use client'

import { useLang } from '@/context/LangContext'
import { t } from '@/lib/translations'
import { Reveal } from '@/components/ui/Reveal'

export function Experience() {
  const { l } = useLang()

  return (
    <section id="experience" className="section experience">
      <div className="section__container">
        <Reveal as="header" className=" section__header">
          <h2 className="section__title">{l(t.experience.title)}</h2>
        </Reveal>

        <div className="experience__timeline">
          {t.experience.items.map((item, idx) => (
            <Reveal
              key={item.company}
              as="article"
              className=" exp-item"
              delay={(idx + 1) as 1 | 2}
            >
              <div className="exp-item__meta">
                <span className="exp-item__year">{item.year}</span>
                <div className="exp-item__divider" />
                <time className="exp-item__period">{l(item.period)}</time>
                <span className={`exp-item__badge exp-item__badge--${item.badgeType}`}>
                  {l(item.badge)}
                </span>
                <h3 className="exp-item__role">{l(item.role)}</h3>
                <p className="exp-item__company">{item.company}</p>
              </div>

              <div className="exp-item__body">
                <ul className="exp-item__list">
                  {item.bullets.map((bullet, bi) => (
                    <li key={bi}>{l(bullet)}</li>
                  ))}
                </ul>
                <div className="exp-item__tags">
                  {item.tags.map(tag => (
                    <span key={tag} className="tag">{tag}</span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
