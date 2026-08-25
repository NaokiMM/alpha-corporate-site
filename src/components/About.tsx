import './About.css'

export function About() {
  return (
    <section id="about" className="section about" aria-labelledby="about-heading">
      <div className="container about__grid">
        <div className="about__intro">
          <span className="section-label">About</span>
          <h2 id="about-heading" className="section-title">
            株式会社Alphaについて
          </h2>
        </div>
        <div className="about__body">
          <p>
            株式会社Alphaは、美容事業を起点としながら、特定の業種にとらわれず、
            複数の事業領域へ挑戦していく会社です。
          </p>
          <p>
            人と向き合う現場で培った視点を活かし、事業の可能性を丁寧に形にしていくこと。
            それが、私たちの大切にしている姿勢です。
          </p>
          <p>
            今後も新しい価値を生み出す挑戦を続け、信頼されるパートナーであり続けます。
          </p>
        </div>
      </div>
    </section>
  )
}
