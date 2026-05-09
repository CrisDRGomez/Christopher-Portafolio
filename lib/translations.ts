export type Lang = 'es' | 'en'

export type BiLang = { es: string; en: string }

export const t = {
  nav: {
    about:      { es: 'Acerca de mí', en: 'About Me' },
    experience: { es: 'Experiencia',  en: 'Experience' },
    stack:      { es: 'Stack',        en: 'Stack' },
    projects:   { es: 'Proyectos',    en: 'Projects' },
    education:  { es: 'Educación',    en: 'Education' },
    contact:    { es: 'Contáctame',   en: 'Contact Me' },
  },
  hero: {
    available:  { es: 'Disponible para nuevas oportunidades', en: 'Available for new opportunities' },
    location:   { es: 'Guadalajara, MX', en: 'Guadalajara, MX' },
    greeting:   { es: 'Hola, soy', en: "Hi, I'm" },
    title:      { es: 'Desarrollador', en: 'Developer' },
    titleAccent:{ es: 'Fullstack', en: 'Fullstack' },
    tagline:    { es: 'Fullstack por pasión, Jr. por ahora.', en: 'Fullstack by passion, Jr. for now.' },
    scroll:     { es: 'Scroll', en: 'Scroll' },
    copyEmail:  { es: 'Copiar correo', en: 'Copy email' },
  },
  about: {
    title:       { es: 'Acerca de mí', en: 'About Me' },
    quote:       {
      es: 'El fracaso no es una opción — es el punto de partida de una estrategia mejor.',
      en: "Failure is not an option — it's the starting point of a better strategy.",
    },
    bio: {
      es: 'Soy un desarrollador <strong>Java Fullstack Jr.</strong> con raíces en las ciencias exactas y un enfoque analítico forjado validando sistemas críticos bajo normativas internacionales. Esa experiencia me enseñó algo que el código también exige: los detalles importan y la calidad no es negociable. Hoy construyo software con esa misma mentalidad — aprendiendo rápido, entregando con precisión y con la vista puesta en evolucionar hacia un perfil senior.',
      en: "I'm a <strong>Junior Java Fullstack Developer</strong> rooted in the exact sciences, with an analytical mindset forged by validating critical systems under international standards. That experience taught me something code demands too: details matter and quality is non-negotiable. Today I build software with that same mindset — learning fast, delivering with precision, and aiming to grow into a senior profile.",
    },
    skillsLabel: { es: 'Habilidades blandas', en: 'Soft Skills' },
    skills: [
      { es: 'Pensamiento analítico',    en: 'Analytical thinking' },
      { es: 'Comunicación efectiva',    en: 'Effective communication' },
      { es: 'Trabajo en equipo',        en: 'Teamwork' },
      { es: 'Orientación al detalle',   en: 'Detail-oriented' },
      { es: 'Aprendizaje continuo',     en: 'Continuous learning' },
      { es: 'Resolución de problemas',  en: 'Problem solving' },
      { es: 'Mentalidad de crecimiento',en: 'Growth mindset' },
      { es: 'Proactivo',                en: 'Proactive' },
    ],
  },
  experience: {
    title: { es: 'Experiencia', en: 'Experience' },
    items: [
      {
        year:      '2026',
        period:    { es: 'Feb – May 2026', en: 'Feb – May 2026' },
        badgeType: 'dev' as const,
        badge:     { es: 'Desarrollo', en: 'Development' },
        role:      { es: 'HERA E\u2011commerce', en: 'HERA E\u2011commerce' },
        company:   'Generation México',
        bullets: [
          { es: 'Desarrollé una plataforma e-commerce con equipo de 9 personas bajo metodología Scrum.', en: 'Developed an e-commerce platform with a team of 9 using Scrum methodology.' },
          { es: 'Roté como Product Owner, Scrum Master y desarrollador; gestioné backlogs y planifiqué sprints.', en: 'Rotated as Product Owner, Scrum Master, and developer; managed backlogs and planned sprints.' },
          { es: 'Construí interfaces responsivas con HTML/CSS/Bootstrap e implementé lógica de negocio en Java con base de datos SQL.', en: 'Built responsive interfaces with HTML/CSS/Bootstrap and implemented business logic in Java with a SQL database.' },
        ],
        tags: ['HTML', 'CSS', 'Bootstrap', 'Java', 'SQL', 'Scrum'],
      },
      {
        year:      '2025',
        period:    { es: 'Jul 2025 – Ene 2026', en: 'Jul 2025 – Jan 2026' },
        badgeType: 'other' as const,
        badge:     { es: 'Calidad', en: 'Quality' },
        role:      { es: 'Validación de Sistemas Computarizados', en: 'Computerized Systems Validation' },
        company:   'Liferpal MD',
        bullets: [
          { es: 'Validé hardware y software garantizando trazabilidad e integridad de datos bajo normativas NOM-059 y GAMP 5.', en: 'Validated hardware and software ensuring data traceability and integrity under NOM-059 and GAMP 5 regulations.' },
          { es: 'Elaboré requerimientos de usuario, análisis de riesgos y evaluaciones GAP para determinar el impacto en calidad.', en: 'Prepared user requirements, risk analyses, and GAP assessments to determine quality impact.' },
          { es: 'Coordiné con proveedores y áreas técnicas para resolver desviaciones y gestionar documentación y control de cambios.', en: 'Coordinated with vendors and technical teams to resolve deviations and manage documentation and change control.' },
        ],
        tags: ['GAMP 5', 'NOM-059', 'Documentación técnica', 'Análisis de riesgos'],
      },
    ],
  },
  stack: {
    title:            { es: 'Stack tecnológico', en: 'Tech Stack' },
    frontend:         { es: 'Frontend',          en: 'Frontend' },
    backend:          { es: 'Backend',           en: 'Backend' },
    tools:            { es: 'Herramientas',      en: 'Tools' },
    learningTitle:    { es: 'Aprendiendo',       en: 'Learning' },
    learningSubtitle: { es: 'Profundizando estos conocimientos', en: 'Deepening these skills' },
  },
  projects: {
    title:         { es: 'Proyectos',     en: 'Projects' },
    viewProject:   { es: 'Ver proyecto', en: 'View project' },
    inDevelopment: { es: 'En desarrollo', en: 'In development' },
    items: [
      {
        id:    'highsierra',
        date:  { es: 'Marzo 2026', en: 'March 2026' },
        type:  { es: 'Landing Page · Hackathon', en: 'Landing Page · Hackathon' },
        name:  'High Sierra',
        desc:  {
          es: 'Landing page desarrollada en 8 horas para un club deportivo. Coordiné el frontend con un equipo de 8 personas, entregando a tiempo una interfaz limpia, responsiva y funcional bajo presión de tiempo real.',
          en: 'Landing page built in 8 hours for a sports club. I coordinated the frontend with a team of 8, delivering a clean, responsive, functional interface under real-time pressure.',
        },
        tech:     ['devicon-html5-plain colored', 'devicon-css3-plain colored', 'devicon-javascript-plain colored'],
        techTitles: ['HTML5', 'CSS3', 'JavaScript'],
        link:     'https://crisdrgomez.github.io/Hackaton-No.1/',
        disabled: false,
        image:    '/img/project-highsierra.jpg',
        alt:      'High Sierra landing page',
      },
      {
        id:    'hera',
        date:  { es: 'Mayo 2026', en: 'May 2026' },
        type:  { es: 'E-commerce · Proyecto Integrador', en: 'E-commerce · Integrating Project' },
        name:  'HERA Perfumes y Joyería',
        desc:  {
          es: 'Plataforma de e-commerce en equipo de 9 personas bajo Scrum. Asumí roles rotativos como PO, Scrum Master y desarrollador; construí el frontend responsivo e implementé la lógica de negocio con Spring Boot.',
          en: 'E-commerce platform with a team of 9 under Scrum. I took rotating roles as PO, Scrum Master, and developer; built the responsive frontend and implemented business logic with Spring Boot.',
        },
        tech:     ['devicon-html5-plain colored','devicon-css3-plain colored','devicon-javascript-plain colored','devicon-java-plain colored','devicon-spring-plain colored','devicon-mysql-plain colored','devicon-git-plain colored'],
        techTitles: ['HTML5','CSS3','JavaScript','Java','Spring Boot','MySQL','Git'],
        link:     'https://crisdrgomez.github.io/Prototipo/',
        disabled: true,
        image:    '/img/project-hera.jpg',
        alt:      'HERA Perfumes y Joyería e-commerce',
      },
    ],
  },
  education: {
    title:       { es: 'Educación',         en: 'Education' },
    formalLabel: { es: 'Formación académica', en: 'Academic Background' },
    certsLabel:  { es: 'Certificados',      en: 'Certificates' },
    viewCert:    { es: 'Ver certificado ↗', en: 'View certificate ↗' },
    formal: [
      {
        degree:  { es: 'Bootcamp Desarrollador Java Full Stack Jr.', en: 'Java Full Stack Jr. Developer Bootcamp' },
        school:  'Generation México',
        period:  'Feb 2026 – May 2026',
      },
      {
        degree:  { es: 'Licenciatura en Química', en: "Bachelor's Degree in Chemistry" },
        school:  'CUCEI · Universidad de Guadalajara',
        period:  '2016 – 2024',
      },
    ],
    certs: [
      { name: 'Foundations of Git',       issuer: 'GitKraken',                    year: '2026', link: 'https://learn.gitkraken.com/certificates/pefklk5ept', image: '/img/cert-gitkraken.jpeg', hasLink: true  },
      { name: { es: 'Creación de páginas web con v0', en: 'Web Development with v0' }, issuer: 'Platzi', year: '2026', link: 'https://platzi.com/p/christopher_gomez0306/curso/12654-v0/diploma/detalle/', image: '/img/cert-v0.jpeg', hasLink: true },
      { name: { es: 'Curso de ChatGPT', en: 'ChatGPT Course' },                    issuer: 'Platzi', year: '2026', link: 'https://platzi.com/p/christopher_gomez0306/curso/12319-chatgpt/diploma/detalle/', image: '/img/cert-chatgpt.jpeg', hasLink: true },
      { name: { es: 'SCRUM Profesional', en: 'Professional SCRUM' },               issuer: 'Platzi', year: '2026', link: 'https://platzi.com/p/christopher_gomez0306/curso/12146-scrum-profesional/diploma/detalle/', image: '/img/cert-scrum.jpeg', hasLink: true },
      { name: { es: 'Introducción a Java', en: 'Introduction to Java' },           issuer: 'Accenture · Learning to Earning', year: '2026', link: '#', image: '/img/cert-accenture.jpeg', hasLink: false },
    ],
  },
  contact: {
    available: { es: 'Disponible para nuevas oportunidades', en: 'Available for new opportunities' },
    heading1:  { es: '¿Tienes un proyecto', en: 'Have a project' },
    heading2:  { es: 'en mente?',           en: 'in mind?' },
    desc: {
      es: 'Estoy buscando mi primera oportunidad profesional como desarrollador. Si buscas alguien comprometido, con mentalidad de aprendizaje continuo y ganas de aportar valor desde el primer día, hablemos.',
      en: "I'm looking for my first professional opportunity as a developer. If you're looking for someone committed, with a continuous learning mindset, and eager to add value from day one — let's talk.",
    },
    cta:       { es: 'Escríbeme', en: 'Write to me' },
    copyEmail: { es: 'Copiar correo', en: 'Copy email' },
  },
  footer: {
    copy: { es: '© 2026 · Diseñado y desarrollado por Christopher Ramírez', en: '© 2026 · Designed and developed by Christopher Ramírez' },
  },
} as const
