const express = require('express');
const router = express.Router();
const { rezervasyonOlustur } = require('../controllers/rezervasyonController');

router.post('/', rezervasyonOlustur);

module.exports = router;