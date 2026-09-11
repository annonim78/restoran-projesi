const mongoose = require('mongoose');

const RezervasyonSchema = new mongoose.Schema({
    adSoyad: { type: String, required: true },
    telefon: { type: String, required: true },
    kisiSayisi: { type: Number, required: true },
    tarih: { type: String, required: true },
    saat: { type: String, required: true },
    not: { type: String },
    olusturmaTarihi: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Rezervasyon', RezervasyonSchema);