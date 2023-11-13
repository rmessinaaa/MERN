const {Router} = require('express');
const { login, register, logout, profile, updateProfile} = require('../controllers/user.controller');
const {authRequired} = require('../middlewares/validate.Token.js');
const {validateSchema} = require('../middlewares/validator.middleware.js')
const {registerSchema, loginSchema} = require('../Schemas/auth.schemas.js')


const router = Router();

router.post('/registro',validateSchema(registerSchema), register);

router.post('/login', validateSchema(loginSchema),login);

router.post('/logout', logout);

router.get("/profile/:id", authRequired,  profile);

router.put("/profile/:id", authRequired,  updateProfile);

module.exports = router;