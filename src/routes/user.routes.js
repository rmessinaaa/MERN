const {Router} = require('express');
const { login, register, logout, profile} = require('../controllers/user.controller');
const {authRequired} = require('../middlewares/validate.Token.js');


const router = Router();

router.post('/registro', register);

router.post('/login', login);

router.post('/logout', logout);

router.get("/profile", authRequired,  profile);

module.exports = router;