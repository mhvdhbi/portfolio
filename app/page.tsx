import { Nav } from '@/components/Nav'
import { Hero } from '@/components/Hero'
import { Work } from '@/components/Work'
import { Skills } from '@/components/Skills'
import { Approach } from '@/components/Approach'
import { About } from '@/components/About'
import { Contact } from '@/components/Contact'
import { Footer } from '@/components/Footer'

export default function Page() {
  return (
    <>
      <Nav />
      <main id="main">
        <Hero />
        <Work />
        <Skills />
        <Approach />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
