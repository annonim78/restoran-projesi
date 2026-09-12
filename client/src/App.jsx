import { useRef, useState } from 'react'
import './App.css'
import Rezervasyon from './Rezervasyon'
import Menu from './Menu'
import Iletisim from './Iletisim'

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const menuButtonRef = useRef(null)
  const heroBottomRef = useRef(null)
const handleHeroBottomMouseMove = (event) => {
  const rect = heroBottomRef.current.getBoundingClientRect()
  const x = ((event.clientX - rect.left) / rect.width) * 100
  const y = ((event.clientY - rect.top) / rect.height) * 100
  heroBottomRef.current.style.setProperty('--spot-x', `${x}%`)
  heroBottomRef.current.style.setProperty('--spot-y', `${y}%`)
}
  const closeMenu = () => {
    setMenuOpen(false)
  }

  const handleEscape = (event) => {
    if (event.key === 'Escape' && menuOpen) {
      setMenuOpen(false)
      menuButtonRef.current?.focus()
    }
  }

  return (
    <div className="restaurant" onKeyDown={handleEscape}>
            <div className="global-light-sweep" aria-hidden="true"></div>
      <a className="skip-link" href="#ana-icerik">
        İçeriğe geç
      </a>

      <header className="site-header">
        <div className="container header-inner">
          <a
            className="brand"
            href="#anasayfa"
            aria-label="Meşhur Adana Kebabçısı ana sayfa"
            onClick={closeMenu}
          >
            <span className="brand-emblem" aria-hidden="true">
              M
            </span>
            <span className="brand-text">
              <span className="brand-top">MEŞHUR ADANA</span>
              <span className="brand-bottom">KEBABÇISI</span>
            </span>
          </a>


          <button
            ref={menuButtonRef}
            className="menu-toggle"
            type="button"
            aria-expanded={menuOpen}
            aria-controls="site-navigation"
            aria-label={menuOpen ? 'Gezinme menüsünü kapat' : 'Gezinme menüsünü aç'}
            onClick={() => setMenuOpen((isOpen) => !isOpen)}
          >
            {menuOpen ? 'Kapat' : 'Menü'}
            <span aria-hidden="true">{menuOpen ? '×' : '☰'}</span>
          </button>

          <nav
            id="site-navigation"
            className={`site-navigation${menuOpen ? ' is-open' : ''}`}
            aria-label="Ana gezinme"
          >
            <a href="#anasayfa" onClick={closeMenu}>
              Ana Sayfa
            </a>
            <a href="#mutfagimiz" onClick={closeMenu}>
              Mutfağımız
            </a>
                        <a className="nav-cta" href="#menu" onClick={closeMenu}>
              Lezzetleri Keşfet <span aria-hidden="true">↗</span>
            </a>
            <a className="nav-reservation" href="#rezervasyon" onClick={closeMenu}>
              REZERVASYON
            </a>
          </nav>
        </div>
      </header>

      <main id="ana-icerik" tabIndex={-1}>
        <section
          id="anasayfa"
          className="hero-section"
          aria-labelledby="hero-title"
        >
          <div className="container hero-layout">
            <div className="hero-content">
              <p className="eyebrow">
                TÜRK MUTFAĞI <span aria-hidden="true">/</span> ADANA KEBAP & KÖFTE
              </p>

              <h1 id="hero-title">
                Sofranın başrolü.
                <span>Adana.</span>
              </h1>

              <p className="hero-description">
                Adana kebap ve köfte etrafında buluşan bir sofra.
                Türk mutfağının sevilen lezzetlerini keşfedin.
              </p>

              <div className="hero-actions">
                <a className="button button-gold" href="#menu">
                  Lezzetleri Keşfet <span aria-hidden="true">↗</span>
                </a>
                <a className="button button-outline" href="#mutfagimiz">
                  Mutfağımız
                </a>
              </div>

              <div className="hero-signature">
                <span className="signature-line" aria-hidden="true" />
                <span>Meşhur Adana Kebabçısı</span>
              </div>
            </div>

            <div className="hero-art" aria-hidden="true">
              <div className="hero-art-ring">
                <span className="art-overline">MEŞHUR</span>
                <span className="art-title">ADANA</span>
                <span className="art-divider" />
                <span className="art-subtitle">KEBAP & KÖFTE</span>
              </div>
              <span className="art-caption">TÜRK MUTFAĞI</span>
            </div>
          </div>

          <div className="hero-bottom">
            <div className="container hero-bottom-inner">
              <span>ADANA KEBAP</span>
              <span aria-hidden="true">✦</span>
              <span>KÖFTE</span>
              <span aria-hidden="true">✦</span>
              <span>TÜRK MUTFAĞI</span>
            </div>
          </div>
        </section>

        <section
          id="mutfagimiz"
          className="intro-section"
          aria-labelledby="intro-title"
        >
          <div className="container intro-layout">
            <div>
              <p className="eyebrow">MUTFAĞIMIZ</p>
              <h2 id="intro-title">
                Aynı sofrada,
                <span>iki sevilen lezzet.</span>
              </h2>
            </div>
            <p className="intro-description">
              Meşhur Adana Kebabçısı’nın odağında Adana kebap ve köfte var.
              Sofranızın başrolünü seçin, Türk mutfağının lezzetlerine
              yer açın.
            </p>
          </div>
        </section>

        <Menu />

        <Rezervasyon />
      </main>

      <footer className="site-footer">
        <div className="container footer-inner">
          <span className="footer-brand">Meşhur Adana Kebabçısı</span>
          <span>Türk Mutfağı · Adana Kebap & Köfte</span>
          <a href="#anasayfa">
            Başa dön <span aria-hidden="true">↑</span>
          </a>
        </div>
        <Iletisim />
      </footer>
    </div>
  )
}

export default App