import './Footer.css'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container footer__inner">
        <p className="footer__copy">© {year}  alpha Co., Ltd.</p>
      </div>
    </footer>
  )
}
