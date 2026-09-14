import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { projects, findProject } from '@/lib/projects'
import { site } from '@/lib/site'
import { Nav } from '@/components/Nav'
import { CaseStudy } from '@/components/CaseStudy'
import { Contact } from '@/components/Contact'
import { Footer } from '@/components/Footer'

type Props = { params: Promise<{ slug: string }> }

/** One static page per project — required for `output: 'export'`. */
export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const p = findProject(slug)
  if (!p) return {}

  const title = `${p.name} — ${p.sector} | ${site.name}`
  return {
    title,
    description: p.summary,
    alternates: { canonical: `${site.url}/travaux/${p.slug}/` },
    openGraph: {
      type: 'article',
      title,
      description: p.summary,
      url: `${site.url}/travaux/${p.slug}/`,
      images: [{ url: p.shots.cover }],
    },
  }
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params
  const p = findProject(slug)
  if (!p) notFound()

  return (
    <>
      <Nav />
      <main id="main">
        <CaseStudy p={p} />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
