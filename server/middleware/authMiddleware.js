const jwt = require('jsonwebtoken');

const girisKontrol = (req, res, next) => {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return res.status(401).json({ mesaj: 'Yetkisiz erişim' });
    }

    const token = authHeader.split(' ')[1];

    try {
        const dogrulanmis = jwt.verify(token, process.env.JWT_SECRET);
        req.adminId = dogrulanmis.id;
        next();
    } catch (hata) {
        return res.status(401).json({ mesaj: 'Geçersiz veya süresi dolmuş oturum' });
    }
};

module.exports = girisKontrol;