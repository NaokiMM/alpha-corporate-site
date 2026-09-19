import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import './Header.css'

const NAV_ITEMS = [
  { to: '/', label: 'トップ', en: 'Top' },
  { to: '/company', label: '会社情報', en: 'Company' },
  { to: '/business', label: '事業内容', en: 'Business' },
  { to: '/staff', label: 'スタッフ', en: 'Staff' },
  { to: '/recruit', label: '求人採用', en: 'Recruit' },
  { to: '/contact', label: 'お問い合わせ', en: 'Contact' },
] as const

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [isMenuOpen])

  useEffect(() => {
    setIsMenuOpen(false)
  }, [pathname])

  const closeMenu = () => setIsMenuOpen(false)

  return (
    <header className="header">
      <div className="header__bar" aria-hidden="true" />
      <div className="header__inner container">
        <Link to="/" className="header__logo" onClick={closeMenu}>
          <img src="/images/logo-alpha.png" alt=" alpha" width={120} height={56} />
        </Link>

        <nav className="header__nav" aria-label="メインナビゲーション">
          <ul className="header__nav-list">
            {NAV_ITEMS.map((item, index) => (
              <li key={item.to}>
                <NavLink
                  to={item.to}
                  end={item.to === '/'}
                  className={({ isActive }) =>
                    `header__link${item.to === '/contact' ? ' header__link--contact' : ''}${isActive ? ' active' : ''}`
                  }
                >
                  <span className="header__link-text">
                    <span className="header__link-index">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <span className="header__link-en">{item.en}</span>
                    <span className="header__link-ja">{item.label}</span>
                  </span>
                </NavLink>
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
            {NAV_ITEMS.map((item, index) => (
              <li key={item.to}>
                <NavLink
                  to={item.to}
                  end={item.to === '/'}
                  onClick={closeMenu}
                >
                  <span>{String(index + 1).padStart(2, '0')}</span>
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}
