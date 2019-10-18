const {Router} = require('express');
const rutasController = require('../controllers/rutasController');
const router = Router();

router.get('/',rutasController.indexGet);
router.get('/products',rutasController.getdata);

module.exports = router;
