const jwt = require('jsonwebtoken');
require('dotenv').config();

const createAccessToken = ({ id = "", username ="", email ="", rol="" } = {} ) => {
  return new Promise((resolve, reject) => {
    const payload = { id, username, email, rol } //inclusion de atributos del usuario para codificarlos en el token

    jwt.sign(
      payload,
      process.env.TOKENSECRET,
      {
        expiresIn: "1d"
      },
      (err, token) => {
        if (err) {
          console.log(err);
          reject("No se pudo generar el token"); 
        } else {
          resolve(token);
        }
      }
    );
  });
}
module.exports = createAccessToken;
