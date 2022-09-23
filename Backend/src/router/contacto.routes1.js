const router = require('express').Router();

const controller = require("../controller/contacto.controller1")

router.get('/contacto1',controller.contacto1)

module.exports = router;