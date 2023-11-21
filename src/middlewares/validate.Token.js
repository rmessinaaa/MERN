const jwt = require('jsonwebtoken');

const authRequired = (req, res, next) => {
  const token = req.cookies.token || req.headers.acces_token

  if (!token) {
    return res.status(401).json({ message: "No token, autorización denegada" });
  }
  
  jwt.verify(token, process.env.TOKENSECRET, (err, user) => {
    if (err) {
      return res.status(401).json({ message: "Token inválido" });
    }
    req.user = user; 
    next();
  });
};

module.exports = { authRequired };