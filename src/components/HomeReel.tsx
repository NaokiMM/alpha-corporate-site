import './HomeReel.css'

export function HomeReel() {
  return (
    <section className="home-reel" aria-labelledby="home-reel-heading">
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        aria-hidden="true"
      >
        <source
          src="/video/5450150-uhd_3840_2160_30fps.mp4"
          type="video/mp4"
        />
      </video>
      <div className="home-reel__veil" aria-hidden="true" />
      <div className="home-reel__copy">
        <p className="home-reel__en">CREATE +alpha</p>
        <h2 id="home-reel-heading" className="home-reel__title">
          美容を起点に、
          <br />
          人生に新しい価値を。
        </h2>
      </div>
    </section>
  )
}
