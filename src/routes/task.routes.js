const {Router} = require('express');
const {authRequired} = require('../middlewares/validate.Token');
const {getCampanas, getAllCampanas, getCampana, createCampana, updateCampana, deleteCampana} = require('../controllers/task.controller');
const {createTaskSchema} = require('../Schemas/task.schema');
const {validateSchema} = require('../middlewares/validator.middleware.js')


const router = Router();

router.get('/campanas' ,authRequired,  getCampanas);
router.get('/allcampanas', getAllCampanas);
router.get("/campanas/:id",  authRequired, getCampana);
router.post("/campanas",  validateSchema(createTaskSchema),authRequired,  createCampana);
router.delete("/campanas/:id", authRequired,  deleteCampana);
router.put("/campanas/:id",  authRequired, updateCampana);

module.exports = router;