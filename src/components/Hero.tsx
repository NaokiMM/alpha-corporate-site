import './Hero.css'

export function Hero() {
  return (
    <section id="top" className="hero" aria-labelledby="hero-heading">
      <div className="hero__backdrop" aria-hidden="true" />
      <div className="hero__content container">
        <img
          className="hero__brand"
          src="/images/logo-alpha.png"
          alt=" alpha"
          width={280}
          height={130}
        />
        <h1 id="hero-heading" className="hero__title">
          すべての人生に、+alphaを。
        </h1>
        <p className="hero__lead">
          株式会社 alphaは、美容を起点として関わる人の人生に「+alphaの価値」を届ける会社です。
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
