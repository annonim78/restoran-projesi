require('dotenv').config();
const mongoose = require('mongoose');
const argon2 = require('argon2');
const Admin = require('./models/Admin');

async function seed() {
    await mongoose.connect(process.env.MONGO_URI);

    const kullaniciAdi = 'admin';
    const sifre = 'admin';

    const mevcut = await Admin.findOne({ kullaniciAdi });
    if (mevcut) {
        console.log('Bu kullanıcı zaten var');
        process.exit();
    }

    const sifreHash = await argon2.hash(sifre);
    await Admin.create({ kullaniciAdi, sifreHash });

    console.log('Admin oluşturuldu:', kullaniciAdi);
    process.exit();
}

seed();