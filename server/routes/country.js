const express = require('express');
const router = express.Router();
const Controller = require("../controllers/country");
const authentication = require('../middlewares/authentication')

router.use(authentication)
router.get('/', Controller.findAll)

module.exports = router