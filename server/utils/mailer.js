const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    }
});

const rezervasyonMailiGonder = async (rezervasyon) => {
    await transporter.sendMail({
        from: process.env.EMAIL_USER,
        to: process.env.EMAIL_USER,
        subject: 'Yeni Rezervasyon Talebi',
        html: `
            <h2>Yeni Rezervasyon</h2>
            <p><strong>Ad Soyad:</strong> ${rezervasyon.adSoyad}</p>
            <p><strong>Telefon:</strong> ${rezervasyon.telefon}</p>
            <p><strong>Kişi Sayısı:</strong> ${rezervasyon.kisiSayisi}</p>
            <p><strong>Tarih:</strong> ${rezervasyon.tarih}</p>
            <p><strong>Saat:</strong> ${rezervasyon.saat}</p>
            <p><strong>Not:</strong> ${rezervasyon.not || '-'}</p>
        `
    });
};

module.exports = rezervasyonMailiGonder;