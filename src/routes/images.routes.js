const {Router} = require('express');
const { uploadImage , getImage, deleteImage} = require('../controllers/image.controller.js');
const {authRequired} = require('../middlewares/validate.Token.js');

const router = Router();

router.post('/uploads', authRequired, uploadImage );

router.get('/uploads', authRequired, getImage );

router.delete('/uploads/:id', authRequired, deleteImage);

module.exports = router;