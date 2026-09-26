import './Philosophy.css'

const PRINCIPLES = [
  {
    label: '余白',
    before: 'お客様の余白を生み出す為には、',
    after: '自分達の余白が必要。',
  },
  {
    label: '共栄',
    before: 'お客様の共栄を生み出す為には、',
    after: '自分達の共栄が必要。',
  },
  {
    label: '開花',
    before: 'お客様の開花を生み出す為には、',
    after: '自分達の開花が必要。',
  },
]

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
          <p className="philosophy__question">どんな会社を目指しているのか</p>
        </div>

        <div className="philosophy__body">
          <p className="philosophy__catch">
            すべての人生に、
            <span className="philosophy__phrase">
              <span className="philosophy__plus">+</span>alphaを。
            </span>
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

      <div className="container philosophy__creed">
        <h3 className="philosophy__creed-title">余白・共栄・開花</h3>
        <ul className="philosophy__principles">
          {PRINCIPLES.map((item) => (
            <li key={item.label} className="philosophy__principle">
              <span className="philosophy__badge">{item.label}</span>
              <p className="philosophy__line">
                {item.before}
                <br className="philosophy__line-break" />
                {item.after}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
