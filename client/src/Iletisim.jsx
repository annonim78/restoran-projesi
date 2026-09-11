function Iletisim() {
  return (
    <section id="iletisim" className="contact-section">
      <div className="container contact-layout">
        <div className="contact-info">
          <p className="eyebrow">BİZE ULAŞIN</p>
          <h2>İletişim & Konum</h2>

          <div className="contact-item">
            <span className="contact-label">Adres</span>
            <p>Kışla Caddesi No:14, İlkadım / Samsun</p>
          </div>

          <div className="contact-item">
            <span className="contact-label">Telefon</span>
            <a href="tel:+903622345678">0 (362) 234 56 78</a>
          </div>

          <div className="contact-item">
            <span className="contact-label">Çalışma Saatleri</span>
            <p>Her gün 11:00 – 23:00</p>
          </div>
        </div>

        <div className="contact-map">
          <iframe
            title="Konum"
            src="https://www.google.com/maps?q=Samsun%20%C4%B0lkad%C4%B1m&output=embed"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  )
}

export default Iletisim