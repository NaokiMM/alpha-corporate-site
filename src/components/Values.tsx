import './Values.css'

export function Values() {
  return (
    <section
      id="values"
      className="section values"
      aria-labelledby="values-heading"
    >
      <div className="container values__layout">
        <div className="values__intro">
          <span className="section-label">Values</span>
          <h2 id="values-heading" className="section-title">
            行動指針
          </h2>
        </div>

        <div className="values__body">
          <p className="values__catch">
            <span className="values__mark" aria-hidden="true" />
            技術以前に、
            <br />
            人として誠実であること
          </p>
          <p className="values__text">
            技術は、人格の上に積み上がる。
            <br />
            技術を磨き、人として信頼されることが、長く選ばれ続ける力になる。
            <br />
            人間性と人格力をすべての土台とする。
            <br />
            alphaでは、判断や行動の土台を以下の2つとする。
          </p>
        </div>
      </div>
    </section>
  )
}
