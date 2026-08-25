import './Contact.css'

export function Contact() {
  return (
    <section
      id="contact"
      className="section contact"
      aria-labelledby="contact-heading"
    >
      <div className="container contact__panel">
        <span className="section-label">Contact</span>
        <h2 id="contact-heading" className="section-title">
          お問い合わせ
        </h2>
        <p className="contact__text">
          ご相談・お問い合わせは、準備が整い次第、こちらでご案内いたします。
          連絡先の公開まで、今しばらくお待ちください。
        </p>
        <p className="contact__note">連絡先：準備中</p>
      </div>
    </section>
  )
}
