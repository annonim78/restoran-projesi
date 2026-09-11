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

          <a className="menu-book-link" href="#menu" aria-label="Menülerimiz" onClick={closeMenu}>
  <svg className="menu-book-icon" viewBox="0 0 48 36" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
  <g className="menu-book-pages" fill="none" stroke="currentColor">
    <path d="M4 6C4 6 12 3 22 6V30C12 27 4 30 4 30V6Z" strokeWidth="1.6" strokeLinejoin="round" />
    <path d="M44 6C44 6 36 3 26 6V30C36 27 44 30 44 30V6Z" strokeWidth="1.6" strokeLinejoin="round" />
    <path d="M24 7V29" strokeWidth="1.6" />
    <path d="M9 12H18M9 17H18M9 22H16" strokeWidth="1" strokeLinecap="round" opacity="0.6" />
    <path d="M30 12H39M30 17H39M32 22H39" strokeWidth="1" strokeLinecap="round" opacity="0.6" />
  </g>
  <g className="menu-book-cover">
    <path d="M4 6C4 6 22 2 44 6V30C22 26 4 30 4 30V6Z" fill="currentColor" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round" />
    <path d="M24 4.5V31.5" stroke="#0c0c0c" strokeWidth="1" opacity="0.5" />
  </g>
</svg>

<span className="menu-book-label">Menülerimiz</span>

</a>

          <style>{`
            .menu-book-link {
              position: absolute;
              left: 34%;
              top: 50%;
              transform: translate(-50%, -50%);
              width: 110px;
              min-height: 74px;
              display: flex;
              flex-direction: column;
              align-items: center;
              justify-content: center;
              gap: 5px;
              color: #d4af37;
              text-decoration: none;
            }
            .menu-book-icon {
  width: 54px;
  height: 40px;
  overflow: visible;
  filter: drop-shadow(0 4px 6px rgba(0,0,0,.45));
}
.menu-book-pages {
  opacity: 0;
  transform: scaleX(0);
  transform-origin: 24px 18px;
  transition: opacity 320ms ease 60ms, transform 320ms ease 60ms;
}
.menu-book-cover {
  transform-origin: 44px 18px;
  transition: transform 380ms ease, opacity 380ms ease;
}
.menu-book-link:hover .menu-book-pages,
.menu-book-link:focus-visible .menu-book-pages {
  opacity: 1;
  transform: scaleX(1);
}
.menu-book-link:hover .menu-book-cover,
.menu-book-link:focus-visible .menu-book-cover {
  transform: rotate(-18deg) translateX(-6px);
  opacity: 0;
}
.menu-book-label {
            .menu-book-label {
  position: absolute;
  top: calc(50% + 25px);
  left: 50%;
  width: max-content;
  font-size: 14px;
  font-weight: 600;
  line-height: 1.2;
  letter-spacing: 1px;
  opacity: 0;
  translate: -50% 0;
  transform: translateY(3px);
  transition: opacity 220ms ease, transform 220ms ease;
}
            .menu-book-link:focus-visible {
              outline: 2px solid #d4af37;
              outline-offset: 4px;
              border-radius: 4px;
            }
            .menu-book-link:focus-visible .menu-book { transform: scale(1.1); }
            .menu-book-link:focus-visible .menu-book-label { opacity: 1; transform: translateY(0); }
            @media (hover: hover) {
              .menu-book-link:hover .menu-book {
                transform: scale(1.1);
                filter: drop-shadow(0 3px 9px rgba(212,175,55,.3));
              }
              .menu-book-link:hover .menu-book-label { opacity: 1; transform: translateY(0); }
            }
            @media (max-width: 1100px) and (min-width: 761px) {
              .menu-book-link { left: 43%; width: 85px; }
            }
            @media (max-width: 760px) {
              .menu-book-link {
                position: static;
                transform: none;
                width: 64px;
                min-height: 64px;
                flex-shrink: 0;
                margin-left: auto;
              }
              .menu-book-icon { width: 42px; height: 31px; }
              .menu-book-icon { width: 42px; height: 31px; }
              
            }
            @media (hover: none) {
              .menu-book-label { opacity: 1; transform: none; }
            }
            @media (prefers-reduced-motion: reduce) {
              .menu-book, .menu-book-label { transition: none; }
              .menu-book-link:hover .menu-book,
              .menu-book-link:focus-visible .menu-book { transform: none; }
            }
          `}</style>

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