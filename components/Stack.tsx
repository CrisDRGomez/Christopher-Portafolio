'use client'

import { useLang } from '@/context/LangContext'
import { t } from '@/lib/translations'
import { Reveal } from '@/components/ui/Reveal'

const FRONTEND = [
  { icon: 'devicon-html5-plain colored',       label: 'HTML5' },
  { icon: 'devicon-css3-plain colored',        label: 'CSS3' },
  { icon: 'devicon-javascript-plain colored',  label: 'JavaScript' },
  { icon: 'devicon-bootstrap-plain colored',   label: 'Bootstrap' },
]

const BACKEND = [
  { icon: 'devicon-java-plain colored',        label: 'Java' },
  { icon: 'devicon-spring-plain colored',      label: 'Spring Boot' },
  { icon: 'devicon-spring-plain colored',      label: 'Spring Security' },
  { icon: 'devicon-mysql-plain colored',       label: 'MySQL' },
]

const TOOLS = [
  { icon: 'devicon-git-plain colored',         label: 'Git' },
  { icon: 'devicon-github-original',           label: 'GitHub' },
  { icon: 'devicon-vscode-plain colored',      label: 'VS Code' },
  { icon: 'devicon-intellij-plain colored',    label: 'IntelliJ IDEA' },
]

const LEARNING = [
  { icon: 'devicon-react-original colored',    label: 'React' },
  { icon: 'devicon-nextjs-plain',              label: 'Next.js' },
  { icon: 'devicon-typescript-plain colored',  label: 'TypeScript' },
]

interface GroupProps {
  title: string
  items: { icon: string; label: string }[]
  delay: 1 | 2 | 3
}

function StackGroup({ title, items, delay }: GroupProps) {
  return (
    <Reveal className=" stack-group" delay={delay}>
      <h3 className="stack-group__title">{title}</h3>
      <div className="stack-group__items">
        {items.map(({ icon, label }) => (
          <div key={label} className="stack-item">
            <i className={icon} />
            <span>{label}</span>
          </div>
        ))}
      </div>
    </Reveal>
  )
}

export function Stack() {
  const { l } = useLang()

  return (
    <section id="stack" className="section stack">
      <div className="section__container">
        <Reveal as="header" className=" section__header">
          <h2 className="section__title">{l(t.stack.title)}</h2>
        </Reveal>

        <div className="stack__grid">
          <StackGroup title={l(t.stack.frontend)} items={FRONTEND} delay={1} />
          <StackGroup title={l(t.stack.backend)}  items={BACKEND}  delay={2} />
          <StackGroup title={l(t.stack.tools)}    items={TOOLS}    delay={3} />
        </div>

        <Reveal className=" stack__learning">
          <div className="stack__learning-header">
            <span className="stack__learning-title">{l(t.stack.learningTitle)}</span>
            <span className="stack__learning-subtitle">{l(t.stack.learningSubtitle)}</span>
          </div>
          <div className="stack__learning-items">
            {LEARNING.map(({ icon, label }) => (
              <div key={label} className="stack-item">
                <i className={icon} />
                <span>{label}</span>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
