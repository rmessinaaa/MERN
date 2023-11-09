const {Router} = require('express');
const { login, register} = require('../controllers/user.controller');


const router = Router();

router.post('/registro', register);

router.post('/login', login);

module.exports = router;