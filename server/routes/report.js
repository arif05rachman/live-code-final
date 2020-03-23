const express = require('express');
const router = express.Router();
const Controller = require("../controllers/report");
const authentication = require('../middlewares/authentication')

router.use(authentication)
router.get('/', Controller.findAll)
router.post('/', Controller.create)
router.delete('/:id', Controller.destroy)

module.exports = router