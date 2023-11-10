const {Router} = require('express');
const {authRequired} = require('../middlewares/validate.Token');
const {getCampanas, getCampana, createCampana, updateCampana, deleteCampana} = require('../controllers/task.controller');


const router = Router();

router.get('/campanas', authRequired, getCampanas);
router.get("/campanas/:id", authRequired, getCampana);
router.post("/campanas", authRequired, createCampana);
router.delete("/campanas/:id", authRequired, deleteCampana);
router.put("/campanas/:id", authRequired, updateCampana);

module.exports = router;