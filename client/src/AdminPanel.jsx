import { useEffect, useState } from 'react'

function AdminPanel() {
  const [rezervasyonlar, setRezervasyonlar] = useState([])
  const [yukleniyor, setYukleniyor] = useState(true)
  const [hata, setHata] = useState('')
    const [aktifSekme, setAktifSekme] = useState('beklemede')

  const rezervasyonlariGetir = async () => {
    setYukleniyor(true)
    try {
      const token = localStorage.getItem('adminToken')
      const response = await fetch(`${import.meta.env.VITE_API_URL}/admin/rezervasyonlar`, {
        headers: { Authorization: `Bearer ${token}` }
      })

      if (!response.ok) {
        setHata('Rezervasyonlar alınamadı')
        setYukleniyor(false)
        return
      }

      const data = await response.json()
      setRezervasyonlar(data)
      setYukleniyor(false)
    } catch (err) {
      setHata('Sunucuya bağlanılamadı')
      setYukleniyor(false)
    }
  }

  useEffect(() => {
    rezervasyonlariGetir()
  }, [])

  const durumGuncelle = async (id, yeniDurum) => {
    try {
      const token = localStorage.getItem('adminToken')
      await fetch(`${import.meta.env.VITE_API_URL}/admin/rezervasyonlar/${id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({ durum: yeniDurum })
      })
      rezervasyonlariGetir()
    } catch (err) {
      setHata('Güncelleme başarısız')
    }
  }

  const cikisYap = () => {
    localStorage.removeItem('adminToken')
    window.location.reload()
  }

  if (yukleniyor) return <div className="admin-panel-wrap"><p>Yükleniyor...</p></div>

  return (
    <div className="admin-panel-wrap">
      <div className="admin-panel-header">
        <h2>Rezervasyonlar</h2>
                <button className="admin-cikis-btn" onClick={cikisYap}>Çıkış Yap</button>
      </div>

      <div className="admin-sekme-bar">
        <button
          className={`admin-sekme admin-sekme-beklemede${aktifSekme === 'beklemede' ? ' aktif' : ''}`}
          onClick={() => setAktifSekme('beklemede')}
        >
          Bekleyenler
        </button>
        <button
          className={`admin-sekme admin-sekme-onaylandi${aktifSekme === 'onaylandi' ? ' aktif' : ''}`}
          onClick={() => setAktifSekme('onaylandi')}
        >
          Onaylananlar
        </button>
        <button
          className={`admin-sekme admin-sekme-iptal${aktifSekme === 'iptal' ? ' aktif' : ''}`}
          onClick={() => setAktifSekme('iptal')}
        >
          İptal Edilenler
        </button>
      </div>

      {hata && <p className="admin-giris-hata">{hata}</p>}

            <div className="admin-rezervasyon-list">
        {rezervasyonlar.filter((r) => r.durum === aktifSekme).map((r) => (
          <div className="admin-rezervasyon-card" key={r._id}>
            <div className="admin-rezervasyon-bilgi">
              <p><strong>{r.adSoyad}</strong> — {r.telefon}</p>
              <p>{r.tarih} — {r.saat} — {r.kisiSayisi} kişi</p>
              {r.not && <p className="admin-rezervasyon-not">Not: {r.not}</p>}
              <span className={`admin-durum-etiket admin-durum-${r.durum}`}>{r.durum}</span>
            </div>
            <div className="admin-rezervasyon-aksiyon">
              <button onClick={() => durumGuncelle(r._id, 'onaylandi')}>Onayla</button>
              <button onClick={() => durumGuncelle(r._id, 'iptal')}>İptal Et</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default AdminPanel