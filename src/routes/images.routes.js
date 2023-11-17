const {Router} = require('express');
const { sendFile } = require('../controllers/image.controller.js');
const {authRequired} = require('../middlewares/validate.Token.js');

const router = Router();

router.post('/imagenes', authRequired, sendFile );

module.exports = router;