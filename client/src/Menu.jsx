import { useEffect, useRef } from 'react'
import corbaGorsel from './assets/menu/corba.jpg'
import mezeGorsel from './assets/menu/meze.jpg'
import kebapGorsel from './assets/menu/kebap.jpg'
import kofteGorsel from './assets/menu/kofte.jpg'
import tatliGorsel from './assets/menu/tatli.jpg'

function Menu() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
          }
        })
      },
      { threshold: 0.15 }
    )

    const items = sectionRef.current.querySelectorAll('.menu-reveal')
    items.forEach((item) => observer.observe(item))

    return () => observer.disconnect()
  }, [])

    const kategoriler = [
    {
      ad: 'Çorbalar',
      numara: '01',
      gorsel: corbaGorsel,
      urunler: [
        { isim: 'Mercimek Çorbası', aciklama: 'Geleneksel kırmızı mercimek çorbası', fiyat: '90' },
        { isim: 'Ezogelin Çorbası', aciklama: 'Bulgurlu, nane ve pul biberli', fiyat: '90' },
        { isim: 'İşkembe Çorbası', aciklama: 'Sarımsaklı sirke ile servis edilir', fiyat: '120' }
      ]
    },
    {
      ad: 'Mezeler',
      numara: '02',
      gorsel: mezeGorsel,
      urunler: [
        { isim: 'Humus', aciklama: 'Zeytinyağlı, közlenmiş nohut ezmesi', fiyat: '180' },
        { isim: 'Acılı Ezme', aciklama: 'Domates, biber, ceviz, nar ekşili', fiyat: '150' },
        { isim: 'Patlıcan Salata', aciklama: 'Közlenmiş patlıcan, sarımsaklı yoğurt', fiyat: '170' },
        { isim: 'Çoban Salata', aciklama: 'Domates, salatalık, biber, soğan', fiyat: '160' },
        { isim: 'Cacık', aciklama: 'Salatalıklı, naneli yoğurt', fiyat: '140' }
      ]
    },
    {
      ad: 'Kebaplar & Dürümler',
      numara: '03',
      gorsel: kebapGorsel,
      urunler: [
        { isim: 'Adana Kebap', aciklama: 'Acılı, el yapımı kıyma kebabı', fiyat: '480' },
        { isim: 'Urfa Kebap', aciklama: 'Acısız, yumuşak dokulu kebap', fiyat: '480' },
        { isim: 'Tek Lavaş Adana Dürüm', aciklama: 'Tek kat lavaş, közlenmiş sebzeli', fiyat: '380' },
        { isim: 'Çift Lavaş Adana Dürüm', aciklama: 'Çift kat lavaş, bol lahmacunlu', fiyat: '440' },
        { isim: 'Beyti Sarma', aciklama: 'Lavaş içinde sarılmış, yoğurtlu', fiyat: '460' },
        { isim: 'Kuşbaşı Şiş', aciklama: 'Özenle marine edilmiş dana kuşbaşı', fiyat: '520' },
        { isim: 'Tavuk Şiş', aciklama: 'Marine edilmiş tavuk göğsü şiş', fiyat: '400' }
      ]
    },
    {
      ad: 'Köfteler',
      numara: '04',
      gorsel: kofteGorsel,
      urunler: [
        { isim: 'Izgara Köfte', aciklama: 'Geleneksel tarif, közde pişirilir', fiyat: '420' },
        { isim: 'İçli Köfte', aciklama: 'Bulgur kabuğu, kıymalı iç harç', fiyat: '380' },
        { isim: 'Kaşarlı Köfte', aciklama: 'Eritilmiş kaşar ile servis edilir', fiyat: '450' }
      ]
    },
    {
      ad: 'Tatlılar',
      numara: '05',
      gorsel: tatliGorsel,
      urunler: [
        { isim: 'Baklava', aciklama: 'Antep fıstıklı, şerbetli', fiyat: '220' },
        { isim: 'Künefe', aciklama: 'Sıcak servis, kaymaklı', fiyat: '240' },
        { isim: 'Sütlaç', aciklama: 'Fırında karamelize, soğuk servis', fiyat: '150' }
      ]
    }
  ]

  return (
    <section id="menu" className="menu-section" ref={sectionRef}>
      <div className="container">
        <div className="section-heading menu-reveal">
          <p className="eyebrow">MENÜMÜZ</p>
          <h2>Sofranıza Layık Lezzetler</h2>
        </div>

        <div className="menu-categories">
          {kategoriler.map((kategori) => (
            <div className="menu-category menu-reveal" key={kategori.ad}>
              <div className="menu-category-head">
                <span className="menu-category-num">{kategori.numara}</span>
<h3>{kategori.ad}</h3>
<img className="menu-category-img" src={kategori.gorsel} alt={kategori.ad} />
              
              </div>

              <div className="menu-scroll-wrap">
                <div className="menu-scroll-row">
                  {kategori.urunler.map((urun) => (
                    <div className="menu-card" key={urun.isim}>
                      <h4>{urun.isim}</h4>
                      <p>{urun.aciklama}</p>
                      <span className="menu-card-fiyat">{urun.fiyat}₺</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Menu