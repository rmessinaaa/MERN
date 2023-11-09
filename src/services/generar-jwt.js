const jwt = require('jsonwebtoken'); 
require('dotenv').config();

function createAccessToken(payload) {
  return new Promise((resolve, reject) => {
    jwt.sign(
      payload,
      process.env.TOKENSECRET,
      {
        expiresIn: "1d"
      },
      (err, token) => {
        if (err) {
          console.error(err); 
        } else {
          resolve(token);
        }
      }
    );
  });
}

module.exports = createAccessToken;

