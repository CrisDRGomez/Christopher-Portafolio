import { Navbar }     from '@/components/Navbar'
import { Hero }       from '@/components/Hero'
import { About }      from '@/components/About'
import { Experience } from '@/components/Experience'
import { Stack }      from '@/components/Stack'
import { Projects }   from '@/components/Projects'
import { Education }  from '@/components/Education'
import { Contact }    from '@/components/Contact'
import { Footer }     from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Stack />
        <Projects />
        <Education />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
