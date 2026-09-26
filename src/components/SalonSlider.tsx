import { useEffect, useState } from 'react'
import './SalonSlider.css'

const SLIDES = [
  {
    src: '/images/salon/01-shampoo.png',
    alt: 'ガラスブロックの向こうにシャンプー台が並ぶサロン',
    width: 938,
    height: 606,
  },
  {
    src: '/images/salon/02-mirror.jpg',
    alt: '大きな鏡と木の椅子が並ぶセット面',
    width: 768,
    height: 492,
  },
  {
    src: '/images/salon/03-stations.jpg',
    alt: '白い壁と鏡、黒いチェアが並ぶサロンの店内',
    width: 768,
    height: 492,
  },
  {
    src: '/images/salon/04-floor.jpg',
    alt: 'シャンプー台とセット面が並ぶサロン全景',
    width: 1024,
    height: 614,
  },
]

const INTERVAL_MS = 4800
const DURATION_MS = 800

export function SalonSlider() {
  const [index, setIndex] = useState(0)
  const [withMotion, setWithMotion] = useState(true)
  const [paused, setPaused] = useState(false)
  const [reducedMotion, setReducedMotion] = useState(false)
  const loop = [...SLIDES, SLIDES[0]]

  useEffect(() => {
    const media = window.matchMedia('(prefers-reduced-motion: reduce)')
    const update = () => setReducedMotion(media.matches)
    update()
    media.addEventListener('change', update)
    return () => media.removeEventListener('change', update)
  }, [])

  useEffect(() => {
    if (paused || reducedMotion) return
    const id = window.setInterval(() => {
      setWithMotion(true)
      setIndex((current) => (current >= SLIDES.length ? current : current + 1))
    }, INTERVAL_MS)
    return () => window.clearInterval(id)
  }, [paused, reducedMotion])

  useEffect(() => {
    if (index !== SLIDES.length) return
    const id = window.setTimeout(() => {
      setWithMotion(false)
      setIndex(0)
    }, DURATION_MS)
    return () => window.clearTimeout(id)
  }, [index])

  useEffect(() => {
    if (withMotion) return
    const id = window.requestAnimationFrame(() => setWithMotion(true))
    return () => window.cancelAnimationFrame(id)
  }, [withMotion])

  const activeIndex = index % SLIDES.length

  return (
    <section
      className="salon-slider"
      aria-roledescription="カルーセル"
      aria-label="サロンの店内写真"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={() => setPaused(false)}
    >
      <div className="salon-slider__viewport">
        <div
          className={`salon-slider__track${withMotion ? '' : ' is-instant'}`}
          style={{ transform: `translate3d(-${index * 100}%, 0, 0)` }}
        >
          {loop.map((slide, slideIndex) => (
            <figure className="salon-slider__slide" key={`${slide.src}-${slideIndex}`}>
              <img
                src={slide.src}
                alt={slideIndex === SLIDES.length ? '' : slide.alt}
                width={slide.width}
                height={slide.height}
                draggable={false}
              />
            </figure>
          ))}
        </div>
      </div>

      <div className="salon-slider__dots">
        {SLIDES.map((slide, slideIndex) => (
          <button
            key={slide.src}
            type="button"
            className={slideIndex === activeIndex ? 'is-active' : undefined}
            aria-label={`${slideIndex + 1}枚目を表示`}
            aria-current={slideIndex === activeIndex ? 'true' : undefined}
            onClick={() => {
              setWithMotion(true)
              setIndex(slideIndex)
            }}
          />
        ))}
      </div>
    </section>
  )
}
