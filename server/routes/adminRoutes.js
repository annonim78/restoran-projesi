const express = require('express');
const router = express.Router();
const { girisYap, rezervasyonlariGetir, rezervasyonDurumGuncelle } = require('../controllers/adminController');
const girisKontrol = require('../middleware/authMiddleware');

router.post('/giris', girisYap);
router.get('/rezervasyonlar', girisKontrol, rezervasyonlariGetir);
router.patch('/rezervasyonlar/:id', girisKontrol, rezervasyonDurumGuncelle);

module.exports = router;