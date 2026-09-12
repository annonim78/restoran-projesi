const argon2 = require('argon2');
const jwt = require('jsonwebtoken');
const Admin = require('../models/Admin');
const Rezervasyon = require('../models/Rezervasyon');

const girisYap = async (req, res) => {
    try {
        const { kullaniciAdi, sifre } = req.body;
        const admin = await Admin.findOne({ kullaniciAdi });

        if (!admin) {
            return res.status(401).json({ mesaj: 'Kullanıcı adı veya şifre hatalı' });
        }

        const dogruMu = await argon2.verify(admin.sifreHash, sifre);
        if (!dogruMu) {
            return res.status(401).json({ mesaj: 'Kullanıcı adı veya şifre hatalı' });
        }

        const token = jwt.sign({ id: admin._id }, process.env.JWT_SECRET, { expiresIn: '7d' });
        res.json({ token });
    } catch (hata) {
        console.log(hata);
        res.status(500).json({ mesaj: 'Sunucu hatası' });
    }
};

const rezervasyonlariGetir = async (req, res) => {
    try {
        const rezervasyonlar = await Rezervasyon.find().sort({ olusturmaTarihi: -1 });
        res.json(rezervasyonlar);
    } catch (hata) {
        res.status(500).json({ mesaj: 'Sunucu hatası' });
    }
};

const rezervasyonDurumGuncelle = async (req, res) => {
    try {
        const { id } = req.params;
        const { durum } = req.body;

        if (!['beklemede', 'onaylandi', 'iptal'].includes(durum)) {
            return res.status(400).json({ mesaj: 'Geçersiz durum' });
        }

        const rezervasyon = await Rezervasyon.findByIdAndUpdate(id, { durum }, { new: true });
        res.json(rezervasyon);
    } catch (hata) {
        res.status(500).json({ mesaj: 'Sunucu hatası' });
    }
};

module.exports = { girisYap, rezervasyonlariGetir, rezervasyonDurumGuncelle };