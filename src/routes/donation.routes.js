const {Router} = require('express');
const { createDonation} = require('../controllers/donation.controller.js');
const {authRequired} = require('../middlewares/validate.Token.js');


const router = Router();

router.post('/donation',authRequired, createDonation);

module.exports = router;