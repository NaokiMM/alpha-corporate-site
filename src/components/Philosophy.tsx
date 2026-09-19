import './Philosophy.css'

export function Philosophy() {
  return (
    <section
      id="philosophy"
      className="section philosophy"
      aria-labelledby="philosophy-heading"
    >
      <div className="container philosophy__layout">
        <div className="philosophy__intro">
          <span className="section-label">Philosophy</span>
          <h2 id="philosophy-heading" className="section-title">
            経営理念
          </h2>
        </div>

        <div className="philosophy__body">
          <p className="philosophy__catch">
            すべての人生に、<span className="philosophy__plus">+</span>alphaを。
          </p>
          <p className="philosophy__text">
            株式会社 alphaは、
            <br />
            美容を起点として関わる人の人生に
            <br />
            「+alphaの価値」を届けることを目指します。
          </p>
          <p className="philosophy__text">
            人と向き合う現場で培った視点を活かし、
            <br />
            事業の可能性を丁寧に形にしていくこと。
            <br />
            それが、私たちの大切にしている姿勢です。
          </p>
        </div>
      </div>
    </section>
  )
}
