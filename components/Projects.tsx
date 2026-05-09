'use client'
 
import { useLang } from '@/context/LangContext'
import { t } from '@/lib/translations'
import { Reveal } from '@/components/ui/Reveal'
import { imgPath } from '@/lib/utils'
 
export function Projects() {
  const { l } = useLang()
 
  return (
    <section id="projects" className="section projects">
      <div className="section__container">
        <Reveal as="header" className=" section__header">
          <h2 className="section__title">{l(t.projects.title)}</h2>
        </Reveal>
 
        <div className="projects__grid">
          {t.projects.items.map((project, idx) => (
            <Reveal
              key={project.id}
              as="article"
              className=" project-card"
              delay={(idx + 1) as 1 | 2}
            >
              <div className="project-card__image-wrapper">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={imgPath(project.image)}
                  alt={project.alt}
                  className="project-card__image"
                  loading="lazy"
                />
              </div>
 
              <div className="project-card__body">
                <div className="project-card__meta">
                  <span className="project-card__date">{l(project.date)}</span>
                  <span className="project-card__type">{l(project.type)}</span>
                </div>
 
                <h3 className="project-card__name">{project.name}</h3>
                <p className="project-card__desc">{l(project.desc)}</p>
 
                <div className="project-card__tech">
                  {project.tech.map((iconClass, ti) => (
                    <i key={ti} className={iconClass} title={project.techTitles[ti]} />
                  ))}
                </div>
 
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener"
                  className={`btn btn--outline project-card__link${project.disabled ? ' project-card__link--disabled' : ''}`}
                >
                  {project.disabled ? l(t.projects.inDevelopment) : l(t.projects.viewProject)}
                  <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M3 8h10M9 4l4 4-4 4" />
                  </svg>
                </a>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}