import { useEffect, useRef, useState } from 'react'
import './About.css'

export function About() {
  const sectionRef = useRef<HTMLElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const element = sectionRef.current
    if (!element) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.18 },
    )

    observer.observe(element)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      id="about"
      className={`section about${isVisible ? ' is-visible' : ''}`}
      aria-labelledby="about-heading"
    >
      <div className="container about__grid">
        <div className="about__intro">
          <span className="about__orb" aria-hidden="true" />
          <span className="section-label">About</span>
          <h2 id="about-heading" className="section-title about__title">
            <span className="about__plus" aria-hidden="true">
              +
            </span>
            alphaについて
          </h2>
        </div>
        <div className="about__body">
          <p>
            株式会社 alphaは、美容事業を起点としながら、
            <br />
            特定の業種にとらわれず、複数の事業領域へ挑戦していく会社です。
          </p>
          <p>
            人と向き合う現場で培った視点を活かし、
            <br />
            事業の可能性を丁寧に形にしていくこと。
            <br />
            それが、私たちの大切にしている姿勢です。
          </p>
          <p>
            今後も新しい価値を生み出す挑戦を続け、
            <br />
            信頼されるパートナーであり続けます。
          </p>
        </div>
      </div>
    </section>
  )
}
