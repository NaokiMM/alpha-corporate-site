import { Link } from 'react-router-dom'
import './Footer.css'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container footer__inner">
        <p className="footer__copy">
          © {year} 株式会社 alpha / alpha Co., Ltd.
        </p>
        <nav className="footer__nav" aria-label="規約">
          <Link to="/privacy">プライバシーポリシー</Link>
          <Link to="/terms">利用規約</Link>
        </nav>
      </div>
    </footer>
  )
}
