// En verifyToken.js
const jwt = require('jsonwebtoken');
require('dotenv').config();

const secretKey = process.env.TOKENSECRET;

const verifyToken = (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({ error: 'Token no proporcionado' });
  }

  jwt.verify(token.replace('Bearer ', ''), secretKey, (err, decoded) => {
    if (err) {
      console.error('Error al verificar el token:', err);
      return res.status(401).json({ error: 'Token no válido' });
    }

    req.user = decoded;
    next();
  });
};

module.exports = verifyToken;