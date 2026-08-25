import './Footer.css'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container footer__inner">
        <a href="#top" className="footer__logo">
          <img
            src="/images/logo-alpha.png"
            alt="Alpha"
            width={100}
            height={46}
          />
        </a>
        <p className="footer__copy">© {year} Alpha Co., Ltd.</p>
      </div>
    </footer>
  )
}
