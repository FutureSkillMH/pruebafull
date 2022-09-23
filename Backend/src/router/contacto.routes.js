const router = require('express').Router();

const controller = require("../controller/contacto.controller")

router.get('/contacto',controller.contacto)

module.exports = router;