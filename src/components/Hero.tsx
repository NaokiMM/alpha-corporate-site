import './Hero.css'

export function Hero() {
  return (
    <section id="top" className="hero" aria-labelledby="hero-heading">
      <div className="hero__media" aria-hidden="true">
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
        >
          <source
            src="/video/6487451-uhd_4096_2160_25fps.mp4"
            type="video/mp4"
          />
        </video>
      </div>
      <div className="hero__veil" aria-hidden="true" />
      <div className="hero__fx" aria-hidden="true">
        <span className="hero__orb hero__orb--1" />
        <span className="hero__orb hero__orb--2" />
        <span className="hero__orb hero__orb--3" />
        <span className="hero__ring hero__ring--outer" />
        <span className="hero__ring hero__ring--inner" />
      </div>

      <div className="hero__content container">
        <h1 id="hero-heading" className="hero__title">
          すべての人生に、
          <br />
          +alphaを。
        </h1>

        <p className="hero__lead">
          株式会社 alphaは、
          <br />
          美容を起点として関わる人の人生に
          <br />
          「<span className="hero__lead-accent">+alphaの価値</span>」を届ける会社です。
        </p>
      </div>
    </section>
  )
}
