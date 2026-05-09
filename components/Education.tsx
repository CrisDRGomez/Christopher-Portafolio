'use client'
 
import { useLang } from '@/context/LangContext'
import { t } from '@/lib/translations'
import { Reveal } from '@/components/ui/Reveal'
import { imgPath } from '@/lib/utils'
 
export function Education() {
  const { l } = useLang()
 
  return (
    <section id="education" className="section certificates">
      <div className="section__container">
        <Reveal as="header" className=" section__header">
          <h2 className="section__title">{l(t.education.title)}</h2>
        </Reveal>
 
        {/* Formal education */}
        <Reveal className=" edu-block">
          <span className="edu-block__label">{l(t.education.formalLabel)}</span>
          <div className="edu-formal__grid">
            {t.education.formal.map((item, idx) => (
              <div key={idx} className="edu-formal-card">
                <p className="edu-formal-card__degree">{l(item.degree)}</p>
                <p className="edu-formal-card__school">{item.school}</p>
                <span className="edu-formal-card__period">{item.period}</span>
              </div>
            ))}
          </div>
        </Reveal>
 
        {/* Certificates */}
        <Reveal className=" edu-block">
          <span className="edu-block__label">{l(t.education.certsLabel)}</span>
          <div className="certificates__grid">
            {t.education.certs.map((cert, idx) => {
              const delayMap = [1, 2, 3, 4, 5] as const
              const delay = delayMap[idx] ?? 5
 
              const inner = (
                <>
                  <div className="cert-card__thumb">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={imgPath(cert.image)} alt={typeof cert.name === 'string' ? cert.name : l(cert.name)} loading="lazy" />
                  </div>
                  <div className="cert-card__body">
                    <h3 className="cert-card__name">
                      {typeof cert.name === 'string' ? cert.name : l(cert.name)}
                    </h3>
                    <p className="cert-card__issuer">{cert.issuer}</p>
                    <span className="cert-card__year">{cert.year}</span>
                    {cert.hasLink && (
                      <span className="cert-card__link">{l(t.education.viewCert)}</span>
                    )}
                  </div>
                </>
              )

              return cert.hasLink ? (
                <Reveal key={idx} as="a" className=" cert-card" delay={delay}
                  href={cert.link} target="_blank" rel="noopener"
                >
                  {inner}
                </Reveal>
              ) : (
                <Reveal key={idx} className=" cert-card" delay={delay}>
                  {inner}
                </Reveal>
              )
            })}
          </div>
        </Reveal>
      </div>
    </section>
  )
}