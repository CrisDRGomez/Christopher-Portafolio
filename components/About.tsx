'use client'

import { useLang } from '@/context/LangContext'
import { t } from '@/lib/translations'
import { Reveal } from '@/components/ui/Reveal'

export function About() {
  const { l } = useLang()

  return (
    <section id="about" className="section about">
      <div className="section__container">
        <Reveal as="header" className=" section__header" style={{ textAlign: 'center' } as React.CSSProperties}>
          <h2 className="section__title">{l(t.about.title)}</h2>
        </Reveal>

        <div className="about__inner">
          <Reveal as="blockquote" className=" about__quote">
            <span className="about__quote-open">&ldquo;</span>
            {l(t.about.quote)}
            <span className="about__quote-close">&rdquo;</span>
          </Reveal>

          <Reveal className=" about__divider" />

          <Reveal>
            <p
              className="about__bio"
              dangerouslySetInnerHTML={{ __html: l(t.about.bio) }}
            />
          </Reveal>

          <Reveal>
            <p className="about__skills-label">{l(t.about.skillsLabel)}</p>
            <div className="about__skills">
              {t.about.skills.map((skill, i) => (
                <span key={i} className="about__skill">{l(skill)}</span>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
