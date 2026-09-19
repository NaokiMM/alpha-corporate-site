import { Link } from 'react-router-dom'
import './HomeContact.css'

export function HomeContact() {
  return (
    <section
      className="home-contact"
      aria-labelledby="home-contact-heading"
    >
      <div className="container">
        <span className="home-contact__label">CONTACT</span>
        <h2 id="home-contact-heading" className="home-contact__title">
          LET'S CREATE +alpha.
        </h2>
        <p className="home-contact__lead">
          新しい出会いから、
          <br />
          新しい価値が生まれる。
        </p>
        <p className="home-contact__text">
          事業・採用・取材など、
          <br />
          お気軽にお問い合わせください。
        </p>
        <Link className="home-contact__link" to="/contact">
          CONTACT →
        </Link>
      </div>
    </section>
  )
}
