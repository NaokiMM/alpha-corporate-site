import { useEffect, useState } from 'react'
import './Header.css'

const NAV_ITEMS = [
  { href: '#company', label: '会社情報' },
  { href: '#business', label: '事業内容' },
  { href: '#contact', label: 'お問い合わせ' },
] as const

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 12)
    }

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [isMenuOpen])

  const closeMenu = () => setIsMenuOpen(false)

  return (
    <header className={`header${isScrolled ? ' header--scrolled' : ''}`}>
      <div className="header__inner container">
        <a href="#top" className="header__logo" onClick={closeMenu}>
          <img src="/images/logo-alpha.png" alt="Alpha" width={120} height={56} />
        </a>

        <nav className="header__nav" aria-label="メインナビゲーション">
          <ul className="header__nav-list">
            {NAV_ITEMS.map((item) => (
              <li key={item.href}>
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>
        </nav>

        <button
          type="button"
          className={`header__menu-btn${isMenuOpen ? ' is-open' : ''}`}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-nav"
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          <span className="sr-only">メニュー</span>
          <span className="header__menu-bar" aria-hidden="true" />
          <span className="header__menu-bar" aria-hidden="true" />
        </button>
      </div>

      <div
        id="mobile-nav"
        className={`header__drawer${isMenuOpen ? ' is-open' : ''}`}
        hidden={!isMenuOpen}
      >
        <nav aria-label="モバイルナビゲーション">
          <ul>
            {NAV_ITEMS.map((item) => (
              <li key={item.href}>
                <a href={item.href} onClick={closeMenu}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}
