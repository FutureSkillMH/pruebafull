const router = require('express').Router();

const controller = require('../controller/contacto.controller2')



router.get('/data',controller.database)
router.post('/data',controller.cut)
router.get('/views/edit/:id', controller.edit);
router.post('/views/edit/:id', controller.update);

module.exports = router;