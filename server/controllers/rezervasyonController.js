const Rezervasyon = require('../models/Rezervasyon');
const rezervasyonMailiGonder = require('../utils/mailer');

const rezervasyonOlustur = async (req, res) => {
    try {
        if (!req.body.adSoyad || !req.body.telefon || !req.body.kisiSayisi || !req.body.tarih || !req.body.saat) {
            return res.status(400).json({ hata: 'Tüm alanları doldurmalısınız' });
        }

        const yeniRezervasyon = new Rezervasyon({
            adSoyad: req.body.adSoyad,
            telefon: req.body.telefon,
            kisiSayisi: req.body.kisiSayisi,
            tarih: req.body.tarih,
            saat: req.body.saat,
            not: req.body.not
        });

        await yeniRezervasyon.save();

        rezervasyonMailiGonder(yeniRezervasyon).catch(err => console.error('Mail gönderilemedi:', err.message));

        res.status(201).json({ mesaj: 'Rezervasyon talebiniz alındı' });
    } catch (hata) {
        res.status(500).json({ hata: 'Rezervasyon kaydedilirken hata oluştu' });
    }
};

module.exports = { rezervasyonOlustur };