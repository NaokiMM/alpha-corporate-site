import './Hero.css'

export function Hero() {
  return (
    <section id="top" className="hero" aria-labelledby="hero-heading">
      <div className="hero__backdrop" aria-hidden="true" />
      <div className="hero__content container">
        <img
          className="hero__brand"
          src="/images/logo-alpha.png"
          alt="Alpha"
          width={280}
          height={130}
        />
        <h1 id="hero-heading" className="hero__title">
          人と事業の可能性を、形に。
        </h1>
        <p className="hero__lead">
          株式会社Alphaは、美容事業を起点に、新しい価値を生み出す会社です。
        </p>
        <div className="hero__actions">
          <a className="btn btn-primary" href="#business">
            事業内容を見る
          </a>
          <a className="btn btn-ghost" href="#contact">
            お問い合わせ
          </a>
        </div>
      </div>
    </section>
  )
}
