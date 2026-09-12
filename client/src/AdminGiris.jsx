import { useState } from 'react'

function AdminGiris({ onGirisBasarili }) {
  const [kullaniciAdi, setKullaniciAdi] = useState('')
  const [sifre, setSifre] = useState('')
  const [hata, setHata] = useState('')
  const [yukleniyor, setYukleniyor] = useState(false)

  const handleSubmit = async (event) => {
    event.preventDefault()
    setHata('')
    setYukleniyor(true)

    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/admin/giris`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ kullaniciAdi, sifre })
      })

      const data = await response.json()

      if (!response.ok) {
        setHata(data.mesaj || 'Giriş başarısız')
        setYukleniyor(false)
        return
      }

      localStorage.setItem('adminToken', data.token)
      onGirisBasarili()
    } catch (err) {
      setHata('Sunucuya bağlanılamadı')
      setYukleniyor(false)
    }
  }

  return (
    <div className="admin-giris-wrap">
      <div className="admin-giris-brand">
        <span className="brand-emblem" aria-hidden="true">M</span>
        <span className="brand-text">
          <span className="brand-top">MEŞHUR ADANA</span>
          <span className="brand-bottom">KEBABÇISI</span>
        </span>
      </div>
      <form className="admin-giris-form" onSubmit={handleSubmit}>
        <h2>Yönetim Girişi</h2>
        <input
          type="text"
          placeholder="Kullanıcı Adı"
          value={kullaniciAdi}
          onChange={(e) => setKullaniciAdi(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Şifre"
          value={sifre}
          onChange={(e) => setSifre(e.target.value)}
          required
        />
        {hata && <p className="admin-giris-hata">{hata}</p>}
        <button type="submit" disabled={yukleniyor}>
          {yukleniyor ? 'Giriş yapılıyor...' : 'Giriş Yap'}
        </button>
      </form>
    </div>
  )
}

export default AdminGiris