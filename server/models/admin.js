const mongoose = require('mongoose');

const AdminSchema = new mongoose.Schema({
    kullaniciAdi: { type: String, required: true, unique: true },
    sifreHash: { type: String, required: true }
});

module.exports = mongoose.model('Admin', AdminSchema);