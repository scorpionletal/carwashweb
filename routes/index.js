const {Router} = require('express');
const rutasController = require('../controllers/rutasController');
const router = Router();

router.get('/',rutasController.indexGet);
router.get('/products',rutasController.getdata);
router.get('/home',rutasController.getHome);
router.get('/services',rutasController.getServices);
router.get('/locations',rutasController.getLocations);
router.get('/about',rutasController.getAbout);
router.get('/Contact',rutasController.getContact);

module.exports = router;
