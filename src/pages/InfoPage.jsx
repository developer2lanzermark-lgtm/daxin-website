import { useParams, Navigate } from 'react-router-dom'
import { infoPages } from './infoContent.js'
import { sectionArt } from './infoArt.jsx'
import Reveal from '../components/Reveal.jsx'
import '../styles/InfoPage.css'

export default function InfoPage({ page }) {
  const { slug } = useParams()
  const key = page || slug
  const data = infoPages[key]

  if (!data) return <Navigate to="/" replace />

  return (
    <div className={`dxed dxed-${key}`}>
      {/* Hero — pinned below the site navbar; everything below scrolls */}
      <header className="dxed-hero">
        <div className="dxed-container">
          <h1>{data.title}</h1>
          {data.intro && <p className="dxed-lead">{data.intro}</p>}
        </div>
        <span className="dxed-hero-rule" aria-hidden="true" />
      </header>

      <main className="dxed-body">
        {data.sections.map((s, i) => (
          <Reveal as="section" key={s.heading} className="dxed-section" delay={40}>
            <div className="dxed-section-text">
              <h2>{s.heading}</h2>
              {s.body.map((p, j) => (
                <p key={j}>{p}</p>
              ))}
            </div>
            <figure className="dxed-figure">{sectionArt(key, i)}</figure>
          </Reveal>
        ))}
      </main>
    </div>
  )
}
