const express = require('express');
const router = express.Router();
const Country = require('./country')
const Report = require("./report");
const User = require('./user')

router.use('/', User)
router.use('/countries', Country)
router.use("/reports", Report);
module.exports = router