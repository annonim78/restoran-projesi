import { useState } from 'react'

function Rezervasyon() {
  const [form, setForm] = useState({
    adSoyad: '',
    telefon: '',
    kisiSayisi: '',
    tarih: '',
    saat: '',
    not: ''
  })
  const [mesaj, setMesaj] = useState('')
  const [gonderiliyor, setGonderiliyor] = useState(false)

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setGonderiliyor(true)
    setMesaj('')

    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/rezervasyon`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      })
      const data = await response.json()

      if (response.ok) {
        setMesaj(data.mesaj)
        setForm({ adSoyad: '', telefon: '', kisiSayisi: '', tarih: '', saat: '', not: '' })
      } else {
        setMesaj(data.hata)
      }
    } catch (hata) {
      setMesaj('Sunucuya bağlanırken bir hata oluştu')
    }

    setGonderiliyor(false)
  }

  return (
    <section id="rezervasyon" className="reservation-section">
      <div className="container">
        <div className="section-heading">
          <p className="eyebrow">MASA AYIRT</p>
          <h2>Rezervasyon Yap</h2>
        </div>

        <form className="reservation-form" onSubmit={handleSubmit}>
          <input type="text" name="adSoyad" placeholder="Ad Soyad" value={form.adSoyad} onChange={handleChange} required />
          <input type="tel" name="telefon" placeholder="Telefon" value={form.telefon} onChange={handleChange} required />
          <input type="number" name="kisiSayisi" placeholder="Kişi Sayısı" value={form.kisiSayisi} onChange={handleChange} required />
          <input type="date" name="tarih" value={form.tarih} onChange={handleChange} required />
          <input type="time" name="saat" value={form.saat} onChange={handleChange} required />
          <textarea name="not" placeholder="Notunuz (opsiyonel)" value={form.not} onChange={handleChange} rows="3"></textarea>
          <button type="submit" className="button button-gold" disabled={gonderiliyor}>
            {gonderiliyor ? 'Gönderiliyor...' : 'Rezervasyon Talebi Gönder'}
          </button>
        </form>

        {mesaj && <p className="reservation-mesaj">{mesaj}</p>}
      </div>
    </section>
  )
}

export default Rezervasyon